import { NavLink } from 'react-router-dom';
import './AreasWeServe.css';
import { MapPin } from 'lucide-react';

const areas = [
  { name: 'Brentwood', slug: 'brentwood' },
  { name: 'Santa Monica', slug: 'santa-monica' },
  { name: 'Pacific Palisades', slug: 'pacific-palisades' },
  { name: 'Bel Air', slug: 'bel-air' },
  { name: 'Beverly Hills', slug: 'beverly-hills' },
  { name: 'Beverly Crest', slug: 'beverly-crest' },
  { name: 'Beverly Glen', slug: 'beverly-glen' },
  { name: 'Beverly Grove', slug: 'beverly-grove' },
  { name: 'Beverlywood', slug: 'beverlywood' },
  { name: 'Mar Vista', slug: 'mar-vista' },
  { name: 'West Hollywood', slug: 'west-hollywood' },
  { name: 'West Los Angeles', slug: 'west-los-angeles' },
  { name: 'Westwood', slug: 'westwood' },
  { name: 'Sawtelle', slug: 'sawtelle' },
  { name: 'Venice', slug: 'venice' },
  { name: 'Culver City', slug: 'culver-city' },
  { name: 'Century City', slug: 'century-city' },
  { name: 'Playa Vista', slug: 'playa-vista' },
  { name: 'Cheviot Hills', slug: 'cheviot-hills' },
  { name: 'Marina Del Rey', slug: 'marina-del-rey' },
  { name: 'Calabasas', slug: 'calabasas' },
  { name: 'Sherman Oaks', slug: 'sherman-oaks' },
  { name: 'Simi Valley', slug: 'simi-valley' },
  { name: 'Pasadena', slug: 'pasadena' },
  { name: 'Hermosa Beach', slug: 'hermosa-beach' },
  { name: 'Manhattan Beach', slug: 'manhattan-beach' },
  { name: 'Redondo Beach', slug: 'redondo-beach' },
  { name: 'Huntington Beach', slug: 'huntington-beach' },
];

function AreasWeServe() {
  return (
    <div className='areasweserve'>
      <div className='container'>
        <div className='areasweserve_header'>
          <h2>Areas We Serve</h2>
          <p>Professional electrical services across West LA and beyond</p>
        </div>

        <div className='areasweserve_grid'>
          {areas.map((area, index) => (
            <NavLink
              to={`/${area.slug}`}
              className='areasweserve_item'
              key={index}
            >
              <MapPin />
              <span>{area.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AreasWeServe;
