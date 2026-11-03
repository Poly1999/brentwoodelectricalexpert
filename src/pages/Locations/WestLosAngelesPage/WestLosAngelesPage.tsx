import { Building2, Clock, Shield, Star, TrainFront, Zap } from 'lucide-react';
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
    title:
      'West Los Angeles Electrician — Licensed & Insured Residential & Commercial Services',
    subtitle:
      'Brentwood Electrical Experts is the trusted local electrical contractor for West Los Angeles. From mid-century residential panel upgrades and multi-unit apartment building modernizations to commercial tenant improvements along Olympic, Pico, and National Boulevards, our licensed C-10 electricians deliver fast, reliable, and code-compliant electrical work across the entire West LA region.',
    button: 'Request West LA Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Multi-Unit & Commercial Specialists',
      'E-Line Corridor Experts',
    ],
    icons: [<Star />, <Building2 />, <TrainFront />],
  };

  const about = {
    title: 'About West Los Angeles',
    city: 'West Los Angeles',
    heading:
      'Electrical Services Tailored to West Los Angeles’ Urban Footprint',
    challengeTitle:
      'Balancing Aging Multi-Unit Infrastructure and Commercial Growth',
    subtitle:
      'West Los Angeles is a broad, dynamic Westside community encompassing multiple vibrant sub-neighborhoods, offering exceptional accessibility via the 405 freeway, the Metro E (Expo) Line transit corridor, and all major Westside commercial arteries.',
    features: [
      {
        item: 'Mid-century single-family homes (Westdale, Rancho Park pockets)',
      },
      { item: 'Multi-family apartment complexes and investment properties' },
      {
        item: 'Commercial office buildings and retail storefronts (Olympic, Pico, National)',
      },
      {
        item: 'Transit-oriented mixed-use developments near the VA campus and E Line',
      },
    ],
    challenge:
      'West Los Angeles is a large, highly diverse service zone with electrical demands spanning the complete spectrum—from aging apartment building modernizations and shared-service overhauls to extensive commercial tenant improvements. Furthermore, rapid urban densification along major transit corridors like the E Line and Sepulveda Boulevard creates ongoing demand for new construction and capacity expansions.',
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
          "200-amp main panel upgrades, dedicated branch circuits, and smart home automation wiring engineered for West LA's mid-century single-family homes.",
      },
      {
        title: 'Apartment Building Electrical',
        subtitle:
          'Main switchboard replacements, unit service upgrades, and shared EV charging infrastructure for multi-unit apartment complexes and rental properties across West LA.',
      },
      {
        title: 'Commercial Tenant Improvements',
        subtitle:
          "Turnkey commercial electrical build-outs for professional offices, destination restaurants, and retail spaces along West LA's primary commercial corridors.",
      },
    ],
  };

  const details = {
    city: 'West Los Angeles',
    heading: 'Your Trusted Local Electrician in West Los Angeles, California',
    pharagraphs: [
      {
        text: "West Los Angeles covers an expansive, highly diverse geographic footprint with electrical requirements that span the full commercial and residential spectrum. Mid-century residential properties located throughout the Westdale and Rancho Park sub-neighborhoods routinely require comprehensive main service panel replacements and electrical modernization to support modern household loads. Simultaneously, the dense concentration of multi-family apartment buildings situated near the West LA VA campus and along Sepulveda Boulevard demand rigorous infrastructure overhauls. Furthermore, commercial properties lining Olympic Boulevard, Pico Boulevard, and National Boulevard rely on our specialized commercial tenant improvement expertise. We successfully manage all of these diverse requirements as the Westside's comprehensive, full-service electrical contractor.",
      },
      {
        text: "The expansion of the Metro E (Expo) Line transit network has spurred massive revitalization along West LA's major transportation spines, introducing modern mixed-use residential buildings, specialty dining venues, and commercial spaces that require professional electrical installation from the ground up. Our team has participated directly in numerous high-profile projects along the transit corridor, delivering new construction and core electrical distribution for transit-oriented developments.",
      },
      {
        text: "Meanwhile, West LA's established residential pockets remain extremely popular with young families and working professionals who desire contemporary electrical conveniences—such as Level 2 EV chargers, smart lighting controls, dedicated home office circuits, and upgraded recessed lighting—within homes originally constructed 50 to 70 years ago. We bridge this generation gap in architecture by engineering clean, cost-effective electrical upgrades that respect your home's historic structure while delivering maximum modern performance.",
      },
    ],
    features: [
      { item: 'West LA VA Campus' },
      { item: 'Sawtelle Blvd' },
      { item: 'National Blvd' },
      { item: 'Expo/E Line Stations' },
      { item: 'Westdale Park' },
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        West Los Angeles Electrician | Panel Upgrades & Commercial TIs | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving West Los Angeles (90025, 90064). Mid-century residential panel upgrades, multi-unit apartment modernizations & Olympic/Pico commercial TIs. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='West Los Angeles' />
      <LocationAllServices city='West Los Angeles' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default WestLosAngelesPage;
