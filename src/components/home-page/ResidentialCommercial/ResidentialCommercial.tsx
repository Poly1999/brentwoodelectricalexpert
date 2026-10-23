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
              <h3>Residential Electrical Services</h3>
              <p>
                Complete home electrical modernization, including{' '}
                <NavLink to='/panel-upgrades-service'>
                  200A panel upgrades
                </NavLink>
                ,{' '}
                <NavLink to='/ev-chargers-service'>
                  EV charging stations
                </NavLink>
                ,{' '}
                <NavLink to='/smart-home-service'>
                  Lutron smart lighting
                </NavLink>
                ,{' '}
                <NavLink to='/light-fixtures-service'>
                  recessed LED layouts
                </NavLink>
                , and rapid{' '}
                <NavLink to='/troubleshooting-service'>
                  fault diagnostics
                </NavLink>{' '}
                for West LA homeowners.
              </p>
              <NavLink to='/residential-service' className='rescom_button'>
                Residential Services
                <ArrowRight />
              </NavLink>
            </div>
          </div>

          <div className='rescom_card'>
            <img src={CommercialImage} alt='Commercial Electrical' />
            <div className='rescom_overlay'></div>
            <div className='rescom_content'>
              <h3>Commercial & Multi-Unit Electrical</h3>
              <p>
                Three-phase power distribution, multi-family meter stack
                replacements,{' '}
                <NavLink to='/construction-service'>
                  Title 24 tenant improvements
                </NavLink>
                , dedicated equipment circuits, and{' '}
                <NavLink to='/troubleshooting-service'>
                  emergency ballast/breaker servicing
                </NavLink>{' '}
                for Westside businesses and HOAs.
              </p>
              <NavLink to='/Commercial-service' className='rescom_button'>
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
