import { Clock, Shield, Star, Zap } from 'lucide-react';
import LocationAbout from '../../../components/location-detail-page/LocationAbout/LocationAbout';
import LocationAllServices from '../../../components/location-detail-page/LocationAllServices/LocationAllServices';
import LocationDetails from '../../../components/location-detail-page/LocationDetails/LocationDetails';
import LocationPopularServices from '../../../components/location-detail-page/LocationPopularServices/LocationPopularServices';
import LocationWhyChooseUs from '../../../components/location-detail-page/LocationWhyChooseUs/LocationWhyChooseUs';
import LocationHero from '../../../components/locations-page/LocationHero';
import StatsSection from '../../../components/Shared/StatsSection/StatsSection';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import LocationFAQ from '../../../components/location-detail-page/LocationFAQ/LocationFAQ';
import NearbyAreas from '../../../components/location-detail-page/NearbyAreas/NearbyAreas';
import Footer from '../../../components/Footer/Footer';

function CenturyCityPage() {
  const hero = {
    area: 'Century City, CA · 90067',
    title: 'Century City Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts delivers professional electrical services for Century City offices, commercial spaces, and residential properties. Our team specializes in commercial electrical, tenant improvements, and high-rise electrical work.',
  };

  const about = {
    title: 'About Century City',
    city: 'Century City',
    subtitle:
      'Century City is a major commercial and residential district on the Westside, featuring iconic office towers, luxury high-rise condominiums, and the upscale Westfield Century City mall.',
    features: [
      { item: 'High-rise condominiums' },
      { item: 'Commercial office towers' },
      { item: 'Mixed-use developments' },
    ],
    challenge:
      'Century City is predominantly commercial high-rises and luxury condominiums. Electrical work here often involves coordination with building management, working in high-rise environments, and navigating complex shared electrical infrastructure.',
    quote: [
      {
        text: "We're experienced with Century City's high-rise environments — coordinating with building management, working within HOA guidelines, and delivering quality electrical work in condominium and commercial settings.",
        subtext: '— Brentwood Electrical Experts, serving Century City',
      },
    ],
  };

  const popular = {
    city: 'Century City',
    cards: [
      {
        title: 'High-Rise Condo Electrical',
        subtitle:
          "Kitchen upgrades, lighting, GFCI circuits, and EV charger installations in Century City's luxury condominium buildings.",
      },
      {
        title: 'Office Tenant Improvements',
        subtitle:
          'Commercial electrical build-outs for Century City office spaces — power distribution, lighting, and AV infrastructure.',
      },
      {
        title: 'Parking Garage EV Charging',
        subtitle:
          'EV charger installations in Century City condo and commercial parking structures — coordinated with building management.',
      },
    ],
  };

  const details = {
    city: 'Century City',
    pharagraphs: [
      {
        text: "Century City's luxury high-rise condominiums — the Century, Park Place, Century Hill — present unique electrical challenges. Work must be coordinated with building management, comply with HOA architectural guidelines, and be performed within the constraints of concrete construction and shared building systems. We install kitchen upgrades, bathroom GFCI circuits, EV chargers in assigned parking spaces, and lighting modifications — all while navigating the specific requirements of each building.",
      },
      {
        text: 'The commercial office towers along Avenue of the Stars and Constellation Blvd house major law firms, financial companies, and entertainment industry offices. We provide commercial electrical services for tenant improvements, including power distribution for open office layouts, conference room AV electrical, dedicated server room circuits, and energy-efficient lighting retrofits.',
      },
      {
        text: "Century City's ongoing development means new electrical challenges emerge regularly. We stay current with the latest building codes, energy efficiency requirements, and smart building technologies to deliver solutions that meet the district's forward-thinking standards.",
      },
    ],
    features: [
      { item: 'Century City Mall' },
      { item: 'Fox Studios' },
      { item: 'Avenue of the Stars' },
      { item: 'Annenberg Space for Photography' },
    ],
  };

  const servicesStats = [
    { icon: <Star />, raiting: '5.0', title: 'Google Rating' },
    { icon: <Zap />, raiting: '1000+', title: 'Projects Completed' },
    { icon: <Clock />, raiting: '24/7', title: 'Emergency Service' },
    { icon: <Shield />, raiting: '100%', title: 'Licensed & Insured' },
  ];

  const reviews = [
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
  ];

  const faqs = {
    city: 'Century City',
    features: [
      {
        question:
          'Can you do electrical work in a Century City high-rise condo?',
        answer:
          "Yes — we regularly work in Century City's luxury condominiums. We coordinate with building management, follow HOA guidelines, and work within the constraints of high-rise concrete construction to deliver kitchen upgrades, lighting changes, and other electrical improvements.",
      },
      {
        question:
          'Do you install EV chargers in Century City condo parking garages?',
        answer:
          'Yes — we install EV chargers in assigned parking spaces in Century City buildings, coordinating with building management for electrical access, conduit routing, and metering solutions.',
      },
      {
        question:
          'Can you handle commercial tenant improvements in Century City offices?',
        answer:
          'Absolutely. We provide complete electrical for office tenant improvements — power distribution, lighting, data infrastructure, and conference room AV electrical.',
      },
    ],
  };

  const areas = {
    city: 'Century City',
    features: [
      { item: 'Beverly Hills', slug: 'beverly-hills' },
      { item: 'Westwood', slug: 'westwood' },
      { item: 'West LA', slug: 'west-los-angeles' },
      { item: 'Cheviot Hills', slug: 'cheviot-hills' },
      { item: 'Beverlywood', slug: 'beverlywood' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Century City' />
      <LocationAllServices city='Century City' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default CenturyCityPage;
