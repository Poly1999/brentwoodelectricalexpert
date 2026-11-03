import {
  Building2,
  Clock,
  Shield,
  Star,
  UtensilsCrossed,
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

function SawtellePage() {
  const hero = {
    area: 'Sawtelle, CA · 90025',
    title:
      'Sawtelle Electrician — Licensed & Insured Commercial & Residential Services',
    subtitle:
      'Brentwood Electrical Experts serves the culturally rich Sawtelle neighborhood with professional electrical services. From Sawtelle Blvd restaurant kitchen electrical and 1950s apartment panel upgrades to mixed-use new construction wiring and residential repairs, our licensed C-10 electricians deliver quality work at fair prices across Sawtelle and the surrounding Westside.',
    button: 'Request Sawtelle Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Sawtelle Japantown Dining Specialists',
      'Mixed-Use & Apartment Experts',
    ],
    icons: [<Star />, <UtensilsCrossed />, <Building2 />],
  };

  const about = {
    title: 'About Sawtelle',
    city: 'Sawtelle',
    heading: 'Electrical Services Tailored to Sawtelle’s Vibrant Corridor',
    challengeTitle: 'Balancing Compact Dining Venues and Residential Upgrades',
    subtitle:
      'Sawtelle is a culturally rich, highly walkable Westside neighborhood globally celebrated for the world-class Japanese dining and specialty retail corridor along Sawtelle Boulevard. Perfectly positioned between Westwood and Santa Monica, the neighborhood blends historic mid-century residential pockets with modern mixed-use infill developments.',
    features: [
      {
        item: '1950s mid-century apartment buildings and multi-family complexes',
      },
      {
        item: 'Compact commercial restaurant spaces and storefronts on Sawtelle Blvd',
      },
      {
        item: 'Modern mixed-use developments (ground-floor retail with residential flats above)',
      },
      {
        item: 'Thoughtfully renovated single-family homes and residential properties',
      },
    ],
    challenge:
      "Sawtelle’s rapid transformation into one of Los Angeles's premier culinary and cultural districts has driven intense demand for specialized commercial restaurant electrical engineering alongside residential panel modernizations in surrounding blocks. Working within compact, highly dense commercial spaces on Sawtelle Boulevard requires agile crews, precise equipment load calculations, and minimal business downtime.",
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
          "Full-scope commercial electrical for Sawtelle Boulevard's acclaimed dining scene—heavy-duty kitchen equipment circuits, ventilation hood controls, refrigeration power, and atmospheric ambiance lighting.",
      },
      {
        title: 'Apartment Electrical Upgrades',
        subtitle:
          "Main panel upgrades, dedicated sub-circuits, and wiring modernization engineered specifically for Sawtelle's older multi-unit apartment buildings.",
      },
      {
        title: 'Mixed-Use Development Electrical',
        subtitle:
          "Turnkey electrical construction for Sawtelle's modern mixed-use projects—seamlessly powering ground-floor retail spaces and independent residential housing units above.",
      },
    ],
  };

  const details = {
    city: 'Sawtelle',
    heading: 'Your Trusted Local Electrician in Sawtelle, California',
    pharagraphs: [
      {
        text: 'The incredible concentration of authentic Japanese ramen shops, sushi bars, bakeries, and specialty lifestyle shops along Sawtelle Boulevard has established this vibrant corridor as one of the premier dining destinations in Southern California. Each of these dynamic small businesses relies heavily on robust, uninterrupted commercial electrical systems to power complex kitchen cooking lines, heavy-duty exhaust ventilation, walk-in refrigeration units, and custom storefront lighting. We provide specialized restaurant electrical services scaled specifically for Sawtelle’s compact floor plans—delivering efficient, code-compliant installations engineered to eliminate operational downtime.',
      },
      {
        text: 'Simultaneously, the quiet residential blocks radiating outward from Sawtelle Boulevard feature a dense mix of vintage mid-century apartment structures and established single-family homes. A growing number of local residents are actively upgrading their electrical systems to support contemporary living standards—requesting main service panel replacements, additional appliance circuits, Level 2 EV charger installations, and dedicated home office wiring. We offer competitive, transparent pricing and meticulous work environments that fully respect Sawtelle’s accessible community character compared to adjacent upscale enclaves.',
      },
      {
        text: 'Furthermore, Sawtelle’s ongoing urban redevelopment includes contemporary mixed-use projects that successfully combine active ground-floor commercial storefronts with multi-family residential units above. We provide comprehensive new construction and tenant improvement electrical services for these multi-level developments—coordinating commercial kitchen and retail power grids on the ground floor with independent residential panel distributions and modern wiring for the housing units above.',
      },
    ],
    features: [
      { item: 'Sawtelle Japantown' },
      { item: 'Sawtelle Blvd Restaurants' },
      { item: 'West LA Civic Center' },
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Sawtelle Electrician | Sawtelle Blvd Restaurant & Apartment TIs | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Sawtelle (90025). Sawtelle Japantown restaurant electrical, 1950s apartment panel upgrades & mixed-use new construction. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Sawtelle' />
      <LocationAllServices city='Sawtelle' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default SawtellePage;
