import {
  BatteryCharging,
  BuildingComplex,
  CheckCircle2,
  Clock,
  GitGraph,
  Lamp,
  MapPin,
  Shield,
  SlidersHorizontal,
  Star,
  Wrench,
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

import LightFixtureInstallation from '../../../assets/lightfixture-2611.webp';

import PendantLightInstallation from '../../../assets/lightdesign-1981.webp';
import ChandelierInstallation from '../../../assets/lightfixture-2611.webp';
import RecessedLightingUpgrade from '../../../assets/lightfixture-5593.webp';
import ModernCeilingFixture from '../../../assets/lightfixture-6151.webp';
import KitchenLightingDesign from '../../../assets/lightfixture-7697.webp';
import LivingRoomLightFixture from '../../../assets/lightdesign-8582.webp';
import DesignerLighting from '../../../assets/lightdesign-1981.webp';
import CustomInteriorDesign from '../../../assets/lightdesign-8582.webp';
import ModernLayout from '../../../assets/lightdesign-6625.webp';
import ResidentialDesign from '../../../assets/lightdesign-4023.webp';
import ArchitecturalLighting from '../../../assets/lightdesign-4161.webp';
import LuxuryHomeLighting from '../../../assets/lightdesign-6266.webp';

function LightFixture() {
  const hero = {
    icon: <Lamp />,
    title: 'Professional Light Fixture & Chandelier Installation',
    subtitle:
      'Elevate your interior architecture with precise lighting installation. Brentwood Electrical Experts safely hangs heavy foyer chandeliers, mounts ultra-thin recessed LED wafers, wires kitchen pendant lights, and installs Lutron dimming controls across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles.',
    backgroundImage: LightFixtureInstallation,
    button: 'Request Fixture Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Structural Junction Box Bracing',
      'Flicker-Free Dimmer Calibration',
    ],
    icons: [<Star />, <Wrench />, <SlidersHorizontal />],
  };

  const benefits = {
    title: 'Key Advantages of Professional Light Fixture Installation',
    features: [
      'Expert structural mounting and wiring for all fixture types, weights, and ceiling heights',
      'Specialized installation for recessed LED wafers, multi-tier chandeliers, and kitchen pendants',
      'Compatible electronic low-voltage (ELV/MLV) dimmer and smart switch installations',
      'High-efficiency LED retrofits to maximize illumination while lowering electricity costs',
      'Meticulous, damage-free installation with protective drop cloths and clean finish work',
      'Enhanced interior ambiance, architectural focus, and overall property value',
    ],
    image: LightFixtureInstallation,
  };

  const fullDescription = {
    title: 'Professional Light Fixture Installation in West Los Angeles',
    paragraphs: [
      <>
        Hanging a heavy foyer chandelier, aligning a grid of recessed LED
        wafers, or wiring designer pendant lights requires precise structural
        support, careful box bracing, and correct electrical termination. As a{' '}
        <NavLink to='/about'>
          state-certified California C-10 electrical contractor (#1102731)
        </NavLink>{' '}
        serving <NavLink to='/west-los-angeles'>West Los Angeles</NavLink>,
        Brentwood Electrical Experts delivers safe, level, and secure light
        fixture installations.
      </>,

      <>
        Whether you need a statement chandelier hung over a dining table in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>, recessed kitchen lighting
        retrofitted in a <NavLink to='/santa-monica'>Santa Monica</NavLink>{' '}
        townhome, or custom interior designer fixtures installed across luxury
        estates in <NavLink to='/beverly-hills'>Beverly Hills</NavLink> and{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>, our
        licensed team ensures flawless execution.
      </>,

      <>
        Every light fixture project begins with an on-site structural check of
        your ceiling joists and junction box ratings, followed by an itemized,
        transparent written proposal. We upgrade standard boxes to fan-rated or
        heavy-duty structural steel brackets, ensure proper neutral and ground
        connections, and test all devices with compatible dimmers.
      </>,

      <>
        From high-ceiling scaffolding setup to final fixture leveling and
        cleanup, your installation is handled completely in-house. Read our
        verified <NavLink to='/reviews'>client reviews</NavLink> or{' '}
        <NavLink to='/contact'>book your lighting appointment</NavLink> today.
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Light Fixture Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed electrical professionals who treat your interior finishes and
        high-end fixtures with meticulous care. We never guess on ceiling box
        weight limits, we never leave uneven canopies, and we ensure every
        dimmer is calibrated to prevent LED buzzing or flickering.
      </>,

      <>
        Your service starts with a thorough{' '}
        <NavLink to='/contact'>on-site evaluation</NavLink>. A licensed C-10
        electrician inspects your ceiling framing, junction box depth, and
        existing switch legs to confirm they can safely support your chosen
        fixtures. We explain our mounting approach in plain language and provide
        a transparent written estimate before any work begins.
      </>,

      <>
        Electrical work can feel disruptive, which is why our crew prioritizes
        keeping your home spotless. We arrive on schedule, protect your hardwood
        floors and furniture with heavy-duty drop cloths, fish wiring cleanly
        through finished drywall without unnecessary cutting, and test every
        switch and dimmer before cleaning our workspace.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Light Fixtures Process — Step by Step',
    features: [
      {
        title: 'Weight & Wiring Assessment',
        subtitle:
          'We inspect ceiling framing, junction box ratings, and circuit capacity to ensure safe fixture support.',
      },
      {
        title: 'Itemized Proposal & Design',
        subtitle:
          'We discuss mounting heights, aesthetic alignment, and provide transparent flat-rate pricing.',
      },
      {
        title: 'Structural Mounting & Wiring',
        subtitle:
          'We install steel support braces, make secure wire splices, and level canopies or pendants.',
      },
      {
        title: 'Dimmer Calibration & Testing',
        subtitle:
          'We test all fixtures under load, adjust dimmer low-end trim to stop flickering, and verify clean operation.',
      },
    ],
  };

  const safetyDescription = {
    title:
      'NEC Code Compliance, Structural Bracing & Commercial-Grade Hardware',
    paragraphs: [
      <>
        Electrical safety and structural load limits are non-negotiable when
        hanging lighting fixtures. Every installation we complete complies fully
        with the National Electrical Code (NEC) regarding box weight ratings,
        junction box accessibility, IC-rated insulation clearances, and branch
        circuit limits across Los Angeles (LADBS), Santa Monica, Beverly Hills,
        and Culver City. We pull all necessary building permits when required
        for major structural retrofits.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed mounting hardware,
        junction boxes, and wiring components from trusted manufacturers
        including Lutron, Leviton, WAC Lighting, and Halo. From heavy-duty steel
        hanger bars and fire-rated enclosures to flicker-free LED drivers, every
        part is specified for safety and longevity.
      </>,

      <>
        Because lighting controls and solid-state LED fixtures advance
        continuously, our technicians stay current on the latest ELV/MLV dimming
        protocols and Title 24 energy requirements—ensuring your lighting system
        operates flawlessly.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly installs chandeliers, recessed
        lighting, and designer fixtures for homeowners, interior designers, and
        commercial clients across West Los Angeles. Whether your property is
        located in <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
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
        We understand the specific architectural requirements of Westside
        homes—from high-ceiling foyer chandelier rigging in{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink> and{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink> estates to recessed
        LED wafer retrofits in mid-century homes across{' '}
        <NavLink to='/mar-vista'>Mar Vista</NavLink> and{' '}
        <NavLink to='/west-los-angeles'>West LA</NavLink>.
      </>,
      <>
        Ready to transform your interior lighting?{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate,
        or <NavLink to='/contact'>request your installation online</NavLink>{' '}
        today.
      </>,
    ],
  };

  const recents = {
    title: 'Featured Light Fixture & Chandelier Installations Across West LA',
    subtitle:
      'Browse our recent pendant, chandelier, and recessed lighting deployments.',
    features: [
      {
        image: PendantLightInstallation,
        name: 'Modern Kitchen Island Pendant Light Installation',
        location: 'Santa Monica, CA',
      },
      {
        image: ChandelierInstallation,
        name: 'Two-Story Foyer Crystal Chandelier Rigging',
        location: 'Beverly Hills, CA',
      },
      {
        image: RecessedLightingUpgrade,
        name: 'Trimless Recessed LED Wafer Retrofit Grid',
        location: 'Pacific Palisades, CA',
      },
      {
        image: ModernCeilingFixture,
        name: 'Flush-Mount Designer Living Room Fixture',
        location: 'Westwood, CA',
      },
      {
        image: KitchenLightingDesign,
        name: 'Layered Kitchen Task & Ambient LED Lighting',
        location: 'Brentwood, CA',
      },
      {
        image: LivingRoomLightFixture,
        name: 'Contemporary Dining Room Linear Chandelier',
        location: 'Century City, CA',
      },
      {
        image: DesignerLighting,
        name: 'Custom Architectural Art Sconce Installation',
        location: 'West Los Angeles, CA',
      },
      {
        image: CustomInteriorDesign,
        name: 'Master Suite Recessed Gimbal Spotlight Layout',
        location: 'Santa Monica, CA',
      },
      {
        image: ModernLayout,
        name: 'Stairwell Multi-Tier Pendant Light Cluster',
        location: 'Pacific Palisades, CA',
      },
      {
        image: ResidentialDesign,
        name: 'Vaulted Ceiling Timber Beam Lighting Wiring',
        location: 'Brentwood, CA',
      },
      {
        image: ArchitecturalLighting,
        name: 'Library Coved LED Tape Light Integration',
        location: 'Beverly Hills, CA',
      },
      {
        image: LuxuryHomeLighting,
        name: 'Grand Estate Custom Chandelier & Dimmer Retrofit',
        location: 'Bel Air, CA',
      },
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Light Fixture & Chandelier Installations',
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
        'Can you install light fixtures and chandeliers that I have already purchased online or from a retail store?',
      answer:
        'Yes. We frequently install customer-supplied light fixtures, chandeliers, pendant lights, and ceiling fans. During our visit, we verify that your ceiling junction box and structural bracing can safely support the weight of your specific fixture, assemble any complex parts, make secure electrical connections, and level the canopy.',
    },
    {
      question:
        'Do you install recessed lighting in rooms that currently only have center ceiling lights?',
      answer:
        'Absolutely. We specialize in retrofitting recessed LED wafer lights into finished ceilings with minimal drywall disruption. We fish wiring cleanly through ceiling cavities, lay out an even photometric grid, install electronic dimmers, and give your space bright, modern, shadow-free illumination.',
    },
  ];

  const areas = {
    title: 'Light Fixture Installation Across West LA',
    subtitle:
      'We install chandeliers, pendants, and recessed lighting across 28+ Westside and Greater Los Angeles neighborhoods. Select your community below:',
  };

  const detailsButtons = {
    call: 'Call for a Fixture Estimate',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary fixture assessment or request a quote online. Same-day consultations available.',
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
      title: 'Our 4-Step Fixture Process',
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
    title: 'Ready to Upgrade Your Light Fixtures?',
    subtitle:
      'Call (310) 666-4752 to speak with a licensed C-10 electrician (#1102731) or book your lighting estimate online.',
  };

  return (
    <div>
      <title>
        Chandelier & Light Fixture Installation West LA | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrician (#1102731) installing crystal chandeliers, recessed LED wafers, pendant lights, under-cabinet strips & dimmers in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
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

export default LightFixture;
