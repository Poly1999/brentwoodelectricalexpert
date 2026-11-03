import { Cable, Clock, Network, Shield, Star, Zap } from 'lucide-react';
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

function PlayaVistaPage() {
  const hero = {
    area: 'Playa Vista, CA · 90094',
    title:
      'Playa Vista Electrician — Licensed & Insured Smart Home & Tech Electrical Services',
    subtitle:
      "Brentwood Electrical Experts serves the modern master-planned Playa Vista community with professional electrical services. From whole-home smart automation wiring and structured Wi-Fi data cabling to Level 2 EV chargers, home office electrical infrastructure, and outdoor patio lighting, our licensed C-10 electricians deliver cutting-edge solutions for Silicon Beach's tech-forward residents.",
    button: 'Request Playa Vista Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Smart Home & Structured Wiring Experts',
      'EV Charger & Tech Specialists',
    ],
    icons: [<Star />, <Network />, <Cable />],
  };

  const about = {
    title: 'About Playa Vista',
    city: 'Playa Vista',
    heading:
      'Electrical Services Tailored to Playa Vista’s Modern Infrastructure',
    challengeTitle:
      'Delivering Advanced Technology Integration and Smart Automation',
    subtitle:
      'Playa Vista is a contemporary, master-planned urban community globally recognized as the heart of Los Angeles’s Silicon Beach tech industry—anchored by major campuses like Google, YouTube, and Meta—and prized by young tech professionals for its resort-style amenities and contemporary design.',
    features: [
      {
        item: 'Contemporary planned community single-family homes and luxury flats',
      },
      { item: 'Modern multi-level townhouses with attached garages' },
      {
        item: 'Silicon Beach tech campus offices and creative workspace build-outs',
      },
      {
        item: 'Resort-style residential complexes and shared community spaces',
      },
    ],
    challenge:
      "Because Playa Vista stands as Los Angeles's newest master-planned community—with the vast majority of residential properties constructed after 2005—standard legacy panel upgrades are rarely required. Instead, local demand centers heavily on advanced technology enhancements: whole-home mesh Wi-Fi structured cabling, custom smart lighting automation, dedicated remote-work office circuits, and high-speed EV charging infrastructure designed for contemporary multi-level living.",
    quote: [
      {
        text: "Playa Vista's tech-savvy homeowners want cutting-edge electrical solutions — smart home automation, structured wiring, EV charging, and home office infrastructure. That's exactly what we deliver.",
        subtext: '— Brentwood Electrical Experts, serving Playa Vista',
      },
    ],
  };

  const popular = {
    city: 'Playa Vista',
    cards: [
      {
        title: 'Smart Home Electrical',
        subtitle:
          "Whole-home automation wiring, smart lighting keypads, automated motorized shading integration, and connected device infrastructure for Playa Vista's tech-forward residences.",
      },
      {
        title: 'Home Office Infrastructure',
        subtitle:
          'Dedicated 20-amp circuits, hardwired Cat6 Ethernet data cabling, and USB-C fast-charging outlets engineered for productive work-from-home environments.',
      },
      {
        title: 'EV Charger Installation',
        subtitle:
          'High-speed Level 2 charger installations in Playa Vista garage spaces and townhouse parking areas—utilizing clean, concealed dedicated circuits and proper city permitting.',
      },
      {
        title: 'Outdoor Entertainment Electrical',
        subtitle:
          'Weatherized patio heating circuits, architectural string lighting, outdoor audio system wiring, and landscape illumination designed for a vibrant outdoor lifestyle.',
      },
    ],
  };

  const details = {
    city: 'Playa Vista',
    heading: 'Your Trusted Local Electrician in Playa Vista, California',
    pharagraphs: [
      {
        text: "Playa Vista residential properties are exceptionally modern—with most built over the last two decades—meaning traditional service panel replacements or obsolete knob-and-tube rewiring are virtually non-existent here. Instead, Playa Vista homeowners prioritize sophisticated technology additions: whole-home structured mesh Wi-Fi data cabling, integrated smart lighting controls, dedicated home office circuits, and Level 2 EV charging ports. We specialize precisely in these contemporary electrical services that seamlessly complement Playa Vista's fast-paced, tech-forward lifestyle.",
      },
      {
        text: "Given the community's close geographic proximity to corporate campuses like YouTube, Google, and other major technology enterprises, a significant portion of local residents maintain hybrid or full-time work-from-home schedules. We install professional home office electrical infrastructure—including dedicated 20-amp circuits, heavy-outlet configurations, USB charging receptacles, and clean Cat6 structural Ethernet lines—guaranteeing stable, high-speed, interference-free remote work environments.",
      },
      {
        text: "Furthermore, Playa Vista's outdoor-oriented urban planning incorporates generous private balconies, rooftop decks, and shared common courtyards that thrive on professional electrical enhancements. We install radiant patio heating circuits, custom architectural string light hook-ups, outdoor acoustic audio wiring, and low-voltage landscape lighting that extends the usability of your outdoor living spaces well into the evening hours.",
      },
    ],
    features: [
      { item: 'Playa Vista Central Park' },
      { item: 'The Resort Community Center' },
      { item: 'Google / YouTube Campus' },
      { item: 'Loyola Marymount University (Nearby)' },
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
    city: 'Playa Vista',
    features: [
      {
        question: 'Do Playa Vista homes need panel upgrades?',
        answer:
          'Usually not — most Playa Vista homes were built with modern 200-amp panels. However, adding an EV charger, hot tub, or extensive smart home system may require a sub-panel addition or dedicated circuit installation.',
      },
      {
        question:
          'Can you install a whole-home smart lighting system in Playa Vista?',
        answer:
          "Yes — we install Lutron Caseta, RadioRA 3, and other smart lighting systems that integrate with your home automation platform of choice. Playa Vista's modern wiring makes these installations clean and straightforward.",
      },
      {
        question: 'Do you install EV chargers for Playa Vista townhouses?',
        answer:
          'Yes — we install Level 2 EV chargers in Playa Vista townhouse garages with dedicated 50-amp circuits. For HOA-managed parking areas, we coordinate with management for approvals and electrical access.',
      },
    ],
  };

  const areas = {
    city: 'Playa Vista',
    features: [
      { item: 'Marina Del Rey', slug: 'marina-del-rey' },
      { item: 'Venice', slug: 'venice' },
      { item: 'Mar Vista', slug: 'mar-vista' },
      { item: 'Culver City', slug: 'culver-city' },
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
        Playa Vista Electrician | Smart Home Automation & EV Chargers | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Playa Vista (90094). Smart home automation, structured Wi-Fi data cabling, home office circuits & townhouse EV chargers. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Playa Vista' />
      <LocationAllServices city='Playa Vista' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default PlayaVistaPage;
