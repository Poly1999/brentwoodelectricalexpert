import { Clock, Shield, Star, Zap } from 'lucide-react';
import Footer from '../../../components/Footer/Footer';
import LocationAbout from '../../../components/location-detail-page/LocationAbout/LocationAbout';
import LocationAllServices from '../../../components/location-detail-page/LocationAllServices/LocationAllServices';
import LocationDetails from '../../../components/location-detail-page/LocationDetails/LocationDetails';
import LocationFAQ from '../../../components/location-detail-page/LocationFAQ/LocationFAQ';
import LocationPopularServices from '../../../components/location-detail-page/LocationPopularServices/LocationPopularServices';
import LocationWhyChooseUs from '../../../components/location-detail-page/LocationWhyChooseUs/LocationWhyChooseUs';
import NearbyAreas from '../../../components/location-detail-page/NearbyAreas/NearbyAreas';
import LocationHero from '../../../components/locations-page/LocationHero';
import StatsSection from '../../../components/Shared/StatsSection/StatsSection';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';

function BelAirPage() {
  const hero = {
    area: 'Bel Air, CA · 90077',
    title: 'Bel Air Electrician — Licensed & Insured',
    subtitle:
      "Brentwood Electrical Experts provides elite electrical services for Bel Air's luxury homes and estates. Our licensed electricians specialize in panel upgrades, smart home systems, landscape lighting, security camera installation, and complete electrical remodeling for high-end properties.",
  };

  const about = {
    title: 'About Bel Air',
    city: 'Bel Air',
    subtitle:
      'Bel Air is one of the most exclusive residential enclaves in the world. Nestled in the foothills of the Santa Monica Mountains, this gated community of roughly 8,000 residents is known for sprawling estates, celebrity residents, and some of the highest property values in the United States.',
    features: [
      { item: 'Ultra-luxury estates' },
      { item: 'Contemporary mega-homes' },
      { item: 'Classic Mediterranean villas' },
      { item: 'Gated compound properties' },
    ],
    challenge:
      'Bel Air estates demand electrical systems of extraordinary scale and sophistication. Properties routinely require 400-amp or even 600-amp main services to power guest houses, pool systems, elevator equipment, professional kitchens, extensive HVAC, and elaborate security infrastructure. The gated nature of many properties requires coordination with estate managers and security teams.',
    quote: [
      {
        text: "We understand the discretion, security protocols, and exacting standards required when working on Bel Air's ultra-luxury estates. Our team coordinates with estate managers, security personnel, and design teams to deliver flawless electrical work without disrupting the household.",
        subtext: '— Brentwood Electrical Experts, serving Bel Air',
      },
    ],
  };

  const popular = {
    city: 'Bel Air',
    cards: [
      {
        title: 'Estate-Scale Electrical Services',
        subtitle:
          "400-amp to 600-amp main services, multi-panel distribution, and complex load management for Bel Air's largest and most sophisticated residential properties.",
      },
      {
        title: 'Smart Home & Automation Wiring',
        subtitle:
          'Crestron, Control4, Lutron HomeWorks — enterprise-grade home automation infrastructure designed and installed for seamless whole-estate control.',
      },
      {
        title: 'Security & Surveillance Systems',
        subtitle:
          '4K IP camera networks, gate automation, perimeter lighting, and integrated alarm systems — hardwired for maximum reliability and coordinated with your security team.',
      },
      {
        title: 'Home Theater & AV Electrical',
        subtitle:
          'Dedicated power circuits, isolated grounds, low-voltage prewire, and equipment room infrastructure for world-class private cinema experiences.',
      },
    ],
  };

  const details = {
    city: 'Bel Air',
    pharagraphs: [
      {
        text: "Bel Air estates operate on a different electrical scale than typical residential properties. A single property might include a main residence, guest house, pool house, gym, home theater, wine cellar, and staff quarters — each requiring dedicated electrical sub-panels and circuits. We routinely design and install 400-amp and 600-amp electrical services with multiple distribution panels to safely power these complex estates. Our load calculations account for every system, from the 20-ton HVAC units to the hydraulic elevator and the infinity pool's variable-speed pumps.",
      },
      {
        text: 'Smart home technology in Bel Air goes far beyond a few connected switches. We install enterprise-grade home automation infrastructure — dedicated network closets with rack-mounted equipment, Crestron and Control4 integration, Lutron HomeWorks QSX lighting control, motorized window treatments, distributed audio-video systems, and integrated security with IP cameras, access control, and intercoms. Every wire, conduit run, and junction box is meticulously planned and installed to deliver flawless performance and easy future expandability.',
      },
      {
        text: "The Bel Air community's hillside location means many properties rely on private roads, long service runs from the utility transformer, and underground primary feeds. We coordinate with DWP for new and upgraded utility connections, manage trenching and conduit installation for underground services, and specify equipment rated for the temperature extremes and moisture conditions found at higher elevations. Our familiarity with Bel Air's infrastructure ensures efficient project execution.",
      },
      {
        text: "Privacy and security are paramount for Bel Air homeowners. We install comprehensive security camera systems — 4K IP cameras with night vision, license plate recognition at gates, and integration with monitoring services — along with gate automation, perimeter lighting, and hardwired alarm systems. All security electrical work is coordinated with the homeowner's security consultant to ensure seamless integration with existing systems.",
      },
    ],
    features: [
      { item: 'Bel-Air Country Club' },
      { item: 'Hotel Bel-Air' },
      { item: 'Stone Canyon Reservoir' },
      { item: 'Bel Air East Gate' },
      { item: 'UCLA nearby' },
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
    city: 'Bel Air',
    features: [
      {
        question:
          'Can you install a 400-amp or 600-amp service for a Bel Air estate?',
        answer:
          'Yes — large Bel Air estates often require 400-amp or even 600-amp main electrical services. We handle the full scope: DWP coordination, meter equipment, main disconnects, distribution panels, and all sub-panels for guest houses, pools, and accessory structures.',
      },
      {
        question:
          'Do you work with estate managers and design teams in Bel Air?',
        answer:
          'Absolutely. We regularly coordinate with estate managers, architects, interior designers, AV integrators, and security consultants on Bel Air projects. We understand the communication protocols and discretion required when working on high-profile properties.',
      },
      {
        question:
          'Can you install a home theater electrical system in a Bel Air estate?',
        answer:
          'Yes — we wire dedicated home theaters with isolated power circuits, surge protection, low-voltage signal wiring for projectors and screens, acoustic-panel-friendly junction box placement, and motorized equipment lifts. We coordinate with AV integrators to ensure every component has clean, reliable power.',
      },
      {
        question:
          'How do you handle security camera installation for gated Bel Air properties?',
        answer:
          'We install comprehensive IP camera systems including 4K cameras at entry gates with license plate recognition, perimeter cameras, driveway cameras, and interior cameras where desired. All cameras are hardwired with Cat6 cabling for maximum reliability and connected to on-site NVR systems with cloud backup capability.',
      },
      {
        question:
          'Do you install elevator electrical systems in Bel Air homes?',
        answer:
          "Yes. Residential elevators require dedicated electrical circuits, often 40-60 amps on 208V or 240V, depending on the elevator manufacturer. We install the required electrical service, dedicated disconnect, and wiring to the elevator equipment room per the manufacturer's specifications and LADBS requirements.",
      },
      {
        question:
          'Can you install outdoor lighting for a large Bel Air estate?',
        answer:
          'We design and install extensive landscape lighting systems for Bel Air properties — driveway lighting, specimen tree uplighting, garden path lights, pool and water feature illumination, tennis court lighting, and architectural facade lighting. Systems are controlled via Lutron or astronomical timers for fully automated operation.',
      },
    ],
  };

  const areas = {
    city: 'Bel Air',
    features: [
      { item: 'Brentwood', slug: 'brentwood' },
      { item: 'Beverly Hills', slug: 'beverly-hills' },
      { item: 'Beverly Glen', slug: 'beverly-glen' },
      { item: 'Westwood', slug: 'westwood' },
      { item: 'Pacific Palisades', slug: 'pacific-palisades' },
    ],
  };
  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Bel Air' />
      <LocationAllServices city='Bel Air' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default BelAirPage;
