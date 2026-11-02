import { Building2, Clock, Landmark, Shield, Star, Zap } from 'lucide-react';
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
    title:
      'Beverly Hills Electrician — Licensed & Insured Luxury Electrical Services',
    subtitle:
      'Brentwood Electrical Experts delivers premium electrical services throughout Beverly Hills. From independent municipal electrical panel upgrades and historic 1930s estate renovations to sophisticated architectural lighting design and Rodeo Drive commercial tenant improvements, our licensed C-10 electricians provide the highest level of craftsmanship and white-glove service.',
    button: 'Request Beverly Hills Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Beverly Hills Building & Safety Experts',
      'Historic & Estate Specialists',
    ],
    icons: [<Star />, <Building2 />, <Landmark />],
  };

  const about = {
    title: 'About Beverly Hills',
    city: 'Beverly Hills',
    heading: 'Electrical Services Tailored to Beverly Hills Standards',
    challengeTitle: 'Navigating Beverly Hills’ Independent Building Department',
    subtitle:
      'Beverly Hills is an iconic independent municipality of roughly 33,000 residents, globally renowned for luxury retail along Rodeo Drive, world-class celebrity estates, and immaculate residential neighborhoods. Because Beverly Hills operates as an independent city separate from Los Angeles, it maintains its own dedicated building department with exceptionally rigorous construction and inspection standards.',
    features: [
      { item: 'Historic Golden Age mansions and 1930s architectural estates' },
      { item: 'Contemporary luxury custom rebuilds and hillside compounds' },
      { item: 'Multi-unit residential flats and luxury condominiums' },
      {
        item: 'High-end commercial mixed-use properties and Rodeo Drive retail spaces',
      },
    ],
    challenge:
      "Beverly Hills operates an independent building and safety department with its own distinct municipal codes and rigorous inspection protocols. Many charming properties south of Santa Monica Boulevard feature original 1930s–1950s construction with obsolete wiring and fuse panels. Furthermore, the city's strict historic preservation guidelines and architectural board review requirements add immense complexity to electrical upgrade projects, demanding deep local municipal expertise.",
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
          "Expertly navigate Beverly Hills' independent permitting process. We handle everything from municipal plan check submission to final inspection for seamless 200A, 320A, or 400A service upgrades.",
      },
      {
        title: 'Historic Home Electrical Renovation',
        subtitle:
          "Sensitively modernize obsolete wiring systems in Beverly Hills' 1930s–1950s architectural gems—delivering modern electrical safety and capacity without compromising original character.",
      },
      {
        title: 'Luxury Home Lighting Design',
        subtitle:
          "Crystal chandeliers, architectural cove lighting, fine-art display spots, and whole-home dimming systems custom-engineered for Beverly Hills' most discerning homeowners.",
      },
      {
        title: 'Commercial Electrical – Rodeo Drive & Beyond',
        subtitle:
          "High-end retail, restaurant, and professional office electrical build-outs tailored to Beverly Hills' strict standards—featuring three-phase power, decorative lighting, and code-compliant executions.",
      },
    ],
  };

  const details = {
    city: 'Beverly Hills',
    heading: 'Your Trusted Local Electrician in Beverly Hills, California',
    pharagraphs: [
      {
        text: 'Beverly Hills is an entirely independent city—not an extension of Los Angeles—which means it enforces its own municipal building department, its own unique electrical code interpretations, and its own stringent inspection procedures. This distinction is critical because electrical contractors unfamiliar with Beverly Hills-specific requirements frequently encounter severe plan check delays, failed inspections, and costly rework. We have successfully completed hundreds of electrical projects throughout Beverly Hills, boasting a thorough, first-hand mastery of the city’s permitting workflows, code guidelines, and inspector expectations.',
      },
      {
        text: 'The residential flats of Beverly Hills—the sought-after neighborhoods south of Sunset Boulevard—contain some of the finest examples of 1930s and 1940s residential architecture in Southern California. These historic homes frequently feature original cloth-insulated wiring, obsolete fuse panels, and severely undersized services well past their operational lifespan. We specialize in delicate, non-invasive electrical modernization—replacing hazardous fuse boxes with modern circuit breaker panels, fishing new current-spec copper branch wiring, and bringing grounding and bonding up to rigorous contemporary codes while meticulously preserving vintage architectural finishes.',
      },
      {
        text: 'North of Sunset Boulevard, Beverly Hills transitions seamlessly into the sprawling hillside estates and private gated enclaves that define the legendary 90210 experience. These luxury properties demand substantial, highly engineered electrical infrastructure: 320-amp to 600-amp main services, complex multi-panel sub-distribution networks, dedicated circuits for heavy pool and spa equipment, guest houses, and extensive architectural landscape lighting systems. We engineer these complex systems with future electrical expansion in mind, ensuring your power infrastructure scales effortlessly.',
      },
      {
        text: "Meanwhile, Beverly Hills' world-famous commercial district—centered on Rodeo Drive, Beverly Drive, and Canon Drive—features ultra-luxury retail flagships, fine dining establishments, and professional executive offices with highly sophisticated electrical requirements. We provide comprehensive commercial electrical services including three-phase power distribution, decorative storefront lighting, custom sign circuits, commercial kitchen equipment connections, and emergency egress lighting systems that fully satisfy Beverly Hills' exacting commercial building standards.",
      },
    ],
    features: [
      { item: 'Rodeo Drive' },
      { item: 'Beverly Wilshire Hotel' },
      { item: 'Greystone Mansion' },
      { item: 'Beverly Gardens Park' },
      { item: 'Cedars-Sinai (Nearby)' },
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Beverly Hills Electrician | Independent City Permits & Luxury TIs | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Beverly Hills (90210–90212). Independent city permitting, historic home electrical modernizations & Rodeo Drive commercial TIs. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Beverly Hills' />
      <LocationAllServices city='Beverly Hills' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default BeverlyHillsPage;
