import { Clock, DollarSign, Home, Shield, Star, Zap } from 'lucide-react';
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
    title:
      'Beverlywood Electrician — Licensed & Insured Residential Electrical Services',
    subtitle:
      'Brentwood Electrical Experts provides trusted residential electrical services to Beverlywood homeowners. From 1940s–1950s 200-amp panel upgrades and kitchen remodel wiring to dedicated home office circuits and Level 2 EV charger installations, our licensed C-10 electricians handle every project with honesty, fair pricing, and absolute respect for your family home.',
    button: 'Request Beverlywood Estimate',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      '1940s–1950s Traditional Home Specialists',
      'Honest Upfront Pricing',
    ],
    icons: [<Star />, <Home />, <DollarSign />],
  };

  const about = {
    title: 'About Beverlywood',
    city: 'Beverlywood',
    heading: 'Electrical Services Tailored to Beverlywood Family Homes',
    challengeTitle:
      'Modernizing Mid-Century Electrical Systems for Growing Families',
    subtitle:
      'Beverlywood is a quiet, highly prestigious residential neighborhood located just south of Beverly Hills, widely celebrated for its excellent local schools, beautiful tree-lined streets, and a strong, tight-knit family-oriented community spirit.',
    features: [
      { item: '1940s and 1950s traditional character homes' },
      { item: 'Classic post-war ranch-style residences' },
      { item: 'Thoughtfully expanded and renovated family properties' },
    ],
    challenge:
      "Beverlywood's established family-oriented character means that most homes date back to the 1940s and 1950s. As modern families move in, original 100-amp service panels, limited kitchen outlet counts, and a lack of dedicated circuits for home offices or EV chargers quickly necessitate comprehensive electrical modernization to keep pace with contemporary living.",
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
          "200-amp service panel upgrades for Beverlywood's mid-century homes—establishing the safe, robust electrical foundation required for modern family life.",
      },
      {
        title: 'Kitchen Remodel Electrical',
        subtitle:
          'Turnkey kitchen electrical for Beverlywood renovations—featuring dedicated appliance circuits, GFCI countertop protection, under-cabinet lighting, and modern fixture installation.',
      },
      {
        title: 'Home Office & EV Charger Additions',
        subtitle:
          'Dedicated circuits for work-from-home office setups and professional Level 2 EV charger installations—essential upgrades for modern Beverlywood households.',
      },
    ],
  };

  const details = {
    city: 'Beverlywood',
    heading: 'Your Trusted Local Electrician in Beverlywood, California',
    pharagraphs: [
      {
        text: "Beverlywood is a neighborhood where young families put down lasting roots—and where they frequently discover that their mid-century home's legacy electrical system requires urgent modernization. Original 100-amp electrical panels, sparse kitchen outlet counts, and the total absence of dedicated circuits for home workstations or high-draw appliances are standard in homes built during the 1940s and 1950s. We assist Beverlywood homeowners in prioritizing their upgrades sensibly, often starting with a main panel replacement and strategically adding dedicated circuits as long-term renovation plans unfold over time.",
      },
      {
        text: 'Kitchen remodeling projects are especially popular throughout Beverlywood, as families convert dated galley layouts into open, highly functional modern culinary spaces. Every kitchen update demands substantial, code-compliant electrical work: dedicated 40–50 amp electric range circuits, dishwasher and garbage disposal lines, GFCI-protected countertop receptacles, under-cabinet LED task lighting, and designer pendant fixtures. We coordinate closely with your general contractor to ensure all rough-in wiring is executed precisely on schedule.',
      },
      {
        text: 'Furthermore, Beverlywood’s picturesque tree-lined streets and backyard-centric lifestyle mean that outdoor electrical improvements are in high demand. We install automated landscape lighting, weatherized patio convenience outlets, outdoor kitchen circuits, and motion-activated security lighting that simultaneously enhances both the daily functionality and neighborhood curb appeal of your property.',
      },
    ],
    features: [
      { item: 'Castle Heights' },
      { item: 'Beverlywood Community' },
      { item: 'Robertson Blvd Corridor (Nearby)' },
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Beverlywood Electrician | Panel Upgrades & Kitchen Remodels | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Beverlywood (90034, 90035). 1940s–1950s panel upgrades, kitchen remodel electrical & home office EV chargers. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Beverlywood' />
      <LocationAllServices city='Beverlywood' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default BeverlywoodPage;
