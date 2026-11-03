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

function RedondoBeachPage() {
  const hero = {
    area: 'Redondo Beach, CA · 90277, 90278',
    title:
      'Redondo Beach Electrician — Licensed & Insured South Bay Electrical Services',
    subtitle:
      'Brentwood Electrical Experts provides reliable, licensed electrical services throughout Redondo Beach. From South Redondo marine-grade coastal installations and Riviera Village commercial tenant improvements to North Redondo 1960s tract home panel upgrades and ADU wiring, our licensed C-10 electricians deliver quality work across the entire South Bay community.',
    button: 'Request Redondo Beach Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'South & North Redondo Specialists',
      'Marine-Grade & Tract Home Experts',
    ],
    icons: [<Star />, <MapPin />, <Anchor />],
  };

  const about = {
    title: 'About Redondo Beach',
    city: 'Redondo Beach',
    heading:
      'Electrical Services Tailored to Redondo Beach’s Coastal & Inland Neighborhoods',
    challengeTitle:
      'Addressing Coastal Corrosion and 1960s Tract Infrastructure',
    subtitle:
      'Redondo Beach is a vibrant South Bay beach city of approximately 72,000 residents, offering an accessible, highly desirable coastal lifestyle defined by a distinct geographic and architectural split between oceanfront living in the south and established suburban family neighborhoods in the north.',
    features: [
      {
        item: 'South Redondo oceanfront beach homes and luxury hillside properties',
      },
      {
        item: 'North Redondo established 1960s suburban tract houses and family homes',
      },
      {
        item: 'Marina-adjacent condominiums and multi-family residential units',
      },
      {
        item: 'Riviera Village boutiques, restaurants, and commercial storefronts',
      },
    ],
    challenge:
      'Redondo Beach spans a diverse footprint from ocean-adjacent properties in South Redondo—which face aggressive salt-air corrosion and require marine-grade hardware—to inland residential blocks in North Redondo featuring thousands of 1960s tract homes that rely on outdated 100-amp panels. Additionally, the bustling Riviera Village and King Harbor commercial districts generate continuous demand for professional retail and restaurant electrical work.',
    quote: [
      {
        text: "We serve all of Redondo Beach — from South Redondo's oceanfront homes to North Redondo's family neighborhoods — with the same commitment to quality, fair pricing, and professional service.",
        subtext: '— Brentwood Electrical Experts, serving Redondo Beach',
      },
    ],
  };

  const popular = {
    city: 'Redondo Beach',
    cards: [
      {
        title: 'South Redondo Coastal Electrical',
        subtitle:
          "Marine-grade installations for South Redondo's beachfront and near-beach homes—featuring corrosion-resistant panels, smart home automation, and luxury lighting design.",
      },
      {
        title: 'North Redondo Family Home Upgrades',
        subtitle:
          "200-amp panel replacements, Level 2 EV charger installations, and kitchen remodeling electrical for North Redondo's mid-century tract neighborhoods.",
      },
      {
        title: 'Riviera Village Commercial',
        subtitle:
          "Specialized tenant improvement wiring, architectural lighting upgrades, and commercial equipment connections for South Redondo's charming Riviera Village business district.",
      },
    ],
  };

  const details = {
    city: 'Redondo Beach',
    heading: 'Your Trusted Local Electrician in Redondo Beach, California',
    pharagraphs: [
      {
        text: 'Redondo Beach’s distinct South Redondo and North Redondo communities present wonderfully diverse electrical needs. Properties located throughout South Redondo’s beachfront and near-beach sectors encounter constant salt-air exposure that rapidly degrades standard electrical hardware, while frequently showcasing upscale architectural finishes that require sophisticated smart home networks and custom lighting. Conversely, North Redondo’s family-oriented neighborhoods—largely constructed during the 1960s building boom—require practical, high-impact electrical modernizations, including main panel replacements, branch circuit additions, and dedicated Level 2 EV charger circuits.',
      },
      {
        text: 'Furthermore, the charming Riviera Village commercial district in South Redondo hosts a thriving ecosystem of independent boutiques, destination restaurants, and professional executive offices that depend on uninterrupted, code-compliant commercial power. We provide comprehensive commercial electrical services—including custom tenant improvement wiring, storefront display lighting, and heavy commercial kitchen equipment feeds—delivering the reliability and craftsmanship that this premier shopping and dining district demands.',
      },
      {
        text: 'As Redondo Beach families increasingly invest in property enhancements—such as detached accessory dwelling units (ADUs), garage conversions, and gourmet kitchen expansions—professional electrical integration is more critical than ever. We provide complete, turnkey electrical wiring for all residential remodeling projects, managing everything from service panel capacity upgrades to final architectural fixture installations.',
      },
    ],
    features: [
      { item: 'Redondo Beach Pier' },
      { item: 'King Harbor' },
      { item: 'Riviera Village' },
      { item: 'Hopkins Wilderness Park' },
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
    city: 'Redondo Beach',
    features: [
      {
        question: 'Do you serve both South and North Redondo Beach?',
        answer:
          'Yes — we serve all of Redondo Beach, from oceanfront South Redondo homes to North Redondo family neighborhoods. Each area has distinct electrical needs, and we tailor our approach accordingly.',
      },
      {
        question: 'Can you handle commercial electrical in Riviera Village?',
        answer:
          'Absolutely — we provide commercial electrical services for Riviera Village restaurants, boutiques, and offices, including tenant improvements, lighting, and equipment connections.',
      },
      {
        question: 'Do older North Redondo homes need panel upgrades?',
        answer:
          'Many do — 1960s North Redondo tract homes typically have 100-amp panels that benefit from upgrading to 200 amps, especially when adding EV chargers, modern HVAC, or remodeling kitchens.',
      },
    ],
  };

  const areas = {
    city: 'Redondo Beach',
    features: [
      { item: 'Hermosa Beach', slug: 'hermosa-beach' },
      { item: 'Manhattan Beach', slug: 'manhattan-beach' },
      { item: 'Torrance', slug: 'torrance' },
      { item: 'Palos Verdes', slug: 'palos-verdes' },
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
        Redondo Beach Electrician | South & North Redondo Electrical | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Redondo Beach (90277, 90278). South Redondo marine coastal panels, Riviera Village commercial TIs & North Redondo 1960s tract home upgrades. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Redondo Beach' />
      <LocationAllServices city='Redondo Beach' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default RedondoBeachPage;
