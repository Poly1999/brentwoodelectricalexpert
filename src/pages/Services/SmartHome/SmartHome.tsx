import {
  BatteryCharging,
  BuildingComplex,
  CheckCircle2,
  Clock,
  GitGraph,
  MapPin,
  Shield,
  Smartphone,
  Star,
  Wrench,
  Zap,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

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

import SmartHomeElectrical from '../../../assets/smarthome-1-rotated.webp';

import SmartSwitchInstallation from '../../../assets/smarthome-1-rotated.webp';
import SmartLightingControls from '../../../assets/smarthome-2.webp';
import HomeAutomation from '../../../assets/smarthome-3.webp';

function SmartHome() {
  const hero = {
    icon: <Smartphone />,
    title: 'Smart Home Electrical Systems & Automation Wiring',
    subtitle:
      "Elevate your property's convenience, security, and efficiency with professionally engineered smart home electrical systems. Brentwood Electrical Experts installs Lutron smart switches, architectural lighting controls, automated motorized shades, and whole-home automation wiring across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles.",
    backgroundImage: SmartHomeElectrical,
    button: 'Request Smart Home Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Neutral-Wire Retrofit Expertise',
      'Apple HomeKit, Alexa & Google Integration',
    ],
    icons: [<Star />, <Wrench />, <Smartphone />],
  };

  const benefits = {
    title: 'Key Advantages of Professional Smart Home Integration',
    features: [
      'Seamless installation of smart switches, touch dimmers, and automated scene keypads',
      'Voice-controlled lighting and automation integration (Amazon Alexa, Google Home, Apple HomeKit, Siri)',
      'Whole-home automation wiring, structured data cabling, and hardwired Wi-Fi access point drops',
      'Smart outlet integration for appliance automation, energy monitoring, and remote scheduling',
      'Professional neutral-wire retrofitting to ensure reliable operation in older properties',
      'Expert programming of custom scenes, sunrise/sunset schedules, and mobile app control',
    ],
    image: SmartHomeElectrical,
  };

  const fullDescription = {
    title: 'Professional Smart Home Wiring & Automation in West Los Angeles',
    paragraphs: [
      <>
        Integrating modern smart home technology into residential or commercial
        spaces requires more than just screwing in smart bulbs or downloading an
        app. Reliable automation relies on proper electrical box depth, stable
        neutral-wire connections, robust Cat6 data cabling, and clean circuit
        integration. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts installs professional-grade smart
        electrical infrastructure.
      </>,

      <>
        Whether you need smart dimmers retrofitted into a mid-century property
        in <NavLink to='/brentwood'>Brentwood</NavLink>, structured data cabling
        and whole-home automation wired for a custom estate in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> and{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>, or smart
        lighting controls integrated for a commercial space in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>, our licensed team
        ensures flawless setup.
      </>,

      <>
        Every smart home project begins with an on-site evaluation of your
        existing switch box wiring and Wi-Fi coverage, followed by an itemized,
        transparent written proposal. We install premium, UL-listed automation
        hardware from premier manufacturers including Lutron Caséta, Lutron
        RadioRA 3, Control4, and TP-Link Kasa.
      </>,

      <>
        From neat wall box wiring to custom mobile app commissioning and
        voice-assistant synchronization, your smart home installation is handled
        completely in-house. Read our verified{' '}
        <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>book your smart home consultation</NavLink>{' '}
        today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Smart Home Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed electrical professionals who treat your interior finishes and
        technology setup with absolute care. We never guess on switch box
        neutral wires, we never overload low-voltage communication lines, and we
        ensure every smart device responds instantly without lag or dropped
        signals.
      </>,

      <>
        Your service starts with a thorough{' '}
        <NavLink to='/contact'>on-site evaluation</NavLink>. A licensed C-10
        electrician inspects your wall switch box depths, checks for required
        neutral wires, and evaluates your home's wireless and hardwired network
        infrastructure. We explain your automation options in plain language and
        provide a transparent written estimate before any work begins.
      </>,

      <>
        Electrical upgrades can feel disruptive, which is why our crew
        prioritizes keeping your home spotless. We arrive on schedule, protect
        your floors with heavy-duty drop cloths, fish wiring cleanly through
        finished walls, and program your apps and voice assistants before
        completing our workspace cleanup.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Smart Home Process — Step by Step',
    features: [
      {
        title: 'Infrastructure Consultation',
        subtitle:
          'We assess your smart home goals, Wi-Fi coverage, and existing switch box wiring (neutral wire verification).',
      },
      {
        title: 'System Design & Proposal',
        subtitle:
          'We design a custom automation and lighting control layout, select compatible platforms, and provide flat-rate pricing.',
      },
      {
        title: 'Professional Wiring & Installation',
        subtitle:
          'We install neutral wires, mount smart switches/dimmers, and run structured Cat6 data cabling where needed.',
      },
      {
        title: 'App Programming & Voice Setup',
        subtitle:
          'We configure mobile applications, custom lighting scenes, automated schedules, and smart speaker voice control.',
      },
    ],
  };

  const safetyDescription = {
    title: 'NEC Code Compliance, Neutral Wiring & Commercial-Grade Hardware',
    paragraphs: [
      <>
        Electrical safety and strict code adherence are the foundation of every
        smart home integration we perform. Every project we complete complies
        fully with contacts, box fill limits, and safety standards governed by
        the National Electrical Code (NEC) across Los Angeles (LADBS), Santa
        Monica, Beverly Hills, and Culver City. We pull all necessary permits
        when modifying main electrical distribution circuits.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed smart switches,
        dimmers, and data components from trusted manufacturers including
        Lutron, Leviton, Control4, and Schneider Electric. From high-performance
        radio-frequency repeaters to robust surge-protected relays, every part
        is specified for long-term operational stability.
      </>,

      <>
        Because smart home protocols and wireless standards evolve continuously,
        our technicians stay current on the latest mesh networks, Matter
        standards, and smart lighting protocols—ensuring your automation system
        remains future-proof.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly installs smart home electrical
        systems for homeowners, interior designers, and property managers across
        West Los Angeles. Whether your property is located in{' '}
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
        We understand the specific smart automation needs of Westside
        properties—from retrofitting smart lighting controls into historic homes
        in <NavLink to='/mar-vista'>Mar Vista</NavLink> and{' '}
        <NavLink to='/west-los-angeles'>West LA</NavLink> to engineering
        whole-home automation and motorized shading wiring for luxury custom
        estates in <NavLink to='/bel-air'>Bel Air</NavLink> and{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>.
      </>,
      <>
        Ready to make your home smarter?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate,
        or <NavLink to='/contact'>request your consultation online</NavLink>{' '}
        today.
      </>,
    ],
  };

  const recents = {
    title: 'Featured Smart Home & Automation Projects Across West LA',
    subtitle:
      'Browse our recent smart switch, lighting control, and automation deployments.',
    features: [
      {
        image: SmartSwitchInstallation,
        name: 'Lutron Caséta Smart Dimmer Switch Retrofit',
        location: 'West Los Angeles, CA',
      },
      {
        image: SmartLightingControls,
        name: 'Multi-Zone Smart Keypad & Scene Controller',
        location: 'Santa Monica, CA',
      },
      {
        image: HomeAutomation,
        name: 'Whole-Home Automation & Structured Data Hub',
        location: 'Brentwood, CA',
      },
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Smart Home Electrical Systems',
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
        'Do I need special wiring or neutral wires in my walls for smart home switches?',
      answer:
        'Most professional-grade smart switches and dimmers (such as Lutron or Leviton systems) require a neutral wire inside the wall switch box to power the smart device continuously. Older homes built before the 1980s frequently lack neutral wires in switch boxes. During our initial assessment, we check your boxes and can safely run new neutral wires or recommend no-neutral smart solutions (like Lutron Caséta) where appropriate.',
    },
    {
      question:
        'Which smart home platforms and voice assistants do your electrical systems support?',
      answer:
        'We install systems that integrate seamlessly with all major smart home platforms, including Amazon Alexa, Google Home, Apple HomeKit / Siri, Lutron App, and professional automation platforms like Control4. We configure your voice commands, mobile apps, and custom automation scenes so everything works effortlessly together.',
    },
  ];

  const areas = {
    title: 'Smart Home Electrical Systems Across West LA',
    subtitle:
      'We engineer and install smart automation across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const detailsButtons = {
    call: 'Call for a Smart Home Estimate',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary smart home assessment or request a quote online. Same-day consultations available.',
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
      title: 'Our 4-Step Smart Home Process',
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
    title: 'Ready to Upgrade Your Home With Smart Technology?',
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or book your smart home estimate online.',
  };

  return (
    <div>
      <title>
        Smart Home Automation & Lighting Control Wiring West LA | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrician (#1102731) installing Lutron smart switches, whole-home automation wiring, voice control & data networks in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
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

export default SmartHome;
