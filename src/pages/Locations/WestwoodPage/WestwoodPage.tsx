import { Building2, Clock, Shield, Star, Store, Zap } from 'lucide-react';
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

function WestwoodPage() {
  const hero = {
    area: 'Westwood, CA · 90024, 90025',
    title: 'Westwood Electrician — Licensed & Insured Electrical Services',
    subtitle:
      'Brentwood Electrical Experts provides reliable electrical services for Westwood homes and businesses. From multi-unit apartment upgrades and Holmby Hills estate systems to Westwood Village commercial tenant improvements and residential troubleshooting, our licensed C-10 electricians deliver professionalism and precision throughout Westwood and the surrounding Westside.',
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Multi-Unit & Estate Specialists',
      'Westwood Village Commercial TI',
    ],
    icons: [<Star />, <Building2 />, <Store />],
  };

  const about = {
    title: 'About Westwood',
    city: 'Westwood',
    heading: 'Electrical Services Tailored to Westwood’s Diverse Architecture',
    challengeTitle: 'Bridging UCLA Apartments and Holmby Hills Estates',
    subtitle:
      'Westwood is a vibrant, diverse neighborhood anchored by UCLA, stretching from the bustling commercial hub of Westwood Village and student-oriented apartment districts to the ultra-exclusive Holmby Hills enclave and established family residential streets.',
    features: [
      {
        item: 'UCLA-adjacent mid-rise apartment buildings and multi-unit complexes',
      },
      { item: 'Ultra-exclusive Holmby Hills multi-acre luxury estates' },
      { item: 'Established 1940s–1960s single-family family homes' },
      { item: 'Mid-rise and high-rise condominiums' },
    ],
    challenge:
      'Westwood spans a uniquely broad spectrum—from densely populated university-adjacent apartment housing with aging shared electrical infrastructure to sprawling luxury compounds in Holmby Hills requiring commercial-grade power systems. Furthermore, navigating heavy traffic and parking logistics along major corridors like Wilshire Blvd requires precise project management for commercial upgrades.',
    quote: [
      {
        text: "From UCLA-area apartment upgrades to Holmby Hills estate systems, we serve the full spectrum of Westwood's electrical needs with the same high standard of professionalism and quality.",
        subtext: '— Brentwood Electrical Experts, serving Westwood',
      },
    ],
  };

  const popular = {
    city: 'Westwood',
    cards: [
      {
        title: 'Apartment Building Electrical Upgrades',
        subtitle:
          "Main panel replacements, unit rewiring, in-unit laundry circuits, and EV charging infrastructure for Westwood's multi-unit apartment buildings and investment properties.",
      },
      {
        title: 'Holmby Hills Estate Electrical',
        subtitle:
          'Large-scale residential electrical systems for Holmby Hills properties—featuring 400-amp+ services, whole-home automation, estate security, and elaborate landscape lighting.',
      },
      {
        title: 'Home Renovation Electrical',
        subtitle:
          "Kitchen, bathroom, ADU, and whole-home remodel electrical for Westwood's established family neighborhoods—panel upgrades, new circuits, and modern lighting layouts.",
      },
      {
        title: 'Westwood Village Commercial TI',
        subtitle:
          'Tenant improvement and commercial electrical services tailored for restaurants, retail storefronts, theaters, and professional offices in Westwood Village.',
      },
    ],
  };

  const details = {
    city: 'Westwood',
    heading: 'Your Trusted Local Electrician in Westwood, California',
    pharagraphs: [
      {
        text: "Westwood's unique identity is deeply shaped by UCLA, and the surrounding apartment districts house thousands of students, faculty members, and local professionals. Many of these residential buildings—constructed primarily during the 1960s and 1970s—feature aging electrical systems that struggle to support modern power demands. We partner directly with property owners, HOAs, and management companies to upgrade main service panels, safely rewire individual apartment units, add dedicated in-unit laundry circuits, and install shared EV charging infrastructure in subterranean parking areas.",
      },
      {
        text: 'Holmby Hills, which is technically part of the broader Westwood neighborhood, stands as one of the most exclusive residential enclaves on earth. These sprawling estates require complex electrical systems on par with commercial facilities: heavy-duty 400-amp and 600-amp services, multiple sub-distribution panels, advanced whole-home automation, integrated security networks, and sophisticated landscape lighting designed for multi-acre grounds.',
      },
      {
        text: 'The established residential pockets of Westwood situated between Wilshire Blvd and Sunset Blvd feature well-maintained single-family homes built from the 1940s through the 1960s. These properties are prime candidates for kitchen and bathroom renovations, garage ADU additions, and comprehensive electrical modernizations. We provide turnkey electrical services for these residential remodel projects, coordinating smoothly with general contractors and interior designers.',
      },
      {
        text: 'Meanwhile, Westwood Village’s historic commercial district—centered around Broxton Avenue and Westwood Boulevard—features a walkable urban center of theaters, restaurants, and professional offices that rely on dependable commercial electrical service. We provide specialized tenant improvement wiring, lighting retrofits, business sign electrical, and heavy equipment connections for this active commercial core.',
      },
    ],
    features: [
      { item: 'UCLA Campus' },
      { item: 'Westwood Village' },
      { item: 'Holmby Hills' },
      { item: 'Hammer Museum' },
      { item: 'The Geffen Playhouse' },
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
    city: 'Westwood',
    features: [
      {
        question:
          'Can you upgrade the electrical in a Westwood apartment building?',
        answer:
          'Yes — we work with Westwood apartment building owners and managers to upgrade main electrical infrastructure, rewire individual units, and add modern amenities like EV charging and in-unit laundry circuits.',
      },
      {
        question:
          'Do you provide electrical services for Holmby Hills estates?',
        answer:
          'Absolutely. We handle estate-scale electrical projects in Holmby Hills — 400-amp+ services, whole-home automation, security systems, landscape lighting, and coordination with architects and designers.',
      },
      {
        question: 'Can you add an ADU electrical system to a Westwood home?',
        answer:
          'Yes — we install complete electrical systems for ADUs in Westwood, including sub-panels, wiring, fixtures, and main panel upgrades when needed.',
      },
      {
        question: 'Do you work on commercial properties in Westwood Village?',
        answer:
          'Yes — we provide commercial electrical for restaurants, retail, and offices throughout Westwood Village. Tenant improvements, lighting, signage, and equipment connections are all in our scope.',
      },
      {
        question:
          'How quickly can you respond to a Westwood electrical emergency?',
        answer:
          'We typically respond to Westwood emergencies within 30-60 minutes during business hours. We offer 24/7 emergency service for urgent issues like power outages, sparking outlets, and electrical fires.',
      },
      {
        question: 'Can you install recessed lighting in a Westwood condo?',
        answer:
          'Yes — we install recessed LED lighting in Westwood condos, working within the constraints of concrete ceilings and shared building infrastructure. We coordinate with your HOA for any required approvals.',
      },
    ],
  };

  const areas = {
    city: 'Westwood',
    features: [
      { item: 'Brentwood', slug: 'brentwood' },
      { item: 'Bel Air', slug: 'bel-air' },
      { item: 'West LA', slug: 'west-los-angeles' },
      { item: 'Beverly Hills', slug: 'beverly-hills' },
      { item: 'Sawtelle', slug: 'sawtelle' },
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
        Westwood Electrician | Holmby Hills & UCLA Area | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Westwood, CA & Holmby Hills estates. Apartment upgrades, Westwood Village commercial TI & residential wiring. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Westwood' />
      <LocationAllServices city='Westwood' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default WestwoodPage;
