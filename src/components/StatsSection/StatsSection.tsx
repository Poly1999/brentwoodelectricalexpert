import './StatsSection.css';
import { Star, Zap, Clock, Shield } from 'lucide-react';

function StatsSection() {
  return (
    <div className='statssection'>
      <div className='container statssection_inner'>
        <div className='statssection_item'>
          <div className='statssection_top'>
            <div className='statssection_icon'>
              <Star />
            </div>
            <span className='statssection_number'>5.0</span>
          </div>
          <p>Google Rating</p>
        </div>

        <div className='statssection_divider'></div>

        <div className='statssection_item'>
          <div className='statssection_top'>
            <div className='statssection_icon'>
              <Zap />
            </div>
            <span className='statssection_number'>1000+</span>
          </div>
          <p>Projects Completed</p>
        </div>

        <div className='statssection_divider'></div>

        <div className='statssection_item'>
          <div className='statssection_top'>
            <div className='statssection_icon'>
              <Clock />
            </div>
            <span className='statssection_number'>24/7</span>
          </div>
          <p>Emergency Service</p>
        </div>

        <div className='statssection_divider'></div>

        <div className='statssection_item'>
          <div className='statssection_top'>
            <div className='statssection_icon'>
              <Shield />
            </div>
            <span className='statssection_number'>100%</span>
          </div>
          <p>Licensed & Insured</p>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
