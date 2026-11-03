import { ClipboardCheck, Clock, Flame, Shield, Star, Zap } from 'lucide-react';
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

function PacificPalisadesPage() {
  const hero = {
    area: 'Pacific Palisades, CA · 90272',
    title:
      'Pacific Palisades Electrician — Licensed & Insured Coastal & Rebuild Electrical Services',
    subtitle:
      'Brentwood Electrical Experts serves Pacific Palisades homeowners with premium electrical services. From post-fire electrical rebuilds and whole-home standby generators to wildland-urban interface (WUI) fire-hardening and luxury Lutron lighting control, our licensed C-10 electricians provide meticulous, code-compliant work for this prestigious coastal community.',
    button: 'Request Pacific Palisades Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Fire Rebuild & LADBS Permit Experts',
      'WUI Fire-Hardening Specialists',
    ],
    icons: [<Star />, <ClipboardCheck />, <Flame />],
  };

  const about = {
    title: 'About Pacific Palisades',
    city: 'Pacific Palisades',
    heading:
      'Electrical Services Tailored to Pacific Palisades Architecture & Terrain',
    challengeTitle:
      'Navigating Hillside Construction, Wildfire Risk, and Rebuilds',
    subtitle:
      'Pacific Palisades is a prestigious coastal residential enclave nestled between Santa Monica and Malibu, home to approximately 27,000 residents. Renowned for its dramatic canyon trails, sweeping ocean views, and close-knit family community, the Palisades blends natural coastal beauty with refined architectural living.',
    features: [
      { item: 'Coastal contemporary and modern architectural custom estates' },
      { item: 'Mediterranean Revival villas and luxury hillside properties' },
      { item: 'Mid-century canyon homes and woodland retreats' },
      { item: 'Post-fire new construction and ground-up residential rebuilds' },
    ],
    challenge:
      'Pacific Palisades properties face a complex combination of challenging hillside topography, severe wildfire risks, and corrosive coastal exposure. Many homes in Temescal Canyon, the Riviera, and the Highlands feature long driveway runs requiring extensive underground conduit feeds. Furthermore, following local wildfire events, our team has been deeply committed to helping homeowners navigate fire-zone permitting, WUI codes, and complete ground-up electrical rebuilds.',
    quote: [
      {
        text: "In the wake of local wildfire events, our team has been on the front lines helping homeowners rebuild. We understand the fire rebuild permitting process, documentation requirements, and insurance coordination — and we're committed to helping our Palisades neighbors restore their homes.",
        subtext: '— Brentwood Electrical Experts, serving Pacific Palisades',
      },
    ],
  };

  const popular = {
    city: 'Pacific Palisades',
    cards: [
      {
        title: 'Fire Rebuild Electrical',
        subtitle:
          'Complete, ground-up electrical system installation for Pacific Palisades homes undergoing post-fire rebuilding—engineered from service entrance to final fixture, fully permitted and inspected.',
      },
      {
        title: 'Whole-Home Generator Systems',
        subtitle:
          'Protect your Palisades family from PSPS shutoffs and grid instability with a Generac or Kohler standby generator featuring automatic power transfer in under 10 seconds.',
      },
      {
        title: 'Luxury Lighting Control',
        subtitle:
          "Lutron RadioRA 3, Ketra tunable circadian lighting, and custom whole-home architectural lighting design tailored for Pacific Palisades' finest custom residences.",
      },
      {
        title: 'Canyon Driveway & Landscape Lighting',
        subtitle:
          'Professional low-voltage landscape lighting design and installation for winding Pacific Palisades canyon properties—delivering safety, security, and striking curb appeal.',
      },
    ],
  };

  const details = {
    city: 'Pacific Palisades',
    heading: 'Your Trusted Local Electrician in Pacific Palisades, California',
    pharagraphs: [
      {
        text: "Recent wildfire seasons have left an indelible mark on the Pacific Palisades community, damaging or destroying hundreds of residential properties. As a trusted West LA-based electrical contractor, we have worked on the front lines of the neighborhood's recovery effort—executing complete, ground-up electrical system installations for new construction homes, repairing fire-exposed main service panels, and assisting homeowners through the intricate municipal permitting process required for fire-zone rebuilding. If your Pacific Palisades property was impacted, our licensed team is here to help you rebuild securely and efficiently.",
      },
      {
        text: 'For Palisades homes that were spared, comprehensive fire preparedness has become an absolute priority. We install hardwired whole-home standby generators equipped with automatic transfer switches, ensuring your household maintains continuous power during Public Safety Power Shutoff (PSPS) events and utility grid failures. Additionally, we install ember-resistant exterior electrical enclosures, heavy-duty underground service entrance cables, and fire-rated junction boxes designed to satisfy strict California wildland-urban interface (WUI) building codes. These safeguards represent vital protections for any property situated in a high-risk hillside zone.',
      },
      {
        text: 'The Palisades Riviera and Castellammare neighborhoods showcase some of the most architecturally significant residences on the entire Westside. These luxury estates demand power systems that match their caliber: whole-home lighting control platforms by Lutron and Ketra, integrated audio-visual wiring, automated motorized window shades, and dedicated high-amperage circuits for wine cellars, home screening rooms, and professional culinary kitchens. Our technicians possess the specialized expertise required to engineer and install these sophisticated systems with flawless precision.',
      },
      {
        text: 'Furthermore, canyon living across Temescal, Santa Ynez, and Los Liones presents unique logistical challenges. Long, winding hillside driveways require robust underground landscape lighting infrastructure for nighttime safety and visual appeal. Remote terrain often involves extended utility runs and the deployment of auxiliary generators during active construction phases. We have mastered these canyon-specific obstacles, delivering dependable electrical solutions for even the most isolated Palisades properties.',
      },
    ],
    features: [
      { item: 'Palisades Village' },
      { item: 'Will Rogers State Beach' },
      { item: 'Temescal Gateway Park' },
      { item: 'Getty Villa' },
      { item: 'Self-Realization Fellowship Lake Shrine' },
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
    city: 'Pacific Palisades',
    features: [
      {
        question:
          'Can you help rebuild the electrical system for a fire-damaged Pacific Palisades home?',
        answer:
          'Yes — we are actively helping Pacific Palisades homeowners rebuild after the 2025 fire. We perform complete electrical system installations for new construction on fire-damaged lots, including new service entrance, panel, and whole-home wiring. We coordinate with the City of LA fire-rebuild permitting process and work alongside your general contractor.',
      },
      {
        question:
          'What fire-hardening electrical upgrades do you recommend for Pacific Palisades homes?',
        answer:
          'We recommend underground service entrance cables (instead of overhead), ember-resistant panel enclosures, whole-home surge protection, hardwired backup generators, and fire-rated junction boxes. These upgrades align with current WUI (wildland-urban interface) building codes and provide meaningful protection.',
      },
      {
        question:
          'Do you install generators for Pacific Palisades homes affected by PSPS shutoffs?',
        answer:
          'Yes — PSPS events have become increasingly common in Pacific Palisades, especially in canyon and hillside areas. We install Generac and Kohler whole-home generators with automatic transfer switches that restore power within seconds of an outage, keeping your lights, refrigerator, medical equipment, and security systems running.',
      },
      {
        question:
          'Can you install landscape lighting along a long Pacific Palisades driveway?',
        answer:
          'Absolutely. Long driveways are a hallmark of Palisades canyon and hillside homes. We install low-voltage LED pathway lighting, bollard lights, and tree uplighting along driveways for both safety and curb appeal. All fixtures are rated for outdoor use and connected to photocells or smart timers for automatic operation.',
      },
      {
        question:
          'How does the Pacific Palisades rebuild permitting process work?',
        answer:
          "Fire-zone rebuilds in Pacific Palisades go through the City of LA's expedited fire-rebuild permitting track. Electrical permits are included in the overall building permit. We prepare all electrical plans, load calculations, and documentation required for permit submission and coordinate directly with LADBS inspectors.",
      },
      {
        question:
          'Do you install Lutron whole-home lighting systems in Pacific Palisades estates?',
        answer:
          'Yes — we are experienced Lutron and Ketra lighting control installers. We design and install RadioRA 3, Caseta, and HomeWorks QSX systems for Pacific Palisades luxury homes, providing whole-home dimming, automated scenes, and integration with smart home platforms.',
      },
    ],
  };

  const areas = {
    city: 'Pacific Palisades',
    features: [
      { item: 'Brentwood', slug: 'brentwood' },
      { item: 'Santa Monica', slug: 'santa-monica' },
      { item: 'Malibu', slug: 'malibu' },
      { item: 'Bel Air', slug: 'bel-air' },
      { item: 'Topanga', slug: 'topanga' },
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
        Pacific Palisades Electrician | Fire Rebuilds & Standby Generators |
        C-10 #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Pacific Palisades (90272). Post-fire electrical rebuilds, whole-home standby generators, WUI fire-hardening & Lutron lighting. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Pacific Palisades' />
      <LocationAllServices city='Pacific Palisades' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default PacificPalisadesPage;
