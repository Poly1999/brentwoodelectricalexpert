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
      <RequestService />
      <Footer />
    </div>
  );
}

export default HomePage;
