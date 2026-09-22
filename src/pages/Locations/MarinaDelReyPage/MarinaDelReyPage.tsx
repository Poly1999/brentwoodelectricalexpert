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

function MarinaDelReyPage() {
  const hero = {
    area: 'Marina Del Rey, CA · 90292',
    title: 'Marina Del Rey Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts delivers professional electrical services across Marina Del Rey. From residential repairs and lighting installations to commercial electrical work and EV charger installations, we serve this coastal community with reliability and expertise.',
  };

  const about = {
    title: 'About Marina Del Rey',
    city: 'Marina Del Rey',
    subtitle:
      "Marina Del Rey is the world's largest man-made small-craft harbor, home to roughly 12,000 residents living in waterfront condos, apartments, and townhouses.",
    features: [
      { item: 'Marina condominiums' },
      { item: 'Waterfront apartments' },
      { item: 'Townhouse communities' },
    ],
    challenge:
      "Marina Del Rey's waterfront location means constant salt air exposure and moisture challenges. Many condo and apartment complexes have aging shared infrastructure. Boat slip electrical is an additional specialty service.",
    quote: [
      {
        text: "We understand Marina Del Rey's unique coastal electrical challenges — salt air corrosion, moisture management, and the specific needs of waterfront condominiums and marina-adjacent properties.",
        subtext: '— Brentwood Electrical Experts, serving Marina Del Rey',
      },
    ],
  };

  const popular = {
    city: 'Marina Del Rey',
    cards: [
      {
        title: 'Marine-Grade Electrical',
        subtitle:
          "Corrosion-resistant electrical installations designed for Marina Del Rey's salt air waterfront environment.",
      },
      {
        title: 'Condo Electrical Upgrades',
        subtitle:
          'Kitchen, lighting, and panel upgrades for Marina Del Rey condominiums — coordinated with HOAs and building management.',
      },
      {
        title: 'Waterfront Outdoor Electrical',
        subtitle:
          "Balcony outlets, rooftop deck circuits, and landscape lighting built to withstand Marina Del Rey's coastal conditions.",
      },
    ],
  };

  const details = {
    city: 'Marina Del Rey',
    pharagraphs: [
      {
        text: "Marina Del Rey's waterfront lifestyle comes with unique electrical considerations. The constant salt air and marine moisture environment demands corrosion-resistant electrical components — marine-grade panels, stainless steel hardware, weather-rated outlets, and UV-resistant conduit. We specify and install materials built to withstand decades of coastal exposure, protecting your investment from premature degradation.",
      },
      {
        text: "The marina's condominium complexes — from the Azzurra to the Peninsula — have varied electrical infrastructure, much of it dating to original construction in the 1970s and 1980s. We work with HOAs and building managers to upgrade shared infrastructure, modernize individual unit electrical systems, and install EV chargers in parking structures. Our experience with Marina Del Rey's specific buildings means smoother projects and fewer surprises.",
      },
      {
        text: 'Outdoor entertaining is central to the Marina Del Rey lifestyle. We install weatherproof outlets on balconies and patios, rooftop deck electrical for BBQs and hot tubs, and landscape lighting for ground-floor gardens — all specified for the marine environment.',
      },
    ],
    features: [
      { item: 'Marina Del Rey Harbor' },
      { item: "Fisherman's Village" },
      { item: 'Burton Chace Park' },
      { item: "Mother's Beach" },
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
    city: 'Marina Del Rey',
    features: [
      {
        question: 'Do you work in Marina Del Rey condo buildings?',
        answer:
          "Yes — we work in Marina Del Rey's major condo complexes, coordinating with building management and HOAs. We're familiar with the specific infrastructure and requirements of each building.",
      },
      {
        question: 'How does the marine environment affect electrical systems?',
        answer:
          'Salt air and moisture cause accelerated corrosion on electrical components. We use marine-grade enclosures, stainless hardware, and corrosion-resistant fixtures for all Marina Del Rey installations.',
      },
      {
        question: 'Can you install an EV charger at my Marina Del Rey condo?',
        answer:
          'Yes — we install EV chargers in Marina Del Rey condo parking areas, coordinating with building management for electrical access and HOA approval.',
      },
    ],
  };

  const areas = {
    city: 'Marina Del Rey',
    features: [
      { item: 'Venice', slug: 'venice' },
      { item: 'Playa Vista', slug: 'playa-vista' },
      { item: 'Culver City', slug: 'culver-city' },
      { item: 'Mar Vista', slug: 'mar-vista' },
      { item: 'Westchester', slug: 'westchester' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Marina Del Rey' />
      <LocationAllServices city='Marina Del Rey' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default MarinaDelReyPage;
