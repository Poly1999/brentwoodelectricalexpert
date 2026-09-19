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

function SantaMonicaPage() {
  const hero = {
    area: 'Santa Monica, CA · 90401, 90402, 90403, 90404, 90405',
    title: 'Santa Monica Electrician — Licensed & Insured',
    subtitle:
      'Need a licensed electrician in Santa Monica? Brentwood Electrical Experts provides full-service residential and commercial electrical work across Santa Monica. Whether you need an EV charger installed, a panel upgrade, security lighting, or smart home wiring, our team delivers expert service with upfront pricing.',
  };

  const about = {
    title: 'About Santa Monica',
    city: 'Santa Monica',
    subtitle:
      'Santa Monica is a vibrant coastal city of roughly 93,000 residents, known for its progressive environmental policies, walkable downtown, and beautiful beaches. The city has its own building department with codes that sometimes exceed Los Angeles County requirements.',
    features: [
      { item: 'Craftsman bungalows' },
      { item: 'Art Deco apartments' },
      { item: 'Beachside condominiums' },
      { item: 'Modern infill construction' },
    ],
    challenge:
      "Santa Monica's coastal climate subjects electrical systems to persistent salt air corrosion, which accelerates panel degradation and outdoor fixture failure. Many properties in the north-of-Montana and Sunset Park neighborhoods were built before 1960 and still operate on original fuse boxes or undersized panels. The city's strict permitting process through the Santa Monica Building Division requires experienced contractors familiar with local codes.",
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
          "Upgrade your Santa Monica home's electrical panel with marine-grade enclosures and corrosion-resistant hardware designed to withstand decades of salt air exposure.",
      },
      {
        title: 'Multi-Unit EV Charger Solutions',
        subtitle:
          'We specialize in EV charger installations for Santa Monica condos, apartments, and HOA-managed properties — including parking structure conduit runs and shared meter configurations.',
      },
      {
        title: 'Historic Home Rewiring',
        subtitle:
          "Safely modernize the electrical systems in Santa Monica's cherished Craftsman bungalows and pre-war homes without compromising their architectural character.",
      },
      {
        title: 'Commercial Tenant Improvements',
        subtitle:
          "Restaurant, retail, and office electrical build-outs along Montana Avenue, Main Street, and the Promenade — designed to meet Santa Monica's strict energy codes.",
      },
    ],
  };

  const details = {
    city: 'Santa Monica',
    pharagraphs: [
      {
        text: "Santa Monica's diverse housing stock spans over a century of California architecture. North of Montana Avenue, you'll find stately single-family homes — many original Craftsman bungalows that have been lovingly maintained but still run on electrical systems from the 1920s and 1930s. South of Wilshire, multi-unit apartment buildings from the 1950s and 1960s present their own challenges, with shared electrical infrastructure that often needs modernization to meet current tenant demands. Our electricians understand these distinct property types and tailor solutions accordingly.",
      },
      {
        text: "The city's aggressive sustainability goals have made Santa Monica a hotbed for EV adoption and solar integration. We work closely with solar installers to ensure panel upgrades and main service entrance equipment are properly sized to accommodate both solar production and EV charging loads. Many Santa Monica homeowners are installing 320-amp or 400-amp services to future-proof their homes for full electrification — induction cooking, heat pump HVAC, heat pump water heaters, and multiple EV chargers.",
      },
      {
        text: "Coastal moisture is the silent enemy of Santa Monica's electrical systems. The persistent marine layer and salt-laden air accelerate corrosion on outdoor panels, weatherheads, meter bases, and exterior fixtures. We specify marine-grade hardware, stainless steel fasteners, and NEMA 3R-rated enclosures for all outdoor electrical installations in Santa Monica. This attention to material selection ensures your investment lasts decades, not just years.",
      },
      {
        text: "Santa Monica's commercial corridors along Main Street, Montana Avenue, and the Third Street Promenade are home to hundreds of boutiques, restaurants, and offices that rely on dependable electrical systems. We provide commercial electrical services including tenant improvement wiring, code-compliance upgrades, sign and display lighting, and emergency lighting systems. Our team works around your business hours to minimize disruption.",
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

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Santa Monica' />
      <LocationAllServices city='Santa Monica' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default SantaMonicaPage;
