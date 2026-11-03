import './ServicesSection.css';
import {
  Zap,
  Building2,
  PanelsTopLeft,
  Camera,
  Lightbulb,
  Plug,
  Lamp,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import PanelUpgradesImage from '../../../assets/panel-framing.webp';
import ConstructionImage from '../../../assets/commercial-framing.webp';
import SubpanelsImage from '../../../assets/generac-panel.webp';
import SecurityCamerasImage from '../../../assets/security-camera-hero.webp';
import SecurityLightingImage from '../../../assets/security-lighting-floodlight.jpg';
import OutletsImage from '../../../assets//recessed-lighting.webp';
import LightFixturesImage from '../../../assets/track-lighting.webp';
import { NavLink } from 'react-router-dom';

function ServicesSection() {
  return (
    <div className='servicessection'>
      <div className='container'>
        <div className='servicessection_header'>
          <h2>
            Complete Electrical Solutions Built to NEC & Title 24 Standards
          </h2>
          <p>
            From heavy-duty main service replacements to precision smart-home
            automation—every project is executed by licensed professionals.
          </p>
        </div>

        <div className='servicessection_list'>
          <NavLink to='/panel-upgrades-service' className='servicecard_wrap'>
            <div className='servicecard'>
              <div className='servicecard_image'>
                <img src={PanelUpgradesImage} alt='Electrical Panel Upgrades' />
              </div>
              <div className='servicecard_content'>
                <div className='servicecard_label'>
                  <div className='servicecard_icon'>
                    <Zap />
                  </div>
                  <span>Panel Upgrades</span>
                </div>
                <h3>Main Electrical Panel Upgrades</h3>
                <p className='servicecard_text'>
                  Is an aging 100-amp box, Zinsco panel, or Federal Pacific
                  breaker limiting your property’s capacity? Brentwood
                  Electrical Experts upgrades residential and commercial power
                  systems to 200-amp and 400-amp service across West LA, Santa
                  Monica, and Brentwood—giving your home the headroom for modern
                  heat pumps, EV chargers, and luxury kitchen appliances.
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Safely power high-demand appliances & dual EV setups
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Eliminate nuisance breaker trips and voltage drops
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Full LADWP/SCE utility coordination & city permitting
                    </span>
                  </div>
                </div>
                <span className='servicecard_link'>
                  Explore Panel Upgrades
                  <ArrowRight />
                </span>
              </div>
            </div>
          </NavLink>

          <NavLink to='/construction-service' className='servicecard_wrap'>
            <div className='servicecard servicecard_reverse'>
              <div className='servicecard_content'>
                <div className='servicecard_label'>
                  <div className='servicecard_icon'>
                    <Building2 />
                  </div>
                  <span>Construction</span>
                </div>
                <h3>Electrical Construction & Tenant Improvements</h3>
                <p className='servicecard_text'>
                  From ground-up custom residences and ADUs to commercial retail
                  buildouts, Brentwood Electrical Experts executes full-scope
                  electrical construction across West Los Angeles. We partner
                  directly with general contractors, architects, and developers
                  to deliver clean rough-in and finish phases on schedule.
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Turnkey single-line diagrams, load schedules & system
                      design
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Title 24 compliant lighting controls & energy submetering
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Seamless trade coordination and municipal inspection
                      sign-offs
                    </span>
                  </div>
                </div>
                <span className='servicecard_link'>
                  Explore Construction
                  <ArrowRight />
                </span>
              </div>
              <div className='servicecard_image'>
                <img src={ConstructionImage} alt='Electrical Construction' />
              </div>
            </div>
          </NavLink>

          <NavLink to='/subpanels-service' className='servicecard_wrap'>
            <div className='servicecard'>
              <div className='servicecard_image'>
                <img src={SubpanelsImage} alt='Subpanel Installation' />
              </div>
              <div className='servicecard_content'>
                <div className='servicecard_label'>
                  <div className='servicecard_icon'>
                    <PanelsTopLeft />
                  </div>
                  <span>Subpanels</span>
                </div>
                <h3>Dedicated Subpanel Installation</h3>
                <p className='servicecard_text'>
                  Adding a backyard ADU, detached garage workshop, pool
                  equipment pad, or primary suite addition? We install properly
                  grounded feeder subpanels across Brentwood, Santa Monica, and
                  Pacific Palisades to distribute power cleanly without
                  overcrowding your main breaker enclosure.
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Expand circuit capacity to ADUs, garages, and additions
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Relieve busbar congestion in your primary service panel
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Underground PVC trenching and weatherproof NEMA 3R
                      enclosures
                    </span>
                  </div>
                </div>
                <span className='servicecard_link'>
                  Explore Subpanels
                  <ArrowRight />
                </span>
              </div>
            </div>
          </NavLink>

          <NavLink to='/security-cameras-service' className='servicecard_wrap'>
            <div className='servicecard servicecard_reverse'>
              <div className='servicecard_content'>
                <div className='servicecard_label'>
                  <div className='servicecard_icon'>
                    <Camera />
                  </div>
                  <span>Security Cameras</span>
                </div>
                <h3>Hardwired Security Camera Systems</h3>
                <p className='servicecard_text'>
                  Safeguard your estate or commercial facility with
                  commercial-grade surveillance infrastructure. We run dedicated
                  Cat6 PoE cabling and mount high-definition IP cameras, NVR
                  storage systems, and smart perimeter alerts throughout
                  Brentwood, Beverly Hills, and Santa Monica.
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Continuous 24/7 perimeter recording with zero Wi-Fi
                      dropouts
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Ultra-clear 4K day/night optics with color night vision
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Encrypted mobile app viewing from anywhere in the world
                    </span>
                  </div>
                </div>
                <span className='servicecard_link'>
                  Explore Security Cameras
                  <ArrowRight />
                </span>
              </div>
              <div className='servicecard_image'>
                <img src={SecurityCamerasImage} alt='Security Camera Systems' />
              </div>
            </div>
          </NavLink>

          <NavLink to='/security-lighting-service' className='servicecard_wrap'>
            <div className='servicecard'>
              <div className='servicecard_image'>
                <img
                  src={SecurityLightingImage}
                  alt='Security Lighting Installation'
                />
              </div>
              <div className='servicecard_content'>
                <div className='servicecard_label'>
                  <div className='servicecard_icon'>
                    <Lightbulb />
                  </div>
                  <span>Security Lighting</span>
                </div>
                <h3>Exterior & Perimeter Security Lighting</h3>
                <p className='servicecard_text'>
                  Eliminate dark blind spots around your property with
                  architectural floodlights, motion-sensing perimeter fixtures,
                  and low-voltage pathway illumination. We design
                  weather-resistant coastal and hillside lighting systems across
                  West Los Angeles.
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Instant motion-activated deterrence for driveways and side
                      yards
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Photocell dusk-to-dawn automation and smart astronomic
                      timers
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      High-output, low-wattage LED fixtures built for coastal
                      air
                    </span>
                  </div>
                </div>
                <span className='servicecard_link'>
                  Explore Security Lighting
                  <ArrowRight />
                </span>
              </div>
            </div>
          </NavLink>

          <NavLink to='/outlets&GFCI-service' className='servicecard_wrap'>
            <div className='servicecard servicecard_reverse'>
              <div className='servicecard_content'>
                <div className='servicecard_label'>
                  <div className='servicecard_icon'>
                    <Plug />
                  </div>
                  <span>Outlets & GFCI</span>
                </div>
                <h3>Outlets, USB-C & GFCI Protection</h3>
                <p className='servicecard_text'>
                  Modernize aging two-prong receptacles and protect wet zones
                  with NEC-mandated GFCI and AFCI protection. We install
                  tamper-resistant outlets, high-speed USB-C charging
                  receptacles, and dedicated 20-amp kitchen/bath circuits across
                  West LA.
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Dedicated circuits for microwaves, bidets, and home
                      offices
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Instant shock-prevention GFCI upgrades for kitchens, baths
                      & patios
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Flush decorator-style outlets and fast-charging USB-C
                      ports
                    </span>
                  </div>
                </div>
                <span className='servicecard_link'>
                  Explore Outlets & GFCI
                  <ArrowRight />
                </span>
              </div>
              <div className='servicecard_image'>
                <img src={OutletsImage} alt='Outlets & GFCI Installation' />
              </div>
            </div>
          </NavLink>

          <NavLink to='/light-fixtures-service' className='servicecard_wrap'>
            <div className='servicecard'>
              <div className='servicecard_image'>
                <img
                  src={LightFixturesImage}
                  alt='Light Fixture Installation'
                />
              </div>
              <div className='servicecard_content'>
                <div className='servicecard_label'>
                  <div className='servicecard_icon'>
                    <Lamp />
                  </div>
                  <span>Light Fixtures</span>
                </div>
                <h3>Custom Light Fixture & Chandelier Installation</h3>
                <p className='servicecard_text'>
                  Elevate your interior architecture with precision lighting
                  installation. From high-ceiling foyer chandeliers and
                  ultra-thin wafer LED recessed lights to under-cabinet task
                  strips and Lutron dimming controls, we wire and balance every
                  fixture to perfection.
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Structural bracing and rigging for heavy designer
                      chandeliers
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Warm-dim LED recessed lighting layouts with zero drywall
                      damage
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Smart dimmer integration (Lutron Caséta, RadioRA 3 &
                      Control4)
                    </span>
                  </div>
                </div>
                <span className='servicecard_link'>
                  Explore Light Fixtures
                  <ArrowRight />
                </span>
              </div>
            </div>
          </NavLink>
        </div>

        <div className='servicessection_viewall'>
          <NavLink
            to='/all-services'
            className='servicessection_viewall_button'
          >
            View All Services
            <ArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
