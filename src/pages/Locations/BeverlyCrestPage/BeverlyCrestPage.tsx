import { Clock, Flame, Mountain, Shield, Star, Zap } from 'lucide-react';
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

function BeverlyCrestPage() {
  const hero = {
    area: 'Beverly Crest, CA · 90210',
    title:
      'Beverly Crest Electrician — Licensed & Insured Hillside & Fire-Hardened Services',
    subtitle:
      'Brentwood Electrical Experts provides professional, specialized electrical services to Beverly Crest residents. From steep hillside service runs and WUI fire-hardened electrical systems to whole-home backup generators and elevated outdoor living power grids, our licensed C-10 electricians deliver reliable, code-compliant work for this challenging canyon community.',
    button: 'Request Beverly Crest Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Hillside & Canyon Access Specialists',
      'WUI Fire-Hardening & Generators',
    ],
    icons: [<Star />, <Mountain />, <Flame />],
  };

  const about = {
    title: 'About Beverly Crest',
    city: 'Beverly Crest',
    heading:
      'Electrical Services Tailored to Beverly Crest Hillside Topography',
    challengeTitle:
      'Mastering Steep Terrain, Long Service Runs, and Fire Safety',
    subtitle:
      'Beverly Crest is an exclusive, prestigious hillside residential community dramatically situated along the ridges between Beverly Hills, Studio City, and Bel Air. Offering breathtaking city and canyon views, the neighborhood combines secluded mountain living with immediate access to the Westside and the Valley.',
    features: [
      {
        item: 'Hillside contemporary homes and architectural multi-story estates',
      },
      { item: 'Secluded canyon residences and ridge-line properties' },
      { item: 'Gated compound estates and luxury custom builds' },
    ],
    challenge:
      "Beverly Crest's steep hillside terrain, winding roads, and narrow canyon access present significant logistical and engineering hurdles. Many properties feature extraordinarily long service runs from distant utility poles, requiring specialized feeder sizing and trenching. Furthermore, the community's strict location within a High Fire Hazard Severity Zone necessitates rigorous fire-hardened electrical systems to protect against wildfire risks.",
    quote: [
      {
        text: "Our crews are experienced with Beverly Crest's steep driveways, limited access, and hillside construction — we bring the right equipment and expertise for canyon properties.",
        subtext: '— Brentwood Electrical Experts, serving Beverly Crest',
      },
    ],
  };

  const popular = {
    city: 'Beverly Crest',
    cards: [
      {
        title: 'Hillside Home Electrical',
        subtitle:
          "Specialized electrical services engineered for Beverly Crest's challenging hillside properties—including long service entrance runs, steep access logistics, and terrain-adapted conduit routing.",
      },
      {
        title: 'Fire-Hardened Electrical Systems',
        subtitle:
          'Underground utility conversions, ember-resistant NEMA enclosures, whole-home surge suppression, and automatic standby generators designed for high-risk WUI fire zones.',
      },
      {
        title: 'Outdoor Living Electrical',
        subtitle:
          'Swimming pool and spa equipment feeds, outdoor kitchen culinary circuits, hillside landscape lighting, and entertainment electrical for elevated canyon outdoor spaces.',
      },
    ],
  };

  const details = {
    city: 'Beverly Crest',
    heading: 'Your Trusted Local Electrician in Beverly Crest, California',
    pharagraphs: [
      {
        text: 'Beverly Crest’s luxury hillside residences cling dramatically to the steep ridges and wooded canyon walls stretching between Beverly Hills and the San Fernando Valley. These remarkable properties present highly specialized electrical challenges: extremely long wire runs from distant utility transformers, steep topography that severely complicates trenching and conduit installation, and restricted driveway access that requires precise equipment staging and specialized vehicles. Our team boasts extensive, hands-on experience navigating these complex logistics, delivering flawless electrical installations to some of Beverly Crest’s most challenging and remote sites.',
      },
      {
        text: 'Wildfire preparedness and grid resilience are paramount priorities for Beverly Crest homeowners. Because the community is situated entirely within a Very High Fire Hazard Severity Zone, local properties require fully hardened electrical infrastructure: underground service entrance conversions, ember-resistant exterior enclosures, whole-home surge protection devices, and automatic standby generators. We design and install robust, fire-resilient electrical systems that satisfy the strictest California Wildland-Urban Interface (WUI) building codes, providing absolute protection and peace of mind during red-flag weather events.',
      },
      {
        text: 'Furthermore, many Beverly Crest homes maximize their elevated ridgeline positions with expansive outdoor living amenities—including cantilevered viewing terraces, infinity-edge swimming pools, outdoor culinary kitchens, and built-in fire pits—all of which demand heavy-duty outdoor electrical engineering. We install weather-rated subpanels, GFCI-protected wet-zone circuits, automated hillside landscape lighting, and outdoor entertainment wiring designed to withstand harsh exposure to the hillside elements while delivering luxury convenience and ambiance.',
      },
    ],
    features: [
      { item: 'Franklin Canyon Park' },
      { item: 'Coldwater Canyon' },
      { item: 'TreePeople Park' },
      { item: 'Mulholland Drive Ridge' },
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
    city: 'Beverly Crest',
    features: [
      {
        question: 'Can you access homes on steep Beverly Crest streets?',
        answer:
          "Yes — we're experienced with Beverly Crest's steep, narrow roads and driveways. We use appropriately sized vehicles and equipment to access even the most challenging hillside properties.",
      },
      {
        question: 'Do you install generators for Beverly Crest homes?',
        answer:
          'Yes — generators are essential for hillside Beverly Crest properties vulnerable to PSPS shutoffs. We install Generac and Kohler standby generators with automatic transfer switches for seamless backup power.',
      },
      {
        question:
          'What fire-hardening electrical work do you do in Beverly Crest?',
        answer:
          'We install underground service entrances, ember-resistant panel enclosures, whole-home surge protection, and hardwired smoke/CO detection systems — all designed to meet WUI fire code requirements.',
      },
      {
        question:
          'Can you install outdoor kitchen electrical on a Beverly Crest hillside?',
        answer:
          'Absolutely. We install weather-rated outlets, dedicated circuits for outdoor appliances, landscape lighting, and fire pit ignition wiring on hillside decks and terraces throughout Beverly Crest.',
      },
    ],
  };

  const areas = {
    city: 'Beverly Crest',
    features: [
      { item: 'Beverly Hills', slug: 'beverly-hills' },
      { item: 'Bel Air', slug: 'bel-air' },
      { item: 'West Hollywood', slug: 'west-hollywood' },
      { item: 'Beverly Glen', slug: 'beverly-glen' },
      { item: 'Studio City', slug: 'studio-city' },
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
        Beverly Crest Electrician | Hillside & Fire-Hardened Electrical | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Beverly Crest (90210). Steep terrain hillside electrical, WUI fire-hardening & backup generator installations. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Beverly Crest' />
      <LocationAllServices city='Beverly Crest' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default BeverlyCrestPage;
