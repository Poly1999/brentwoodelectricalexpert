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

function SimiValleyPage() {
  const hero = {
    area: 'Simi Valley, CA · 93063, 93065',
    title: 'Simi Valley Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts now serves Simi Valley with professional residential and commercial electrical services. Our licensed team handles panel upgrades, EV charger installations, lighting, and all electrical needs for this growing community.',
  };

  const about = {
    title: 'About Simi Valley',
    city: 'Simi Valley',
    subtitle:
      'Simi Valley is a suburban city of about 127,000 residents in Ventura County, known for its family-friendly neighborhoods, excellent schools, and the Ronald Reagan Presidential Library.',
    features: [
      { item: 'Suburban tract homes' },
      { item: 'Master-planned community houses' },
      { item: 'Newer construction' },
    ],
    challenge:
      "Simi Valley's primarily residential, suburban character means most work involves panel upgrades for older tract homes, EV charger installations, and support for the growing trend of solar and battery storage systems.",
    quote: [
      {
        text: 'We extend our Westside quality and reliability to Simi Valley — professional electrical services for a community that values family, safety, and home investment.',
        subtext: '— Brentwood Electrical Experts, serving Simi Valley',
      },
    ],
  };

  const popular = {
    city: 'Simi Valley',
    cards: [
      {
        title: 'Tract Home Panel Upgrades',
        subtitle:
          "200-amp panel upgrades for Simi Valley's older neighborhoods — safely power EV chargers, modern HVAC, and solar battery systems.",
      },
      {
        title: 'Solar & Battery Integration',
        subtitle:
          'Panel sizing, battery storage installation, and load management for Simi Valley homes going solar.',
      },
      {
        title: 'Family Home Electrical Upgrades',
        subtitle:
          'Kitchen circuits, outdoor lighting, whole-home surge protection, and practical upgrades for Simi Valley families.',
      },
    ],
  };

  const details = {
    city: 'Simi Valley',
    pharagraphs: [
      {
        text: "Simi Valley's master-planned neighborhoods — from the older Rancho Simi tracts to newer communities like Big Sky and Sycamore Canyon — each have distinct electrical characteristics. Homes built in the 1960s-1970s typically need panel upgrades and circuit additions, while newer construction may be well-suited for EV charger installations and smart home upgrades without major infrastructure changes.",
      },
      {
        text: "Solar energy adoption is strong in Simi Valley, where abundant sunshine and large roof areas make residential solar highly efficient. We work alongside solar installers to ensure electrical panels are properly sized for solar production, battery storage systems (Tesla Powerwall, Enphase) are safely integrated, and the home's electrical infrastructure supports the combined demands of solar, EV charging, and household loads.",
      },
      {
        text: 'Simi Valley families value home improvement, and we see strong demand for practical electrical upgrades — panel replacements, kitchen remodel circuits, outdoor lighting, whole-home surge protection, and ceiling fan installations. We deliver these bread-and-butter services with the same professionalism and quality we bring to our most complex projects.',
      },
    ],
    features: [
      { item: 'Ronald Reagan Presidential Library' },
      { item: 'Simi Valley Town Center' },
      { item: 'Santa Susana Pass' },
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
    city: 'Simi Valley',
    features: [
      {
        question: 'Do you travel to Simi Valley for electrical work?',
        answer:
          'Yes — we serve Simi Valley as part of our extended service area. We provide the same quality, professionalism, and competitive pricing to Simi Valley customers as we do throughout the Westside.',
      },
      {
        question: 'Can you support solar panel electrical in Simi Valley?',
        answer:
          "Yes — we upgrade panels, install battery storage systems, and ensure your home's electrical infrastructure is properly sized for solar plus EV charging plus household demands.",
      },
      {
        question: 'Do older Simi Valley homes need panel upgrades?',
        answer:
          'Many do — 1960s-1970s tract homes typically have 100-amp or 150-amp panels that benefit from upgrading to 200 amps, especially when adding EV chargers, HVAC upgrades, or solar battery systems.',
      },
    ],
  };

  const areas = {
    city: 'Simi Valley',
    features: [
      { item: 'Moorpark', slug: 'moorpark' },
      { item: 'Thousand Oaks', slug: 'thousand-oaks' },
      { item: 'Chatsworth', slug: 'chatsworth' },
      { item: 'Granada Hills', slug: 'granada-hills' },
      { item: 'Porter Ranch', slug: 'porter-ranch' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Simi Valley' />
      <LocationAllServices city='Simi Valley' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default SimiValleyPage;
