import { ArrowRight, ChevronDown, ChevronUp, Phone, X } from 'lucide-react';
import './MobileMenu.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const handleServicesOpen = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleLocationsOpen = () => {
    setIsLocationOpen(!isLocationOpen);
  };

  const closeServicesLink = () => {
    onClose();
    setIsServicesOpen(false);
  };

  const closeLocationsLink = () => {
    onClose();
    setIsLocationOpen(false);
  };

  return (
    <>
      <div
        className={`mobilemenu_overlay ${isOpen ? 'mobilemenu_overlay_open' : ''}`}
        onClick={onClose}
      ></div>
      <div className={`mobilemenu ${isOpen ? 'mobilemenu_open' : ''}`}>
        <button className='mobilemenu_close' onClick={onClose}>
          <X />
        </button>

        <div>
          <nav className='mobilemenu_nav'>
            <NavLink
              to='/'
              className='mobilemenu_link'
              onClick={() => {
                onClose();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </NavLink>
            <NavLink to='/about' className='mobilemenu_link' onClick={onClose}>
              About
            </NavLink>
            <button
              className='mobilemenu_accordion_button'
              onClick={handleServicesOpen}
            >
              Services
              {isServicesOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isServicesOpen ? (
              <div>
                <NavLink
                  to='/all-services'
                  className='servicesmobilemenu_all'
                  onClick={closeServicesLink}
                >
                  All Services <ArrowRight />
                </NavLink>
                <ul className='servicesmobilemenu_list'>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/panel-upgrades-service'
                      className='servicesmobilemenu_link'
                    >
                      Panel Upgrades
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/ev-chargers-service'
                      className='servicesmobilemenu_link'
                    >
                      EV Chargers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/construction-service'
                      className='servicesmobilemenu_link'
                    >
                      Construction
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/subpanels-service'
                      className='servicesmobilemenu_link'
                    >
                      Subpanels
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/security-cameras-service'
                      className='servicesmobilemenu_link'
                    >
                      Security Cameras
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/security-lighting-service'
                      className='servicesmobilemenu_link'
                    >
                      Security Lighting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/outlets&GFCI-service'
                      className='servicesmobilemenu_link'
                    >
                      Outlets & GFCI
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/light-fixtures-service'
                      className='servicesmobilemenu_link'
                    >
                      Light Fixtures
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/residential-service'
                      className='servicesmobilemenu_link'
                    >
                      Residential
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/Commercial-service'
                      className='servicesmobilemenu_link'
                    >
                      Commercial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/lighting-design-service'
                      className='servicesmobilemenu_link'
                    >
                      Lighting Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/smart-home-service'
                      className='servicesmobilemenu_link'
                    >
                      Smart Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/troubleshooting-service'
                      className='servicesmobilemenu_link'
                    >
                      Troubleshooting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/remodeling-service'
                      className='servicesmobilemenu_link'
                    >
                      Remodeling
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeServicesLink}
                      to='/landscape-lighting-service'
                      className='servicesmobilemenu_link'
                    >
                      Landscape Lighting
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}
            <button
              className='mobilemenu_accordion_button'
              onClick={handleLocationsOpen}
            >
              Locations
              {isLocationOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isLocationOpen ? (
              <div>
                <NavLink
                  to='/all-locations'
                  className='servicesmobilemenu_all'
                  onClick={closeLocationsLink}
                >
                  All Locations <ArrowRight />
                </NavLink>
                <ul className='servicesmobilemenu_list'>
                  <li>
                    <NavLink
                      onClick={closeLocationsLink}
                      to='/brentwood'
                      className='servicesmobilemenu_link'
                    >
                      Brentwood
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeLocationsLink}
                      to='/santa-monica'
                      className='servicesmobilemenu_link'
                    >
                      Santa Monica
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeLocationsLink}
                      to='/pacific-palisades'
                      className='servicesmobilemenu_link'
                    >
                      Pacific Palisades
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeLocationsLink}
                      to='/bel-air'
                      className='servicesmobilemenu_link'
                    >
                      Bel Air
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeLocationsLink}
                      to='/beverly-hills'
                      className='servicesmobilemenu_link'
                    >
                      Beverly Hills
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeLocationsLink}
                      to='/beverly-crest'
                      className='servicesmobilemenu_link'
                    >
                      Beverly Crest
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}
            <NavLink
              to='/projects'
              className='mobilemenu_link'
              onClick={onClose}
            >
              Projects
            </NavLink>
            <NavLink
              to='/reviews'
              className='mobilemenu_link'
              onClick={onClose}
            >
              Reviews
            </NavLink>
            <NavLink to='/faq' className='mobilemenu_link' onClick={onClose}>
              FAQ
            </NavLink>
            <NavLink to='/blog' className='mobilemenu_link' onClick={onClose}>
              Blog
            </NavLink>
            <NavLink
              to='/contact'
              className='mobilemenu_link'
              onClick={onClose}
            >
              Contact
            </NavLink>
          </nav>
          <a href='tel:+13106664752' className='mobilemenu_call'>
            <Phone />
            Call (310) 666-4752
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
