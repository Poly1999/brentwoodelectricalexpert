import '../../../components/service-detail-page/ServiceDetailLayout.css';
import {
  BatteryCharging,
  BuildingComplex,
  GitGraph,
  SunMedium,
  Zap,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

import ServiceHero from '../../../components/service-detail-page/ServiceHero/ServiceHero';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';
import ServiceBenefits from '../../../components/service-detail-page/ServiceBenefits/ServiceBenefits';
import ServiceDetails from '../../../components/service-detail-page/ServiceDetails/ServiceDetails';
import ServicesSidebar from '../../../components/Shared/ServicesSidebar/ServicesSidebar';
import ServiceProcess from '../../../components/service-detail-page/ServiceProcess/ServiceProcess';
import RecentProjects from '../../../components/service-detail-page/RecentProjects/RecentProjects';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import ServiceFAQ from '../../../components/service-detail-page/ServiceFAQ/ServiceFAQ';
import ServiceAreasGrid from '../../../components/service-detail-page/ServiceAreasGrid/ServiceAreasGrid';
import RelatedServices from '../../../components/service-detail-page/RelatedServices/RelatedServices';
import Footer from '../../../components/Footer/Footer';

import LightingDesignInstallation from '../../../assets/lightdesign-4023.webp';

function LightingDesign() {
  const hero = {
    icon: <SunMedium />,
    title: 'Lighting Design & Installation',
    subtitle:
      'Elevate your home or business with custom lighting design and professional installation. Brentwood Electrical Experts creates beautiful, functional lighting plans that enhance ambiance, improve energy efficiency, and add value to your property across West LA and surrounding communities.',
    backgroundImage: LightingDesignInstallation,
  };

  const benefits = {
    features: [
      'Custom lighting design for any space',
      'Layered lighting for ambiance and function',
      'Energy-efficient LED solutions',
      'Dimmer and smart control integration',
      'Indoor and outdoor lighting design',
      'Increase property value and curb appeal',
    ],
    image: LightingDesignInstallation,
  };

  const fullDescription = {
    title: 'Lighting Design & Installation in West Los Angeles',
    paragraphs: [
      <>
        At Brentwood Electrical Experts, we understand that lighting design &
        installation is more than just technical work — it's about ensuring the
        safety, comfort, and value of your property. As a fully{' '}
        <NavLink to='/about'>
          licensed and insured electrical contractor
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>, we
        bring years of hands-on experience and a commitment to excellence to
        every lighting design project we take on.
      </>,

      <>
        Whether you're a homeowner in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink> looking for a routine
        lighting design service, a business owner in{' '}
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
        and businesses have trusted us with their lighting design needs — and
        why they keep coming back. See our{' '}
        <NavLink to='/reviews'>customer reviews</NavLink> or{' '}
        <NavLink to='/contact'>request a free estimate.</NavLink>
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Lighting Design Service',
    paragraphs: [
      <>
        When you choose Brentwood Electrical Experts for your lighting design
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
    title: 'Our Lighting Design Process — Step by Step',
    features: [
      {
        title: 'Design Consultation',
        subtitle: 'We discuss your vision, preferences, and functional needs.',
      },
      {
        title: 'Lighting Plan',
        subtitle:
          'We create a detailed lighting layout with fixture recommendations.',
      },
      {
        title: 'Installation',
        subtitle:
          'We professionally install all fixtures, wiring, and controls.',
      },
      {
        title: 'Final Walkthrough',
        subtitle:
          'We demonstrate all controls and ensure your complete satisfaction.',
      },
    ],
  };

  const safetyDescription = {
    title: 'Safety, Code Compliance & Quality Materials',
    paragraphs: [
      <>
        Safety is the foundation of everything we do. Every lighting design
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
    title: 'Lighting Design Across West Los Angeles',
    paragraphs: [
      <>
        We proudly provide lighting design services to homeowners and businesses
        throughout West Los Angeles and the surrounding communities. Whether
        you're located in <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/locations'>28+ communities we serve</NavLink>, our team is
        ready to help with your lighting design project.
      </>,
      <>
        We understand the unique characteristics of homes and businesses in each
        neighborhood — from mid-century modern homes in{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> to luxury estates in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and commercial properties in{' '}
        <NavLink to='/century-city'>Century City.</NavLink> Our experience
        across diverse property types means we can handle whatever your lighting
        design project requires.
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
      question: 'Do you design landscape lighting too?',
      answer:
        'Yes — we design and install both interior and exterior lighting, including landscape, pathway, and architectural lighting.',
    },
    {
      question: 'Can you integrate lighting with smart home systems?',
      answer:
        'Absolutely. We can integrate your lighting with smart home platforms for voice and app control.',
    },
  ];

  const areas = {
    title: 'Lighting Design Across West LA',
    subtitle:
      'We provide lighting design & installation services throughout West Los Angeles and surrounding communities. Click your area to learn more.',
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
      <Testimonials reviews={reviews} />
      <ServiceFAQ faqs={faqs} />
      <ServiceAreasGrid areas={areas} />
      <RelatedServices related={related} />
      <Footer />
    </div>
  );
}

export default LightingDesign;
