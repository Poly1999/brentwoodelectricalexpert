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

function MarVistaPage() {
  const hero = {
    area: 'Mar Vista, CA · 90066',
    title: 'Mar Vista Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts serves Mar Vista with professional, affordable electrical services. Whether you need a panel upgrade, EV charger installation, outlet repair, or complete home rewiring, our licensed electricians are ready to help.',
  };

  const about = {
    title: 'About Mar Vista',
    city: 'Mar Vista',
    subtitle:
      'Mar Vista is a family-friendly Westside neighborhood known for its walkable streets, popular farmers market, and increasingly hip restaurant and shopping scene along Venice Blvd. The community has seen significant new development alongside its charming mid-century housing stock.',
    features: [
      { item: '1940s bungalows' },
      { item: 'Post-war ranch homes' },
      { item: 'Modern ADU conversions' },
      { item: 'Small-lot subdivisions' },
    ],
    challenge:
      "Mar Vista is experiencing a building boom with ADU (Accessory Dwelling Unit) construction, small-lot subdivisions, and extensive home renovations. Many original 1940s–1950s homes have 60-amp or 100-amp panels that can't support modern electrical demands plus an ADU. The neighborhood's flat grid layout and smaller lot sizes make efficient conduit routing essential.",
    quote: [
      {
        text: "We're the go-to electrician for Mar Vista's ADU boom — we've wired dozens of backyard units and know exactly how to size panels, route conduit, and pass inspection for these increasingly popular projects.",
        subtext: '— Brentwood Electrical Experts, serving Mar Vista',
      },
    ],
  };

  const popular = {
    city: 'Mar Vista',
    cards: [
      {
        title: 'ADU Electrical Installation',
        subtitle:
          'Complete electrical systems for Mar Vista accessory dwelling units — sub-panels, wiring, fixtures, and main panel upgrades to support the additional load.',
      },
      {
        title: 'Bungalow Panel Upgrades',
        subtitle:
          'Upgrade your 1940s–1950s Mar Vista bungalow from 60 or 100 amps to a modern 200-amp panel — safely power EV chargers, modern kitchens, and home offices.',
      },
      {
        title: 'New Construction Wiring',
        subtitle:
          "Full-scope electrical for Mar Vista's small-lot subdivisions and new townhouse developments — from service entrance to final fixture trim.",
      },
      {
        title: 'Detached Garage EV Chargers',
        subtitle:
          'Run dedicated circuits to your Mar Vista detached garage for Level 2 EV charging — clean conduit routing, proper panel sizing, and all permits included.',
      },
    ],
  };

  const details = {
    city: 'Mar Vista',
    pharagraphs: [
      {
        text: "Mar Vista is in the middle of an ADU revolution. California's relaxed accessory dwelling unit regulations have made backyard cottages, garage conversions, and second-story additions enormously popular in this neighborhood. Every ADU needs its own electrical sub-panel, dedicated circuits, and often a main panel upgrade on the primary home to accommodate the additional load. We've wired dozens of Mar Vista ADUs — from 400-square-foot studios to full-size two-bedroom units — and we coordinate seamlessly with general contractors to keep projects on schedule.",
      },
      {
        text: "The core of Mar Vista's housing stock consists of charming 1940s and 1950s bungalows and ranch homes. These are the homes where young families are investing in upgrades — panel replacements, additional circuits for remodeled kitchens, EV charger installations in detached garages, and modern lighting throughout. We approach these projects with a homeowner-friendly attitude: clean work, clear communication, and competitive pricing that respects Mar Vista's more accessible price point compared to neighboring Brentwood and Santa Monica.",
      },
      {
        text: "Small-lot subdivision projects have become a significant part of Mar Vista's evolving landscape. Developers are replacing single-family homes with clusters of 2-4 modern townhouses, each requiring complete electrical systems from the ground up. We provide new construction electrical for these projects — service entrance, panel, rough-in wiring, device installation, and fixture trim — working efficiently to meet tight construction timelines and budgets.",
      },
      {
        text: "Mar Vista's commercial corridors along Venice Blvd and Centinela Ave feature a growing number of independent restaurants, cafes, and small businesses. We provide commercial electrical services scaled for these smaller ventures — tenant improvement wiring, lighting design, kitchen circuits, and sign electrical — with the same professionalism and quality we bring to our largest residential projects.",
      },
    ],
    features: [
      { item: 'Mar Vista Farmers Market' },
      { item: 'Mar Vista Recreation Center' },
      { item: 'Venice Blvd corridor' },
      { item: 'Centinela Ave' },
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
    city: 'Mar Vista',
    features: [
      {
        question: 'Can you wire a new ADU in Mar Vista?',
        answer:
          "Yes — ADU electrical is one of our specialties. We install complete electrical systems for Mar Vista ADUs: sub-panel, circuits, outlets, lighting, HVAC connections, and EV-ready wiring. We also upgrade the main home's panel if needed to support the additional load.",
      },
      {
        question: 'Do I need a panel upgrade to add an ADU in Mar Vista?',
        answer:
          "In most cases, yes. Adding an ADU typically requires upgrading the main home's panel from 100 amps to 200 amps (or from 200 to 320/400) to safely accommodate the additional electrical load. We assess your existing system during our free estimate.",
      },
      {
        question: 'How much does it cost to wire an ADU in Mar Vista?',
        answer:
          'ADU electrical costs vary based on size and complexity, typically ranging from $5,000 to $15,000 for the complete electrical scope. This includes the sub-panel, all wiring, devices, and fixture connections. We provide detailed, transparent estimates.',
      },
      {
        question:
          'Can you install an EV charger in my Mar Vista detached garage?',
        answer:
          'Yes — we run conduit and wiring from your main panel to the detached garage and install a Level 2 EV charger. If your panel needs upgrading to support the charger, we bundle both projects for efficiency and cost savings.',
      },
      {
        question: 'Do you work on small-lot development projects in Mar Vista?',
        answer:
          "Yes — we provide full new construction electrical services for Mar Vista's small-lot subdivision projects, including multi-unit townhouse developments. We work efficiently within tight construction timelines.",
      },
      {
        question: 'Can you add circuits to a 1940s Mar Vista bungalow?',
        answer:
          "Absolutely. We regularly add circuits to Mar Vista's older homes — dedicated kitchen circuits, bathroom GFCI circuits, home office circuits, and outdoor outlets. If your existing panel is full or undersized, we'll upgrade it as part of the project.",
      },
    ],
  };

  const areas = {
    city: 'Mar Vista',
    features: [
      { item: 'Venice', slug: 'venice' },
      { item: 'Culver City', slug: 'culver-city' },
      { item: 'West LA', slug: 'west-los-angeles' },
      { item: 'Playa Vista', slug: 'playa-vista' },
      { item: 'Santa Monica', slug: 'santa-monica' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Mar Vista' />
      <LocationAllServices city='Mar Vista' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default MarVistaPage;
