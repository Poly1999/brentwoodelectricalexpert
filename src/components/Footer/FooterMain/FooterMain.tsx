import './FooterMain.css';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Logo from '../../../assets/logo.svg';

function FooterMain() {
  const services = [
    { name: 'Panel Upgrades', slug: 'panel-upgrades-service' },
    { name: 'EV Chargers', slug: 'ev-chargers-service' },
    { name: 'Construction', slug: 'construction-service' },
    { name: 'Subpanels', slug: 'subpanels-service' },
    { name: 'Security Cameras', slug: 'security-cameras-service' },
    { name: 'Security Lighting', slug: 'security-lighting-service' },
    { name: 'Outlets & GFCI', slug: 'outlets&GFCI-service' },
    { name: 'Light Fixtures', slug: 'light-fixtures-service' },
  ];

  const areas = [
    { name: 'Brentwood', slug: 'brentwood' },
    { name: 'Santa Monica', slug: 'santa-monica' },
    { name: 'Pacific Palisades', slug: 'pacific-palisades' },
    { name: 'Bel Air', slug: 'bel-air' },
    { name: 'Beverly Hills', slug: 'beverly-hills' },
    { name: 'Beverly Crest', slug: 'beverly-crest' },
    { name: 'Beverly Glen', slug: 'beverly-glen' },
    { name: 'Beverly Grove', slug: 'beverly-grove' },
    { name: 'Beverlywood', slug: 'beverlywood' },
    { name: 'Mar Vista', slug: 'mar-vista' },
    { name: 'West Hollywood', slug: 'west-hollywood' },
    { name: 'West Los Angeles', slug: 'west-los-angeles' },
  ];

  const quickLinks = [
    { name: 'About Us', slug: 'about' },
    { name: 'Projects', slug: 'projects' },
    { name: 'Reviews', slug: 'reviews' },
    { name: 'FAQ', slug: 'faq' },
    { name: 'Contact Us', slug: 'contact' },
    { name: 'Blog', slug: 'blog' },
    { name: 'Privacy Policy', slug: 'privacy-policy' },
    { name: 'Terms of Service', slug: 'terms-of-service' },
  ];
  return (
    <div className='footer_main'>
      <div className='container footer_grid'>
        <div className='footer_col footer_col_brand'>
          <img
            src={Logo}
            alt='Brentwood Electrical Experts'
            className='footer_logo'
          />
          <p>
            Licensed & insured electrical contractor serving West Los Angeles,
            Santa Monica, Brentwood, and surrounding communities since day one.
          </p>
          <div className='footer_contact'>
            <a href='tel:+13106664752'>
              <Phone />
              (310) 666-4752
            </a>
            <a href='mailto:info@brentwoodelectricalexpert.com'>
              <Mail />
              info@brentwoodelectricalexpert.com
            </a>
            <span>
              <MapPin />
              Serving West LA & Surrounding Areas
            </span>
          </div>
        </div>

        <div className='footer_col'>
          <h3>Our Services</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <a href={`/${service.slug}`}>{service.name}</a>
              </li>
            ))}
          </ul>
          <a href='/all-services' className='footer_viewall'>
            View All Services
            <ArrowRight />
          </a>
        </div>

        <div className='footer_col'>
          <h3>Service Areas</h3>
          <ul>
            {areas.map((area, index) => (
              <li key={index}>
                <a href={`/${area.slug}`}>{area.name}</a>
              </li>
            ))}
          </ul>
          <a href='/all-locations' className='footer_viewall'>
            + 16 more areas
            <ArrowRight />
          </a>
        </div>

        <div className='footer_col'>
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={`/${link.slug}`}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='footer_bottom'>
        <div className='container footer_bottom_inner'>
          <span>© 2026 Brentwood Electrical Experts. All rights reserved.</span>
          <span>Licensed Electrical Contractor • Serving West Los Angeles</span>
        </div>
      </div>
    </div>
  );
}

export default FooterMain;
