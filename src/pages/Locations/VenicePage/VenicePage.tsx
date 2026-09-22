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

function VenicePage() {
  const hero = {
    area: 'Venice, CA · 90291, 90292',
    title: 'Venice Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts provides expert electrical services throughout Venice. Whether you need an EV charger for your beachside home, a panel upgrade for an older property, or security lighting for your business, our licensed electricians deliver fast, reliable service.',
  };

  const about = {
    title: 'About Venice',
    city: 'Venice',
    subtitle:
      "Venice is one of LA's most culturally dynamic neighborhoods, blending its bohemian artistic roots with a booming tech industry presence. The Venice Canals, Abbot Kinney Blvd, and the iconic Boardwalk attract visitors from around the world.",
    features: [
      { item: 'Venice Canals cottages' },
      { item: 'Abbot Kinney commercial-residential' },
      { item: 'Beachfront condos' },
      { item: 'Silicon Beach modern builds' },
    ],
    challenge:
      "Venice's eclectic housing stock ranges from tiny 1920s canal cottages with original knob-and-tube wiring to cutting-edge Silicon Beach tech offices. Coastal salt air corrosion, flood-zone electrical requirements near the canals, and the tight lot sizes of Abbot Kinney adjacent neighborhoods all present unique challenges.",
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
          'Specialized electrical services for the Venice Canal district — flood-rated panels, moisture-resistant installations, and careful work in tight, historic spaces.',
      },
      {
        title: 'Abbot Kinney Commercial Electrical',
        subtitle:
          "Restaurant, retail, and gallery electrical build-outs for Venice's iconic Abbot Kinney Blvd — tenant improvements, lighting, and signage.",
      },
      {
        title: 'Knob-and-Tube Rewiring',
        subtitle:
          "Safe, complete removal and replacement of dangerous knob-and-tube wiring in Venice's older bungalows and cottages.",
      },
      {
        title: 'Coastal EV Charger Installation',
        subtitle:
          'Corrosion-resistant EV charger installations for Venice homes — Tesla, ChargePoint, JuiceBox, and all major brands with marine-grade hardware.',
      },
    ],
  };

  const details = {
    city: 'Venice',
    pharagraphs: [
      {
        text: "Venice's legendary canal district presents electrical challenges unlike anywhere else in Los Angeles. These charming cottages — many dating to the 1920s — sit on narrow lots alongside active waterways. Flooding, moisture intrusion, and limited access make electrical work here a specialty. We install flood-rated panels, elevated outlets, waterproof exterior connections, and GFCI-protected circuits throughout canal-adjacent properties. Our familiarity with the canal district's unique construction means we can modernize your home's electrical system safely and efficiently.",
      },
      {
        text: "Abbot Kinney Blvd — named America's coolest block — is lined with boutiques, galleries, restaurants, and creative offices that demand reliable, code-compliant commercial electrical systems. We provide tenant improvement wiring, outdoor patio lighting, sign and display circuits, kitchen equipment electrical, and energy-efficient lighting retrofits for Abbot Kinney businesses. Our after-hours scheduling options mean we can complete work without disrupting your daytime operations.",
      },
      {
        text: "The Silicon Beach tech boom has transformed Venice's commercial landscape. Companies like Google, Snap, and dozens of startups occupy converted warehouses, creative offices, and purpose-built tech campuses. We provide commercial electrical services for these spaces — high-density power distribution, server room infrastructure, EV charger installations for employee parking, and energy-efficient lighting systems that meet corporate sustainability goals.",
      },
      {
        text: "Venice's residential streets are home to an increasingly sophisticated homeowner who wants modern electrical amenities — EV chargers, whole-home Wi-Fi infrastructure, smart lighting, and outdoor entertaining electrical — in homes that may be 50 to 100 years old. We bridge this gap by carefully upgrading older systems to support modern demands while maintaining the character that makes Venice homes special.",
      },
    ],
    features: [
      { item: 'Venice Boardwalk' },
      { item: 'Abbot Kinney Blvd' },
      { item: 'Venice Canals' },
      { item: 'Muscle Beach' },
      { item: 'Google/Snap offices' },
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

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Venice' />
      <LocationAllServices city='Venice' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default VenicePage;
