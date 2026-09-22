import { ArrowRight, MapPin } from 'lucide-react';
import './NearbyAreas.css';
import { NavLink } from 'react-router-dom';

interface NearbyAreas {
  city: string;
  features: { item: string; slug: string }[];
}

interface NearbyAreasProps {
  areas: NearbyAreas;
}

function NearbyAreas({ areas }: NearbyAreasProps) {
  return (
    <div className='nearbyareas'>
      <div className='nearbyareas_inner'>
        <h2>Nearby Service Areas</h2>
        <p>
          In addition to {areas.city}, we proudly serve these neighboring
          communities.
        </p>
        <div className='nearbyareas_tags'>
          {areas.features.map((feature, index) => (
            <NavLink
              to={`/${feature.slug}`}
              className='nearbyareas_tag'
              key={index}
            >
              <MapPin />
              <span>{feature.item}</span>
            </NavLink>
          ))}
        </div>
        <div className='nearbyareas_links'>
          <NavLink to='/about'>
            About Us <ArrowRight />
          </NavLink>
          <NavLink to='/faq'>
            FAQ <ArrowRight />
          </NavLink>
          <NavLink to='/projects'>
            View Projects <ArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default NearbyAreas;
