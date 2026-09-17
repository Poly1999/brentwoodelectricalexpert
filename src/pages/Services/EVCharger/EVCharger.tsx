import {
  BatteryCharging,
  BuildingComplex,
  Camera,
  GitGraph,
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
    title: 'EV Charger Installation',
    subtitle:
      'Charge your electric vehicle at home with a professionally installed Level 2 EV charger. Brentwood Electrical Experts installs Tesla Wall Connectors, ChargePoint, JuiceBox, and all major EV charger brands across West LA, Santa Monica, Beverly Hills, and surrounding areas. We handle everything from panel capacity assessment to final installation.',
    backgroundImage: EVChargerInstallation,
  };

  const benefits = {
    features: [
      'Fast Level 2 charging at home',
      'Compatible with Tesla, BMW, Rivian, and all EVs',
      'Panel upgrade included if needed',
      'Clean, code-compliant installation',
      'Increase home value',
      'Eliminate gas station trips',
    ],
    image: EVChargerInstallation,
  };

  const fullDescription = {
    title: 'EV Charger Installation in West Los Angeles',
    paragraphs: [
      <>
        At Brentwood Electrical Experts, we understand that ev charger
        installation is more than just technical work — it's about ensuring the
        safety, comfort, and value of your property. As a fully{' '}
        <NavLink to='/about'>
          licensed and insured electrical contractor
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>, we
        bring years of hands-on experience and a commitment to excellence to
        every ev chargers project we take on.
      </>,

      <>
        Whether you're a homeowner in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink> looking for a routine ev
        chargers service, a business owner in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink> needing a more
        complex solution, or a property manager in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> maintaining
        multiple units, our team has the expertise and equipment to handle the
        job right the first time.
      </>,

      <>
        Every project starts with a thorough assessment and a clear, upfront
        estimate — no hidden fees, no surprise charges. We use only premium
        materials, follow all applicable NEC and local codes, and ensure your
        complete satisfaction before we consider the job done. Our electricians
        are not only licensed and experienced but also respectful of your
        property and your time.
      </>,

      <>
        From initial consultation through final testing and cleanup, you'll
        experience the difference that comes from working with a team that
        genuinely cares about quality. That's why hundreds of West LA homeowners
        and businesses have trusted us with their ev chargers needs — and why
        they keep coming back. See our{' '}
        <NavLink to='/reviews'>customer reviews</NavLink> or{' '}
        <NavLink to='/contact'>request a free estimate.</NavLink>
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our EV Chargers Service',
    paragraphs: [
      <>
        When you choose Brentwood Electrical Experts for your ev chargers needs,
        you're choosing a team that treats every job — big or small — with the
        same level of professionalism, care, and attention to detail. We don't
        cut corners, we don't rush through projects, and we never leave a job
        until it's done right.
      </>,

      <>
        Our process begins the moment you call or{' '}
        <NavLink to='/contact'>submit a request online.</NavLink> A
        knowledgeable team member will walk you through your options, answer
        your questions, and schedule a convenient time for an on-site
        assessment. During the assessment, our licensed electrician will
        evaluate your specific situation, discuss the best approach, and provide
        a clear, written estimate — all before any work begins.
      </>,

      <>
        We know that electrical work can feel disruptive, which is why we
        prioritize minimizing the impact on your daily routine. Our electricians
        arrive on time, work efficiently, and leave your space clean when the
        job is complete. We also keep you informed every step of the way, so you
        always know what's happening and why.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our EV Chargers Process — Step by Step',
    features: [
      {
        title: 'Consultation',
        subtitle:
          'We assess your electrical system and charger location preferences.',
      },
      {
        title: 'Charger Selection',
        subtitle:
          'We help you choose the right charger for your vehicle and driving habits.',
      },
      {
        title: 'Panel Assessment',
        subtitle:
          'We verify your panel can support the charger — and upgrade it if needed.',
      },
      {
        title: 'Installation',
        subtitle:
          'Professional installation with clean conduit runs and proper mounting.',
      },
      {
        title: 'Activation & Testing',
        subtitle:
          'We test the charger, verify amperage, and walk you through operation.',
      },
    ],
  };

  const safetyDescription = {
    title: 'Safety, Code Compliance & Quality Materials',
    paragraphs: [
      <>
        Safety is the foundation of everything we do. Every ev chargers project
        we complete meets or exceeds the latest National Electrical Code (NEC)
        standards as well as all local building codes for the{' '}
        <NavLink to='/all-locations'>cities and communities we serve.</NavLink>{' '}
        We pull all necessary permits, coordinate inspections, and ensure your
        system is fully compliant — giving you peace of mind and protecting your
        investment.
      </>,

      <>
        We use only commercial-grade, UL-listed materials and components from
        trusted manufacturers. From the wire and connectors inside your walls to
        the fixtures and devices you interact with daily, every component is
        chosen for durability, performance, and safety. We never use low-quality
        parts to cut costs — because the safety of your family or employees is
        never worth compromising.
      </>,

      <>
        Our electricians are continuously trained on the latest codes,
        technologies, and best practices. Whether it's new energy-efficient
        technologies, updated code requirements, or emerging smart home systems,
        our team stays current so you always receive the most informed,
        up-to-date service available.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'EV Chargers Across West Los Angeles',
    paragraphs: [
      <>
        We proudly provide ev chargers services to homeowners and businesses
        throughout West Los Angeles and the surrounding communities. Whether
        you're located in <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/locations'>28+ communities we serve</NavLink>, our team is
        ready to help with your ev chargers project.
      </>,
      <>
        We understand the unique characteristics of homes and businesses in each
        neighborhood — from mid-century modern homes in{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> to luxury estates in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and commercial properties in{' '}
        <NavLink to='/century-city'>Century City.</NavLink> Our experience
        across diverse property types means we can handle whatever your ev
        chargers project requires.
      </>,
      <>
        Ready to get started? <a href='tel:+13106664752'>Call (310) 666-4752</a>{' '}
        for a free estimate, or{' '}
        <NavLink to='/contact'>request a quote online.</NavLink> We look forward
        to earning your trust and delivering the quality electrical work your
        property deserves.
      </>,
    ],
  };

  const recents = {
    title: 'Recent EV Charger Installations',
    subtitle:
      'See our completed EV charger installations across West Los Angeles. We install Tesla Wall Connectors, ChargePoint, and all major EV brands.',
    features: [
      {
        image: TeslaWallConnector,
        name: 'Tesla Wall Connector Install',
        location: 'Santa Monica, CA',
      },
      {
        image: Level2Charger,
        name: 'Level 2 Charger Installation',
        location: 'Pacific Palisades, CA',
      },
      {
        image: ResidentialEV,
        name: 'Residential EV Station',
        location: 'Brentwood, CA',
      },
    ],
  };

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

  const faqs = [
    {
      question: 'Do I need a panel upgrade for an EV charger?',
      answer:
        "It depends on your current panel capacity. Most Level 2 chargers require a 40-60 amp dedicated circuit. We'll assess your panel during the consultation.",
    },
    {
      question: 'Which EV chargers do you install?',
      answer:
        'We install all major brands including Tesla Wall Connector, ChargePoint, JuiceBox, Grizzl-E, Emporia, and more.',
    },
    {
      question: 'How long does installation take?',
      answer:
        'Most EV charger installations are completed in 2-4 hours. If a panel upgrade is needed, it may take a full day.',
    },
  ];

  const areas = {
    title: 'EV Chargers Across West LA',
    subtitle:
      'We provide ev charger installation services throughout West Los Angeles and surrounding communities. Click your area to learn more.',
  };

  const related = [
    {
      icon: <Zap />,
      title: 'Panel Upgrades',
      subtitle: 'View Panel Upgrades details',
      slug: 'panel-upgrades-service',
    },
    {
      icon: <BuildingComplex />,
      title: 'Construction',
      subtitle: 'View Construction details',
      slug: 'construction-service',
    },
    {
      icon: <GitGraph />,
      title: 'Subpanels',
      subtitle: 'View Subpanels details',
      slug: 'subpanels-service',
    },
    {
      icon: <Camera />,
      title: 'Security Cameras',
      subtitle: 'View Security Cameras details',
      slug: 'security-cameras-service',
    },
  ];
  return (
    <div>
      <ServiceHero hero={hero} />
      <TrustBadges />
      <div className='servicedetail_layout'>
        <div className='servicedetail_left'>
          <ServiceBenefits benefits={benefits} />
          <ServiceDetails
            fullDescription={fullDescription}
            expectationsDescription={expectationsDescription}
            featuresDescription={featuresDescription}
            safetyDescription={safetyDescription}
            coverageDescription={coverageDescription}
          />
        </div>
        <div className='servicedetail_sidebar'>
          <ServicesSidebar />
        </div>
      </div>
      <RecentProjects recents={recents} />
      <ServiceProcess featuresDescription={featuresDescription} />
      <Testimonials reviews={reviews} />
      <ServiceFAQ faqs={faqs} />
      <ServiceAreasGrid areas={areas} />
      <RelatedServices related={related} />
      <Footer />
    </div>
  );
}

export default EVCharger;
