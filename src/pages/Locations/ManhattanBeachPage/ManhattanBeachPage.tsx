import { Anchor, Clock, Gem, Shield, Star, Zap } from 'lucide-react';
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

function ManhattanBeachPage() {
  const hero = {
    area: 'Manhattan Beach, CA · 90266',
    title:
      'Manhattan Beach Electrician — Licensed & Insured Luxury Electrical Services',
    subtitle:
      "Brentwood Electrical Experts delivers premium electrical services for Manhattan Beach homes and commercial properties. From luxury Sand Section 400-amp service upgrades and whole-home Lutron lighting automation to marine-grade coastal hardware installations and high-end outdoor living electrical, our licensed C-10 electricians serve the South Bay's most discerning clients with unmatched precision.",
    button: 'Request Manhattan Beach Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Luxury Sand & Tree Section Specialists',
      'Marine-Grade Coastal Hardware',
    ],
    icons: [<Star />, <Gem />, <Anchor />],
  };

  const about = {
    title: 'About Manhattan Beach',
    city: 'Manhattan Beach',
    heading: 'Electrical Services Tailored to Manhattan Beach Architecture',
    challengeTitle: 'Powering Luxury Living and Mitigating Coastal Corrosion',
    subtitle:
      'Manhattan Beach is an affluent South Bay coastal city of approximately 35,000 residents, consistently ranked among the most desirable places to live in California. Renowned for its top-rated schools, stunning luxury coastal real estate, and strong community identity, the city demands electrical engineering of the highest caliber.',
    features: [
      { item: 'Ultra-luxury multi-story Sand Section custom beach homes' },
      {
        item: 'Modern coastal architectural new builds and structural remodels',
      },
      {
        item: 'Historic beach cottages and pedestrian-friendly walk-street properties',
      },
      {
        item: 'Tree Section single-family family homes and expansive residential expansions',
      },
    ],
    challenge:
      'Manhattan Beach features some of the most valuable residential real estate in the entire South Bay. Luxury home electrical demands are substantial—frequently requiring 320-amp to 400-amp main services, advanced home automation, security camera networks, and sophisticated architectural lighting. Furthermore, the aggressive salt-air environment in the Sand Section and ocean-adjacent blocks demands rigorous marine-grade material selection to prevent rapid electrical component degradation.',
    quote: [
      {
        text: "Manhattan Beach homeowners expect premium quality — in their homes, their lifestyle, and their service providers. We deliver the caliber of electrical work that Manhattan Beach's finest homes deserve.",
        subtext: '— Brentwood Electrical Experts, serving Manhattan Beach',
      },
    ],
  };

  const popular = {
    city: 'Manhattan Beach',
    cards: [
      {
        title: 'Luxury Home Electrical',
        subtitle:
          "320-amp to 400-amp heavy services, whole-home automation integration, and robust power distribution engineered for Manhattan Beach's finest Sand Section multi-story residences.",
      },
      {
        title: 'Coastal-Grade Installations',
        subtitle:
          "Marine-grade electrical panels, corrosion-resistant stainless hardware, and coastal-rated components engineered for long-lasting performance in Manhattan Beach's heavy salt-air climate.",
      },
      {
        title: 'Smart Home & Lighting Control',
        subtitle:
          "Lutron HomeWorks, Sonos, and Savant whole-home automation and intelligent lighting design tailored for Manhattan Beach's tech-savvy, design-conscious homeowners.",
      },
      {
        title: 'Outdoor Living Electrical',
        subtitle:
          'Swimming pool and spa equipment, outdoor kitchen culinary circuits, sport court lighting, and sophisticated landscape illumination designed for an active coastal lifestyle.',
      },
    ],
  };

  const details = {
    city: 'Manhattan Beach',
    heading: 'Your Trusted Local Electrician in Manhattan Beach, California',
    pharagraphs: [
      {
        text: 'Manhattan Beach’s iconic Sand Section—encompassing the premier blocks stretching from The Strand up to Manhattan Beach Boulevard—features some of the most architecturally ambitious and valuable residential real estate in the South Bay. These luxury custom homes, many of which are newly constructed or extensively remodeled, demand highly sophisticated electrical infrastructure: 320-amp or 400-amp main electrical services, whole-home Lutron lighting control systems, multi-zone audio distribution, comprehensive security camera networks, and dedicated high-amperage circuits for temperature-controlled wine rooms, saunas, and professional-grade culinary kitchens.',
      },
      {
        text: "Meanwhile, the historic Tree Section—Manhattan Beach’s beloved family-oriented neighborhood—showcases a dynamic mix of vintage California beach cottages and modern new construction builds. Local families here regularly invest in essential property modernizations: main electrical panel replacements, Level 2 EV charger installations, kitchen remodeling circuits, and automated landscape lighting grids. We serve Tree Section homeowners with the exact same meticulous attention to detail and professional craftsmanship that we bring to the Sand Section's multi-million-dollar luxury builds.",
      },
      {
        text: 'Because Manhattan Beach sits directly on the Pacific coastline, aggressive salt-air corrosion is a constant environmental threat—even for properties situated several blocks inland. We exclusively specify marine-grade electrical materials, stainless steel fasteners, and NEMA 3R weatherproof enclosures for all exterior and garage installations, educating homeowners on the critical maintenance realities of coastal living. Our engineering goal is to install robust systems that perform reliably for decades.',
      },
      {
        text: "Finally, Manhattan Beach's active outdoor lifestyle drives heavy demand for specialized outdoor electrical engineering—including pool and spa subpanels, outdoor kitchens equipped with heavy commercial appliances, custom gas fire pit igniters, sport court lighting poles, and elaborate architectural garden illumination. We design these exterior systems for absolute durability, safety, and seamless synchronization with your home's central electrical grid.",
      },
    ],
    features: [
      { item: 'Manhattan Beach Pier' },
      { item: 'Manhattan Beach Boulevard' },
      { item: 'Metlox Plaza' },
      { item: 'Polliwog Park' },
      { item: 'The Strand' },
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
    city: 'Manhattan Beach',
    features: [
      {
        question:
          'Do you work on luxury homes in the Manhattan Beach Sand Section?',
        answer:
          'Yes — we provide premium electrical services for Sand Section homes, including large-scale panel services, whole-home automation, security systems, and sophisticated lighting design.',
      },
      {
        question:
          'What size electrical service do Manhattan Beach luxury homes need?',
        answer:
          'Sand Section and larger Tree Section homes typically need 320-amp or 400-amp services to support the combined demands of HVAC, pool equipment, EV chargers, smart home systems, and high-end kitchen appliances.',
      },
      {
        question:
          'Can you install Lutron lighting control in my Manhattan Beach home?',
        answer:
          "Yes — we install Lutron Caseta, RadioRA 3, and HomeWorks QSX systems. We design custom lighting scenes that enhance your Manhattan Beach home's ambiance while providing energy-efficient control.",
      },
      {
        question:
          'Do you install outdoor electrical for Manhattan Beach pool and spa areas?',
        answer:
          'Absolutely — we install pool sub-panels, spa circuits, outdoor kitchen electrical, landscape lighting, and all associated outdoor infrastructure with marine-grade, corrosion-resistant components.',
      },
    ],
  };

  const areas = {
    city: 'Manhattan Beach',
    features: [
      { item: 'Hermosa Beach', slug: 'hermosa-beach' },
      { item: 'Redondo Beach', slug: 'redondo-beach' },
      { item: 'El Segundo', slug: 'el-segundo' },
      { item: 'Hawthorne', slug: 'hawthorne' },
      { item: 'Gardena', slug: 'gardena' },
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
        Manhattan Beach Electrician | Luxury Homes & Marine Panels | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Manhattan Beach (90266). Sand Section 400A luxury electrical, Tree Section panel upgrades, Lutron automation & marine-grade outdoor systems. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Manhattan Beach' />
      <LocationAllServices city='Manhattan Beach' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default ManhattanBeachPage;
