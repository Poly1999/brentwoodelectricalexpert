import './AreasWeServe.css';
import { MapPin } from 'lucide-react';

const areas = [
  'Brentwood',
  'Santa Monica',
  'Pacific Palisades',
  'Bel Air',
  'Beverly Hills',
  'Beverly Crest',
  'Beverly Glen',
  'Beverly Grove',
  'Beverlywood',
  'Mar Vista',
  'West Hollywood',
  'West Los Angeles',
  'Westwood',
  'Sawtelle',
  'Venice',
  'Culver City',
  'Century City',
  'Playa Vista',
  'Cheviot Hills',
  'Marina Del Rey',
  'Calabasas',
  'Sherman Oaks',
  'Simi Valley',
  'Pasadena',
  'Hermosa Beach',
  'Manhattan Beach',
  'Redondo Beach',
  'Huntington Beach',
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
            <div className='areasweserve_item' key={index}>
              <MapPin />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AreasWeServe;
