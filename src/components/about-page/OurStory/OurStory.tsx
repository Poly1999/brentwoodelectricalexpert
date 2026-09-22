import './OurStory.css';
import { CheckCircle2 } from 'lucide-react';
import VanImage from '../../../assets/about-us.jpeg';
import { NavLink } from 'react-router-dom';

function OurStory() {
  return (
    <div className='ourstory'>
      <div className='container ourstory_inner'>
        <div className='ourstory_content'>
          <span className='ourstory_label'>Our Story</span>
          <h2>Built on Quality, Trust & Integrity</h2>

          <p>
            Brentwood Electrical Experts was founded with a simple mission: to
            provide the highest quality{' '}
            <NavLink to='/all-services'>electrical services</NavLink> with
            complete
            transparency, professionalism, and respect for every client's home
            and business.
          </p>

          <p>
            We've built our reputation one job at a time — from{' '}
            <NavLink to='/panel-upgrades-service'>panel upgrades</NavLink> in{' '}
            <NavLink to='/brentwood'>Brentwood</NavLink> to{' '}
            <NavLink to='/ev-chargers-service'>
              EV charger installations
            </NavLink>{' '}
            in <NavLink to='/santa-monica'>Santa Monica</NavLink> to complete{' '}
            <NavLink to='/remodeling-service'>electrical remodels</NavLink> in{' '}
            <NavLink to='/beverly-hills'>Beverly Hills</NavLink>. Every project
            receives
            the same level of care, attention to detail, and commitment to
            excellence.
          </p>

          <p>
            As a licensed and insured electrical contractor, we hold ourselves
            to the highest standards of safety, code compliance, and
            craftsmanship. Our clients trust us because we deliver honest
            assessments, upfront pricing, and work we stand behind. Read our{' '}
            <NavLink to='/reviews'>customer reviews</NavLink> to see what they
            say.
          </p>

          <div className='ourstory_features'>
            <div className='ourstory_feature'>
              <CheckCircle2 />
              <span>Licensed C-10 Contractor</span>
            </div>
            <div className='ourstory_feature'>
              <CheckCircle2 />
              <span>Fully Insured</span>
            </div>
            <div className='ourstory_feature'>
              <CheckCircle2 />
              <span>Background-Checked Team</span>
            </div>
            <div className='ourstory_feature'>
              <CheckCircle2 />
              <span>NEC Code Compliant</span>
            </div>
          </div>
        </div>

        <div className='ourstory_image'>
          <img src={VanImage} alt='Brentwood Electrical Experts Van' />
        </div>
      </div>
    </div>
  );
}

export default OurStory;
