import { Building2, Clock, Film, Shield, Star, Zap } from 'lucide-react';
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
    title: 'Culver City Electrician — Licensed & Insured Electrical Services',
    subtitle:
      'Brentwood Electrical Experts provides top-rated electrical services in Culver City. From residential rewiring and post-war panel upgrades to commercial restaurant kitchen electrical and Hayden Tract creative office lighting retrofits, our licensed C-10 team delivers dependable, code-compliant work across Culver City and surrounding Westside communities.',
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Independent Culver City Permitting',
      'Hayden Tract & Studio Specialists',
    ],
    icons: [<Star />, <Building2 />, <Film />],
  };

  const about = {
    title: 'About Culver City',
    city: 'Culver City',
    heading: 'Tailored Electrical Services for Culver City’s Dynamic Growth',
    challengeTitle: 'Navigating Culver City’s Independent Building Department',
    subtitle:
      'Culver City is an independent municipality of about 40,000 residents that has evolved into one of the most dynamic creative and tech hubs in Southern California. Home to Sony Pictures and a massive cluster of media giants, Culver City blends historic small-town neighborhood charm with big-city economic energy.',
    features: [
      { item: 'Mid-century post-war tract homes and neighborhood residences' },
      { item: 'Charming Craftsman and traditional bungalows' },
      { item: 'Modern low-rise and multi-family condominiums' },
      { item: 'Adaptive reuse creative offices and industrial conversions' },
    ],
    challenge:
      'Culver City has undergone rapid commercial and residential transformation, shifting from a quiet residential enclave into a major entertainment capital. Many 1940s–1960s homes require critical panel upgrades and safety retrofits, while the booming commercial sector—anchored by Apple, Amazon, and Sony Studios—demands sophisticated commercial electrical engineering. Because Culver City operates as an independent city with its own building and safety department, deep local familiarity with municipal permitting rules is essential for avoiding project delays.',
    quote: [
      {
        text: "We navigate Culver City's independent permitting process with expertise, delivering residential upgrades for established neighborhoods alongside commercial electrical for the booming creative industry corridor.",
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
          'Bring your 1940s–1960s Culver City home into the modern era with a safe, permitted 200-amp panel upgrade—fully ready to support EV chargers, central HVAC, and dedicated home offices.',
      },
      {
        title: 'Restaurant & Commercial Kitchen Electrical',
        subtitle:
          "Full-scope kitchen electrical systems for Culver City's acclaimed dining scene—heavy-duty commercial equipment circuits, ventilation hoods, atmospheric dining lighting, and strict code compliance.",
      },
      {
        title: 'Creative Office Electrical Services',
        subtitle:
          "Power distribution, specialty lighting grids, and infrastructure upgrades tailored for Culver City's booming creative industry offices, production suites, and tech spaces.",
      },
      {
        title: 'Home Office Circuit Installation',
        subtitle:
          'Dedicated electrical circuits, additional tamper-resistant outlets, and hardwired Ethernet data wiring designed for productive, reliable work-from-home setups in local residences.',
      },
    ],
  };

  const details = {
    city: 'Culver City',
    heading: 'Your Trusted Local Electrician in Culver City, California',
    pharagraphs: [
      {
        text: "Culver City has undergone a breathtaking economic and cultural transformation over recent years. The arrival of Apple TV+, Amazon Studios, and other high-profile creative enterprises has infused the independent city with renewed energy—and entirely new electrical demands. We proudly serve both sides of this dynamic evolution: upgrading aging residential power systems in established neighborhoods like Culver Crest and Sunkist Park, while providing specialized commercial electrical services for the creative offices, production facilities, and restaurants that define Culver City's modern identity.",
      },
      {
        text: 'The residential neighborhoods of Culver City feature predominantly post-war homes constructed between the 1940s and 1960s. These properties typically contain outdated 100-amp service panels, limited outlet counts by modern standards, and legacy wiring that may include early Romex or aging branch circuits. We modernize these residential grids with 200-amp panel upgrades, dedicated home office circuits, Level 2 EV charger installations, and whole-home GFCI/AFCI protection that brings the entire property up to current California safety codes.',
      },
      {
        text: "Culver City's thriving culinary scene—heavily concentrated in downtown Culver City and along the Washington Blvd corridor—includes dozens of celebrated eateries that depend on uninterrupted, heavy-duty commercial electrical systems. We install complex kitchen equipment circuits (commercial ranges, exhaust hood controls, walk-in refrigeration units), atmospheric dining room dimming systems, outdoor patio heating circuits, and emergency egress lighting. Our commercial crew accommodates strict restaurant operational schedules, frequently executing work overnight to eliminate business downtime.",
      },
      {
        text: "Meanwhile, the historic Hayden Tract, once a traditional industrial manufacturing zone, stands today as one of Los Angeles's most architecturally acclaimed creative office districts. The adaptive reuse buildings found here require specialized electrical expertise: upgrading legacy industrial power grids to support modern tech office loads, installing commercial EV charging stations in shared parking lots, and providing clean, stable power configurations for production equipment and server rooms.",
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Culver City Electrician | Independent City & Hayden Tract TIs | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Culver City. Post-war home panel upgrades, restaurant kitchen wiring & Hayden Tract creative office electrical. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Culver City' />
      <LocationAllServices city='Culver City' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default CulverCityPage;
