import { CheckCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import './RequestServiceForm.css';

interface Contacts {
  name: string;
  phone: string;
  email: string;
  services: string;
  message: string;
  honeypot: string;
}

function RequestServiceForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const [contacts, setContacts] = useState<Contacts>({
    name: '',
    phone: '',
    email: '',
    services: '',
    message: '',
    honeypot: '',
  });

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacts({ ...contacts, name: e.target.value });
  };
  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacts({ ...contacts, phone: e.target.value });
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacts({ ...contacts, email: e.target.value });
  };

  const handleChangeServices = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContacts({ ...contacts, services: e.target.value });
  };
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContacts({ ...contacts, message: e.target.value });
  };
  const handleChangeHoneypot = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacts({ ...contacts, honeypot: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    fetch('http://localhost:5001/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: contacts.name,
        phone: contacts.phone,
        email: contacts.email,
        services: contacts.services,
        message: contacts.message,
      }),
    })
      .then(res => res.json())
      .then(() => {
        setIsSuccess(true);
        setContacts({
          name: '',
          phone: '',
          email: '',
          services: '',
          message: '',
          honeypot: '',
        });
      })
      .catch(() => {
        setError('Something went wrong. Please try again or call us directly.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (isSuccess) {
    return (
      <div className='requestform_left'>
        <div className='requestform_success'>
          <CheckCircle />
          <h3>Thank You!</h3>
          <p>
            Your request has been sent successfully. Our team will get back to
            you shortly.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className='requestform_submit'
          >
            Send Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='requestform_left'>
      <form onSubmit={handleSubmit} className='requestform_form'>
        <input
          type='text'
          name='website'
          value={contacts.honeypot}
          onChange={handleChangeHoneypot}
          className='requestform_honeypot'
          tabIndex={-1}
          autoComplete='off'
        />
        <div className='requestform_row'>
          <input
            placeholder='Your Name *'
            value={contacts.name}
            onChange={handleChangeName}
          />
          <input
            placeholder='Phone Number *'
            value={contacts.phone}
            onChange={handleChangeNumber}
          />
        </div>

        <input
          placeholder='Email Address'
          value={contacts.email}
          onChange={handleChangeEmail}
        />

        <select value={contacts.services} onChange={handleChangeServices}>
          <option value=''>Select a Service</option>
          <option>Electrical Panel Upgrade</option>
          <option>EV Charger Installation</option>
          <option>Electrical Construction</option>
          <option>Subpanel Installation</option>
          <option>Security Cameras</option>
          <option>Security Lighting</option>
          <option>Outlets & GFCI</option>
          <option>Light Fixture Installation</option>
          <option>Residential Electrical</option>
          <option>Commercial Electrical</option>
          <option>Lighting Design</option>
          <option>Smart Home</option>
          <option>Troubleshooting</option>
          <option>Electrical Remodeling</option>
          <option>Other</option>
        </select>

        <textarea
          placeholder='Tell us about your project or issue...'
          value={contacts.message}
          onChange={handleChangeMessage}
          rows={5}
        ></textarea>

        {error ? <p className='requestform_error'>{error}</p> : null}

        <div className='requestform_buttons'>
          <button
            type='submit'
            className='requestform_submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Request Service'}
          </button>
          <a href='tel:+13106664752' className='requestform_call'>
            <Phone />
            Call Now
          </a>
        </div>
      </form>
    </div>
  );
}

export default RequestServiceForm;
