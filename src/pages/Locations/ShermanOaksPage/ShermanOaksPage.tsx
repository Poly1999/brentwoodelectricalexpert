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

function ShermanOaksPage() {
  const hero = {
    area: 'Sherman Oaks, CA · 91403, 91423',
    title: 'Sherman Oaks Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts provides reliable electrical services in Sherman Oaks. From panel upgrades and EV charger installations to electrical troubleshooting and remodeling, our licensed electricians deliver quality work across the San Fernando Valley.',
  };

  const about = {
    title: 'About Sherman Oaks',
    city: 'Sherman Oaks',
    subtitle:
      'Sherman Oaks is a thriving San Fernando Valley neighborhood known for its excellent schools, diverse dining scene along Ventura Blvd, and hillside homes with stunning Valley views.',
    features: [
      { item: 'Valley ranch homes' },
      { item: 'Mid-century tract houses' },
      { item: 'Modern hillside builds' },
      { item: 'Commercial on Ventura Blvd' },
    ],
    challenge:
      "Sherman Oaks experiences extreme summer heat, making reliable HVAC electrical critical. Many 1950s-1960s homes have undersized panels. Ventura Blvd's commercial corridor drives demand for restaurant and retail electrical services.",
    quote: [
      {
        text: 'We serve both sides of Sherman Oaks — the residential neighborhoods where families need panel upgrades and EV chargers, and the Ventura Blvd commercial corridor where businesses need reliable electrical systems.',
        subtext: '— Brentwood Electrical Experts, serving Sherman Oaks',
      },
    ],
  };

  const popular = {
    city: 'Sherman Oaks',
    cards: [
      {
        title: 'HVAC-Ready Panel Upgrades',
        subtitle:
          '200-amp upgrades for Sherman Oaks homes — ensure your electrical system can handle heavy AC use during Valley summers plus modern demands.',
      },
      {
        title: 'Ventura Blvd Commercial Electrical',
        subtitle:
          "Restaurant, retail, and office electrical for Sherman Oaks' busiest commercial corridor.",
      },
      {
        title: 'ADU Electrical Installation',
        subtitle:
          'Complete electrical for Sherman Oaks backyard ADUs — sub-panels, wiring, and main panel upgrades.',
      },
      {
        title: 'Hillside Smart Home Systems',
        subtitle:
          "Whole-home automation, lighting control, and AV wiring for Sherman Oaks' architecturally significant hillside residences.",
      },
    ],
  };

  const details = {
    city: 'Sherman Oaks',
    pharagraphs: [
      {
        text: 'Sherman Oaks summer temperatures regularly exceed 100°F, making reliable HVAC operation a necessity. Many older Sherman Oaks homes have 100-amp panels that strain under the combined load of central air conditioning, appliances, and modern electronics. We upgrade these panels to 200 amps, ensuring your HVAC system has the electrical capacity it needs to keep your family cool — even during the hottest Valley heat waves.',
      },
      {
        text: "Ventura Blvd is Sherman Oaks' commercial spine, lined with hundreds of restaurants, shops, and offices. We provide commercial electrical for these businesses — kitchen equipment circuits, storefront lighting, sign electrical, and tenant improvement wiring. Our after-hours availability means we can work around your business schedule.",
      },
      {
        text: 'The hillside neighborhoods south of Ventura Blvd — along Mulholland Drive and Beverly Glen — feature newer, architecturally significant homes with sophisticated electrical needs. Smart home systems, home theaters, wine cellars, and elaborate landscape lighting are common in these properties. We deliver the high-end residential electrical services these homes demand.',
      },
      {
        text: "Sherman Oaks' family-oriented neighborhoods north of Ventura Blvd are seeing a wave of home improvements — kitchen remodels, ADU construction, and EV charger installations. We provide the electrical backbone for these projects, helping Sherman Oaks families modernize their homes safely and affordably.",
      },
    ],
    features: [
      { item: 'Ventura Blvd' },
      { item: 'Sherman Oaks Galleria' },
      { item: 'Westfield Fashion Square' },
      { item: 'Mulholland Drive' },
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
    city: 'Sherman Oaks',
    features: [
      {
        question: 'Why do Sherman Oaks homes need panel upgrades?',
        answer:
          "Summer heat drives heavy AC use, and most 1950s-1960s Sherman Oaks homes have 100-amp panels that can't safely handle modern HVAC loads plus EV chargers, home offices, and appliances. A 200-amp upgrade solves this.",
      },
      {
        question: 'Do you work on Ventura Blvd commercial properties?',
        answer:
          'Yes — we provide commercial electrical for restaurants, retail, and offices along Ventura Blvd, including tenant improvements, kitchen circuits, lighting, and signage.',
      },
      {
        question: 'Can you install an EV charger at my Sherman Oaks home?',
        answer:
          'Absolutely — we install Level 2 EV chargers for Sherman Oaks homeowners, including panel upgrades when needed. Most installations are completed in half a day.',
      },
      {
        question: 'Do you build ADU electrical in Sherman Oaks?',
        answer:
          'Yes — ADU construction is booming in Sherman Oaks. We install complete electrical systems for backyard ADUs, including sub-panels, circuits, and main panel upgrades when required.',
      },
    ],
  };

  const areas = {
    city: 'Sherman Oaks',
    features: [
      { item: 'Encino', slug: 'encino' },
      { item: 'Studio City', slug: 'studio-city' },
      { item: 'Van Nuys', slug: 'van-nuys' },
      { item: 'Beverly Glen', slug: 'beverly-glen' },
      { item: 'Tarzana', slug: 'tarzana' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Sherman Oaks' />
      <LocationAllServices city='Sherman Oaks' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default ShermanOaksPage;
