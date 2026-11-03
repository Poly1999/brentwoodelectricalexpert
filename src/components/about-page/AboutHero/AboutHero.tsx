import { NavLink } from 'react-router-dom';
import './AboutHero.css';
import { Phone, FileText } from 'lucide-react';

function AboutHero() {
  return (
    <div className='abouthero'>
      <div className='container abouthero_container'>
        <div className='abouthero_box'>
          <span className='abouthero_label'>About Us</span>
          <h1 className='abouthero_title'>
            About <span>Brentwood Electrical Experts</span>
          </h1>
          <p className='abouthero_text'>
            Your trusted licensed electrical contractor serving West Los
            Angeles, Santa Monica, Brentwood, Pacific Palisades, Beverly Hills,
            and surrounding coastal communities.
          </p>

          <div className='abouthero_buttons'>
            <a href='tel:+13106664752' className='abouthero_button'>
              <Phone />
              Call (310) 666-4752
            </a>
            <NavLink to='/contact' className='abouthero_button_secondary'>
              <FileText />
              Get FREE Quote
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
