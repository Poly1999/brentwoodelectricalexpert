import { ClipboardCheck, Clock, Fan, Shield, Star, Zap } from 'lucide-react';
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

function ShermanOaksPage() {
  const hero = {
    area: 'Sherman Oaks, CA · 91403, 91423',
    title: 'Sherman Oaks Electrician — Licensed & Insured Electrical Services',
    subtitle:
      'Brentwood Electrical Experts provides reliable electrical services across Sherman Oaks and the San Fernando Valley. From HVAC-ready panel upgrades and EV charger installations to Ventura Blvd commercial electrical and hillside smart home automation, our licensed C-10 electricians deliver quality work you can trust.',
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'Valley & LADBS Permitted Work',
      'HVAC & Commercial Specialists',
    ],
    icons: [<Star />, <ClipboardCheck />, <Fan />],
  };

  const about = {
    title: 'About Sherman Oaks',
    city: 'Sherman Oaks',
    heading:
      'Electrical Services Tailored to Sherman Oaks Architecture & Climate',
    challengeTitle: 'Combating Valley Heat and Power Demands',
    subtitle:
      'Sherman Oaks is a thriving San Fernando Valley neighborhood known for its excellent local schools, diverse dining and shopping scene along Ventura Blvd, and spectacular hillside properties featuring sweeping Valley views.',
    features: [
      { item: 'San Fernando Valley traditional ranch homes' },
      { item: 'Mid-century tract houses and residential properties' },
      { item: 'Modern architectural hillside custom builds' },
      {
        item: 'Commercial retail, restaurant, and office spaces along Ventura Blvd',
      },
    ],
    challenge:
      'Sherman Oaks frequently experiences extreme summer temperatures exceeding 100°F, making reliable, high-capacity central air conditioning and HVAC electrical critical for home comfort. Many 1950s–1960s Valley homes feature undersized 100-amp service panels that struggle under heavy AC loads. Additionally, the bustling Ventura Blvd commercial corridor drives constant demand for specialized restaurant, retail, and tenant improvement electrical services.',
    quote: [
      {
        text: '🍜 We serve both sides of Sherman Oaks — the residential neighborhoods where families need panel upgrades and EV chargers, and the Ventura Blvd commercial corridor where businesses need reliable electrical systems.',
        subtext: '— Brentwood Electrical Experts, serving Sherman Oaks',
      },
    ],
  };

  const popular = {
    city: 'Sherman Oaks',
    cards: [
      {
        title: 'HVAC-Ready Panel Upgrades',
        subtitle:
          '200-amp service upgrades for Sherman Oaks homes—ensuring your electrical grid easily handles heavy AC compressor draws during Valley heat waves alongside modern household demands.',
      },
      {
        title: 'Ventura Blvd Commercial Electrical',
        subtitle:
          "Full-scope restaurant, retail, and office electrical services tailored for Sherman Oaks' busiest commercial business corridor.",
      },
      {
        title: 'ADU Electrical Installation',
        subtitle:
          'Turnkey electrical systems for Sherman Oaks backyard accessory dwelling units—featuring dedicated subpanels, rough-in wiring, and primary service upgrades.',
      },
      {
        title: 'Hillside Smart Home Systems',
        subtitle:
          "Whole-home automation, architectural lighting control, and high-end AV wiring for Sherman Oaks' architecturally significant hillside residences.",
      },
    ],
  };

  const details = {
    city: 'Sherman Oaks',
    heading: 'Your Trusted Local Electrician in Sherman Oaks, California',
    pharagraphs: [
      {
        text: 'Sherman Oaks summer temperatures regularly surpass 100°F, making dependable HVAC operation an absolute necessity for Valley living. Many older Sherman Oaks homes still operate on legacy 100-amp electrical panels that strain severely under the combined electrical load of central air conditioning compressors, kitchen appliances, and modern electronics. We upgrade these outdated panels to robust 200-amp systems, ensuring your HVAC equipment receives the steady electrical capacity required to keep your family cool during intense Valley heat waves.',
      },
      {
        text: "Meanwhile, Ventura Blvd serves as Sherman Oaks' bustling commercial spine, lined with hundreds of popular restaurants, retail boutiques, and professional offices. We provide dependable commercial electrical services for these local businesses—including kitchen equipment circuits, storefront window lighting, business sign electrical, and custom tenant improvement wiring. Our flexible scheduling ensures we can execute commercial projects around your operating hours to avoid business downtime.",
      },
      {
        text: 'The hillside neighborhoods situated south of Ventura Blvd—stretching along Mulholland Drive and Beverly Glen—feature newer, architecturally striking homes with sophisticated power requirements. Advanced smart home automation systems, dedicated home theater rooms, temperature-controlled wine cellars, and elaborate architectural landscape lighting are commonplace in these properties. We deliver the high-end residential electrical engineering that these elite hillside homes demand.',
      },
      {
        text: "In contrast, Sherman Oaks' family-oriented neighborhoods located north of Ventura Blvd are experiencing a widespread wave of residential property improvements—including kitchen remodels, backyard ADU additions, and Level 2 EV charger installations. We provide the essential electrical backbone for these home modernization projects, helping local families upgrade their living spaces safely and affordably.",
      },
    ],
    features: [
      { item: 'Ventura Blvd' },
      { item: 'Sherman Oaks Galleria' },
      { item: 'Westfield Fashion Square' },
      { item: 'Mulholland Drive' },
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
    city: 'Sherman Oaks',
    features: [
      {
        question: 'Why do Sherman Oaks homes need panel upgrades?',
        answer:
          "Summer heat drives heavy AC use, and most 1950s-1960s Sherman Oaks homes have 100-amp panels that can't safely handle modern HVAC loads plus EV chargers, home offices, and appliances. A 200-amp upgrade solves this.",
      },
      {
        question: 'Do you work on Ventura Blvd commercial properties?',
        answer:
          'Yes — we provide commercial electrical for restaurants, retail, and offices along Ventura Blvd, including tenant improvements, kitchen circuits, lighting, and signage.',
      },
      {
        question: 'Can you install an EV charger at my Sherman Oaks home?',
        answer:
          'Absolutely — we install Level 2 EV chargers for Sherman Oaks homeowners, including panel upgrades when needed. Most installations are completed in half a day.',
      },
      {
        question: 'Do you build ADU electrical in Sherman Oaks?',
        answer:
          'Yes — ADU construction is booming in Sherman Oaks. We install complete electrical systems for backyard ADUs, including sub-panels, circuits, and main panel upgrades when required.',
      },
    ],
  };

  const areas = {
    city: 'Sherman Oaks',
    features: [
      { item: 'Encino', slug: 'encino' },
      { item: 'Studio City', slug: 'studio-city' },
      { item: 'Van Nuys', slug: 'van-nuys' },
      { item: 'Beverly Glen', slug: 'beverly-glen' },
      { item: 'Tarzana', slug: 'tarzana' },
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
        Sherman Oaks Electrician | HVAC Panel Upgrades & Ventura Blvd TIs | C-10
        #1102731
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Sherman Oaks & the Valley. 200A HVAC panel upgrades, Ventura Blvd commercial electrical & ADU wiring. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Sherman Oaks' />
      <LocationAllServices city='Sherman Oaks' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default ShermanOaksPage;
