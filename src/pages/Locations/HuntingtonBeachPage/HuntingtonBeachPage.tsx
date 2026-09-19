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

function HuntingtonBeachPage() {
  const hero = {
    area: 'Huntington Beach, CA · 92646, 92647, 92648, 92649',
    title: 'Huntington Beach Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts extends our professional electrical services to Huntington Beach. From panel upgrades and EV charger installations to security systems and lighting design, our licensed electricians serve Surf City with the same quality and reliability our West LA clients trust.',
  };

  const about = {
    title: 'About Huntington Beach',
    city: 'Huntington Beach',
    subtitle:
      "Huntington Beach — 'Surf City USA' — is a large Orange County coastal city of about 200,000 residents, known for its iconic pier, surf culture, and diverse residential neighborhoods.",
    features: [
      { item: 'Beach bungalows' },
      { item: 'Suburban tract homes' },
      { item: 'Coastal condominiums' },
      { item: 'Downtown HB mixed-use' },
    ],
    challenge:
      'Huntington Beach is our furthest service area, with a diverse housing stock ranging from downtown beach bungalows to large inland tract homes. Coastal properties face salt air corrosion, while inland homes often need modernization of 1960s-1970s electrical systems.',
    quote: [
      {
        text: 'We extend our West LA quality and expertise to Surf City — Huntington Beach homeowners get the same licensed, professional electrical services our Westside clients have trusted for years.',
        subtext: '— Brentwood Electrical Experts, serving Huntington Beach',
      },
    ],
  };

  const popular = {
    city: 'Huntington Beach',
    cards: [
      {
        title: 'Coastal Home Electrical',
        subtitle:
          'Marine-grade electrical installations for downtown Huntington Beach and beachfront properties — corrosion-resistant components built for the ocean environment.',
      },
      {
        title: 'Tract Home Panel Upgrades',
        subtitle:
          "200-amp panel upgrades for Huntington Beach's 1960s-1970s neighborhoods — safely power EV chargers, modern appliances, and home offices.",
      },
      {
        title: 'EV Charger Installation',
        subtitle:
          'Level 2 home charging for all EV makes — Tesla, BMW, Rivian, and more — with dedicated circuits and HB city permits included.',
      },
      {
        title: 'Main Street Commercial Electrical',
        subtitle:
          "Restaurant, retail, and office electrical for Huntington Beach's thriving downtown and Pacific City commercial areas.",
      },
    ],
  };

  const details = {
    city: 'Huntington Beach',
    pharagraphs: [
      {
        text: "Huntington Beach's downtown and beachfront neighborhoods feature charming bungalows and coastal homes that face the same salt air challenges as their South Bay and West LA counterparts. We bring our coastal electrical expertise to these properties — marine-grade panels, corrosion-resistant hardware, and weatherproof outdoor installations designed for decades of reliable performance in the ocean air environment.",
      },
      {
        text: 'The inland neighborhoods of Huntington Beach — from Huntington Harbour to the areas east of Beach Blvd — feature thousands of 1960s-1970s tract homes that are prime candidates for electrical modernization. Panel upgrades, EV charger installations, kitchen remodel circuits, and whole-home surge protection are our most popular services in these neighborhoods.',
      },
      {
        text: "Huntington Beach's booming restaurant scene on Main Street and Pacific City, plus its extensive commercial corridors, create strong demand for commercial electrical services. We provide tenant improvement wiring, kitchen equipment circuits, outdoor patio electrical, and lighting upgrades for HB businesses.",
      },
      {
        text: "With Southern California's growing EV adoption, Huntington Beach homeowners are increasingly requesting home charging installations. We install Level 2 chargers for all vehicle makes — Tesla, BMW, Ford, Rivian, Hyundai, and more — with dedicated circuits, panel upgrades when needed, and clean conduit routing.",
      },
    ],
    features: [
      { item: 'Huntington Beach Pier' },
      { item: 'Pacific City' },
      { item: 'Main Street HB' },
      { item: 'Bolsa Chica Ecological Reserve' },
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
    city: 'Huntington Beach',
    features: [
      {
        question: 'Do you really travel to Huntington Beach?',
        answer:
          'Yes — Huntington Beach is part of our extended service area. We provide the same quality, professionalism, and competitive pricing to HB customers as we do throughout the Westside and South Bay.',
      },
      {
        question: 'Can you install an EV charger at my Huntington Beach home?',
        answer:
          'Yes — we install Level 2 EV chargers for Huntington Beach homeowners, including panel upgrades when needed. We handle permits through the City of Huntington Beach Building Division.',
      },
      {
        question:
          'Do you work on beachfront homes in downtown Huntington Beach?',
        answer:
          "Yes — we install corrosion-resistant, marine-grade electrical systems for downtown HB's coastal properties, using the same salt-air expertise we bring to Hermosa Beach and Manhattan Beach.",
      },
      {
        question:
          'Can you upgrade a 1970s tract home panel in Huntington Beach?',
        answer:
          "Absolutely — we upgrade 100-amp and 150-amp panels to 200 amps in HB's tract home neighborhoods. This is the foundation for safely adding EV chargers, modern HVAC, and other electrical improvements.",
      },
    ],
  };

  const areas = {
    city: 'Huntington Beach',
    features: [
      { item: 'Seal Beach', slug: 'seal-beach' },
      { item: 'Costa Mesa', slug: 'costa-mesa' },
      { item: 'Fountain Valley', slug: 'fountain-valley' },
      { item: 'Westminster', slug: 'westminster' },
      { item: 'Newport Beach', slug: 'newport-beach' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Huntington Beach' />
      <LocationAllServices city='Huntington Beach' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default HuntingtonBeachPage;
