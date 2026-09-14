import './ServicesCard.css';
import { NavLink } from 'react-router-dom';

import {
  CircleCheck,
  Zap,
  ArrowRight,
  BatteryCharging,
  Building2,
  Camera,
  Lightbulb,
  Plug,
  Lamp,
  Home,
  Store,
  Sun,
  Smartphone,
  Search,
  Wrench,
  TreePine,
  GitGraph,
} from 'lucide-react';

import ElectricalPanel from '../../../assets/panel-framing.webp';
import EVCharger from '../../../assets/ev-charger-1.webp';
import ElectricalConstruction from '../../../assets/construction-panels.jpg';
import Subpanels from '../../../assets/subpanel-6398.webp';
import SecurityCameras from '../../../assets/security-camera-hero.webp';
import SecurityLighting from '../../../assets/security-lighting-floodlight.jpg';
import Outlets from '../../../assets/recessed-lighting.webp';
import LightFixtures from '../../../assets/lightfixture-2611.webp';
import Residential from '../../../assets/residential-work.webp';
import Commercial from '../../../assets/commercial-framing.webp';
import LightingDesign from '../../../assets/lightdesign-4023.webp';
import SmartHome from '../../../assets/smarthome-1-rotated.webp';
import Troubleshooting from '../../../assets/troubleshoot-1650.webp';
import Remodeling from '../../../assets/kitchen-rewire.webp';
import LandscapeLighting from '../../../assets/security-lighting-floodlight.jpg';

function ServicesCard() {
  const servicesCard = [
    {
      image: ElectricalPanel,
      iconTitle: <Zap />,
      subtitle: 'Panel Upgrades',
      title: 'Electrical Panel Upgrades',
      text: "Is your electrical panel outdated, overloaded, or unable to keep up with modern demands? Brentwood Electrical Experts provides professional electrical panel upgrades across West LA, Santa Monica, Brentwood, and surrounding communities. We upgrade 100-amp panels to 200-amp or higher, ensuring your home or business can safely handle today's electrical loads — from EV chargers to HVAC systems to smart home setups.",
      link: '/panel-upgrades-service',
      linkText: 'View Panel Upgrades details',
      features: [
        'Safely handle increased electrical loads',
        'Prevent circuit overloads and tripped breakers',
        'Meet current electrical code requirements',
      ],
    },
    {
      image: EVCharger,
      iconTitle: <BatteryCharging />,
      subtitle: 'EV Chargers',
      title: 'EV Charger Installation',
      text: 'Charge your electric vehicle at home with a professionally installed Level 2 EV charger. Brentwood Electrical Experts installs Tesla Wall Connectors, ChargePoint, JuiceBox, and all major EV charger brands across West LA, Santa Monica, Beverly Hills, and surrounding areas. We handle everything from panel capacity assessment to final installation.',
      link: '/ev-chargers-service',
      linkText: 'View EV Chargers details',
      features: [
        'Fast Level 2 charging at home',
        'Compatible with Tesla, BMW, Rivian, and all EVs',
        'Panel upgrade included if needed',
      ],
    },
    {
      image: ElectricalConstruction,
      iconTitle: <Building2 />,
      subtitle: 'Construction',
      title: 'Electrical Construction',
      text: 'From new construction wiring to tenant improvements and full-scale electrical buildouts, Brentwood Electrical Experts delivers comprehensive electrical construction services across West Los Angeles. We work with general contractors, property developers, and homeowners to deliver code-compliant, professionally executed electrical systems from the ground up.',
      link: '/construction-service',
      linkText: 'View Construction details',
      features: [
        'Complete electrical system design and installation',
        'Code-compliant rough-in and finish work',
        'Coordination with GCs and other trades',
      ],
    },
    {
      image: Subpanels,
      iconTitle: <GitGraph />,
      subtitle: 'Subpanels',
      title: 'Subpanel Installation',
      text: 'Need additional circuits for a garage, ADU, workshop, or home addition? Brentwood Electrical Experts installs electrical subpanels to extend your electrical system safely and efficiently. We serve homeowners and businesses across Brentwood, Santa Monica, Pacific Palisades, and all of West Los Angeles.',
      link: '/subpanels-service',
      linkText: 'View Subpanels details',
      features: [
        'Extend electrical capacity to garages, ADUs, and additions',
        'Avoid overloading your main panel',
        'Code-compliant installation with proper grounding',
      ],
    },
    {
      image: SecurityCameras,
      iconTitle: <Camera />,
      subtitle: 'Security Cameras',
      title: 'Security Camera Systems',
      text: 'Protect your home or business with professionally installed security camera systems. Brentwood Electrical Experts installs wired and wireless CCTV, IP camera systems, and smart security solutions across West LA, Brentwood, Santa Monica, Beverly Hills, and surrounding areas.',
      link: '/security-cameras-service',
      linkText: 'View Security Cameras details',
      features: [
        '24/7 property surveillance and monitoring',
        'HD and 4K camera options',
        'Remote viewing from your phone',
      ],
    },
    {
      image: SecurityLighting,
      iconTitle: <Lightbulb />,
      subtitle: 'Security Lighting',
      title: 'Security Lighting Installation',
      text: 'Illuminate and protect your property with professionally installed security lighting. Brentwood Electrical Experts designs and installs motion-sensor lights, floodlights, and landscape security lighting across Brentwood, Santa Monica, Pacific Palisades, and all of West Los Angeles.',
      link: '/security-lighting-service',
      linkText: 'View Security Lighting details',
      features: [
        'Deter intruders with motion-activated lighting',
        'Illuminate driveways, pathways, and entry points',
        'Energy-efficient LED options',
      ],
    },
    {
      image: Outlets,
      iconTitle: <Plug />,
      subtitle: 'Outlets & GFCI',
      title: 'Outlets & GFCI Installation',
      text: 'Need additional outlets, USB outlets, or GFCI protection in kitchens, bathrooms, and outdoor areas? Brentwood Electrical Experts installs and upgrades electrical outlets throughout West LA. We ensure every installation meets current NEC code requirements for safety and convenience.',
      link: '/outlets&GFCI-service',
      linkText: 'View Outlets & GFCI details',
      features: [
        'Add outlets where you need them most',
        'GFCI protection for kitchens, bathrooms, and outdoors',
        'USB outlet upgrades for modern convenience',
      ],
    },
    {
      image: LightFixtures,
      iconTitle: <Lamp />,
      subtitle: 'Light Fixtures',
      title: 'Light Fixture Installation',
      text: 'Transform your space with professionally installed light fixtures. From chandeliers and recessed lighting to pendant lights and under-cabinet LEDs, Brentwood Electrical Experts handles all light fixture installations across Brentwood, Santa Monica, Beverly Hills, and West Los Angeles.',
      link: '/light-fixtures-service',
      linkText: 'View Light Fixtures details',
      features: [
        'Expert installation of all fixture types',
        'Recessed lighting, chandeliers, pendants, and more',
        'Dimmer switch installation available',
      ],
    },
    {
      image: Residential,
      iconTitle: <Home />,
      subtitle: 'Residential',
      title: 'Residential Electrical Services',
      text: 'Brentwood Electrical Experts provides comprehensive residential electrical services for homes across West LA, Santa Monica, Brentwood, Pacific Palisades, and surrounding communities. From small repairs to full home rewiring, we handle it all with licensed, insured professionals.',
      link: '/residential-service',
      linkText: 'View Residential details',
      features: [
        'Complete home electrical services',
        'Licensed, insured, and experienced',
        'Upfront pricing with no surprises',
      ],
    },
    {
      image: Commercial,
      iconTitle: <Store />,
      subtitle: 'Commercial',
      title: 'Commercial Electrical Services',
      text: 'Brentwood Electrical Experts delivers professional commercial electrical services for offices, retail spaces, restaurants, and other businesses across West Los Angeles. We handle everything from tenant improvements to ongoing electrical maintenance and repair.',
      link: '/Commercial-service',
      linkText: 'View Commercial details',
      features: [
        'Tenant improvement electrical work',
        'Commercial lighting installation and retrofit',
        'Electrical system maintenance and repair',
      ],
    },
    {
      image: LightingDesign,
      iconTitle: <Sun />,
      subtitle: 'Lighting Design',
      title: 'Lighting Design & Installation',
      text: 'Elevate your home or business with custom lighting design and professional installation. Brentwood Electrical Experts creates layered lighting solutions that combine ambiance and function across West Los Angeles homes and businesses.',
      link: '/lighting-design-service',
      linkText: 'View Lighting Design details',
      features: [
        'Custom lighting design for any space',
        'Layered lighting for ambiance and function',
        'Energy-efficient LED solutions',
      ],
    },
    {
      image: SmartHome,
      iconTitle: <Smartphone />,
      subtitle: 'Smart Home',
      title: 'Smart Home Electrical Systems',
      text: 'Make your home smarter with professionally installed smart electrical systems. Brentwood Electrical Experts installs smart switches, outlets, voice-controlled lighting, and whole-home automation wiring across West Los Angeles.',
      link: '/smart-home-service',
      linkText: 'View Smart Home details',
      features: [
        'Smart switch and dimmer installation',
        'Voice-controlled lighting (Alexa, Google, Siri)',
        'Whole-home automation wiring',
      ],
    },
    {
      image: Troubleshooting,
      iconTitle: <Search />,
      subtitle: 'Troubleshooting',
      title: 'Electrical Troubleshooting',
      text: 'Experiencing flickering lights, tripping breakers, dead outlets, or mysterious electrical issues? Brentwood Electrical Experts provides expert diagnosis and repair for electrical problems across West Los Angeles, fixing the root cause, not just the symptoms.',
      link: '/troubleshooting-service',
      linkText: 'View Troubleshooting details',
      features: [
        'Expert diagnosis of electrical problems',
        'Fix the root cause, not just symptoms',
        'Fast response and same-day service',
      ],
    },
    {
      image: Remodeling,
      iconTitle: <Wrench />,
      subtitle: 'Remodeling',
      title: 'Electrical Remodeling',
      text: 'Planning a kitchen remodel, bathroom renovation, or home addition? Brentwood Electrical Experts handles all electrical work for remodeling projects across West Los Angeles, from rough-in wiring to final fixture installation.',
      link: '/remodeling-service',
      linkText: 'View Remodeling details',
      features: [
        'Complete remodel electrical services',
        'Kitchen, bathroom, and addition wiring',
        'Code-compliant upgrades',
      ],
    },
    {
      image: LandscapeLighting,
      iconTitle: <TreePine />,
      subtitle: 'Landscape Lighting',
      title: 'Landscape Lighting Installation',
      text: 'Transform your property after dark with professionally designed landscape lighting. Brentwood Electrical Experts designs and installs low-voltage lighting systems that improve curb appeal, safety, and nighttime ambiance across West Los Angeles.',
      link: '/landscape-lighting-service',
      linkText: 'View Landscape Lighting details',
      features: [
        'Dramatically improves curb appeal and property value',
        'Safer walkways, steps, and driveways at night',
        'Energy-efficient low-voltage LED systems',
      ],
    },
  ];

  return (
    <div className='servicescard'>
      {servicesCard.map((card, index) => (
        <NavLink className='servicescard_card' key={index} to={card.link}>
          <div className='servicescard_image'>
            <img src={card.image} alt={card.title} />
          </div>

          <div className='servicescard_content'>
            <div className='servicescard_label'>
              <div className='servicescard_icon'>{card.iconTitle}</div>
              <span>{card.subtitle}</span>
            </div>

            <h3>{card.title}</h3>
            <p className='servicescard_text'>{card.text}</p>

            <div className='servicescard_features'>
              {card.features.map((feature, i) => (
                <div className='servicescard_feature' key={i}>
                  <CircleCheck />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className='servicescard_link'>
              {card.linkText}
              <ArrowRight />
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default ServicesCard;
