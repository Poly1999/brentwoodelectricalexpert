import '../../../components/service-detail-page/ServiceDetailLayout.css';
import { NavLink } from 'react-router-dom';
import {
  BatteryCharging,
  BuildingComplex,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  GitGraph,
  MapPin,
  Search,
  Shield,
  Star,
  Zap,
} from 'lucide-react';

import ServiceHero from '../../../components/service-detail-page/ServiceHero/ServiceHero';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';
import ServiceBenefits from '../../../components/service-detail-page/ServiceBenefits/ServiceBenefits';
import ServiceDetails from '../../../components/service-detail-page/ServiceDetails/ServiceDetails';
import RecentProjects from '../../../components/service-detail-page/RecentProjects/RecentProjects';
import RelatedServices from '../../../components/service-detail-page/RelatedServices/RelatedServices';
import ServiceAreasGrid from '../../../components/service-detail-page/ServiceAreasGrid/ServiceAreasGrid';
import ServiceFAQ from '../../../components/service-detail-page/ServiceFAQ/ServiceFAQ';
import ServiceProcess from '../../../components/service-detail-page/ServiceProcess/ServiceProcess';
import ServicesSidebar from '../../../components/Shared/ServicesSidebar/ServicesSidebar';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import Footer from '../../../components/Footer/Footer';

import ElectricalTroubleshooting from '../../../assets/troubleshoot-1650.webp';

import CircuitDiagnosis from '../../../assets/troubleshoot-5660.webp';
import WiringInspection from '../../../assets/troubleshoot-1650.webp';
import ElectricalRepair from '../../../assets/troubleshoot-9661.webp';
import PanelTroubleshooting from '../../../assets/troubleshoot-9272.webp';
import FaultDetection from '../../../assets/troubleshoot-2028.webp';
import ElectricalTesting from '../../../assets/troubleshoot-6923.webp';

function Troubleshooting() {
  const hero = {
    icon: <Search />,
    title: 'Precision Electrical Troubleshooting & Fault Diagnostics',
    subtitle:
      'Dealing with tripping AFCI/GFCI breakers, flickering LED lights, dead circuits, or burning odors from a panel? Brentwood Electrical Experts delivers rapid, scientific electrical fault diagnostics across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles. We use digital circuit tracers and thermal load testing to isolate and repair the exact root cause permanently.',
    backgroundImage: ElectricalTroubleshooting,
    button: 'Book Diagnostic Visit',
  };

  const badges = {
    items: [
      'C-10 Licensed (#1102731)',
      'Same-Day Dispatch',
      'Non-Destructive Tracing & Upfront Quotes',
    ],
    icons: [<Shield />, <Zap />, <ClipboardCheck />],
  };

  const benefits = {
    title: 'Advantages of Professional Fault Diagnostics',
    features: [
      'Advanced Circuit Tracing: Pinpoint hidden shorts, open neutrals, and broken wires without tearing open drywall.',
      'Root-Cause Resolution: Permanent repairs for nuisance AFCI/GFCI breaker trips and voltage drops.',
      'Same-Day Emergency Dispatch: Priority troubleshooting across West LA for partial power outages and sparking devices.',
      'Fire & Arc-Fault Prevention: Identify overheated busbars, loose backstabbed connections, and degraded insulation.',
      'Transparent Flat-Rate Pricing: Clear diagnostic evaluation and itemized repair quotes before work begins.',
      'State-Certified C-10 Troubleshooters: Hands-on testing by licensed California electricians (#1102731).',
    ],
    image: ElectricalTroubleshooting,
  };

  const fullDescription = {
    title: 'Scientific Electrical Fault Diagnostics in West Los Angeles',
    paragraphs: [
      <>
        Intermittent electrical problems—such as breakers that trip under load,
        dimming lights when appliances cycle on, or dead receptacles across
        multiple rooms—are warning signs of underlying wiring faults. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts uses precision diagnostic instruments to
        locate hidden electrical failures quickly and safely. See our{' '}
        <NavLink to='/reviews'>customer reviews</NavLink> or{' '}
        <NavLink to='/contact'>request a free estimate.</NavLink>
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Electrical Troubleshooting Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        seasoned electrical diagnosticians who treat your property with
        meticulous care. We never swap parts blindly hoping a problem goes away,
        we never bypass safety ground-fault devices, and we never leave a
        circuit until its load stability is verified.
      </>,

      <>
        Your appointment begins with a targeted{' '}
        <NavLink to='/contact'>diagnostic consultation</NavLink>. A licensed
        C-10 electrician listens to when and how the issue occurs, tests your
        panel busbar and branch circuits using digital multimeters, circuit
        tracers, and thermal imaging, and isolates the exact point of failure.
        Once we identify the fault, we explain our findings in plain English and
        present an upfront, flat-rate repair quote before performing the fix.
      </>,

      <>
        We know an unexpected electrical outage or tripping circuit disrupts
        your household or business. Our technicians arrive within our scheduled
        window, wear protective shoe covers, use non-destructive tracing tools
        to keep your walls intact, and leave our workspace spotless once your
        power is safely restored.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Troubleshooting Process — Step by Step',
    features: [
      {
        title: 'Symptom & Load History',
        subtitle:
          'Tell us which circuits, appliances, or lights are acting up so we can map the affected branch pathways.',
      },
      {
        title: 'Precision Fault Tracing',
        subtitle:
          'We use digital circuit tracers, megohmmeters, and load testers to isolate shorts, ground faults, or loose neutrals without damaging walls.',
      },
      {
        title: 'Clear Findings & Flat-Rate Quote',
        subtitle:
          'We show you the exact cause of the failure and provide a transparent, itemized price for the permanent repair.',
      },
      {
        title: 'Code Repair & Load Verification',
        subtitle:
          'We complete the repair using UL-listed hardware and stress-test the circuit under full load to confirm stability.',
      },
    ],
  };

  const safetyDescription = {
    title:
      'NEC Code Compliance, Thermal Diagnostics & Commercial-Grade Hardware',
    paragraphs: [
      <>
        Electrical safety is the foundation of every diagnostic repair we
        perform. Every troubleshooting solution we execute meets or exceeds the
        latest National Electrical Code (NEC) standards and local municipal
        building codes across Los Angeles (LADBS), Santa Monica, Beverly Hills,
        and Culver City. Whether remediating overheated aluminum connections,
        replacing arc-damaged breakers, or correcting ungrounded junctions, we
        ensure your system is 100% code-compliant.
      </>,

      <>
        We repair circuits exclusively with commercial-grade, UL-listed
        breakers, receptacles, and high-leverage connectors from trusted
        manufacturers including Siemens, Square D, Eaton, Leviton, and Wago.
        Every terminal is torqued to manufacturer specification to prevent
        future arcing, resistance heating, or voltage drop.
      </>,

      <>
        Because modern homes combine sensitive inverter-driven HVAC systems, EV
        chargers, and AFCI/GFCI dual-function breakers, our electricians train
        continuously on advanced harmonic diagnostics and load-balancing
        techniques—giving you accurate answers on the very first visit.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts provides rapid electrical troubleshooting
        and fault repair for homeowners, HOAs, and businesses across West Los
        Angeles. Whether your property is in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>28+ Greater LA communities</NavLink> we
        cover, our local technicians are ready to respond.
      </>,
      <>
        We know the common wiring quirks of every Westside era—from aging
        cloth-insulated cables and ungrounded junctions in 1950s{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> and{' '}
        <NavLink to='/west-los-angeles'>West LA</NavLink> homes, to complex
        centralized lighting and subpanel networks in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> estates and{' '}
        <NavLink to='/century-city'>Century City</NavLink> commercial suites.{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for same-day
        diagnostics or{' '}
        <NavLink to='/contact'>request your appointment online</NavLink> today.
      </>,
    ],
  };

  const recents = {
    title: 'Featured Electrical Diagnostic & Repair Projects Across West LA',
    subtitle:
      'Browse recent circuit tracing, breaker fault repairs, and wiring restorations completed by our team.',
    features: [
      {
        image: CircuitDiagnosis,
        name: 'AFCI Nuisance Trip & Shared Neutral Isolation',
        location: 'Brentwood, CA',
      },
      {
        image: WiringInspection,
        name: 'Short-Circuit Tracing & Junction Box Remediation',
        location: 'Santa Monica, CA',
      },
      {
        image: ElectricalRepair,
        name: 'Underground Feeder Fault Detection & Conduit Repair',
        location: 'Pacific Palisades, CA',
      },
      {
        image: PanelTroubleshooting,
        name: 'Overheated Busbar & Main Breaker Load Balancing',
        location: 'West Los Angeles, CA',
      },
      {
        image: FaultDetection,
        name: 'Multi-Zone Lighting Flicker & Dimmer Load Correction',
        location: 'Beverly Hills, CA',
      },
      {
        image: ElectricalTesting,
        name: 'Whole-Estate Thermal Load Audit & Ground Fault Repair',
        location: 'Bel Air, CA',
      },
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Electrical Troubleshooting & Repairs',
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
      question: 'Why do my circuit breakers keep tripping repeatedly?',
      answer:
        'Repeated breaker trips are typically caused by one of three issues: a circuit overload (too many high-draw appliances like space heaters, microwaves, or hair dryers running on a single 15A or 20A branch circuit), a dead short-circuit (where hot and neutral/ground wires touch directly, causing an instant, hard trip), or a ground fault/arc fault indicating degraded insulation or loose terminal connections.',
    },
    {
      question: 'Is a flickering light dangerous?',
      answer:
        'It can be. Flickering may indicate loose wiring, an overloaded circuit, or a failing connection — all of which can be fire hazards. We recommend having it inspected promptly.',
    },
  ];

  const areas = {
    title: 'Troubleshooting Across West LA',
    subtitle:
      'We provide electrical troubleshooting services throughout West Los Angeles and surrounding communities. Click your area to learn more.',
  };

  const detailsButtons = {
    call: 'Call for Diagnostics',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Need urgent fault diagnostics? Call or book online for same-day troubleshooting across West LA.',
    navTitle: 'Our Electrical Services',
    whyTitle: 'Why West LA Chooses Us',
    whyItems: [
      '5.0-Star Rated (100+ Reviews)',
      'C-10 Licensed & Insured (#1102731)',
      'Same-Day Emergency Dispatch',
      'Upfront Flat-Rate Quotes',
      'Serving 28+ Westside Areas',
    ],
    whyIcons: [<Star />, <Shield />, <Clock />, <CheckCircle2 />, <MapPin />],
    areasTitle: 'Core Service Territory',
    process: {
      title: 'Our 4-Step Troubleshooting Process',
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
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Electrical Troubleshooting & Fault Diagnostics West LA | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrician (#1102731) providing scientific electrical troubleshooting, circuit tracing, breaker trip repair & fault diagnostics in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
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
      <RecentProjects recents={recents} columns={3} />
      <Testimonials reviews={reviews} />
      <ServiceFAQ faqs={faqs} />
      <ServiceAreasGrid areas={areas} />
      <RelatedServices related={related} />
      <Footer footer={footer} />
    </div>
  );
}

export default Troubleshooting;
