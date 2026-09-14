import { FileText, Phone } from 'lucide-react';
import './ServiceHero.css';

interface ServicesHero {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

interface ServicesHeroProps {
  hero: ServicesHero;
}

function ServiceHero({ hero }: ServicesHeroProps) {
  return (
    <div className='servicedetailhero'>
      <img
        src={hero.backgroundImage}
        alt={hero.title}
        className='servicedetailhero_image'
      />
      <div className='servicedetailhero_overlay'></div>

      <div className='servicedetailhero_content_wrapper'>
        <div className='servicedetailhero_content'>
          <div className='servicedetailhero_icon'>{hero.icon}</div>
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>

          <div className='servicedetailhero_buttons'>
            <a href='tel:+13106664752' className='servicedetailhero_button'>
              <Phone />
              Call (310) 666-4752
            </a>
            <a href='/contact' className='servicedetailhero_button_secondary'>
              <FileText />
              Get FREE Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
