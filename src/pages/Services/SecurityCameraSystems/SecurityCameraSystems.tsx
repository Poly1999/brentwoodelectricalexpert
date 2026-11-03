import '../../../components/service-detail-page/ServiceDetailLayout.css';

import {
  BatteryCharging,
  BuildingComplex,
  Cable,
  Camera,
  CheckCircle2,
  Clock,
  GitGraph,
  Home,
  MapPin,
  Shield,
  Smartphone,
  Star,
  Zap,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

import Footer from '../../../components/Footer/Footer';
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

import SecurityCamera from '../../../assets/security-camera-hero.webp';

import SecurityCameraSetup from '../../../assets/securitycamera-0347.webp';
import CCTVSystemInstall from '../../../assets/securitycamera-0351.webp';
import SurveillanceInstall from '../../../assets/securitycamera-0352.webp';

function SecurityCameraSystems() {
  const hero = {
    icon: <Camera />,
    title: 'Hardwired 4K Security Camera & PoE Surveillance Systems',
    subtitle:
      'Safeguard your residential estate, commercial building, or multi-unit property with professional surveillance infrastructure. Brentwood Electrical Experts engineers and installs hardwired 4K IP security cameras, Power-over-Ethernet (PoE) NVR storage networks, and weather-resistant perimeter monitoring across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles.',
    backgroundImage: SecurityCamera,
    button: 'Request Camera Estimate',
  };

  const badges = {
    items: [
      'C-10 Licensed & Insured (#1102731)',
      'Zero-Drop Cat6 PoE Cabling',
      'Encrypted Mobile Remote Viewing',
      'Concealed Attic & Soffit Routing',
    ],
    icons: [<Shield />, <Cable />, <Smartphone />, <Home />],
  };

  const benefits = {
    title: 'Advantages of Professional Hardwired Surveillance',
    features: [
      '24/7 Continuous Recording: Uninterrupted local NVR storage with zero Wi-Fi dropouts or monthly cloud fees.',
      'Ultra-HD 4K Optics & Color Night Vision: Crisp, high-resolution video capture in total darkness and harsh glare.',
      'Encrypted Mobile & Desktop Access: Live streaming and instant motion alerts directly to your smartphone from anywhere.',
      'Active Deterrence & Vandal Resistance: Strategic camera placement and weatherproof metal housings to stop intruders.',
      'Concealed Professional Wiring: Clean Cat6 cable routing through attics, crawlspaces, and conduit with zero exposed wires.',
      'Multi-Zone Perimeter Coverage: Comprehensive blind-spot elimination for gates, driveways, entries, and backyards.',
    ],
    image: SecurityCamera,
  };

  const fullDescription = {
    title: 'Commercial-Grade Security Camera Installation in West Los Angeles',
    paragraphs: [
      <>
        Reliable property protection relies on secure, hardwired surveillance
        networks rather than unstable battery-powered Wi-Fi cameras that fail
        when hackers jam signals or batteries die. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts runs dedicated low-voltage cabling and
        installs high-definition surveillance systems built for permanent
        reliability.
      </>,

      <>
        Whether you need to secure a hillside estate in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>, protect a retail
        storefront or commercial parking lot in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>, or monitor a
        multi-family apartment property in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> and West LA, our
        licensed team designs custom camera layouts tailored to your exact
        property lines.
      </>,

      <>
        Every camera installation begins with a comprehensive site audit to
        eliminate blind spots, followed by a clear, itemized flat-rate proposal.
        We deploy commercial-grade Power-over-Ethernet (PoE) cameras, shielded
        Cat6 cabling, secure Network Video Recorders (NVRs) with massive local
        hard drive storage, and robust surge protection to shield your equipment
        from coastal lightning or power spikes.
      </>,

      <>
        From clean attic wire-fishing to mobile app configuration and motion
        zone calibration, we handle your entire surveillance setup in-house.
        Read our verified <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>
          book your free on-site security assessment
        </NavLink>{' '}
        today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Security Camera Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed electricians who treat your property with absolute care. We
        never run messy, exposed surface wires across your stucco or baseboards,
        we never use low-quality cameras that suffer from lens fogging, and we
        ensure your network is completely secure before we leave.
      </>,

      <>
        Your installation starts with a{' '}
        <NavLink to='/contact'>thorough property walk-through</NavLink>. A
        licensed C-10 technician evaluates your entry points, lighting
        conditions, and line-of-sight requirements, helping you select the ideal
        camera resolution, field of view, and storage capacity. We explain our
        routing approach in plain language and provide a transparent written
        estimate before any work begins.
      </>,

      <>
        We know that drilling and wiring can feel intrusive, which is why our
        crew prioritizes keeping your home or business spotless. We use
        specialized fish tools and protective drop cloths, route all Cat6 cables
        discreetly through attics or exterior conduit, and configure your mobile
        monitoring app so you can view crystal-clear feeds instantly from your
        phone.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Security Cameras Process — Step by Step',
    features: [
      {
        title: 'Site Survey & Blind-Spot Audit',
        subtitle:
          'We inspect your property layout to determine ideal camera angles, lighting conditions, and coverage zones.',
      },
      {
        title: 'System Architecture & Proposal',
        subtitle:
          'We specify commercial-grade 4K PoE cameras, NVR storage size, and provide an upfront flat-rate quote.',
      },
      {
        title: 'Concealed Cat6 & Mounting',
        subtitle:
          'We fish shielded network cabling through attics or conduit, mount weatherproof housings, and terminate connections.',
      },
      {
        title: 'NVR Setup & Mobile App Integration',
        subtitle:
          'We configure local recording schedules, AI motion zones, and secure smartphone remote viewing.',
      },
    ],
  };

  const safetyDescription = {
    title: 'Low-Voltage NEC Compliance, Surge Protection & Commercial Hardware',
    paragraphs: [
      <>
        Even low-voltage security systems must adhere to strict safety
        standards. Every camera installation we complete complies fully with the
        National Electrical Code (NEC) governing low-voltage data cabling,
        pathway penetrations, and fire-rated wall barriers across Los Angeles
        (LADBS), Santa Monica, Beverly Hills, and Culver City. We ensure proper
        grounding to protect your NVR and camera power supplies from electrical
        surges and lightning strikes.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed surveillance
        hardware featuring marine-grade aluminum housings, IP67 weatherproof
        seals, and advanced low-light optical sensors. From copper-clad shielded
        Cat6 cable to enterprise-class hard drives built for 24/7 video writing,
        every component is chosen for extreme durability in coastal and hillside
        environments.
      </>,

      <>
        Because video surveillance technology and cybersecurity protocols
        advance rapidly, our technicians stay current on encrypted stream
        standards, local network security best practices, and intelligent AI
        object recognition—giving you a bulletproof security system you can
        trust.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly designs and installs security
        camera systems for residential and commercial clients across West Los
        Angeles. Whether your property is located in{' '}
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
        We understand the unique perimeter security needs of each
        neighborhood—from securing gated estates and long driveways in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink> to
        outfitting retail storefronts and office entryways in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/century-city'>Century City</NavLink>, and{' '}
        <NavLink to='/westwood'>Westwood</NavLink>.
      </>,
      <>
        Ready to protect your property with a professional surveillance setup?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate,
        or <NavLink to='/contact'>request your consultation online</NavLink>{' '}
        today.
      </>,
    ],
  };

  const detailsButtons = {
    call: 'Call for a Free Camera Estimate',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary camera assessment or submit your request online. Same-day consultations available.',
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
      title: 'Our 4-Step Camera Process',
      steps: featuresDescription.features,
    },
  };

  const recents = {
    title:
      'Featured Security Camera & Surveillance Installations Across West LA',
    subtitle:
      'Browse our recent 4K PoE and CCTV deployments for local homes and commercial properties.',
    features: [
      {
        image: SecurityCameraSetup,
        name: '4-Channel 4K PoE Surveillance System',
        location: 'West Los Angeles, CA',
      },
      {
        image: CCTVSystemInstall,
        name: 'Commercial Multi-Camera Retail Security Network',
        location: 'Santa Monica, CA',
      },
      {
        image: SurveillanceInstall,
        name: 'Estate Perimeter IP Camera & NVR Installation',
        location: 'Beverly Hills, CA',
      },
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Security Camera Installations',
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
        'Do you install wired (PoE) security cameras or wireless battery cameras?',
      answer:
        'We specialize exclusively in professional, hardwired Power-over-Ethernet (PoE) IP camera systems. Hardwired PoE systems provide continuous 24/7 recording, crystal-clear 4K resolution, zero Wi-Fi dropouts, and immunity to wireless signal jamming or drained batteries—making them far more reliable than consumer wireless cameras.',
    },
    {
      question:
        'Can I view my security cameras remotely from my smartphone or computer?',
      answer:
        'Yes. We configure secure, encrypted remote viewing apps on your smartphone, tablet, or desktop computer. You can watch live camera feeds, review recorded footage on your local NVR hard drive, and receive instant AI motion alerts wherever you are in the world.',
    },
  ];

  const areas = {
    title: 'Security Camera Installation Across West LA',
    subtitle:
      'We engineer and install surveillance networks across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
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
    title: 'Ready to Secure Your Property?',
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or book your camera estimate online.',
  };

  return (
    <div>
      <title>
        Hardwired Security Camera & PoE Surveillance Install West LA | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrician (#1102731) installing commercial-grade 4K PoE IP security cameras, local NVR storage & concealed cable routing in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
      />
      <ServiceHero hero={hero} />
      <TrustBadges badges={badges} />
      <div className='servicedetail_layout'>
        <div className='servicedetail_left'>
          <ServiceBenefits benefits={benefits} />
          <ServiceDetails
            fullDescription={fullDescription}
            expectationsDescription={expectationsDescription}
            featuresDescription={featuresDescription}
            safetyDescription={safetyDescription}
            coverageDescription={coverageDescription}
            detailsButtons={detailsButtons}
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

export default SecurityCameraSystems;
