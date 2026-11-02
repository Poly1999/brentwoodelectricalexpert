import {
  BatteryCharging,
  BuildingComplex,
  CheckCircle2,
  Clock,
  DollarSign,
  Droplets,
  GitGraph,
  MapPin,
  Plug,
  Shield,
  Star,
  Wrench,
  Zap,
} from 'lucide-react';
import '../../../components/service-detail-page/ServiceDetailLayout.css';
import { NavLink } from 'react-router-dom';
import ServiceHero from '../../../components/service-detail-page/ServiceHero/ServiceHero';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';
import ServiceBenefits from '../../../components/service-detail-page/ServiceBenefits/ServiceBenefits';
import ServiceDetails from '../../../components/service-detail-page/ServiceDetails/ServiceDetails';
import ServicesSidebar from '../../../components/Shared/ServicesSidebar/ServicesSidebar';
import RecentProjects from '../../../components/service-detail-page/RecentProjects/RecentProjects';
import ServiceProcess from '../../../components/service-detail-page/ServiceProcess/ServiceProcess';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import ServiceFAQ from '../../../components/service-detail-page/ServiceFAQ/ServiceFAQ';
import ServiceAreasGrid from '../../../components/service-detail-page/ServiceAreasGrid/ServiceAreasGrid';
import RelatedServices from '../../../components/service-detail-page/RelatedServices/RelatedServices';
import Footer from '../../../components/Footer/Footer';

import OutletsInstallation from '../../../assets/recessed-lighting.webp';

import GFCIOutletInstallation from '../../../assets/outlet-0348-rotated.webp';
import USBOutletUpgrade from '../../../assets/outlet-0349-rotated.webp';

function OutletsService() {
  const hero = {
    icon: <Plug />,
    title: 'Electrical Outlet Installation & NEC GFCI Upgrades',
    subtitle:
      'Modernize your home or business with safe, convenient power distribution. Brentwood Electrical Experts installs and upgrades NEC-compliant electrical receptacles, high-speed USB-C charging ports, and wet-location GFCI shock protection across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles.',
    backgroundImage: OutletsInstallation,
    button: 'Request Outlet Estimate',
  };

  const badges = {
    items: [
      'C-10 Licensed & Insured (#1102731)',
      'NEC Code-Compliant Wet Protection',
      'Commercial-Grade Heavy-Duty Lugs',
      'Flat-Rate Upfront Quotes',
    ],
    icons: [<Shield />, <Droplets />, <Wrench />, <DollarSign />],
  };

  const benefits = {
    title: 'Advantages of Professional Outlet & GFCI Upgrades',
    features: [
      'Strategic Convenience: Add dedicated power receptacles where you need them most to eliminate messy extension cords.',
      'NEC-Mandated GFCI Protection: Instant shock-prevention outlets for kitchens, bathrooms, wet bars, and exterior patios.',
      'High-Speed USB-C Charging Ports: Direct wall-integrated USB-C and USB-A charging without bulky power bricks.',
      'Child-Safe Tamper-Resistant Outlets: Built-in shutter mechanisms to prevent children from inserting foreign objects.',
      'Dedicated Appliance Circuits: Heavy-duty 20-amp circuits for microwaves, refrigerators, bidets, and home offices.',
      'Weatherproof Outdoor Covers: NEMA 3R in-use waterproof covers built to withstand coastal marine air and rain.',
    ],
    image: OutletsInstallation,
  };

  const fullDescription = {
    title: 'Professional Receptacle & GFCI Installation in West Los Angeles',
    paragraphs: [
      <>
        Outdated two-prong outlets, ungrounded boxes, and missing Ground Fault
        Circuit Interrupter (GFCI) protection in wet zones represent serious
        household hazards and building code violations. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts upgrades residential and commercial
        electrical receptacles to meet rigorous modern safety standards.
      </>,

      <>
        Whether you need to add kitchen island outlets for a remodel in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>, install weather-resistant
        GFCI receptacles along a coastal patio in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>, or upgrade an entire
        office building to tamper-resistant USB-C outlets in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> and West LA, our
        licensed electricians execute every installation with precision.
      </>,

      <>
        Every project begins with a careful circuit capacity assessment and a
        clear, flat-rate written estimate. We install commercial-grade,
        UL-listed decorator receptacles, verify proper grounding continuity, and
        test trip response times to guarantee absolute safety for your family or
        employees.
      </>,

      <>
        From fish-wall receptacle additions with zero drywall damage to
        heavy-duty appliance wiring, you get dependable, code-compliant
        workmanship. Read our verified{' '}
        <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>book your outlet upgrade</NavLink> today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Outlet & GFCI Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed professionals who treat your property with meticulous care. We
        never overload existing circuits, we never cut corners on wire torquing
        or box fill limits, and we verify every ground path before closing a
        wall plate.
      </>,

      <>
        Your service starts with an{' '}
        <NavLink to='/contact'>on-site evaluation</NavLink>. A licensed C-10
        electrician inspects your existing circuit load capacity, box depth, and
        grounding integrity to determine the safest wiring method. We explain
        your upgrade options—such as adding dedicated 20-amp lines or upgrading
        to decorator-style USB receptacles—and provide a transparent written
        estimate before any work begins.
      </>,

      <>
        Electrical work can feel disruptive, which is why our crew prioritizes
        keeping your home or business spotless. We use protective drop cloths,
        fish wiring cleanly through walls without unnecessary demolition, and
        test every newly installed device for correct polarity, voltage, and
        GFCI trip functionality.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Outlets & GFCI Process — Step by Step',
    features: [
      {
        title: 'Load & Circuit Assessment',
        subtitle:
          'We evaluate your existing panel capacity, wire gauge, and box depth to determine safe outlet placement.',
      },
      {
        title: 'Precision Wiring & Mounting',
        subtitle:
          'We run dedicated home-runs or tap existing circuits, torque terminals securely, and mount decorator faceplates.',
      },
      {
        title: 'Polarity & GFCI Trip Testing',
        subtitle:
          'We test every receptacle for correct voltage, ground impedance, and instantaneous GFCI safety trip response.',
      },
    ],
  };

  const safetyDescription = {
    title: 'NEC Code Compliance, Shock Protection & Commercial-Grade Hardware',
    paragraphs: [
      <>
        Electrical safety is the foundation of every receptacle we install.
        Every outlet and GFCI upgrade we perform strictly adheres to the latest
        National Electrical Code (NEC) mandates regarding tamper-resistant
        shutters, weather-resistant outdoor covers, and GFCI/AFCI protection
        zones across Los Angeles (LADBS), Santa Monica, Beverly Hills, and
        Culver City. We pull all necessary permits and ensure your system passes
        inspection.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed receptacles and
        heavy-duty wiring components from trusted manufacturers including
        Leviton, Hubbell, and Lutron. From high-impact thermoplastic bodies and
        self-grounding brass clips to robust surge-suppression circuits, every
        device is selected for long-term durability and heavy plug insertion
        cycles.
      </>,

      <>
        Because building codes and safety requirements evolve continuously, our
        technicians stay current on the latest NEC amendments for kitchen
        islands, bathrooms, garages, and outdoor living spaces—ensuring your
        property remains fully protected.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly provides outlet installations and
        GFCI upgrades for residential and commercial clients across West Los
        Angeles. Whether your property is located in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>
          28+ Greater LA communities we serve
        </NavLink>
        , our local team is ready to assist.
      </>,
      <>
        We understand the unique electrical layouts of Westside properties—from
        ungrounded two-prong wiring in mid-century homes across{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> and{' '}
        <NavLink to='/west-los-angeles'>West LA</NavLink> to luxury estates in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> requiring discreet floor boxes
        and smart USB charging stations.
      </>,
      <>
        Ready to upgrade your home's receptacles?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate,
        or <NavLink to='/contact'>request your appointment online</NavLink>{' '}
        today.
      </>,
    ],
  };

  const recents = {
    title: 'Featured Outlet Installations & GFCI Upgrades Across West LA',
    subtitle:
      'Browse our recent wet-location safety upgrades and USB receptacle additions.',
    features: [
      {
        image: GFCIOutletInstallation,
        name: 'Weather-Resistant GFCI & Outdoor Patio Receptacle',
        location: 'Brentwood, CA',
      },
      {
        image: USBOutletUpgrade,
        name: 'Kitchen Countertop Tamper-Resistant & USB-C Upgrades',
        location: 'Santa Monica, CA',
      },
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Outlet & GFCI Upgrades',
    subtitle: 'Consistently Rated 5.0 Stars Across Google, Yelp & Birdeye',
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

  const faqs = [
    {
      question:
        'Where does the National Electrical Code (NEC) require GFCI outlets to be installed?',
      answer:
        'The NEC mandates Ground Fault Circuit Interrupter (GFCI) protection in all areas where water and electricity may come into contact. This includes kitchens (all countertop receptacles), bathrooms, laundry rooms, unfinished basements, crawlspaces, garages, wet bars, and all outdoor receptacles (including balconies and patios).',
    },
    {
      question:
        'Can you add new outlets or USB ports to rooms without tearing up drywall?',
      answer:
        'Yes. In most residential and commercial spaces, our licensed electricians can fish new electrical cables through walls, attics, or crawlspaces without causing major drywall damage. We use specialized wall-fishing tools to route wiring cleanly and patch any minimal access points seamlessly.',
    },
  ];

  const areas = {
    title: 'Outlet & GFCI Upgrades Across West LA',
    subtitle:
      'We install code-compliant receptacles across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const detailsButtons = {
    call: 'Call for a Free Outlet Estimate',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary outlet assessment or submit your request online. Same-day consultations available.',
    navTitle: 'Our Electrical Services',
    whyTitle: 'Why West LA Chooses Us',
    whyItems: [
      '5.0 Google Rating — 100+ reviews',
      'Fully licensed & insured',
      'Same-day & 24/7 emergency service',
      'Upfront pricing, no hidden fees',
      'Serving all of West Los Angeles',
    ],
    whyIcons: [<Star />, <Shield />, <Clock />, <CheckCircle2 />, <MapPin />],
    areasTitle: 'Core Service Territory',
    process: {
      title: 'Our 3-Step Outlet Process',
      steps: featuresDescription.features,
    },
  };

  const related = {
    title: 'Explore Related Electrical Services',
    cards: [
      {
        icon: <Zap />,
        title: 'Panel Upgrades',
        subtitle: 'Explore Panel Upgrades',
        slug: 'panel-upgrades-service',
      },
      {
        icon: <BatteryCharging />,
        title: 'EV Chargers',
        subtitle: 'Explore EV Chargers',
        slug: 'ev-chargers-service',
      },
      {
        icon: <BuildingComplex />,
        title: 'Construction',
        subtitle: 'Explore Construction',
        slug: 'construction-service',
      },
      {
        icon: <GitGraph />,
        title: 'Subpanels',
        subtitle: 'Explore Subpanels',
        slug: 'subpanels-service',
      },
    ],
  };

  const footer = {
    title: 'Ready to Upgrade Your Outlets?',
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or book your outlet estimate online.',
  };

  return (
    <div>
      <title>
        GFCI Outlet Installation & USB-C Upgrades West LA | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrician (#1102731) installing NEC-compliant GFCI shock protection, USB-C outlets, tamper-resistant receptacles & dedicated circuits in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
      />
      <ServiceHero hero={hero} />
      <TrustBadges badges={badges} />
      <div className='servicedetail_layout'>
        <div className='servicedetail_left'>
          <ServiceBenefits benefits={benefits} />
          <ServiceDetails
            detailsButtons={detailsButtons}
            fullDescription={fullDescription}
            expectationsDescription={expectationsDescription}
            featuresDescription={featuresDescription}
            safetyDescription={safetyDescription}
            coverageDescription={coverageDescription}
          />
        </div>
        <div className='servicedetail_sidebar'>
          <ServicesSidebar sidebar={sidebar} />
        </div>
      </div>
      <ServiceProcess featuresDescription={featuresDescription} />
      <RecentProjects recents={recents} />
      <Testimonials reviews={reviews} />
      <ServiceFAQ faqs={faqs} />
      <ServiceAreasGrid areas={areas} />
      <RelatedServices related={related} />
      <Footer footer={footer} />
    </div>
  );
}

export default OutletsService;
