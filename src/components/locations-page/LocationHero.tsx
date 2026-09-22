import { FileText, MapPin, Phone } from 'lucide-react';
import './LocationHero.css';

interface LocationHero {
  area: string;
  title: React.ReactNode;
  subtitle: string;
}

interface LocationHeroProps {
  hero: LocationHero;
}

function LocationHero({ hero }: LocationHeroProps) {
  return (
    <div className='locationhero'>
      <div className='container locationhero_container'>
        <div>
          <div className='locationhero_label'>
            <MapPin />
            <span>{hero.area}</span>
          </div>
          <h1 className='locationhero_title'>{hero.title}</h1>
          <p className='locationhero_text'>{hero.subtitle}</p>

          <div className='locationhero_buttons'>
            <a href='tel:+13106664752' className='locationhero_button'>
              <Phone />
              Call (310) 666-4752
            </a>
            <a href='/contact' className='locationhero_button_secondary'>
              <FileText />
              Get FREE Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationHero;
