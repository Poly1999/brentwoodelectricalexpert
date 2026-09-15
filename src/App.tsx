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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
