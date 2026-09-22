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
          <h2>Our Electrical Services</h2>
          <p>
            From panel upgrades to smart home installations — we handle it all
            with licensed, insured professionals.
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
                <h3>Electrical Panel Upgrades</h3>
                <p className='servicecard_text'>
                  Is your electrical panel outdated, overloaded, or unable to
                  keep up with modern demands? Brentwood Electrical Experts
                  provides professional electrical panel upgrades across West
                  LA, Santa Monica, Brentwood, and surrounding communities. We
                  upgrade 100-amp panels to 200-amp or...
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Safely handle increased electrical loads</span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Prevent circuit overloads and tripped breakers</span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Meet current electrical code requirements</span>
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
                <h3>Electrical Construction</h3>
                <p className='servicecard_text'>
                  From new construction wiring to tenant improvements and
                  full-scale electrical buildouts, Brentwood Electrical Experts
                  delivers comprehensive electrical construction services across
                  West Los Angeles. We work with general contractors, property
                  developers, and homeowners to deliver...
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Complete electrical system design and installation
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Code-compliant rough-in and finish work</span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Coordination with GCs and other trades</span>
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
                <h3>Subpanel Installation</h3>
                <p className='servicecard_text'>
                  Need additional circuits for a garage, ADU, workshop, or home
                  addition? Brentwood Electrical Experts installs electrical
                  subpanels to extend your electrical system safely and
                  efficiently. We serve homeowners and businesses across
                  Brentwood, Santa Monica, Pacific Palisades, and all of West...
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Extend electrical capacity to garages, ADUs, and additions
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Avoid overloading your main panel</span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Code-compliant installation with proper grounding
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
                <h3>Security Camera Systems</h3>
                <p className='servicecard_text'>
                  Protect your home or business with professionally installed
                  security camera systems. Brentwood Electrical Experts installs
                  wired and wireless CCTV, IP camera systems, and smart security
                  solutions across West LA, Brentwood, Santa Monica, Beverly
                  Hills, and surrounding areas.
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>24/7 property surveillance and monitoring</span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>HD and 4K camera options</span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Remote viewing from your phone</span>
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
                <h3>Security Lighting Installation</h3>
                <p className='servicecard_text'>
                  Illuminate and protect your property with professionally
                  installed security lighting. Brentwood Electrical Experts
                  designs and installs motion-sensor lights, floodlights, and
                  landscape security lighting across Brentwood, Santa Monica,
                  Pacific Palisades, and all of West Los Angeles.
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Deter intruders with motion-activated lighting</span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Illuminate driveways, pathways, and entry points
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Energy-efficient LED options</span>
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
                <h3>Outlets & GFCI Installation</h3>
                <p className='servicecard_text'>
                  Need additional outlets, USB outlets, or GFCI protection in
                  kitchens, bathrooms, and outdoor areas? Brentwood Electrical
                  Experts installs and upgrades electrical outlets throughout
                  West LA. We ensure every installation meets current NEC code
                  requirements for safety and convenience.
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Add outlets where you need them most</span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      GFCI protection for kitchens, bathrooms, and outdoors
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>USB outlet upgrades for modern convenience</span>
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
                <h3>Light Fixture Installation</h3>
                <p className='servicecard_text'>
                  Transform your space with professionally installed light
                  fixtures. From chandeliers and recessed lighting to pendant
                  lights and under-cabinet LEDs, Brentwood Electrical Experts
                  handles all light fixture installations across Brentwood,
                  Santa Monica, Beverly Hills, and West Los Angeles.
                </p>
                <div className='servicecard_features'>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Expert installation of all fixture types</span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>
                      Recessed lighting, chandeliers, pendants, and more
                    </span>
                  </div>
                  <div className='servicecard_feature'>
                    <CheckCircle2 />
                    <span>Dimmer switch installation available</span>
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
