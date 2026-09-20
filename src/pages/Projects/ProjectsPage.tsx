import './ProjectsPage.css';

import PanelUpgrade from '../../assets/panel-framing.webp';
import GeneracTransfer from '../../assets/generac-panel.webp';
import WholeHomeGenerac from '../../assets/generac-generator.webp';
import TeslaWallConnector from '../../assets/ev-charger-1.webp';
import FullKitchenRewire from '../../assets/kitchen-rewire.webp';
import LuxuryChandelier from '../../assets/lightfixture-2611.webp';
import CopperPendantLight from '../../assets/copper-pendant.webp';
import DesignerPendant from '../../assets/designer-pendants.webp';
import BathroomPendant from '../../assets/bathroom-pendants.webp';
import KitchenTrackLighting from '../../assets/track-lighting.webp';
import CustomRecessed from '../../assets/recessed-lighting.webp';
import RetailStoreLighting from '../../assets/retail-lighting.webp';
import CommercialBuildOut from '../../assets/commercial-framing.webp';
import NewConstructionElectrical from '../../assets/construction-site.webp';
import CommercialKitchenLighting from '../../assets/commercial-lighting-bar.jpg';
import StairwellPendant from '../../assets/copper-pendant.webp';
import SaunaHeater from '../../assets/sauna-heater.jpg';
import EVChargerOnSite from '../../assets/ev-charger-2.webp';
import ServiceVan from '../../assets/company-van.webp';
import ResidentialPanelUpgrade from '../../assets/residential-new-1.webp';
import InteriorWiring from '../../assets/residential-new-2.webp';
import ElectricalServiceUpgrade from '../../assets/residential-new-3.webp';
import HomeWiringProject from '../../assets/residential-new-4.webp';
import NewElectricalInstallation from '../../assets/residential-new-5.webp';
import ElectricalRepairsUpdates from '../../assets/residential-new-6.webp';
import CompleteHomeRewire from '../../assets/residential-new-7.jpg';
import FullElectricalService from '../../assets/residential-new-8.jpg';
import ResidentialPanelInstallation from '../../assets/residential-panel.webp';
import OutdoorElectricalService from '../../assets/residential-outdoor.webp';
import InteriorLightingUpgrade from '../../assets/residential-new-4.webp';
import LivingRoomElectricalWork from '../../assets/residential-new-5.webp';
import HomeElectricalInstallation from '../../assets/residential-new-3.webp';
import ResidentialWiringProject from '../../assets/residential-new-2.webp';
import ElectricalRepairsUpdatesCC from '../../assets/residential-work-2.jpg';
import CommercialWiringProject from '../../assets/commercial-1.webp';
import NewConstructionElectricalSM from '../../assets/commercial-2.webp';
import CommercialInstallation from '../../assets/commercial-3.webp';
import CommercialElectricalService from '../../assets/commercial-4.webp';
import CommercialBuildOutWiring from '../../assets/commercial-5.webp';
import CommercialPanelWork from '../../assets/commercial-6.webp';
import TenantImprovement from '../../assets/commercial-7.webp';
import CommercialLighting from '../../assets/commercial-8.webp';
import RetailWiringProject from '../../assets/commercial-9.jpg';
import OfficeBuildOut from '../../assets/commercial-10.jpg';
import TeslaWallConnectorInstall from '../../assets/ev-charger-1.webp';
import Level2ChargerInstallation from '../../assets/ev-charger-2.webp';
import ResidentialEVStation from '../../assets/ev-charger-3.webp';
import NewBuildElectrical from '../../assets/electrical-1.webp';
import CommercialWiringProjectSM from '../../assets/electrical-2.webp';
import PanelInstallation from '../../assets/electrical-3.webp';
import ConstructionWiring from '../../assets/electrical-4.webp';
import CommercialElectrical from '../../assets/electrical-5.webp';
import NewConstructionProject from '../../assets/electrical-6.jpg';
import ElectricalProject from '../../assets/electrical-7.jpg';
import PanelUpgrade200Amp from '../../assets/panel-new-2.webp';
import PanelReplacement from '../../assets/panel-new-3.webp';
import ServicePanelUpgrade from '../../assets/panel-new-4.webp';
import MainPanelUpgrade from '../../assets/panel-new-5.webp';
import PanelElectricalWork from '../../assets/panel-new-6.webp';
import KitchenElectricalRemodel from '../../assets/residential-new-4.webp';
import BathroomWiringUpgrade from '../../assets/panel-new-5.webp';
import FullHomeElectricalRemodel from '../../assets/remodeling-7498.webp';
import RoomAdditionElectrical from '../../assets/commercial-framing.webp';
import PendantLightInstallation from '../../assets/lightdesign-1981.webp';
import ChandelierInstallation from '../../assets/lightfixture-2611.webp';
import RecessedLightingUpgrade from '../../assets/lightfixture-5593.webp';
import ModernCeilingFixture from '../../assets/lightfixture-6151.webp';
import KitchenLightingDesign from '../../assets/lightfixture-7697.webp';
import LivingRoomLightFixture from '../../assets/lightfixture-8582.webp';
import DesignerLightingInstallation from '../../assets/lightdesign-1981.webp';
import CustomInteriorLightingDesign from '../../assets/lightfixture-8582.webp';
import ModernLightingLayout from '../../assets/lightdesign-6625.webp';
import ResidentialLightDesign from '../../assets/lightdesign-4023.webp';
import ArchitecturalLightingSolution from '../../assets/lightdesign-4161.webp';
import LuxuryHomeLightingDesign from '../../assets/lightdesign-6266.webp';
import PremiumLightingInstallation from '../../assets/lightdesign-9014.webp';
import GarageSubpanelInstallation from '../../assets/subpanel-9286.webp';
import ADUElectricalSubpanel from '../../assets/subpanel-9347.webp';
import WorkshopSubpanelSetup from '../../assets/subpanel-6398.webp';
import HomeAdditionSubpanel from '../../assets/subpanel-9347.webp';
import SmartSwitchInstallation from '../../assets/smarthome-1-rotated.webp';
import SmartLightingControlSystem from '../../assets/smarthome-2.webp';
import HomeAutomationSetup from '../../assets/smarthome-3.webp';
import SecurityCameraInstallation from '../../assets/securitycamera-0347.webp';
import CCTVSystemInstallation from '../../assets/securitycamera-0351.webp';
import SurveillanceCameraSetup from '../../assets/securitycamera-0352.webp';
import CircuitDiagnosisRepair from '../../assets/commercial-5.webp';
import WiringFaultInspection from '../../assets/troubleshoot-1650.webp';
import ElectricalSystemRepair from '../../assets/commercial-8.webp';
import PanelTroubleshooting from '../../assets/troubleshoot-9272.webp';
import ElectricalFaultDetection from '../../assets/troubleshoot-2028.webp';
import ElectricalTestingDiagnosis from '../../assets/panel-new-5.webp';
import GFCIOutletInstallation from '../../assets/outlet-0348-rotated.webp';
import USBOutletUpgrade from '../../assets/outlet-0349-rotated.webp';
import ElectricalWorkInProgress from '../../assets/lightfixture-2611.webp';
import PanelWiringInProgress from '../../assets/panel-new-5.webp';
import RoughInElectricalWork from '../../assets/wip-2164.webp';
import ConstructionPhaseWiring from '../../assets/wip-2300.webp';
import NewBuildElectricalProgress from '../../assets/NewBuildElectrical.webp';
import ElectricalRoughInProject from '../../assets/lightfixture-6151.webp';
import InProgressInstallation from '../../assets/commercial-7.webp';
import ActiveElectricalProject from '../../assets/commercial-8.webp';
import Footer from '../../components/Footer/Footer';

function ProjectsPage() {
  const projects = [
    {
      image: PanelUpgrade,
      category: 'Panel Upgrade',
      title: '200-Amp Panel Upgrade',
      location: 'Brentwood, CA',
    },
    {
      image: GeneracTransfer,
      category: 'Generator',
      title: 'Generac Transfer Switch Install',
      location: 'Bel Air, CA',
    },
    {
      image: WholeHomeGenerac,
      category: 'Generator',
      title: 'Whole-Home Generac Generator',
      location: 'Pacific Palisades, CA',
    },
    {
      image: TeslaWallConnector,
      category: 'EV Charger',
      title: 'Tesla Wall Connector Installation',
      location: 'Santa Monica, CA',
    },
    {
      image: FullKitchenRewire,
      category: 'Construction',
      title: 'Full Kitchen Rewire',
      location: 'Pacific Palisades, CA',
    },
    {
      image: LuxuryChandelier,
      category: 'Lighting',
      title: 'Luxury Chandelier Installation',
      location: 'Bel Air, CA',
    },
    {
      image: CopperPendantLight,
      category: 'Lighting',
      title: 'Copper Pendant Light — Living Room',
      location: 'Brentwood, CA',
    },
    {
      image: DesignerPendant,
      category: 'Lighting',
      title: 'Designer Pendant Cluster',
      location: 'Westwood, CA',
    },
    {
      image: BathroomPendant,
      category: 'Lighting',
      title: 'Bathroom Pendant Lighting',
      location: 'Beverly Hills, CA',
    },
    {
      image: KitchenTrackLighting,
      category: 'Lighting',
      title: 'Kitchen Track Lighting',
      location: 'Mar Vista, CA',
    },
    {
      image: CustomRecessed,
      category: 'Lighting',
      title: 'Custom Recessed Lighting',
      location: 'Brentwood, CA',
    },
    {
      image: RetailStoreLighting,
      category: 'Commercial',
      title: 'Retail Store Lighting & Power',
      location: 'Century City, CA',
    },
    {
      image: CommercialBuildOut,
      category: 'Commercial',
      title: 'Commercial Build-Out Wiring',
      location: 'West Hollywood, CA',
    },
    {
      image: NewConstructionElectrical,
      category: 'Construction',
      title: 'New Construction Electrical',
      location: 'Santa Monica, CA',
    },
    {
      image: CommercialKitchenLighting,
      category: 'Commercial',
      title: 'Commercial Kitchen Lighting',
      location: 'Century City, CA',
    },
    {
      image: StairwellPendant,
      category: 'Lighting',
      title: 'Stairwell Pendant Light',
      location: 'Westwood, CA',
    },
    {
      image: SaunaHeater,
      category: 'Specialty',
      title: 'Sauna Heater Wiring',
      location: 'Beverly Hills, CA',
    },
    {
      image: EVChargerOnSite,
      category: 'EV Charger',
      title: 'EV Charger — On-Site Install',
      location: 'West Hollywood, CA',
    },
    {
      image: ServiceVan,
      category: 'About Us',
      title: 'Our Fully Stocked Service Van',
      location: 'West LA',
    },
    {
      image: ResidentialPanelUpgrade,
      category: 'Residential',
      title: 'Residential Panel Upgrade',
      location: 'West Los Angeles, CA',
    },
    {
      image: InteriorWiring,
      category: 'Residential',
      title: 'Interior Wiring Installation',
      location: 'Santa Monica, CA',
    },
    {
      image: ElectricalServiceUpgrade,
      category: 'Residential',
      title: 'Electrical Service Upgrade',
      location: 'Pacific Palisades, CA',
    },
    {
      image: HomeWiringProject,
      category: 'Residential',
      title: 'Home Wiring Project',
      location: 'Brentwood, CA',
    },
    {
      image: NewElectricalInstallation,
      category: 'Residential',
      title: 'New Electrical Installation',
      location: 'Beverly Hills, CA',
    },
    {
      image: ElectricalRepairsUpdates,
      category: 'Residential',
      title: 'Electrical Repairs & Updates',
      location: 'Mar Vista, CA',
    },
    {
      image: CompleteHomeRewire,
      category: 'Residential',
      title: 'Complete Home Rewire',
      location: 'Bel Air, CA',
    },
    {
      image: FullElectricalService,
      category: 'Residential',
      title: 'Full Electrical Service',
      location: 'Century City, CA',
    },
    {
      image: ResidentialPanelInstallation,
      category: 'Residential',
      title: 'Residential Panel Installation',
      location: 'West Los Angeles, CA',
    },
    {
      image: OutdoorElectricalService,
      category: 'Residential',
      title: 'Outdoor Electrical Service',
      location: 'Santa Monica, CA',
    },
    {
      image: InteriorLightingUpgrade,
      category: 'Residential',
      title: 'Interior Lighting Upgrade',
      location: 'Pacific Palisades, CA',
    },
    {
      image: LivingRoomElectricalWork,
      category: 'Residential',
      title: 'Living Room Electrical Work',
      location: 'Brentwood, CA',
    },
    {
      image: HomeElectricalInstallation,
      category: 'Residential',
      title: 'Home Electrical Installation',
      location: 'Bel Air, CA',
    },
    {
      image: ResidentialWiringProject,
      category: 'Residential',
      title: 'Residential Wiring Project',
      location: 'Mar Vista, CA',
    },
    {
      image: ElectricalRepairsUpdatesCC,
      category: 'Residential',
      title: 'Electrical Repairs & Updates',
      location: 'Century City, CA',
    },
    {
      image: CommercialWiringProject,
      category: 'Commercial',
      title: 'Commercial Wiring Project',
      location: 'West Los Angeles, CA',
    },
    {
      image: NewConstructionElectricalSM,
      category: 'Commercial',
      title: 'New Construction Electrical',
      location: 'Santa Monica, CA',
    },
    {
      image: CommercialInstallation,
      category: 'Commercial',
      title: 'Commercial Installation',
      location: 'Century City, CA',
    },
    {
      image: CommercialElectricalService,
      category: 'Commercial',
      title: 'Commercial Electrical Service',
      location: 'Beverly Hills, CA',
    },
    {
      image: CommercialBuildOutWiring,
      category: 'Commercial',
      title: 'Commercial Build-Out Wiring',
      location: 'Brentwood, CA',
    },
    {
      image: CommercialPanelWork,
      category: 'Commercial',
      title: 'Commercial Panel Work',
      location: 'Mar Vista, CA',
    },
    {
      image: TenantImprovement,
      category: 'Commercial',
      title: 'Tenant Improvement',
      location: 'Pacific Palisades, CA',
    },
    {
      image: CommercialLighting,
      category: 'Commercial',
      title: 'Commercial Lighting',
      location: 'West Hollywood, CA',
    },
    {
      image: RetailWiringProject,
      category: 'Commercial',
      title: 'Retail Wiring Project',
      location: 'Bel Air, CA',
    },
    {
      image: OfficeBuildOut,
      category: 'Commercial',
      title: 'Office Build-Out',
      location: 'Westwood, CA',
    },
    {
      image: TeslaWallConnectorInstall,
      category: 'EV Charger',
      title: 'Tesla Wall Connector Install',
      location: 'Santa Monica, CA',
    },
    {
      image: Level2ChargerInstallation,
      category: 'EV Charger',
      title: 'Level 2 Charger Installation',
      location: 'Pacific Palisades, CA',
    },
    {
      image: ResidentialEVStation,
      category: 'EV Charger',
      title: 'Residential EV Station',
      location: 'Brentwood, CA',
    },
    {
      image: NewBuildElectrical,
      category: 'Construction',
      title: 'New Build Electrical',
      location: 'West Los Angeles, CA',
    },
    {
      image: CommercialWiringProjectSM,
      category: 'Construction',
      title: 'Commercial Wiring Project',
      location: 'Santa Monica, CA',
    },
    {
      image: PanelInstallation,
      category: 'Construction',
      title: 'Panel Installation',
      location: 'Century City, CA',
    },
    {
      image: ConstructionWiring,
      category: 'Construction',
      title: 'Construction Wiring',
      location: 'Beverly Hills, CA',
    },
    {
      image: CommercialElectrical,
      category: 'Construction',
      title: 'Commercial Electrical',
      location: 'Brentwood, CA',
    },
    {
      image: NewConstructionProject,
      category: 'Construction',
      title: 'New Construction Project',
      location: 'Mar Vista, CA',
    },
    {
      image: ElectricalProject,
      category: 'Construction',
      title: 'Electrical Project',
      location: 'Pacific Palisades, CA',
    },
    {
      image: PanelUpgrade200Amp,
      category: 'Panel Upgrade',
      title: '200-Amp Panel Upgrade',
      location: 'Santa Monica, CA',
    },
    {
      image: PanelReplacement,
      category: 'Panel Upgrade',
      title: 'Panel Replacement',
      location: 'Pacific Palisades, CA',
    },
    {
      image: ServicePanelUpgrade,
      category: 'Panel Upgrade',
      title: 'Service Panel Upgrade',
      location: 'Brentwood, CA',
    },
    {
      image: MainPanelUpgrade,
      category: 'Panel Upgrade',
      title: 'Main Panel Upgrade',
      location: 'Beverly Hills, CA',
    },
    {
      image: PanelElectricalWork,
      category: 'Panel Upgrade',
      title: 'Panel Electrical Work',
      location: 'Mar Vista, CA',
    },
    {
      image: KitchenElectricalRemodel,
      category: 'Remodeling',
      title: 'Kitchen Electrical Remodel',
      location: 'West Los Angeles, CA',
    },
    {
      image: BathroomWiringUpgrade,
      category: 'Remodeling',
      title: 'Bathroom Wiring Upgrade',
      location: 'Santa Monica, CA',
    },
    {
      image: FullHomeElectricalRemodel,
      category: 'Remodeling',
      title: 'Full Home Electrical Remodel',
      location: 'Pacific Palisades, CA',
    },
    {
      image: RoomAdditionElectrical,
      category: 'Remodeling',
      title: 'Room Addition Electrical',
      location: 'Brentwood, CA',
    },
    {
      image: PendantLightInstallation,
      category: 'Lighting',
      title: 'Pendant Light Installation',
      location: 'Santa Monica, CA',
    },
    {
      image: ChandelierInstallation,
      category: 'Lighting',
      title: 'Chandelier Installation',
      location: 'Beverly Hills, CA',
    },
    {
      image: RecessedLightingUpgrade,
      category: 'Lighting',
      title: 'Recessed Lighting Upgrade',
      location: 'Pacific Palisades, CA',
    },
    {
      image: ModernCeilingFixture,
      category: 'Lighting',
      title: 'Modern Ceiling Fixture',
      location: 'Westwood, CA',
    },
    {
      image: KitchenLightingDesign,
      category: 'Lighting',
      title: 'Kitchen Lighting Design',
      location: 'Brentwood, CA',
    },
    {
      image: LivingRoomLightFixture,
      category: 'Lighting',
      title: 'Living Room Light Fixture',
      location: 'Century City, CA',
    },
    {
      image: DesignerLightingInstallation,
      category: 'Lighting',
      title: 'Designer Lighting Installation',
      location: 'West Los Angeles, CA',
    },
    {
      image: CustomInteriorLightingDesign,
      category: 'Lighting',
      title: 'Custom Interior Lighting Design',
      location: 'Santa Monica, CA',
    },
    {
      image: ModernLightingLayout,
      category: 'Lighting',
      title: 'Modern Lighting Layout',
      location: 'Pacific Palisades, CA',
    },
    {
      image: ResidentialLightDesign,
      category: 'Lighting',
      title: 'Residential Light Design',
      location: 'Brentwood, CA',
    },
    {
      image: ArchitecturalLightingSolution,
      category: 'Lighting',
      title: 'Architectural Lighting Solution',
      location: 'Beverly Hills, CA',
    },
    {
      image: LuxuryHomeLightingDesign,
      category: 'Lighting',
      title: 'Luxury Home Lighting Design',
      location: 'Bel Air, CA',
    },
    {
      image: PremiumLightingInstallation,
      category: 'Lighting',
      title: 'Premium Lighting Installation',
      location: 'Mar Vista, CA',
    },
    {
      image: GarageSubpanelInstallation,
      category: 'Subpanel',
      title: 'Garage Subpanel Installation',
      location: 'West Los Angeles, CA',
    },
    {
      image: ADUElectricalSubpanel,
      category: 'Subpanel',
      title: 'ADU Electrical Subpanel',
      location: 'Santa Monica, CA',
    },
    {
      image: WorkshopSubpanelSetup,
      category: 'Subpanel',
      title: 'Workshop Subpanel Setup',
      location: 'Brentwood, CA',
    },
    {
      image: HomeAdditionSubpanel,
      category: 'Subpanel',
      title: 'Home Addition Subpanel',
      location: 'Pacific Palisades, CA',
    },
    {
      image: SmartSwitchInstallation,
      category: 'Smart Home',
      title: 'Smart Switch Installation',
      location: 'West Los Angeles, CA',
    },
    {
      image: SmartLightingControlSystem,
      category: 'Smart Home',
      title: 'Smart Lighting Control System',
      location: 'Santa Monica, CA',
    },
    {
      image: HomeAutomationSetup,
      category: 'Smart Home',
      title: 'Home Automation Setup',
      location: 'Brentwood, CA',
    },
    {
      image: SecurityCameraInstallation,
      category: 'Security',
      title: 'Security Camera Installation',
      location: 'West Los Angeles, CA',
    },
    {
      image: CCTVSystemInstallation,
      category: 'Security',
      title: 'CCTV System Installation',
      location: 'Santa Monica, CA',
    },
    {
      image: SurveillanceCameraSetup,
      category: 'Security',
      title: 'Surveillance Camera Setup',
      location: 'Beverly Hills, CA',
    },
    {
      image: CircuitDiagnosisRepair,
      category: 'Troubleshooting',
      title: 'Circuit Diagnosis & Repair',
      location: 'Brentwood, CA',
    },
    {
      image: WiringFaultInspection,
      category: 'Troubleshooting',
      title: 'Wiring Fault Inspection',
      location: 'Santa Monica, CA',
    },
    {
      image: ElectricalSystemRepair,
      category: 'Troubleshooting',
      title: 'Electrical System Repair',
      location: 'Pacific Palisades, CA',
    },
    {
      image: PanelTroubleshooting,
      category: 'Troubleshooting',
      title: 'Panel Troubleshooting',
      location: 'West Los Angeles, CA',
    },
    {
      image: ElectricalFaultDetection,
      category: 'Troubleshooting',
      title: 'Electrical Fault Detection',
      location: 'Beverly Hills, CA',
    },
    {
      image: ElectricalTestingDiagnosis,
      category: 'Troubleshooting',
      title: 'Electrical Testing & Diagnosis',
      location: 'Bel Air, CA',
    },
    {
      image: GFCIOutletInstallation,
      category: 'Outlets',
      title: 'GFCI Outlet Installation',
      location: 'Brentwood, CA',
    },
    {
      image: USBOutletUpgrade,
      category: 'Outlets',
      title: 'USB Outlet Upgrade',
      location: 'Santa Monica, CA',
    },
    {
      image: ElectricalWorkInProgress,
      category: 'Work in Process',
      title: 'Electrical Work in Progress',
      location: 'West Los Angeles, CA',
    },
    {
      image: PanelWiringInProgress,
      category: 'Work in Process',
      title: 'Panel Wiring in Progress',
      location: 'Santa Monica, CA',
    },
    {
      image: RoughInElectricalWork,
      category: 'Work in Process',
      title: 'Rough-In Electrical Work',
      location: 'Pacific Palisades, CA',
    },
    {
      image: ConstructionPhaseWiring,
      category: 'Work in Process',
      title: 'Construction Phase Wiring',
      location: 'Brentwood, CA',
    },
    {
      image: NewBuildElectricalProgress,
      category: 'Work in Process',
      title: 'New Build Electrical Progress',
      location: 'Beverly Hills, CA',
    },
    {
      image: ElectricalRoughInProject,
      category: 'Work in Process',
      title: 'Electrical Rough-In Project',
      location: 'Mar Vista, CA',
    },
    {
      image: InProgressInstallation,
      category: 'Work in Process',
      title: 'In-Progress Installation',
      location: 'Bel Air, CA',
    },
    {
      image: ActiveElectricalProject,
      category: 'Work in Process',
      title: 'Active Electrical Project',
      location: 'Century City, CA',
    },
  ];
  return (
    <div className='projectspage'>
      <div className='projectspage_hero'>
        <div className='container'>
          <h2>
            Our <span>Projects</span>
          </h2>
          <p>
            A showcase of completed electrical work across West Los Angeles and
            surrounding communities.
          </p>
        </div>
      </div>
      <div className='container'>
        <ul className='projectspage_grid'>
          {projects.map((project, index) => (
            <li className='projectspage_card' key={index}>
              <div className='projectspage_image_wrapper'>
                <img src={project.image} alt={project.title} />
              </div>
              <div className='projectspage_content'>
                <span className='projectspage_category'>
                  {project.category}
                </span>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
