import './Testimonials.css';
import { Star, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface ReviewHomePage {
  text: string;
  name: string;
  location: string;
  source: string;
}

interface ReviewsData {
  title: string;
  subtitle: string;
  items: ReviewHomePage[];
}

interface ReviewHomeProps {
  variant?: 'light' | 'dark';
  reviews: ReviewsData;
}

function Testimonials({ reviews, variant }: ReviewHomeProps) {
  return (
    <div
      className={`testimonials ${variant === 'dark' ? 'testimonials_dark' : ''}`}
    >
      <div className='container'>
        <div className='testimonials_header'>
          <div className='testimonials_stars'>
            <Star fill='#C7973D' color='#C7973D' />
            <Star fill='#C7973D' color='#C7973D' />
            <Star fill='#C7973D' color='#C7973D' />
            <Star fill='#C7973D' color='#C7973D' />
            <Star fill='#C7973D' color='#C7973D' />
          </div>
          <h2>{reviews.title}</h2>
          <p>{reviews.subtitle}</p>
        </div>

        <div className='testimonials_grid'>
          {reviews.items.map((review, index) => (
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
          <NavLink to='/reviews' className='testimonials_viewall_button'>
            Read All Reviews
            <ArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
