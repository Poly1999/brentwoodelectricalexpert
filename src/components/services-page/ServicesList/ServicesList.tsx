import './ServicesList.css';
import { CheckCircle2, Clock, MapPin, Shield, Star } from 'lucide-react';
import ServicesCard from '../ServicesCard/ServicesCard';
import ServicesSidebar from '../../Shared/ServicesSidebar/ServicesSidebar';

function ServicesList() {
  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary assessment or request a quote online. Same-day consultations available.',
    navTitle: 'Our Electrical Services',
    whyTitle: 'Why West LA Chooses Us',
    whyItems: [
      '5.0 Google Rating — 100+ reviews',
      'Fully licensed & insured',
      'Same-day & 24/7 emergency service',
      'Upfront pricing, no hidden fees',
      'Serving all of West Los Angeles',
    ],
    whyIcons: [<Star />, <Shield />, <Clock />, <CheckCircle2 />, <MapPin />],
    areasTitle: 'Core Service Territory',
  };

  return (
    <div className='serviceslist_wrapper'>
      <div className='container serviceslist_layout'>
        <ServicesCard />
        <div className='serviceslist_sidebar_sticky'>
          <ServicesSidebar sidebar={sidebar} />
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
