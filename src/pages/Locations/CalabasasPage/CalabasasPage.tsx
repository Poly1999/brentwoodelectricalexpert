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

function CalabasasPage() {
  const hero = {
    area: 'Calabasas, CA · 91302',
    title: 'Calabasas Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts extends premium electrical services to Calabasas homeowners and businesses. Our licensed team handles panel upgrades, smart home installations, security systems, lighting design, and all residential and commercial electrical needs.',
  };

  const about = {
    title: 'About Calabasas',
    city: 'Calabasas',
    subtitle:
      'Calabasas is an affluent city in the western San Fernando Valley, known for its gated communities, celebrity residents, and beautiful hillside setting at the base of the Santa Monica Mountains.',
    features: [
      { item: 'Gated community estates' },
      { item: 'Mediterranean villas' },
      { item: 'Modern luxury homes' },
    ],
    challenge:
      "Calabasas' large estate homes require substantial electrical systems. The community's fire-prone location in the Santa Monica Mountains foothills means fire-hardened electrical infrastructure is essential.",
    quote: [
      {
        text: 'We bring Westside quality and expertise to Calabasas — large-scale residential electrical, fire-hardened systems, and the attention to detail that Calabasas homeowners expect.',
        subtext: '— Brentwood Electrical Experts, serving Calabasas',
      },
    ],
  };

  const popular = {
    city: 'Calabasas',
    cards: [
      {
        title: 'Estate Electrical Systems',
        subtitle:
          'Large-scale residential electrical for Calabasas gated communities — 200-400 amp services, multiple panels, and whole-home infrastructure.',
      },
      {
        title: 'Fire-Hardened Electrical',
        subtitle:
          'Underground services, ember-resistant enclosures, and backup generators for fire-zone Calabasas homes.',
      },
      {
        title: 'Outdoor Living Electrical',
        subtitle:
          "Pool equipment, outdoor kitchens, fire pits, sport courts, and landscape lighting for Calabasas' indoor-outdoor lifestyle.",
      },
    ],
  };

  const details = {
    city: 'Calabasas',
    pharagraphs: [
      {
        text: "Calabasas' gated communities — The Oaks, Calabasas Hills, Mountain View Estates — feature large homes with substantial electrical demands. 200-amp to 400-amp services, multiple sub-panels, pool and spa equipment, whole-home automation, and elaborate landscape lighting are standard for properties in this market. We design and install electrical systems that match the scale and quality of Calabasas' finest homes.",
      },
      {
        text: 'Fire preparedness is critical in Calabasas, situated at the wildland-urban interface of the Santa Monica Mountains. The 2018 Woolsey Fire reminded the community of this risk. We install fire-hardened electrical systems — underground services, ember-resistant enclosures, whole-home generators, and hardwired smoke detection — that provide meaningful protection and meet current WUI building codes.',
      },
      {
        text: 'Calabasas homeowners enjoy expansive outdoor living — pools, outdoor kitchens, fire pits, sport courts, and extensive landscape lighting. We install robust outdoor electrical systems with weather-rated panels, GFCI protection, and commercial-grade fixtures designed for the hot, dry Calabasas climate.',
      },
    ],
    features: [
      { item: 'The Commons at Calabasas' },
      { item: 'Malibu Canyon' },
      { item: 'Calabasas Lake' },
      { item: 'Hidden Hills nearby' },
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
    city: 'Calabasas',
    features: [
      {
        question: 'Do you serve all gated communities in Calabasas?',
        answer:
          "Yes — we work in The Oaks, Calabasas Hills, Mountain View Estates, and all Calabasas gated communities. We're familiar with gate access procedures and HOA requirements.",
      },
      {
        question: 'Do you install fire-hardened electrical in Calabasas?',
        answer:
          'Yes — we install underground services, ember-resistant panels, generators, and fire-rated wiring for Calabasas homes in the wildland-urban interface zone.',
      },
      {
        question:
          'Can you install pool and outdoor kitchen electrical in Calabasas?',
        answer:
          'Absolutely — we install pool sub-panels, outdoor kitchen circuits, fire pit wiring, landscape lighting, and all outdoor electrical for Calabasas properties.',
      },
    ],
  };

  const areas = {
    city: 'Calabasas',
    features: [
      { item: 'Woodland Hills', slug: 'woodland-hills' },
      { item: 'Hidden Hills', slug: 'hidden-hills' },
      { item: 'Agoura Hills', slug: 'agoura-hills' },
      { item: 'Malibu', slug: 'malibu' },
      { item: 'Westlake Village', slug: 'westlake-village' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Calabasas' />
      <LocationAllServices city='Calabasas' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default CalabasasPage;
