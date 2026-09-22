import { Clock, MapPin, Star, Zap } from 'lucide-react';
import AboutHero from '../../components/about-page/AboutHero/AboutHero';
import Footer from '../../components/Footer/Footer';

import StatsSection from '../../components/Shared/StatsSection/StatsSection';
import TrustBadges from '../../components/Shared/TrustBadges/TrustBadges';

import OurStory from '../../components/about-page/OurStory/OurStory';

import panelInstall from '../../assets/panel-framing.webp';
import generacSwitch from '../../assets/generac-panel.webp';
import evChargerSM from '../../assets/ev-charger-1.webp';
import kitchenRewire from '../../assets/kitchen-rewire.webp';
import chandelierInstall from '../../assets/lightfixture-2611.webp';
import recessedLighting from '../../assets/recessed-lighting.webp';
import copperPendant from '../../assets/copper-pendant.webp';
import commercialBuildout from '../../assets/commercial-framing.webp';
import PortfolioPreview from '../../components/Shared/PortfolioPreview/PortfolioPreview';
import CoreValues from '../../components/about-page/CoreValues/CoreValues';
import WhyChooseUs from '../../components/Shared/WhyChooseUs/WhyChooseUs';

import panelWiring from '../../assets/wiringPanel.webp';
import RoughIn from '../../assets/Rough-In.webp';
import ConstructionPhase from '../../assets/ConstructionPhase.webp';
import NewBuildElectrical from '../../assets/NewBuildElectrical.webp';
import ElectricalRoughIn from '../../assets/ElectricalRough-In.webp';
import InProgressInstallation from '../../assets/In-ProgressInstallation.webp';
import ActiveElectricalProject from '../../assets/ActiveElectricalProject.webp';
import Testimonials from '../../components/Shared/Testimonials/Testimonials';

function AboutPage() {
  const aboutStats = [
    { icon: <Zap />, raiting: '1000+', title: 'Projects Completed' },
    { icon: <Star />, raiting: '5.0', title: 'Google Rating' },
    { icon: <MapPin />, raiting: '29+', title: 'Cities Served' },
    { icon: <Clock />, raiting: '24/7', title: 'Emergency Service' },
  ];

  const projects = [
    { image: panelInstall, title: 'Panel Installation' },
    { image: chandelierInstall, title: 'Chandelier Install' },
    { image: evChargerSM, title: 'EV Charger' },
    { image: copperPendant, title: 'Pendant Lighting' },
    { image: generacSwitch, title: 'Generac Transfer Switch' },
    { image: recessedLighting, title: 'Recessed Lighting' },
    { image: commercialBuildout, title: 'Commercial Build-Out' },
    { image: kitchenRewire, title: 'Kitchen Rewire' },
  ];

  const projectsInProgress = [
    { image: chandelierInstall, title: 'Electrical Work in Progress' },
    { image: panelWiring, title: 'Panel Wiring in Progress' },
    { image: RoughIn, title: 'Rough-In Electrical Work' },
    { image: ConstructionPhase, title: 'Construction Phase Wiring' },
    { image: NewBuildElectrical, title: 'New Build Electrical Progress' },
    { image: ElectricalRoughIn, title: 'Electrical Rough-In Project' },
    { image: InProgressInstallation, title: 'In-Progress Installation' },
    { image: ActiveElectricalProject, title: 'Active Electrical Project' },
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
    {
      text: 'We hired them for a full lighting redesign in our renovated kitchen and living room. The result is stunning — recessed lights, under-cabinet LEDs, and dimmers throughout. True professionals.',
      name: 'Jennifer M.',
      location: 'Beverly Hills, CA',
      source: 'Birdeye',
    },
    {
      text: 'Had a persistent problem with tripping breakers. They diagnosed it quickly, found a faulty connection, and fixed it same day. Fair pricing and honest service — rare to find.',
      name: 'Robert T.',
      location: 'West Hollywood, CA',
      source: 'Google',
    },
    {
      text: 'Brentwood Electrical installed a Tesla Wall Connector at our home. They handled the panel assessment, got the permit, and had us charging within a week. Seamless experience.',
      name: 'Amanda C.',
      location: 'Mar Vista, CA',
      source: 'Yelp',
    },
  ];

  return (
    <div>
      <AboutHero />
      <TrustBadges />
      <StatsSection items={aboutStats} variant='light' />
      <OurStory />
      <PortfolioPreview
        title='Our Work in Action'
        subtitle='A look at the quality and professionalism we bring to every project.'
        projects={projects}
        variant='dark'
      />
      <CoreValues />
      <WhyChooseUs
        title={
          <>
            Why Homeowners Choose <span>Brentwood Electrical</span>
          </>
        }
        subtitle=''
      />
      <PortfolioPreview
        title='Our Work In Progress'
        subtitle='Behind the scenes of our meticulous electrical work. Every wire, connection, and panel installed with precision and care.'
        projects={projectsInProgress}
        isButtonVisible={false}
      />
      <Testimonials reviews={reviews} />
      <Footer />
    </div>
  );
}

export default AboutPage;
