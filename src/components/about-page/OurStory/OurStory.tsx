import './OurStory.css';
import { CheckCircle2 } from 'lucide-react';
import VanImage from '../../../assets/about-us.jpeg';

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
            <a href='/services'>electrical services</a> with complete
            transparency, professionalism, and respect for every client's home
            and business.
          </p>

          <p>
            We've built our reputation one job at a time — from{' '}
            <a href='/panel-upgrades-service'>panel upgrades</a> in{' '}
            <a href='/brentwood'>Brentwood</a> to{' '}
            <a href='/ev-chargers-service'>EV charger installations</a> in{' '}
            <a href='/santa-monica'>Santa Monica</a> to complete{' '}
            <a href='/remodeling-service'>electrical remodels</a> in{' '}
            <a href='/beverly-hills'>Beverly Hills</a>. Every project receives
            the same level of care, attention to detail, and commitment to
            excellence.
          </p>

          <p>
            As a licensed and insured electrical contractor, we hold ourselves
            to the highest standards of safety, code compliance, and
            craftsmanship. Our clients trust us because we deliver honest
            assessments, upfront pricing, and work we stand behind. Read our{' '}
            <a href='/reviews'>customer reviews</a> to see what they say.
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
