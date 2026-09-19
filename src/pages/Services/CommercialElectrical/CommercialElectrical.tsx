import {
  BatteryCharging,
  BuildingComplex,
  GitGraph,
  Store,
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

import CommercialElectricalServices from '../../../assets/commercial-framing.webp';

import CommercialWiring from '../../../assets/commercial-1.webp';
import TenantImprovement from '../../../assets/commercial-2.webp';
import OfficeElectrical from '../../../assets/commercial-3.webp';
import RetailBuildOut from '../../../assets/commercial-4.webp';
import CommercialPanelWork from '../../../assets/commercial-5.webp';
import ElectricalService from '../../../assets/commercial-6.webp';
import RestaurantWiring from '../../../assets/commercial-7.webp';
import LightingRetrofit from '../../../assets/commercial-8.webp';
import CommercialFraming from '../../../assets/commercial-framing.webp';
import CommercialLighting from '../../../assets/commercial-lighting.jpg';
import RetailElectrical from '../../../assets/commercial-9.jpg';
import OfficeBuildOut from '../../../assets/commercial-10.jpg';

function CommercialElectrical() {
  const hero = {
    icon: <Store />,
    title: 'Commercial Electrical Services',
    subtitle:
      'Brentwood Electrical Experts delivers professional commercial electrical services for offices, retail spaces, restaurants, and commercial properties across West Los Angeles. We handle tenant improvements, electrical buildouts, lighting retrofits, and ongoing maintenance for businesses of all sizes.',
    backgroundImage: CommercialElectricalServices,
  };

  const benefits = {
    features: [
      'Tenant improvement electrical work',
      'Commercial lighting installation and retrofit',
      'Electrical system maintenance and repair',
      'Code compliance and safety inspections',
      'Minimal disruption to business operations',
      'Licensed and insured commercial electricians',
    ],
    image: CommercialElectricalServices,
  };

  const fullDescription = {
    title: 'Commercial Electrical Services in West Los Angeles',
    paragraphs: [
      <>
        At Brentwood Electrical Experts, we understand that commercial
        electrical services is more than just technical work — it's about
        ensuring the safety, comfort, and value of your property. As a fully{' '}
        <NavLink to='/about'>
          licensed and insured electrical contractor
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>, we
        bring years of hands-on experience and a commitment to excellence to
        every commercial project we take on.
      </>,

      <>
        Whether you're a homeowner in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink> looking for a routine
        commercial service, a business owner in{' '}
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
        and businesses have trusted us with their commercial needs — and why
        they keep coming back. See our{' '}
        <NavLink to='/reviews'>customer reviews</NavLink> or{' '}
        <NavLink to='/contact'>request a free estimate.</NavLink>
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Commercial Service',
    paragraphs: [
      <>
        When you choose Brentwood Electrical Experts for your commercial needs,
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
    title: 'Our Commercial Process — Step by Step',
    features: [
      {
        title: 'Consultation',
        subtitle:
          'We review your commercial electrical needs and project scope.',
      },
      {
        title: 'Proposal',
        subtitle: 'We provide a detailed proposal with transparent pricing.',
      },
      {
        title: 'Execution',
        subtitle:
          'We complete the work on schedule with minimal business disruption.',
      },
      {
        title: 'Inspection',
        subtitle:
          'We ensure full code compliance and coordinate required inspections.',
      },
    ],
  };

  const safetyDescription = {
    title: 'Safety, Code Compliance & Quality Materials',
    paragraphs: [
      <>
        Safety is the foundation of everything we do. Every commercial project
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
    title: 'Commercial Across West Los Angeles',
    paragraphs: [
      <>
        We proudly provide commercial services to homeowners and businesses
        throughout West Los Angeles and the surrounding communities. Whether
        you're located in <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/locations'>28+ communities we serve</NavLink>, our team is
        ready to help with your commercial project.
      </>,
      <>
        We understand the unique characteristics of homes and businesses in each
        neighborhood — from mid-century modern homes in{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> to luxury estates in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and commercial properties in{' '}
        <NavLink to='/century-city'>Century City.</NavLink> Our experience
        across diverse property types means we can handle whatever your
        commercial project requires.
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
    title: 'Recent Commercial Electrical Projects',
    subtitle:
      'See our completed commercial electrical work across West Los Angeles — from tenant improvements and lighting retrofits to full electrical buildouts.',
    features: [
      {
        image: CommercialWiring,
        name: 'Commercial Wiring',
        location: 'West LA',
      },
      {
        image: TenantImprovement,
        name: 'Tenant Improvement',
        location: 'Santa Monica',
      },
      {
        image: OfficeElectrical,
        name: 'Office Electrical',
        location: 'Century City',
      },
      {
        image: RetailBuildOut,
        name: 'Retail Build-Out',
        location: 'Beverly Hills',
      },
      {
        image: CommercialPanelWork,
        name: 'Commercial Panel Work',
        location: 'Brentwood',
      },
      {
        image: ElectricalService,
        name: 'Electrical Service',
        location: 'Mar Vista',
      },
      {
        image: RestaurantWiring,
        name: 'Restaurant Wiring',
        location: 'Pacific Palisades',
      },
      {
        image: LightingRetrofit,
        name: 'Lighting Retrofit',
        location: 'West Hollywood',
      },
      {
        image: CommercialFraming,
        name: 'Commercial Framing',
        location: 'Westwood',
      },
      {
        image: CommercialLighting,
        name: 'Commercial Lighting',
        location: 'Culver City',
      },
      {
        image: RetailElectrical,
        name: 'Retail Electrical',
        location: 'Bel Air',
      },
      {
        image: OfficeBuildOut,
        name: 'Office Build-Out',
        location: 'Venice',
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
      question: 'Do you work after business hours?',
      answer:
        'Yes — we offer after-hours and weekend scheduling to minimize disruption to your business.',
    },
    {
      question: 'Can you handle tenant improvement projects?',
      answer:
        'Absolutely. Tenant improvements are a core part of our commercial electrical services.',
    },
  ];

  const areas = {
    title: 'Commercial Across West LA',
    subtitle:
      'We provide commercial electrical services services throughout West Los Angeles and surrounding communities. Click your area to learn more.',
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
      slug: 'ev-charger-installation',
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

export default CommercialElectrical;
