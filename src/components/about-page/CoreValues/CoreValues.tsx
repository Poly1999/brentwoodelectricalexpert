import './CoreValues.css';
import { Shield, Award, Users, Clock } from 'lucide-react';

function CoreValues() {
  return (
    <div className='corevalues'>
      <div className='container'>
        <h2>Our Core Values</h2>

        <div className='corevalues_grid'>
          <div className='corevalues_item'>
            <div className='corevalues_icon'>
              <Shield />
            </div>
            <h3>Safety First</h3>
            <p>
              Every job is completed to the highest safety standards with full
              code compliance.
            </p>
          </div>

          <div className='corevalues_item'>
            <div className='corevalues_icon'>
              <Award />
            </div>
            <h3>Licensed & Insured</h3>
            <p>
              Fully licensed electrical contractor with comprehensive insurance
              coverage.
            </p>
          </div>

          <div className='corevalues_item'>
            <div className='corevalues_icon'>
              <Users />
            </div>
            <h3>Expert Team</h3>
            <p>
              Experienced, background-checked electricians who take pride in
              their work.
            </p>
          </div>

          <div className='corevalues_item'>
            <div className='corevalues_icon'>
              <Clock />
            </div>
            <h3>Reliable & Responsive</h3>
            <p>
              Fast response times, on-time arrivals, and clear communication
              every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
