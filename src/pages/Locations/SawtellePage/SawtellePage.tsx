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

function SawtellePage() {
  const hero = {
    area: 'Sawtelle, CA · 90025',
    title: 'Sawtelle Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts serves the Sawtelle neighborhood with professional electrical services. From residential repairs and outlet installations to commercial electrical work and panel upgrades, we deliver quality work at fair prices.',
  };

  const about = {
    title: 'About Sawtelle',
    city: 'Sawtelle',
    subtitle:
      'Sawtelle is a culturally rich Westside neighborhood famous for its Japanese dining corridor on Sawtelle Blvd, diverse community, and convenient location between Westwood and Santa Monica.',
    features: [
      { item: '1950s apartments' },
      { item: 'Small commercial buildings' },
      { item: 'Mixed-use on Sawtelle Blvd' },
      { item: 'Renovated residences' },
    ],
    challenge:
      "Sawtelle's transformation into a vibrant dining and cultural district has increased demand for both commercial restaurant electrical and residential upgrades in the surrounding neighborhoods.",
    quote: [
      {
        text: "From ramen shops to residential rewires, we serve Sawtelle's unique blend of commercial dining energy and residential neighborhood charm.",
        subtext: '— Brentwood Electrical Experts, serving Sawtelle',
      },
    ],
  };

  const popular = {
    city: 'Sawtelle',
    cards: [
      {
        title: 'Restaurant & Kitchen Electrical',
        subtitle:
          "Commercial electrical for Sawtelle Blvd's acclaimed dining scene — kitchen equipment, ventilation, refrigeration, and ambiance lighting.",
      },
      {
        title: 'Apartment Electrical Upgrades',
        subtitle:
          "Panel upgrades, additional circuits, and wiring modernization for Sawtelle's older apartment buildings.",
      },
      {
        title: 'Mixed-Use Development Electrical',
        subtitle:
          "Complete electrical for Sawtelle's new mixed-use projects — commercial ground floors and residential units above.",
      },
    ],
  };

  const details = {
    city: 'Sawtelle',
    pharagraphs: [
      {
        text: "Sawtelle Blvd's incredible concentration of Japanese restaurants, bakeries, and specialty shops makes this corridor one of LA's top dining destinations. Each of these small businesses relies on commercial electrical systems for kitchen equipment, ventilation, refrigeration, and ambiance lighting. We provide restaurant electrical services scaled for Sawtelle's mostly compact spaces — efficient, code-compliant, and designed to minimize disruption.",
      },
      {
        text: "The residential blocks surrounding Sawtelle Blvd feature a mix of older apartments and single-family homes. Many residents are upgrading their electrical systems to support modern living — panel upgrades, additional outlets, EV charger installations, and home office circuits. We offer competitive pricing and clean work that respects Sawtelle's more accessible price point.",
      },
      {
        text: "Sawtelle's ongoing redevelopment includes new mixed-use projects combining ground-floor commercial with residential above. We provide electrical services for these developments — commercial kitchen and retail electrical on the ground floor, residential panel and wiring for the units above.",
      },
    ],
    features: [
      { item: 'Sawtelle Japantown' },
      { item: 'Sawtelle Blvd restaurants' },
      { item: 'West LA Civic Center' },
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
    city: 'Sawtelle',
    features: [
      {
        question: 'Do you provide restaurant electrical for Sawtelle Blvd?',
        answer:
          'Yes — we wire kitchens, install ventilation electrical, set up refrigeration circuits, and install dining room lighting for restaurants along Sawtelle Blvd.',
      },
      {
        question: 'Can you upgrade the electrical in a Sawtelle apartment?',
        answer:
          'Yes — we work with Sawtelle apartment owners and tenants to upgrade electrical panels, add circuits, and modernize outdated wiring in older apartment units.',
      },
      {
        question: 'Do you handle mixed-use building electrical in Sawtelle?',
        answer:
          "Yes — we provide both commercial and residential electrical for Sawtelle's new mixed-use developments.",
      },
    ],
  };

  const areas = {
    city: 'Sawtelle',
    features: [
      { item: 'West LA', slug: 'west-los-angeles' },
      { item: 'Westwood', slug: 'westwood' },
      { item: 'Santa Monica', slug: 'santa-monica' },
      { item: 'Mar Vista', slug: 'mar-vista' },
      { item: 'Brentwood', slug: 'brentwood' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Sawtelle' />
      <LocationAllServices city='Sawtelle' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default SawtellePage;
