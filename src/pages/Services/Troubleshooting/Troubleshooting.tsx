import '../../../components/service-detail-page/ServiceDetailLayout.css';
import { NavLink } from 'react-router-dom';
import {
  BatteryCharging,
  BuildingComplex,
  GitGraph,
  Search,
  Zap,
} from 'lucide-react';

import ServiceHero from '../../../components/service-detail-page/ServiceHero/ServiceHero';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';
import ServiceBenefits from '../../../components/service-detail-page/ServiceBenefits/ServiceBenefits';
import ServiceDetails from '../../../components/service-detail-page/ServiceDetails/ServiceDetails';
import RecentProjects from '../../../components/service-detail-page/RecentProjects/RecentProjects';
import RelatedServices from '../../../components/service-detail-page/RelatedServices/RelatedServices';
import ServiceAreasGrid from '../../../components/service-detail-page/ServiceAreasGrid/ServiceAreasGrid';
import ServiceFAQ from '../../../components/service-detail-page/ServiceFAQ/ServiceFAQ';
import ServiceProcess from '../../../components/service-detail-page/ServiceProcess/ServiceProcess';
import ServicesSidebar from '../../../components/Shared/ServicesSidebar/ServicesSidebar';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import Footer from '../../../components/Footer/Footer';

import ElectricalTroubleshooting from '../../../assets/troubleshoot-1650.webp';

import CircuitDiagnosis from '../../../assets/troubleshoot-5660.webp';
import WiringInspection from '../../../assets/troubleshoot-1650.webp';
import ElectricalRepair from '../../../assets/troubleshoot-9661.webp';
import PanelTroubleshooting from '../../../assets/troubleshoot-9272.webp';
import FaultDetection from '../../../assets/troubleshoot-2028.webp';
import ElectricalTesting from '../../../assets/troubleshoot-6923.webp';

function Troubleshooting() {
  const hero = {
    icon: <Search />,
    title: 'Electrical Troubleshooting',
    subtitle:
      'Experiencing flickering lights, tripping breakers, dead outlets, or mysterious electrical issues? Brentwood Electrical Experts provides expert electrical troubleshooting and diagnostics across West LA, Santa Monica, and surrounding areas. We find and fix the root cause — not just the symptoms.',
    backgroundImage: ElectricalTroubleshooting,
  };

  const benefits = {
    features: [
      'Expert diagnosis of electrical problems',
      'Fix the root cause, not just symptoms',
      'Fast response and same-day service',
      'Prevent fire hazards and safety risks',
      'Upfront pricing before any work begins',
      'Licensed and experienced electricians',
    ],
    image: ElectricalTroubleshooting,
  };

  const fullDescription = {
    title: 'Electrical Troubleshooting in West Los Angeles',
    paragraphs: [
      <>
        At Brentwood Electrical Experts, we understand that electrical
        troubleshooting is more than just technical work — it's about ensuring
        the safety, comfort, and value of your property. As a fully{' '}
        <NavLink to='/about'>
          licensed and insured electrical contractor
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>, we
        bring years of hands-on experience and a commitment to excellence to
        every troubleshooting project we take on.
      </>,

      <>
        Whether you're a homeowner in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink> looking for a routine
        troubleshooting service, a business owner in{' '}
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
        and businesses have trusted us with their troubleshooting needs — and
        why they keep coming back. See our{' '}
        <NavLink to='/reviews'>customer reviews</NavLink> or{' '}
        <NavLink to='/contact'>request a free estimate.</NavLink>
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Troubleshooting Service',
    paragraphs: [
      <>
        When you choose Brentwood Electrical Experts for your troubleshooting
        needs, you're choosing a team that treats every job — big or small —
        with the same level of professionalism, care, and attention to detail.
        We don't cut corners, we don't rush through projects, and we never leave
        a job until it's done right.
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
    title: 'Our Troubleshooting Process — Step by Step',
    features: [
      {
        title: 'Describe the Issue',
        subtitle: "Tell us what's happening — we'll ask the right questions.",
      },
      {
        title: 'Diagnosis',
        subtitle:
          'We use professional testing equipment to identify the root cause.',
      },
      {
        title: 'Solution & Pricing',
        subtitle:
          'We explain the issue and provide upfront pricing for the repair.',
      },
      {
        title: 'Repair',
        subtitle: 'We fix the problem and verify proper operation.',
      },
    ],
  };

  const safetyDescription = {
    title: 'Safety, Code Compliance & Quality Materials',
    paragraphs: [
      <>
        Safety is the foundation of everything we do. Every troubleshooting
        project we complete meets or exceeds the latest National Electrical Code
        (NEC) standards as well as all local building codes for the{' '}
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
    title: 'Troubleshooting Across West Los Angeles',
    paragraphs: [
      <>
        We proudly provide troubleshooting services to homeowners and businesses
        throughout West Los Angeles and the surrounding communities. Whether
        you're located in <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/locations'>28+ communities we serve</NavLink>, our team is
        ready to help with your troubleshooting project.
      </>,
      <>
        We understand the unique characteristics of homes and businesses in each
        neighborhood — from mid-century modern homes in{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> to luxury estates in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and commercial properties in{' '}
        <NavLink to='/century-city'>Century City.</NavLink> Our experience
        across diverse property types means we can handle whatever your
        troubleshooting project requires.
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
    title: 'Recent Electrical Troubleshooting Projects',
    subtitle:
      'Diagnosing and resolving electrical issues across West Los Angeles homes and businesses.',
    features: [
      {
        image: CircuitDiagnosis,
        name: 'Circuit Diagnosis',
        location: 'Brentwood',
      },
      {
        image: WiringInspection,
        name: 'Wiring Inspection',
        location: 'Santa Monica',
      },
      {
        image: ElectricalRepair,
        name: 'Electrical Repair',
        location: 'Pacific Palisades',
      },
      {
        image: PanelTroubleshooting,
        name: 'Panel Troubleshooting',
        location: 'West LA',
      },
      {
        image: FaultDetection,
        name: 'Fault Detection',
        location: 'Beverly Hills',
      },
      {
        image: ElectricalTesting,
        name: 'Electrical Testing',
        location: 'Bel Air',
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
      question: 'Why do my breakers keep tripping?',
      answer:
        "Common causes include overloaded circuits, short circuits, ground faults, or a failing breaker. We'll diagnose the exact cause and fix it.",
    },
    {
      question: 'Is a flickering light dangerous?',
      answer:
        'It can be. Flickering may indicate loose wiring, an overloaded circuit, or a failing connection — all of which can be fire hazards. We recommend having it inspected promptly.',
    },
  ];

  const areas = {
    title: 'Troubleshooting Across West LA',
    subtitle:
      'We provide electrical troubleshooting services throughout West Los Angeles and surrounding communities. Click your area to learn more.',
  };

  const related = [
    {
      icon: <Zap />,
      title: 'Panel Upgrades',
      subtitle: 'View Panel Upgrades details',
      slug: 'panel-upgrades-service',
    },
    {
      icon: <BatteryCharging />,
      title: 'EV Chargers',
      subtitle: 'View EV Chargers details',
      slug: 'ev-chargers-service',
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
      <ServiceProcess featuresDescription={featuresDescription} />
      <RecentProjects recents={recents} columns={3} />
      <Testimonials reviews={reviews} />
      <ServiceFAQ faqs={faqs} />
      <ServiceAreasGrid areas={areas} />
      <RelatedServices related={related} />
      <Footer />
    </div>
  );
}

export default Troubleshooting;
