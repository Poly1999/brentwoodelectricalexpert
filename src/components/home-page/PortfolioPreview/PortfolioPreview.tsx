import './PortfolioPreview.css';
import { ArrowRight } from 'lucide-react';
import panelInstall from '../../../assets/panel-framing.webp';
import generacSwitch from '../../../assets/generac-panel.webp';
import wholeHomeGenerator from '../../../assets/generac-generator.webp';
import evChargerSM from '../../../assets/ev-charger-1.webp';
import kitchenRewire from '../../../assets/kitchen-rewire.webp';
import chandelierInstall from '../../../assets/lightfixture-2611.webp';
import copperPendant from '../../../assets/copper-pendant.webp';
import pendantCluster from '../../../assets/designer-pendants.webp';
import bathroomPendants from '../../../assets/bathroom-pendants.webp';
import trackLighting from '../../../assets/track-lighting.webp';
import retailLighting from '../../../assets/retail-lighting.webp';
import commercialBuildout from '../../../assets/commercial-framing.webp';

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

function PortfolioPreview() {
  return (
    <div className='portfolio'>
      <div className='container'>
        <div className='portfolio_header'>
          <h2>Our Work</h2>
          <p>A glimpse at recent projects across West Los Angeles</p>
        </div>

        <div className='portfolio_grid'>
          {projects.map((project, index) => (
            <div className='portfolio_card' key={index}>
              <img src={project.image} alt={project.title} />
              <div className='portfolio_overlay'>
                <span>{project.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='portfolio_viewall'>
          <a href='/projects' className='portfolio_viewall_button'>
            View All Projects
            <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPreview;
