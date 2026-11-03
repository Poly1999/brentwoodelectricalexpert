import {
  ClipboardCheck,
  Clock,
  Mountain,
  Shield,
  Star,
  Zap,
} from 'lucide-react';
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
    title: 'Brentwood Electrician — Licensed & Insured Electrical Services',
    subtitle:
      'Brentwood Electrical Experts proudly serves the Brentwood community with professional residential and commercial electrical services. From 200-amp panel upgrades and Level 2 EV charger installations to architectural landscape lighting and hill-side troubleshooting, our licensed C-10 electricians deliver fast, reliable, and code-compliant work throughout Brentwood and the surrounding West LA area.',
    button: 'Get FREE Quote',
  };

  const badges = {
    items: [
      '5.0-Star Local Rating',
      'LADBS Permits & Inspection',
      'Hillside & Underground Specialists',
    ],
    icons: [<Star />, <ClipboardCheck />, <Mountain />],
  };

  const about = {
    title: 'About Brentwood',
    city: 'Brentwood',
    heading: 'Electrical Services Tailored to Brentwood Architecture',
    challengeTitle: "Navigating Brentwood's Unique Electrical Infrastructure",
    subtitle:
      "Brentwood is an affluent residential neighborhood in West Los Angeles known for its tree-lined streets, top-rated schools, and proximity to the Santa Monica Mountains. The community blends quiet suburban living with easy access to the Westside's best dining, shopping, and recreation.",
    features: [
      {
        item: 'Mid-century modern estates (A. Quincy Jones & Richard Neutra designs)',
      },
      { item: 'Contemporary new builds and architectural custom homes' },
      { item: 'Classic Spanish Colonial Revival residences' },
      { item: 'Charming ranch-style homes and hillside properties' },
    ],
    challenge:
      'Many Brentwood homes were built in the 1950s–1970s with original 100-amp service panels and outdated wiring. These legacy electrical systems cannot safely support modern power demands—from dual EV chargers and central HVAC heat pumps to pool equipment and whole-home automation. Additionally, the hillside lots common in upper Brentwood (such as Crestwood Hills and Mandeville Canyon) frequently require specialized underground conduit runs, extra-long feeder sizing, and outdoor-rated panel installations to meet fire safety codes.',
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
          "Brentwood's mid-century homes often still run on original 100-amp panels. We upgrade systems to 200 or 400 amps to safely power modern appliances, EV chargers, HVAC units, and pool equipment—all managed with full LADBS permits and municipal inspection sign-offs.",
      },
      {
        title: 'Tesla & EV Charger Installation',
        subtitle:
          'Join hundreds of Brentwood homeowners who charge at home. We install Tesla Wall Connectors, ChargePoint Home Flex, and all major EV charger brands with clean, concealed wiring and dedicated high-amperage 240V circuits.',
      },
      {
        title: 'Landscape & Outdoor Lighting',
        subtitle:
          "Illuminate your Brentwood property's mature oak trees, garden pathways, and outdoor entertaining spaces with professionally designed low-voltage brass landscape lighting and architectural uplighting.",
      },
      {
        title: 'Whole-Home Generator Installation',
        subtitle:
          'Protect your Brentwood home from PSPS shutoffs, high wind events, and grid outages with a Generac or Kohler whole-home standby generator featuring automatic power transfer in under 10 seconds.',
      },
    ],
  };

  const details = {
    city: 'Brentwood',
    heading: 'Your Trusted Local Electrician in Brentwood, California',
    pharagraphs: [
      {
        text: "Brentwood's housing stock tells a rich story of Los Angeles architectural evolution. Mid-century architectural gems sit alongside modern new-construction homes pushing the boundaries of sustainable design. Each era brings distinct electrical requirements—from rewiring knob-and-tube systems in older cottages to engineering whole-home automation and motorized shading in newly built estates. Our C-10 licensed electricians have worked on properties across every Brentwood micro-neighborhood, from the flats south of San Vicente to the hillside estates above Mandeville Canyon.",
      },
      {
        text: "The Brentwood community has embraced the electric vehicle revolution with enthusiasm. With many households owning two or more EVs—such as Teslas, Rivians, and Porsche Taycans common in local driveways—the demand for Level 2 home charging stations has surged. We've installed hundreds of EV chargers throughout Brentwood, often pairing them with main panel upgrades to ensure the home's electrical grid handles the added 40–50 amp load safely.",
      },
      {
        text: 'Outdoor living is central to the Brentwood lifestyle. We design and install sophisticated landscape lighting systems that highlight mature trees, illuminate garden pathways, and enhance pool and patio areas for evening entertaining. Our team also installs weather-rated outdoor outlets, pool equipment sub-panels, and kitchen patio wiring built to withstand coastal marine moisture.',
      },
      {
        text: 'Fire safety is a critical priority for Brentwood residents, particularly those in hillside zones near Mandeville Canyon and the Santa Monica Mountains. We install whole-home surge protection, automatic generator transfer switches for backup power during red-flag high-wind warnings, and hardwired smoke and CO detection systems that meet the latest California fire codes. Protecting your home and family starts with a safe, modern electrical system.',
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

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div>
      <title>
        Brentwood Electrician | Licensed C-10 Electrical Contractor | (310)
        666-4752
      </title>
      <meta
        name='description'
        content='Licensed C-10 electricians (#1102731) serving Brentwood, CA. 200A panel upgrades, EV chargers, landscape lighting & hillside troubleshooting. Call (310) 666-4752.'
      />
      <LocationHero hero={hero} />
      <TrustBadges badges={badges} />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
      <LocationWhyChooseUs city='Brentwood' />
      <LocationAllServices city='Brentwood' />
      <StatsSection items={servicesStats} variant='dark' />
      <Testimonials reviews={reviews} />
      <LocationFAQ faqs={faqs} />
      <NearbyAreas areas={areas} />
      <Footer footer={footer} />
    </div>
  );
}

export default BrentwoodPage;
