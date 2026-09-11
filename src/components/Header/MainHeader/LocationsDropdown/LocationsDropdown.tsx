import { ArrowRight, ChevronDown } from 'lucide-react';
import './LocationsDropdown.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function LocationsDropdown() {
  const [isOpenDown, setIsOpenDown] = useState(false);

  const handleClickDown = () => {
    setIsOpenDown(!isOpenDown);
  };

  return (
    <div
      className='locationdropdown'
      onMouseEnter={() => setIsOpenDown(true)}
      onMouseLeave={() => setIsOpenDown(false)}
    >
      <button className='locationdropdown_button' onClick={handleClickDown}>
        Locations
        <ChevronDown
          className={isOpenDown ? 'locationdropdown_chevron_open' : ''}
        />
      </button>
      {isOpenDown === true ? (
        <div className='locationdropdown_panel'>
          <NavLink
            to='/all-locations'
            className='locationdropdown_all'
            onClick={() => setIsOpenDown(false)}
          >
            All Locations <ArrowRight />
          </NavLink>
          <ul className='locationdropdown_list'>
            <li>
              <NavLink
                to='/brentwood'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Brentwood
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/bel-air'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Bel Air
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/beverly-glen'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Beverly Glen
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/mar-vista'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Mar Vista
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/westwood'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Westwood
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/culver-city'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Culver City
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/cheviot-hills'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Cheviot Hills
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/sherman-oaks'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Sherman Oaks
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/hermosa-beach'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Hermosa Beach
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/santa-monica'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Santa Monica
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/beverly-hills'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Beverly Hills
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/beverly-grove'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Beverly Grove
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/west-hollywood'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                West Hollywood
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/sawtelle'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Sawtelle
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/century-city'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Century City
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/marina-del-rey'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Marina Del Rey
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/simi-valley'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Simi Valley
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/manhattan-beach'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Manhattan Beach
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/pacific-palisades'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Pacific Palisades
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/beverly-crest'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Beverly Crest
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/beverlywood'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Beverlywood
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/west-los-angeles'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                West Los Angeles
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/venice'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Venice
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/playa-vista'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Playa Vista
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/calabasas'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Calabasas
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/pasadena'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Pasadena
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/redondo-beach'
                className='locationdropdown_link'
                onClick={() => setIsOpenDown(false)}
              >
                Redondo Beach
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default LocationsDropdown;
