import { ArrowRight } from 'lucide-react';
import './RelatedServices.css';
import { NavLink } from 'react-router-dom';

interface RelatedServices {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  slug: string;
}

interface RelatedServicesProps {
  related: RelatedServices[];
}

function RelatedServices({ related }: RelatedServicesProps) {
  return (
    <div className='relatedservices'>
      <div className='container'>
        <h2>Related Services</h2>
        <div className='relatedservices_grid'>
          {related.map((card, index) => (
            <NavLink
              to={`/${card.slug}`}
              className='relatedservices_card'
              key={index}
            >
              <div className='relatedservices_icon'>{card.icon}</div>
              <h3>{card.title}</h3>
              <div className='relatedservices_card_link'>
                {card.subtitle}
                <ArrowRight />
              </div>
            </NavLink>
          ))}
        </div>
        <div className='relatedservices_bottom'>
          <NavLink to='/all-services' className='relatedservices_bottom_link'>
            View All Services <ArrowRight />
          </NavLink>
          <NavLink to='/reviews' className='relatedservices_bottom_link'>
            Read Customer Reviews <ArrowRight />
          </NavLink>
          <NavLink to='/contact' className='relatedservices_bottom_link'>
            Request Service <ArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RelatedServices;
