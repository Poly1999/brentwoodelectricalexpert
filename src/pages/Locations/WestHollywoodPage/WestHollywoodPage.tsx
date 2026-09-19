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

function WestHollywoodPage() {
  const hero = {
    area: 'West Hollywood, CA · 90046, 90048, 90069',
    title: 'West Hollywood Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts delivers expert electrical services across West Hollywood. From commercial tenant improvements and panel upgrades to residential lighting and smart home installations, we serve both homes and businesses throughout WeHo.',
  };

  const about = {
    title: 'About West Hollywood',
    city: 'West Hollywood',
    subtitle:
      'West Hollywood is a creative, vibrant independent city of about 35,000 residents, known for its nightlife, LGBTQ+ culture, design industry, and walkable urban environment. The Sunset Strip and Santa Monica Blvd corridors are iconic entertainment and dining destinations.',
    features: [
      { item: '1960s apartment buildings' },
      { item: 'Boutique condominiums' },
      { item: 'Mid-century dingbats' },
      { item: 'Commercial mixed-use on Sunset' },
    ],
    challenge:
      "West Hollywood's dense mix of apartments, condos, and commercial properties creates unique electrical challenges. Many multi-unit buildings have shared electrical infrastructure that needs modernization. The city's vibrant nightlife and restaurant scene demands specialized commercial electrical services. WeHo is also an independent city with its own building department.",
    quote: [
      {
        text: "From Sunset Strip nightclub renovations to condo rewiring projects throughout the city, we understand WeHo's unique blend of commercial energy and residential charm — and the specific permitting requirements of this independent city.",
        subtext: '— Brentwood Electrical Experts, serving West Hollywood',
      },
    ],
  };

  const popular = {
    city: 'West Hollywood',
    cards: [
      {
        title: 'Multi-Unit Building Upgrades',
        subtitle:
          "Main switchboard replacements, individual unit rewiring, and building-wide electrical modernization for West Hollywood's apartment and condo buildings.",
      },
      {
        title: 'Commercial Venue Electrical',
        subtitle:
          'Full-scope electrical build-outs for Sunset Strip and Santa Monica Blvd restaurants, bars, retail spaces, and entertainment venues.',
      },
      {
        title: 'Parking Garage EV Charging',
        subtitle:
          'Scalable EV charging infrastructure for WeHo multi-unit buildings — from single-charger installations to building-wide networks with smart load management.',
      },
      {
        title: 'Designer Lighting Installation',
        subtitle:
          "Expert installation of high-end decorative fixtures, architectural lighting, and art lighting for West Hollywood's design-forward residences.",
      },
    ],
  };

  const details = {
    city: 'West Hollywood',
    pharagraphs: [
      {
        text: 'West Hollywood is a city of renters and condo owners, with multi-unit buildings making up the majority of its housing stock. These buildings — many constructed in the 1950s through 1970s — often have outdated shared electrical systems, including aging main switchboards, aluminum wiring in individual units, and insufficient capacity for modern living. We work with HOAs, property managers, and building owners to systematically upgrade these systems — replacing main distribution equipment, rewiring individual units, and adding capacity for in-unit laundry, modern HVAC, and EV charging in parking garages.',
      },
      {
        text: "The Sunset Strip and Santa Monica Blvd corridors are home to some of LA's most iconic restaurants, bars, clubs, and retail spaces. These commercial venues have intense electrical demands — commercial kitchen equipment, elaborate lighting and sound systems, neon and LED signage, refrigeration, and HVAC. We provide full-scope commercial electrical services including tenant improvement build-outs, three-phase power distribution, emergency and exit lighting, and fire alarm system wiring.",
      },
      {
        text: 'West Hollywood has been at the forefront of EV adoption, and the city has implemented aggressive requirements for EV-ready infrastructure in new construction and major renovations. We help building owners and HOAs comply with these requirements by installing EV charging infrastructure — conduit, wiring, panels, and chargers — in both new and existing parking structures. Our solutions scale from single-unit installations to building-wide EV charging networks.',
      },
      {
        text: "The city's thriving design industry — anchored by the Pacific Design Center — means many WeHo residences feature high-end interior finishes that demand equally refined electrical work. We install decorative lighting specified by interior designers, under-cabinet LED systems, art lighting with museum-quality color rendering, and concealed outlets that preserve clean wall aesthetics. Our finish work matches the design-forward expectations of West Hollywood's creative community.",
      },
    ],
    features: [
      { item: 'Sunset Strip' },
      { item: 'Santa Monica Blvd' },
      { item: 'West Hollywood Park' },
      { item: 'Pacific Design Center' },
      { item: 'Chateau Marmont' },
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
    city: 'West Hollywood',
    features: [
      {
        question: "Is West Hollywood's permitting process different from LA?",
        answer:
          "Yes — West Hollywood is an independent city with its own Community Development Department that handles building permits and inspections. We're thoroughly familiar with WeHo's specific requirements and streamlined permitting process.",
      },
      {
        question:
          'Can you install EV chargers in a West Hollywood apartment or condo parking garage?',
        answer:
          'Yes — we specialize in multi-unit EV charger installations throughout West Hollywood. We work with your HOA or property manager to design a solution that serves current needs while allowing for future expansion. This includes panel upgrades, conduit installation through parking structures, and metering solutions.',
      },
      {
        question:
          'Do you handle commercial electrical for Sunset Strip restaurants and bars?',
        answer:
          "Absolutely. We've wired numerous Sunset Strip venues — restaurants, bars, and retail spaces. Our commercial services include kitchen equipment circuits, sound and lighting infrastructure, signage electrical, beer system refrigeration, and emergency lighting systems.",
      },
      {
        question: 'Can you rewire an older condo unit in West Hollywood?',
        answer:
          "Yes — many 1960s and 1970s WeHo condos have original wiring that may include aluminum conductors. We rewire individual units with modern copper wiring, upgrade the unit's sub-panel, and install GFCI/AFCI protection in all required locations. We coordinate with the HOA and adjacent units to minimize disruption.",
      },
      {
        question:
          'Do you install decorative and designer lighting fixtures in WeHo?',
        answer:
          'Yes. We regularly work with interior designers and homeowners to install high-end decorative fixtures — chandeliers, sconces, pendant clusters, and architectural lighting. We handle proper structural support, dimmer compatibility, and color temperature matching for the best possible result.',
      },
      {
        question:
          'Can you add in-unit laundry electrical to a West Hollywood condo?',
        answer:
          "Yes — adding a washer/dryer often requires a new dedicated 30-amp 240V circuit for the dryer and a 20-amp circuit for the washer. We run new wiring from your unit's sub-panel (upgrading it if necessary) and install the required outlets. We coordinate with your HOA for any building-level approvals.",
      },
    ],
  };

  const areas = {
    city: 'West Hollywood',
    features: [
      { item: 'Beverly Hills', slug: 'beverly-hills' },
      { item: 'Hollywood', slug: 'hollywood' },
      { item: 'Beverly Grove', slug: 'beverly-grove' },
      { item: 'Fairfax', slug: 'fairfax' },
      { item: 'Silver Lake', slug: 'silver-lake' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='West Hollywood' />
      <LocationAllServices city='West Hollywood' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default WestHollywoodPage;
