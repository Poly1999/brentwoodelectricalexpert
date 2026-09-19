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

function ManhattanBeachPage() {
  const hero = {
    area: 'Manhattan Beach, CA · 90266',
    title: 'Manhattan Beach Electrician — Licensed & Insured',
    subtitle:
      "Brentwood Electrical Experts delivers premium electrical services for Manhattan Beach homes and businesses. From luxury home lighting design and panel upgrades to EV charger installations and smart home automation, we serve the South Bay's most discerning clients.",
  };

  const about = {
    title: 'About Manhattan Beach',
    city: 'Manhattan Beach',
    subtitle:
      "Manhattan Beach is an affluent South Bay beach city of about 35,000 residents, consistently ranked among California's most desirable places to live. Known for its top schools, luxury homes, and strong community identity.",
    features: [
      { item: 'Luxury beach homes' },
      { item: 'Modern coastal builds' },
      { item: 'Sand Section cottages' },
      { item: 'Tree Section family homes' },
    ],
    challenge:
      "Manhattan Beach features some of the South Bay's most valuable residential real estate. Luxury home electrical demands are significant — 200-amp to 400-amp services, smart home automation, security systems, and high-end lighting. Sand Section proximity to the ocean means aggressive salt air corrosion.",
    quote: [
      {
        text: "Manhattan Beach homeowners expect premium quality — in their homes, their lifestyle, and their service providers. We deliver the caliber of electrical work that Manhattan Beach's finest homes deserve.",
        subtext: '— Brentwood Electrical Experts, serving Manhattan Beach',
      },
    ],
  };

  const popular = {
    city: 'Manhattan Beach',
    cards: [
      {
        title: 'Luxury Home Electrical',
        subtitle:
          "320-amp to 400-amp services, whole-home automation, and premium electrical systems for Manhattan Beach's finest Sand Section residences.",
      },
      {
        title: 'Coastal-Grade Installations',
        subtitle:
          "Marine-grade panels, corrosion-resistant hardware, and coastal-rated components for long-lasting performance in Manhattan Beach's salt air environment.",
      },
      {
        title: 'Smart Home & Lighting Control',
        subtitle:
          "Lutron, Sonos, Savant — whole-home automation and lighting design for Manhattan Beach's tech-savvy, design-conscious homeowners.",
      },
      {
        title: 'Outdoor Living Electrical',
        subtitle:
          "Pool, spa, outdoor kitchen, sport court, and landscape lighting — premium outdoor electrical for Manhattan Beach's active lifestyle.",
      },
    ],
  };

  const details = {
    city: 'Manhattan Beach',
    pharagraphs: [
      {
        text: "Manhattan Beach's Sand Section — the blocks between Strand and Manhattan Beach Boulevard — features some of the most valuable residential real estate in the South Bay. These luxury homes, many recently built or extensively remodeled, demand sophisticated electrical systems: 320-amp or 400-amp services, whole-home Lutron lighting control, Sonos or Savant audio distribution, security camera networks, and dedicated circuits for wine rooms, saunas, and professional-grade kitchens.",
      },
      {
        text: "The Tree Section, Manhattan Beach's family-oriented neighborhood, features a mix of original homes and modern new builds. Families here are investing in practical upgrades — panel replacements, EV charger installations, kitchen remodel electrical, and landscape lighting. We serve Tree Section homeowners with the same quality and attention to detail we bring to the Sand Section's luxury builds.",
      },
      {
        text: "Manhattan Beach's proximity to the ocean means salt air corrosion is a constant concern — even homes several blocks inland are affected. We spec marine-grade materials for all exterior electrical work and educate homeowners about the maintenance implications of coastal living. Our goal is to install systems that perform reliably for decades, not just years.",
      },
      {
        text: "Manhattan Beach's active outdoor lifestyle drives demand for sophisticated outdoor electrical — pool and spa equipment, outdoor kitchens with commercial-grade appliances, fire pits, sport court lighting, and elaborate landscape illumination. We design these systems for durability, safety, and seamless integration with the home's overall electrical infrastructure.",
      },
    ],
    features: [
      { item: 'Manhattan Beach Pier' },
      { item: 'Manhattan Beach Boulevard' },
      { item: 'Metlox Plaza' },
      { item: 'Polliwog Park' },
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
    city: 'Manhattan Beach',
    features: [
      {
        question:
          'Do you work on luxury homes in the Manhattan Beach Sand Section?',
        answer:
          'Yes — we provide premium electrical services for Sand Section homes, including large-scale panel services, whole-home automation, security systems, and sophisticated lighting design.',
      },
      {
        question:
          'What size electrical service do Manhattan Beach luxury homes need?',
        answer:
          'Sand Section and larger Tree Section homes typically need 320-amp or 400-amp services to support the combined demands of HVAC, pool equipment, EV chargers, smart home systems, and high-end kitchen appliances.',
      },
      {
        question:
          'Can you install Lutron lighting control in my Manhattan Beach home?',
        answer:
          "Yes — we install Lutron Caseta, RadioRA 3, and HomeWorks QSX systems. We design custom lighting scenes that enhance your Manhattan Beach home's ambiance while providing energy-efficient control.",
      },
      {
        question:
          'Do you install outdoor electrical for Manhattan Beach pool and spa areas?',
        answer:
          'Absolutely — we install pool sub-panels, spa circuits, outdoor kitchen electrical, landscape lighting, and all associated outdoor infrastructure with marine-grade, corrosion-resistant components.',
      },
    ],
  };

  const areas = {
    city: 'Manhattan Beach',
    features: [
      { item: 'Hermosa Beach', slug: 'hermosa-beach' },
      { item: 'Redondo Beach', slug: 'redondo-beach' },
      { item: 'El Segundo', slug: 'el-segundo' },
      { item: 'Hawthorne', slug: 'hawthorne' },
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
      <LocationWhyChooseUs city='Manhattan Beach' />
      <LocationAllServices city='Manhattan Beach' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default ManhattanBeachPage;
