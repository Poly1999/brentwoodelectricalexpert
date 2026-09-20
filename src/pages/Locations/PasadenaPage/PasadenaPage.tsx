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

function PasadenaPage() {
  const hero = {
    area: 'Pasadena, CA · 91101, 91103, 91104, 91105, 91106, 91107',
    title: 'Pasadena Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts provides expert electrical services in Pasadena. From historic home rewiring and panel upgrades to modern EV charger installations and smart home systems, our licensed electricians serve Pasadena with quality and care.',
  };

  const about = {
    title: 'About Pasadena',
    city: 'Pasadena',
    subtitle:
      "Pasadena is a culturally rich city of about 138,000 residents, known for the Rose Bowl, Caltech, world-class museums, and some of Southern California's finest Craftsman architecture.",
    features: [
      { item: 'Craftsman bungalows' },
      { item: 'Victorian homes' },
      { item: 'Spanish Colonial Revival' },
      { item: 'Mid-century modern' },
    ],
    challenge:
      'Pasadena has a significant stock of historic homes — many designated landmarks — that require sensitive electrical upgrades respecting original architecture. The city has its own utility (Pasadena Water and Power) and building department with distinct requirements.',
    quote: [
      {
        text: 'We bring specialized expertise in historic home electrical to Pasadena — upgrading century-old Craftsman bungalows and Victorian homes with modern safety while preserving their architectural heritage.',
        subtext: '— Brentwood Electrical Experts, serving Pasadena',
      },
    ],
  };

  const popular = {
    city: 'Pasadena',
    cards: [
      {
        title: 'Historic Home Electrical',
        subtitle:
          'Sensitive electrical upgrades for Pasadena Craftsman bungalows, Victorians, and Spanish Colonial homes — modern safety without compromising character.',
      },
      {
        title: 'Pasadena Water & Power Coordination',
        subtitle:
          "Service upgrades, panel replacements, and solar interconnections coordinated directly with Pasadena's municipal utility.",
      },
      {
        title: 'Smart Home in Historic Homes',
        subtitle:
          "Modern automation, smart lighting, and structured wiring installations designed for Pasadena's older architectural styles.",
      },
      {
        title: 'Old Town Commercial Electrical',
        subtitle:
          "Tenant improvement wiring, lighting, and kitchen circuits for restaurants and retail in Pasadena's historic commercial districts.",
      },
    ],
  };

  const details = {
    city: 'Pasadena',
    pharagraphs: [
      {
        text: "Pasadena is the cradle of the American Craftsman movement, and its bungalow neighborhoods — from the Bungalow Heaven Landmark District to the Arroyo Seco corridor — contain some of the finest examples of early 20th-century residential architecture in the country. Upgrading the electrical systems in these homes requires sensitivity, skill, and respect for original materials. We carefully route new wiring to avoid visible modifications, use period-appropriate cover plates and fixtures where desired, and bring the electrical system up to modern safety standards while preserving the home's historic character.",
      },
      {
        text: "Pasadena operates its own municipal utility — Pasadena Water and Power (PWP) — which means electrical service connections, metering, and some code requirements differ from Edison-served areas. We're thoroughly familiar with PWP's specific processes for service upgrades, meter installations, and interconnection for solar and EV charger projects.",
      },
      {
        text: "Pasadena's South Lake Avenue commercial district, Old Town, and Colorado Blvd corridor feature restaurants, boutiques, and offices that need reliable commercial electrical services. We provide tenant improvement wiring, lighting upgrades, kitchen circuits, and signage electrical for Pasadena's thriving commercial areas.",
      },
      {
        text: "Caltech and the surrounding South Pasadena-adjacent neighborhoods attract tech-savvy homeowners who want modern electrical infrastructure in older homes. We install smart home systems, structured wiring, dedicated home office circuits, and EV chargers — bridging the gap between Pasadena's historic housing stock and modern technology demands.",
      },
    ],
    features: [
      { item: 'Rose Bowl' },
      { item: 'Old Town Pasadena' },
      { item: 'Caltech' },
      { item: 'Norton Simon Museum' },
      { item: 'The Huntington' },
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
    city: 'Pasadena',
    features: [
      {
        question:
          'Can you upgrade the electrical in a historic Pasadena Craftsman home?',
        answer:
          'Yes — historic home electrical is one of our specialties. We upgrade panels, rewire circuits, and add capacity while respecting original architecture. We route wiring through existing wall cavities, use period-appropriate cover plates, and minimize visible modifications.',
      },
      {
        question: 'Does Pasadena have its own electric utility?',
        answer:
          "Yes — Pasadena Water and Power (PWP) is the municipal utility. Service upgrades, meter changes, and solar interconnections go through PWP rather than SCE. We're thoroughly familiar with PWP's processes and coordinate directly with them.",
      },
      {
        question:
          'Can you install an EV charger in a Pasadena home with an older panel?',
        answer:
          'Yes — we bundle panel upgrades and EV charger installations for Pasadena homeowners. We coordinate with Pasadena Water and Power for any required service upgrades.',
      },
      {
        question: 'Do you work in the Bungalow Heaven Landmark District?',
        answer:
          "Yes — we've completed numerous projects in Bungalow Heaven and other Pasadena landmark districts. We understand the additional considerations for homes in designated historic zones.",
      },
    ],
  };

  const areas = {
    city: 'Pasadena',
    features: [
      { item: 'Altadena', slug: 'altadena' },
      { item: 'South Pasadena', slug: 'south-pasadena' },
      { item: 'San Marino', slug: 'san-marino' },
      { item: 'Eagle Rock', slug: 'eagle-rock' },
      { item: 'Glendale', slug: 'glendale' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Pasadena' />
      <LocationAllServices city='Pasadena' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default PasadenaPage;
