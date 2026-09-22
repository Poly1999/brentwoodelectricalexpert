import './FeaturedEVCharger.css';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import EVChargerImage from '../../../assets/ev-charger-1.webp';
import { NavLink } from 'react-router-dom';

function FeaturedEVCharger() {
  return (
    <div className='featuredev'>
      <div className='container featuredev_inner'>
        <div className='featuredev_content'>
          <span className='featuredev_label'>Popular Service</span>
          <h2>EV Charger Installation</h2>
          <p className='featuredev_text'>
            Charge your Tesla, BMW, Rivian, or any electric vehicle at home with
            a professionally installed Level 2 charger. We install Tesla Wall
            Connectors, ChargePoint, JuiceBox, and all major brands.
          </p>

          <div className='featuredev_features'>
            <div className='featuredev_feature'>
              <CheckCircle2 />
              <span>All EV charger brands supported</span>
            </div>
            <div className='featuredev_feature'>
              <CheckCircle2 />
              <span>Panel upgrade included if needed</span>
            </div>
            <div className='featuredev_feature'>
              <CheckCircle2 />
              <span>Clean, concealed wiring</span>
            </div>
            <div className='featuredev_feature'>
              <CheckCircle2 />
              <span>2-4 hour typical installation</span>
            </div>
          </div>

          <NavLink to='/ev-chargers-service' className='featuredev_button'>
            Learn More About EV Charger Installation
            <ArrowRight />
          </NavLink>
        </div>
        <div className='featuredev_image'>
          <img src={EVChargerImage} alt='EV Charger Installation' />
        </div>
      </div>
    </div>
  );
}

export default FeaturedEVCharger;
