import LocationAbout from '../../../components/location-detail-page/LocationAbout/LocationAbout';
import LocationDetails from '../../../components/location-detail-page/LocationDetails/LocationDetails';
import LocationPopularServices from '../../../components/location-detail-page/LocationPopularServices/LocationPopularServices';
import LocationHero from '../../../components/locations-page/LocationHero';
import TrustBadges from '../../../components/Shared/TrustBadges/TrustBadges';

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
  return (
    <div>
      <LocationHero hero={hero} />
      <TrustBadges />
      <LocationAbout about={about} />
      <LocationPopularServices popular={popular} />
      <LocationDetails details={details} />
    </div>
  );
}

export default BrentwoodPage;
