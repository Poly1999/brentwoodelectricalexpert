import { Phone } from 'lucide-react';
import { useState } from 'react';
import './RequestServiceForm.css';

interface Contacts {
  name: string;
  phone: string;
  email: string;
  services: string;
  about: string;
}

function RequestServiceForm() {
  const [contacts, setContacts] = useState<Contacts>({
    name: '',
    phone: '',
    email: '',
    services: '',
    about: '',
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
  const handleChangeAbout = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContacts({ ...contacts, about: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contacts);
    setContacts({ name: '', phone: '', email: '', services: '', about: '' });
  };

  return (
    <div className='requestform_left'>
      <form onSubmit={handleSubmit} className='requestform_form'>
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
          value={contacts.about}
          onChange={handleChangeAbout}
          rows={5}
        ></textarea>

        <div className='requestform_buttons'>
          <button type='submit' className='requestform_submit'>
            Request Service
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
