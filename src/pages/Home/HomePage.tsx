import AreasWeServe from '../../components/home-page/AreasWeServe/AreasWeServe';
import BlogPreview from '../../components/home-page/BlogPreview/BlogPreview';
import FAQSection from '../../components/home-page/FAQSection/FAQSection';
import FeaturedEVCharger from '../../components/home-page/FeaturedEVCharger/FeaturedEVCharger';
import FeaturedPanelUpgrades from '../../components/home-page/FeaturedPanelUpgrades/FeaturedPanelUpgrades';
import HeroComponent from '../../components/home-page/HeroComponent/HeroComponent';
import HowItWorks from '../../components/home-page/HowItWorks/HowItWorks';
import PortfolioPreview from '../../components/home-page/PortfolioPreview/PortfolioPreview';
import RequestServiceForm from '../../components/home-page/RequestServiceForm/RequestServiceForm';
import ResidentialCommercial from '../../components/home-page/ResidentialCommercial/ResidentialCommercial';
import ServicesSection from '../../components/home-page/ServicesSection/ServicesSection';
import StatsSection from '../../components/home-page/StatsSection/StatsSection';
import Testimonials from '../../components/home-page/Testimonials/Testimonials';
import TrustBadges from '../../components/home-page/TrustBadges/TrustBadges';
import WhyChooseUs from '../../components/home-page/WhyChooseUs/WhyChooseUs';

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
