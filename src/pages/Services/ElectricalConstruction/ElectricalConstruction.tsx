import '../../../components/service-detail-page/ServiceDetailLayout.css';

import {
  BatteryCharging,
  BuildingComplex,
  Camera,
  CheckCircle2,
  Clock,
  FileText,
  GitGraph,
  MapPin,
  Shield,
  Star,
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
    title: 'New Construction Electrical & Commercial Tenant Buildouts',
    subtitle:
      'From ground-up custom residences and luxury ADUs to commercial tenant improvements (TI) and full-scale electrical buildouts, Brentwood Electrical Experts engineers and installs turn-key power systems across West Los Angeles. We partner directly with general contractors, architects, developers, and property owners to execute code-compliant rough-in and finish phases on schedule and on budget.',
    backgroundImage: ConsrtactionPanels,
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      'C-10 Licensed & Insured (#1102731)',
      'On-Schedule Rough & Trim',
      'Itemized Plan-Based Bids',
      'Title 24 & NEC Compliant',
    ],
    icons: [<Shield />, <Clock />, <FileText />, <CheckCircle2 />],
  };

  const benefits = {
    title: 'Full-Scope Electrical Construction Capabilities',
    features: [
      'Single-Line Diagrams & Load Engineering: Complete electrical system design, panel schedules, and load calculations.',
      'Precision Rough-In & Finish Trim: Clean conduit routing, box placement, switchgear setup, and architectural fixture trim.',
      'Seamless GC & Trade Coordination: Proactive scheduling alongside framers, HVAC, plumbers, and drywall crews.',
      'Residential Estates, ADUs & Commercial TI: Custom homes, multi-unit developments, retail storefronts, and offices.',
      'Title 24 & Municipal Permitting: Full handling of energy compliance controls, city permits, and LADWP/SCE spotting.',
      'Milestone-Driven Execution: Reliable crew staffing to ensure your build passes rough and final inspections without delay.',
    ],
    image: ConsrtactionPanels,
  };

  const fullDescription = {
    title: 'Ground-Up Electrical Construction & Buildouts in West Los Angeles',
    paragraphs: [
      <>
        Successful construction projects depend on an electrical contractor who
        reads blueprints accurately, anticipates structural bottlenecks, and
        hits every inspection milestone on time. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts brings field-tested engineering and
        disciplined project management to every residential and commercial
        buildout.
      </>,

      <>
        Whether you are a homeowner or general contractor building a custom
        hillside estate in <NavLink to='/brentwood'>Brentwood</NavLink>, a
        commercial tenant fitting out a retail or medical suite in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>, or a developer
        constructing multi-family units or backyard ADUs in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> and West LA, our
        crew has the manpower and technical depth to execute the job right the
        first time.
      </>,

      <>
        Every construction bid begins with a thorough architectural plan review,
        accurate load calculations, and an itemized, transparent
        proposal—eliminating scope gaps and mid-project surprises. We install
        commercial-grade switchgear, EMT/rigid conduit, and Title 24-compliant
        lighting controls, coordinating directly with LADWP, Southern California
        Edison (SCE), and local building inspectors from temporary power setup
        to final Certificate of Occupancy.
      </>,

      <>
        From initial trenching and rough-in wiring to final Lutron keypad
        programming and fixture trim, you will see the difference of working
        with a dedicated construction electrical team. Read our verified{' '}
        <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>submit your project plans</NavLink> for a
        complimentary bid today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Electrical Construction Service',
    paragraphs: [
      <>
        When you partner with Brentwood Electrical Experts, you work directly
        with licensed electrical professionals who treat your jobsite and
        construction timeline with meticulous care. We never cut corners on wire
        gauge, box bracing, or conduit support, and we never hold up other
        trades waiting on electrical rough-in.
      </>,

      <>
        Your project starts the moment you share your architectural drawings or{' '}
        <NavLink to='/contact'>schedule an on-site walk-through</NavLink>. A
        licensed C-10 electrician evaluates your mechanical schedules, lighting
        layouts, panel locations, and utility service requirements. We flag any
        potential code conflicts early, value-engineer practical solutions, and
        provide a clear, itemized written proposal before mobilization begins.
      </>,

      <>
        Construction sites move fast, which is why we prioritize proactive
        communication with homeowners, site superintendents, and project
        managers. Our crew arrives on schedule, maintains an organized,
        hazard-free workspace, labels every home-run wire clearly, and keeps
        your build moving smoothly from underground trenching to final
        inspection sign-off.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Construction Process — Step by Step',
    features: [
      {
        title: 'Blueprint Review & Load Engineering',
        subtitle:
          'We analyze architectural, MEP, and lighting plans to engineer circuit layouts and NEC load schedules.',
      },
      {
        title: 'Permits & Temporary Power',
        subtitle:
          'We pull municipal electrical permits, set up temporary construction power, and coordinate LADWP/SCE utility spots.',
      },
      {
        title: 'Underground & Rough-In Wiring',
        subtitle:
          'We trench feeder conduits, mount panel enclosures, and pull all power, lighting, and low-voltage rough-in wiring prior to drywall.',
      },
      {
        title: 'Switchgear & Finish Trim',
        subtitle:
          'Once walls are painted, we land breakers, mount architectural light fixtures, install smart dimmers, and trim all receptacles.',
      },
      {
        title: 'Title 24 Testing & Final Sign-Off',
        subtitle:
          'We test every circuit under load, certify Title 24 lighting controls, and pass final municipal building inspection.',
      },
    ],
  };

  const safetyDescription = {
    title:
      'NEC Code Compliance, Title 24 Standards & Commercial-Grade Hardware',
    paragraphs: [
      <>
        Electrical safety and code compliance are the foundation of every
        structure we wire. Every construction project we complete strictly
        adheres to the latest National Electrical Code (NEC), California Title
        24 Building Energy Efficiency Standards, and local municipal amendments
        across Los Angeles (LADBS), Santa Monica, Beverly Hills, and Culver
        City. We manage all rough and final inspections and ensure your
        electrical installation passes city sign-off without delays.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed switchgear,
        conduit, and wiring components from trusted manufacturers including
        Siemens, Square D, Eaton, and Lutron. From heavy-duty copper conductors
        and fire-rated junction boxes to occupancy sensors, dimming modules, and
        whole-home surge protection, every part is specified for decades of
        trouble-free performance.
      </>,

      <>
        Because California energy mandates and smart building technologies
        advance every code cycle, our technicians stay fully certified in
        solar-ready main panels, battery storage pre-wiring, EV charging
        readiness, and centralized lighting automation—delivering future-proof
        electrical infrastructure for your property.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly provides residential and commercial
        electrical construction across West Los Angeles and surrounding
        communities. Whether your jobsite is in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>
          28+ Greater LA neighborhoods we serve
        </NavLink>
        , our licensed crew is ready to mobilize.
      </>,
      <>
        We understand the distinct construction requirements across the
        Westside—from coastal rebuilds and hillside retaining-wall trenching in{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink> and{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>, to garage ADU conversions in{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> and high-spec commercial
        office and retail buildouts in{' '}
        <NavLink to='/century-city'>Century City</NavLink>,{' '}
        <NavLink to='/westwood'>Westwood</NavLink>, and{' '}
        <NavLink to='/west-hollywood'>West Hollywood</NavLink>.
      </>,
      <>
        Have upcoming plans ready to bid?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate,
        or <NavLink to='/contact'>submit your request online</NavLink> today.
      </>,
    ],
  };

  const detailsButtons = {
    call: 'Call for a Free Estimate',
    quote: 'Request a Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Need an Electrician?',
    ctaText:
      'Call now for a free estimate or schedule service online. Same-day appointments available.',
    navTitle: 'Quick Navigation',
    whyTitle: 'Why Choose Us',
    whyItems: [
      '5.0 Google Rating — 100+ reviews',
      'Fully licensed & insured',
      'Same-day & 24/7 emergency service',
      'Upfront pricing, no hidden fees',
      'Serving all of West Los Angeles',
    ],
    whyIcons: [<Star />, <Shield />, <Clock />, <CheckCircle2 />, <MapPin />],
    areasTitle: 'Service Areas',
  };

  const recents = {
    title: 'Featured Construction, TI & Remodel Projects Across West LA',
    subtitle:
      'Browse our permitted ground-up residential, ADU, and commercial electrical buildouts.',
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

  const reviews = {
    title: 'Verified Client Reviews: Construction & Remodel Electrical',
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
        'Do you partner directly with general contractors, architects, and interior designers?',
      answer:
        'Yes. We work closely with general contractors, architects, developers, and designers across West Los Angeles. We read full MEP and architectural blueprints, provide itemized plan-based bids, coordinate our rough-in schedule seamlessly with other trades, and ensure every fixture, switch, and panel placement matches the design intent.',
    },
    {
      question:
        'Can you handle commercial tenant improvements (TI) and multi-unit construction projects?',
      answer:
        'Absolutely. As a licensed C-10 electrical contractor (#1102731), we execute commercial tenant buildouts for retail storefronts, offices, restaurants, and medical suites, as well as multi-family apartment meter stacks, three-phase power distribution, and Title 24 commercial lighting control systems.',
    },
    {
      question:
        'Do you handle electrical permits, Title 24 sign-offs, and utility coordination for new builds?',
      answer:
        'Yes. We manage the complete permitting and inspection lifecycle—including temporary construction power poles, municipal electrical permits (LADBS, Santa Monica, Beverly Hills, Culver City), California Title 24 lighting acceptance testing, and permanent utility service hookups with LADWP and Southern California Edison (SCE).',
    },
  ];

  const areas = {
    title: 'Electrical Construction & Tenant Buildouts Across West LA',
    subtitle:
      'We partner with homeowners and contractors across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const related = {
    title: 'Related Services',
    cards: [
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
        New Construction & Commercial Electrical Contractor West LA | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrical contractor (#1102731) specializing in ground-up custom home wiring, ADUs, commercial tenant improvements & Title 24 buildouts in West LA, Brentwood & Santa Monica. Call (310) 666-4752.'
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

export default ElectricalConstruction;
