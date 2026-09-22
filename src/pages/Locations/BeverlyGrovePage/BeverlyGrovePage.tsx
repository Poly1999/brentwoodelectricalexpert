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

function BeverlyGrovePage() {
  const hero = {
    area: 'Beverly Grove, CA · 90036, 90048',
    title: 'Beverly Grove Electrician — Licensed & Insured',
    subtitle:
      'Need an electrician in Beverly Grove? Brentwood Electrical Experts provides comprehensive electrical services including panel upgrades, outlet installations, lighting, and electrical troubleshooting for this vibrant West LA neighborhood.',
  };

  const about = {
    title: 'About Beverly Grove',
    city: 'Beverly Grove',
    subtitle:
      'Beverly Grove is a centrally located residential neighborhood prized for its walkability, proximity to top dining and shopping, and charming tree-lined streets with a mix of architectural styles.',
    features: [
      { item: 'Spanish-style houses' },
      { item: '1930s duplexes' },
      { item: 'Renovated bungalows' },
      { item: 'Mixed-use commercial' },
    ],
    challenge:
      "Beverly Grove is a desirable, walkable neighborhood with a mix of older single-family homes and duplexes. Many properties are undergoing extensive renovations, requiring complete electrical system modernization. The neighborhood's proximity to the Grove and CBS Television City drives both residential and commercial electrical demand.",
    quote: [
      {
        text: "We're the neighborhood electrician Beverly Grove homeowners trust for renovation projects — from kitchen remodels in Spanish bungalows to whole-home rewiring in pre-war duplexes.",
        subtext: '— Brentwood Electrical Experts, serving Beverly Grove',
      },
    ],
  };

  const popular = {
    city: 'Beverly Grove',
    cards: [
      {
        title: 'Renovation Electrical',
        subtitle:
          'Complete electrical for Beverly Grove home remodels — kitchen circuits, bathroom GFCI, modern lighting layouts, and panel upgrades.',
      },
      {
        title: 'Duplex Electrical Separation',
        subtitle:
          'Upgrade shared duplex electrical systems to independent panels and metering — safer, simpler, and more valuable.',
      },
      {
        title: 'Restaurant & Café Electrical',
        subtitle:
          "Kitchen equipment, lighting, patio electrical, and code compliance for Beverly Grove's acclaimed dining scene.",
      },
    ],
  };

  const details = {
    city: 'Beverly Grove',
    pharagraphs: [
      {
        text: "Beverly Grove's central location and charming housing stock make it one of LA's most sought-after neighborhoods for home renovation. Spanish-style bungalows, Art Deco duplexes, and 1930s cottages are being lovingly updated with modern kitchens, spa-like bathrooms, and open floor plans — all of which require significant electrical upgrades. We provide the electrical backbone for these renovations: panel upgrades, new circuit runs, modern lighting layouts, and smart home integration.",
      },
      {
        text: "The Beverly Grove neighborhood is home to some of LA's best dining — concentrated along Beverly Blvd, 3rd Street, and surrounding blocks. We provide commercial electrical services for these restaurants and cafes, including kitchen equipment circuits, dining room lighting on dimming systems, outdoor patio heating and lighting, and code-required emergency systems.",
      },
      {
        text: 'Many Beverly Grove homes are duplexes or small multi-unit properties with shared electrical systems that may not meet current code for separate metering and individual unit services. We upgrade these shared systems to provide independent electrical services for each unit — important for both safety and property value.',
      },
    ],
    features: [
      { item: 'The Grove' },
      { item: 'Original Farmers Market' },
      { item: 'CBS Television City' },
      { item: 'Pan Pacific Park' },
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
    city: 'Beverly Grove',
    features: [
      {
        question:
          'Can you handle the electrical for a Beverly Grove kitchen remodel?',
        answer:
          'Yes — kitchen remodels are one of our most common Beverly Grove projects. We install dedicated circuits for ranges, dishwashers, disposals, and microwaves, plus under-cabinet lighting, pendant fixtures, and ample GFCI-protected outlets.',
      },
      {
        question:
          'Do you separate shared electrical systems in Beverly Grove duplexes?',
        answer:
          'Yes — we upgrade shared duplex electrical to provide independent panels and metering for each unit. This improves safety, simplifies billing, and increases property value.',
      },
      {
        question: 'Can you install EV charging at a Beverly Grove duplex?',
        answer:
          'Yes — we install EV chargers for both single-family and multi-unit Beverly Grove properties, with proper panel sizing and dedicated circuits for each charging station.',
      },
      {
        question: 'Do you provide restaurant electrical on Beverly Blvd?',
        answer:
          "Absolutely. We handle commercial kitchen electrical, dining room lighting, patio electrical, and all code-required systems for Beverly Grove's thriving restaurant scene.",
      },
    ],
  };

  const areas = {
    city: 'Beverly Grove',
    features: [
      { item: 'Beverly Hills', slug: 'beverly-hills' },
      { item: 'West Hollywood', slug: 'west-hollywood' },
      { item: 'Fairfax', slug: 'fairfax' },
      { item: 'Mid-Wilshire', slug: 'mid-wilshire' },
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
      <LocationWhyChooseUs city='Beverly Grove' />
      <LocationAllServices city='Beverly Grove' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default BeverlyGrovePage;
