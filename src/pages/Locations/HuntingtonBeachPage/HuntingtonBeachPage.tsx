import { Anchor, Clock, MapPin, Shield, Star, Zap } from 'lucide-react';
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

function HuntingtonBeachPage() {
  const hero = {
    area: 'Huntington Beach, CA · 92646, 92647, 92648, 92649',
    title:
      'Huntington Beach Electrician — Licensed & Insured Electrical Services',
    subtitle:
      'Brentwood Electrical Experts extends our professional electrical services to Huntington Beach ("Surf City USA"). From marine-grade coastal panel upgrades and Level 2 EV charger installations to Main Street commercial TI and 1970s tract home modernizations, our licensed C-10 electricians deliver the same dependable quality and reliability our clients trust.',
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Orange County Coastal & Inland Experts',
      'Marine-Grade Coastal Hardware',
    ],
    icons: [<Star />, <MapPin />, <Anchor />],
  };

  const about = {
    title: 'About Huntington Beach',
    city: 'Huntington Beach',
    heading: 'Electrical Services Tailored to Huntington Beach Communities',
    challengeTitle: 'Balancing Coastal Salt Air and Inland Modernization',
    subtitle:
      'Huntington Beach is a vibrant Orange County coastal city of approximately 200,000 residents, globally celebrated for its iconic pier, rich surf culture, and diverse residential neighborhoods spanning from the oceanfront to inland suburban tracts.',
    features: [
      { item: 'Charming downtown beach bungalows and Strand-adjacent homes' },
      { item: 'Spacious 1960s and 1970s suburban tract houses' },
      { item: 'Modern coastal condominiums and townhomes' },
      { item: 'Downtown and Pacific City mixed-use commercial properties' },
    ],
    challenge:
      'Huntington Beach represents a diverse service footprint combining distinct environmental demands. Beachfront and downtown properties face aggressive salt air corrosion that destroys standard electrical components, while inland neighborhoods feature thousands of 1960s–1970s tract homes that require comprehensive panel upgrades to support modern electrical, HVAC, and EV charging loads.',
    quote: [
      {
        text: 'We extend our West LA quality and expertise to Surf City — Huntington Beach homeowners get the same licensed, professional electrical services our Westside clients have trusted for years.',
        subtext: '— Brentwood Electrical Experts, serving Huntington Beach',
      },
    ],
  };

  const popular = {
    city: 'Huntington Beach',
    cards: [
      {
        title: 'Coastal Home Electrical',
        subtitle:
          'Marine-grade electrical installations for downtown Huntington Beach and beachfront properties—featuring corrosion-resistant components built specifically to withstand harsh ocean air.',
      },
      {
        title: 'Tract Home Panel Upgrades',
        subtitle:
          "200-amp service upgrades for Huntington Beach's 1960s–1970s neighborhoods—safely powering Level 2 EV chargers, modern kitchen appliances, and home offices.",
      },
      {
        title: 'EV Charger Installation',
        subtitle:
          'High-speed Level 2 home charging for all EV makes—Tesla, BMW, Rivian, Ford, and more—with dedicated circuits and city building permits included.',
      },
      {
        title: 'Main Street Commercial Electrical',
        subtitle:
          "Restaurant, retail, and office electrical services tailored for Huntington Beach's thriving downtown Main Street and Pacific City commercial districts.",
      },
    ],
  };

  const details = {
    city: 'Huntington Beach',
    heading: 'Your Trusted Local Electrician in Huntington Beach, California',
    pharagraphs: [
      {
        text: 'Huntington Beach’s vibrant downtown and oceanfront neighborhoods feature charming beach bungalows and coastal residences that encounter the exact same salt air corrosion challenges as properties in our Westside and South Bay service areas. We bring our specialized coastal electrical expertise directly to these homes—utilizing marine-grade panels, stainless steel hardware, and weatherproof outdoor installations engineered for decades of reliable performance in aggressive ocean environments.',
      },
      {
        text: 'Meanwhile, the expansive inland neighborhoods of Huntington Beach—stretching from Huntington Harbour across to the residential sectors east of Beach Blvd—feature thousands of 1960s and 1970s tract homes that represent prime candidates for electrical modernization. Upgrading legacy 100-amp panels to robust 200-amp services, installing dedicated EV charger circuits, rewiring remodeled kitchens, and deploying whole-home surge protection rank as our most frequently requested services in these communities.',
      },
      {
        text: "Furthermore, Huntington Beach's booming culinary scene centered along Main Street and Pacific City, combined with extensive commercial corridors throughout the city, drives strong demand for professional commercial electrical contractors. We provide turnkey tenant improvement wiring, commercial kitchen equipment circuits, outdoor patio electrical, and lighting upgrades for local Orange County businesses.",
      },
      {
        text: "With Southern California's rapid adoption of electric vehicles, Huntington Beach homeowners are increasingly requesting dedicated home charging setups. We install high-capacity Level 2 chargers for all vehicle brands—including Tesla, BMW, Ford, Rivian, and Hyundai—complete with dedicated wiring runs, panel upgrades when ampacity headroom is required, and clean conduit routing.",
      },
    ],
    features: [
      { item: 'Huntington Beach Pier' },
      { item: 'Pacific City' },
      { item: 'Main Street HB' },
      { item: 'Bolsa Chica Ecological Reserve' },
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
    city: 'Huntington Beach',
    features: [
      {
        question: 'Do you really travel to Huntington Beach?',
        answer:
          'Yes — Huntington Beach is part of our extended service area. We provide the same quality, professionalism, and competitive pricing to HB customers as we do throughout the Westside and South Bay.',
      },
      {
        question: 'Can you install an EV charger at my Huntington Beach home?',
        answer:
          'Yes — we install Level 2 EV chargers for Huntington Beach homeowners, including panel upgrades when needed. We handle permits through the City of Huntington Beach Building Division.',
      },
      {
        question:
          'Do you work on beachfront homes in downtown Huntington Beach?',
        answer:
          "Yes — we install corrosion-resistant, marine-grade electrical systems for downtown HB's coastal properties, using the same salt-air expertise we bring to Hermosa Beach and Manhattan Beach.",
      },
      {
        question:
          'Can you upgrade a 1970s tract home panel in Huntington Beach?',
        answer:
          "Absolutely — we upgrade 100-amp and 150-amp panels to 200 amps in HB's tract home neighborhoods. This is the foundation for safely adding EV chargers, modern HVAC, and other electrical improvements.",
      },
    ],
  };

  const areas = {
    city: 'Huntington Beach',
    features: [
      { item: 'Seal Beach', slug: 'seal-beach' },
      { item: 'Costa Mesa', slug: 'costa-mesa' },
      { item: 'Fountain Valley', slug: 'fountain-valley' },
      { item: 'Westminster', slug: 'westminster' },
      { item: 'Newport Beach', slug: 'newport-beach' },
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
        Huntington Beach Electrician | Coastal Panels & EV Chargers | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Huntington Beach & Orange County coast. Marine-grade coastal panels, 1970s tract home upgrades & EV chargers. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Huntington Beach' />
      <LocationAllServices city='Huntington Beach' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default HuntingtonBeachPage;
