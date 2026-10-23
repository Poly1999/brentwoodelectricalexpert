import './TrustBadges.css';
import { Shield, Clock, DollarSign, MapPin } from 'lucide-react';

interface TrustBadgesProps {
  items?: string[];
}

const defaultItems = [
  'Licensed & Insured',
  'Fast & Reliable',
  'Upfront Pricing',
  'Serving West LA',
];

function TrustBadges({ items = defaultItems }: TrustBadgesProps) {
  const icons = [<Shield />, <Clock />, <DollarSign />, <MapPin />];

  return (
    <div className='trustbadges'>
      <div className='container trustbadges_inner'>
        {items.map((item, index) => (
          <div className='trustbadges_item' key={index}>
            <div className='trustbadges_icon'>{icons[index]}</div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustBadges;
