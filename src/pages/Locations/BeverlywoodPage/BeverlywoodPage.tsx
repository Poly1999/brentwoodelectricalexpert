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

function BeverlywoodPage() {
  const hero = {
    area: 'Beverlywood, CA · 90034, 90035',
    title: 'Beverlywood Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts provides trusted electrical services to Beverlywood homeowners. Our licensed electricians handle everything from panel upgrades and GFCI installations to lighting design and electrical remodeling.',
  };

  const about = {
    title: 'About Beverlywood',
    city: 'Beverlywood',
    subtitle:
      'Beverlywood is a quiet, family-friendly neighborhood south of Beverly Hills known for its excellent schools, well-maintained homes, and strong community spirit.',
    features: [
      { item: '1940s traditional homes' },
      { item: 'Post-war ranch homes' },
      { item: 'Renovated family residences' },
    ],
    challenge:
      "Beverlywood's family-oriented neighborhood features predominantly 1940s–1950s homes where growing families are investing in electrical modernization — panel upgrades, kitchen remodels, EV chargers, and home office circuits.",
    quote: [
      {
        text: 'Beverlywood families trust us for straightforward, quality electrical work — no upselling, no surprises, just honest service at fair prices.',
        subtext: '— Brentwood Electrical Experts, serving Beverlywood',
      },
    ],
  };

  const popular = {
    city: 'Beverlywood',
    cards: [
      {
        title: 'Family Home Panel Upgrades',
        subtitle:
          "200-amp panel upgrades for Beverlywood's 1940s–1950s homes — the essential first step in modernizing your family home's electrical system.",
      },
      {
        title: 'Kitchen Remodel Electrical',
        subtitle:
          'Complete kitchen electrical for Beverlywood renovations — dedicated circuits, GFCI outlets, under-cabinet lighting, and fixture installation.',
      },
      {
        title: 'Home Office & EV Charger Additions',
        subtitle:
          'Dedicated circuits for work-from-home setups and Level 2 EV charger installations — popular upgrades for modern Beverlywood families.',
      },
    ],
  };

  const details = {
    city: 'Beverlywood',
    pharagraphs: [
      {
        text: "Beverlywood is where young families put down roots — and where they quickly discover that their 1940s home's electrical system needs modernization. Original 100-amp panels, limited outlets in kitchens, and no dedicated circuits for home offices are the norm. We help Beverlywood homeowners prioritize upgrades, often starting with a panel replacement and then adding circuits as renovation projects unfold over time.",
      },
      {
        text: 'Kitchen remodels are booming in Beverlywood, as families upgrade dated galleys into open, modern cooking spaces. Every kitchen remodel requires significant electrical work — dedicated 40-50 amp range circuits, dishwasher circuits, disposal circuits, GFCI countertop outlets, under-cabinet lighting, and pendant fixtures. We coordinate with your general contractor to ensure electrical rough-in is completed on schedule.',
      },
      {
        text: "Beverlywood's tree-lined streets and backyard-centric lifestyle mean outdoor electrical improvements are in high demand. We install landscape lighting, patio outlets, outdoor kitchen circuits, and security lighting that enhances both the functionality and curb appeal of Beverlywood homes.",
      },
    ],
    features: [
      { item: 'Castle Heights' },
      { item: 'Beverlywood homes' },
      { item: 'Robertson Blvd nearby' },
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
    city: 'Beverlywood',
    features: [
      {
        question: 'Do most Beverlywood homes need panel upgrades?',
        answer:
          "Many do — the majority of Beverlywood homes were built in the 1940s and 1950s with 100-amp panels that can't safely support modern demands. A 200-amp upgrade is the foundation for any electrical modernization.",
      },
      {
        question: 'Can you add a home office circuit in my Beverlywood house?',
        answer:
          'Yes — we install dedicated 20-amp circuits for home offices, providing reliable power for computers, monitors, and printers without tripping breakers or sharing circuits with other rooms.',
      },
      {
        question: 'Do you do kitchen remodel electrical in Beverlywood?',
        answer:
          'Absolutely — kitchen remodels are one of our specialties. We install all required dedicated circuits, GFCI outlets, and lighting for modern Beverlywood kitchens.',
      },
    ],
  };

  const areas = {
    city: 'Beverlywood',
    features: [
      { item: 'Beverly Grove', slug: 'beverly-grove' },
      { item: 'Cheviot Hills', slug: 'cheviot-hills' },
      { item: 'Culver City', slug: 'culver-city' },
      { item: 'Pico-Robertson', slug: 'pico-robertson' },
      { item: 'Mid-City', slug: 'mid-city' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Beverlywood' />
      <LocationAllServices city='Beverlywood' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default BeverlywoodPage;
