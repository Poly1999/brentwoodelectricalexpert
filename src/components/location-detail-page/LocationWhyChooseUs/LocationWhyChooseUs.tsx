import { Shield, Award, Clock, FileText, Users, ThumbsUp } from 'lucide-react';
import './LocationWhyChooseUs.css';

interface LocationWhyChooseUsProps {
  city: string;
}

function LocationWhyChooseUs({ city }: LocationWhyChooseUsProps) {
  return (
    <div className='locationwhychooseus'>
      <div className='locationwhychooseus_inner'>
        <p className='locationwhychooseus_label'>Why Choose Us</p>
        <h2>Why {city} Residents Trust Brentwood Electrical Experts</h2>

        <div className='locationwhychooseus_grid'>
          <div className='locationwhychooseus_item'>
            <div className='locationwhychooseus_icon'>
              <Shield />
            </div>
            <h3>Licensed & Insured</h3>
            <p>
              California-licensed electrical contractor with full liability and
              workers' comp coverage.
            </p>
          </div>

          <div className='locationwhychooseus_item'>
            <div className='locationwhychooseus_icon'>
              <Award />
            </div>
            <h3>5-Star Rated</h3>
            <p>
              Consistently 5-star rated on Google, Yelp, and Birdeye by local
              homeowners.
            </p>
          </div>

          <div className='locationwhychooseus_item'>
            <div className='locationwhychooseus_icon'>
              <Clock />
            </div>
            <h3>Same-Day Service</h3>
            <p>
              Fast scheduling with same-day availability and 24/7 emergency
              response.
            </p>
          </div>

          <div className='locationwhychooseus_item'>
            <div className='locationwhychooseus_icon'>
              <FileText />
            </div>
            <h3>Free Estimates</h3>
            <p>
              Transparent, upfront pricing with free estimates — no hidden fees.
            </p>
          </div>

          <div className='locationwhychooseus_item'>
            <div className='locationwhychooseus_icon'>
              <Users />
            </div>
            <h3>Local Electricians</h3>
            <p>
              Our team knows {city} — familiar with local codes, permits, and
              architecture.
            </p>
          </div>

          <div className='locationwhychooseus_item'>
            <div className='locationwhychooseus_icon'>
              <ThumbsUp />
            </div>
            <h3>Satisfaction Guaranteed</h3>
            <p>We stand behind every job with a 100% satisfaction guarantee.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationWhyChooseUs;
