import { NavLink } from 'react-router-dom';
import './HeroServices.css';
import { Phone, FileText } from 'lucide-react';

function HeroServices() {
  return (
    <div className='serviceshero'>
      <div className='container serviceshero_container'>
        <div className='serviceshero_box'>
          <span className='serviceshero_label'>What We Do</span>
          <h1 className='serviceshero_title'>
            Our <span>Electrical Services</span>
          </h1>
          <p className='serviceshero_text'>
            Comprehensive residential and commercial electrical services
            delivered by licensed, insured professionals across West Los
            Angeles.
          </p>

          <div className='serviceshero_buttons'>
            <a href='tel:+13106664752' className='serviceshero_button'>
              <Phone />
              Call (310) 666-4752
            </a>
            <NavLink to='/contact' className='serviceshero_button_secondary'>
              <FileText />
              Get FREE Quote
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroServices;
