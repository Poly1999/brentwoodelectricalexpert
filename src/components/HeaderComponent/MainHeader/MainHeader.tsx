import './MainHeader.css';
import Logo from '../../../assets/logo.svg';
import { Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function MainHeader() {
  return (
    <div>
      <div className='container'>
        <div className='mainheader_inner'>
          <img src={Logo} alt='Company Logo' className='logo' />
          <nav className='mainheader_nav'>
            <NavLink to='/' className='mainheader_link'>
              Home
            </NavLink>
            <NavLink to='/about' className='mainheader_link'>
              About
            </NavLink>
            <NavLink to='/services' className='mainheader_link'>
              Services
            </NavLink>
            <NavLink to='/locations' className='mainheader_link'>
              Locations
            </NavLink>
            <NavLink to='/projects' className='mainheader_link'>
              Projects
            </NavLink>
            <NavLink to='/reviews' className='mainheader_link'>
              Reviews
            </NavLink>
            <NavLink to='/faq' className='mainheader_link'>
              FAQ
            </NavLink>
            <NavLink to='/blog' className='mainheader_link'>
              Blog
            </NavLink>
            <NavLink to='/contact' className='mainheader_link'>
              Contact
            </NavLink>
          </nav>
          <a href='tel:+13106664752' className='mainheader_button'>
            <Phone className='mainheader_icon' />
            Call now
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
