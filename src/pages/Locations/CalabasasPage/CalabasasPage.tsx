import { Clock, Flame, Home, Shield, Star, Zap } from 'lucide-react';
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

function CalabasasPage() {
  const hero = {
    area: 'Calabasas, CA · 91302',
    title:
      'Calabasas Electrician — Licensed & Insured Luxury Estate Electrical Services',
    subtitle:
      'Brentwood Electrical Experts extends premium electrical services to Calabasas homeowners and businesses. From large-scale gated estate 400-amp panel upgrades and wildland-urban interface (WUI) fire-hardened systems to smart home automation, luxury lighting design, and expansive outdoor pool and kitchen power grids, our licensed C-10 electricians deliver meticulous craftsmanship.',
    button: 'Request Calabasas Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Gated Community & Estate Specialists',
      'WUI Fire-Hardening & Generators',
    ],
    icons: [<Star />, <Home />, <Flame />],
  };

  const about = {
    title: 'About Calabasas',
    city: 'Calabasas',
    heading: 'Electrical Services Tailored to Calabasas Luxury Estates',
    challengeTitle: 'Powering Large Estates and Ensuring Wildfire Resilience',
    subtitle:
      'Calabasas is an affluent, prestigious city located in the western San Fernando Valley, globally celebrated for its secure gated enclaves, high-profile celebrity residents, and stunning hillside setting nestled directly against the foothills of the Santa Monica Mountains.',
    features: [
      {
        item: 'Exclusive gated community luxury estates (The Oaks, Mountain View Estates, Calabasas Hills)',
      },
      {
        item: 'Grand Mediterranean Revival villas and custom architectural compounds',
      },
      {
        item: 'Modern luxury hillside builds and expansive suburban properties',
      },
    ],
    challenge:
      "Calabasas's extensive estate homes require robust, highly engineered electrical distribution systems capable of handling massive power loads. Furthermore, the community's vulnerable location at the wildland-urban interface of the Santa Monica Mountains foothills makes fire-hardened electrical infrastructure an absolute necessity to protect against regional wildfire risks.",
    quote: [
      {
        text: 'We bring Westside quality and expertise to Calabasas — large-scale residential electrical, fire-hardened systems, and the attention to detail that Calabasas homeowners expect.',
        subtext: '— Brentwood Electrical Experts, serving Calabasas',
      },
    ],
  };

  const popular = {
    city: 'Calabasas',
    cards: [
      {
        title: 'Estate Electrical Systems',
        subtitle:
          'Large-scale residential electrical design for Calabasas gated communities—including 200A to 400A main services, multi-panel sub-distribution, and complex whole-home infrastructure.',
      },
      {
        title: 'Fire-Hardened Electrical',
        subtitle:
          'Underground utility service conversions, ember-resistant NEMA enclosures, and automatic standby generators designed for high-risk WUI Calabasas homes.',
      },
      {
        title: 'Outdoor Living Electrical',
        subtitle:
          "Heavy-duty pool and spa equipment feeds, outdoor culinary kitchens, custom fire pits, sport court lighting, and landscape illumination for Calabasas's indoor-outdoor lifestyle.",
      },
    ],
  };

  const details = {
    city: 'Calabasas',
    heading: 'Your Trusted Local Electrician in Calabasas, California',
    pharagraphs: [
      {
        text: 'Calabasas’s exclusive gated enclaves—including The Oaks, Calabasas Hills, and Mountain View Estates—showcase magnificent luxury residences with exceptionally substantial electrical demands. High-capacity 200-amp to 400-amp main electrical services, complex multi-panel sub-distribution networks, heavy pool and spa equipment, whole-home automation platforms, and elaborate architectural landscape lighting are standard expectations in this elite real estate market. We expertly design and install electrical systems that match the grand scale and meticulous quality of Calabasas’s finest properties.',
      },
      {
        text: 'Wildfire preparedness is a critical, ongoing priority in Calabasas, which sits directly along the high-risk wildland-urban interface of the Santa Monica Mountains. Past regional fire events underscore the vital importance of proactive property hardening. We specialize in installing comprehensive fire-hardened electrical systems—including underground utility service feeds, ember-resistant exterior enclosures, whole-home standby generators, and hardwired smoke and heat detection arrays—that provide meaningful structural protection and fully satisfy contemporary WUI building codes.',
      },
      {
        text: 'Additionally, Calabasas homeowners embrace an expansive indoor-outdoor California lifestyle featuring resort-style swimming pools, professional outdoor kitchens, custom fire pits, illuminated sport courts, and extensive landscape lighting. We install heavy-duty outdoor electrical systems featuring weather-rated panels, rigorous GFCI and AFCI protection, and commercial-grade outdoor fixtures engineered to endure the hot, dry Calabasas climate year-round.',
      },
    ],
    features: [
      { item: 'The Commons at Calabasas' },
      { item: 'Malibu Canyon' },
      { item: 'Calabasas Lake' },
      { item: 'The Oaks Gated Community' },
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
    city: 'Calabasas',
    features: [
      {
        question: 'Do you serve all gated communities in Calabasas?',
        answer:
          "Yes — we work in The Oaks, Calabasas Hills, Mountain View Estates, and all Calabasas gated communities. We're familiar with gate access procedures and HOA requirements.",
      },
      {
        question: 'Do you install fire-hardened electrical in Calabasas?',
        answer:
          'Yes — we install underground services, ember-resistant panels, generators, and fire-rated wiring for Calabasas homes in the wildland-urban interface zone.',
      },
      {
        question:
          'Can you install pool and outdoor kitchen electrical in Calabasas?',
        answer:
          'Absolutely — we install pool sub-panels, outdoor kitchen circuits, fire pit wiring, landscape lighting, and all outdoor electrical for Calabasas properties.',
      },
    ],
  };

  const areas = {
    city: 'Calabasas',
    features: [
      { item: 'Woodland Hills', slug: 'woodland-hills' },
      { item: 'Hidden Hills', slug: 'hidden-hills' },
      { item: 'Agoura Hills', slug: 'agoura-hills' },
      { item: 'Malibu', slug: 'malibu' },
      { item: 'Westlake Village', slug: 'westlake-village' },
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
        Calabasas Electrician | Estate Panels & Fire-Hardened Systems | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Calabasas (91302) gated communities. Gated estate 400A electrical, WUI fire-hardening & outdoor pool power grids. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Calabasas' />
      <LocationAllServices city='Calabasas' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default CalabasasPage;
