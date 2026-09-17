import '../../../components/service-detail-page/ServiceDetailLayout.css';

import {
  BatteryCharging,
  BuildingComplex,
  Camera,
  GitGraph,
  Zap,
} from 'lucide-react';
import ServiceHero from '../../../components/service-detail-page/ServiceHero/ServiceHero';

import ElectricalPanel from '../../../assets/panel-framing.webp';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';
import ServiceBenefits from '../../../components/service-detail-page/ServiceBenefits/ServiceBenefits';
import { NavLink } from 'react-router-dom';
import ServiceDetails from '../../../components/service-detail-page/ServiceDetails/ServiceDetails';
import ServiceProcess from '../../../components/service-detail-page/ServiceProcess/ServiceProcess';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import Footer from '../../../components/Footer/Footer';
import ServicesSidebar from '../../../components/Shared/ServicesSidebar/ServicesSidebar';
import ServiceFAQ from '../../../components/service-detail-page/ServiceFAQ/ServiceFAQ';
import ServiceAreasGrid from '../../../components/service-detail-page/ServiceAreasGrid/ServiceAreasGrid';
import RelatedServices from '../../../components/service-detail-page/RelatedServices/RelatedServices';

function PanelUpgrades() {
  const hero = {
    icon: <Zap />,
    title: 'Electrical Panel Upgrades',
    subtitle:
      "Is your electrical panel outdated, overloaded, or unable to keep up with modern demands? Brentwood Electrical Experts provides professional electrical panel upgrades across West LA, Santa Monica, Brentwood, and surrounding communities. We upgrade 100-amp panels to 200-amp or higher, ensuring your home or business can safely handle today's electrical loads — from EV chargers to HVAC systems to smart home setups.",
    backgroundImage: ElectricalPanel,
  };

  const benefits = {
    features: [
      'Safely handle increased electrical loads',
      'Prevent circuit overloads and tripped breakers',
      'Meet current electrical code requirements',
      'Support EV charger and HVAC installations',
      'Increase property value and safety',
      'Reduce risk of electrical fires',
    ],
    image: ElectricalPanel,
  };

  const fullDescription = {
    title: 'Electrical Panel Upgrades in West Los Angeles',
    paragraphs: [
      <>
        At Brentwood Electrical Experts, we understand that electrical panel
        upgrades is more than just technical work — it's about ensuring the
        safety, comfort, and value of your property. As a fully{' '}
        <NavLink to='/about'>
          licensed and insured electrical contractor
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>, we
        bring years of hands-on experience and a commitment to excellence to
        every panel upgrades project we take on.
      </>,

      <>
        Whether you're a homeowner in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink> looking for a routine panel
        upgrades service, a business owner in{' '}
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
        and businesses have trusted us with their panel upgrades needs — and why
        they keep coming back. See our{' '}
        <NavLink to='/reviews'>customer reviews</NavLink> or{' '}
        <NavLink to='/contact'>request a free estimate.</NavLink>
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Panel Upgrades Service',
    paragraphs: [
      <>
        When you choose Brentwood Electrical Experts for your panel upgrades
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
    title: 'Our Panel Upgrades Process — Step by Step',
    features: [
      {
        title: 'Inspection',
        subtitle:
          'We assess your current panel, wiring, and electrical load requirements.',
      },
      {
        title: 'Recommendation',
        subtitle:
          'We provide a detailed upgrade plan with transparent, upfront pricing.',
      },
      {
        title: 'Permitting',
        subtitle: 'We handle all required city permits and inspections.',
      },
      {
        title: 'Installation',
        subtitle:
          'Our licensed electricians complete the upgrade safely and efficiently.',
      },
      {
        title: 'Testing & Verification',
        subtitle:
          'We test every circuit and verify code compliance before completion.',
      },
    ],
  };

  const safetyDescription = {
    title: 'Safety, Code Compliance & Quality Materials',
    paragraphs: [
      <>
        Safety is the foundation of everything we do. Every panel upgrades
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
    title: 'Panel Upgrades Across West Los Angeles',
    paragraphs: [
      <>
        We proudly provide panel upgrades services to homeowners and businesses
        throughout West Los Angeles and the surrounding communities. Whether
        you're located in <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/locations'>28+ communities we serve</NavLink>, our team is
        ready to help with your panel upgrades project.
      </>,
      <>
        We understand the unique characteristics of homes and businesses in each
        neighborhood — from mid-century modern homes in{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> to luxury estates in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and commercial properties in{' '}
        <NavLink to='/century-city'>Century City.</NavLink> Our experience
        across diverse property types means we can handle whatever your panel
        upgrades project requires.
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
      question: 'How do I know if I need a panel upgrade?',
      answer:
        "Common signs include frequently tripped breakers, flickering lights, burning smells near the panel, or if your home still has a 100-amp panel and you're adding major appliances or an EV charger.",
    },
    {
      question: 'How long does a panel upgrade take?',
      answer:
        'Most residential panel upgrades are completed in one day. Commercial upgrades may take longer depending on the scope.',
    },
    {
      question: 'Do I need a permit for a panel upgrade?',
      answer:
        'Yes — panel upgrades require city permits and inspections. We handle all permitting as part of our service.',
    },
  ];

  const areas = {
    title: 'Panel Upgrades Across West LA',
    subtitle:
      'We provide electrical panel upgrades services throughout West Los Angeles and surrounding communities. Click your area to learn more.',
  };

  const related = [
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
      <Testimonials reviews={reviews} />
      <ServiceFAQ faqs={faqs} />
      <ServiceAreasGrid areas={areas} />
      <RelatedServices related={related} />
      <Footer />
    </div>
  );
}

export default PanelUpgrades;
