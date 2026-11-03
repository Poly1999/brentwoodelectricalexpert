import {
  Building,
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

function CenturyCityPage() {
  const hero = {
    area: 'Century City, CA · 90067',
    title:
      'Century City Electrician — Licensed & Insured High-Rise & Commercial Services',
    subtitle:
      'Brentwood Electrical Experts delivers professional electrical services for Century City corporate offices, commercial towers, and luxury high-rise residences. From concrete core-drilling and condo kitchen remodels to commercial tenant improvements, corporate AV power distribution, and subterranean parking garage EV charging networks, our licensed C-10 electricians navigate HOA guidelines and building management protocols with absolute precision.',
    button: 'Request Century City Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'High-Rise & HOA Compliance Experts',
      'Commercial Tower Specialists',
    ],
    icons: [<Star />, <ClipboardCheck />, <Building />],
  };

  const about = {
    title: 'About Century City',
    city: 'Century City',
    heading: 'Electrical Services Tailored to Century City High-Rises & Towers',
    challengeTitle:
      'Mastering High-Rise Logistics and Shared Building Infrastructure',
    subtitle:
      'Century City is a premier commercial and residential district on the Westside, globally recognized for its iconic skyline of corporate office towers, world-class luxury high-rise condominium complexes, and the upscale Westfield Century City destination.',
    features: [
      {
        item: 'Luxury high-rise residential condominiums (The Century, Park Place, Century Hill)',
      },
      {
        item: 'Class-A corporate office towers along Avenue of the Stars and Constellation Blvd',
      },
      { item: 'Mixed-use commercial developments and retail complexes' },
      {
        item: 'Subterranean multi-level parking structures and shared facility spaces',
      },
    ],
    challenge:
      'Century City is defined almost entirely by vertical architecture—imposing commercial high-rises and ultra-luxury concrete condominiums. Executing electrical work in these environments requires strict compliance with building management rules, adherence to rigid HOA architectural guidelines, core-drilling through reinforced concrete slabs, and navigating complex shared vertical electrical risers without disrupting neighboring occupants.',
    quote: [
      {
        text: "We're experienced with Century City's high-rise environments — coordinating with building management, working within HOA guidelines, and delivering quality electrical work in condominium and commercial settings.",
        subtext: '— Brentwood Electrical Experts, serving Century City',
      },
    ],
  };

  const popular = {
    city: 'Century City',
    cards: [
      {
        title: 'High-Rise Condo Electrical',
        subtitle:
          "Specialist electrical renovations for Century City's luxury high-rise condominiums—including kitchen upgrades, recessed LED lighting, bathroom GFCI circuits, and dedicated EV charger lines.",
      },
      {
        title: 'Office Tenant Improvements',
        subtitle:
          'Turnkey commercial electrical build-outs for Century City corporate offices—featuring open-office power distribution grids, conference room AV infrastructure, and data room circuits.',
      },
      {
        title: 'Parking Garage EV Charging',
        subtitle:
          'Scalable Level 2 EV charging installations in Century City condo and commercial parking structures—expertly coordinated with building management, sub-metering, and HOA boards.',
      },
    ],
  };

  const details = {
    city: 'Century City',
    heading: 'Your Trusted Local Electrician in Century City, California',
    pharagraphs: [
      {
        text: 'Century City’s premier residential high-rises—including renowned architectural landmarks like The Century, Park Place, and Century Hill—present unique, highly specialized electrical engineering challenges. Electrical modifications within these reinforced concrete structures require meticulous coordination with building engineering management, strict compliance with building-specific HOA bylaws, and execution within the rigid physical constraints of concrete construction and shared vertical building risers. We expertly install sophisticated kitchen remodels, bathroom GFCI safety circuits, assigned-space Level 2 EV chargers, and architectural lighting modifications while successfully navigating the complex administrative requirements of each individual building management office.',
      },
      {
        text: 'Concurrently, the Class-A corporate office towers lining Avenue of the Stars and Constellation Boulevard house major international law firms, financial institutions, and entertainment industry leaders. We provide comprehensive commercial electrical services for corporate tenant improvements, including heavy power distribution for open-plan office layouts, executive conference room audio-visual power feeds, dedicated server room electrical feeds, and energy-efficient LED lighting retrofitting.',
      },
      {
        text: "Furthermore, Century City’s constant commercial evolution means new infrastructure challenges emerge regularly. Our licensed C-10 team stays completely up to date with the latest municipal building codes, California Title 24 energy efficiency mandates, and smart building integration technologies to deliver professional solutions that match the district's forward-thinking corporate standards.",
      },
    ],
    features: [
      { item: 'Westfield Century City Mall' },
      { item: 'Fox Studios' },
      { item: 'Avenue of the Stars' },
      { item: 'Constellation Blvd' },
      { item: 'Century Park' },
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
    city: 'Century City',
    features: [
      {
        question:
          'Can you do electrical work in a Century City high-rise condo?',
        answer:
          "Yes — we regularly work in Century City's luxury condominiums. We coordinate with building management, follow HOA guidelines, and work within the constraints of high-rise concrete construction to deliver kitchen upgrades, lighting changes, and other electrical improvements.",
      },
      {
        question:
          'Do you install EV chargers in Century City condo parking garages?',
        answer:
          'Yes — we install EV chargers in assigned parking spaces in Century City buildings, coordinating with building management for electrical access, conduit routing, and metering solutions.',
      },
      {
        question:
          'Can you handle commercial tenant improvements in Century City offices?',
        answer:
          'Absolutely. We provide complete electrical for office tenant improvements — power distribution, lighting, data infrastructure, and conference room AV electrical.',
      },
    ],
  };

  const areas = {
    city: 'Century City',
    features: [
      { item: 'Beverly Hills', slug: 'beverly-hills' },
      { item: 'Westwood', slug: 'westwood' },
      { item: 'West LA', slug: 'west-los-angeles' },
      { item: 'Cheviot Hills', slug: 'cheviot-hills' },
      { item: 'Beverlywood', slug: 'beverlywood' },
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
        Century City Electrician | High-Rise Condos & Office TIs | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Century City (90067). Luxury high-rise condo electrical, corporate office tenant improvements & parking garage EV chargers. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Century City' />
      <LocationAllServices city='Century City' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default CenturyCityPage;
96;
