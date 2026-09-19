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

function BeverlyGlenPage() {
  const hero = {
    area: 'Beverly Glen, CA · 90077',
    title: 'Beverly Glen Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts serves the Beverly Glen community with expert residential electrical services. From panel upgrades and EV charger installation to security lighting and smart home systems, we deliver reliable, code-compliant work.',
  };

  const about = {
    title: 'About Beverly Glen',
    city: 'Beverly Glen',
    subtitle:
      "Beverly Glen is a quiet, wooded canyon community connecting Bel Air and the San Fernando Valley. Residents enjoy a rural feel within minutes of the Westside's urban amenities.",
    features: [
      { item: 'Canyon homes' },
      { item: 'Rustic retreats' },
      { item: 'Contemporary builds' },
    ],
    challenge:
      'Beverly Glen Canyon is a secluded residential corridor with homes that often have limited street access, older infrastructure, and vulnerability to power outages during storms and PSPS events.',
    quote: [
      {
        text: "We know Beverly Glen Canyon's winding roads, older homes, and unique infrastructure — our team delivers reliable electrical solutions for this secluded canyon community.",
        subtext: '— Brentwood Electrical Experts, serving Beverly Glen',
      },
    ],
  };

  const popular = {
    city: 'Beverly Glen',
    cards: [
      {
        title: 'Canyon Home Panel Upgrades',
        subtitle:
          "Modern 200-amp panels for Beverly Glen's older canyon homes — safely power modern appliances, EV chargers, and home offices.",
      },
      {
        title: 'Standby Generator Installation',
        subtitle:
          'Automatic backup power for Beverly Glen properties — essential protection against PSPS shutoffs and storm outages.',
      },
      {
        title: 'Canyon Landscape Lighting',
        subtitle:
          "Low-voltage LED landscape lighting designed for Beverly Glen's wooded, natural setting — pathway safety and ambient beauty.",
      },
    ],
  };

  const details = {
    city: 'Beverly Glen',
    pharagraphs: [
      {
        text: 'Beverly Glen Canyon feels worlds away from the city, but its older homes face distinctly urban electrical problems — aging panels, limited circuits, and vulnerability to the power outages that plague hillside communities. We provide the electrical upgrades that bring Beverly Glen homes into the modern era: panel replacements, additional circuits, EV charger installations, and whole-home surge protection.',
      },
      {
        text: 'Generator installations are particularly popular in Beverly Glen, where PSPS shutoffs and storm-related outages can leave homes without power for hours or days. We install standby generators that automatically restore power, keeping refrigerators running, security systems active, and families comfortable until grid power returns.',
      },
      {
        text: "Beverly Glen's tree-canopied properties benefit greatly from professional landscape lighting — illuminating pathways for safety on dark canyon nights, highlighting mature trees, and creating warm outdoor ambiance. We design low-voltage LED systems that complement the natural beauty of the canyon environment.",
      },
    ],
    features: [
      { item: 'Beverly Glen Canyon' },
      { item: 'Beverly Glen Deli' },
      { item: 'Beverly Glen Blvd' },
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
    city: 'Beverly Glen',
    features: [
      {
        question: 'Do you serve homes throughout Beverly Glen Canyon?',
        answer:
          "Yes — we serve all of Beverly Glen Canyon, from the lower Bel Air end to the Valley crest. We're familiar with the canyon's winding roads and access challenges.",
      },
      {
        question: 'Are PSPS outages common in Beverly Glen?',
        answer:
          'Yes — Beverly Glen is in a high fire-risk zone where PSPS shutoffs can occur during high wind events. A whole-home generator with automatic transfer switch ensures your home stays powered during these events.',
      },
      {
        question: 'Can you upgrade the panel in an older Beverly Glen home?',
        answer:
          'Absolutely. Many Beverly Glen homes have original 100-amp or even 60-amp panels. We upgrade to 200 amps with modern breaker panels, bringing your system up to current code and capacity standards.',
      },
    ],
  };

  const areas = {
    city: 'Beverly Glen',
    features: [
      { item: 'Bel Air', slug: 'bel-air' },
      { item: 'Brentwood', slug: 'brentwood' },
      { item: 'Beverly Crest', slug: 'beverly-crest' },
      { item: 'Westwood', slug: 'westwood' },
      { item: 'Sherman Oaks', slug: 'sherman-oaks' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Brentwood' />
      <LocationAllServices city='Brentwood' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default BeverlyGlenPage;
