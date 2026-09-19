import { Building, CircleCheckBig, House, Zap } from 'lucide-react';
import './LocationAbout.css';

interface LocationAbout {
  title: string;
  city: string;
  subtitle: string;
  features: { item: string }[];
  challenge: string;
  quote: { text: string; subtext: string }[];
}

interface LocationAboutProps {
  about: LocationAbout;
}

function LocationAbout({ about }: LocationAboutProps) {
  return (
    <div className='locationabout'>
      <div className='locationabout_inner'>
        <div className='locationabout_label'>
          <House />
          <p>{about.title}</p>
        </div>
        <h2>Electrical Services Tailored to {about.city}</h2>
        <p>{about.subtitle}</p>

        <div className='locationabout_grid'>
          <div className='locationabout_card'>
            <div className='locationabout_card_header'>
              <Building />
              <h3>Common Property Types</h3>
            </div>
            <ul className='locationabout_features'>
              {about.features.map((feature, index) => (
                <li className='locationabout_feature' key={index}>
                  <CircleCheckBig />
                  {feature.item}
                </li>
              ))}
            </ul>
          </div>

          <div className='locationabout_card'>
            <div className='locationabout_card_header'>
              <Zap />
              <h3>Local Electrical Challenges</h3>
            </div>
            <p>{about.challenge}</p>
          </div>
        </div>

        {about.quote.map((q, index) => (
          <div className='locationabout_quote' key={index}>
            <p>"{q.text}"</p>
            <p>{q.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationAbout;
