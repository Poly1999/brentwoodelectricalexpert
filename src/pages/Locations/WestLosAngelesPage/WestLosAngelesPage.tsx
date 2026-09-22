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

function WestLosAngelesPage() {
  const hero = {
    area: 'West Los Angeles, CA · 90025, 90064',
    title: 'West Los Angeles Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts is the trusted electrician for West Los Angeles. We provide comprehensive residential and commercial electrical services including panel upgrades, EV charger installations, lighting, and emergency electrical repairs across the entire West LA region.',
  };

  const about = {
    title: 'About West Los Angeles',
    city: 'West Los Angeles',
    subtitle:
      "West Los Angeles is a broad Westside community encompassing multiple sub-neighborhoods, offering convenient access to the 405 freeway, Expo Line, and all of the Westside's amenities.",
    features: [
      { item: 'Mid-century homes' },
      { item: 'Apartment complexes' },
      { item: 'Commercial properties' },
      { item: 'VA campus adjacent' },
    ],
    challenge:
      'West LA is a large, diverse area with electrical needs ranging from aging apartment building upgrades to commercial property improvements. The proximity of the VA campus and major transportation corridors creates varied demand.',
    quote: [
      {
        text: "As West LA's local electrical contractor, we understand the diversity of this community — from apartment buildings near the VA campus to single-family homes in Westdale, we serve it all.",
        subtext: '— Brentwood Electrical Experts, serving West Los Angeles',
      },
    ],
  };

  const popular = {
    city: 'West Los Angeles',
    cards: [
      {
        title: 'Residential Modernization',
        subtitle:
          "Panel upgrades, additional circuits, and smart home wiring for West LA's mid-century single-family homes.",
      },
      {
        title: 'Apartment Building Electrical',
        subtitle:
          'Main panel replacements, unit upgrades, and EV charging infrastructure for West LA multi-unit properties.',
      },
      {
        title: 'Commercial Tenant Improvements',
        subtitle:
          "Electrical build-outs for offices, restaurants, and retail spaces along West LA's major commercial corridors.",
      },
    ],
  };

  const details = {
    city: 'West Los Angeles',
    pharagraphs: [
      {
        text: "West Los Angeles covers a large, diverse area with electrical needs that span the full spectrum. Mid-century homes in the Westdale and Rancho Park sub-neighborhoods need panel upgrades and modernization. Apartment buildings near the VA campus and along Sepulveda require infrastructure upgrades. Commercial properties along Olympic, Pico, and National need tenant improvement electrical. We serve all of these needs as the Westside's comprehensive electrical contractor.",
      },
      {
        text: "The Expo Line has spurred development along West LA's major corridors, bringing new mixed-use buildings, restaurants, and commercial spaces that need professional electrical installation. We've been involved in numerous projects along the Expo Line corridor, providing new construction electrical for transit-oriented developments.",
      },
      {
        text: "West LA's residential neighborhoods are popular with young professionals and families who want modern electrical amenities — EV chargers, smart home systems, home office circuits, and updated lighting — in homes that may be 50-70 years old. We bridge this gap with efficient, cost-effective electrical upgrades.",
      },
    ],
    features: [
      { item: 'West LA VA Campus' },
      { item: 'Sawtelle Blvd' },
      { item: 'National Blvd' },
      { item: 'Expo Line stations' },
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
    city: 'West Los Angeles',
    features: [
      {
        question: "What areas does 'West Los Angeles' cover?",
        answer:
          'West LA broadly encompasses neighborhoods including Westdale, Rancho Park, Sawtelle, and areas near the VA campus and Sepulveda Blvd. We serve all sub-neighborhoods within the greater West LA area.',
      },
      {
        question: 'Can you upgrade old apartment buildings in West LA?',
        answer:
          'Yes — we provide main panel replacements, individual unit upgrades, and EV charging infrastructure for West LA apartment buildings of all sizes.',
      },
      {
        question: 'Do you serve commercial properties along Olympic and Pico?',
        answer:
          "Absolutely — we provide commercial electrical services for businesses along West LA's major corridors, including tenant improvements, lighting upgrades, and equipment connections.",
      },
    ],
  };

  const areas = {
    city: 'West Los Angeles',
    features: [
      { item: 'Brentwood', slug: 'brentwood' },
      { item: 'Santa Monica', slug: 'santa-monica' },
      { item: 'Sawtelle', slug: 'sawtelle' },
      { item: 'Westwood', slug: 'westwood' },
      { item: 'Mar Vista', slug: 'mar-vista' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='West Los Angeles' />
      <LocationAllServices city='West Los Angeles' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default WestLosAngelesPage;
