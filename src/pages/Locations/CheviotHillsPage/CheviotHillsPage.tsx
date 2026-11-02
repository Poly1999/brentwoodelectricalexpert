import { ClipboardCheck, Clock, Home, Shield, Star, Zap } from 'lucide-react';
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

function CheviotHillsPage() {
  const hero = {
    area: 'Cheviot Hills, CA · 90064',
    title:
      'Cheviot Hills Electrician — Licensed & Insured Residential Electrical Services',
    subtitle:
      'Brentwood Electrical Experts provides trusted residential electrical services for Cheviot Hills homeowners. From 1930s traditional panel upgrades and kitchen remodel wiring to architectural landscape lighting and complete electrical modernizations, our licensed C-10 electricians handle every project with care, precision, and absolute respect for your home.',
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Historic & Traditional Home Specialists',
      'LADBS Permitted Work',
    ],
    icons: [<Star />, <Home />, <ClipboardCheck />],
  };

  const about = {
    title: 'About Cheviot Hills',
    city: 'Cheviot Hills',
    heading:
      'Electrical Services Tailored to Cheviot Hills’ Classic Architecture',
    challengeTitle:
      'Modernizing Electrical Infrastructure in a Historic Neighborhood',
    subtitle:
      'Cheviot Hills is a quiet, prestigious residential neighborhood situated directly south of Century City, renowned for its excellent local schools, beautiful tree-lined suburban streets, and a strong, tight-knit family-oriented community.',
    features: [
      { item: '1930s and 1940s traditional character homes' },
      { item: 'Classic Colonial Revival residences' },
      { item: 'Beautifully renovated and expanded family homes' },
      { item: 'Mid-century properties with mature architectural detailing' },
    ],
    challenge:
      "Cheviot Hills' well-established residential character means the vast majority of electrical work involves upgrading legacy systems in older homes. Original electrical panels, ungrounded wiring, and limited circuit capacity cannot support today's high-draw kitchen appliances, home offices, and EV chargers. Upgrading these systems safely requires meticulous care to preserve vintage architectural millwork and plaster finishes.",
    quote: [
      {
        text: "Cheviot Hills homeowners value quality and attention to detail — that's exactly what we deliver, with clean installations, transparent pricing, and respect for your home.",
        subtext: '— Brentwood Electrical Experts, serving Cheviot Hills',
      },
    ],
  };

  const popular = {
    city: 'Cheviot Hills',
    cards: [
      {
        title: 'Classic Home Panel Upgrades',
        subtitle:
          "Safe 200-amp service upgrades for Cheviot Hills' 1930s–1950s homes—establishing the essential electrical foundation for modern living while maintaining architectural integrity.",
      },
      {
        title: 'Renovation Electrical',
        subtitle:
          'Comprehensive kitchen, bathroom, and whole-home remodel electrical—featuring dedicated appliance circuits, modern lighting layouts, and clean rough-in installations.',
      },
      {
        title: 'Estate Landscape Lighting',
        subtitle:
          "Professional low-voltage LED landscape lighting design and installation tailored for Cheviot Hills' spacious lots, mature shade trees, and beautifully manicured lawns.",
      },
    ],
  };

  const details = {
    city: 'Cheviot Hills',
    heading: 'Your Trusted Local Electrician in Cheviot Hills, California',
    pharagraphs: [
      {
        text: "Cheviot Hills remains one of the Westside's best-kept secrets—a tranquil, tree-lined residential haven where families put down roots for generations. The homes here, primarily constructed between the 1930s and 1950s, reflect exceptional craftsmanship of their era but frequently feature legacy electrical systems that require careful modernization. We assist Cheviot Hills homeowners in thoughtfully upgrading their properties with 200-amp panels, contemporary lighting design, and additional dedicated circuits—preserving original home character while introducing robust, modern electrical capability.",
      },
      {
        text: "Kitchen and bathroom renovations stand as Cheviot Hills' most popular residential home improvement projects. These complex updates demand precise electrical planning and execution: dedicated appliance circuits, GFCI-protected wet-zone outlets, layered recessed and task lighting layouts, exhaust fan wiring, and radiant heated floor circuits. We coordinate closely with your general contractor and interior designer to ensure our electrical rough-in aligns flawlessly with the overall architectural renovation schedule.",
      },
      {
        text: "Furthermore, Cheviot Hills' spacious residential lots and mature landscaping create gorgeous outdoor living spaces that benefit immensely from professional landscape lighting. We design and install energy-efficient low-voltage LED lighting systems that accentuate specimen trees, illuminate safe walkways, and highlight outdoor entertaining zones—adding both stunning evening aesthetics and robust perimeter security to your property.",
      },
    ],
    features: [
      { item: 'Rancho Park Golf Course' },
      { item: 'Cheviot Hills Recreation Center' },
      { item: 'Cheviot Hills Park' },
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
    city: 'Cheviot Hills',
    features: [
      {
        question: 'Do Cheviot Hills homes need electrical upgrades?',
        answer:
          'Most do — the majority were built with 100-amp panels and limited circuits. A 200-amp panel upgrade is the recommended starting point for any Cheviot Hills electrical modernization project.',
      },
      {
        question:
          'Can you handle electrical for a Cheviot Hills kitchen remodel?',
        answer:
          'Yes — we install all required kitchen circuits, GFCI outlets, under-cabinet lighting, and fixture connections. We coordinate with your GC to ensure everything is done on schedule.',
      },
      {
        question: 'Do you install landscape lighting in Cheviot Hills?',
        answer:
          "Absolutely — Cheviot Hills' beautiful lots are perfect for landscape lighting. We design and install systems that highlight trees, illuminate pathways, and enhance outdoor entertaining areas.",
      },
    ],
  };

  const areas = {
    city: 'Cheviot Hills',
    features: [
      { item: 'Beverlywood', slug: 'beverlywood' },
      { item: 'Culver City', slug: 'culver-city' },
      { item: 'Century City', slug: 'century-city' },
      { item: 'Westwood', slug: 'westwood' },
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
        Cheviot Hills Electrician | Classic Home Electrical & Remodels | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Cheviot Hills, CA. 1930s–1950s panel upgrades, kitchen remodel wiring & estate landscape lighting. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Cheviot Hills' />
      <LocationAllServices city='Cheviot Hills' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default CheviotHillsPage;
