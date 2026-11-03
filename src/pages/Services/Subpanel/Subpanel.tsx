import {
  BatteryCharging,
  BuildingComplex,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  GitGraph,
  MapPin,
  Shield,
  Star,
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

import SubpanelInstallation from '../../../assets/subpanel-6398.webp';

import GarageSubpanel from '../../../assets/subpanel-7219.webp';
import ADUSubpanel from '../../../assets/subpanel-9347.webp';
import WorkshopSubpanel from '../../../assets/subpanel-6398.webp';
import HomeAddition from '../../../assets/subpanel-9286.webp';

function Subpanel() {
  const hero = {
    icon: <GitGraph />,
    title: 'Electrical Subpanel Installation & Power Expansion',
    subtitle:
      "Adding a backyard ADU, detached garage workshop, pool equipment pad, or primary suite addition? Brentwood Electrical Experts installs and bonds high-capacity feeder subpanels across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles—extending your property's power distribution safely without overcrowding your main breaker enclosure.",
    backgroundImage: SubpanelInstallation,
    button: 'Request Subpanel Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Turnkey City Permits & Inspection',
      'Proper Ground & Neutral Bonding',
    ],
    icons: [<Star />, <ClipboardCheck />, <Zap />],
  };

  const benefits = {
    title: 'Key Advantages of a Dedicated Subpanel',
    features: [
      'Extend circuit capacity to backyard ADUs, detached garages, and home additions',
      'Relieve busbar and breaker congestion in your primary service panel',
      'NEC-compliant four-wire feeder installation with isolated neutral and ground buses',
      'Support heavy-draw equipment including EV chargers, woodshop tools, and saunas',
      'Weatherproof NEMA 3R outdoor enclosures built for exterior marine and hillside elements',
      'Turnkey municipal building permitting and city electrical inspection management',
    ],
    image: SubpanelInstallation,
  };

  const fullDescription = {
    title:
      'Professional Subpanel Engineering & Installation in West Los Angeles',
    paragraphs: [
      <>
        When you remodel a primary suite, build a backyard Accessory Dwelling
        Unit (ADU), or convert a garage into a workshop, your existing main
        service panel often runs out of physical breaker spaces and ampacity
        headroom. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts engineers and installs properly sized,
        code-compliant feeder subpanels.
      </>,

      <>
        Whether you need a 60-amp or 100-amp subpanel for an ADU build in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>, a dedicated workshop
        power distribution box in <NavLink to='/brentwood'>Brentwood</NavLink>,
        or a pool and spa equipment subpanel in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> and{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>, our
        licensed team handles the entire installation to strict safety
        standards.
      </>,

      <>
        Every subpanel project begins with an on-site load assessment of your
        main service entrance, followed by an itemized, transparent written
        proposal. We run heavy-gauge copper or aluminum feeder conductors
        through schedule-80 PVC conduit (or overhead cable paths), drive
        dedicated grounding electrodes where required for detached structures,
        and ensure proper neutral-ground separation.
      </>,

      <>
        From trenching coordination to final municipal permit sign-off, your
        power expansion is handled completely in-house. Read our verified{' '}
        <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>book your subpanel assessment</NavLink> today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Subpanel Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed electrical professionals who treat your property with absolute
        care. We never cut corners on feeder wire gauge or lug torquing, we
        never compromise on grounding paths, and we ensure every new branch
        circuit is cleanly labeled.
      </>,

      <>
        Your installation starts with a thorough{' '}
        <NavLink to='/contact'>on-site evaluation</NavLink>. A licensed C-10
        electrician inspects your main service panel capacity, calculates the
        total connected load of your new zone, and determines the most efficient
        wire routing path. We explain your subpanel sizing options in plain
        language and provide a transparent written estimate before any work
        begins.
      </>,

      <>
        Electrical work can feel disruptive, which is why our crew prioritizes
        keeping your home or jobsite spotless. We arrive on schedule, protect
        your landscaping and interior floors, route conduit cleanly along fences
        or through crawlspaces, and test every circuit for voltage drop and
        breaker trip response before cleaning our workspace.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Subpanels Process — Step by Step',
    features: [
      {
        title: 'Load & Capacity Assessment',
        subtitle:
          'We evaluate your main service panel capacity and calculate total amperage demand for your new zone.',
      },
      {
        title: 'Feeder Design & Proposal',
        subtitle:
          'We design the subpanel layout, select wire gauge/breaker size, and provide transparent flat-rate pricing.',
      },
      {
        title: 'Conduit & Subpanel Installation',
        subtitle:
          'We mount the NEMA enclosure, pull feeder cables, run branch circuits, and install proper grounding rods if detached.',
      },
      {
        title: 'Load Testing & City Inspection',
        subtitle:
          'We test phase voltage under load, label all circuit directories, and pass final municipal building inspection.',
      },
    ],
  };

  const safetyDescription = {
    title: 'NEC Code Compliance, Grounding & Commercial-Grade Hardware',
    paragraphs: [
      <>
        Electrical safety and strict code adherence are the foundation of every
        subpanel we install. Every project we complete complies fully with the
        National Electrical Code (NEC) regarding four-wire feeder feeds,
        isolated neutral bars, equipment grounding conductors, and physical
        barrier clearances across Los Angeles (LADBS), Santa Monica, Beverly
        Hills, and Culver City. We pull all necessary building permits and
        manage final municipal inspections.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed breaker boxes,
        enclosures, and copper conductors from top manufacturers including
        Siemens, Square D, and Eaton. From heavy-duty copper busbars and
        corrosion-resistant stainless screws to weather-sealed outdoor NEMA 3R
        covers, every component is specified for decades of safe, reliable
        operation.
      </>,

      <>
        Because electrical codes and load requirements evolve continuously, our
        technicians stay current on the latest NEC amendments for residential
        additions and ADU subfeeders—ensuring your power expansion is fully
        compliant.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly installs electrical subpanels for
        homeowners, general contractors, and property managers across West Los
        Angeles. Whether your property is in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
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
        We understand the specific power distribution needs of Westside
        properties—from wiring garage ADU conversions in{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> and{' '}
        <NavLink to='/west-los-angeles'>West LA</NavLink> to installing
        subpanels for pool equipment and guest houses in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>.
      </>,
      <>
        Ready to expand your property's electrical capacity?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate,
        or <NavLink to='/contact'>request your consultation online</NavLink>{' '}
        today.
      </>,
    ],
  };

  const recents = {
    title: 'Featured Subpanel Installations & Power Expansions Across West LA',
    subtitle:
      'Browse our recent garage, ADU, and workshop subpanel deployments.',
    features: [
      {
        image: GarageSubpanel,
        name: '100A Detached Garage Subpanel & Circuit Distribution',
        location: 'West Los Angeles, CA',
      },
      {
        image: ADUSubpanel,
        name: '60A Backyard ADU Feeder Subpanel & Meter Feed',
        location: 'Santa Monica, CA',
      },
      {
        image: WorkshopSubpanel,
        name: 'Woodshop Heavy-Duty 120V/240V Subpanel Installation',
        location: 'Brentwood, CA',
      },
      {
        image: HomeAddition,
        name: 'Primary Suite Addition Subpanel & Home-Run Wiring',
        location: 'Pacific Palisades, CA',
      },
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Subpanel Installations',
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
        'What is the difference between a main panel upgrade and an electrical subpanel?',
      answer:
        "Your main electrical panel is your property's primary service disconnect connected directly to the utility lines (LADWP or SCE), controlling total amperage (e.g., 200 amps). A subpanel branches off your main panel to distribute power to a specific zone or detached structure (like an ADU, garage, or addition). A subpanel expands your available physical breaker slots and circuit runs without replacing your entire utility service drop.",
    },
    {
      question:
        'Do I need a dedicated subpanel for a backyard ADU or garage conversion?',
      answer:
        'Yes. Under the National Electrical Code (NEC) and local California building regulations, detached structures and independent living units like ADUs require their own dedicated subpanel to properly manage lighting, HVAC mini-splits, kitchen appliances, and safety disconnects independently from the primary house.',
    },
  ];

  const areas = {
    title: 'Subpanel Installation Across West LA',
    subtitle:
      'We engineer and permit power expansion subpanels across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const detailsButtons = {
    call: 'Call for a Subpanel Estimate',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary subpanel assessment or request a quote online. Same-day consultations available.',
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
      title: 'Our 4-Step Subpanel Process',
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
        icon: <Camera />,
        title: 'Security Cameras',
        subtitle: 'Explore Security Cameras',
        slug: 'security-cameras-service',
      },
    ],
  };

  const footer = {
    title: "Ready to Expand Your Property's Power?",
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or book your subpanel estimate online.',
  };

  return (
    <div>
      <title>
        Electrical Subpanel Installation West LA | ADU & Garage Power | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrician (#1102731) installing dedicated feeder subpanels for ADUs, garages, workshops & home additions in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
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
      <RecentProjects recents={recents} />
      <Testimonials reviews={reviews} />
      <ServiceFAQ faqs={faqs} />
      <ServiceAreasGrid areas={areas} />
      <RelatedServices related={related} />
      <Footer footer={footer} />
    </div>
  );
}

export default Subpanel;
