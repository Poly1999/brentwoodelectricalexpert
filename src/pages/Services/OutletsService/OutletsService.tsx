import {
  BatteryCharging,
  BuildingComplex,
  GitGraph,
  Plug,
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
    title: 'Outlets & GFCI Installation',
    subtitle:
      'Need additional outlets, USB outlets, or GFCI protection in kitchens, bathrooms, and outdoor areas? Brentwood Electrical Experts installs and upgrades electrical outlets throughout West LA. We ensure every installation meets current NEC code requirements for safety and convenience.',
    backgroundImage: OutletsInstallation,
  };

  const benefits = {
    features: [
      'Add outlets where you need them most',
      'GFCI protection for kitchens, bathrooms, and outdoors',
      'USB outlet upgrades for modern convenience',
      'Tamper-resistant outlets for child safety',
      'Code-compliant installations',
      'Clean, professional finish',
    ],
    image: OutletsInstallation,
  };

  const fullDescription = {
    title: 'Outlets & GFCI Installation in West Los Angeles',
    paragraphs: [
      <>
        At Brentwood Electrical Experts, we understand that outlets & gfci
        installation is more than just technical work — it's about ensuring the
        safety, comfort, and value of your property. As a fully{' '}
        <NavLink to='/about'>
          licensed and insured electrical contractor
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>, we
        bring years of hands-on experience and a commitment to excellence to
        every outlets & gfci project we take on.
      </>,

      <>
        Whether you're a homeowner in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink> looking for a routine
        outlets & gfci service, a business owner in{' '}
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
        and businesses have trusted us with their outlets & gfci needs — and why
        they keep coming back. See our{' '}
        <NavLink to='/reviews'>customer reviews</NavLink> or{' '}
        <NavLink to='/contact'>request a free estimate.</NavLink>
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Outlets & GFCI Service',
    paragraphs: [
      <>
        When you choose Brentwood Electrical Experts for your outlets & gfci
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
    title: 'Our Outlets & GFCI Process — Step by Step',
    features: [
      {
        title: 'Assessment',
        subtitle:
          'We identify where new outlets are needed and check circuit capacity.',
      },
      {
        title: 'Installation',
        subtitle: 'We install outlets with proper wiring and grounding.',
      },
      {
        title: 'Testing',
        subtitle:
          'We test every outlet for proper voltage, grounding, and GFCI function.',
      },
    ],
  };

  const safetyDescription = {
    title: 'Safety, Code Compliance & Quality Materials',
    paragraphs: [
      <>
        Safety is the foundation of everything we do. Every outlets & gfci
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
    title: 'Outlets & GFCI Across West Los Angeles',
    paragraphs: [
      <>
        We proudly provide outlets & gfci services to homeowners and businesses
        throughout West Los Angeles and the surrounding communities. Whether
        you're located in <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>28+ communities we serve</NavLink>, our team is
        ready to help with your outlets & gfci project.
      </>,
      <>
        We understand the unique characteristics of homes and businesses in each
        neighborhood — from mid-century modern homes in{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> to luxury estates in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and commercial properties in{' '}
        <NavLink to='/century-city'>Century City.</NavLink> Our experience
        across diverse property types means we can handle whatever your outlets
        & gfci project requires.
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
    title: 'Recent Outlet & GFCI Projects',
    subtitle:
      'Professional outlet installations and GFCI upgrades across West Los Angeles.',
    features: [
      {
        image: GFCIOutletInstallation,
        name: 'GFCI Outlet Installation',
        location: 'Brentwood',
      },
      {
        image: USBOutletUpgrade,
        name: 'USB Outlet Upgrade',
        location: 'Santa Monica',
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
      question: 'Where are GFCI outlets required?',
      answer:
        'GFCI outlets are required in kitchens, bathrooms, garages, outdoor areas, laundry rooms, and within 6 feet of any water source per NEC code.',
    },
    {
      question: 'Can you add outlets to rooms without tearing up walls?',
      answer:
        'In many cases, yes. We use professional techniques to minimize wall damage when running new wiring.',
    },
  ];

  const areas = {
    title: 'Outlets & GFCI Across West LA',
    subtitle:
      'We provide outlets & gfci installation services throughout West Los Angeles and surrounding communities. Click your area to learn more.',
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
      <RecentProjects recents={recents} />
      <Testimonials reviews={reviews} />
      <ServiceFAQ faqs={faqs} />
      <ServiceAreasGrid areas={areas} />
      <RelatedServices related={related} />
      <Footer />
    </div>
  );
}

export default OutletsService;
