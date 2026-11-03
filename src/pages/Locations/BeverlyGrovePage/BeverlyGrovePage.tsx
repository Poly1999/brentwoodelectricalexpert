import {
  Building2,
  ClipboardCheck,
  Clock,
  Shield,
  Star,
  Zap,
} from 'lucide-react';
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
    title:
      'Beverly Grove Electrician — Licensed & Insured Residential & Commercial Electrical Services',
    subtitle:
      'Brentwood Electrical Experts provides comprehensive electrical services for Beverly Grove. From kitchen remodel wiring in Spanish bungalows and multi-family duplex meter separations to Beverly Blvd restaurant tenant improvements and electrical troubleshooting, our licensed C-10 electricians deliver expert service with transparent upfront pricing.',
    button: 'Request Beverly Grove Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Duplex & Multi-Family Specialists',
      'LADBS Permitted Work',
    ],
    icons: [<Star />, <Building2 />, <ClipboardCheck />],
  };

  const about = {
    title: 'About Beverly Grove',
    city: 'Beverly Grove',
    heading: 'Electrical Services Tailored to Beverly Grove Architecture',
    challengeTitle:
      'Modernizing Pre-War Duplexes and Renovation Infrastructure',
    subtitle:
      'Beverly Grove is a centrally located, highly walkable residential neighborhood prized for its vibrant community feel, proximity to top-tier dining and shopping districts, and charming tree-lined streets featuring a rich blend of historic architectural styles.',
    features: [
      {
        item: 'Historic Spanish-style residential houses and character bungalows',
      },
      { item: 'Classic 1930s Art Deco and vintage multi-family duplexes' },
      { item: 'Modernized single-family home renovations' },
      { item: 'Mixed-use commercial properties and retail cafes' },
    ],
    challenge:
      "Beverly Grove features a dense concentration of older single-family homes and vintage multi-family duplexes undergoing extensive architectural renovations. Many properties retain outdated electrical infrastructure that cannot handle modern kitchen appliances, central HVAC systems, or multi-family sub-metering. Furthermore, the neighborhood's bustling commercial vitality near The Grove and CBS Television City drives continuous demand for specialized retail and restaurant electrical work.",
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
          'Complete electrical wiring for Beverly Grove home remodels—featuring dedicated kitchen circuits, bathroom GFCI protection, modern recessed lighting layouts, and heavy-duty panel upgrades.',
      },
      {
        title: 'Duplex Electrical Separation',
        subtitle:
          'Safely upgrade shared vintage duplex electrical systems into independent panels, dedicated meters, and separate service feeds—increasing safety, code compliance, and property value.',
      },
      {
        title: 'Restaurant & Café Electrical',
        subtitle:
          "Heavy-duty kitchen equipment circuits, atmospheric dining lighting, patio heating/lighting, and code-compliant electrical for Beverly Grove's acclaimed dining corridor.",
      },
    ],
  };

  const details = {
    city: 'Beverly Grove',
    heading: 'Your Trusted Local Electrician in Beverly Grove, California',
    pharagraphs: [
      {
        text: "Beverly Grove's ultra-central location and diverse housing inventory make it one of the most sought-after neighborhoods in Los Angeles for high-end residential renovation. Historic Spanish-style bungalows, classic 1930s Art Deco duplexes, and charming vintage cottages are constantly being updated with gourmet kitchens, spa-like primary bathrooms, and open-concept floor plans—all of which require advanced electrical engineering. We provide the essential electrical backbone for these neighborhood renovations: comprehensive panel upgrades, new dedicated circuit runs, modern architectural lighting layouts, and smart home integration.",
      },
      {
        text: "Additionally, the Beverly Grove neighborhood hosts some of Los Angeles's most celebrated dining and retail destinations, concentrated densely along Beverly Boulevard, West 3rd Street, and surrounding commercial corridors. We provide specialized commercial electrical services for these local restaurants, bakeries, and cafes, including heavy equipment circuits, architectural dining room lighting on dimming systems, outdoor patio weatherized heating and lighting, and strict code-mandated emergency egress systems.",
      },
      {
        text: 'Many historic Beverly Grove residential buildings are duplexes or small multi-unit properties originally constructed with shared, single-meter electrical systems that fail to meet modern building codes for separate tenant metering and independent service disconnects. We specialize in upgrading and untangling these complex shared systems to establish fully independent electrical panels and feeds for each individual unit—providing vital protection for landlords and dramatically increasing overall property value.',
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Beverly Grove Electrician | Duplex Separations & Renovation TIs | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Beverly Grove (90036, 90048). Spanish bungalow kitchen remodels, duplex shared panel separations & Beverly Blvd restaurant TIs. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Beverly Grove' />
      <LocationAllServices city='Beverly Grove' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default BeverlyGrovePage;
