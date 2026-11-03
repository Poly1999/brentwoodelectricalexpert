import '../../service-detail-page/ServiceDetailLayout.css';
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

interface SidebarProcess {
  title: string;
  steps: { title: string; subtitle: string }[];
}

interface Sidebar {
  ctaTitle: string;
  ctaText: string;
  navTitle: string;
  whyTitle: string;
  whyItems: string[];
  whyIcons: React.ReactNode[];
  areasTitle: string;
  process?: SidebarProcess;
}

interface ServicesSidebarProps {
  sidebar: Sidebar;
}

function ServicesSidebar({ sidebar }: ServicesSidebarProps) {
  return (
    <div className='servicessidebar'>
      <div className='servicessidebar_cta'>
        <h3>{sidebar.ctaTitle}</h3>
        <p>{sidebar.ctaText}</p>
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
          {sidebar.navTitle}
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
        <h4>{sidebar.whyTitle}</h4>
        {sidebar.whyItems.map((item, index) => (
          <div className='servicessidebar_why_item' key={index}>
            {sidebar.whyIcons[index]}
            <span>{item}</span>
          </div>
        ))}
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
          {sidebar.areasTitle}
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

      {sidebar.process ? (
        <div className='servicessidebar_process'>
          <h4>{sidebar.process.title}</h4>
          <ol>
            {sidebar.process.steps.map((step, index) => (
              <li key={index}>
                <span className='servicessidebar_process_number'>
                  {index + 1}
                </span>
                <span>{step.title}</span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}

export default ServicesSidebar;
