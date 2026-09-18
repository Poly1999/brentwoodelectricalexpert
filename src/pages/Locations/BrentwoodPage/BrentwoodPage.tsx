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

function BrentwoodPage() {
  const hero = {
    area: 'Brentwood, CA · 90049',
    title: 'Brentwood Electrician — Licensed & Insured',
    subtitle:
      'Brentwood Electrical Experts is proud to serve the Brentwood community with professional residential and commercial electrical services. From panel upgrades and EV charger installations to lighting design and electrical troubleshooting, our licensed electricians deliver fast, reliable, and code-compliant work throughout Brentwood and the surrounding West LA area.',
  };

  const about = {
    title: 'About Brentwood',
    city: 'Brentwood',
    subtitle:
      "Brentwood is an affluent residential neighborhood in West Los Angeles known for its tree-lined streets, top-rated schools, and proximity to the Santa Monica Mountains. The community blends quiet suburban living with easy access to the Westside's best dining, shopping, and recreation.",
    features: [
      { item: 'Mid-century modern estates' },
      { item: 'Contemporary new builds' },
      { item: 'Spanish Colonial Revival' },
      { item: 'Ranch-style homes' },
    ],
    challenge:
      "Many Brentwood homes were built in the 1950s–1970s with original 100-amp panels and outdated wiring. These older electrical systems can't safely support today's demands — EV chargers, central HVAC, pool equipment, and smart home technology all require modern 200-amp panels. Additionally, the hillside lots common in upper Brentwood often require specialized underground conduit runs and outdoor-rated panel installations.",
    quote: [
      {
        text: "As the hometown team, we know Brentwood's electrical infrastructure better than anyone — from the aging panels in Crestwood Hills to the luxury smart home builds along Tigertail Road.",
        subtext: '— Brentwood Electrical Experts, serving Brentwood',
      },
    ],
  };

  const popular = {
    city: 'Brentwood',
    cards: [
      {
        title: '200-Amp Panel Upgrades',
        subtitle:
          "Brentwood's mid-century homes often still run on original 100-amp panels. We upgrade to 200 amps to safely power modern appliances, EV chargers, HVAC, and pool equipment — all with full LADBS permits and inspection.",
      },
      {
        title: 'Tesla & EV Charger Installation',
        subtitle:
          'Join hundreds of Brentwood homeowners who charge at home. We install Tesla Wall Connectors, ChargePoint, and all major EV charger brands with clean, concealed wiring and dedicated 50-amp circuits.',
      },
      {
        title: 'Landscape & Outdoor Lighting',
        subtitle:
          "Illuminate your Brentwood property's mature trees, garden paths, and outdoor entertaining areas with professionally designed low-voltage and line-voltage landscape lighting systems.",
      },
      {
        title: 'Whole-Home Generator Installation',
        subtitle:
          'Protect your Brentwood home from PSPS shutoffs and grid outages with a Generac or Kohler whole-home standby generator — automatic power restoration in under 10 seconds.',
      },
    ],
  };

  const details = {
    city: 'Brentwood',
    pharagraphs: [
      {
        text: "Brentwood's housing stock tells a story of Los Angeles architectural evolution. Mid-century gems designed by A. Quincy Jones and Richard Neutra sit alongside modern new-construction homes pushing the boundaries of sustainable design. Each era brings distinct electrical requirements — from rewiring knob-and-tube systems in 1940s cottages to engineering whole-home automation in newly built estates. Our electricians have worked on properties across every Brentwood micro-neighborhood, from the flats south of San Vicente to the hillside estates above Mandeville Canyon.",
      },
      {
        text: "The Brentwood community has embraced the electric vehicle revolution with enthusiasm. With many households owning two or more EVs — Teslas, BMW iX models, Rivians, and Mercedes EQS sedans are common in local driveways — the demand for Level 2 home charging stations has surged. We've installed hundreds of EV chargers throughout Brentwood, often pairing them with panel upgrades to ensure the home's electrical system can handle the added 40-50 amp load without compromising other circuits.",
      },
      {
        text: 'Outdoor living is central to the Brentwood lifestyle. We design and install sophisticated landscape lighting systems that highlight mature oaks, illuminate garden pathways, and enhance pool and patio areas for evening entertaining. Our team also installs weather-rated outlets, pool equipment sub-panels, and outdoor kitchen electrical — all built to withstand the marine layer moisture that rolls in from the coast.',
      },
      {
        text: 'Fire safety is a critical concern for Brentwood residents, particularly those in hillside zones near Mandeville Canyon and the Santa Monica Mountains. We install whole-home surge protection, generator transfer switches for backup power during PSPS shutoffs, and hardwired smoke and CO detection systems that meet the latest California fire code requirements. Protecting your home and family starts with a safe, modern electrical system.',
      },
    ],
    features: [
      { item: 'Getty Center' },
      { item: 'San Vicente Blvd' },
      { item: 'Brentwood Country Mart' },
      { item: 'Mandeville Canyon' },
      { item: 'Archer School' },
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
    city: 'Brentwood',
    features: [
      {
        question: 'What permits do I need for a panel upgrade in Brentwood?',
        answer:
          'Panel upgrades in Brentwood require a City of Los Angeles electrical permit. We handle the entire permit process — application, installation, and final inspection coordination with LADBS (Los Angeles Department of Building and Safety). Most panel upgrade permits are approved within 1-2 business days.',
      },
      {
        question:
          'Can you install an EV charger in a Brentwood home with an older panel?',
        answer:
          'Yes — many Brentwood homes have 100-amp panels that need upgrading to 200 amps before an EV charger can be safely installed. We typically bundle the panel upgrade and EV charger installation into a single appointment, saving you time and money. The combined project usually takes one full day.',
      },
      {
        question: 'Do you work on hillside homes in upper Brentwood?',
        answer:
          "Absolutely. We regularly work on hillside properties in Mandeville Canyon, Tigertail, and upper Brentwood. We're experienced with the unique challenges these homes present — steep driveways, limited access, underground conduit runs, and outdoor panel installations exposed to the elements.",
      },
      {
        question: 'How much does a typical panel upgrade cost in Brentwood?',
        answer:
          'Panel upgrade costs in Brentwood typically range from $2,500 to $4,500 for a standard 100-to-200-amp upgrade, depending on the complexity of the installation and the condition of existing wiring. We provide free, transparent estimates with no hidden fees — call (310) 666-4752 for your quote.',
      },
      {
        question:
          'Can you add recessed lighting to a Brentwood home with plaster ceilings?',
        answer:
          "Yes — many Brentwood homes feature original plaster-and-lath ceilings. Our electricians use specialized techniques to cut clean openings, run new wiring through the ceiling cavity, and install low-profile LED recessed fixtures without damaging the surrounding plaster. We've completed hundreds of recessed lighting jobs in older Brentwood homes.",
      },
      {
        question: 'Do you install whole-home generators in Brentwood?',
        answer:
          'Yes. With increasing PSPS (Public Safety Power Shutoff) events affecting hillside Brentwood neighborhoods, we install Generac and Kohler whole-home standby generators with automatic transfer switches. These systems detect a power outage and restore electricity to your home within seconds — no manual intervention required.',
      },
    ],
  };

  const areas = {
    city: 'Brentwood',
    features: [
      { item: 'Santa Monica', slug: 'santa-monica' },
      { item: 'Pacific Palisades', slug: 'pacific-palisades' },
      { item: 'Bel Air', slug: 'bel-air' },
      { item: 'Westwood', slug: 'westwood' },
      { item: 'Beverly Glen', slug: 'beverly-glen' },
    ],
  };

  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Brentwood' />
      <LocationAllServices city='Brentwood' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer />
    </div>
  );
}

export default BrentwoodPage;
