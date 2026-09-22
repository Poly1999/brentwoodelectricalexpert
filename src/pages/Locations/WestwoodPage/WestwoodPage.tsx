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

function WestwoodPage() {
  const hero = {
    area: 'Westwood, CA · 90024, 90025',
    title: 'Westwood Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts provides reliable electrical services for Westwood homes and businesses. Our licensed electricians handle panel upgrades, lighting installations, outlet work, and electrical troubleshooting with professionalism and precision.',
  };

  const about = {
    title: 'About Westwood',
    city: 'Westwood',
    subtitle:
      'Westwood is a diverse neighborhood anchored by UCLA, ranging from the bustling Westwood Village and student-oriented apartments to the ultra-exclusive Holmby Hills enclave and established family neighborhoods.',
    features: [
      { item: 'UCLA-adjacent apartments' },
      { item: 'Holmby Hills estates' },
      { item: '1950s family homes' },
      { item: 'High-rise condos' },
    ],
    challenge:
      'Westwood spans from UCLA student apartments to Holmby Hills mega-estates. The older apartment stock near the university often has outdated shared electrical systems. Residential properties in the Westwood hills and Holmby Hills require estate-level electrical services. Heavy traffic on Wilshire Blvd means commercial projects need careful logistics planning.',
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
          "Main panel replacements, unit rewiring, and EV charging infrastructure for Westwood's apartment buildings and multi-unit properties.",
      },
      {
        title: 'Holmby Hills Estate Electrical',
        subtitle:
          'Large-scale residential electrical systems for Holmby Hills properties — 400-amp+ services, automation, security, and landscape lighting.',
      },
      {
        title: 'Home Renovation Electrical',
        subtitle:
          "Kitchen, bathroom, and whole-home remodel electrical for Westwood's established family neighborhoods — panel upgrades, new circuits, and modern lighting.",
      },
      {
        title: 'Westwood Village Commercial',
        subtitle:
          'Tenant improvement and commercial electrical services for restaurants, retail, and offices in Westwood Village.',
      },
    ],
  };

  const details = {
    city: 'Westwood',
    pharagraphs: [
      {
        text: "Westwood's identity is shaped by UCLA, and the surrounding apartment buildings house thousands of students, faculty, and staff. Many of these buildings — constructed in the 1960s and 1970s — have aging electrical systems that struggle to support modern demands. We work with property owners and management companies to upgrade main panels, rewire individual units, add in-unit laundry circuits, and install EV charging infrastructure in parking areas.",
      },
      {
        text: 'Holmby Hills, technically part of the Westwood neighborhood, is one of the most exclusive residential enclaves in the world. These sprawling estates require electrical systems on par with commercial buildings — 400-amp and 600-amp services, multiple sub-panels, whole-home automation, security systems, and elaborate landscape lighting for grounds that can span several acres.',
      },
      {
        text: 'The established family neighborhoods of Westwood — between Wilshire Blvd and Sunset Blvd — feature well-maintained single-family homes from the 1940s through 1960s. These homes are popular candidates for kitchen and bathroom remodels, ADU additions, and comprehensive electrical upgrades. We provide turnkey electrical services for these renovation projects, coordinating with general contractors and designers.',
      },
      {
        text: "Westwood Village's commercial district, centered on Broxton Avenue and Westwood Boulevard, features theaters, restaurants, and professional offices that need reliable commercial electrical services. We provide tenant improvement wiring, lighting upgrades, sign electrical, and equipment connections for this walkable urban center.",
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

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Westwood' />
      <LocationAllServices city='Westwood' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default WestwoodPage;
