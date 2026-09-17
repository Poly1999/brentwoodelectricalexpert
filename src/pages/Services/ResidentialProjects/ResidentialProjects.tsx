import {
  BatteryCharging,
  BuildingComplex,
  GitGraph,
  House,
  Zap,
} from 'lucide-react';
import '../../../components/service-detail-page/ServiceDetailLayout.css';

import ResidentialServices from '../../../assets/residential-work.webp';
import { NavLink } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import RelatedServices from '../../../components/service-detail-page/RelatedServices/RelatedServices';
import ServiceAreasGrid from '../../../components/service-detail-page/ServiceAreasGrid/ServiceAreasGrid';
import ServiceFAQ from '../../../components/service-detail-page/ServiceFAQ/ServiceFAQ';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import ServiceProcess from '../../../components/service-detail-page/ServiceProcess/ServiceProcess';
import RecentProjects from '../../../components/service-detail-page/RecentProjects/RecentProjects';
import ServicesSidebar from '../../../components/Shared/ServicesSidebar/ServicesSidebar';
import ServiceDetails from '../../../components/service-detail-page/ServiceDetails/ServiceDetails';
import ServiceBenefits from '../../../components/service-detail-page/ServiceBenefits/ServiceBenefits';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';
import ServiceHero from '../../../components/service-detail-page/ServiceHero/ServiceHero';

import PanelUpgrade from '../../../assets/residential-new-1.webp';
import InteriorWiring from '../../../assets/residential-new-2.webp';
import ElectricalService from '../../../assets/residential-new-3.webp';
import HomeWiring from '../../../assets/residential-new-4.webp';
import NewInstallation from '../../../assets/residential-new-5.webp';
import RepairsUpdates from '../../../assets/residential-new-6.webp';
import CompleteRewire from '../../../assets/residential-new-7.jpg';
import FullService from '../../../assets/residential-new-8.jpg';

function ResidentialProjects() {
  const hero = {
    icon: <House />,
    title: 'Residential Electrical Services',
    subtitle:
      'Brentwood Electrical Experts provides comprehensive residential electrical services for homes across West LA, Santa Monica, Brentwood, Pacific Palisades, and surrounding communities. From simple repairs to complete home rewiring, our licensed electricians deliver safe, reliable, and code-compliant electrical work.',
    backgroundImage: ResidentialServices,
  };

  const benefits = {
    features: [
      'Complete home electrical services',
      'Licensed, insured, and experienced',
      'Upfront pricing with no surprises',
      'Same-day and emergency service available',
      'Code-compliant work guaranteed',
      'Clean, respectful service',
    ],
    image: ResidentialServices,
  };

  const fullDescription = {
    title: 'Residential Electrical Services in West Los Angeles',
    paragraphs: [
      <>
        At Brentwood Electrical Experts, we understand that residential
        electrical services is more than just technical work — it's about
        ensuring the safety, comfort, and value of your property. As a fully{' '}
        <NavLink to='/about'>
          licensed and insured electrical contractor
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>, we
        bring years of hands-on experience and a commitment to excellence to
        every residential project we take on.
      </>,

      <>
        Whether you're a homeowner in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink> looking for a routine
        residential service, a business owner in{' '}
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
        and businesses have trusted us with their residential needs — and why
        they keep coming back. See our{' '}
        <NavLink to='/reviews'>customer reviews</NavLink> or{' '}
        <NavLink to='/contact'>request a free estimate.</NavLink>
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Residential Service',
    paragraphs: [
      <>
        When you choose Brentwood Electrical Experts for your residential needs,
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
    title: 'Our Residential Process — Step by Step',
    features: [
      {
        title: 'Call or Request Service',
        subtitle: 'Contact us by phone or through our online form.',
      },
      {
        title: 'Assessment',
        subtitle: 'We diagnose the issue and provide upfront pricing.',
      },
      {
        title: 'Service',
        subtitle:
          'Our licensed electricians complete the work safely and efficiently.',
      },
      {
        title: 'Verification',
        subtitle: 'We test everything and clean up before we leave.',
      },
    ],
  };

  const safetyDescription = {
    title: 'Safety, Code Compliance & Quality Materials',
    paragraphs: [
      <>
        Safety is the foundation of everything we do. Every residential project
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
    title: 'Residential Across West Los Angeles',
    paragraphs: [
      <>
        We proudly provide residential services to homeowners and businesses
        throughout West Los Angeles and the surrounding communities. Whether
        you're located in <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/locations'>28+ communities we serve</NavLink>, our team is
        ready to help with your residential project.
      </>,
      <>
        We understand the unique characteristics of homes and businesses in each
        neighborhood — from mid-century modern homes in{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> to luxury estates in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and commercial properties in{' '}
        <NavLink to='/century-city'>Century City.</NavLink> Our experience
        across diverse property types means we can handle whatever your
        residential project requires.
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
    title: 'Recent Residential Projects',
    subtitle:
      'See our completed residential electrical work across West Los Angeles. From panel upgrades to lighting installations, we deliver quality workmanship.',
    features: [
      {
        image: PanelUpgrade,
        name: 'Panel Upgrade',
        location: 'West LA,',
      },
      {
        image: InteriorWiring,
        name: 'Interior Wiring',
        location: 'Santa Monica',
      },
      {
        image: ElectricalService,
        name: 'Electrical Service',
        location: 'Pacific Palisades',
      },
      {
        image: HomeWiring,
        name: 'Home Wiring',
        location: 'Brentwood',
      },
      {
        image: NewInstallation,
        name: 'New Installation',
        location: 'Beverly Hills',
      },
      {
        image: RepairsUpdates,
        name: 'Repairs & Updates',
        location: 'Mar Vista',
      },
      {
        image: CompleteRewire,
        name: 'Complete Rewire',
        location: 'Bel Air',
      },
      {
        image: FullService,
        name: 'Full Service',
        location: 'Century City',
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
      question: 'Do you offer same-day service?',
      answer:
        'Yes — we offer same-day service for most residential electrical needs. Call us to check availability.',
    },
    {
      question: 'Are your electricians licensed?',
      answer:
        'Yes — all of our electricians are fully licensed, insured, and background-checked.',
    },
  ];

  const areas = {
    title: 'Residential Across West LA',
    subtitle:
      'We provide residential electrical services services throughout West Los Angeles and surrounding communities. Click your area to learn more.',
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

export default ResidentialProjects;
