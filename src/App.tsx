import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import HeaderComponent from './components/Header/HeaderComponent';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ServicesPage from './pages/Services/ServicesPage';
import PanelUpgrades from './pages/Services/PanelUpgrades/PanelUpgrades';
import ElectricalConstruction from './pages/Services/ElectricalConstruction/ElectricalConstruction';
import SecurityCameraSystems from './pages/Services/SecurityCameraSystems/SecurityCameraSystems';
import OutletsService from './pages/Services/OutletsService/OutletsService';
import ResidentialProjects from './pages/Services/ResidentialProjects/ResidentialProjects';
import LightingDesign from './pages/Services/LightingDesign/LightingDesign';
import Troubleshooting from './pages/Services/Troubleshooting/Troubleshooting';
import LandscapeLighting from './pages/Services/LandscapeLighting/LandscapeLighting';
import EVCharger from './pages/Services/EVCharger/EVCharger';
import Subpanel from './pages/Services/Subpanel/Subpanel';
import SecurityLighting from './pages/Services/SecurityLighting/SecurityLighting';
import LightFixture from './pages/Services/LightFixture/LightFixture';
import CommercialElectrical from './pages/Services/CommercialElectrical/CommercialElectrical';
import SmartHome from './pages/Services/SmartHome/SmartHome';
import ElectricalRemodeling from './pages/Services/ElectricalRemodeling/ElectricalRemodeling';
import LocationPage from './pages/Locations/LocationPage';
import BrentwoodPage from './pages/Locations/BrentwoodPage/BrentwoodPage';
import BelAirPage from './pages/Locations/BelAirPage/BelAirPage';
import BeverlyGlenPage from './pages/Locations/BeverlyGlenPage/BeverlyGlenPage';
import MarVistaPage from './pages/Locations/MarVistaPage/MarVistaPage';
import WestwoodPage from './pages/Locations/WestwoodPage/WestwoodPage';
import CulverCityPage from './pages/Locations/CulverCityPage/CulverCityPage';
import CheviotHillsPage from './pages/Locations/CheviotHillsPage/CheviotHillsPage';
import ShermanOaksPage from './pages/Locations/ShermanOaksPage/ShermanOaksPage';
import HermosaBeachPage from './pages/Locations/HermosaBeachPage/HermosaBeachPage';
import SantaMonicaPage from './pages/Locations/SantaMonicaPage/SantaMonicaPage';
import HuntingtonBeachPage from './pages/Locations/HuntingtonBeachPage/HuntingtonBeachPage';
import BeverlyHillsPage from './pages/Locations/BeverlyHillsPage/BeverlyHillsPage';
import BeverlyGrovePage from './pages/Locations/BeverlyGrovePage/BeverlyGrovePage';
import WestHollywoodPage from './pages/Locations/WestHollywoodPage/WestHollywoodPage';
import SawtellePage from './pages/Locations/SawtellePage/SawtellePage';
import CenturyCityPage from './pages/Locations/CenturyCityPage/CenturyCityPage';
import MarinaDelReyPage from './pages/Locations/MarinaDelReyPage/MarinaDelReyPage';
import SimiValleyPage from './pages/Locations/SimiValleyPage/SimiValleyPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
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
        <Route path='/residential-service' element={<ResidentialProjects />} />
        <Route path='/lighting-design-service' element={<LightingDesign />} />
        <Route path='/troubleshooting-service' element={<Troubleshooting />} />
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
        <Route path='/Commercial-service' element={<CommercialElectrical />} />
        <Route path='/smart-home-service' element={<SmartHome />} />
        <Route path='/remodeling-service' element={<ElectricalRemodeling />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
