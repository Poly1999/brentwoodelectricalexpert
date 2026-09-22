import { Star } from 'lucide-react';
import './ReviewsPage.css';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

function ReviewsPage() {
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
    {
      text: 'We needed a subpanel for our new ADU. They were the most responsive and transparent of the three bids we got. Work was completed ahead of schedule and passed inspection first time.',
      name: 'Chris P.',
      location: 'Culver City, CA',
      source: 'Google',
    },
    {
      text: 'Fantastic experience. They rewired our 1950s bungalow, upgraded the panel, and installed new outlets throughout. The crew was respectful, clean, and the work is impeccable.',
      name: 'Lisa W.',
      location: 'Venice, CA',
      source: 'Birdeye',
    },
    {
      text: 'Used them for our office tenant improvement project. They handled all the electrical for our new build-out — lights, outlets, data wiring — everything. On time and on budget.',
      name: 'Mark H.',
      location: 'Westwood, CA',
      source: 'Google',
    },
    {
      text: 'Smart home installation was excellent. They installed Lutron switches throughout our home and integrated everything with Alexa. Now we control all lights by voice. Amazing service!',
      name: 'Patricia N.',
      location: 'Brentwood, CA',
      source: 'Yelp',
    },
  ];

  return (
    <div className='reviewspage'>
      <div className='reviewspage_hero'>
        <div className='container'>
          <h2>
            Customer <span>Reviews</span>
          </h2>
          <div className='reviewspage_rating'>
            <div className='reviewspage_stars'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p>5.0 Average Rating</p>
          </div>
          <p className='reviewspage_subtitle'>
            See what homeowners and businesses across{' '}
            <NavLink to='/all-locations'>West LA</NavLink> say about our
            electrical <NavLink to='/all-services'> services.</NavLink>
          </p>
        </div>
      </div>

      <div className='container reviewspage_list_section'>
        <h3>What West LA Customers Say</h3>
        <div className='reviewspage_grid'>
          {reviews.map((review, index) => (
            <div className='reviewspage_card' key={index}>
              <div className='reviewspage_card_stars'>
                <Star fill='#C7973D' color='#C7973D' />
                <Star fill='#C7973D' color='#C7973D' />
                <Star fill='#C7973D' color='#C7973D' />
                <Star fill='#C7973D' color='#C7973D' />
                <Star fill='#C7973D' color='#C7973D' />
              </div>
              <p className='reviewspage_card_text'>"{review.text}"</p>
              <div className='reviewspage_card_footer'>
                <div className='reviewspage_card_author'>
                  <span className='reviewspage_card_name'>{review.name}</span>
                  <span className='reviewspage_card_location'>
                    {review.location}
                  </span>
                </div>
                <span className='reviewspage_card_source'>{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReviewsPage;
