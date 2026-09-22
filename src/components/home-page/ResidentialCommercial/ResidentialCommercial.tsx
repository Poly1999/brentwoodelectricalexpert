import './ResidentialCommercial.css';
import { ArrowRight } from 'lucide-react';
import ResidentialImage from '../../../assets/lightfixture-2611.webp';
import CommercialImage from '../../../assets/kitchen-rewire.webp';
import { NavLink } from 'react-router-dom';

function ResidentialCommercial() {
  return (
    <div className='rescom'>
      <div className='container'>
        <div className='rescom_header'>
          <h2>Residential & Commercial Electrical</h2>
          <p>
            Whether it's your home or business, we deliver the same level of
            professionalism and quality.
          </p>
        </div>

        <div className='rescom_grid'>
          <div className='rescom_card'>
            <img src={ResidentialImage} alt='Residential Electrical' />
            <div className='rescom_overlay'></div>
            <div className='rescom_content'>
              <h3>Residential</h3>
              <p>
                <NavLink to='/services/panel-upgrades'>
                  Panel upgrades
                </NavLink>
                , <NavLink to='/services/light-fixtures'>lighting</NavLink>,{' '}
                <NavLink to='/services/outlets-gfci'>outlets</NavLink>,{' '}
                <NavLink to='/services/ev-charger-installation'>
                  EV chargers
                </NavLink>
                , <NavLink to='/services/smart-home'>smart home</NavLink>,{' '}
                <NavLink to='/services/troubleshooting'>
                  troubleshooting
                </NavLink>
                , and more for homeowners across West LA.
              </p>
              <NavLink to='/services/residential' className='rescom_button'>
                Residential Services
                <ArrowRight />
              </NavLink>
            </div>
          </div>

          <div className='rescom_card'>
            <img src={CommercialImage} alt='Commercial Electrical' />
            <div className='rescom_overlay'></div>
            <div className='rescom_content'>
              <h3>Commercial</h3>
              <p>
                Tenant improvements,
                <NavLink to='/services/lighting-retrofits'>
                  lighting retrofits
                </NavLink>
                ,{' '}
                <NavLink to='/services/construction'>
                  electrical buildouts
                </NavLink>
                , and ongoing maintenance for offices, retail, and
                restaurants.
              </p>
              <NavLink to='/services/commercial' className='rescom_button'>
                Commercial Services
                <ArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidentialCommercial;
