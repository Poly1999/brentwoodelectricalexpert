import { Clock, Shield, Star, Users, Zap } from 'lucide-react';
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
    title: 'Bel Air Electrician — Elite Electrical Services for Luxury Estates',
    subtitle:
      "Brentwood Electrical Experts provides elite electrical services for Bel Air's ultra-luxury homes and gated compounds. From 400-amp to 600-amp estate service upgrades, enterprise-grade smart home automation wiring, and 4K surveillance systems to landscape lighting and complete electrical remodeling, our licensed C-10 electricians deliver discreet, high-precision craftsmanship across Bel Air.",
    button: 'Request Estate Consultation',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Estate Manager & Security Coordination',
      '400A–600A Multi-Panel Systems',
    ],
    icons: [<Star />, <Users />, <Zap />],
  };

  const about = {
    title: 'About Bel Air',
    city: 'Bel Air',
    heading: 'Tailored Electrical Engineering for Bel Air Estates',
    challengeTitle: 'Powering Extraordinary Scale and Sophistication',
    subtitle:
      'Bel Air is one of the most exclusive residential enclaves in the world. Nestled in the foothills of the Santa Monica Mountains, this gated community of roughly 8,000 residents is known for sprawling compounds, celebrity estates, and some of the highest property values in the United States.',
    features: [
      { item: 'Ultra-luxury multi-acre compounds and hillside estates' },
      { item: 'Contemporary architectural mega-homes' },
      { item: 'Classic Mediterranean and Spanish Revival villas' },
      { item: 'Gated properties with dedicated staff and guest quarters' },
    ],
    challenge:
      'Bel Air estates demand electrical systems of extraordinary scale, redundancy, and technical complexity. Properties routinely require 400-amp or 600-amp main services with multiple distribution subpanels to safely support extensive guest houses, professional catering kitchens, multi-zone HVAC equipment, elevator machinery, wine cellars, and elaborate security infrastructure. The gated nature of many properties requires seamless white-glove coordination with estate managers, private security teams, and interior design firms.',
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
          "400-amp to 600-amp main services, complex multi-panel distribution, and intelligent load management engineered specifically for Bel Air's largest and most sophisticated residential compounds.",
      },
      {
        title: 'Smart Home & Automation Wiring',
        subtitle:
          'Enterprise-grade home automation infrastructure designed and installed for seamless whole-estate control, featuring Crestron, Control4, and Lutron HomeWorks QSX systems.',
      },
      {
        title: 'Security & Surveillance Systems',
        subtitle:
          '4K IP camera networks, automated estate gates, architectural perimeter lighting, and hardwired alarm systems integrated directly with your private security team.',
      },
      {
        title: 'Home Theater & AV Electrical',
        subtitle:
          'Dedicated clean-power circuits, isolated grounds, low-voltage prewire, and equipment room rack infrastructure for world-class private cinema and multi-room audio experiences.',
      },
    ],
  };

  const details = {
    city: 'Bel Air',
    heading: 'Your Trusted Estate Electrician in Bel Air, California',
    pharagraphs: [
      {
        text: 'Bel Air estates operate on an entirely different electrical scale than standard residential properties. A single compound frequently includes a primary manor, guest house, pool pavilion, fitness center, screening room, climate-controlled wine cellar, and staff quarters—each demanding dedicated subpanels and specialized circuits. We routinely engineer and install 400-amp and 600-amp electrical services with extensive sub-distribution networks to safely power these complex properties. Our comprehensive load calculations account for every heavy-draw asset, from 20-ton multi-zone HVAC chillers and hydraulic elevators to infinity pool variable-speed pumps.',
      },
      {
        text: 'Smart home integration in Bel Air goes far beyond standard connected switches. We install robust, enterprise-grade automation infrastructure—dedicated low-voltage network closets with rack-mounted equipment, Crestron and Control4 core processors, Lutron HomeWorks lighting control, motorized window treatments, distributed audio-video systems, and integrated security. Every conduit run, junction box, and low-voltage bundle is meticulously mapped and installed to deliver bulletproof performance and clean future expandability.',
      },
      {
        text: "Bel Air's hillside topography means many estates rely on long underground primary utility feeds from local transformers. We coordinate directly with utility engineering departments for new and upgraded service drops, manage underground trenching and schedule-80 conduit installation, and specify heavy-duty equipment rated for hillside temperature fluctuations.",
      },
      {
        text: "Absolute privacy and uncompromising security are paramount for Bel Air homeowners. We install comprehensive surveillance networks—4K IP cameras with starlight night vision, automated license plate recognition (ALPR) at security gates, and integration with 24/7 monitoring services—alongside hardwired intrusion alarms. All security electrical work is coordinated closely with the client's security consultants for seamless integration.",
      },
    ],
    features: [
      { item: 'Bel-Air Country Club' },
      { item: 'Hotel Bel-Air' },
      { item: 'Stone Canyon Reservoir' },
      { item: 'Bel Air East Gate' },
      { item: 'UCLA (Nearby)' },
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Bel Air Electrician | Luxury Estate Electrical Services | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Bel Air luxury estates. 400A–600A services, Crestron/Control4 smart home automation, 4K security & AV wiring. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Bel Air' />
      <LocationAllServices city='Bel Air' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default BelAirPage;
