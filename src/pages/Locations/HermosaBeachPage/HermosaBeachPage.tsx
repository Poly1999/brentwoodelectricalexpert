import { Anchor, Clock, Footprints, Shield, Star, Zap } from 'lucide-react';
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
    title:
      'Hermosa Beach Electrician — Licensed & Insured Coastal Electrical Services',
    subtitle:
      'Brentwood Electrical Experts serves Hermosa Beach with professional electrical services tailored to the South Bay. From walk-street hand-carry panel upgrades and marine-grade corrosion-resistant installations to Strand-front EV chargers, security lighting, and rooftop deck electrical, our licensed C-10 electricians deliver reliable, code-compliant work throughout Hermosa Beach.',
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Walk-Street Logistics Specialists',
      'Marine-Grade Coastal Hardware',
    ],
    icons: [<Star />, <Footprints />, <Anchor />],
  };

  const about = {
    title: 'About Hermosa Beach',
    city: 'Hermosa Beach',
    heading: 'Electrical Services Tailored to Hermosa Beach Coastal Living',
    challengeTitle: 'Overcoming Walk-Street Logistics and Salt Air Corrosion',
    subtitle:
      'Hermosa Beach is a vibrant, active South Bay beach city of about 20,000 residents celebrated worldwide for its iconic pier, active outdoor lifestyle, and tight-knit community atmosphere.',
    features: [
      { item: 'Classic beachfront cottages and vintage bungalows' },
      { item: 'Contemporary coastal condominiums and multi-family units' },
      { item: 'Modern custom multi-story beach houses' },
      { item: 'Pedestrian-only walk-street residential homes' },
    ],
    challenge:
      "Hermosa Beach's compact beachfront lots, aggressive salt air corrosion, and historic cottage-style architecture present unique engineering challenges. Many residential properties are situated directly on narrow, pedestrian-only walk streets with zero vehicle access, requiring specialized crews who can efficiently hand-carry tools and heavy equipment to the job site.",
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
          'Expert electrical upgrades for Hermosa Beach walk-street homes—executed by experienced crews who plan ahead, efficiently hand-carry materials, and complete projects smoothly in compact spaces.',
      },
      {
        title: 'Marine-Grade Panel Upgrades',
        subtitle:
          "Salt-resistant panel installations built for Hermosa Beach's coastal environment—featuring stainless steel hardware, marine-rated enclosures, and UV-resistant outdoor components.",
      },
      {
        title: 'Beach House Outdoor Electrical',
        subtitle:
          'Rooftop deck lighting, hot tub and spa circuits, outdoor showers, and patio entertainment wiring—all built to safely withstand harsh marine moisture and salt air.',
      },
    ],
  };

  const details = {
    city: 'Hermosa Beach',
    heading: 'Your Trusted Coastal Electrician in Hermosa Beach, California',
    pharagraphs: [
      {
        text: "Hermosa Beach's charming walk-street cottages present unique logistical challenges for electrical service providers. Because these homes lack direct vehicle access, all tools, conduit, panels, and heavy materials must be hand-carried down pedestrian paths to the property. Our crews are thoroughly experienced with these specific coastal logistics: we plan ahead, stage material deliveries efficiently, and bring the right specialized equipment to complete walk-street upgrades without unnecessary delays or disruptions.",
      },
      {
        text: 'Furthermore, ocean salt air is relentless in Hermosa Beach, aggressively attacking every exposed electrical component, screw, and busbar. We exclusively utilize marine-grade electrical panels, stainless steel hardware, and UV-resistant conduits for all exterior installations. For Strand-front and direct oceanside properties, we recommend proactive annual electrical inspections to catch atmospheric corrosion before it compromises safety or triggers equipment failure.',
      },
      {
        text: 'The South Bay beach lifestyle also means that robust outdoor electrical amenities are in extremely high demand—from rooftop deck outlets and hot tub 240V circuits to outdoor shower wiring and custom patio string lighting. We install all exterior amenities using strict weatherproofing standards, heavy-duty enclosures, and flawless GFCI protection, ensuring your outdoor living spaces safely withstand the demanding coastal elements year-round.',
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Hermosa Beach Electrician | Walk-Street & Marine-Grade Panels | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Hermosa Beach & the South Bay. Walk-street hand-carry logistics, marine-grade panels & beach house outdoor electrical. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Hermosa Beach' />
      <LocationAllServices city='Hermosa Beach' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default HermosaBeachPage;
