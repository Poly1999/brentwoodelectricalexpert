import {
  BatteryCharging,
  BuildingComplex,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  CloudRain,
  GitGraph,
  Lightbulb,
  MapPin,
  Shield,
  Star,
  Zap,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

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

import SecurityLightingInstallation from '../../../assets/security-lighting-floodlight.jpg';

function SecurityLighting() {
  const hero = {
    icon: <Lightbulb />,
    title: 'Exterior Security Lighting & Perimeter Floodlight Installation',
    subtitle:
      'Eliminate dark blind spots and protect your property with professionally engineered exterior lighting. Brentwood Electrical Experts designs and installs motion-activated LED floodlights, dusk-to-dawn photocell sensors, and architectural perimeter illumination across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles.',
    backgroundImage: SecurityLightingInstallation,
    button: 'Request Security Lighting Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Turnkey Permits & Inspection',
      'Weather-Resistant Coastal Fixtures',
    ],
    icons: [<Star />, <ClipboardCheck />, <CloudRain />],
  };

  const benefits = {
    title: 'Key Advantages of Professional Security Lighting',
    features: [
      'Deter intruders and trespassers instantly with high-output motion-activated lighting',
      'Illuminates dark walkways, side yards, driveways, and blind entry points',
      'High-efficiency LED options to maximize brightness while lowering energy consumption',
      'Smart automation controls including astronomical timers, photocells, and app integration',
      'Marine-grade, corrosion-resistant coastal fixtures built to withstand Westside elements',
      'Concealed professional wiring and watertight conduit penetrations',
    ],
    image: SecurityLightingInstallation,
  };

  const fullDescription = {
    title:
      'Professional Security Lighting Engineering & Installation in West Los Angeles',
    paragraphs: [
      <>
        Dark perimeters, unlit side yards, and shadowed entryways leave
        residential estates and commercial buildings vulnerable to trespassers.
        As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts designs and installs high-performance
        exterior security lighting systems tailored to your property lines.
      </>,

      <>
        Whether you need motion-sensor floodlights installed along a hillside
        property in <NavLink to='/brentwood'>Brentwood</NavLink>, dusk-to-dawn
        pathway and parking illumination for a commercial space in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>, or architectural
        security lighting for a gated estate in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> and{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>, our
        licensed team ensures precise placement and clean wiring.
      </>,

      <>
        Every security lighting project begins with an on-site property
        evaluation to identify vulnerable dark zones, followed by an itemized,
        transparent written proposal. We run exterior-grade UF cable or THHN
        wire through watertight PVC/EMT conduit, seal all structural
        penetrations, and install heavy-duty fixtures that withstand coastal
        marine moisture.
      </>,

      <>
        From fixture mounting to sensor calibration and smart timer setup, your
        security lighting project is handled completely in-house. Read our
        verified <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>
          book your exterior lighting consultation
        </NavLink>{' '}
        today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Security Lighting Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed electrical professionals who treat your property with absolute
        care. We never cut corners on outdoor junction box sealing, we never use
        low-quality fixtures that fail in coastal salt air, and we ensure every
        motion sensor is precisely aimed to prevent false triggers.
      </>,

      <>
        Your service starts with a thorough{' '}
        <NavLink to='/contact'>on-site property walk-through</NavLink>. A
        licensed C-10 electrician inspects your existing exterior electrical
        feeds, identifies dark blind spots around your perimeters, and
        recommends the ideal floodlight lumens, beam spreads, and control
        switches. We explain your lighting options in plain language and provide
        a transparent written estimate before any work begins.
      </>,

      <>
        Electrical work can feel disruptive, which is why our crew prioritizes
        keeping your landscaping and interior spaces spotless. We arrive on
        schedule, protect your turf and stucco, route outdoor conduit discreetly
        along eaves or underground, and test every motion sensor and photocell
        before completing our cleanup.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Security Lighting Process — Step by Step',
    features: [
      {
        title: 'Security & Dark-Zone Assessment',
        subtitle:
          "We evaluate your property's perimeter layout to pinpoint vulnerable blind spots and lighting requirements.",
      },
      {
        title: 'Lighting Plan & Proposal',
        subtitle:
          'We design a custom security lighting layout specifying fixture types, sensor ranges, and flat-rate pricing.',
      },
      {
        title: 'Watertight Wiring & Installation',
        subtitle:
          'We run dedicated exterior circuits, mount corrosion-resistant fixtures, and seal all wall penetrations.',
      },
      {
        title: 'Sensor Calibration & Testing',
        subtitle:
          'We test all floodlights, program dusk-to-dawn photocells, and adjust motion sensor sensitivity.',
      },
    ],
  };

  const safetyDescription = {
    title:
      'NEC Code Compliance, Wet-Location Seals & Commercial-Grade Hardware',
    paragraphs: [
      <>
        Electrical safety and strict weatherproofing standards are
        non-negotiable for exterior installations. Every security lighting
        project we complete complies fully with the National Electrical Code
        (NEC) regarding wet-location receptacle boxes, in-use covers, outdoor
        conduit sealing, and branch circuit protection across Los Angeles
        (LADBS), Santa Monica, Beverly Hills, and Culver City. We pull all
        necessary building permits to protect your property investment.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed outdoor fixtures
        and components from trusted manufacturers including Hubbell, WAC
        Lighting, RAB Lighting, and Leviton. From marine-grade die-cast aluminum
        housings and tempered glass lenses to precision passive infrared (PIR)
        motion detectors, every part is chosen for long-term coastal durability.
      </>,

      <>
        Because outdoor lighting technology and smart home automation evolve
        continuously, our technicians stay current on the latest
        energy-efficient LED drivers and astronomical timer controls—ensuring
        your security system operates reliably year-round.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly installs exterior security lighting
        for homeowners and businesses across West Los Angeles. Whether your
        property is located in <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>
          28+ Greater LA communities we serve
        </NavLink>
        , our local crew is ready to assist.
      </>,
      <>
        We understand the specific perimeter security challenges of Westside
        properties—from lighting long, winding driveways and hillside canyons in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink> to securing
        commercial alleyways and multi-family parking lots in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/century-city'>Century City</NavLink>, and{' '}
        <NavLink to='/westwood'>Westwood</NavLink>.
      </>,
      <>
        Ready to illuminate and protect your property?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate,
        or <NavLink to='/contact'>request your consultation online</NavLink>{' '}
        today.
      </>,
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Exterior Security Lighting',
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
        'What type of security lights do you recommend for Westside homes and businesses?',
      answer:
        'We recommend commercial-grade, energy-efficient LED motion-sensor floodlights combined with photocell sensors (dusk-to-dawn automation). LEDs provide maximum lumen output with minimal energy draw, while motion sensors actively deter intruders by instantly flooding dark zones with bright light when movement is detected.',
    },
    {
      question:
        'Can security lighting be added to my existing electrical circuits?',
      answer:
        'In many cases, yes. During our initial visit, we evaluate your existing outdoor switch legs or garage circuits to see if they can support new fixtures. If your security lighting plan requires high-output commercial floodloads, we can easily run a dedicated new home-run circuit from your main panel to ensure zero breaker overloading.',
    },
  ];

  const areas = {
    title: 'Security Lighting Installation Across West LA',
    subtitle:
      'We engineer and install exterior floodlights across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const detailsButtons = {
    call: 'Call for a Security Lighting Estimate',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary security lighting assessment or request a quote online. Same-day consultations available.',
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
      title: 'Our 4-Step Security Lighting Process',
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
    title: 'Ready to Illuminate Your Property?',
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or book your security lighting estimate online.',
  };

  return (
    <div>
      <title>
        Exterior Security Lighting & Floodlight Installation West LA | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrician (#1102731) installing motion-sensor floodlights, photocell dusk-to-dawn controls & perimeter security lighting in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
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
      <ServiceProcess featuresDescription={featuresDescription} />
      <Testimonials reviews={reviews} />
      <ServiceFAQ faqs={faqs} />
      <ServiceAreasGrid areas={areas} />
      <RelatedServices related={related} />
      <Footer footer={footer} />
    </div>
  );
}

export default SecurityLighting;
