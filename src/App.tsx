import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const ServicesPage = lazy(() => import('./pages/Services/ServicesPage'));
const PanelUpgrades = lazy(
  () => import('./pages/Services/PanelUpgrades/PanelUpgrades'),
);
const ElectricalConstruction = lazy(
  () =>
    import('./pages/Services/ElectricalConstruction/ElectricalConstruction'),
);
const SecurityCameraSystems = lazy(
  () => import('./pages/Services/SecurityCameraSystems/SecurityCameraSystems'),
);
const OutletsService = lazy(
  () => import('./pages/Services/OutletsService/OutletsService'),
);
const ResidentialProjects = lazy(
  () => import('./pages/Services/ResidentialProjects/ResidentialProjects'),
);
const LightingDesign = lazy(
  () => import('./pages/Services/LightingDesign/LightingDesign'),
);
const Troubleshooting = lazy(
  () => import('./pages/Services/Troubleshooting/Troubleshooting'),
);
const LandscapeLighting = lazy(
  () => import('./pages/Services/LandscapeLighting/LandscapeLighting'),
);
const EVCharger = lazy(() => import('./pages/Services/EVCharger/EVCharger'));
const Subpanel = lazy(() => import('./pages/Services/Subpanel/Subpanel'));
const SecurityLighting = lazy(
  () => import('./pages/Services/SecurityLighting/SecurityLighting'),
);
const LightFixture = lazy(
  () => import('./pages/Services/LightFixture/LightFixture'),
);
const CommercialElectrical = lazy(
  () => import('./pages/Services/CommercialElectrical/CommercialElectrical'),
);
const SmartHome = lazy(() => import('./pages/Services/SmartHome/SmartHome'));
const ElectricalRemodeling = lazy(
  () => import('./pages/Services/ElectricalRemodeling/ElectricalRemodeling'),
);

const LocationPage = lazy(() => import('./pages/Locations/LocationPage'));
const BrentwoodPage = lazy(
  () => import('./pages/Locations/BrentwoodPage/BrentwoodPage'),
);
const BelAirPage = lazy(
  () => import('./pages/Locations/BelAirPage/BelAirPage'),
);
const BeverlyGlenPage = lazy(
  () => import('./pages/Locations/BeverlyGlenPage/BeverlyGlenPage'),
);
const MarVistaPage = lazy(
  () => import('./pages/Locations/MarVistaPage/MarVistaPage'),
);
const WestwoodPage = lazy(
  () => import('./pages/Locations/WestwoodPage/WestwoodPage'),
);
const CulverCityPage = lazy(
  () => import('./pages/Locations/CulverCityPage/CulverCityPage'),
);
const CheviotHillsPage = lazy(
  () => import('./pages/Locations/CheviotHillsPage/CheviotHillsPage'),
);
const ShermanOaksPage = lazy(
  () => import('./pages/Locations/ShermanOaksPage/ShermanOaksPage'),
);
const HermosaBeachPage = lazy(
  () => import('./pages/Locations/HermosaBeachPage/HermosaBeachPage'),
);
const SantaMonicaPage = lazy(
  () => import('./pages/Locations/SantaMonicaPage/SantaMonicaPage'),
);
const HuntingtonBeachPage = lazy(
  () => import('./pages/Locations/HuntingtonBeachPage/HuntingtonBeachPage'),
);
const BeverlyHillsPage = lazy(
  () => import('./pages/Locations/BeverlyHillsPage/BeverlyHillsPage'),
);
const BeverlyGrovePage = lazy(
  () => import('./pages/Locations/BeverlyGrovePage/BeverlyGrovePage'),
);
const WestHollywoodPage = lazy(
  () => import('./pages/Locations/WestHollywoodPage/WestHollywoodPage'),
);
const SawtellePage = lazy(
  () => import('./pages/Locations/SawtellePage/SawtellePage'),
);
const CenturyCityPage = lazy(
  () => import('./pages/Locations/CenturyCityPage/CenturyCityPage'),
);
const MarinaDelReyPage = lazy(
  () => import('./pages/Locations/MarinaDelReyPage/MarinaDelReyPage'),
);
const SimiValleyPage = lazy(
  () => import('./pages/Locations/SimiValleyPage/SimiValleyPage'),
);
const ManhattanBeachPage = lazy(
  () => import('./pages/Locations/ManhattanBeachPage/ManhattanBeachPage'),
);
const PacificPalisadesPage = lazy(
  () => import('./pages/Locations/PacificPalisadesPage/PacificPalisadesPage'),
);
const BeverlyCrestPage = lazy(
  () => import('./pages/Locations/BeverlyCrestPage/BeverlyCrestPage'),
);
const BeverlywoodPage = lazy(
  () => import('./pages/Locations/BeverlywoodPage/BeverlywoodPage'),
);
const WestLosAngelesPage = lazy(
  () => import('./pages/Locations/WestLosAngelesPage/WestLosAngelesPage'),
);
const VenicePage = lazy(
  () => import('./pages/Locations/VenicePage/VenicePage'),
);
const PlayaVistaPage = lazy(
  () => import('./pages/Locations/PlayaVistaPage/PlayaVistaPage'),
);
const CalabasasPage = lazy(
  () => import('./pages/Locations/CalabasasPage/CalabasasPage'),
);
const PasadenaPage = lazy(
  () => import('./pages/Locations/PasadenaPage/PasadenaPage'),
);
const RedondoBeachPage = lazy(
  () => import('./pages/Locations/RedondoBeachPage/RedondoBeachPage'),
);

const ProjectsPage = lazy(() => import('./pages/Projects/ProjectsPage'));
const ReviewsPage = lazy(() => import('./pages/Reviews/ReviewsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage/FAQPage'));
const BlogPage = lazy(() => import('./pages/Blog/BlogPage'));

const SurgeProtectionBlog = lazy(
  () => import('./pages/Blog/SurgeProtectionBlog/SurgeProtectionBlog'),
);
const EnergyPlanningBlog = lazy(
  () => import('./pages/Blog/EnergyPlanningBlog/EnergyPlanningBlog'),
);
const ZinscoPanelBlog = lazy(
  () => import('./pages/Blog/ZinscoPanelBlog/ZinscoPanelBlog'),
);
const DustFreeUpgradeBlog = lazy(
  () => import('./pages/Blog/DustFreeUpgradeBlog/DustFreeUpgradeBlog'),
);
const LayeredLightingBlog = lazy(
  () => import('./pages/Blog/LayeredLightingBlog/LayeredLightingBlog'),
);
const ModernHomesBlog = lazy(
  () => import('./pages/Blog/ModernHomesBlog/ModernHomesBlog'),
);
const WarningSignsBlog = lazy(
  () => import('./pages/Blog/WarningSignsBlog/WarningSignsBlog'),
);
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'));

const PrivacyPolicyPage = lazy(
  () => import('./pages/PrivacyPolicyPage/PrivacyPolicyPage'),
);

const TermsOfServicePage = lazy(
  () => import('./pages/TermsOfServicePage/TermsOfServicePage'),
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/all-services' element={<ServicesPage />} />
          <Route path='/panel-upgrades-service' element={<PanelUpgrades />} />
          <Route
            path='/construction-service'
            element={<ElectricalConstruction />}
          />
          <Route
            path='/security-cameras-service'
            element={<SecurityCameraSystems />}
          />
          <Route path='/outlets&GFCI-service' element={<OutletsService />} />
          <Route
            path='/residential-service'
            element={<ResidentialProjects />}
          />
          <Route path='/lighting-design-service' element={<LightingDesign />} />
          <Route
            path='/troubleshooting-service'
            element={<Troubleshooting />}
          />
          <Route
            path='/landscape-lighting-service'
            element={<LandscapeLighting />}
          />
          <Route path='/ev-chargers-service' element={<EVCharger />} />
          <Route path='/subpanels-service' element={<Subpanel />} />
          <Route
            path='/security-lighting-service'
            element={<SecurityLighting />}
          />
          <Route path='/light-fixtures-service' element={<LightFixture />} />
          <Route
            path='/Commercial-service'
            element={<CommercialElectrical />}
          />
          <Route path='/smart-home-service' element={<SmartHome />} />
          <Route
            path='/remodeling-service'
            element={<ElectricalRemodeling />}
          />
          <Route path='/all-locations' element={<LocationPage />} />
          <Route path='/brentwood' element={<BrentwoodPage />} />
          <Route path='/bel-air' element={<BelAirPage />} />
          <Route path='/beverly-glen' element={<BeverlyGlenPage />} />
          <Route path='/mar-vista' element={<MarVistaPage />} />
          <Route path='/westwood' element={<WestwoodPage />} />
          <Route path='/culver-city' element={<CulverCityPage />} />
          <Route path='/cheviot-hills' element={<CheviotHillsPage />} />
          <Route path='/sherman-oaks' element={<ShermanOaksPage />} />
          <Route path='/hermosa-beach' element={<HermosaBeachPage />} />
          <Route path='/huntington-beach' element={<HuntingtonBeachPage />} />
          <Route path='/santa-monica' element={<SantaMonicaPage />} />
          <Route path='/beverly-hills' element={<BeverlyHillsPage />} />
          <Route path='/beverly-grove' element={<BeverlyGrovePage />} />
          <Route path='/west-hollywood' element={<WestHollywoodPage />} />
          <Route path='/sawtelle' element={<SawtellePage />} />
          <Route path='/century-city' element={<CenturyCityPage />} />
          <Route path='/marina-del-rey' element={<MarinaDelReyPage />} />
          <Route path='/simi-valley' element={<SimiValleyPage />} />
          <Route path='/manhattan-beach' element={<ManhattanBeachPage />} />
          <Route path='/pacific-palisades' element={<PacificPalisadesPage />} />
          <Route path='/beverly-crest' element={<BeverlyCrestPage />} />
          <Route path='/beverlywood' element={<BeverlywoodPage />} />
          <Route path='/west-los-angeles' element={<WestLosAngelesPage />} />
          <Route path='/venice' element={<VenicePage />} />
          <Route path='/playa-vista' element={<PlayaVistaPage />} />
          <Route path='/calabasas' element={<CalabasasPage />} />
          <Route path='/pasadena' element={<PasadenaPage />} />
          <Route path='/redondo-beach' element={<RedondoBeachPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/reviews' element={<ReviewsPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='energy-planning-blog' element={<EnergyPlanningBlog />} />
          <Route
            path='surge-protection-blog'
            element={<SurgeProtectionBlog />}
          />
          <Route path='zinsco-panel-blog' element={<ZinscoPanelBlog />} />
          <Route
            path='dust-free-upgrade-blog'
            element={<DustFreeUpgradeBlog />}
          />
          <Route
            path='layered-lighting-blog'
            element={<LayeredLightingBlog />}
          />
          <Route path='modern-homes-blog' element={<ModernHomesBlog />} />
          <Route path='warning-signs-blog' element={<WarningSignsBlog />} />
          <Route path='contact' element={<ContactPage />} />

          <Route path='privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='terms-of-service' element={<TermsOfServicePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
