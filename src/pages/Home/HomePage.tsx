import AreasWeServe from '../../components/AreasWeServe/AreasWeServe';
import BlogPreview from '../../components/BlogPreview/BlogPreview';
import FAQSection from '../../components/FAQSection/FAQSection';
import FeaturedEVCharger from '../../components/FeaturedEVCharger/FeaturedEVCharger';
import FeaturedPanelUpgrades from '../../components/FeaturedPanelUpgrades/FeaturedPanelUpgrades';
import HeroComponent from '../../components/HeroComponent/HeroComponent';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import PortfolioPreview from '../../components/PortfolioPreview/PortfolioPreview';
import RequestServiceForm from '../../components/RequestServiceForm/RequestServiceForm';
import ResidentialCommercial from '../../components/ResidentialCommercial/ResidentialCommercial';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import StatsSection from '../../components/StatsSection/StatsSection';
import Testimonials from '../../components/Testimonials/Testimonials';

import TrustBadges from '../../components/TrustBadges/TrustBadges';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

function HomePage() {
  return (
    <div>
      <HeroComponent />
      <TrustBadges />
      <StatsSection />
      <ServicesSection />
      <FeaturedPanelUpgrades />
      <FeaturedEVCharger />
      <WhyChooseUs />
      <PortfolioPreview />
      <ResidentialCommercial />
      <Testimonials />
      <HowItWorks />
      <AreasWeServe />
      <FAQSection />
      <BlogPreview />
      <RequestServiceForm />
    </div>
  );
}

export default HomePage;
