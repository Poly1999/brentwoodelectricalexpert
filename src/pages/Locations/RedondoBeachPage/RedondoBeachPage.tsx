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

function RedondoBeachPage() {
  const hero = {
    area: 'Redondo Beach, CA · 90277, 90278',
    title: 'Redondo Beach Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts provides reliable, licensed electrical services in Redondo Beach. Whether you need a panel upgrade, EV charger, lighting installation, or electrical repair, our team delivers quality work throughout the South Bay.',
  };

  const about = {
    title: 'About Redondo Beach',
    city: 'Redondo Beach',
    subtitle:
      'Redondo Beach is a South Bay beach city of about 72,000 residents, offering a more accessible coastal lifestyle with a mix of beachfront living and established family neighborhoods.',
    features: [
      { item: 'South Redondo beach homes' },
      { item: 'North Redondo family homes' },
      { item: 'Condos near the harbor' },
      { item: '1960s tract houses' },
    ],
    challenge:
      'Redondo Beach spans from oceanfront properties in South Redondo to inland family neighborhoods in North Redondo, each with different electrical needs. Many 1960s tract homes need modernization. The harbor area features commercial and marina electrical demands.',
    quote: [
      {
        text: "We serve all of Redondo Beach — from South Redondo's oceanfront homes to North Redondo's family neighborhoods — with the same commitment to quality, fair pricing, and professional service.",
        subtext: '— Brentwood Electrical Experts, serving Redondo Beach',
      },
    ],
  };

  const popular = {
    city: 'Redondo Beach',
    cards: [
      {
        title: 'South Redondo Coastal Electrical',
        subtitle:
          "Marine-grade installations for South Redondo's beachfront and near-beach homes — corrosion-resistant panels, smart home systems, and luxury lighting.",
      },
      {
        title: 'North Redondo Family Home Upgrades',
        subtitle:
          "Panel replacements, EV charger installations, and kitchen remodel electrical for North Redondo's 1960s family neighborhoods.",
      },
      {
        title: 'Riviera Village Commercial',
        subtitle:
          "Tenant improvement electrical, lighting, and equipment connections for South Redondo's charming Riviera Village business district.",
      },
    ],
  };

  const details = {
    city: 'Redondo Beach',
    pharagraphs: [
      {
        text: "Redondo Beach's South Redondo and North Redondo neighborhoods have distinctly different electrical needs. South Redondo's beachfront and near-beach homes face salt air corrosion challenges and often feature higher-end finishes requiring sophisticated lighting and smart home systems. North Redondo's family-oriented neighborhoods, largely built in the 1960s, need practical upgrades — panel replacements, additional circuits, and EV charger installations.",
      },
      {
        text: 'The Riviera Village commercial district in South Redondo is home to boutiques, restaurants, and professional offices that rely on dependable commercial electrical. We provide tenant improvement wiring, lighting upgrades, and equipment connections for Riviera Village businesses — with the quality and reliability this charming shopping district deserves.',
      },
      {
        text: 'Redondo Beach families are increasingly adding ADUs, converting garages, and remodeling kitchens — all projects that require professional electrical work. We provide turnkey electrical services for these home improvement projects, from panel upgrades to final fixture installation.',
      },
    ],
    features: [
      { item: 'Redondo Beach Pier' },
      { item: 'King Harbor' },
      { item: 'Riviera Village' },
      { item: 'Hopkins Wilderness Park' },
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
    city: 'Redondo Beach',
    features: [
      {
        question: 'Do you serve both South and North Redondo Beach?',
        answer:
          'Yes — we serve all of Redondo Beach, from oceanfront South Redondo homes to North Redondo family neighborhoods. Each area has distinct electrical needs, and we tailor our approach accordingly.',
      },
      {
        question: 'Can you handle commercial electrical in Riviera Village?',
        answer:
          'Absolutely — we provide commercial electrical services for Riviera Village restaurants, boutiques, and offices, including tenant improvements, lighting, and equipment connections.',
      },
      {
        question: 'Do older North Redondo homes need panel upgrades?',
        answer:
          'Many do — 1960s North Redondo tract homes typically have 100-amp panels that benefit from upgrading to 200 amps, especially when adding EV chargers, modern HVAC, or remodeling kitchens.',
      },
    ],
  };

  const areas = {
    city: 'Redondo Beach',
    features: [
      { item: 'Hermosa Beach', slug: 'hermosa-beach' },
      { item: 'Manhattan Beach', slug: 'manhattan-beach' },
      { item: 'Torrance', slug: 'torrance' },
      { item: 'Palos Verdes', slug: 'palos-verdes' },
      { item: 'Gardena', slug: 'gardena' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Redondo Beach' />
      <LocationAllServices city='Redondo Beach' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default RedondoBeachPage;
