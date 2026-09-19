import './LocationPage.css';
import { Clock, MapPin, Shield, Star } from 'lucide-react';

import LocationHero from '../../components/locations-page/LocationHero';
import StatsSection from '../../components/Shared/StatsSection/StatsSection';
import TrustBadges from '../../components/Shared/TrustBadges/TrustBadges';
import { NavLink } from 'react-router-dom';
import WhyChooseUs from '../../components/Shared/WhyChooseUs/WhyChooseUs';
import Footer from '../../components/Footer/Footer';

import BrentwoodElectrician from '../../assets/panel-framing.webp';
import SantaMonicaElectrician from '../../assets/ev-charger-1.webp';
import PacificPalisadesElectrician from '../../assets/lightfixture-2611.webp';
import BeverlyHillsElectrician from '../../assets/copper-pendant.webp';

function LocationPage() {
  const hero = {
    area: 'Service areas',
    title: (
      <>
        Serving <span>West Los Angeles</span> & Beyond
      </>
    ),
    subtitle:
      'From Brentwood to Huntington Beach, our licensed electricians deliver fast, reliable, code-compliant electrical services across 29+ communities.',
  };

  const servicesStats = [
    { icon: <MapPin />, raiting: '29+', title: 'Cities Served' },
    { icon: <Star />, raiting: '5.0', title: 'Google Rating' },
    { icon: <Clock />, raiting: '24/7', title: 'Emergency Service' },
    { icon: <Shield />, raiting: '100%', title: 'Licensed & Insured' },
  ];

  const cities = [
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

  const cards = [
    {
      image: BrentwoodElectrician,
      area: 'Brentwood, CA',
      title: 'Brentwood Electrician',
      subtitle:
        'Brentwood Electrical Experts is proud to serve the Brentwood community with professional residential and commercial elec...',
      slug: 'brentwood',
    },
    {
      image: SantaMonicaElectrician,
      area: 'Santa Monica, CA',
      title: 'Santa Monica Electrician',
      subtitle:
        'Need a licensed electrician in Santa Monica? Brentwood Electrical Experts provides full-service residential and commerci...',
      slug: 'santa-monica',
    },
    {
      image: PacificPalisadesElectrician,
      area: 'Pacific Palisades, CA',
      title: 'Pacific Palisades Electrician',
      subtitle:
        'Brentwood Electrical Experts serves Pacific Palisades homeowners with premium electrical services. From luxury home ligh...',
      slug: 'pacific-palisades',
    },
    {
      image: BeverlyHillsElectrician,
      area: 'Beverly Hills, CA',
      title: 'Beverly Hills Electrician',
      subtitle:
        'Brentwood Electrical Experts delivers premium electrical services throughout Beverly Hills. From electrical panel upgrad...',
      slug: 'beverly-hills',
    },
  ];

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <StatsSection items={servicesStats} variant='light' />
      <div className='findelectrician'>
        <div className='container'>
          <div className='findelectrician_header'>
            <h2>Find Your Local Electrician</h2>
            <p>
              Click any city to learn more about our electrical services in your
              area.
            </p>
          </div>

          <div className='findelectrician_grid'>
            {cities.map((city, index) => (
              <NavLink
                to={`/${city.slug}`}
                className='findelectrician_item'
                key={index}
              >
                <MapPin />
                <span>{city.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <WhyChooseUs
        title={
          <>
            Why <span>Local Homeowners</span> Trust Us
          </>
        }
      />
      <div className='featuredareas'>
        <div className='container'>
          <h2>Featured Service Areas</h2>
          <div className='featuredareas_grid'>
            {cards.map((card, index) => (
              <NavLink
                to={`/${card.slug}`}
                className='featuredareas_card'
                key={index}
              >
                <img src={card.image} alt={card.title} />
                <div className='featuredareas_overlay'></div>
                <div className='featuredareas_content'>
                  <div className='featuredareas_label'>
                    <MapPin />
                    <p>{card.area}</p>
                  </div>
                  <h3>{card.title}</h3>
                  <p className='featuredareas_desc'>{card.subtitle}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LocationPage;
