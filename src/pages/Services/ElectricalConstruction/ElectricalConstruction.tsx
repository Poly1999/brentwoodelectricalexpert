import '../../../components/service-detail-page/ServiceDetailLayout.css';

import {
  BatteryCharging,
  BuildingComplex,
  Camera,
  GitGraph,
  Zap,
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

import ConsrtactionPanels from '../../../assets/construction-panels.jpg';

import ServiceHero from '../../../components/service-detail-page/ServiceHero/ServiceHero';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';
import ServiceBenefits from '../../../components/service-detail-page/ServiceBenefits/ServiceBenefits';
import ServiceDetails from '../../../components/service-detail-page/ServiceDetails/ServiceDetails';
import ServicesSidebar from '../../../components/Shared/ServicesSidebar/ServicesSidebar';
import ServiceProcess from '../../../components/service-detail-page/ServiceProcess/ServiceProcess';

import CommercialWiring from '../../../assets/commercial-1.webp';
import NewConstruction from '../../../assets/commercial-2.webp';
import Installation from '../../../assets/commercial-3.webp';
import ElectricalService from '../../../assets/commercial-4.webp';
import BuildOutWiring from '../../../assets/commercial-5.webp';
import PanelWork from '../../../assets/commercial-6.webp';
import TenantImprovement from '../../../assets/commercial-7.webp';
import LightingInstallation from '../../../assets/commercial-8.webp';
import RetailWiring from '../../../assets/commercial-9.jpg';
import OfficeBuildOut from '../../../assets/commercial-10.jpg';

import NewBuildElectrical from '../../../assets/electrical-1.webp';
import WiringCommercial from '../../../assets/electrical-2.webp';
import PanelInstallation from '../../../assets/electrical-3.webp';
import ConstructionWiring from '../../../assets/electrical-4.webp';
import CommercialElectrical from '../../../assets/electrical-5.webp';
import ConstructionNew from '../../../assets/electrical-6.jpg';
import ElectricalProject from '../../../assets/electrical-7.jpg';

import KitchenRemodel from '../../../assets/remodeling-3017.webp';
import BathroomWiring from '../../../assets/remodeling-3242.webp';
import FullHomeRemodel from '../../../assets/remodeling-7498.webp';
import RoomAddition from '../../../assets/remodeling-8152.webp';
import RecentProjects from '../../../components/service-detail-page/RecentProjects/RecentProjects';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import ServiceFAQ from '../../../components/service-detail-page/ServiceFAQ/ServiceFAQ';
import ServiceAreasGrid from '../../../components/service-detail-page/ServiceAreasGrid/ServiceAreasGrid';
import RelatedServices from '../../../components/service-detail-page/RelatedServices/RelatedServices';
import Footer from '../../../components/Footer/Footer';

function ElectricalConstruction() {
  const hero = {
    icon: <BuildingComplex />,
    title: 'Electrical Construction',
    subtitle:
      'From new construction wiring to tenant improvements and full-scale electrical buildouts, Brentwood Electrical Experts delivers comprehensive electrical construction services across West Los Angeles. We work with general contractors, property developers, and homeowners to deliver safe, code-compliant electrical systems on schedule and on budget.',
    backgroundImage: ConsrtactionPanels,
  };

  const benefits = {
    features: [
      'Complete electrical system design and installation',
      'Code-compliant rough-in and finish work',
      'Coordination with GCs and other trades',
      'Commercial and residential construction',
      'Permit acquisition and inspection management',
      'On-time, on-budget delivery',
    ],
    image: ConsrtactionPanels,
  };

  const fullDescription = {
    title: 'Electrical Construction in West Los Angeles',
    paragraphs: [
      <>
        At Brentwood Electrical Experts, we understand that electrical
        construction is more than just technical work — it's about ensuring the
        safety, comfort, and value of your property. As a fully{' '}
        <NavLink to='/about'>
          licensed and insured electrical contractor
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>, we
        bring years of hands-on experience and a commitment to excellence to
        every construction project we take on.
      </>,

      <>
        Whether you're a homeowner in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink> looking for a routine
        constraction service, a business owner in{' '}
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
        and businesses have trusted us with their construction needs — and why
        they keep coming back. See our{' '}
        <NavLink to='/reviews'>customer reviews</NavLink> or{' '}
        <NavLink to='/contact'>request a free estimate.</NavLink>
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Construction Service',
    paragraphs: [
      <>
        When you choose Brentwood Electrical Experts for your construction
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
    title: 'Our Construction Process — Step by Step',
    features: [
      {
        title: 'Plan Review',
        subtitle:
          'We review architectural plans and develop the electrical layout.',
      },
      {
        title: 'Permitting',
        subtitle: 'We obtain all required electrical permits.',
      },
      {
        title: 'Rough-In',
        subtitle:
          'We install all wiring, boxes, and conduit before walls are closed.',
      },
      {
        title: 'Finish Work',
        subtitle:
          'We install fixtures, devices, panels, and all finish electrical.',
      },
      {
        title: 'Final Inspection',
        subtitle:
          'We coordinate city inspections and ensure full code compliance.',
      },
    ],
  };

  const safetyDescription = {
    title: 'Safety, Code Compliance & Quality Materials',
    paragraphs: [
      <>
        Safety is the foundation of everything we do. Every construction project
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
    title: 'Construction Across West Los Angeles',
    paragraphs: [
      <>
        We proudly provide construction services to homeowners and businesses
        throughout West Los Angeles and the surrounding communities. Whether
        you're located in <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/locations'>28+ communities we serve</NavLink>, our team is
        ready to help with your construction project.
      </>,
      <>
        We understand the unique characteristics of homes and businesses in each
        neighborhood — from mid-century modern homes in{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> to luxury estates in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and commercial properties in{' '}
        <NavLink to='/century-city'>Century City.</NavLink> Our experience
        across diverse property types means we can handle whatever your
        constraction project requires.
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
    title: 'Recent Commercial & Remodeling Projects',
    subtitle:
      'See our completed commercial and remodeling electrical work across West Los Angeles.',
    features: [
      {
        image: CommercialWiring,
        name: 'Commercial Wiring',
        location: 'West LA',
      },
      {
        image: NewConstruction,
        name: 'New Construction',
        location: 'Santa Monica',
      },
      {
        image: Installation,
        name: 'Installation',
        location: 'Century City',
      },
      {
        image: ElectricalService,
        name: 'Electrical Service',
        location: 'Beverly Hills',
      },
      {
        image: BuildOutWiring,
        name: 'Build-Out Wiring',
        location: 'Brentwood',
      },
      {
        image: PanelWork,
        name: 'Panel Work',
        location: 'Mar Vista',
      },
      {
        image: TenantImprovement,
        name: 'Tenant Improvement',
        location: 'Pacific Palisades',
      },
      {
        image: LightingInstallation,
        name: 'Lighting Installation',
        location: 'West Hollywood',
      },
      {
        image: RetailWiring,
        name: 'Retail Wiring',
        location: 'Bel Air',
      },
      {
        image: OfficeBuildOut,
        name: 'Office Build-Out',
        location: 'Westwood',
      },
      {
        image: NewBuildElectrical,
        name: 'New Build Electrical',
        location: 'West LA',
      },
      {
        image: WiringCommercial,
        name: 'Commercial Wiring',
        location: 'Santa Monica',
      },
      {
        image: PanelInstallation,
        name: 'Panel Installation',
        location: 'Century City',
      },
      {
        image: ConstructionWiring,
        name: 'Construction Wiring',
        location: 'Beverly Hills',
      },
      {
        image: CommercialElectrical,
        name: 'Commercial Electrical',
        location: 'Brentwood',
      },
      {
        image: ConstructionNew,
        name: 'New Construction',
        location: 'Mar Vista',
      },
      {
        image: ElectricalProject,
        name: 'Electrical Project',
        location: 'Pacific Palisades',
      },
      {
        image: KitchenRemodel,
        name: 'Kitchen Remodel',
        location: 'West LA',
      },
      {
        image: BathroomWiring,
        name: 'Bathroom Wiring',
        location: 'Santa Monica',
      },
      {
        image: FullHomeRemodel,
        name: 'Full Home Remodel',
        location: 'Pacific Palisades',
      },
      {
        image: RoomAddition,
        name: 'Room Addition',
        location: 'Brentwood',
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
      question: 'Do you work with general contractors?',
      answer:
        'Yes — we regularly partner with GCs on residential and commercial construction projects throughout West LA.',
    },
    {
      question: 'Can you handle large commercial projects?',
      answer:
        'Absolutely. We have the team, licensing, and experience to handle projects of all sizes.',
    },
    {
      question: 'Do you handle permits?',
      answer:
        'Yes, we manage all permitting and inspections as part of every construction project.',
    },
  ];

  const areas = {
    title: 'Construction Across West LA',
    subtitle:
      'We provide electrical construction services throughout West Los Angeles and surrounding communities. Click your area to learn more.',
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

export default ElectricalConstruction;
