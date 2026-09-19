import {
  Zap,
  BatteryCharging,
  Building,
  GitGraph,
  Camera,
  Lightbulb,
  Plug,
  Lamp,
  ArrowRight,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './LocationAllServices.css';

interface LocationAllServicesProps {
  city: string;
}

function LocationAllServices({ city }: LocationAllServicesProps) {
  const services = [
    {
      icon: <Zap />,
      title: 'Panel Upgrades',
      subtitle:
        'Is your electrical panel outdated, overloaded, or unable to keep up with modern demands? Brentwood Electrical...',
      slug: 'panel-upgrades-service',
    },
    {
      icon: <BatteryCharging />,
      title: 'EV Chargers',
      subtitle:
        'Charge your electric vehicle at home with a professionally installed Level 2 EV charger. Brentwood Electrical Experts...',
      slug: 'ev-chargers-service',
    },
    {
      icon: <Building />,
      title: 'Construction',
      subtitle:
        'From new construction wiring to tenant improvements and full-scale electrical buildouts, Brentwood Electrical Experts...',
      slug: 'construction-service',
    },
    {
      icon: <GitGraph />,
      title: 'Subpanels',
      subtitle:
        'Need additional circuits for a garage, ADU, workshop, or home addition? Brentwood Electrical Experts installs...',
      slug: 'subpanels-service',
    },
    {
      icon: <Camera />,
      title: 'Security Cameras',
      subtitle:
        'Protect your home or business with professionally installed security camera systems. Brentwood Electrical Experts...',
      slug: 'security-cameras-service',
    },
    {
      icon: <Lightbulb />,
      title: 'Security Lighting',
      subtitle:
        'Illuminate and protect your property with professionally installed security lighting. Brentwood Electrical Experts desig...',
      slug: 'security-lighting-service',
    },
    {
      icon: <Plug />,
      title: 'Outlets & GFCI',
      subtitle:
        'Need additional outlets, USB outlets, or GFCI protection in kitchens, bathrooms, and outdoor areas? Brentwood...',
      slug: 'outlets&GFCI-service',
    },
    {
      icon: <Lamp />,
      title: 'Light Fixtures',
      subtitle:
        'Transform your space with professionally installed light fixtures. From chandeliers and recessed lighting to pendant lig...',
      slug: 'light-fixtures-service',
    },
  ];

  return (
    <div className='locationallservices'>
      <div className='container locationallservices_inner'>
        <h2>All Electrical Services in {city}</h2>
        <p className='locationallservices_subtitle'>
          Full-service licensed electrician serving {city} homes and businesses
          with professional, code-compliant electrical work.
        </p>

        <div className='locationallservices_grid'>
          {services.map((service, index) => (
            <NavLink
              to={`/${service.slug}`}
              className='locationallservices_card'
              key={index}
            >
              <div className='locationallservices_icon'>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
              <span className='locationallservices_link'>
                Learn More <ArrowRight />
              </span>
            </NavLink>
          ))}
        </div>

        <NavLink to='/all-services' className='locationallservices_button'>
          View All Services <ArrowRight />
        </NavLink>
      </div>
    </div>
  );
}

export default LocationAllServices;
