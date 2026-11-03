import {
  ClipboardCheck,
  Clock,
  Landmark,
  Shield,
  Star,
  Zap,
} from 'lucide-react';
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

function PasadenaPage() {
  const hero = {
    area: 'Pasadena, CA · 91101, 91103, 91104, 91105, 91106, 91107',
    title:
      'Pasadena Electrician — Licensed & Insured Historic & Commercial Electrical Services',
    subtitle:
      'Brentwood Electrical Experts provides expert electrical services throughout Pasadena. From historic Craftsman bungalow rewiring and Pasadena Water & Power (PWP) service coordination to Old Town commercial tenant improvements, smart home automation, and modern EV charger installations, our licensed C-10 electricians serve Pasadena with uncompromising quality and care.',
    button: 'Request Pasadena Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Pasadena Water & Power (PWP) Experts',
      'Historic Craftsman & Victorian Specialists',
    ],
    icons: [<Star />, <ClipboardCheck />, <Landmark />],
  };

  const about = {
    title: 'About Pasadena',
    city: 'Pasadena',
    heading:
      'Electrical Services Tailored to Pasadena’s Architectural Heritage',
    challengeTitle:
      'Navigating Historic Preservation Standards and Municipal Utilities',
    subtitle:
      "Pasadena is a culturally rich, historic city of approximately 138,000 residents, globally celebrated for hosting the annual Rose Bowl, world-class research at Caltech, magnificent museums, and some of Southern California's finest early 20th-century Craftsman and Victorian residential architecture. Operating with its own municipal utility department, Pasadena requires specialized local utility coordination.",
    features: [
      {
        item: 'Historic American Craftsman bungalows (Bungalow Heaven Landmark District)',
      },
      { item: 'Victorian and Queen Anne historic residences' },
      { item: 'Spanish Colonial Revival and Mediterranean estates' },
      {
        item: 'Mid-century modern homes and Old Town commercial mixed-use spaces',
      },
    ],
    challenge:
      'Pasadena features an extraordinary inventory of historic residential structures—many designated local landmarks—that require highly sensitive electrical modernization to protect original woodwork, plaster, and period-correct aesthetics. Furthermore, because Pasadena operates its own municipal utility (Pasadena Water and Power) and independent building department, all panel upgrades, service drops, and solar/EV interconnections demand distinct local procedural knowledge.',
    quote: [
      {
        text: 'We bring specialized expertise in historic home electrical to Pasadena — upgrading century-old Craftsman bungalows and Victorian homes with modern safety while preserving their architectural heritage.',
        subtext: '— Brentwood Electrical Experts, preserving Pasadena',
      },
    ],
  };

  const popular = {
    city: 'Pasadena',
    cards: [
      {
        title: 'Historic Home Electrical',
        subtitle:
          'Sensitive, non-invasive electrical upgrades for Pasadena Craftsman bungalows, Victorians, and Spanish Colonial homes—delivering modern safety and capacity without sacrificing historic character.',
      },
      {
        title: 'Pasadena Water & Power Coordination',
        subtitle:
          "Main service upgrades, panel replacements, temporary power drops, and solar/EV interconnection applications coordinated directly with PWP's municipal utility standards.",
      },
      {
        title: 'Smart Home in Historic Homes',
        subtitle:
          "Modern automation platforms, smart lighting controls, and hidden structured data wiring engineered specifically to integrate seamlessly into Pasadena's older architectural styles.",
      },
      {
        title: 'Old Town Commercial Electrical',
        subtitle:
          "Tenant improvement wiring, architectural track lighting, and commercial kitchen circuits for restaurants, retail boutiques, and offices across Pasadena's historic districts.",
      },
    ],
  };

  const details = {
    city: 'Pasadena',
    heading: 'Your Trusted Local Electrician in Pasadena, California',
    pharagraphs: [
      {
        text: "Pasadena stands universally recognized as the historical cradle of the American Craftsman architectural movement. Its protected bungalow neighborhoods—stretching from the renowned Bungalow Heaven Landmark District across to the scenic Arroyo Seco corridor—contain some of the finest early 20th-century residential structures in the United States. Modernizing the electrical infrastructure within these cherished historic homes requires specialized technical skill, patience, and absolute respect for original building materials. We meticulously route new branch wiring through cavities without surface disruption, utilize period-appropriate cover plates and switches when requested, and bring obsolete electrical systems up to rigorous contemporary safety codes while safeguarding your home's historic integrity.",
      },
      {
        text: 'Additionally, Pasadena operates its own municipal utility provider—Pasadena Water and Power (PWP)—meaning that all electrical service connections, meter drops, utility inspections, and local code mandates differ significantly from standard Southern California Edison territories. Our licensed C-10 team possesses deep, day-to-day familiarity with PWP’s distinct administrative protocols for service entrance upgrades, overhead-to-underground conversions, and rapid grid interconnections for solar photovoltaic and EV charger projects.',
      },
      {
        text: "Pasadena's vibrant South Lake Avenue commercial district, Old Pasadena, and the historic Colorado Boulevard corridor host hundreds of destination restaurants, independent retail boutiques, and executive offices that depend on reliable commercial electrical systems. We provide comprehensive commercial electrical services—including custom tenant improvement wiring, specialized retail lighting design, heavy commercial kitchen equipment feeds, and exit sign/emergency egress lighting that complies fully with Pasadena municipal commercial codes.",
      },
      {
        text: "Finally, the intellectual presence of Caltech and surrounding neighborhoods attracts tech-savvy homeowners who demand modern, high-performance electrical infrastructure inside older properties. We install advanced smart home automation platforms, structured Cat6 data cabling, dedicated home office circuits, and high-speed EV chargers—successfully bridging the gap between Pasadena's historic housing inventory and 21st-century technological expectations.",
      },
    ],
    features: [
      { item: 'Rose Bowl Stadium' },
      { item: 'Old Town Pasadena' },
      { item: 'California Institute of Technology (Caltech)' },
      { item: 'Norton Simon Museum' },
      { item: 'The Huntington Library' },
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
    city: 'Pasadena',
    features: [
      {
        question:
          'Can you upgrade the electrical in a historic Pasadena Craftsman home?',
        answer:
          'Yes — historic home electrical is one of our specialties. We upgrade panels, rewire circuits, and add capacity while respecting original architecture. We route wiring through existing wall cavities, use period-appropriate cover plates, and minimize visible modifications.',
      },
      {
        question: 'Does Pasadena have its own electric utility?',
        answer:
          "Yes — Pasadena Water and Power (PWP) is the municipal utility. Service upgrades, meter changes, and solar interconnections go through PWP rather than SCE. We're thoroughly familiar with PWP's processes and coordinate directly with them.",
      },
      {
        question:
          'Can you install an EV charger in a Pasadena home with an older panel?',
        answer:
          'Yes — we bundle panel upgrades and EV charger installations for Pasadena homeowners. We coordinate with Pasadena Water and Power for any required service upgrades.',
      },
      {
        question: 'Do you work in the Bungalow Heaven Landmark District?',
        answer:
          "Yes — we've completed numerous projects in Bungalow Heaven and other Pasadena landmark districts. We understand the additional considerations for homes in designated historic zones.",
      },
    ],
  };

  const areas = {
    city: 'Pasadena',
    features: [
      { item: 'Altadena', slug: 'altadena' },
      { item: 'South Pasadena', slug: 'south-pasadena' },
      { item: 'San Marino', slug: 'san-marino' },
      { item: 'Eagle Rock', slug: 'eagle-rock' },
      { item: 'Glendale', slug: 'glendale' },
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
        Pasadena Electrician | Historic Craftsman Rewiring & PWP Utility TIs |
        C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Pasadena, CA (91101–91107). Pasadena Water & Power (PWP) coordination, historic Craftsman rewiring, Old Town commercial TIs & EV chargers. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Pasadena' />
      <LocationAllServices city='Pasadena' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default PasadenaPage;
