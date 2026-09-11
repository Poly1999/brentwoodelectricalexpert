import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ServicesDropdown.css';

function ServicesDropdown() {
  const [isOpenDown, setIsOpenDown] = useState(false);

  const handleOpenDown = () => {
    setIsOpenDown(!isOpenDown);
  };

  return (
    <div
      className='servicesdropdown'
      onMouseEnter={() => setIsOpenDown(true)}
      onMouseLeave={() => setIsOpenDown(false)}
    >
      <button className='servicesdropdown_button' onClick={handleOpenDown}>
        Services
        <ChevronDown
          className={isOpenDown ? 'servicesdropdown_chevron_open' : ''}
        />
      </button>
      {isOpenDown === true ? (
        <div className='servicesdropdown_panel'>
          <NavLink
            to='/all-services'
            className='servicesdropdown_all'
            onClick={() => setIsOpenDown(false)}
          >
            All Services <ArrowRight />
          </NavLink>
          <ul className='servicesdropdown_list'>
            <li>
              <NavLink
                to='/panel-upgrades-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Panel Upgrades
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/ev-chargers-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                EV Chargers
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/construction-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Construction
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/subpanels-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Subpanels
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/security-cameras-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Security Cameras
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/security-lighting-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Security Lighting
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/outlets&GFCI-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Outlets & GFCI
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/light-fixtures-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Light Fixtures
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/residential-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Residential
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Commercial-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Commercial
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/lighting-design-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Lighting Design
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/smart-home-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Smart Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/troubleshooting-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Troubleshooting
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/remodeling-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Remodeling
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/landscape-lighting-service'
                className='servicesdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Landscape Lighting
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default ServicesDropdown;
