import { Zap } from 'lucide-react';
import './LocationPopularServices.css';

interface LocationPopularServices {
  city: string;
  cards: { title: string; subtitle: string }[];
}

interface LocationPopularServicesProps {
  popular: LocationPopularServices;
}

function LocationPopularServices({ popular }: LocationPopularServicesProps) {
  return (
    <div className='locationpopular'>
      <div className='locationpopular_inner'>
        <p className='locationpopular_label'>Popular Services</p>
        <h2>Most Requested Electrical Services in {popular.city}</h2>
        <p className='locationpopular_subtitle'>
          These are the electrical services {popular.city} homeowners and
          businesses request most.
        </p>
        <div className='locationpopular_grid'>
          {popular.cards.map((card, index) => (
            <div className='locationpopular_card' key={index}>
              <div className='locationpopular_card_header'>
                <Zap />
                <h3>{card.title}</h3>
              </div>
              <p>{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationPopularServices;
