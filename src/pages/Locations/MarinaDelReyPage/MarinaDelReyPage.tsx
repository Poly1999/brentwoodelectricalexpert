import { Anchor, Building2, Clock, Shield, Star, Zap } from 'lucide-react';
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
    title:
      'Marina Del Rey Electrician — Licensed & Insured Waterfront Electrical Services',
    subtitle:
      "Brentwood Electrical Experts delivers professional, corrosion-resistant electrical services across Marina Del Rey. From marine-grade waterfront condo panel upgrades and HOA subterranean parking garage EV charging installations to balcony outlets, rooftop deck circuits, and commercial electrical repairs, our licensed C-10 electricians serve the world's largest man-made small-craft harbor with expertise and reliability.",
    button: 'Request Marina Del Rey Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'HOA & Condo Management Experts',
      'Marine-Grade Coastal Hardware',
    ],
    icons: [<Star />, <Building2 />, <Anchor />],
  };

  const about = {
    title: 'About Marina Del Rey',
    city: 'Marina Del Rey',
    heading:
      'Electrical Services Tailored to Marina Del Rey’s Waterfront Environment',
    challengeTitle:
      'Combating Salt Air Corrosion and Managing Shared Infrastructure',
    subtitle:
      'Marina Del Rey is the world’s largest man-made small-craft harbor, home to roughly 12,000 residents living in scenic waterfront condominiums, multi-family apartment communities, and luxury townhouses. Because the community sits directly on the open harbor and ocean fringe, electrical infrastructure requires specialized material selection to survive aggressive coastal moisture.',
    features: [
      {
        item: 'Waterfront luxury high-rise and mid-rise condominiums (The Azzurra, The Peninsula, etc.)',
      },
      {
        item: 'Marina-adjacent multi-family apartment communities and complexes',
      },
      {
        item: 'Multi-level townhouses and harbor-adjacent residential properties',
      },
      { item: 'Shared subterranean parking structures and marina facilities' },
    ],
    challenge:
      "Marina Del Rey’s immediate waterfront location subjects all exterior and semi-exposed electrical systems to persistent, aggressive salt-air corrosion and marine moisture, which rapidly accelerates rust on standard panels and outdoor fixtures. Furthermore, many of the area's prominent condo and apartment complexes feature aging 1970s and 1980s shared infrastructure that requires meticulous coordination with HOA boards and building management.",
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
          "Corrosion-resistant electrical installations designed for Marina Del Rey's harsh salt-air waterfront environment—utilizing stainless hardware, NEMA 3R enclosures, and UV-rated components.",
      },
      {
        title: 'Condo Electrical Upgrades',
        subtitle:
          'Kitchen remodeling circuits, modern recessed lighting, and panel upgrades for Marina Del Rey condominiums—seamlessly coordinated with HOA architectural guidelines and property management.',
      },
      {
        title: 'Waterfront Outdoor Electrical',
        subtitle:
          "Weatherized balcony outlets, rooftop deck entertainment circuits, and landscape lighting systems engineered to withstand Marina Del Rey's demanding coastal climate.",
      },
    ],
  };

  const details = {
    city: 'Marina Del Rey',
    heading: 'Your Trusted Local Electrician in Marina Del Rey, California',
    pharagraphs: [
      {
        text: 'Marina Del Rey’s iconic waterfront lifestyle comes with highly specific, demanding electrical considerations. The continuous presence of salt-laden marine moisture means standard electrical components deteriorate rapidly. We exclusively specify and install corrosion-resistant, marine-grade electrical panels, stainless steel hardware, weather-rated GFCI outlets, and UV-resistant conduit systems built to withstand decades of heavy coastal exposure—effectively safeguarding your property from premature electrical failure.',
      },
      {
        text: "Furthermore, the marina's prominent condominium and apartment complexes—stretching from the Azzurra towers to the Peninsula—feature diverse electrical distribution grids, much of which dates back to original construction in the 1970s and 1980s. We partner closely with homeowners associations (HOAs) and professional property management companies to upgrade shared building infrastructure, modernize individual unit electrical systems, and deploy scalable EV charging stations within assigned subterranean parking spaces. Our extensive familiarity with Marina Del Rey’s specific building layouts guarantees streamlined project execution and zero unexpected delays.",
      },
      {
        text: 'Outdoor entertaining and open-air relaxation are foundational to the Marina Del Rey lifestyle. We install heavy-duty, weatherproof outlets on private balconies and patios, specialized rooftop deck electrical feeds for outdoor kitchens and hot tubs, and atmospheric landscape lighting for ground-level common areas—all specified specifically for the demanding marine microclimate.',
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Marina Del Rey Electrician | Marine-Grade Panels & Condo EV Chargers |
        C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Marina Del Rey (90292). Marine-grade salt-air electrical, waterfront condo upgrades & HOA parking structure EV chargers. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Marina Del Rey' />
      <LocationAllServices city='Marina Del Rey' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default MarinaDelReyPage;
