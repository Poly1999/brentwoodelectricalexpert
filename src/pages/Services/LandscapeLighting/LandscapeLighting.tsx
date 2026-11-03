import '../../../components/service-detail-page/ServiceDetailLayout.css';

import {
  BatteryCharging,
  BuildingComplex,
  Clock,
  DollarSign,
  GitGraph,
  MapPin,
  Shield,
  Smartphone,
  Star,
  SunMedium,
  Zap,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

import LandscapeLightingInstallation from '../../../assets/security-lighting-floodlight.jpg';

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

function LandscapeLighting() {
  const hero = {
    icon: <SunMedium />,
    title: 'Architectural Landscape & Outdoor LED Lighting Installation',
    subtitle:
      'Showcase your architecture, mature specimen trees, and outdoor living spaces after sunset with custom-engineered exterior illumination. Brentwood Electrical Experts designs and installs solid-brass 12V LED landscape lighting, multi-tap stainless steel transformers, hardscape step lights, and smart astronomical controls across Brentwood, Santa Monica, Pacific Palisades, Bel Air, Beverly Hills, and West Los Angeles.',
    backgroundImage: LandscapeLightingInstallation,
    button: 'Schedule Evening Design Walk',
  };

  const badges = {
    items: [
      'C-10 Licensed (#1102731)',
      'Marine-Grade Brass Fixtures',
      'Smart App & Dusk Control',
      'Upfront Flat-Rate Bids',
    ],
    icons: [<Shield />, <Star />, <Smartphone />, <DollarSign />],
  };

  const benefits = {
    title: 'Advantages of Custom Low-Voltage Landscape Lighting',
    features: [
      'Architectural Curb Appeal: Layered specimen tree uplighting, canopy moonlighting, and stone facade grazing.',
      'Safe Nighttime Navigation: Glare-free pathway bollards, recessed masonry step lights, and driveway markers.',
      'Ultra-Efficient 12V LED Optics: Cut energy consumption by up to 80% compared to legacy halogen outdoor systems.',
      'Automated Sunset & App Control: Astronomical digital timers, photocell sensors, and Lutron/smartphone integration.',
      'Coastal & Hillside Durability: Solid cast-brass and marine-grade stainless housings impervious to salt air.',
      'NEC-Compliant Trenching & Power: Dedicated GFCI branch circuits, voltage-drop balancing, and waterproof gel splices.',
    ],
    image: LandscapeLightingInstallation,
  };

  const fullDescription = {
    title:
      'Custom Outdoor & Landscape Lighting Engineering in West Los Angeles',
    paragraphs: [
      <>
        Brentwood Electrical Experts provides professional, custom-tailored
        exterior lighting engineering to elevate safety, security, and visual
        aesthetics across your entire property footprint. Whether accenting
        mature heritage trees, illuminating uneven pathway transitions, or
        establishing resort-style ambiance around pools and patios, our
        design-build solutions use heavy-duty components built to last a
        lifetime. See our <NavLink to='/reviews'>customer reviews</NavLink> or{' '}
        <NavLink to='/contact'>request a free estimate.</NavLink>
      </>,
    ],
  };

  const expectationsDescription = {
    title: 'What to Expect From Our Landscape Lighting Service',
    paragraphs: [
      <>
        When you hire Brentwood Electrical Experts, you work directly with
        licensed electrical professionals who treat your gardens, hardscaping,
        and architecture with meticulous care. We never leave shallow cables
        exposed to gardening tools, we never use cheap plastic or aluminum
        stakes that corrode in a single season, and we seal every underground
        splice against moisture intrusion.
      </>,

      <>
        Your project begins with a comprehensive{' '}
        <NavLink to='/contact'>property walk-through</NavLink>. A licensed C-10
        electrician evaluates your focal trees, architectural stonework, outdoor
        kitchen/patio zones, and existing exterior power sources. We design a
        layered lighting plan tailored to your property and provide a clear,
        itemized written estimate before any work begins.
      </>,

      <>
        We know you have invested heavily in your landscaping and hardscape,
        which is why our crew prioritizes non-invasive installation techniques.
        We slit-trench neatly beneath turf and mulch beds, core-drill masonry
        cleanly where needed, and leave your grounds immaculate when the
        installation is complete.
      </>,
    ],
  };

  const featuresDescription = {
    title: 'Our Landscape Lighting Process — Step by Step',
    features: [
      {
        title: 'Architectural & Garden Design Walk',
        subtitle:
          'We evaluate your trees, walkways, facades, and outdoor living zones to plan beam angles, lumen outputs, and lighting layers. Verification: A comprehensive lighting map is created to highlight key focal points and address safety zones.',
      },
      {
        title: 'Fixture-by-Fixture Flat-Rate Proposal',
        subtitle:
          'You receive an itemized layout specifying brass fixture models, transformer sizing, and transparent upfront pricing. Verification: Review and approval of a clear, fixed-price bid with zero hidden upgrade fees.',
      },
      {
        title: 'Stainless Transformer & Burial Wiring',
        subtitle:
          'We mount multi-tap stainless steel transformers, install dedicated GFCI power if needed, and bury direct-burial copper cables cleanly. Verification: Voltage-drop testing ensures uniform light output across all branch runs.',
      },
      {
        title: 'Precision Fixture & Hardscape Mounting',
        subtitle:
          'We set solid-brass uplights, path lights, well lights, and step fixtures using waterproof silicone-gel connectors. Verification: Every connection is hand-sealed and mechanically secured against movement.',
      },
      {
        title: 'Evening Focus & Smart Automation',
        subtitle:
          'We fine-tune glare shields and beam angles after dark and program your astronomical timers, photocells, or smart app controls. Verification: Nighttime inspection confirms ideal aesthetic highlighting and seamless automatic operation.',
      },
    ],
  };

  const safetyDescription = {
    title: 'NEC Article 411/680 Compliance & Marine-Grade Brass Hardware',
    paragraphs: [
      <>
        Outdoor electrical safety—especially around irrigation zones, pools, and
        spas—is our highest priority. Every landscape lighting system we install
        strictly complies with the National Electrical Code (NEC), including NEC
        Article 411 (low-voltage lighting systems), NEC Article 680 (pool and
        fountain proximity clearances), and local municipal codes across Los
        Angeles (LADBS), Santa Monica, and Beverly Hills.
      </>,

      <>
        We build exclusively with commercial-grade, UL-listed outdoor components
        from premier manufacturers including FX Luminaire, WAC Landscape, Volt,
        and Lutron. From heavy-walled cast-brass fixtures and stainless steel
        multi-tap transformers (12V-15V) to heavy-gauge direct-burial copper
        wire and grease-filled waterproof wire nuts, every component is
        engineered to resist coastal corrosion and water wicking.
      </>,
    ],
  };

  const coverageDescription = {
    title: 'Serving Brentwood, Santa Monica & 28+ Westside Neighborhoods',
    paragraphs: [
      <>
        Brentwood Electrical Experts proudly designs, installs, and retrofits
        custom landscape lighting systems for homeowners, HOAs, and commercial
        properties across West Los Angeles. Whether your property is located in{' '}
        <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
        <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
        <NavLink to='/beverly-hills'>Beverly Hills</NavLink>, or any of the{' '}
        <NavLink to='/all-locations'>28+ Greater LA communities</NavLink> we
        cover, our licensed crew is ready to help.
      </>,
      <>
        We understand the distinct outdoor environments of the Westside—from
        protecting coastal fixtures against marine air corrosion in{' '}
        <NavLink to='/santa-monica'>Santa Monica</NavLink> and{' '}
        <NavLink to='/venice'>Venice</NavLink>, to illuminating expansive canyon
        estates in Mandeville Canyon and{' '}
        <NavLink to='/bel-air'>Bel Air</NavLink>, and creating inviting backyard
        entertaining spaces in <NavLink to='/mar-vista'>Mar Vista</NavLink> and{' '}
        <NavLink to='/culver-city'>Culver City</NavLink>.{' '}
        <a href='tel:+13106664752'>Call (310) 666-4752</a> for a free estimate
        or <NavLink to='/contact'>request a quote online</NavLink> today.
      </>,
    ],
  };

  const reviews = {
    title: 'Verified Client Reviews: Custom Landscape & Outdoor Lighting',
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
        'How much does professional landscape lighting installation cost in Los Angeles?',
      answer:
        'The cost of a custom low-voltage LED landscape lighting system in West Los Angeles depends on the number of solid-brass fixtures, the capacity of the stainless steel transformer, and the complexity of trenching or hardscape core-drilling. Most residential starter packages (8–12 fixtures for front curb appeal or a backyard patio) range from $2,500 to $4,500, while comprehensive multi-zone estate systems typically range from $5,500 to $15,000+. We provide an exact, fixture-by-fixture flat-rate quote after walking your property.',
    },
    {
      question:
        'Is landscape lighting low-voltage (12V) or line-voltage (120V)?',
      answer:
        'Modern residential and commercial landscape lighting is almost exclusively 12V–15V low-voltage LED powered by a step-down transformer plugged into a dedicated 120V GFCI outdoor receptacle. Low-voltage systems are significantly safer around children, pets, irrigation lines, and pool decks, while offering precision beam optics and effortless expandability. When high-draw 120V circuits are needed for outdoor heaters, pergolas, or spa equipment, our C-10 electricians install those in buried Schedule 80 conduit.',
    },
    {
      question:
        'Will running landscape lighting every night noticeably raise my electric bill?',
      answer:
        'Very little. Because commercial-grade LED landscape fixtures consume only 3 to 9 watts each (compared to 35 to 50 watts per bulb in older halogen systems), a complete 15-fixture LED system uses less electricity than a single old 100-watt household incandescent bulb—typically adding only $5 to $12 per month to your utility bill when run from dusk until midnight.',
    },
    {
      question:
        'Do you also install high-output outdoor security and motion floodlighting?',
      answer:
        'Yes. In addition to aesthetic architectural and garden illumination, our licensed C-10 electricians install high-output security floodlights, motion sensors, infrared surveillance lighting, and hardwired perimeter security systems integrated seamlessly with smart home platforms.',
    },
  ];

  const areas = {
    title: 'Landscape Lighting Across West LA',
    subtitle:
      'We provide landscape lighting installation services throughout West Los Angeles and surrounding communities. Click your area to learn more.',
  };

  const detailsButtons = {
    call: 'Call for a Lighting Estimate',
    quote: 'Request Quote Online',
  };

  const sidebar = {
    ctaTitle: 'Speak With a C-10 Electrician',
    ctaText:
      'Book a complimentary outdoor lighting walk-through or request a quote online.',
    navTitle: 'Our Electrical Services',
    whyTitle: 'Why West LA Chooses Us',
    whyItems: [
      '5.0-Star Rated (100+ Reviews)',
      'C-10 Licensed & Insured (#1102731)',
      'Solid-Brass Marine-Grade Fixtures',
      'Itemized Flat-Rate Proposals',
      'Serving 28+ Westside Areas',
    ],
    whyIcons: [<Star />, <Shield />, <Clock />, <DollarSign />, <MapPin />],
    areasTitle: 'Core Service Territory',
    process: {
      title: 'Our 5-Step Landscape Lighting Process',
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
        Architectural Landscape & Outdoor LED Lighting West LA | C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electrical contractor (#1102731) designing and installing solid-brass low-voltage LED landscape lighting, tree uplights & path illumination in Brentwood, Santa Monica & West LA. Call (310) 666-4752.'
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

export default LandscapeLighting;
