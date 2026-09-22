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

function CheviotHillsPage() {
  const hero = {
    area: 'Cheviot Hills, CA · 90064',
    title: 'Cheviot Hills Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts provides trusted residential electrical services for Cheviot Hills homeowners. Our licensed electricians handle panel upgrades, lighting design, outlet installations, and complete electrical remodeling with care and precision.',
  };

  const about = {
    title: 'About Cheviot Hills',
    city: 'Cheviot Hills',
    subtitle:
      'Cheviot Hills is a quiet, prestigious residential neighborhood south of Century City, known for excellent schools, beautiful tree-lined streets, and a strong family-oriented community.',
    features: [
      { item: '1930s traditional homes' },
      { item: 'Colonial Revival' },
      { item: 'Renovated family homes' },
    ],
    challenge:
      "Cheviot Hills' well-established residential character means most electrical work involves upgrading aging systems in older homes — panel replacements, kitchen remodel electrical, and adding capacity for modern demands.",
    quote: [
      {
        text: "Cheviot Hills homeowners value quality and attention to detail — that's exactly what we deliver, with clean installations, transparent pricing, and respect for your home.",
        subtext: '— Brentwood Electrical Experts, serving Cheviot Hills',
      },
    ],
  };

  const popular = {
    city: 'Cheviot Hills',
    cards: [
      {
        title: 'Classic Home Panel Upgrades',
        subtitle:
          "200-amp upgrades for Cheviot Hills' 1930s–1950s homes — the foundation for modern electrical living in a classic neighborhood.",
      },
      {
        title: 'Renovation Electrical',
        subtitle:
          'Kitchen, bathroom, and whole-home remodel electrical — dedicated circuits, modern lighting, and clean installations.',
      },
      {
        title: 'Estate Landscape Lighting',
        subtitle:
          "Professional landscape lighting design and installation for Cheviot Hills' spacious, beautifully landscaped properties.",
      },
    ],
  };

  const details = {
    city: 'Cheviot Hills',
    pharagraphs: [
      {
        text: "Cheviot Hills is one of the Westside's best-kept secrets — a quiet, tree-lined neighborhood where families have been putting down roots for generations. The homes here, primarily built in the 1930s through 1950s, reflect the craftsmanship of their era but often have electrical systems that need modernization. We help Cheviot Hills homeowners thoughtfully upgrade their homes with 200-amp panels, modern lighting, and additional circuits — preserving character while adding modern capability.",
      },
      {
        text: "Kitchen and bathroom remodels are Cheviot Hills' most popular renovation projects. These updates require significant electrical work: dedicated appliance circuits, GFCI-protected outlets, modern lighting layouts, exhaust fan wiring, and heated floor circuits. We coordinate closely with your general contractor and designer to ensure electrical work aligns perfectly with the overall renovation plan.",
      },
      {
        text: "Cheviot Hills' spacious lots and mature landscaping create beautiful outdoor spaces that benefit from professional landscape lighting. We design and install low-voltage LED systems that illuminate specimen trees, pathways, and entertaining areas — adding both beauty and security to your property.",
      },
    ],
    features: [
      { item: 'Rancho Park Golf Course' },
      { item: 'Cheviot Hills Recreation Center' },
      { item: 'Cheviot Hills Park' },
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
    city: 'Cheviot Hills',
    features: [
      {
        question: 'Do Cheviot Hills homes need electrical upgrades?',
        answer:
          'Most do — the majority were built with 100-amp panels and limited circuits. A 200-amp panel upgrade is the recommended starting point for any Cheviot Hills electrical modernization project.',
      },
      {
        question:
          'Can you handle electrical for a Cheviot Hills kitchen remodel?',
        answer:
          'Yes — we install all required kitchen circuits, GFCI outlets, under-cabinet lighting, and fixture connections. We coordinate with your GC to ensure everything is done on schedule.',
      },
      {
        question: 'Do you install landscape lighting in Cheviot Hills?',
        answer:
          "Absolutely — Cheviot Hills' beautiful lots are perfect for landscape lighting. We design and install systems that highlight trees, illuminate pathways, and enhance outdoor entertaining areas.",
      },
    ],
  };

  const areas = {
    city: 'Cheviot Hills',
    features: [
      { item: 'Beverlywood', slug: 'beverlywood' },
      { item: 'Culver City', slug: 'culver-city' },
      { item: 'Century City', slug: 'century-city' },
      { item: 'Westwood', slug: 'westwood' },
      { item: 'West LA', slug: 'west-los-angeles' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Cheviot Hills' />
      <LocationAllServices city='Cheviot Hills' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default CheviotHillsPage;
