import AreasWeServe from '../../components/Shared/AreasWeServe/AreasWeServe';
import BlogPreview from '../../components/Shared/BlogPreview/BlogPreview';
import FAQSection from '../../components/Shared/FAQSection/FAQSection';
import FeaturedEVCharger from '../../components/home-page/FeaturedEVCharger/FeaturedEVCharger';
import FeaturedPanelUpgrades from '../../components/home-page/FeaturedPanelUpgrades/FeaturedPanelUpgrades';
import HeroComponent from '../../components/home-page/HeroComponent/HeroComponent';
import HowItWorks from '../../components/home-page/HowItWorks/HowItWorks';
import PortfolioPreview from '../../components/Shared/PortfolioPreview/PortfolioPreview';
import ResidentialCommercial from '../../components/home-page/ResidentialCommercial/ResidentialCommercial';
import ServicesSection from '../../components/home-page/ServicesSection/ServicesSection';
import StatsSection from '../../components/Shared/StatsSection/StatsSection';
import Testimonials from '../../components/Shared/Testimonials/Testimonials';
import TrustBadges from '../../components/Shared/TrustBadges/TrustBadges';
import WhyChooseUs from '../../components/Shared/WhyChooseUs/WhyChooseUs';
import RequestService from '../../components/Shared/RequestService/RequestService';
import Footer from '../../components/Footer/Footer';

import { Clock, Shield, Star, Zap } from 'lucide-react';

import panelInstall from '../../assets/panel-framing.webp';
import generacSwitch from '../../assets/generac-panel.webp';
import evChargerSM from '../../assets/ev-charger-1.webp';
import kitchenRewire from '../../assets/kitchen-rewire.webp';
import chandelierInstall from '../../assets/lightfixture-2611.webp';
import copperPendant from '../../assets/copper-pendant.webp';
import commercialBuildout from '../../assets/commercial-framing.webp';
import wholeHomeGenerator from '../../assets/generac-panel.webp';
import pendantCluster from '../../assets/designer-pendants.webp';
import bathroomPendants from '../../assets/bathroom-pendants.webp';
import trackLighting from '../../assets/track-lighting.webp';
import retailLighting from '../../assets/retail-lighting.webp';

function HomePage() {
  const homeStats = [
    { icon: <Star />, raiting: '5.0', title: 'Google Rating' },
    { icon: <Zap />, raiting: '1000+', title: 'Projects Completed' },
    { icon: <Clock />, raiting: '24/7', title: 'Emergency Service' },
    { icon: <Shield />, raiting: '100%', title: 'Licensed & Insured' },
  ];

  const projects = [
    { image: panelInstall, title: 'Panel Install — New Construction' },
    { image: generacSwitch, title: 'Generac Transfer Switch' },
    { image: wholeHomeGenerator, title: 'Whole-Home Generator' },
    { image: evChargerSM, title: 'EV Charger — Santa Monica' },
    { image: kitchenRewire, title: 'Kitchen Rewire — Brentwood' },
    { image: chandelierInstall, title: 'Chandelier Install — Bel Air' },
    { image: copperPendant, title: 'Copper Pendant — Living Room' },
    { image: pendantCluster, title: 'Designer Pendant Cluster' },
    { image: bathroomPendants, title: 'Bathroom Pendants — Beverly Hills' },
    { image: trackLighting, title: 'Kitchen Track Lighting' },
    { image: retailLighting, title: 'Retail Store Lighting' },
    { image: commercialBuildout, title: 'Commercial Build-Out' },
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
      <HeroComponent />
      <TrustBadges />
      <StatsSection items={homeStats} />
      <ServicesSection />
      <FeaturedPanelUpgrades />
      <FeaturedEVCharger />
      <WhyChooseUs subtitle='We have built our reputation on quality work,honest pricing, and exceptional service across West Los Angeles.' />

      <PortfolioPreview
        title='Our Work'
        subtitle='A glimpse at recent projects across West Los Angeles'
        projects={projects}
      />
      <ResidentialCommercial />
      <Testimonials reviews={reviews} />
      <HowItWorks />
      <AreasWeServe />
      <FAQSection />
      <BlogPreview />
      <RequestService />
      <Footer />
    </div>
  );
}

export default HomePage;
