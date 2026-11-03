import { Building2, Clock, Music, Shield, Star, Zap } from 'lucide-react';
import LocationAbout from '../../../components/location-detail-page/LocationAbout/LocationAbout';
import LocationAllServices from '../../../components/location-detail-page/LocationAllServices/LocationAllServices';
import LocationDetails from '../../../components/location-detail-page/LocationDetails/LocationDetails';
import LocationPopularServices from '../../../components/location-detail-page/LocationPopularServices/LocationPopularServices';
import LocationWhyChooseUs from '../../../components/location-detail-page/LocationWhyChooseUs/LocationWhyChooseUs';
import LocationHero from '../../../components/locations-page/LocationHero';
import StatsSection from '../../../components/Shared/StatsSection/StatsSection';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';
import Testimonials from '../../../components/Shared/Testimonials/Testimonials';
import LocationFAQ from '../../../components/location-detail-page/LocationFAQ/LocationFAQ';
import NearbyAreas from '../../../components/location-detail-page/NearbyAreas/NearbyAreas';
import Footer from '../../../components/Footer/Footer';

function WestHollywoodPage() {
  const hero = {
    area: 'West Hollywood, CA · 90046, 90048, 90069',
    title:
      'West Hollywood Electrician — Licensed & Insured Commercial & Residential Services',
    subtitle:
      'Brentwood Electrical Experts delivers expert electrical services across West Hollywood. From independent municipal commercial tenant improvements and Sunset Strip venue buildouts to multi-unit switchboard upgrades, parking garage EV charging networks, and designer residential lighting, we serve both homes and businesses throughout WeHo.',
    button: 'Request West Hollywood Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'City of West Hollywood Building Division',
      'Multi-Unit & Sunset Strip Experts',
    ],
    icons: [<Star />, <Building2 />, <Music />],
  };

  const about = {
    title: 'About West Hollywood',
    city: 'West Hollywood',
    heading: 'Tailored Electrical Engineering for West Hollywood’s Urban Core',
    challengeTitle:
      'Navigating Multi-Unit Infrastructure and Independent Permitting',
    subtitle:
      'West Hollywood is a creative, vibrant independent municipality of roughly 35,000 residents, globally celebrated for its legendary nightlife, thriving LGBTQ+ culture, prestigious design industry, and dense walk-to-everything urban environment. Operating as an independent city with its own building department, WeHo enforces distinct municipal codes and green building standards.',
    features: [
      {
        item: '1950s–1970s multi-unit apartment complexes and mid-century dingbats',
      },
      { item: 'Boutique condominiums and high-end urban townhomes' },
      {
        item: 'Design-forward residential flats and creative live-work spaces',
      },
      {
        item: 'Iconic Sunset Strip and Santa Monica Blvd commercial mixed-use venues',
      },
    ],
    challenge:
      "West Hollywood's dense concentration of apartments, condominiums, and commercial venues presents unique electrical engineering challenges. Many multi-unit residential buildings feature aging shared electrical infrastructure and outdated sub-distribution switchboards that require systematic modernization. Furthermore, the city's hyper-active restaurant, bar, and entertainment scene demands specialized commercial electrical capabilities, all coordinated through WeHo's independent building and safety department.",
    quote: [
      {
        text: "From Sunset Strip nightclub renovations to condo rewiring projects throughout the city, we understand WeHo's unique blend of commercial energy and residential charm — and the specific permitting requirements of this independent city.",
        subtext: '— Brentwood Electrical Experts, serving West Hollywood',
      },
    ],
  };

  const popular = {
    city: 'West Hollywood',
    cards: [
      {
        title: 'Multi-Unit Building Upgrades',
        subtitle:
          "Main switchboard replacements, individual unit rewiring, and building-wide electrical modernization for West Hollywood's multi-family apartment buildings and HOA properties.",
      },
      {
        title: 'Commercial Venue Electrical',
        subtitle:
          'Full-scope electrical build-outs, three-phase power distribution, and code-compliant lighting for Sunset Strip and Santa Monica Blvd restaurants, bars, and entertainment venues.',
      },
      {
        title: 'Parking Garage EV Charging',
        subtitle:
          'Scalable EV charging infrastructure for WeHo multi-unit buildings—from single-space units to building-wide networked charging arrays with smart load management.',
      },
      {
        title: 'Designer Lighting Installation',
        subtitle:
          "Expert installation of high-end decorative light fixtures, architectural cove illumination, and museum-grade art lighting for West Hollywood's design-forward residences.",
      },
    ],
  };

  const details = {
    city: 'West Hollywood',
    heading: 'Your Trusted Local Electrician in West Hollywood, California',
    pharagraphs: [
      {
        text: 'West Hollywood is fundamentally a city of renters, condo owners, and multi-family residents, with apartment buildings and shared-living structures accounting for the vast majority of its housing stock. Many of these residential properties—constructed primarily during the 1960s and 1970s—feature aging shared electrical infrastructure, including legacy main distribution switchboards, branch aluminum wiring in individual living spaces, and inadequate ampacity headroom for contemporary appliances or in-unit laundry. We partner directly with HOAs, property management firms, and building owners to systematically overhaul these systems—replacing main switchgear, rewiring individual units to modern copper standards, and engineering necessary capacity for central HVAC and garage EV charging.',
      },
      {
        text: 'Meanwhile, the iconic Sunset Strip and Santa Monica Boulevard commercial corridors house some of the most famous restaurants, lounges, music venues, and fashion boutiques in the world. These high-energy commercial spaces present intense, demanding electrical requirements: heavy-duty commercial kitchen equipment circuits, sophisticated architectural sound and lighting control grids, custom neon and LED signage, heavy refrigeration, and robust HVAC loads. We provide full-scope commercial electrical services including tenant improvement build-outs, three-phase power distribution, life-safety emergency lighting, and exit signage.',
      },
      {
        text: 'West Hollywood has consistently maintained its position at the vanguard of municipal EV adoption, enacting aggressive local mandates for EV-ready infrastructure in multi-family new construction and major property renovations. We assist building owners and HOA boards in achieving full compliance by engineering comprehensive parking garage EV charging infrastructure—managing heavy conduit runs, power distribution panels, and smart-metered chargers in subterranean and surface parking structures.',
      },
      {
        text: 'Additionally, WeHo’s thriving interior design community—anchored by the world-renowned Pacific Design Center—means local residences frequently feature highly refined interior finishes that demand exceptional electrical precision. We install complex decorative fixtures specified by leading interior designers, custom under-cabinet LED strips, museum-quality art spot lighting, and concealed floor boxes designed to preserve clean architectural sightlines.',
      },
    ],
    features: [
      { item: 'Sunset Strip' },
      { item: 'Santa Monica Blvd' },
      { item: 'West Hollywood Park' },
      { item: 'Pacific Design Center' },
      { item: 'Chateau Marmont' },
    ],
  };

  const servicesStats = [
    { icon: <Star />, raiting: '5.0', title: 'Google Rating' },
    { icon: <Zap />, raiting: '1000+', title: 'Projects Completed' },
    { icon: <Clock />, raiting: '24/7', title: 'Emergency Service' },
    { icon: <Shield />, raiting: '100%', title: 'Licensed & Insured' },
  ];

  const reviews = {
    title: 'What Our Clients Say',
    subtitle: '5-star rated across Google, Yelp, and Birdeye',
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

  const faqs = {
    city: 'West Hollywood',
    features: [
      {
        question: "Is West Hollywood's permitting process different from LA?",
        answer:
          "Yes — West Hollywood is an independent city with its own Community Development Department that handles building permits and inspections. We're thoroughly familiar with WeHo's specific requirements and streamlined permitting process.",
      },
      {
        question:
          'Can you install EV chargers in a West Hollywood apartment or condo parking garage?',
        answer:
          'Yes — we specialize in multi-unit EV charger installations throughout West Hollywood. We work with your HOA or property manager to design a solution that serves current needs while allowing for future expansion. This includes panel upgrades, conduit installation through parking structures, and metering solutions.',
      },
      {
        question:
          'Do you handle commercial electrical for Sunset Strip restaurants and bars?',
        answer:
          "Absolutely. We've wired numerous Sunset Strip venues — restaurants, bars, and retail spaces. Our commercial services include kitchen equipment circuits, sound and lighting infrastructure, signage electrical, beer system refrigeration, and emergency lighting systems.",
      },
      {
        question: 'Can you rewire an older condo unit in West Hollywood?',
        answer:
          "Yes — many 1960s and 1970s WeHo condos have original wiring that may include aluminum conductors. We rewire individual units with modern copper wiring, upgrade the unit's sub-panel, and install GFCI/AFCI protection in all required locations. We coordinate with the HOA and adjacent units to minimize disruption.",
      },
      {
        question:
          'Do you install decorative and designer lighting fixtures in WeHo?',
        answer:
          'Yes. We regularly work with interior designers and homeowners to install high-end decorative fixtures — chandeliers, sconces, pendant clusters, and architectural lighting. We handle proper structural support, dimmer compatibility, and color temperature matching for the best possible result.',
      },
      {
        question:
          'Can you add in-unit laundry electrical to a West Hollywood condo?',
        answer:
          "Yes — adding a washer/dryer often requires a new dedicated 30-amp 240V circuit for the dryer and a 20-amp circuit for the washer. We run new wiring from your unit's sub-panel (upgrading it if necessary) and install the required outlets. We coordinate with your HOA for any building-level approvals.",
      },
    ],
  };

  const areas = {
    city: 'West Hollywood',
    features: [
      { item: 'Beverly Hills', slug: 'beverly-hills' },
      { item: 'Hollywood', slug: 'hollywood' },
      { item: 'Beverly Grove', slug: 'beverly-grove' },
      { item: 'Fairfax', slug: 'fairfax' },
      { item: 'Silver Lake', slug: 'silver-lake' },
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
        West Hollywood Electrician | Multi-Unit & Sunset Strip TIs | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving West Hollywood (90046, 90048, 90069). Independent city permits, multi-unit EV chargers & Sunset Strip commercial buildouts. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='West Hollywood' />
      <LocationAllServices city='West Hollywood' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default WestHollywoodPage;
