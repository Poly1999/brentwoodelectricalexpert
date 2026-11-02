import {
  BatteryCharging,
  BuildingComplex,
  Camera,
  CheckCircle2,
  Clock,
  Cpu,
  GitGraph,
  MapPin,
  Shield,
  Star,
  Zap,
} from 'lucide-react';

import RecentProjects from '../../../components/service-detail-page/RecentProjects/RecentProjects';
import RelatedServices from '../../../components/service-detail-page/RelatedServices/RelatedServices';
import ServiceAreasGrid from '../../../components/service-detail-page/ServiceAreasGrid/ServiceAreasGrid';
import ServiceBenefits from '../../../components/service-detail-page/ServiceBenefits/ServiceBenefits';
import ServiceDetails from '../../../components/service-detail-page/ServiceDetails/ServiceDetails';
import ServiceFAQ from '../../../components/service-detail-page/ServiceFAQ/ServiceFAQ';
import ServiceHero from '../../../components/service-detail-page/ServiceHero/ServiceHero';
import ServiceProcess from '../../../components/service-detail-page/ServiceProcess/ServiceProcess';
import ServicesSidebar from '../../../components/Shared/ServicesSidebar/ServicesSidebar';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';
import Footer from '../../../components/Footer/Footer';

import EVChargerInstallation from '../../../assets/ev-charger-1.webp';
import { NavLink } from 'react-router-dom';

import TeslaWallConnector from '../../../assets/ev-charger-1.webp';
import Level2Charger from '../../../assets/ev-charger-2.webp';
import ResidentialEV from '../../../assets/ev-charger-3.webp';

function EVCharger() {
  const hero = {
    icon: <BatteryCharging />,
    title: 'Level 2 EV Charger & Tesla Wall Connector Installation',
    subtitle:
      'Power your electric vehicle up to 9x faster right at home. Brentwood Electrical Experts engineers and installs dedicated Level 2 charging systems—including Tesla Wall Connectors, ChargePoint Home Flex, Rivian, Porsche, and universal J1772/NACS stations—across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles.',
    backgroundImage: EVChargerInstallation,
    button: 'Request EV Charger Estimate',
  };

  const badges = {
    items: [
      'C-10 Licensed & Insured (#1102731)',
      'Dedicated 40A/60A Copper Circuits',
      'Smart Energy Management Options',
      'Turnkey City Permits & Inspection',
    ],
    icons: [<Shield />, <Zap />, <Cpu />, <CheckCircle2 />],
  };

  const benefits = {
    title: 'Advantages of Professional Level 2 EV Charging',
    features: [
      'Overnight Level 2 Speed: Charge your EV up to 9x faster than a standard 120V wall outlet (add 25–40 miles of range per hour).',
      'Universal Brand Compatibility: Expert installation for Tesla, Rivian, Lucid, Porsche, Ford Lightning, Chevrolet, BMW, and all J1772/NACS EVs.',
      'Smart Load-Management Systems: Dynamic power-sharing technology allowing 100-amp panels to safely support EV charging without expensive service upgrades.',
      'Concealed Conduit & Weatherproofing: Clean EMT conduit routing and NEMA 3R outdoor enclosures built for coastal marine durability.',
      'Strict NEC Article 625 Compliance: Rigorous adherence to electric vehicle supply equipment codes and torque specifications.',
      "Future-Proof Home Value: Enhance your property's market appeal for modern EV-owning buyers and tenants.",
    ],
    image: EVChargerInstallation,
  };

  const fullDescription = {
    title: 'Professional Level 2 EV Charger Installation in West Los Angeles',
    paragraphs: [
      <>
        Charging an electric vehicle safely on a daily basis requires more than
        just plugging into a standard wall outlet. High-draw continuous loads
        demand dedicated 240V circuits, heavy-gauge copper wiring, and precise
        breaker sizing. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts engineers and installs high-speed home and
        multi-unit commercial charging stations.
      </>,

      <>
        Whether you need a sleek Tesla Wall Connector installed in a hillside
        garage in <NavLink to='/brentwood'>Brentwood</NavLink>, a hardwired
        ChargePoint Home Flex mounted along a coastal driveway in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>, or a commercial
        multi-stall charging setup for a multi-family apartment building in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> and West LA, our
        licensed team ensures code-compliant execution.
      </>,

      <>
        Every EV project starts with an official National Electrical Code (NEC)
        load calculation to verify your main panel's available ampacity. If your
        100-amp service is near capacity, we can either{' '}
        <NavLink to='/panel-upgrades-service'>
          upgrade your panel to 200 amps
        </NavLink>{' '}
        or integrate an UL-listed smart energy management system (EMS) to manage
        your home's total load. We provide an itemized, flat-rate proposal
        before starting any work.
      </>,

      <>
        From clean surface conduit runs to final Wi-Fi app commissioning and
        municipal permit sign-off, we handle your entire installation in-house.
        Read our verified <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>schedule your EV charger assessment</NavLink>{' '}
        today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our EV Charger Installation Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed electrical professionals who treat your home with absolute
        care. We never compromise on wire gauge or breaker torquing, we never
        cut corners on grounding electrodes, and we ensure your charger delivers
        peak amperage safely.
      </>,

      <>
        Your installation begins with an{' '}
        <NavLink to='/contact'>on-site evaluation</NavLink>. A licensed C-10
        electrician inspects your main service panel, measures available busbar
        space, and maps the most direct wire pathway from your electrical
        service to your garage or parking stall. We explain your charger options
        and load-management requirements in plain English, providing a
        transparent written estimate before any work begins.
      </>,

      <>
        We know that electrical installations can feel disruptive, which is why
        our crew prioritizes keeping your property spotless. We arrive on
        schedule, protect your floors and walls, route conduit cleanly along
        garage perimeters, and test your charger under full vehicle load before
        cleaning up our workspace.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our EV Chargers Process — Step by Step',
    features: [
      {
        title: 'Site & Load Consultation',
        subtitle:
          'We evaluate your driving habits, vehicle specs, parking location, and main panel capacity.',
      },
      {
        title: 'Hardware & Amperage Spec',
        subtitle:
          'We select the ideal 40A or 60A hardwired charger (Tesla, ChargePoint, Rivian) and transparent flat-rate pricing.',
      },
      {
        title: 'NEC Load Calculation',
        subtitle:
          'We verify ampacity headroom, and if required, plan a panel heavy-up or smart energy manager.',
      },
      {
        title: 'Dedicated Circuit & Mounting',
        subtitle:
          'We run heavy-gauge copper THHN wire through EMT conduit, mount the unit, and terminate connections.',
      },
      {
        title: 'Load Testing & Commissioning',
        subtitle:
          'We energize the circuit, test voltage under load, configure Wi-Fi app settings, and test your vehicle.',
      },
    ],
  };

  const safetyDescription = {
    title: 'NEC Article 625 Compliance, Permits & Commercial-Grade Hardware',
    paragraphs: [
      <>
        EV charging safety is non-negotiable. Every Level 2 charging station we
        install strictly adheres to National Electrical Code (NEC) Article 625,
        California Title 24 energy codes, and local municipal building
        requirements across Los Angeles (LADBS), Santa Monica, Beverly Hills,
        and Culver City. We pull all necessary electrical permits and coordinate
        inspections to protect your vehicle warranty and home insurance
        coverage.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed copper conductors,
        heavy-duty breakers, and weather-resistant NEMA enclosures from
        manufacturers including Siemens, Square D, Eaton, Tesla, and
        ChargePoint. From copper-clad building wire and industrial-grade
        receptacles to thermal-rated breakers, every component is engineered for
        continuous high-amperage draw without overheating.
      </>,

      <>
        Because EV charging technologies and vehicle standards evolve rapidly,
        our technicians stay fully certified on the latest smart grid
        integrations, dynamic load-sharing panels, and utility rebate
        requirements—ensuring your installation is state-of-the-art.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly provides professional EV charger
        installations for homeowners, HOAs, and commercial properties across
        West Los Angeles. Whether your home is in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>
          28+ Greater LA communities we serve
        </NavLink>
        , our local team is ready to deploy.
      </>,
      <>
        We understand the unique electrical infrastructure challenges across the
        Westside—from adding 240V circuits to detached garages in{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> and{' '}
        <NavLink to='/west-los-angeles'>West LA</NavLink>, to configuring
        multi-stall commercial charging networks in{' '}
        <NavLink to='/century-city'>Century City</NavLink>,{' '}
        <NavLink to='/westwood'>Westwood</NavLink>, and{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>.
      </>,
      <>
        Ready to charge your EV at home?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate,
        or{' '}
        <NavLink to='/contact'>book your charger installation online</NavLink>{' '}
        today.
      </>,
    ],
  };

  const recents = {
    title: 'Featured Level 2 EV Charger Installations Across West LA',
    subtitle:
      'Browse our recent hardwired Tesla, ChargePoint, and universal EV station deployments.',
    features: [
      {
        image: TeslaWallConnector,
        name: 'Hardwired Gen 3 Tesla Wall Connector on Dedicated 60A Circuit',
        location: 'Santa Monica, CA',
      },
      {
        image: Level2Charger,
        name: 'ChargePoint Home Flex Level 2 EV Station & Conduit Run',
        location: 'Pacific Palisades, CA',
      },
      {
        image: ResidentialEV,
        name: 'Dual EV Garage Charging Setup with Load Management',
        location: 'Brentwood, CA',
      },
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Level 2 EV Charger Installations',
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
        'Do I need a main electrical panel upgrade to install a Level 2 EV charger?',
      answer:
        'Not always. During our initial visit, we perform an official NEC load calculation on your home. If your 100-amp panel is at maximum capacity, we can either upgrade your service to 200 amps or install a smart energy management system (such as a DCC or NeoCharge controller) that automatically pauses EV charging when major appliances are running—avoiding the cost and downtime of a full panel heavy-up.',
    },
    {
      question: 'Which EV charger brands do you supply and install?',
      answer:
        'We install all major EV charger brands, including Tesla Wall Connectors (Gen 3 / Universal), ChargePoint Home Flex, Rivian Wall Charger, JuiceBox, Porsche Mobile Charger Connect, and any universal NEMA 14-50 plug-in or hardwired J1772/NACS charging unit.',
    },
    {
      question: 'How long does a home EV charger installation typically take?',
      answer:
        'A standard residential EV charger installation is completed in 3 to 5 hours on a single day. This includes running the dedicated copper circuit from your panel, installing EMT conduit, mounting the charger, and testing the circuit under full load.',
    },
  ];

  const areas = {
    title: 'Level 2 EV Charger Installation Across West LA',
    subtitle:
      'We engineer and permit home charging stations across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const detailsButtons = {
    call: 'Call for an EV Charger Estimate',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary EV charger assessment or request a quote online. Same-day consultations available.',
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
      title: 'Our 5-Step EV Charger Process',
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
      {
        icon: <Camera />,
        title: 'Security Cameras',
        subtitle: 'Explore Security Cameras',
        slug: 'security-cameras-service',
      },
    ],
  };

  const footer = {
    title: 'Ready to Charge Faster at Home?',
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or book your EV charger estimate online.',
  };

  return (
    <div>
      <title>
        Level 2 EV Charger Installation West LA | Tesla Wall Connector | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrician (#1102731) installing Tesla Wall Connectors, ChargePoint & Level 2 EV chargers with load management in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
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
      <RecentProjects recents={recents} />
      <ServiceProcess featuresDescription={featuresDescription} />
      <Testimonials reviews={reviews} />
      <ServiceFAQ faqs={faqs} />
      <ServiceAreasGrid areas={areas} />
      <RelatedServices related={related} />
      <Footer footer={footer} />
    </div>
  );
}

export default EVCharger;
