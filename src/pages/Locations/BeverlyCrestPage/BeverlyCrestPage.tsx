import { Clock, Shield, Star, Zap } from 'lucide-react';
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
    title: 'Beverly Crest Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts provides professional electrical services to Beverly Crest residents. Our licensed team handles panel upgrades, lighting installations, electrical troubleshooting, and more for homes in this hillside community.',
  };

  const about = {
    title: 'About Beverly Crest',
    city: 'Beverly Crest',
    subtitle:
      'Beverly Crest is a hillside residential community situated between Beverly Hills, Studio City, and Bel Air, offering canyon living with stunning city views.',
    features: [
      { item: 'Hillside contemporary homes' },
      { item: 'Canyon residences' },
      { item: 'Gated estates' },
    ],
    challenge:
      "Beverly Crest's steep hillside terrain and narrow canyon roads make access challenging. Many homes have long service runs from utility poles, and wildfire risk necessitates fire-hardened electrical systems.",
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
          "Specialized electrical services for Beverly Crest's challenging hillside properties — long service runs, steep access, and terrain-adapted installations.",
      },
      {
        title: 'Fire-Hardened Electrical Systems',
        subtitle:
          'Underground services, ember-resistant enclosures, and backup generators for fire-zone Beverly Crest homes.',
      },
      {
        title: 'Outdoor Living Electrical',
        subtitle:
          "Pool equipment, outdoor kitchen circuits, landscape lighting, and entertainment electrical for Beverly Crest's elevated outdoor living spaces.",
      },
    ],
  };

  const details = {
    city: 'Beverly Crest',
    pharagraphs: [
      {
        text: "Beverly Crest's hillside homes cling to the ridges and canyon walls between Beverly Hills and the San Fernando Valley. These properties present unique electrical challenges: long runs from utility transformers, steep terrain that complicates trenching and conduit installation, and limited driveway access that requires careful equipment staging. Our team has extensive experience navigating these logistics, delivering quality electrical work to some of Beverly Crest's most challenging sites.",
      },
      {
        text: "Wildfire preparedness is a top priority for Beverly Crest homeowners. The community's location in the Very High Fire Hazard Severity Zone means homes should have hardened electrical systems — underground service entrances, ember-resistant enclosures, whole-home surge protection, and backup generator systems. We design and install fire-resilient electrical infrastructure that meets the latest WUI building codes and provides peace of mind.",
      },
      {
        text: 'Many Beverly Crest homes take advantage of their elevated positions with expansive outdoor living areas — terraces, infinity pools, outdoor kitchens, and fire pits — all of which require robust outdoor electrical systems. We install weather-rated panels, GFCI-protected circuits, landscape lighting, and outdoor entertainment electrical designed to withstand the hillside elements while providing the convenience and ambiance homeowners expect.',
      },
    ],
    features: [
      { item: 'Franklin Canyon Park' },
      { item: 'Coldwater Canyon' },
      { item: 'TreePeople Park' },
    ],
  };

  const servicesStats = [
    { icon: <Star />, raiting: '5.0', title: 'Google Rating' },
    { icon: <Zap />, raiting: '1000+', title: 'Projects Completed' },
    { icon: <Clock />, raiting: '24/7', title: 'Emergency Service' },
    { icon: <Shield />, raiting: '100%', title: 'Licensed & Insured' },
  ];

  const reviews = [
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
  ];

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

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Beverly Crest' />
      <LocationAllServices city='Beverly Crest' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default BeverlyCrestPage;
