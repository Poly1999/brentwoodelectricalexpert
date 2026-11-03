import { Anchor, Building2, Clock, Shield, Star, Zap } from 'lucide-react';
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

function SantaMonicaPage() {
  const hero = {
    area: 'Santa Monica, CA · 90401, 90402, 90403, 90404, 90405',
    title:
      'Santa Monica Electrician — Licensed & Insured Coastal Electrical Services',
    subtitle:
      'Brentwood Electrical Experts provides full-service residential, multi-unit, and commercial electrical work across Santa Monica. From coastal marine-grade panel upgrades and HOA multi-unit EV charging solutions to historic Craftsman rewiring and Montana Avenue commercial tenant improvements, our licensed C-10 electricians deliver expert service with transparent upfront pricing.',
    button: 'Request Santa Monica Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Santa Monica Building Division Experts',
      'Marine-Grade Coastal Hardware',
    ],
    icons: [<Star />, <Building2 />, <Anchor />],
  };

  const about = {
    title: 'About Santa Monica',
    city: 'Santa Monica',
    heading:
      'Tailored Electrical Engineering for Santa Monica’s Coastal Architecture',
    challengeTitle: 'Navigating Salt Air Corrosion and Municipal Permitting',
    subtitle:
      'Santa Monica is a progressive coastal city of roughly 93,000 residents, globally recognized for strict environmental policies, a highly walkable urban core, and iconic beachfront neighborhoods. Because Santa Monica operates as an independent municipality with its own building and safety division, local electrical codes and green building ordinances frequently exceed standard Los Angeles County requirements.',
    features: [
      {
        item: 'Historic pre-war Craftsman bungalows (North of Montana & Sunset Park)',
      },
      { item: 'Art Deco and mid-century multi-unit apartment complexes' },
      { item: 'Beachside condominiums and HOA-managed townhomes' },
      {
        item: 'Modern sustainable infill construction and commercial storefronts',
      },
    ],
    challenge:
      "Santa Monica's aggressive coastal microclimate subjects outdoor electrical grids to persistent salt-air moisture, which rapidly accelerates electrical panel degradation, meter base rust, and exterior fixture failure. Furthermore, many properties north of Montana Avenue and in Sunset Park retain original pre-1960 electrical panels that cannot support full home electrification. Navigating the strict electronic permitting process through the Santa Monica Building Division requires seasoned local contractors who understand municipal green codes.",
    quote: [
      {
        text: "We've navigated Santa Monica's unique permitting process hundreds of times. Our familiarity with the Santa Monica Building Division means faster permit approvals and smoother inspections for your project.",
        subtext: '— Brentwood Electrical Experts, serving Santa Monica',
      },
    ],
  };

  const popular = {
    city: 'Santa Monica',
    cards: [
      {
        title: 'Coastal-Grade Panel Upgrades',
        subtitle:
          "Upgrade your Santa Monica home's electrical service with marine-grade enclosures, stainless steel hardware, and NEMA 3R components engineered to withstand decades of heavy salt-air exposure.",
      },
      {
        title: 'Multi-Unit EV Charger Solutions',
        subtitle:
          'Turnkey Level 2 EV charging installations for Santa Monica condos, apartment buildings, and HOA-managed properties—featuring structured parking structure conduit runs and shared meter power configurations.',
      },
      {
        title: 'Historic Home Rewiring',
        subtitle:
          "Safely modernize obsolete electrical wiring in Santa Monica's cherished Craftsman bungalows and vintage properties without compromising original architectural millwork or plaster finishes.",
      },
      {
        title: 'Commercial Tenant Improvements',
        subtitle:
          'Restaurant, retail boutique, and professional office electrical build-outs along Montana Avenue, Main Street, and the Third Street Promenade—engineered strictly to satisfy Santa Monica energy codes.',
      },
    ],
  };

  const details = {
    city: 'Santa Monica',
    heading: 'Your Trusted Local Electrician in Santa Monica, California',
    pharagraphs: [
      {
        text: "Santa Monica's diverse housing stock spans well over a century of iconic California design. North of Montana Avenue, you will discover stately single-family properties—many of which are original Craftsman and Spanish revival bungalows that have been beautifully preserved but still operate on outdated electrical infrastructure from the 1920s and 1930s. South of Wilshire Boulevard, multi-unit apartment buildings constructed during the post-war building boom present entirely different challenges, featuring shared house-meters and sub-distribution systems that require modernization to meet contemporary tenant demands. Our licensed electricians understand these architectural distinctions and engineer customized solutions for every property type.",
      },
      {
        text: 'The city’s aggressive municipal sustainability goals have transformed Santa Monica into a national leader for electric vehicle adoption and residential solar integration. We collaborate directly with solar contractors to ensure main service entrance upgrades and panel capacities are properly calculated to handle simultaneous solar photovoltaic production and Level 2 EV charging loads. A growing number of Santa Monica homeowners are opting for 320-amp or 400-amp service upgrades to fully future-proof their properties for total household electrification—including induction cooktops, heat pump HVAC systems, heat pump water heaters, and multiple EV charging ports.',
      },
      {
        text: 'Coastal moisture remains the silent enemy of Santa Monica’s electrical infrastructure. The persistent marine layer and salt-laden sea breeze accelerate galvanic corrosion on exterior panels, weatherheads, meter sockets, and outdoor lighting fixtures. We exclusively deploy marine-grade hardware, stainless steel fasteners, and NEMA 3R-rated weatherproof enclosures for all exterior electrical installations across Santa Monica. This rigorous material selection ensures your electrical investment withstands the coastal elements for decades.',
      },
      {
        text: "Additionally, Santa Monica's bustling commercial districts along Main Street, Montana Avenue, and the Third Street Promenade host hundreds of independent retail boutiques, destination restaurants, and professional offices that depend on uninterrupted power. We provide comprehensive commercial electrical services—including tenant improvement wiring, strict code-compliance retrofits, architectural display lighting, and emergency egress lighting systems. Our commercial crews coordinate around your operating hours to eliminate business interruption.",
      },
    ],
    features: [
      { item: 'Santa Monica Pier' },
      { item: 'Third Street Promenade' },
      { item: 'Montana Avenue' },
      { item: 'Main Street' },
      { item: 'Palisades Park' },
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
    city: 'Santa Monica',
    features: [
      {
        question:
          'Does Santa Monica have different electrical codes than Los Angeles?',
        answer:
          "Yes — Santa Monica is an independent city with its own Building Division and sometimes adopts codes that exceed LA County standards, particularly around energy efficiency and Title 24 compliance. We're thoroughly familiar with Santa Monica's specific requirements and ensure every project passes inspection on the first visit.",
      },
      {
        question:
          'Can you install an EV charger in my Santa Monica condo or apartment?',
        answer:
          "Yes. We regularly install EV chargers in Santa Monica multi-unit buildings. This often involves working with your HOA or building management, running conduit through parking structures, and potentially upgrading the building's main electrical service. We handle all coordination and permitting.",
      },
      {
        question:
          'How does the salt air in Santa Monica affect electrical systems?',
        answer:
          'Salt air causes accelerated corrosion on outdoor electrical components — panels, meter bases, weatherheads, conduit, and fixtures. We combat this by using marine-grade enclosures, stainless steel hardware, and corrosion-resistant coatings on all exterior installations. We also recommend annual inspections for coastal properties.',
      },
      {
        question:
          'Do you work on older homes north of Montana in Santa Monica?',
        answer:
          'Absolutely — north-of-Montana homes are some of our most common projects. Many still have original fuse boxes, cloth-wrapped wiring, or undersized 60-amp panels. We specialize in carefully upgrading these systems while respecting the character and craftsmanship of these beautiful older homes.',
      },
      {
        question:
          'Can you install outdoor lighting along the walk streets in Santa Monica?',
        answer:
          'Yes — we install landscape lighting, pathway lighting, and security lighting for walk-street properties throughout Santa Monica. We use low-voltage LED systems that are energy-efficient and code-compliant, with weather-resistant fixtures rated for coastal environments.',
      },
      {
        question: 'How long does a permit take in Santa Monica?',
        answer:
          'Standard electrical permits through the Santa Monica Building Division typically take 3-5 business days for approval. We submit complete, accurate applications to avoid delays. For simple projects like EV charger installations, over-the-counter permits are sometimes available for same-day approval.',
      },
    ],
  };

  const areas = {
    city: 'Santa Monica',
    features: [
      { item: 'Brentwood', slug: 'brentwood' },
      { item: 'Venice', slug: 'venice' },
      { item: 'Mar Vista', slug: 'mar-vista' },
      { item: 'Pacific Palisades', slug: 'pacific-palisades' },
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
        Santa Monica Electrician | Coastal Panel Upgrades & EV Chargers | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Santa Monica, CA (90401–90405). Coastal marine-grade panel upgrades, HOA EV chargers & Montana Ave commercial TIs. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Santa Monica' />
      <LocationAllServices city='Santa Monica' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default SantaMonicaPage;
