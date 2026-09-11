import './ResidentialCommercial.css';
import { ArrowRight } from 'lucide-react';
import ResidentialImage from '../../../assets/lightfixture-2611.webp';
import CommercialImage from '../../../assets/kitchen-rewire.webp';

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
                <a href='/services/panel-upgrades'>Panel upgrades</a>,
                <a href='/services/light-fixtures'>lighting</a>,
                <a href='/services/outlets-gfci'>outlets</a>,
                <a href='/services/ev-charger-installation'>EV chargers</a>,
                <a href='/services/smart-home'>smart home</a>,
                <a href='/services/troubleshooting'>troubleshooting</a>, and
                more for homeowners across West LA.
              </p>
              <a href='/services/residential' className='rescom_button'>
                Residential Services
                <ArrowRight />
              </a>
            </div>
          </div>

          <div className='rescom_card'>
            <img src={CommercialImage} alt='Commercial Electrical' />
            <div className='rescom_overlay'></div>
            <div className='rescom_content'>
              <h3>Commercial</h3>
              <p>
                Tenant improvements,
                <a href='/services/lighting-retrofits'>lighting retrofits</a>,
                <a href='/services/construction'>electrical buildouts</a>, and
                ongoing maintenance for offices, retail, and restaurants.
              </p>
              <a href='/services/commercial' className='rescom_button'>
                Commercial Services
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidentialCommercial;
