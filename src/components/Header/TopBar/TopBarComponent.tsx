import './TopBarComponent.css';
import { Phone } from 'lucide-react';

function TopBarComponent() {
  return (
    <div className='topbar'>
      <div className='container topbar_inner'>
        <p className='topbar_text'>
          Licensed & Insured Electrical Contractor — Serving West LA & Beyond
        </p>
        <div className='topbar_contact'>
          <Phone className='topbar_icon' />
          <a href='tel:+13106664752' className='topbar_phone'>
            (310) 666-4752
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBarComponent;
