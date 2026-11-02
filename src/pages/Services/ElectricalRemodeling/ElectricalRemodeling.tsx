import {
  BatteryCharging,
  BuildingComplex,
  CheckCircle2,
  Clock,
  GitGraph,
  MapPin,
  Shield,
  Star,
  Users,
  Wrench,
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

import ElectricalRemodelingImage from '../../../assets/kitchen-rewire.webp';

function ElectricalRemodeling() {
  const hero = {
    icon: <Wrench />,
    title: 'Electrical Remodeling, Kitchens, Bathrooms & Additions',
    subtitle:
      'Planning a kitchen renovation, primary bathroom upgrade, or whole-house home addition? Brentwood Electrical Experts handles complete electrical rough-in and finish wiring for remodeling projects across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles—coordinating seamlessly with your general contractor to match your exact vision.',
    backgroundImage: ElectricalRemodelingImage,
    button: 'Request Remodel Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'GC & Architect Coordination',
      'NEC Kitchen & Bath Compliance',
    ],
    icons: [<Star />, <Users />, <CheckCircle2 />],
  };

  const benefits = {
    title: 'Key Advantages of Our Remodeling Electrical Services',
    features: [
      'Complete kitchen, bathroom, primary suite, and home addition electrical wiring',
      'NEC-compliant dedicated appliance circuits for induction ranges, double ovens, and steam showers',
      'Seamless coordination with general contractors, interior designers, and framing crews',
      'Custom architectural lighting design for newly remodeled indoor and outdoor spaces',
      'Main service panel capacity upgrades and subpanels integrated if increased power is required',
      'Turnkey municipal building permitting and final electrical inspection management',
    ],
    image: ElectricalRemodelingImage,
  };

  const fullDescription = {
    title: 'Professional Remodeling Electrical Contractor in West Los Angeles',
    paragraphs: [
      <>
        Remodeling a kitchen, adding a primary bathroom suite, or building a
        home addition transforms your living space, but it also places
        significant new demands on your property's electrical infrastructure. As
        a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts provides expert electrical wiring for
        residential remodeling projects.
      </>,

      <>
        Whether you are updating a gourmet kitchen island in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>, adding heated bathroom
        floors and custom vanity lighting in a{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink> renovation, or wiring
        a whole-house addition in{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> and{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>, our
        licensed team ensures code-compliant execution from framing to finish
        trim.
      </>,

      <>
        Every remodeling project begins with a careful plan review of your
        architectural and cabinetry drawings, followed by an itemized,
        transparent written proposal. We coordinate home-run circuits for heavy
        appliances, install under-cabinet LED task strips, and specify
        commercial-grade devices from trusted manufacturers like Siemens, Square
        D, and Lutron.
      </>,

      <>
        From initial rough-in wiring before drywall closure to final device trim
        and city inspection sign-offs, your project is handled completely
        in-house. Read our verified{' '}
        <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>book your remodeling consultation</NavLink>{' '}
        today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Remodeling Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed electrical professionals who coordinate effortlessly with your
        construction team and treat your home with meticulous care. We never cut
        corners on wire sizing or box fill limits, we never delay framing
        schedules, and we ensure every circuit is tested under load before
        drywall goes up.
      </>,

      <>
        Your project starts with a thorough plan review and{' '}
        <NavLink to='/contact'>on-site walk-through</NavLink>. A licensed C-10
        electrician evaluates your architectural blueprints, appliance spec
        sheets, and existing electrical panel capacity to design a comprehensive
        wiring layout. We explain your upgrade options in plain language and
        provide a transparent written estimate before any work begins.
      </>,

      <>
        Remodeling can feel disruptive, but our crew prioritizes cleanliness and
        clear communication. We arrive on schedule, protect your home with
        heavy-duty drop cloths, work efficiently around other trades, and leave
        your jobsite spotless at every milestone.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Remodeling Process — Step by Step',
    features: [
      {
        title: 'Plan Review & Layout',
        subtitle:
          'We review architectural, kitchen, and bath plans to map out circuits, appliance loads, and switch locations.',
      },
      {
        title: 'Itemized Proposal',
        subtitle:
          'We provide a detailed scope of work, timeline alignment with your GC, and transparent flat-rate pricing.',
      },
      {
        title: 'Rough-In Wiring',
        subtitle:
          'We run all home-run circuits, install boxes, and pull copper wiring through studs before drywall is installed.',
      },
      {
        title: 'Finish Trim & Fixtures',
        subtitle:
          'Once painting and finishes are complete, we install decorator outlets, switches, dimmers, and light fixtures.',
      },
      {
        title: 'Load Testing & Inspection',
        subtitle:
          'We test every circuit under load and pass mandatory municipal rough and final electrical inspections.',
      },
    ],
  };

  const safetyDescription = {
    title: 'NEC Code Compliance, Permits & Commercial-Grade Hardware',
    paragraphs: [
      <>
        Electrical safety and strict code adherence are the foundation of every
        remodeling project we undertake. Every installation we complete complies
        fully with the National Electrical Code (NEC) regarding kitchen
        countertop GFCI protection, bathroom wet-zone safety, dedicated
        appliance circuits, and smoke/carbon monoxide detector interconnects
        across Los Angeles (LADBS), Santa Monica, Beverly Hills, and Culver
        City. We pull all necessary building permits and manage city
        inspections.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed wiring components,
        panels, and devices from trusted manufacturers including Siemens, Square
        D, Leviton, and Eaton. From heavy-duty copper conductors and
        tamper-resistant receptacles to AFCI/GFCI breakers, every part is
        specified for maximum longevity and safety.
      </>,

      <>
        Because building codes update continuously, our technicians stay fully
        trained on the latest NEC amendments for kitchen islands, appliance
        circuits, and energy efficiency—ensuring your remodel passes inspection
        on the first visit.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly provides electrical remodeling
        services to homeowners and general contractors across West Los Angeles.
        Whether your project is located in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>
          28+ Greater LA communities we serve
        </NavLink>
        , our local crew is ready to mobilize.
      </>,
      <>
        We understand the unique architectural characteristics of Westside
        properties—from modernizing electrical grids in mid-century kitchen
        renovations across <NavLink to='/mar-vista'>Mar Vista</NavLink> and{' '}
        <NavLink to='/west-los-angeles'>West LA</NavLink> to wiring high-end
        custom primary suites and additions in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>.
      </>,
      <>
        Ready to start your remodel?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate,
        or <NavLink to='/contact'>submit your project plans online</NavLink>{' '}
        today.
      </>,
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Electrical Remodeling',
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
        'Should I upgrade my main electrical panel during a kitchen or home remodel?',
      answer:
        'Often, yes. Modern kitchen remodels introduce heavy-draw appliances (such as induction ranges, double ovens, built-in espresso machines, and wine fridges) alongside central heat pumps and EV chargers. During our initial plan review, we calculate your total expected load. If your existing 100-amp panel lacks capacity, upgrading to 200 amps during your remodel prevents tripped breakers and ensures your new spaces are fully powered.',
    },
    {
      question:
        'Do you coordinate directly with general contractors and interior designers?',
      answer:
        'Absolutely. We regularly partner with general contractors, project managers, and interior designers throughout West Los Angeles. We review MEP blueprints, align our rough-in schedule seamlessly with framing and plumbing trades, and ensure every switch, outlet, and fixture placement matches your design vision precisely.',
    },
  ];

  const areas = {
    title: 'Electrical Remodeling Across West LA',
    subtitle:
      'We engineer and permit remodel wiring across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const detailsButtons = {
    call: 'Call for a Remodel Estimate',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary remodel consultation or request a quote online. Same-day appointments available.',
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
      title: 'Our 5-Step Remodeling Process',
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
    title: 'Planning a Kitchen Remodel or Home Addition?',
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or submit your plans for an upfront written estimate.',
  };

  return (
    <div>
      <title>
        Kitchen & Bathroom Remodel Electrician West LA | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrician (#1102731) providing rough-in & finish electrical wiring for kitchen remodels, bath renovations & home additions in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
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

export default ElectricalRemodeling;
