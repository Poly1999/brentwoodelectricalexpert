import { Clock, DollarSign, MapPin, Shield, Star, Zap } from 'lucide-react';
import Footer from '../../components/Footer/Footer';
import HeroServices from '../../components/services-page/HeroServices/HeroServices';
import StatsSection from '../../components/Shared/StatsSection/StatsSection';
import TrustBadges from '../../components/Shared/TrustBadges/TrustBadges';
import ServicesList from '../../components/services-page/ServicesList/ServicesList';
import Testimonials from '../../components/Shared/Testimonials/Testimonials';

function ServicesPage() {
  const badges = {
    items: [
      'Licensed & Insured',
      'Fast & Reliable',
      'Upfront Pricing',
      'Serving West LA',
    ],
    icons: [<Shield />, <Clock />, <DollarSign />, <MapPin />],
  };

  const servicesStats = [
    { icon: <Zap />, raiting: '16+', title: 'Services Offered' },
    { icon: <Star />, raiting: '5.0', title: 'Google Rating' },
    { icon: <Clock />, raiting: '24/7', title: 'Emergency Service' },
    { icon: <Shield />, raiting: '100%', title: 'Licensed & Insured' },
  ];

  const reviews = {
    title: 'What Our Clients Say',
    subtitle: '5-star rated across Google, Yelp, and Birdeye',
    items: [
      {
        text: 'Brentwood Electrical Experts upgraded our panel from 100 to 200 amps and installed an EV charger — all in one day. Professional, clean, and on time. Highly recommend!',
        name: 'Michael R.',
        location: 'Brentwood, CA',
        source: 'Google',
      },
      {
        text: 'We needed security cameras and lighting installed at our home. The team was incredibly thorough, ran all the wiring cleanly, and even set up remote access on our phones. Excellent work.',
        name: 'Sarah L.',
        location: 'Santa Monica, CA',
        source: 'Yelp',
      },
      {
        text: 'After the fire season, we wanted to upgrade all our electrical and add a whole-home surge protector. Brentwood Electrical was responsive, knowledgeable, and completed everything perfectly. Worth every penny.',
        name: 'David K.',
        location: 'Pacific Palisades, CA',
        source: 'Google',
      },
    ],
  };

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <HeroServices />
      <TrustBadges badges={badges} />
      <StatsSection items={servicesStats} variant='light' />
      <ServicesList />
      <Testimonials reviews={reviews} variant='dark' />
      <Footer footer={footer} />
    </div>
  );
}

export default ServicesPage;
