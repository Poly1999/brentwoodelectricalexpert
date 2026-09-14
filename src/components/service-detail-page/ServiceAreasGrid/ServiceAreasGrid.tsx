import { NavLink } from 'react-router-dom';
import './ServiceAreasGrid.css';
import { MapPin } from 'lucide-react';

interface ServiceAreasGrid {
  title: string;
  subtitle: string;
}

interface ServiceAreasGridProps {
  areas: ServiceAreasGrid;
}

function ServiceAreasGrid({ areas }: ServiceAreasGridProps) {
  const areasList = [
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
  ];
  return (
    <div className='serviceareasgrid'>
      <div className='container'>
        <div className='serviceareasgrid_header'>
          <h2>{areas.title}</h2>
          <p>{areas.subtitle}</p>
        </div>
        <div className='serviceareasgrid_list'>
          {areasList.map((area, index) => (
            <NavLink
              to={`/${area.slug}`}
              key={index}
              className='serviceareasgrid_item'
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

export default ServiceAreasGrid;
