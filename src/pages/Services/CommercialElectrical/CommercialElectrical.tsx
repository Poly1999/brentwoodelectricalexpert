import {
  BatteryCharging,
  BuildingComplex,
  CheckCircle2,
  Clock,
  GitGraph,
  MapPin,
  Shield,
  Star,
  Store,
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

import CommercialElectricalServices from '../../../assets/commercial-framing.webp';

import CommercialWiring from '../../../assets/commercial-1.webp';
import TenantImprovement from '../../../assets/commercial-2.webp';
import OfficeElectrical from '../../../assets/commercial-3.webp';
import RetailBuildOut from '../../../assets/commercial-4.webp';
import CommercialPanelWork from '../../../assets/commercial-5.webp';
import ElectricalService from '../../../assets/commercial-6.webp';
import RestaurantWiring from '../../../assets/commercial-7.webp';
import LightingRetrofit from '../../../assets/commercial-8.webp';
import CommercialFraming from '../../../assets/commercial-framing.webp';
import CommercialLighting from '../../../assets/commercial-lighting.jpg';
import RetailElectrical from '../../../assets/commercial-9.jpg';
import OfficeBuildOut from '../../../assets/commercial-10.jpg';

function CommercialElectrical() {
  const hero = {
    icon: <Store />,
    title: 'Commercial Electrical Services & Tenant Improvements',
    subtitle:
      'Power your business operations with reliable, code-compliant commercial electrical engineering. Brentwood Electrical Experts delivers professional electrical buildouts, retail tenant improvements (TI), three-phase power distribution, and lighting retrofits for offices, restaurants, and commercial properties across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles.',
    backgroundImage: CommercialElectricalServices,
    button: 'Request Commercial Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Flexible After-Hours Scheduling',
      '3-Phase Power Distribution',
    ],
    icons: [<Star />, <Clock />, <Zap />],
  };

  const benefits = {
    title: 'Key Advantages of Our Commercial Electrical Services',
    features: [
      'Turnkey commercial tenant improvements (TI) and retail storefront buildouts',
      'Energy-efficient commercial lighting design, LED retrofits, and Title 24 compliance',
      'Comprehensive electrical system maintenance, troubleshooting, and switchgear repair',
      'Strict adherence to municipal building codes and mandatory safety inspections',
      'Flexible scheduling and after-hours execution to ensure zero business downtime',
      'State-certified C-10 commercial contractors carrying comprehensive liability insurance',
    ],
    image: CommercialElectricalServices,
  };

  const fullDescription = {
    title: 'Professional Commercial Electrical Contractor in West Los Angeles',
    paragraphs: [
      <>
        Commercial facilities, retail spaces, restaurants, and professional
        offices require robust electrical infrastructure designed to handle
        heavy daily loads, strict safety codes, and continuous operational
        demands. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts provides dependable, code-compliant
        commercial electrical solutions.
      </>,

      <>
        Whether you need a full electrical buildout for a new office suite in{' '}
        <NavLink to='/century-city'>Century City</NavLink>, a restaurant kitchen
        equipment upgrade in{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>, a retail
        tenant improvement in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or a parking lot
        lighting retrofit in <NavLink to='/santa-monica'>Santa Monica</NavLink>,
        our licensed commercial team executes every project with precision.
      </>,

      <>
        Every commercial project begins with a comprehensive site assessment and
        a clear, flat-rate written proposal. We work with commercial-grade,
        UL-listed three-phase switchgear, heavy-duty conduit runs, and
        energy-efficient control systems from trusted manufacturers including
        Siemens, Square D, and Eaton.
      </>,

      <>
        From initial architectural plan coordination to after-hours installation
        windows and final city inspection sign-offs, your commercial project is
        handled completely in-house. Read our verified{' '}
        <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>book your commercial consultation</NavLink>{' '}
        today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Commercial Electrical Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed electrical professionals who treat your business operations and
        commercial timeline with absolute care. We never cut corners on
        heavy-duty wire sizing or switchgear balancing, we never rush critical
        terminations, and we ensure your facility passes municipal inspection on
        the first visit.
      </>,

      <>
        Your service starts with an{' '}
        <NavLink to='/contact'>on-site evaluation</NavLink>. A licensed C-10
        commercial electrician reviews your building schematics, load
        requirements, and operational hours to design a seamless work plan. We
        explain our installation and scheduling approach in plain language and
        provide a transparent written estimate before any work begins.
      </>,

      <>
        Electrical work can disrupt daily business, which is why our crew
        prioritizes flexibility and speed. We coordinate after-hours or weekend
        execution windows when necessary, maintain an immaculate jobsite, and
        keep you informed at every milestone so your business never misses a
        beat.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Commercial Process — Step by Step',
    features: [
      {
        title: 'Scope Review & Assessment',
        subtitle:
          'We evaluate your commercial facility requirements, equipment loads, and architectural plans.',
      },
      {
        title: 'Itemized Commercial Proposal',
        subtitle:
          'We provide a detailed project scope, flexible scheduling options, and flat-rate transparent pricing.',
      },
      {
        title: 'After-Hours Execution',
        subtitle:
          'Our C-10 electricians complete the work efficiently during scheduled off-hours to prevent business downtime.',
      },
      {
        title: 'Code Compliance & Inspection',
        subtitle:
          'We verify complete NEC/Title 24 compliance and coordinate final municipal building inspections.',
      },
    ],
  };

  const safetyDescription = {
    title: 'NEC Code Compliance, Title 24 Standards & Commercial Hardware',
    paragraphs: [
      <>
        Commercial electrical safety and strict regulatory compliance are
        non-negotiable. Every commercial buildout and maintenance project we
        complete complies fully with the National Electrical Code (NEC),
        California Title 24 Energy Efficiency Standards, and local municipal
        building codes across Los Angeles (LADBS), Santa Monica, Beverly Hills,
        and Culver City. We pull all necessary permits and coordinate city
        inspections.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed switchgear, wiring
        components, and fixtures from trusted manufacturers including Siemens,
        Square D, Eaton, and Lutron. From three-phase distribution panels and
        heavy-duty EMT conduit to automated emergency lighting and surge
        protection, every part is specified for maximum durability.
      </>,

      <>
        Because commercial codes and energy mandates evolve constantly, our
        technicians receive ongoing training on emerging technologies and safety
        regulations—ensuring your business remains fully compliant and secure.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly provides commercial electrical
        services to businesses, property managers, and general contractors
        across West Los Angeles. Whether your facility is located in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>
          28+ Greater LA communities we serve
        </NavLink>
        , our local team is ready to mobilize.
      </>,
      <>
        We understand the unique commercial infrastructure requirements across
        the Westside—from outfitting corporate offices and medical suites in{' '}
        <NavLink to='/century-city'>Century City</NavLink> and{' '}
        <NavLink to='/westwood'>Westwood</NavLink> to servicing retail boutiques
        and restaurants along San Vicente and Ventura Boulevard.
      </>,
      <>
        Ready to upgrade your commercial facility's electrical system?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate,
        or <NavLink to='/contact'>submit your project details online</NavLink>{' '}
        today.
      </>,
    ],
  };

  const recents = {
    title: 'Featured Commercial & Tenant Improvement Projects Across West LA',
    subtitle:
      'Browse our recent retail, office, and restaurant electrical buildouts.',
    features: [
      {
        image: CommercialWiring,
        name: '3-Phase Commercial Distribution Switchgear Upgrade',
        location: 'West Los Angeles, CA',
      },
      {
        image: TenantImprovement,
        name: 'Retail Boutique Tenant Improvement Build-Out',
        location: 'Santa Monica, CA',
      },
      {
        image: OfficeElectrical,
        name: 'Corporate Office Suite Power & Data Rough-In',
        location: 'Century City, CA',
      },
      {
        image: RetailBuildOut,
        name: 'High-End Luxury Showroom Lighting & Power',
        location: 'Beverly Hills, CA',
      },
      {
        image: CommercialPanelWork,
        name: 'Commercial Multi-Meter Bank & Main Disconnect',
        location: 'Brentwood, CA',
      },
      {
        image: ElectricalService,
        name: 'Commercial Building Service Maintenance & Repairs',
        location: 'Mar Vista, CA',
      },
      {
        image: RestaurantWiring,
        name: 'Commercial Kitchen Equipment & Hood Circuit Wiring',
        location: 'Pacific Palisades, CA',
      },
      {
        image: LightingRetrofit,
        name: 'Energy-Efficient LED Commercial Lighting Retrofit',
        location: 'West Hollywood, CA',
      },
      {
        image: CommercialFraming,
        name: 'Medical Office Suite Electrical Framing Rough-In',
        location: 'Westwood, CA',
      },
      {
        image: CommercialLighting,
        name: 'Warehouse & Industrial High-Bay Lighting Install',
        location: 'Culver City, CA',
      },
      {
        image: RetailElectrical,
        name: 'Commercial Perimeter Security Lighting & Conduit',
        location: 'Bel Air, CA',
      },
      {
        image: OfficeBuildOut,
        name: 'Creative Agency Open-Office Power Grid',
        location: 'Venice, CA',
      },
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Commercial Electrical Services',
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
        'Do you offer after-hours or weekend commercial electrical services to avoid business disruption?',
      answer:
        'Yes. We understand that electrical work can interrupt daily business operations. We offer flexible scheduling, including night and weekend work windows, to complete tenant improvements, panel upgrades, and lighting retrofits with zero downtime for your customers or employees.',
    },
    {
      question:
        'Can you handle full-scale commercial tenant improvement (TI) projects?',
      answer:
        'Absolutely. As a licensed C-10 electrical contractor (#1102731), we partner with general contractors, property managers, and business owners to execute turnkey commercial tenant improvements for retail stores, restaurants, professional offices, and industrial spaces across West Los Angeles.',
    },
  ];

  const areas = {
    title: 'Commercial Electrical Contractor Across West LA',
    subtitle:
      'We engineer and permit commercial electrical systems across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const detailsButtons = {
    call: 'Call for a Commercial Estimate',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a commercial project evaluation or request a quote online. Flexible scheduling available.',
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
      title: 'Our 4-Step Commercial Process',
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
    title: 'Ready to Upgrade Your Commercial Facility?',
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or book your commercial project estimate online.',
  };

  return (
    <div>
      <title>
        Commercial Electrician West LA & Tenant Improvements | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 commercial electrician (#1102731) providing tenant improvements, 3-phase power, retail buildouts & lighting retrofits in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
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

export default CommercialElectrical;
