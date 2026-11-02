import { ClipboardCheck, Clock, Shield, Star, Sun, Zap } from 'lucide-react';
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

function SimiValleyPage() {
  const hero = {
    area: 'Simi Valley, CA · 93063, 93065',
    title:
      'Simi Valley Electrician — Licensed & Insured Residential & Commercial Services',
    subtitle:
      'Brentwood Electrical Experts extends our professional electrical services to Simi Valley and the surrounding Ventura County communities. From 200-amp tract home panel upgrades and residential solar battery storage integration to Level 2 EV charger installations and family home electrical modernizations, our licensed C-10 electricians deliver fast, reliable, and code-compliant work you can trust.',
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Ventura County & City Permitting Experts',
      'Solar & Battery Storage Specialists',
    ],
    icons: [<Star />, <ClipboardCheck />, <Sun />],
  };

  const about = {
    title: 'About Simi Valley',
    city: 'Simi Valley',
    heading: 'Electrical Services Tailored to Simi Valley Neighborhoods',
    challengeTitle: 'Modernizing Legacy Tract Homes for Solar and EV Demands',
    subtitle:
      'Simi Valley is a thriving, family-oriented suburban city of approximately 127,000 residents situated in Ventura County, globally recognized for its safe residential neighborhoods, excellent local schools, and cultural landmarks like the Ronald Reagan Presidential Library.',
    features: [
      { item: 'Classic suburban tract homes and vintage neighborhoods' },
      {
        item: 'Master-planned community houses (Rancho Simi, Big Sky, Sycamore Canyon)',
      },
      { item: 'Newer architectural custom and production construction' },
      { item: 'Commercial retail, office, and light industrial spaces' },
    ],
    challenge:
      'Simi Valley’s primarily residential, suburban character means the vast majority of local electrical work involves upgrading legacy panels in older tract homes to handle high-demand modern appliances, Level 2 EV chargers, and the rapidly growing trend toward residential solar photovoltaic systems paired with battery energy storage.',
    quote: [
      {
        text: 'We extend our Westside quality and reliability to Simi Valley — professional electrical services for a community that values family, safety, and home investment.',
        subtext: '— Brentwood Electrical Experts, serving Simi Valley',
      },
    ],
  };

  const popular = {
    city: 'Simi Valley',
    cards: [
      {
        title: 'Tract Home Panel Upgrades',
        subtitle:
          "200-amp main service panel upgrades for Simi Valley's established neighborhoods—safely powering Level 2 EV chargers, central HVAC systems, and new solar battery setups.",
      },
      {
        title: 'Solar & Battery Integration',
        subtitle:
          'Electrical panel capacity sizing, whole-home battery backup installation (Tesla Powerwall, Enphase), and intelligent load management for Simi Valley homes going solar.',
      },
      {
        title: 'Family Home Electrical Upgrades',
        subtitle:
          'Dedicated kitchen appliance circuits, architectural outdoor lighting, whole-home surge protection, and practical safety upgrades for Simi Valley families.',
      },
    ],
  };

  const details = {
    city: 'Simi Valley',
    heading: 'Your Trusted Local Electrician in Simi Valley, California',
    pharagraphs: [
      {
        text: 'Simi Valley’s diverse master-planned neighborhoods—stretching from the older, established Rancho Simi tracts to contemporary hillside communities like Big Sky and Sycamore Canyon—each exhibit distinct electrical characteristics and infrastructure needs. Homes constructed during the 1960s and 1970s frequently require main service panel replacements and branch circuit additions to safely support modern household demands, whereas newer construction properties are ideally suited for rapid EV charger installations and smart home automation upgrades without major structural rewiring.',
      },
      {
        text: "Furthermore, residential solar energy adoption is exceptionally strong throughout Simi Valley, where abundant Southern California sunshine and expansive roof square footage make rooftop solar highly efficient. We partner seamlessly alongside regional solar contractors to ensure your electrical service panel is correctly sized for peak solar production, home battery storage systems are safely interconnected, and your property's electrical grid easily accommodates the combined load of solar generation, vehicle charging, and heavy household appliances.",
      },
      {
        text: 'Simi Valley families place a high premium on home safety and property improvement. Consequently, we experience robust, ongoing demand for essential electrical upgrades—including obsolete panel replacements, kitchen remodeling circuits, decorative and security outdoor lighting, whole-home surge protection devices, and ceiling fan wiring. We execute these foundational services with the exact same level of professional craftsmanship and rigorous quality control that we bring to our most complex commercial projects.',
      },
    ],
    features: [
      { item: 'Ronald Reagan Presidential Library' },
      { item: 'Simi Valley Town Center' },
      { item: 'Santa Susana Pass' },
      { item: 'Rancho Simi' },
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
    city: 'Simi Valley',
    features: [
      {
        question: 'Do you travel to Simi Valley for electrical work?',
        answer:
          'Yes — we serve Simi Valley as part of our extended service area. We provide the same quality, professionalism, and competitive pricing to Simi Valley customers as we do throughout the Westside.',
      },
      {
        question: 'Can you support solar panel electrical in Simi Valley?',
        answer:
          "Yes — we upgrade panels, install battery storage systems, and ensure your home's electrical infrastructure is properly sized for solar plus EV charging plus household demands.",
      },
      {
        question: 'Do older Simi Valley homes need panel upgrades?',
        answer:
          'Many do — 1960s-1970s tract homes typically have 100-amp or 150-amp panels that benefit from upgrading to 200 amps, especially when adding EV chargers, HVAC upgrades, or solar battery systems.',
      },
    ],
  };

  const areas = {
    city: 'Simi Valley',
    features: [
      { item: 'Moorpark', slug: 'moorpark' },
      { item: 'Thousand Oaks', slug: 'thousand-oaks' },
      { item: 'Chatsworth', slug: 'chatsworth' },
      { item: 'Granada Hills', slug: 'granada-hills' },
      { item: 'Porter Ranch', slug: 'porter-ranch' },
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
        Simi Valley Electrician | Solar Panel Integration & EV Chargers | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Simi Valley (93063, 93065) & Ventura County. 200A tract home panel upgrades, solar battery storage & EV chargers. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Simi Valley' />
      <LocationAllServices city='Simi Valley' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default SimiValleyPage;
