import { Clock, Droplets, Shield, Star, Wrench, Zap } from 'lucide-react';
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

function VenicePage() {
  const hero = {
    area: 'Venice, CA · 90291, 90292',
    title:
      'Venice Electrician — Licensed & Insured Creative & Coastal Electrical Services',
    subtitle:
      "Brentwood Electrical Experts provides expert electrical services throughout Venice. From flood-rated panel upgrades for historic Venice Canal cottages and safe knob-and-tube rewiring to Abbot Kinney commercial tenant improvements and coastal marine-grade EV chargers, our licensed C-10 electricians deliver fast, reliable service that respects Venice's unique creative spirit.",
    button: 'Request Venice Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Canal & Flood-Zone Specialists',
      'Knob-and-Tube Rewiring Experts',
    ],
    icons: [<Star />, <Droplets />, <Wrench />],
  };

  const about = {
    title: 'About Venice',
    city: 'Venice',
    heading: 'Electrical Services Tailored to Venice’s Eclectic Architecture',
    challengeTitle: 'Navigating Canal Flood Zones, Knob-and-Tube, and Salt Air',
    subtitle:
      'Venice is one of the most culturally dynamic and creatively expressive neighborhoods in Los Angeles, seamlessly blending its historic bohemian artistic roots with a booming Silicon Beach tech and design industry presence. From the serene Venice Canals and bustling Abbot Kinney Boulevard to the iconic beachfront Boardwalk, Venice housing stock spans an extraordinary architectural spectrum.',
    features: [
      {
        item: 'Historic 1920s Venice Canals cottages and pedestrian-only walk-street homes',
      },
      {
        item: 'Abbot Kinney Boulevard mixed-use commercial and boutique spaces',
      },
      {
        item: 'Beachfront condominiums and modern coastal architectural builds',
      },
      {
        item: 'Silicon Beach converted tech offices, warehouses, and creative studios',
      },
    ],
    challenge:
      'Venice features an exceptionally diverse property inventory ranging from delicate 1920s canal cottages retaining obsolete knob-and-tube wiring to cutting-edge Silicon Beach tech headquarters. Furthermore, coastal salt-air corrosion, strict flood-zone electrical regulations near the canals, and tight pedestrian-only lot layouts require specialized field experience and meticulous engineering.',
    quote: [
      {
        text: "From century-old canal cottages to brand-new Silicon Beach offices, we've mastered Venice's full spectrum of electrical challenges — and we do it all while respecting the neighborhood's unique creative spirit.",
        subtext: '— Brentwood Electrical Experts, serving Venice',
      },
    ],
  };

  const popular = {
    city: 'Venice',
    cards: [
      {
        title: 'Venice Canal Cottage Electrical',
        subtitle:
          'Specialized electrical services for the Venice Canal district—including flood-rated main panels, moisture-resistant wiring installations, and careful craft work in tight, historic spaces.',
      },
      {
        title: 'Abbot Kinney Commercial Electrical',
        subtitle:
          "Restaurant, retail boutique, and art gallery electrical build-outs for Venice's iconic Abbot Kinney Blvd—featuring tenant improvements, custom track lighting, and commercial signage.",
      },
      {
        title: 'Knob-and-Tube Rewiring',
        subtitle:
          "Safe, complete removal and replacement of dangerous obsolete knob-and-tube wiring across Venice's vintage bungalows and historic beach cottages.",
      },
      {
        title: 'Coastal EV Charger Installation',
        subtitle:
          'Corrosion-resistant Level 2 EV charger installations for Venice properties—utilizing marine-grade hardware and weather-sealed components for Tesla, Rivian, and all major brands.',
      },
    ],
  };

  const details = {
    city: 'Venice',
    heading: 'Your Trusted Local Electrician in Venice, California',
    pharagraphs: [
      {
        text: "Venice’s legendary canal district presents specialized electrical engineering challenges unlike anywhere else in Southern California. These charming historic cottages—many constructed during the 1920s—sit directly on narrow pedestrian lots alongside active waterways. Persistent flood exposure, high moisture intrusion, and severe access limitations make electrical work here a true specialty. We install flood-rated panels, elevated outlet heights, waterproof exterior connections, and comprehensive GFCI-protected circuits throughout canal-adjacent properties. Our deep familiarity with the canal district's unique structural codes ensures your historic home’s electrical system is modernized safely and efficiently.",
      },
      {
        text: 'Meanwhile, Abbot Kinney Boulevard—globally celebrated as America’s coolest commercial block—is lined with high-end boutiques, art galleries, fine dining destinations, and creative offices that demand reliable, fully code-compliant commercial electrical systems. We provide comprehensive tenant improvement wiring, outdoor patio lighting grids, display sign circuits, commercial kitchen equipment connections, and energy-efficient lighting retrofits for Abbot Kinney businesses. Our flexible scheduling options allow us to complete complex commercial work without disrupting your daytime operations.',
      },
      {
        text: 'Concurrently, the Silicon Beach tech boom has radically transformed Venice’s commercial landscape. Technology giants, media agencies, and ambitious startups frequently occupy adaptively reused warehouses, creative offices, and purpose-built tech campuses. We provide advanced commercial electrical services for these high-performance environments—including high-density power distribution grids, server room dedicated infrastructure, multi-unit EV charging installations for employee parking fleets, and architectural lighting systems that align with corporate sustainability goals.',
      },
      {
        text: "Finally, Venice's residential streets are home to an increasingly discerning community of homeowners who expect modern electrical conveniences—such as high-speed Level 2 EV chargers, whole-home Wi-Fi structured cabling, smart lighting controls, and outdoor entertainment power—integrated seamlessly into homes that may be 50 to 100 years old. We expertly bridge this generational gap by carefully upgrading legacy systems to support modern power loads while preserving the distinct artistic character that makes Venice homes so special.",
      },
    ],
    features: [
      { item: 'Venice Boardwalk' },
      { item: 'Abbot Kinney Blvd' },
      { item: 'Venice Canals' },
      { item: 'Muscle Beach' },
      { item: 'Silicon Beach Office Hubs' },
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
    city: 'Venice',
    features: [
      {
        question: 'Can you work on homes in the Venice Canal district?',
        answer:
          'Yes — we have extensive experience working on Venice Canal cottages. We understand the unique challenges: limited access, moisture concerns, flood-zone requirements, and aging infrastructure. We install flood-rated panels, elevated receptacles, and waterproof exterior connections designed for canal-adjacent conditions.',
      },
      {
        question:
          'Do you provide commercial electrical for Abbot Kinney businesses?',
        answer:
          'Absolutely. We serve restaurants, boutiques, galleries, and offices along Abbot Kinney Blvd with tenant improvement wiring, lighting design, sign circuits, and equipment connections. We can work after hours to avoid disrupting your business.',
      },
      {
        question: 'How does salt air affect Venice electrical systems?',
        answer:
          "Venice's coastal location subjects electrical components to salt air corrosion. We use marine-grade enclosures, stainless hardware, and corrosion-resistant fixtures for all outdoor installations. We recommend annual inspections for beachside properties to catch corrosion early.",
      },
      {
        question: 'Can you install an EV charger at my Venice bungalow?',
        answer:
          "Yes — even Venice's compact bungalow lots can accommodate EV charger installations. We often mount chargers on the side of garages or carports, run conduit along fence lines, and tap into upgraded panels. We handle the panel upgrade if needed and pull all required permits.",
      },
      {
        question: 'Do you rewire old Venice homes with knob-and-tube wiring?',
        answer:
          'Yes. Many pre-1940 Venice homes still have original knob-and-tube wiring, which is a fire hazard and incompatible with modern electrical loads. We remove and replace knob-and-tube with modern NM-B cable, upgrade the panel, and bring the entire system up to current NEC standards.',
      },
      {
        question:
          'Can you install outdoor entertainment electrical for my Venice home?',
        answer:
          "Absolutely — we install weatherproof outlets, landscape lighting, string light circuits, outdoor kitchen electrical, and fire pit ignition wiring for Venice's indoor-outdoor lifestyle. All outdoor circuits include GFCI protection as required by code.",
      },
    ],
  };

  const areas = {
    city: 'Venice',
    features: [
      { item: 'Santa Monica', slug: 'santa-monica' },
      { item: 'Mar Vista', slug: 'mar-vista' },
      { item: 'Marina Del Rey', slug: 'marina-del-rey' },
      { item: 'Playa Vista', slug: 'playa-vista' },
      { item: 'Culver City', slug: 'culver-city' },
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
        Venice Electrician | Canal Homes, Abbot Kinney TIs & Knob-and-Tube |
        C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Venice, CA (90291, 90292). Venice Canal flood-rated panels, Abbot Kinney commercial TIs, knob-and-tube rewiring & marine-grade EV chargers. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Venice' />
      <LocationAllServices city='Venice' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default VenicePage;
