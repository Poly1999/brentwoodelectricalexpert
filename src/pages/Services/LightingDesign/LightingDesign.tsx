import '../../../components/service-detail-page/ServiceDetailLayout.css';
import {
  BatteryCharging,
  BuildingComplex,
  CheckCircle2,
  Clock,
  Cpu,
  GitGraph,
  MapPin,
  Shield,
  SunMedium,
  Star,
  Target,
  Zap,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

import ServiceHero from '../../../components/service-detail-page/ServiceHero/ServiceHero';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';
import ServiceBenefits from '../../../components/service-detail-page/ServiceBenefits/ServiceBenefits';
import ServiceDetails from '../../../components/service-detail-page/ServiceDetails/ServiceDetails';
import ServicesSidebar from '../../../components/Shared/ServicesSidebar/ServicesSidebar';
import ServiceProcess from '../../../components/service-detail-page/ServiceProcess/ServiceProcess';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import ServiceFAQ from '../../../components/service-detail-page/ServiceFAQ/ServiceFAQ';
import ServiceAreasGrid from '../../../components/service-detail-page/ServiceAreasGrid/ServiceAreasGrid';
import RelatedServices from '../../../components/service-detail-page/RelatedServices/RelatedServices';
import Footer from '../../../components/Footer/Footer';

import LightingDesignInstallation from '../../../assets/lightdesign-4023.webp';

function LightingDesign() {
  const hero = {
    icon: <SunMedium />,
    title: 'Custom Architectural Lighting Design & Installation',
    subtitle:
      'Transform how your residential estate or commercial space looks and feels with precision lighting engineering. Brentwood Electrical Experts designs and installs layered architectural lighting plans, ultra-thin recessed LED systems, directional art-wall spots, and Lutron smart dimming controls across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles.',
    backgroundImage: LightingDesignInstallation,
    button: 'Request Lighting Consultation',
  };

  const badges = {
    items: [
      'C-10 Licensed & Insured (#1102731)',
      'Title 24 High-Efficacy LEDs',
      'Lutron Smart Scene Integration',
      'Laser-Aligned Installation',
    ],
    icons: [<Shield />, <Zap />, <Cpu />, <Target />],
  };

  const benefits = {
    title: 'Advantages of Custom Architectural Lighting Design',
    features: [
      'Photometric Room Layouts: Custom spacing and beam-angle planning to eliminate dark corners and harsh ceiling glare.',
      'Three-Layer Illumination: Balanced ambient recessed lighting, kitchen/office task strips, and directional artwork accents.',
      'High-CRI & Warm-Dim LEDs: True-color (90+ CRI) LED fixtures that smoothly transition from bright 3000K daylight to warm 1800K evening tones.',
      'Smart Dimmer & Keypad Integration: Seamless multi-zone control via Lutron Caséta, RadioRA 3, Control4, or TP-Link Kasa.',
      'Interior & Exterior Cohesion: Unified lighting plans connecting indoor living spaces with outdoor patios and landscapes.',
      'Architectural Property Value: Showcase high ceilings, custom millwork, stone surfaces, and fine art with museum-grade accuracy.',
    ],
    image: LightingDesignInstallation,
  };

  const fullDescription = {
    title:
      'Architectural Lighting Engineering & Installation in West Los Angeles',
    paragraphs: [
      <>
        Great lighting transforms architecture, while poorly spaced fixtures
        leave rooms feeling flat, shadowy, or overly harsh. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts combines creative photometric planning with
        precision electrical wiring to deliver custom lighting environments.
      </>,

      <>
        Whether you are modernizing a mid-century residence in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink> with trimless recessed LED
        downlights, designing high-impact retail or office illumination in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>, or installing
        centralized Lutron keypad scenes and fine-art spotlights in a{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> estate, our
        licensed crew handles every detail from design layout to final aiming.
      </>,

      <>
        Every lighting project begins with an on-site evaluation of your ceiling
        heights, natural daylight exposure, cabinetry, and electrical switching
        paths, followed by an itemized, flat-rate written proposal. We specify
        high-efficacy, flicker-free LED engines, concealed low-voltage LED tape
        channels, and compatible ELV/MLV dimmers that satisfy strict California
        Title 24 energy standards.
      </>,

      <>
        From laser-level recessed housing alignment with minimal drywall
        patching to multi-way smart dimmer programming, you get museum-quality
        execution. Read our verified{' '}
        <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>book your on-site lighting consultation</NavLink>{' '}
        today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Lighting Design & Installation Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed electrical professionals who treat your interior finishes and
        architectural details with meticulous care. We never guess on fixture
        spacing, we never mix incompatible LED drivers and dimmers that cause
        buzzing or flickering, and we align every ceiling cut to laser accuracy.
      </>,

      <>
        Your project begins with a{' '}
        <NavLink to='/contact'>collaborative on-site walk-through</NavLink>. A
        licensed C-10 electrician evaluates your room dimensions, ceiling joist
        framing, color temperature preferences (2700K, 3000K, or warm-dim), and
        wall switch locations. We walk you through fixture styles, trim
        profiles, and smart dimming options, providing a transparent written
        estimate before any work begins.
      </>,

      <>
        Installing new ceiling and wall lighting shouldn't turn your home into a
        dusty construction zone. Our technicians protect your furniture and
        hardwood floors with heavy-duty drop cloths, use dust-containment hole
        saws, fish wires cleanly through finished ceilings, and leave your space
        spotless.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Lighting Design Process — Step by Step',
    features: [
      {
        title: 'Architectural Walkthrough',
        subtitle:
          'We evaluate your room dimensions, ceiling heights, natural light, and aesthetic goals on-site.',
      },
      {
        title: 'Photometric Layout & Spec',
        subtitle:
          'We map exact fixture spacing, beam angles, color temperatures, and smart switching zones with flat-rate pricing.',
      },
      {
        title: 'Laser-Aligned Wiring & Mounting',
        subtitle:
          'Our C-10 electricians fish concealed wiring, mount recessed cans/fixtures, and install compatible dimmers.',
      },
      {
        title: 'Gimbal Aiming & Scene Programming',
        subtitle:
          'We focus directional spotlights, calibrate dimmer trim levels, and program your custom lighting scenes.',
      },
    ],
  };

  const safetyDescription = {
    title:
      'NEC Code Compliance, Title 24 Standards & Architectural-Grade Hardware',
    paragraphs: [
      <>
        Electrical safety and energy code compliance are built into every
        lighting plan we execute. Every installation we complete strictly
        adheres to the latest National Electrical Code (NEC), California Title
        24 JA8 high-efficacy lighting standards, and local municipal building
        codes across Los Angeles (LADBS), Santa Monica, Beverly Hills, and
        Culver City. We use IC-rated (insulation contact) airtight housings and
        fire-rated enclosures where required by code.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed lighting fixtures,
        low-voltage drivers, and dimming controls from premier manufacturers
        including Lutron, DMF, Halo, WAC Lighting, and Leviton. From anodized
        aluminum LED extrusion channels and Class 2 dimmable transformers to
        precision RF smart dimmers, every component is chosen for silent
        operation, zero flicker, and decades of thermal longevity.
      </>,

      <>
        Because solid-state LED optics and wireless lighting automation evolve
        rapidly, our technicians stay fully certified in the latest
        color-rendering technologies and smart home protocols—ensuring your
        property enjoys effortless, reliable illumination.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly provides custom lighting design and
        installation for homeowners, interior designers, and commercial
        businesses across West Los Angeles. Whether your property is in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>
          28+ Greater LA neighborhoods we serve
        </NavLink>
        , our local crew is ready to bring your vision to light.
      </>,
      <>
        We understand the architectural character of each Westside
        community—from gallery-style art lighting and vaulted ceiling
        chandeliers in <NavLink to='/bel-air'>Bel Air</NavLink> and{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, to warm coastal
        indoor-outdoor lighting in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink> and sleek commercial
        showroom illumination in{' '}
        <NavLink to='/century-city'>Century City</NavLink> and{' '}
        <NavLink to='/west-hollywood'>West Hollywood</NavLink>.
      </>,
      <>
        Ready to transform your space with custom lighting?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate,
        or{' '}
        <NavLink to='/contact'>request your design consultation online</NavLink>{' '}
        today.
      </>,
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Custom Lighting Design & Installation',
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
        'Do you design and install exterior architectural and landscape lighting too?',
      answer:
        'Yes. We design cohesive indoor-outdoor lighting plans that extend your interior ambiance out to your patios, trees, walkways, and architectural facades. We install solid brass low-voltage LED landscape systems, multi-tap stainless steel transformers, soffit downlights, and automated dusk-to-dawn timers.',
    },
    {
      question:
        'Can you integrate my new lighting layout with smart home systems like Lutron or Apple HomeKit?',
      answer:
        'Absolutely. We specialize in smart lighting control systems including Lutron Caséta, Lutron RadioRA 3, Control4, and TP-Link Kasa. You can control individual zones, set automated sunset schedules, and trigger custom one-touch "Entertaining" or "Goodnight" lighting scenes from engraved wall keypads, voice assistants (Alexa, Siri, Google Home), or your smartphone.',
    },
  ];

  const areas = {
    title: 'Custom Lighting Design & Installation Across West LA',
    subtitle:
      'We engineer and install architectural LED lighting across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const detailsButtons = {
    call: 'Call for a Lighting Consultation',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary lighting consultation or request a quote online. Same-day appointments available.',
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
      title: 'Our 4-Step Lighting Process',
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
    title: "Ready to Elevate Your Property's Lighting?",
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or schedule your lighting consultation online.',
  };

  return (
    <div>
      <title>
        Architectural Lighting Design & LED Installation West LA | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrical contractor (#1102731) specializing in custom architectural lighting design, recessed LED layouts, Lutron dimming & Title 24 solutions in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
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

export default LightingDesign;
