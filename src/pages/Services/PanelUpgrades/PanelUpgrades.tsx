import '../../../components/service-detail-page/ServiceDetailLayout.css';

import {
  BatteryCharging,
  BuildingComplex,
  Camera,
  CheckCircle2,
  Clock,
  DollarSign,
  GitGraph,
  MapPin,
  Shield,
  Star,
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
    title: 'Main Electrical Panel & 200-Amp Service Upgrades',
    subtitle:
      'Outgrowing a 100-amp breaker box or dealing with an aging Zinsco or Federal Pacific panel? Brentwood Electrical Experts engineers and installs code-compliant 200-amp and 400-amp main service upgrades across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles—delivering the safe power capacity required for Level 2 EV chargers, heat pump HVAC systems, and modern luxury appliances.',
    backgroundImage: ElectricalPanel,
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      'Licensed & Insured',
      'Fast & Reliable',
      'Upfront Pricing',
      'Serving West LA',
    ],
    icons: [<Shield />, <Clock />, <DollarSign />, <MapPin />],
  };

  const benefits = {
    title: 'Key Advantages of Upgrading Your Main Panel',

    features: [
      'Expand to 200A or 400A Capacity: Safely run high-demand appliances without overloading your main busbar.',
      'Eliminate Nuisance Breaker Trips: Stop flickering lights and overloaded circuits when the AC or microwave runs.',
      'Pass Insurance & NEC Inspections: Replace uninsurable Zinsco, Federal Pacific (FPE), and split-bus panels.',
      'Power EV Chargers & Heat Pumps: Add dedicated 240V circuits for electric vehicles, induction ranges, and ADUs.',
      'Turnkey LADWP & SCE Coordination: We manage all utility engineering, meter spots, and city building permits.',
      'Prevent Overheating & Fire Hazards: Upgrade corroded lugs, aging breakers, and undersized grounding systems.',
    ],
    image: ElectricalPanel,
  };

  const fullDescription = {
    title: 'Main Service & Panel Upgrades in West Los Angeles',
    paragraphs: [
      <>
        Upgrading your property's primary distribution panel is the backbone of
        a safe, modern electrical system. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts brings precision load engineering and clean
        craftsmanship to every service upgrade we perform.
      </>,

      <>
        Whether you own a hillside residence in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink> running on an original
        100-amp box, operate a commercial storefront in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink> requiring three-phase
        power distribution, or manage a multi-unit apartment building in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> in need of modern
        meter stacks, our crew has the field expertise to execute the upgrade
        seamlessly.
      </>,

      <>
        Every panel project starts with an on-site National Electrical Code
        (NEC) load calculation and an itemized, flat-rate written proposal—never
        hidden fees or surprise change orders. We install commercial-grade
        Siemens, Square D, and Eaton enclosures, coordinate directly with LADWP
        and Southern California Edison (SCE), and verify every circuit before
        calling the job complete.
      </>,

      <>
        From initial utility spotting through final municipal inspection
        sign-off, you get a streamlined upgrade handled entirely in-house. That
        attention to detail is why Westside homeowners, general contractors, and
        property managers trust us with their primary power infrastructure. Read
        our verified <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>
          schedule your complimentary load evaluation
        </NavLink>{' '}
        today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Panel Upgrade Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed electrical professionals who treat your property with
        meticulous care. We never take shortcuts on grounding or wire sizing, we
        never rush critical terminations, and we stand behind every breaker we
        install.
      </>,

      <>
        Your upgrade starts the moment you{' '}
        <NavLink to='/contact'>reach out</NavLink>. We schedule a convenient
        on-site walk-through where a licensed C-10 electrician inspects your
        existing service entrance, underground or overhead feeder conduit,
        grounding electrodes, and connected appliance loads. We explain your
        options in plain English—whether you need a full 200-amp heavy-up, a
        solar-ready meter-main combo, or a recall panel swap—and deliver a
        transparent written quote before any work begins.
      </>,

      <>
        Electrical upgrades shouldn't turn your household or business upside
        down. Our crew arrives within our scheduled window, protects your
        stucco, flooring, and landscaping, and pre-stages all hardware before
        utility disconnect so your daytime power shut-off is kept to an absolute
        minimum. We restore your electricity the very same afternoon and leave
        your workspace spotless.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Panel Upgrades Process — Step by Step',
    features: [
      {
        title: 'NEC Load & Site Audit',
        subtitle:
          'We inspect your existing breaker box, grounding system, and utility feed to calculate your exact amperage demand.',
      },
      {
        title: 'Itemized Proposal',
        subtitle:
          'You receive a clear upgrade scope and flat-rate written quote with zero hidden fees.',
      },
      {
        title: 'City Permits & Utility Spot',
        subtitle:
          'We pull all municipal building permits and schedule disconnect/reconnect windows with LADWP or SCE.',
      },
      {
        title: 'Same-Day Cutover',
        subtitle:
          'Our C-10 electricians mount your new panel, upgrade copper grounding rods, and restore power the same afternoon.',
      },
      {
        title: 'Load Testing & City Sign-Off',
        subtitle:
          'We verify voltage balance, attach a printed breaker directory, and pass final municipal inspection.',
      },
    ],
  };

  const safetyDescription = {
    title: 'NEC Code Compliance, Permitting & Commercial-Grade Hardware',
    paragraphs: [
      <>
        Electrical safety is non-negotiable. Every panel upgrade we engineer
        strictly adheres to the latest National Electrical Code (NEC),
        California Title 24 energy standards, and local municipal amendments
        across Los Angeles (LADBS), Santa Monica, Beverly Hills, and Culver
        City. We pull all required building permits, upgrade cold-water and
        ground-rod bonding, and meet the city inspector on-site—protecting both
        your property's insurable value and your family's safety.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed enclosures and
        breakers from industry-leading manufacturers including Siemens, Square D
        by Schneider Electric, and Eaton. From heavy-duty copper busbars and
        whole-home surge arrestors to arc-fault (AFCI) and ground-fault (GFCI)
        circuit breakers, every component is selected for long-term thermal
        stability and coastal corrosion resistance.
      </>,

      <>
        Because California electrical codes and utility interconnection rules
        evolve constantly, our technicians stay at the forefront of solar-ready
        busbar sizing, battery storage readiness, and smart load-management
        technology—ensuring your electrical service is built for the next 40
        years.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly engineers and installs electrical
        panel upgrades for homeowners, HOAs, and commercial properties across
        West Los Angeles. Whether your property is in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>
          28+ Greater LA communities we cover
        </NavLink>
        , our local crew is ready to dispatch.
      </>,
      <>
        We know the specific electrical infrastructure challenges of each
        Westside neighborhood—from converting overhead utility drops on 1950s
        ranch homes in <NavLink to='/mar-vista'>Mar Vista</NavLink> and{' '}
        <NavLink to='/west-los-angeles'>West LA</NavLink>, to installing 400-amp
        underground estate services in <NavLink to='/bel-air'>Bel Air</NavLink>{' '}
        and upgrading multi-meter apartment banks in{' '}
        <NavLink to='/westwood'>Westwood</NavLink> and{' '}
        <NavLink to='/century-city'>Century City</NavLink>.
      </>,
      <>
        Ready to modernize your electrical panel?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free on-site
        assessment, or{' '}
        <NavLink to='/contact'>request your estimate online</NavLink> today.
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

  const reviews = {
    title: 'Verified Client Reviews: Main Panel & Service Upgrades',
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
        'How do I know if my home or business needs an electrical panel upgrade?',
      answer:
        'Clear warning signs include a main breaker rated at 100 amps or less, frequent breaker trips when appliances run simultaneously, flickering lights when your AC kicks on, a crowded panel with no open slots, or an obsolete recall-brand box such as Zinsco, Sylvania, or Federal Pacific Electric (FPE Stab-Lok). You also typically need an upgrade when adding a Level 2 EV charger, electric heat pump, kitchen remodel, or backyard ADU.',
    },
    {
      question:
        'How long does a 200-amp panel upgrade take, and how long is the power off?',
      answer:
        'The physical panel replacement is completed in a single day. Power to your property is typically shut off for only 4 to 6 hours while we swap the enclosure, install new grounding electrodes, and coordinate the utility reconnect—meaning your electricity is fully restored before our technicians leave that afternoon.',
    },
    {
      question:
        'Do I need a city permit and utility approval for an electrical panel upgrade?',
      answer:
        'Yes. Replacing a main service panel requires both a municipal electrical permit (from LADBS, Santa Monica, Beverly Hills, or your local city building department) and utility coordination with LADWP or Southern California Edison (SCE). Brentwood Electrical Experts handles 100% of the permitting, utility spotting, and final inspection sign-offs for you.',
    },
  ];

  const areas = {
    title: 'Local Panel Upgrade Specialists Across West LA',
    subtitle:
      'We engineer and permit 200A and 400A service upgrades across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const related = {
    title: 'Related Services',
    cards: [
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
    ],
  };

  const footer = {
    title: 'Ready to Upgrade Your Electrical Service?',
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or book your upfront written estimate online.',
  };

  return (
    <div>
      <title>
        Electrical Panel Upgrades in West LA & Santa Monica | Brentwood
        Electrical Experts
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrical contractor (#1102731) providing 100A to 200A & 400A electrical panel upgrades across Brentwood, Santa Monica, Beverly Hills & West LA. Call (310) 666-4752.'
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
      <Testimonials reviews={reviews} />
      <ServiceFAQ faqs={faqs} />
      <ServiceAreasGrid areas={areas} />
      <RelatedServices related={related} />
      <Footer footer={footer} />
    </div>
  );
}

export default PanelUpgrades;
