import './WhyChooseUs.css';
import { Shield, Award, Clock, ThumbsUp, Users, Zap } from 'lucide-react';

function WhyChooseUs() {
  return (
    <div className='whychooseus'>
      <div className='container'>
        <div className='whychooseus_header'>
          <h2>
            Why Homeowners Choose <span>Brentwood Electrical</span>
          </h2>
          <p>
            We've built our reputation on quality work, honest pricing, and
            exceptional service across West Los Angeles.
          </p>
        </div>

        <div className='whychooseus_grid'>
          <div className='whychooseus_item'>
            <div className='whychooseus_icon'>
              <Shield />
            </div>
            <div className='whychooseus_text'>
              <h3>Licensed & Insured</h3>
              <p>
                Fully licensed electrical contractor with comprehensive
                insurance coverage for your protection.
              </p>
            </div>
          </div>

          <div className='whychooseus_item'>
            <div className='whychooseus_icon'>
              <Award />
            </div>
            <div className='whychooseus_text'>
              <h3>5-Star Reputation</h3>
              <p>
                Top-rated across Google, Yelp, and Birdeye. Our clients trust us
                and recommend us consistently.
              </p>
            </div>
          </div>

          <div className='whychooseus_item'>
            <div className='whychooseus_icon'>
              <Clock />
            </div>
            <div className='whychooseus_text'>
              <h3>Fast Response</h3>
              <p>
                Same-day service for most requests. 24/7 emergency availability
                when you need us most.
              </p>
            </div>
          </div>

          <div className='whychooseus_item'>
            <div className='whychooseus_icon'>
              <ThumbsUp />
            </div>
            <div className='whychooseus_text'>
              <h3>Upfront Pricing</h3>
              <p>
                Transparent, honest pricing with no hidden fees. You approve the
                price before we start.
              </p>
            </div>
          </div>

          <div className='whychooseus_item'>
            <div className='whychooseus_icon'>
              <Users />
            </div>
            <div className='whychooseus_text'>
              <h3>Expert Electricians</h3>
              <p>
                Experienced, background-checked professionals who take pride in
                clean, detail-oriented work.
              </p>
            </div>
          </div>

          <div className='whychooseus_item'>
            <div className='whychooseus_icon'>
              <Zap />
            </div>
            <div className='whychooseus_text'>
              <h3>Code Compliant</h3>
              <p>
                Every job meets or exceeds current NEC code requirements. We
                handle all permits and inspections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
