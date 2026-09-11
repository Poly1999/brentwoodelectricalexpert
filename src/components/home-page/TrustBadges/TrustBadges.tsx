import './TrustBadges.css';
import { Shield, Clock, DollarSign, MapPin } from 'lucide-react';

function TrustBadges() {
  return (
    <div className='trustbadges'>
      <div className='container trustbadges_inner'>
        <div className='trustbadges_item'>
          <div className='trustbadges_icon'>
            <Shield />
          </div>
          <p>Licensed & Insured</p>
        </div>

        <div className='trustbadges_item'>
          <div className='trustbadges_icon'>
            <Clock />
          </div>
          <p>Fast & Reliable</p>
        </div>

        <div className='trustbadges_item'>
          <div className='trustbadges_icon'>
            <DollarSign />
          </div>
          <p>Upfront Pricing</p>
        </div>

        <div className='trustbadges_item'>
          <div className='trustbadges_icon'>
            <MapPin />
          </div>
          <p>Serving West LA</p>
        </div>
      </div>
    </div>
  );
}

export default TrustBadges;
