import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import RequestServiceForm from '../../components/Shared/RequestService/RequestServiceForm/RequestServiceForm';
import TrustBadges from '../../components/Shared/TrustBadges/TrustBadges';
import './ContactPage.css';
import FooterMain from '../../components/Footer/FooterMain/FooterMain';

function ContactPage() {
  return (
    <div className='contactpage'>
      <div className='contactpage_hero'>
        <div className='container'>
          <h2>
            Contact <span>Us</span>
          </h2>
          <p>
            Ready to get started? Call us, email us, or fill out the form below
            for a free estimate.
          </p>
        </div>
      </div>

      <TrustBadges />

      <div className='container contactpage_grid'>
        <div className='contactpage_form'>
          <h3>Request Service</h3>
          <RequestServiceForm />
        </div>

        <div className='contactpage_info'>
          <h3>Get In Touch</h3>

          <div className='contactpage_card'>
            <div className='contactpage_icon'>
              <Phone />
            </div>
            <div>
              <p className='contactpage_label'>Phone</p>
              <a href='tel:+13106664752' className='contactpage_value'>
                (310) 666-4752
              </a>
            </div>
          </div>

          <div className='contactpage_card'>
            <div className='contactpage_icon'>
              <Mail />
            </div>
            <div>
              <p className='contactpage_label'>Email</p>

              <a
                href='mailto:info@brentwoodelectricalexpert.com'
                className='contactpage_value'
              >
                info@brentwoodelectricalexpert.com
              </a>
            </div>
          </div>

          <div className='contactpage_card'>
            <div className='contactpage_icon'>
              <MapPin />
            </div>
            <div>
              <p className='contactpage_label'>Service Area</p>
              <p className='contactpage_text'>
                West Los Angeles, Santa Monica, Brentwood, Beverly Hills,
                Pacific Palisades, and{' '}
                <NavLink to='/all-locations'>surrounding communities</NavLink>
              </p>
            </div>
          </div>

          <div className='contactpage_card'>
            <div className='contactpage_icon'>
              <Clock />
            </div>
            <div>
              <p className='contactpage_label'>Hours</p>
              <p className='contactpage_text'>
                Mon–Fri: 7:00 AM – 6:00 PM
                <br />
                Sat: 8:00 AM – 4:00 PM
                <br />
                Emergency service available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterMain />
    </div>
  );
}

export default ContactPage;
