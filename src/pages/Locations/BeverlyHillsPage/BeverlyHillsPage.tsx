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

function BeverlyHillsPage() {
  const hero = {
    area: 'Beverly Hills, CA · 90210, 90211, 90212',
    title: 'Beverly Hills Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts delivers premium electrical services throughout Beverly Hills. From electrical panel upgrades and EV charger installations to sophisticated lighting design and smart home automation, we provide the highest level of craftsmanship and service for Beverly Hills homes and businesses.',
  };

  const about = {
    title: 'About Beverly Hills',
    city: 'Beverly Hills',
    subtitle:
      'Beverly Hills is an iconic independent city of roughly 33,000 residents, world-famous for luxury shopping on Rodeo Drive, celebrity residents, and immaculate residential neighborhoods. The city maintains its own building department with high standards for construction quality.',
    features: [
      { item: 'Historic Golden Age mansions' },
      { item: 'Modern luxury rebuilds' },
      { item: 'Multi-unit flats' },
      { item: 'Commercial mixed-use' },
    ],
    challenge:
      "Beverly Hills operates as an independent city with its own building department and inspection process, separate from Los Angeles. Many homes south of Santa Monica Blvd are 1930s–1950s construction with original wiring. The city's strict renovation requirements and historic preservation standards add complexity to electrical upgrade projects.",
    quote: [
      {
        text: "We've built strong relationships with the Beverly Hills Building Department through years of consistent, code-compliant work. Our permit applications are thorough, our installations are meticulous, and our inspection pass rates reflect our commitment to quality.",
        subtext: '— Brentwood Electrical Experts, serving Beverly Hills',
      },
    ],
  };

  const popular = {
    city: 'Beverly Hills',
    cards: [
      {
        title: 'Beverly Hills Panel Upgrades',
        subtitle:
          "Navigate Beverly Hills' independent permitting process with confidence. We handle everything from application to final inspection for seamless 200-amp, 320-amp, or 400-amp upgrades.",
      },
      {
        title: 'Historic Home Electrical Renovation',
        subtitle:
          "Sensitively modernize the electrical systems in Beverly Hills' 1930s–1950s architectural gems — modern safety and capacity without compromising character.",
      },
      {
        title: 'Luxury Home Lighting Design',
        subtitle:
          "Crystal chandeliers, architectural cove lighting, art lighting, and whole-home dimming systems designed and installed for Beverly Hills' most discerning homeowners.",
      },
      {
        title: 'Commercial Electrical – Rodeo Drive & Beyond',
        subtitle:
          "Retail, restaurant, and office electrical build-outs tailored to Beverly Hills' high standards — three-phase power, decorative lighting, and code-compliant installations.",
      },
    ],
  };

  const details = {
    city: 'Beverly Hills',
    pharagraphs: [
      {
        text: "Beverly Hills is an independent city — not part of Los Angeles — which means it has its own building department, its own electrical codes, and its own inspection process. This distinction matters because contractors unfamiliar with Beverly Hills-specific requirements can face delays, failed inspections, and costly rework. We've completed hundreds of electrical projects in Beverly Hills and have a thorough understanding of the city's permitting process, code interpretations, and inspector expectations.",
      },
      {
        text: 'The residential flats of Beverly Hills — the neighborhoods south of Sunset Blvd — contain some of the finest examples of 1930s and 1940s residential architecture in Southern California. These homes often feature original cloth-insulated wiring, fuse panels, and undersized services that are well past their useful life. We specialize in carefully upgrading these systems — replacing fuse boxes with modern circuit breaker panels, rewiring circuits with current-spec copper conductors, and bringing grounding and bonding up to modern code — all while preserving the character of these treasured homes.',
      },
      {
        text: 'North of Sunset, Beverly Hills transitions into the hillside estates and gated communities that define the 90210 experience. These larger properties demand more substantial electrical infrastructure — 320-amp to 600-amp services, multiple sub-panels, dedicated circuits for pool equipment, guest houses, and extensive landscape lighting systems. We design these complex systems with future expansion in mind, ensuring your electrical infrastructure can grow with your property.',
      },
      {
        text: "Beverly Hills' commercial district — centered on Rodeo Drive, Beverly Drive, and Canon Drive — features high-end retail, restaurants, and professional offices with sophisticated electrical needs. We provide commercial services including three-phase power distribution, decorative storefront lighting, sign circuits, kitchen hood electrical, and emergency lighting systems that comply with Beverly Hills' exacting commercial building standards.",
      },
    ],
    features: [
      { item: 'Rodeo Drive' },
      { item: 'Beverly Wilshire Hotel' },
      { item: 'Greystone Mansion' },
      { item: 'Beverly Gardens Park' },
      { item: 'Cedars-Sinai nearby' },
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
    city: 'Beverly Hills',
    features: [
      {
        question:
          'Is the Beverly Hills permitting process different from Los Angeles?',
        answer:
          "Yes — Beverly Hills is an independent city with its own Building and Safety Division. Electrical permits, plan checks, and inspections are handled entirely by Beverly Hills, not LADBS. We're very familiar with their process and consistently achieve first-time inspection passes.",
      },
      {
        question:
          'Can you rewire a 1930s Beverly Hills home without tearing out walls?',
        answer:
          'In many cases, yes. We use techniques like fishing wire through existing wall cavities, accessing wiring from the attic and crawl space, and making minimal, repairable access openings. For homes with plaster walls, we take special care to preserve the original surfaces. A full assessment during our free estimate will determine the best approach for your specific home.',
      },
      {
        question: 'Do you handle commercial electrical work on Rodeo Drive?',
        answer:
          'Yes — we provide commercial electrical services for Beverly Hills retail, restaurant, and office spaces. This includes tenant improvement wiring, decorative lighting installations, sign circuits, three-phase equipment connections, and emergency lighting upgrades. We schedule work around business hours to minimize disruption.',
      },
      {
        question:
          "What's the typical timeline for a panel upgrade in Beverly Hills?",
        answer:
          'A standard panel upgrade in Beverly Hills — from permit application to final inspection — typically takes 1-2 weeks. The actual installation is completed in one day. Permit processing through the Beverly Hills Building Division usually takes 3-5 business days.',
      },
      {
        question: 'Can you install a pool sub-panel at my Beverly Hills home?',
        answer:
          'Absolutely. Pool equipment — pumps, heaters, lighting, automation systems — requires a dedicated sub-panel with GFCI protection and proper bonding. We install pool sub-panels that meet both NEC and Beverly Hills municipal code requirements, and we coordinate with your pool contractor for seamless integration.',
      },
      {
        question:
          'Do you provide electrical services for Beverly Hills home remodels?',
        answer:
          "Yes. We're a preferred electrical subcontractor for many Beverly Hills general contractors and architects. We provide rough-in wiring, panel upgrades, lighting layout and installation, and final trim for kitchen, bathroom, and whole-home remodeling projects.",
      },
    ],
  };

  const areas = {
    city: 'Beverly Hills',
    features: [
      { item: 'Bel Air', slug: 'bel-air' },
      { item: 'West Hollywood', slug: 'west-hollywood' },
      { item: 'Beverly Grove', slug: 'beverly-grove' },
      { item: 'Century City', slug: 'century-city' },
      { item: 'Westwood', slug: 'westwood' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Beverly Hills' />
      <LocationAllServices city='Beverly Hills' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default BeverlyHillsPage;
