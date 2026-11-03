import { Clock, Fan, Shield, Star, Zap } from 'lucide-react';
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
    title:
      'Beverly Glen Electrician — Licensed & Insured Canyon Electrical Services',
    subtitle:
      'Brentwood Electrical Experts serves the Beverly Glen community with expert residential electrical services. From 200-amp panel upgrades and Level 2 EV charger installations to automatic standby generators, security lighting, and smart home systems, our licensed C-10 electricians deliver reliable, code-compliant work throughout Beverly Glen Canyon and the surrounding Westside hills.',
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Canyon Access & Code Compliant',
      'Backup Generator Specialists',
    ],
    icons: [<Star />, <Shield />, <Fan />],
  };

  const about = {
    title: 'About Beverly Glen',
    city: 'Beverly Glen',
    heading: 'Electrical Services Tailored to Beverly Glen Canyon',
    challengeTitle: "Navigating Beverly Glen's Canyon Infrastructure",
    subtitle:
      "Beverly Glen is a quiet, wooded canyon community connecting Bel Air and the San Fernando Valley. Residents enjoy a peaceful rural feel within minutes of the Westside's urban amenities.",
    features: [
      { item: 'Secluded canyon homes and hillside retreats' },
      { item: 'Rustic cabin-style and vintage properties' },
      { item: 'Contemporary architectural builds' },
    ],
    challenge:
      'Beverly Glen Canyon is a secluded residential corridor featuring homes that often have limited street access, legacy electrical infrastructure, and high vulnerability to power outages during winter storms and Public Safety Power Shutoff (PSPS) events.',
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
          "Modern 200-amp service panels designed for Beverly Glen's older canyon homes—safely powering modern kitchen appliances, Level 2 EV chargers, and home offices.",
      },
      {
        title: 'Standby Generator Installation',
        subtitle:
          'Automatic backup power systems for Beverly Glen properties—essential protection against high-wind PSPS shutoffs and storm-related grid failures.',
      },
      {
        title: 'Canyon Landscape Lighting',
        subtitle:
          "Low-voltage LED landscape lighting tailored to Beverly Glen's wooded, natural setting—ensuring nighttime pathway safety and warm outdoor ambiance.",
      },
    ],
  };

  const details = {
    city: 'Beverly Glen',
    heading: 'Your Trusted Canyon Electrician in Beverly Glen, California',
    pharagraphs: [
      {
        text: 'Beverly Glen Canyon feels worlds away from the city bustle, but its older homes face distinctly urgent electrical challenges—aging panels, limited circuit capacity, and acute vulnerability to the power outages that plague hillside and wooded corridors. We provide the essential electrical upgrades that bring Beverly Glen homes into the modern era: comprehensive panel replacements, additional dedicated circuits, EV charger installations, and whole-home surge protection.',
      },
      {
        text: 'Standby generator installations are particularly critical in Beverly Glen, where seasonal PSPS shutoffs and storm-related branch-line failures can leave properties without power for hours or days. We install reliable standby generators that automatically restore power within seconds, keeping refrigerators running, security systems active, and families safe and comfortable until utility power returns.',
      },
      {
        text: "Beverly Glen's tree-canopied properties also benefit immensely from professional landscape lighting—illuminating winding pathways for safety on dark canyon nights, accenting mature trees, and establishing a warm outdoor atmosphere. We engineer custom low-voltage LED systems that respect and complement the natural beauty of the canyon environment.",
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Beverly Glen Electrician | Canyon Electrical Services | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Beverly Glen Canyon. Panel upgrades, standby generators for PSPS outages & canyon landscape lighting. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Beverly Glen' />
      <LocationAllServices city='Beverly Glen' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default BeverlyGlenPage;
