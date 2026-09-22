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

function PacificPalisadesPage() {
  const hero = {
    area: 'Pacific Palisades, CA · 90272',
    title: 'Pacific Palisades Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts serves Pacific Palisades homeowners with premium electrical services. From luxury home lighting design to panel upgrades and EV charger installation, our licensed electricians provide meticulous, code-compliant work for this prestigious coastal community.',
  };

  const about = {
    title: 'About Pacific Palisades',
    city: 'Pacific Palisades',
    subtitle:
      'Pacific Palisades is a prestigious coastal neighborhood between Santa Monica and Malibu, home to approximately 27,000 residents. Known for its canyon trails, ocean views, and family-oriented community, the Palisades blends natural beauty with refined residential living.',
    features: [
      { item: 'Coastal contemporary estates' },
      { item: 'Mediterranean Revival villas' },
      { item: 'Mid-century canyon homes' },
      { item: 'Modern architectural builds' },
    ],
    challenge:
      'Pacific Palisades properties face a unique combination of hillside construction challenges, wildfire risk, and coastal exposure. Many homes in Temescal Canyon, the Riviera, and the Highlands have long driveway runs requiring extensive underground conduit. The 2025 Palisades Fire destroyed or damaged hundreds of homes, creating massive demand for complete electrical rebuilds from the ground up.',
    quote: [
      {
        text: "In the wake of the 2025 Palisades Fire, our team has been on the front lines helping homeowners rebuild. We understand the fire rebuild permitting process, FEMA documentation requirements, and insurance coordination — and we're committed to helping our Palisades neighbors restore their homes.",
        subtext: '— Brentwood Electrical Experts, serving Pacific Palisades',
      },
    ],
  };

  const popular = {
    city: 'Pacific Palisades',
    cards: [
      {
        title: 'Fire Rebuild Electrical',
        subtitle:
          'Complete electrical system installation for Pacific Palisades homes being rebuilt after the 2025 fire — from service entrance to final fixture, fully permitted and inspected.',
      },
      {
        title: 'Whole-Home Generator Systems',
        subtitle:
          'Protect your Palisades family from PSPS shutoffs with a Generac or Kohler standby generator that automatically restores power in seconds.',
      },
      {
        title: 'Luxury Lighting Control',
        subtitle:
          "Lutron RadioRA 3, Ketra tunable lighting, and custom whole-home lighting design for Pacific Palisades' finest residences.",
      },
      {
        title: 'Canyon Driveway & Landscape Lighting',
        subtitle:
          'Professional landscape lighting design and installation for Pacific Palisades canyon properties — safety, security, and stunning curb appeal.',
      },
    ],
  };

  const details = {
    city: 'Pacific Palisades',
    pharagraphs: [
      {
        text: "The 2025 Palisades Fire forever changed this beloved community. Hundreds of families lost their homes, and many more suffered significant damage. As a West LA-based electrical contractor, we've been deeply involved in the rebuilding effort — performing complete electrical system installations for new construction, repairing fire-damaged panels and wiring, and helping homeowners navigate the complex permitting process for fire-zone rebuilds. If your Pacific Palisades home was affected, we're here to help you rebuild safely and efficiently.",
      },
      {
        text: "For Pacific Palisades homes that were spared, fire preparedness has taken on renewed urgency. We install hardwired whole-home generators with automatic transfer switches, ensuring your family has power during PSPS shutoffs and grid failures. We also install ember-resistant electrical enclosures, underground service entrance cables, and fire-rated junction boxes that meet the latest wildland-urban interface (WUI) building codes. These aren't optional upgrades — they're essential protections for any home in a fire-prone area.",
      },
      {
        text: 'The Palisades Riviera and Castellammare neighborhoods feature some of the most architecturally significant homes on the Westside. These properties demand electrical systems that match their caliber — whole-home lighting control systems by Lutron and Ketra, integrated audio-visual wiring, motorized shade controls, and dedicated circuits for wine cellars, home theaters, and professional-grade kitchens. Our team has the expertise to design and install these sophisticated systems with meticulous attention to detail.',
      },
      {
        text: "Canyon living in Pacific Palisades — Temescal, Santa Ynez, and Los Liones — presents unique electrical challenges. Long, winding driveways require durable landscape lighting for safety and aesthetics. Remote locations sometimes mean longer utility runs and the need for on-site generators during construction. We've mastered these canyon-specific challenges and deliver reliable electrical solutions for even the most remote Palisades properties.",
      },
    ],
    features: [
      { item: 'Palisades Village' },
      { item: 'Will Rogers State Beach' },
      { item: 'Temescal Gateway Park' },
      { item: 'Getty Villa' },
      { item: 'Self-Realization Fellowship Lake Shrine' },
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
    city: 'Pacific Palisades',
    features: [
      {
        question:
          'Can you help rebuild the electrical system for a fire-damaged Pacific Palisades home?',
        answer:
          'Yes — we are actively helping Pacific Palisades homeowners rebuild after the 2025 fire. We perform complete electrical system installations for new construction on fire-damaged lots, including new service entrance, panel, and whole-home wiring. We coordinate with the City of LA fire-rebuild permitting process and work alongside your general contractor.',
      },
      {
        question:
          'What fire-hardening electrical upgrades do you recommend for Pacific Palisades homes?',
        answer:
          'We recommend underground service entrance cables (instead of overhead), ember-resistant panel enclosures, whole-home surge protection, hardwired backup generators, and fire-rated junction boxes. These upgrades align with current WUI (wildland-urban interface) building codes and provide meaningful protection.',
      },
      {
        question:
          'Do you install generators for Pacific Palisades homes affected by PSPS shutoffs?',
        answer:
          'Yes — PSPS events have become increasingly common in Pacific Palisades, especially in canyon and hillside areas. We install Generac and Kohler whole-home generators with automatic transfer switches that restore power within seconds of an outage, keeping your lights, refrigerator, medical equipment, and security systems running.',
      },
      {
        question:
          'Can you install landscape lighting along a long Pacific Palisades driveway?',
        answer:
          'Absolutely. Long driveways are a hallmark of Palisades canyon and hillside homes. We install low-voltage LED pathway lighting, bollard lights, and tree uplighting along driveways for both safety and curb appeal. All fixtures are rated for outdoor use and connected to photocells or smart timers for automatic operation.',
      },
      {
        question:
          'How does the Pacific Palisades rebuild permitting process work?',
        answer:
          "Fire-zone rebuilds in Pacific Palisades go through the City of LA's expedited fire-rebuild permitting track. Electrical permits are included in the overall building permit. We prepare all electrical plans, load calculations, and documentation required for permit submission and coordinate directly with LADBS inspectors.",
      },
      {
        question:
          'Do you install Lutron whole-home lighting systems in Pacific Palisades estates?',
        answer:
          'Yes — we are experienced Lutron and Ketra lighting control installers. We design and install RadioRA 3, Caseta, and HomeWorks QSX systems for Pacific Palisades luxury homes, providing whole-home dimming, automated scenes, and integration with smart home platforms.',
      },
    ],
  };

  const areas = {
    city: 'Pacific Palisades',
    features: [
      { item: 'Brentwood', slug: 'brentwood' },
      { item: 'Santa Monica', slug: 'santa-monica' },
      { item: 'Malibu', slug: 'malibu' },
      { item: 'Bel Air', slug: 'bel-air' },
      { item: 'Topanga', slug: 'topanga' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Pacific Palisades' />
      <LocationAllServices city='Pacific Palisades' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default PacificPalisadesPage;
