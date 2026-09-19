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

function HermosaBeachPage() {
  const hero = {
    area: 'Hermosa Beach, CA · 90254',
    title: 'Hermosa Beach Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts serves Hermosa Beach with professional electrical services. Our licensed team handles panel upgrades, EV charger installations, security lighting, and all residential and commercial electrical needs for this South Bay beach community.',
  };

  const about = {
    title: 'About Hermosa Beach',
    city: 'Hermosa Beach',
    subtitle:
      'Hermosa Beach is a small, vibrant South Bay beach city of about 20,000 residents known for its pier, active lifestyle, and tight-knit community atmosphere.',
    features: [
      { item: 'Beach cottages' },
      { item: 'Coastal condos' },
      { item: 'Modern beach houses' },
      { item: 'Walk-street homes' },
    ],
    challenge:
      "Hermosa Beach's compact beachfront lots, salt air corrosion, and older cottage-style homes create unique challenges. Many homes are on narrow walk streets with no vehicle access, requiring hand-carried equipment.",
    quote: [
      {
        text: 'We love working in Hermosa Beach — from walk-street cottages to Strand-front homes, we handle the unique logistics of beachfront electrical work with expertise and care.',
        subtext: '— Brentwood Electrical Experts, serving Hermosa Beach',
      },
    ],
  };

  const popular = {
    city: 'Hermosa Beach',
    cards: [
      {
        title: 'Walk-Street Electrical Services',
        subtitle:
          'Expert electrical work for Hermosa Beach walk-street homes — experienced crews who hand-carry equipment and work efficiently in compact spaces.',
      },
      {
        title: 'Marine-Grade Panel Upgrades',
        subtitle:
          'Corrosion-resistant panel installations for Hermosa Beach — stainless hardware, marine-grade enclosures, and coastal-rated components.',
      },
      {
        title: 'Beach House Outdoor Electrical',
        subtitle:
          "Rooftop decks, hot tubs, outdoor showers, and patio electrical — all built to withstand Hermosa Beach's salt air environment.",
      },
    ],
  };

  const details = {
    city: 'Hermosa Beach',
    pharagraphs: [
      {
        text: "Hermosa Beach's charming walk-street cottages present unique logistical challenges for electrical work. With no vehicle access, all equipment and materials must be hand-carried to the job site. Our crews are experienced with this — we plan ahead, stage materials efficiently, and bring the right tools to complete walk-street jobs without delays or complications.",
      },
      {
        text: 'Salt air is relentless in Hermosa Beach, attacking every exposed electrical component. We exclusively use marine-grade panels, stainless steel hardware, and UV-resistant conduit for all outdoor installations. For Strand-front and oceanside properties, we recommend annual electrical inspections to catch corrosion before it becomes a safety issue.',
      },
      {
        text: 'The South Bay beach lifestyle means outdoor electrical is in high demand — rooftop deck outlets, hot tub circuits, outdoor shower wiring, and patio string light hook-ups. We install these amenities with proper weatherproofing and GFCI protection, ensuring they safely withstand the coastal environment.',
      },
    ],
    features: [
      { item: 'Hermosa Beach Pier' },
      { item: 'The Strand' },
      { item: 'Pier Avenue' },
      { item: 'Hermosa Valley Greenbelt' },
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
    city: 'Hermosa Beach',
    features: [
      {
        question: 'Can you work on walk-street homes in Hermosa Beach?',
        answer:
          "Yes — we're experienced with Hermosa's walk streets. We hand-carry all equipment and materials, plan efficient staging, and complete work without disrupting neighbors.",
      },
      {
        question:
          'How does ocean proximity affect my Hermosa Beach electrical?',
        answer:
          'Salt air accelerates corrosion on all outdoor electrical components. We use marine-grade materials exclusively and recommend annual inspections for oceanfront and near-ocean properties.',
      },
      {
        question: 'Can you install a hot tub circuit at my Hermosa Beach home?',
        answer:
          'Yes — we install dedicated 50-amp GFCI-protected circuits for hot tubs, with weatherproof disconnects and proper grounding per NEC requirements.',
      },
    ],
  };

  const areas = {
    city: 'Hermosa Beach',
    features: [
      { item: 'Manhattan Beach', slug: 'manhattan-beach' },
      { item: 'Redondo Beach', slug: 'redondo-beach' },
      { item: 'El Segundo', slug: 'el-segundo' },
      { item: 'Torrance', slug: 'torrance' },
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
      <LocationWhyChooseUs city='Hermosa Beach' />
      <LocationAllServices city='Hermosa Beach' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default HermosaBeachPage;
