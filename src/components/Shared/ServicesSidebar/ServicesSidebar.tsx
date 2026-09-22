import './ServicesSidebar.css';
import { NavLink } from 'react-router-dom';
import {
  Phone,
  FileText,
  Zap,
  BatteryCharging,
  Building2,
  PanelsTopLeft,
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
  Star,
  Shield,
  Clock,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

const quickNavItems = [
  { icon: <Zap />, title: 'Panel Upgrades', link: '/panel-upgrades-service' },
  {
    icon: <BatteryCharging />,
    title: 'EV Chargers',
    link: '/ev-chargers-service',
  },
  { icon: <Building2 />, title: 'Construction', link: '/construction-service' },
  { icon: <PanelsTopLeft />, title: 'Subpanels', link: '/subpanels-service' },
  {
    icon: <Camera />,
    title: 'Security Cameras',
    link: '/security-cameras-service',
  },
  {
    icon: <Lightbulb />,
    title: 'Security Lighting',
    link: '/security-lighting-service',
  },
  { icon: <Plug />, title: 'Outlets & GFCI', link: '/outlets&GFCI-service' },
  { icon: <Lamp />, title: 'Light Fixtures', link: '/light-fixtures-service' },
  { icon: <Home />, title: 'Residential', link: '/residential-service' },
  { icon: <Store />, title: 'Commercial', link: '/Commercial-service' },
  { icon: <Sun />, title: 'Lighting Design', link: '/lighting-design-service' },
  { icon: <Smartphone />, title: 'Smart Home', link: '/smart-home-service' },
  {
    icon: <Search />,
    title: 'Troubleshooting',
    link: '/troubleshooting-service',
  },
  { icon: <Wrench />, title: 'Remodeling', link: '/remodeling-service' },
  {
    icon: <TreePine />,
    title: 'Landscape Lighting',
    link: '/landscape-lighting-service',
  },
];

const serviceAreas = [
  'Brentwood',
  'Santa Monica',
  'Beverly Hills',
  'Pacific Palisades',
  'Bel Air',
  'West Hollywood',
  'Venice',
  'Culver City',
  'Westwood',
  'Mar Vista',
];

function ServicesSidebar() {
  return (
    <div className='servicessidebar'>
      <div className='servicessidebar_cta'>
        <h3>Need an Electrician?</h3>
        <p>
          Call now for a free estimate or schedule service online. Same-day
          appointments available.
        </p>
        <a href='tel:+13106664752' className='servicessidebar_call'>
          <Phone />
          (310) 666-4752
        </a>
        <NavLink to='/contact' className='servicessidebar_quote'>
          <FileText />
          Get FREE Quote
        </NavLink>
      </div>

      <div className='servicessidebar_nav'>
        <h4>
          <Zap className='servicessidebar_nav_headicon' />
          Quick Navigation
        </h4>
        <ul>
          {quickNavItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link} className='servicessidebar_navlink'>
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className='servicessidebar_why'>
        <h4>
          <Shield className='servicessidebar_why_headicon' />
          Why Choose Us
        </h4>
        <div className='servicessidebar_why_item'>
          <Star />
          <span>5.0 Google Rating — 100+ reviews</span>
        </div>
        <div className='servicessidebar_why_item'>
          <Shield />
          <span>Fully licensed & insured</span>
        </div>
        <div className='servicessidebar_why_item'>
          <Clock />
          <span>Same-day & 24/7 emergency service</span>
        </div>
        <div className='servicessidebar_why_item'>
          <CheckCircle2 />
          <span>Upfront pricing, no hidden fees</span>
        </div>
        <div className='servicessidebar_why_item'>
          <MapPin />
          <span>Serving all of West Los Angeles</span>
        </div>
      </div>

      <div className='servicessidebar_review'>
        <div className='servicessidebar_stars'>
          <Star fill='#C7973D' color='#C7973D' />
          <Star fill='#C7973D' color='#C7973D' />
          <Star fill='#C7973D' color='#C7973D' />
          <Star fill='#C7973D' color='#C7973D' />
          <Star fill='#C7973D' color='#C7973D' />
        </div>
        <p>
          "Brentwood Electrical Experts upgraded our panel from 100 to 200 amps
          and installed an EV charger — all in one day. Professional, clean, and
          on time. H..."
        </p>
        <span className='servicessidebar_review_author'>— Michael R.</span>
        <NavLink to='/reviews' className='servicessidebar_review_link'>
          Read All Reviews →
        </NavLink>
      </div>

      <div className='servicessidebar_areas'>
        <h4>
          <MapPin className='servicessidebar_areas_headicon' />
          Service Areas
        </h4>
        <div className='servicessidebar_areas_list'>
          {serviceAreas.map((area, index) => (
            <NavLink
              key={index}
              to={`/${area.toLowerCase().replace(/\s+/g, '-')}`}
              className='servicessidebar_area_tag'
            >
              {area}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSidebar;
