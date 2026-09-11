import './MainHeader.css';
import Logo from '../../../assets/logo.svg';
import { Menu, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import ServicesDropdown from './ServicesDropdown/ServicesDropdown';
import LocationsDropdown from './LocationsDropdown/LocationsDropdown';

function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='mainheader_wrapper'>
      <div className='container'>
        <div className='mainheader_inner'>
          <img src={Logo} alt='Company Logo' className='logo' />
          <nav className='mainheader_nav'>
            <NavLink
              to='/'
              className='mainheader_link'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </NavLink>
            <NavLink to='/about' className='mainheader_link'>
              About
            </NavLink>
            <ServicesDropdown />
            <LocationsDropdown />
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
          <button className='mainheader_burger' onClick={handleOpenMenu}>
            <Menu />
          </button>
        </div>
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}

export default MainHeader;
