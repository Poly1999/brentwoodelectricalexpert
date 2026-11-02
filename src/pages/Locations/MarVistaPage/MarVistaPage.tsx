import {
  Building2,
  ClipboardCheck,
  Clock,
  Shield,
  Star,
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

function MarVistaPage() {
  const hero = {
    area: 'Mar Vista, CA · 90066',
    title: 'Mar Vista Electrician — Licensed & Insured Electrical Services',
    subtitle:
      'Brentwood Electrical Experts serves Mar Vista with professional, affordable electrical services. Whether you need an ADU electrical buildout, a 1940s bungalow panel upgrade, detached garage EV charger installation, or complete home rewiring, our licensed C-10 electricians are ready to help throughout Mar Vista and the surrounding Westside.',
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'ADU & Small-Lot Specialists',
      'LADBS Permitted Work',
    ],
    icons: [<Star />, <Building2 />, <ClipboardCheck />],
  };

  const about = {
    title: 'About Mar Vista',
    city: 'Mar Vista',
    heading: 'Electrical Services Tailored to Mar Vista Housing',
    challengeTitle: "Powering Mar Vista's ADU & Infill Building Boom",
    subtitle:
      'Mar Vista is a vibrant, family-friendly Westside neighborhood known for its walkable streets, popular farmers market, and an increasingly hip restaurant and shopping scene along Venice Blvd. The community features a unique blend of new residential development alongside charming, vintage mid-century housing stock.',
    features: [
      { item: '1940s and 1950s traditional California bungalows' },
      { item: 'Post-war ranch-style homes' },
      { item: 'Modern backyard ADU conversions and studio cottages' },
      { item: 'Small-lot subdivision townhome developments' },
    ],
    challenge:
      "Mar Vista is experiencing a massive building boom driven by Accessory Dwelling Unit (ADU) construction, small-lot subdivision infill, and extensive home renovations. Many original 1940s–1950s homes feature legacy 60-amp or 100-amp electrical panels that simply cannot handle modern household demands plus a brand-new ADU load. Furthermore, the neighborhood's flat grid layout and compact lot sizes make clean, efficient conduit routing essential for safety and aesthetics.",
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
          'Complete turnkey electrical systems for Mar Vista accessory dwelling units—including independent subpanels, rough-in wiring, lighting fixtures, and main service panel upgrades on the primary home to support the combined load.',
      },
      {
        title: 'Bungalow Panel Upgrades',
        subtitle:
          'Upgrade your vintage 1940s–1950s Mar Vista bungalow from obsolete 60A or 100A service to a modern 200-amp panel—safely powering EV chargers, modern kitchens, and home offices.',
      },
      {
        title: 'New Construction Wiring',
        subtitle:
          "Full-scope electrical construction for Mar Vista's small-lot subdivisions and new modern townhouse developments—engineered smoothly from the service entrance to final fixture trim.",
      },
      {
        title: 'Detached Garage EV Chargers',
        subtitle:
          'Run dedicated high-amperage circuits to your Mar Vista detached garage for Level 2 EV charging—featuring clean conduit routing, correct wire sizing, and all city permits included.',
      },
    ],
  };

  const details = {
    city: 'Mar Vista',
    heading: 'Your Trusted Local Electrician in Mar Vista, California',
    pharagraphs: [
      {
        text: "Mar Vista is right in the middle of a dynamic ADU revolution. California's streamlined accessory dwelling unit regulations have made backyard cottages, garage conversions, and second-story additions enormously popular throughout the neighborhood. Every new ADU requires its own dedicated electrical subpanel, comprehensive circuit wiring, and frequently a main service panel upgrade on the primary residence to accommodate the additional electrical demand. We've successfully wired dozens of Mar Vista ADUs—ranging from 400-square-foot compact studios to full-size two-bedroom units—coordinating seamlessly with general contractors to ensure projects stay on schedule and pass inspection the first time.",
      },
      {
        text: "The core of Mar Vista's classic housing stock consists of charming 1940s and 1950s bungalows and post-war ranch homes. These are the properties where young families are investing heavily in safety and modernization upgrades: full panel replacements, additional circuits for remodeled kitchens, EV charger installations in detached garages, and contemporary interior lighting. We approach these projects with a homeowner-friendly attitude: spotless work areas, clear upfront communication, and competitive flat-rate pricing that respects Mar Vista's accessible character compared to neighboring Brentwood and Santa Monica.",
      },
      {
        text: "Small-lot subdivision projects have also become a defining fixture of Mar Vista's evolving architectural landscape. Local developers are replacing single aging homes with clusters of 2 to 4 modern multi-story townhouses, each requiring complete independent electrical systems built from the ground up. We provide new construction electrical services for these developments—managing service entrances, panels, rough-in wiring, device installation, and fixture trim—working efficiently to satisfy tight construction deadlines.",
      },
      {
        text: "Additionally, Mar Vista's vibrant commercial corridors along Venice Blvd and Centinela Ave feature a growing collection of independent restaurants, specialty cafes, and local retail businesses. We provide commercial electrical services scaled specifically for these ventures—including tenant improvement wiring, specialized lighting design, kitchen equipment circuits, and business sign electrical—with the exact same professionalism and quality we bring to our largest residential projects.",
      },
    ],
    features: [
      { item: 'Mar Vista Farmers Market' },
      { item: 'Mar Vista Recreation Center' },
      { item: 'Venice Blvd Corridor' },
      { item: 'Centinela Ave' },
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Mar Vista Electrician | ADU & Bungalow Electrical | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Mar Vista, CA. Expert ADU electrical wiring, 1940s bungalow panel upgrades & small-lot subdivision construction. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Mar Vista' />
      <LocationAllServices city='Mar Vista' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default MarVistaPage;
