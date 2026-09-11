import './Testimonials.css';
import { Star, ArrowRight } from 'lucide-react';

const reviews = [
  {
    text: 'Brentwood Electrical Experts upgraded our panel from 100 to 200 amps and installed an EV charger — all in one day. Professional, clean, and on time. Highly recommend!',
    name: 'Michael R.',
    location: 'Brentwood, CA',
    source: 'Google',
  },
  {
    text: 'We needed security cameras and lighting installed at our home. The team was incredibly thorough, ran all the wiring cleanly, and even set up remote access on our phones. Excellent work.',
    name: 'Sarah L.',
    location: 'Santa Monica, CA',
    source: 'Yelp',
  },
  {
    text: 'After the fire season, we wanted to upgrade all our electrical and add a whole-home surge protector. Brentwood Electrical was responsive, knowledgeable, and completed everything perfectly. Worth every penny.',
    name: 'David K.',
    location: 'Pacific Palisades, CA',
    source: 'Google',
  },
  {
    text: 'We hired them for a full lighting redesign in our renovated kitchen and living room. The result is stunning — recessed lights, under-cabinet LEDs, and dimmers throughout. True professionals.',
    name: 'Jennifer M.',
    location: 'Beverly Hills, CA',
    source: 'Birdeye',
  },
  {
    text: 'Had a persistent problem with tripping breakers. They diagnosed it quickly, found a faulty connection, and fixed it same day. Fair pricing and honest service — rare to find.',
    name: 'Robert T.',
    location: 'West Hollywood, CA',
    source: 'Google',
  },
  {
    text: 'Brentwood Electrical installed a Tesla Wall Connector at our home. They handled the panel assessment, got the permit, and had us charging within a week. Seamless experience.',
    name: 'Amanda C.',
    location: 'Mar Vista, CA',
    source: 'Yelp',
  },
];

function Testimonials() {
  return (
    <div className='testimonials'>
      <div className='container'>
        <div className='testimonials_header'>
          <div className='testimonials_stars'>
            <Star fill='#C7973D' color='#C7973D' />
            <Star fill='#C7973D' color='#C7973D' />
            <Star fill='#C7973D' color='#C7973D' />
            <Star fill='#C7973D' color='#C7973D' />
            <Star fill='#C7973D' color='#C7973D' />
          </div>
          <h2>What Our Clients Say</h2>
          <p>5-star rated across Google, Yelp, and Birdeye</p>
        </div>

        <div className='testimonials_grid'>
          {reviews.map((review, index) => (
            <div className='testimonial_card' key={index}>
              <div className='testimonial_stars'>
                <Star fill='#C7973D' color='#C7973D' />
                <Star fill='#C7973D' color='#C7973D' />
                <Star fill='#C7973D' color='#C7973D' />
                <Star fill='#C7973D' color='#C7973D' />
                <Star fill='#C7973D' color='#C7973D' />
              </div>
              <p className='testimonial_text'>"{review.text}"</p>
              <div className='testimonial_footer'>
                <div>
                  <span className='testimonial_name'>{review.name}</span>
                  <span className='testimonial_location'>
                    {review.location}
                  </span>
                </div>
                <span className='testimonial_source'>{review.source}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='testimonials_viewall'>
          <a href='/reviews' className='testimonials_viewall_button'>
            Read All Reviews
            <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
