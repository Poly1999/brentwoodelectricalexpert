import './FeaturedPanelUpgrades.css';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import PanelImage from '../../../assets/panel-framing.webp';
import { NavLink } from 'react-router-dom';

function FeaturedPanelUpgrades() {
  return (
    <div className='featuredpanel'>
      <div className='container featuredpanel_inner'>
        <div className='featuredpanel_image'>
          <img src={PanelImage} alt='Electrical Panel Upgrades' />
        </div>
        <div className='featuredpanel_content'>
          <span className='featuredpanel_label'>Featured Service</span>
          <h2>Electrical Panel Upgrades</h2>
          <p className='featuredpanel_text'>
            Is your home still running on a 100-amp panel? Upgrade to 200 amps
            and safely power{' '}
            <NavLink to='/ev-chargers-service'>EV chargers</NavLink>, HVAC
            systems,{' '}
            <NavLink to='/smart-home-service'>smart home devices</NavLink>, and
            modern appliances. We handle everything from permits to final
            inspection.
          </p>

          <div className='featuredpanel_features'>
            <div className='featuredpanel_feature'>
              <CheckCircle2 />
              <span>100 to 200 amp upgrades</span>
            </div>
            <div className='featuredpanel_feature'>
              <CheckCircle2 />
              <span>All permits & inspections handled</span>
            </div>
            <div className='featuredpanel_feature'>
              <CheckCircle2 />
              <span>Same-day service available</span>
            </div>
            <div className='featuredpanel_feature'>
              <CheckCircle2 />
              <span>Code-compliant installation</span>
            </div>
          </div>

          <NavLink
            to='/panel-upgrades-service'
            className='featuredpanel_button'
          >
            Learn More About Panel Upgrades
            <ArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPanelUpgrades;
