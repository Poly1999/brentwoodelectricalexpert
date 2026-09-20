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

function PlayaVistaPage() {
  const hero = {
    area: 'Playa Vista, CA · 90094',
    title: 'Playa Vista Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts serves the modern Playa Vista community with professional electrical services. From smart home installations and EV chargers to panel upgrades and security systems, we deliver cutting-edge electrical solutions.',
  };

  const about = {
    title: 'About Playa Vista',
    city: 'Playa Vista',
    subtitle:
      'Playa Vista is a modern, master-planned community known for its tech industry presence (Google, YouTube, Facebook), young professional residents, and contemporary amenities.',
    features: [
      { item: 'Modern planned community homes' },
      { item: 'Tech campus offices' },
      { item: 'Contemporary townhouses' },
    ],
    challenge:
      "Playa Vista is LA's newest planned community, so most homes have modern electrical systems. The demand here is for technology upgrades — smart home systems, EV chargers, home office infrastructure, and outdoor entertainment electrical for the community's active, tech-forward lifestyle.",
    quote: [
      {
        text: "Playa Vista's tech-savvy homeowners want cutting-edge electrical solutions — smart home automation, structured wiring, EV charging, and home office infrastructure. That's exactly what we deliver.",
        subtext: '— Brentwood Electrical Experts, serving Playa Vista',
      },
    ],
  };

  const popular = {
    city: 'Playa Vista',
    cards: [
      {
        title: 'Smart Home Electrical',
        subtitle:
          "Whole-home automation wiring, smart lighting, and connected device infrastructure for Playa Vista's tech-forward residences.",
      },
      {
        title: 'Home Office Infrastructure',
        subtitle:
          'Dedicated circuits, Ethernet wiring, and USB outlets for productive work-from-home setups in Playa Vista homes.',
      },
      {
        title: 'EV Charger Installation',
        subtitle:
          'Level 2 charger installations in Playa Vista garages and townhouse parking areas — clean, dedicated circuits with proper permitting.',
      },
      {
        title: 'Outdoor Entertainment Electrical',
        subtitle:
          "Patio heating, string lights, outdoor audio, and landscape lighting for Playa Vista's active outdoor lifestyle.",
      },
    ],
  };

  const details = {
    city: 'Playa Vista',
    pharagraphs: [
      {
        text: "Playa Vista homes are relatively new — most built after 2005 — so panel upgrades are rarely needed. Instead, Playa Vista homeowners are focused on technology additions: whole-home Wi-Fi mesh wiring, smart lighting systems, home office dedicated circuits, and Level 2 EV charger installations. We specialize in these modern electrical services that complement Playa Vista's tech-forward lifestyle.",
      },
      {
        text: "The community's proximity to YouTube, Google, and other tech campuses means many residents work from home at least part time. We install home office electrical infrastructure — dedicated 20-amp circuits, abundant outlets, USB charging receptacles, and structured wiring for Ethernet — ensuring productive, reliable work-from-home environments.",
      },
      {
        text: "Playa Vista's outdoor-oriented community design includes generous patios, rooftop decks, and common areas that benefit from professional electrical work. We install patio heating circuits, string light hook-ups, outdoor audio system wiring, and landscape lighting that extends the usability of outdoor spaces into the evening hours.",
      },
    ],
    features: [
      { item: 'Playa Vista Central Park' },
      { item: 'The Resort (community center)' },
      { item: 'YouTube/Google campus' },
      { item: 'Loyola Marymount University nearby' },
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
    city: 'Playa Vista',
    features: [
      {
        question: 'Do Playa Vista homes need panel upgrades?',
        answer:
          'Usually not — most Playa Vista homes were built with modern 200-amp panels. However, adding an EV charger, hot tub, or extensive smart home system may require a sub-panel addition or dedicated circuit installation.',
      },
      {
        question:
          'Can you install a whole-home smart lighting system in Playa Vista?',
        answer:
          "Yes — we install Lutron Caseta, RadioRA 3, and other smart lighting systems that integrate with your home automation platform of choice. Playa Vista's modern wiring makes these installations clean and straightforward.",
      },
      {
        question: 'Do you install EV chargers for Playa Vista townhouses?',
        answer:
          'Yes — we install Level 2 EV chargers in Playa Vista townhouse garages with dedicated 50-amp circuits. For HOA-managed parking areas, we coordinate with management for approvals and electrical access.',
      },
    ],
  };

  const areas = {
    city: 'Playa Vista',
    features: [
      { item: 'Marina Del Rey', slug: 'marina-del-rey' },
      { item: 'Venice', slug: 'venice' },
      { item: 'Mar Vista', slug: 'mar-vista' },
      { item: 'Culver City', slug: 'culver-city' },
      { item: 'Westchester', slug: 'westchester' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Playa Vista' />
      <LocationAllServices city='Playa Vista' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default PlayaVistaPage;
