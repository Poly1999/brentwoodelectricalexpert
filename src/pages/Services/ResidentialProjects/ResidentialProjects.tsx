import {
  BatteryCharging,
  BuildingComplex,
  CheckCircle2,
  Clock,
  DollarSign,
  GitGraph,
  House,
  MapPin,
  Shield,
  Sparkles,
  Star,
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
    title: 'Licensed Residential Electrical Services in West LA',
    subtitle:
      'Protect and modernize your home with expert residential electrical services. Brentwood Electrical Experts delivers safe, code-compliant electrical repairs, whole-home rewiring, panel upgrades, and custom lighting installations across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles.',
    backgroundImage: ResidentialServices,
    button: 'Request Residential Estimate',
  };

  const badges = {
    items: [
      'C-10 Licensed & Insured (#1102731)',
      'Same-Day Priority Dispatch',
      'Flat-Rate Upfront Quotes',
      'Clean Drop-Cloth Service',
    ],
    icons: [<Shield />, <Clock />, <DollarSign />, <Sparkles />],
  };

  const benefits = {
    title: 'Advantages of Our Residential Electrical Services',
    features: [
      'Comprehensive Home Solutions: From minor switch replacements to full-scale residential rewiring and heavy-up upgrades.',
      "State-Certified C-10 Experts: Licensed, bonded, and insured professionals carrying full liability and workers' comp coverage.",
      'Transparent Flat-Rate Pricing: Clear, itemized written estimates with zero surprise add-ons or hidden fees.',
      'Same-Day & Priority Dispatch: Rapid response across West LA for tripped breakers, flickering lights, and power outages.',
      'Strict NEC & Title 24 Compliance: Guaranteed adherence to the latest safety codes and municipal building regulations.',
      'Spotless Property Respect: Protective shoe covers, heavy-duty drop cloths, and thorough jobsite cleanup.',
    ],
    image: ResidentialServices,
  };

  const fullDescription = {
    title: 'Trusted Residential Electricians Across West Los Angeles',
    paragraphs: [
      <>
        Your home's electrical grid powers everything from your daily comfort to
        your family's safety. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts provides reliable, code-compliant
        residential electrical solutions tailored to the unique architecture of
        Westside homes.
      </>,

      <>
        Whether you need a routine safety inspection for a mid-century property
        in <NavLink to='/brentwood'>Brentwood</NavLink>, a complete electrical
        rewire for a historic home in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>, or custom lighting
        and panel upgrades for a modern estate in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> and{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>, our
        licensed team has the expertise to handle your project right the first
        time.
      </>,

      <>
        Every residential call begins with a thorough diagnostic assessment and
        a clear, flat-rate written proposal. We use only commercial-grade,
        UL-listed materials from trusted brands like Siemens, Square D, and
        Eaton, ensuring long-term durability and absolute safety.
      </>,

      <>
        From initial consultation through final testing and cleanup, you will
        experience the difference of working with a team that values your time
        and property. Read our verified{' '}
        <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>schedule your residential service</NavLink>{' '}
        today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Residential Electrical Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed professionals who treat your home with meticulous care. We
        never cut corners on wire sizing or grounding, we never rush through
        troubleshooting, and we stand behind every repair and upgrade we
        complete.
      </>,

      <>
        Your service starts the moment you{' '}
        <NavLink to='/contact'>reach out</NavLink>. A knowledgeable team member
        walks you through your options and schedules a convenient on-site
        assessment. During the evaluation, our licensed C-10 electrician
        diagnoses your electrical issue, explains the best repair or upgrade
        approach in plain English, and provides a transparent written estimate
        before any work begins.
      </>,

      <>
        We know that electrical repairs can feel disruptive, which is why our
        crew prioritizes keeping your household running smoothly. We arrive on
        schedule, protect your flooring with heavy-duty drop cloths, work
        efficiently, and leave your space immaculate. We keep you informed at
        every step so you always know what is happening.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Residential Process — Step by Step',
    features: [
      {
        title: 'Call or Online Request',
        subtitle:
          'Contact our office by phone or submit your details online to schedule a convenient appointment.',
      },
      {
        title: 'On-Site Diagnosis & Quote',
        subtitle:
          'We inspect your electrical issue, explain the repair options, and provide a clear, flat-rate estimate.',
      },
      {
        title: 'Professional Execution',
        subtitle:
          'Our C-10 licensed electricians complete the repair or installation safely using commercial-grade parts.',
      },
      {
        title: 'Circuit Testing & Cleanup',
        subtitle:
          'We test every circuit under load, verify code compliance, and leave your home spotless.',
      },
    ],
  };

  const safetyDescription = {
    title: 'NEC Code Compliance, Permits & Commercial-Grade Materials',
    paragraphs: [
      <>
        Electrical safety is the foundation of our business. Every residential
        repair and installation we perform strictly adheres to the latest
        National Electrical Code (NEC) standards as well as all local municipal
        building codes across Los Angeles (LADBS), Santa Monica, Beverly Hills,
        and Culver City. We pull all required building permits, manage city
        inspections, and ensure your home's electrical system is fully
        compliant—protecting your family and property investment.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed hardware and
        wiring components from trusted manufacturers including Siemens, Square
        D, Leviton, and Eaton. From heavy-duty copper conductors and
        tamper-resistant receptacles to whole-home surge arrestors and AFCI/GFCI
        breakers, every component is selected for superior performance and
        safety.
      </>,

      <>
        Because electrical codes and smart home technologies update
        continuously, our electricians receive ongoing training on emerging
        standards, energy efficiency, and safety best practices—ensuring your
        home always receives the most up-to-date care.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly provides residential electrical
        services to homeowners throughout West Los Angeles and surrounding
        communities. Whether you live in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>
          28+ Greater LA neighborhoods we serve
        </NavLink>
        , our local crew is ready to help.
      </>,
      <>
        We understand the unique electrical needs of diverse Westside
        architecture—from modernizing 1950s wiring in traditional homes across{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> and{' '}
        <NavLink to='/west-los-angeles'>West LA</NavLink> to servicing luxury
        custom estates in <NavLink to='/bel-air'>Bel Air</NavLink> and{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>.
      </>,
      <>
        Ready to get started? <a href='tel:+13106664752'>Call (310) 666-4752</a>{' '}
        for a free estimate, or{' '}
        <NavLink to='/contact'>book your residential service online</NavLink>{' '}
        today.
      </>,
    ],
  };

  const recents = {
    title: 'Featured Residential Electrical Projects Across West LA',
    subtitle:
      'Browse our recent home rewiring, panel upgrades, and lighting installations.',
    features: [
      {
        image: PanelUpgrade,
        name: '100A to 200A Residential Panel Upgrade',
        location: 'West Los Angeles, CA',
      },
      {
        image: InteriorWiring,
        name: 'Kitchen Remodel & Dedicated Appliance Wiring',
        location: 'Santa Monica, CA',
      },
      {
        image: ElectricalService,
        name: 'Whole-Home Surge Protector & Grounding Upgrade',
        location: 'Pacific Palisades, CA',
      },
      {
        image: HomeWiring,
        name: 'Custom Estate Architectural Lighting Installation',
        location: 'Brentwood, CA',
      },
      {
        image: NewInstallation,
        name: 'Smart Home Lutron Dimmer & Keypad Retrofit',
        location: 'Beverly Hills, CA',
      },
      {
        image: RepairsUpdates,
        name: 'GFCI Safety Receptacle & Outlet Modernization',
        location: 'Mar Vista, CA',
      },
      {
        image: CompleteRewire,
        name: 'Full-Home Cloth-Wire Rewire & Panel Replacement',
        location: 'Bel Air, CA',
      },
      {
        image: FullService,
        name: 'Townhouse Subpanel & EV Charger Circuit Installation',
        location: 'Century City, CA',
      },
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Residential Electrical Services',
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
        'Do you offer same-day and emergency service for residential electrical issues?',
      answer:
        'Yes. We offer priority same-day dispatch and emergency troubleshooting across our entire West LA service territory for urgent electrical problems such as tripped main breakers, burning odors, sparking outlets, and partial power outages.',
    },
    {
      question:
        'Are your electricians fully licensed, bonded, and insured in California?',
      answer:
        "Yes. Brentwood Electrical Experts is an active California C-10 Electrical Contractor (CSLB License #1102731). We carry comprehensive general liability insurance and workers' compensation coverage to fully protect your residential property during every project.",
    },
  ];

  const areas = {
    title: 'Residential Electrical Services Across West LA',
    subtitle:
      'We deliver dependable home electrical repairs and upgrades across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const detailsButtons = {
    call: 'Call for a Residential Estimate',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary home evaluation or schedule service online. Same-day appointments available.',
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
      title: 'Our 4-Step Residential Process',
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
    title: "Ready to Service Your Home's Electrical System?",
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or book your residential estimate online.',
  };

  return (
    <div>
      <title>
        Residential Electrician West LA & Santa Monica | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 residential electrician (#1102731) providing whole-home rewiring, panel upgrades, lighting & troubleshooting in Brentwood, Santa Monica, Beverly Hills & West LA. Call (310) 666-4752.'
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

export default ResidentialProjects;
