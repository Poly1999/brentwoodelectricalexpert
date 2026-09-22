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

function CulverCityPage() {
  const hero = {
    area: 'Culver City, CA · 90230, 90232',
    title: 'Culver City Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts provides top-rated electrical services in Culver City. From residential rewiring and panel upgrades to commercial tenant improvements and lighting retrofits, our licensed team delivers dependable, code-compliant work.',
  };

  const about = {
    title: 'About Culver City',
    city: 'Culver City',
    subtitle:
      "Culver City is an independent city of about 40,000 residents that has become one of LA's most dynamic communities. Home to Sony Pictures and a growing cluster of tech and media companies, Culver City blends small-town charm with big-city energy.",
    features: [
      { item: 'Post-war tract homes' },
      { item: 'Craftsman bungalows' },
      { item: 'Modern condos' },
      { item: 'Creative office conversions' },
    ],
    challenge:
      'Culver City has experienced rapid development, transforming from a quiet residential community into a major creative industry hub. Many 1940s–1960s homes need panel upgrades, while the booming commercial sector — anchored by Apple, Amazon, and Sony Studios — demands sophisticated commercial electrical services. Culver City is an independent city with its own building department.',
    quote: [
      {
        text: "We navigate Culver City's independent permitting process with expertise, delivering residential upgrades for the neighborhoods alongside commercial electrical for the booming creative industry corridor.",
        subtext: '— Brentwood Electrical Experts, serving Culver City',
      },
    ],
  };

  const popular = {
    city: 'Culver City',
    cards: [
      {
        title: 'Post-War Home Panel Upgrades',
        subtitle:
          'Bring your 1940s–1960s Culver City home into the modern era with a 200-amp panel upgrade — safe, permitted, and ready for EV chargers, HVAC, and home offices.',
      },
      {
        title: 'Restaurant & Commercial Kitchen Electrical',
        subtitle:
          "Full-scope kitchen electrical for Culver City's acclaimed restaurant scene — commercial equipment circuits, ventilation, lighting, and code compliance.",
      },
      {
        title: 'Creative Office Electrical Services',
        subtitle:
          "Power distribution, lighting, and infrastructure upgrades for Culver City's booming creative industry offices and production spaces.",
      },
      {
        title: 'Home Office Circuit Installation',
        subtitle:
          'Dedicated circuits, additional outlets, and Ethernet wiring for productive, reliable work-from-home setups in Culver City residences.',
      },
    ],
  };

  const details = {
    city: 'Culver City',
    pharagraphs: [
      {
        text: "Culver City has undergone a dramatic transformation in recent years. The arrival of Apple TV+, Amazon Studios, and other major creative companies has brought new energy — and new electrical demands — to this independent city. We serve both sides of this evolution: upgrading aging residential electrical systems in established neighborhoods like Culver Crest and Sunkist Park, and providing commercial electrical services for the creative offices and production facilities that now define Culver City's economic identity.",
      },
      {
        text: 'The residential neighborhoods of Culver City feature predominantly post-war homes built in the 1940s through 1960s. These homes typically have 100-amp panels, limited outlet counts by modern standards, and wiring that may include early Romex or even some aluminum branch circuits. We modernize these systems with 200-amp panel upgrades, additional circuits for home offices, EV charger installations, and whole-home GFCI/AFCI protection that brings the entire system up to current safety standards.',
      },
      {
        text: "Culver City's thriving restaurant scene — concentrated in downtown Culver City and along Washington Blvd — includes dozens of acclaimed eateries that depend on reliable commercial electrical systems. We install kitchen equipment circuits (commercial ranges, hood exhaust, walk-in coolers), dining room lighting on dimmers, patio heating circuits, and emergency lighting systems. Our commercial team works around restaurant schedules, often completing work overnight to minimize disruption.",
      },
      {
        text: "The Hayden Tract, once an industrial zone, is now one of LA's most architecturally celebrated creative office districts. The adaptive reuse buildings here require specialized electrical work — upgrading legacy industrial power systems to support modern office loads, installing EV charging stations in parking areas, and providing clean, reliable power for production equipment and server infrastructure.",
      },
    ],
    features: [
      { item: 'Sony Pictures Studios' },
      { item: 'Culver City Arts District' },
      { item: 'Hayden Tract' },
      { item: 'Downtown Culver City' },
      { item: 'Baldwin Hills' },
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
    city: 'Culver City',
    features: [
      {
        question: 'Does Culver City have its own building department?',
        answer:
          "Yes — Culver City is an independent city with its own Building & Safety Division. Electrical permits and inspections are handled by Culver City, not LA County. We're very familiar with their process and requirements, which helps ensure smooth permit approvals and first-time inspection passes.",
      },
      {
        question:
          'Can you upgrade a 1950s home in Culver City to support an EV charger?',
        answer:
          'Absolutely. Most 1950s Culver City homes have 100-amp panels that need upgrading to 200 amps before safely adding a 40-50 amp EV charger circuit. We bundle the panel upgrade and charger installation into a single project, typically completed in one day.',
      },
      {
        question:
          'Do you provide commercial electrical for Culver City restaurants?',
        answer:
          'Yes — we wire kitchens, dining rooms, patios, and bars for restaurants throughout downtown Culver City. We handle commercial-grade equipment circuits, ventilation electrical, lighting on dimmer systems, and all code-required emergency and exit lighting.',
      },
      {
        question: 'Can you work on creative office spaces in the Hayden Tract?',
        answer:
          "Yes. We provide commercial electrical services for Culver City's creative office buildings — power distribution, lighting retrofits, EV charger installations, and infrastructure upgrades for production and tech equipment.",
      },
      {
        question: 'How long does a Culver City electrical permit take?',
        answer:
          'Standard electrical permits through Culver City Building & Safety typically take 2-5 business days for approval. For simple projects like water heater or EV charger connections, same-day over-the-counter permits may be available.',
      },
      {
        question: 'Do you add circuits for home offices in Culver City homes?',
        answer:
          'Yes — with more people working from home, dedicated home office circuits are one of our most popular services. We add 20-amp dedicated circuits for computer equipment, install additional outlets, and can add structured wiring (Ethernet) for reliable network connectivity.',
      },
    ],
  };

  const areas = {
    city: 'Culver City',
    features: [
      { item: 'Mar Vista', slug: 'mar-vista' },
      { item: 'Beverlywood', slug: 'beverlywood' },
      { item: 'Cheviot Hills', slug: 'cheviot-hills' },
      { item: 'Playa Vista', slug: 'playa-vista' },
      { item: 'West LA', slug: 'west-los-angeles' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Culver City' />
      <LocationAllServices city='Culver City' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default CulverCityPage;
