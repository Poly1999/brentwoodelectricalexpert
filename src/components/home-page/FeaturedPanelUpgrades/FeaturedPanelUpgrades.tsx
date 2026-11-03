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
          <h2>Ready for a 200-Amp Panel Upgrade?</h2>
          <p className='featuredpanel_text'>
            Future-proof your property for{' '}
            <NavLink to='/ev-chargers-service'>electric vehicles</NavLink>,
            central heat pumps, induction ranges, and{' '}
            <NavLink to='/smart-home-service'>whole-home automation</NavLink>.
            We manage your entire service upgrade from LADWP/SCE engineering
            applications to final city inspection.
          </p>

          <div className='featuredpanel_features'>
            <div className='featuredpanel_feature'>
              <CheckCircle2 />
              <span>100A to 200A/400A Upgrades</span>
            </div>
            <div className='featuredpanel_feature'>
              <CheckCircle2 />
              <span>Full Permits & Utility Coordination</span>
            </div>
            <div className='featuredpanel_feature'>
              <CheckCircle2 />
              <span>Single-Day Power Cutover</span>
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
