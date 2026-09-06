import './Footer.css';
import { Phone, Mail, MapPin, FileText, ArrowRight } from 'lucide-react';
import Logo from '../../assets/logo.svg';

const services = [
  'Panel Upgrades',
  'EV Chargers',
  'Construction',
  'Subpanels',
  'Security Cameras',
  'Security Lighting',
  'Outlets & GFCI',
  'Light Fixtures',
];

const areas = [
  'Brentwood',
  'Santa Monica',
  'Pacific Palisades',
  'Bel Air',
  'Beverly Hills',
  'Beverly Crest',
  'Beverly Glen',
  'Beverly Grove',
  'Beverlywood',
  'Mar Vista',
  'West Hollywood',
  'West Los Angeles',
];

const quickLinks = [
  'About Us',
  'Projects',
  'Reviews',
  'FAQ',
  'Contact Us',
  'Blog',
  'Privacy Policy',
  'Terms of Service',
];

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_cta'>
        <div className='container footer_cta_inner'>
          <h2>Ready to Get Started?</h2>
          <p>
            Call now for a free estimate or schedule your service online.
            Licensed, insured, and ready to help.
          </p>

          <div className='footer_cta_buttons'>
            <a href='tel:+13106664752' className='footer_cta_call'>
              <Phone />
              Call (310) 666-4752
            </a>
            <a href='/contact' className='footer_cta_quote'>
              <FileText />
              Get FREE Quote
            </a>
          </div>
        </div>
      </div>

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
              Santa Monica, Brentwood, and surrounding communities since day
              one.
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
                  <a href='/services'>{service}</a>
                </li>
              ))}
            </ul>
            <a href='/services' className='footer_viewall'>
              View All Services
              <ArrowRight />
            </a>
          </div>

          <div className='footer_col'>
            <h3>Service Areas</h3>
            <ul>
              {areas.map((area, index) => (
                <li key={index}>
                  <a href='/locations'>{area}</a>
                </li>
              ))}
            </ul>
            <a href='/locations' className='footer_viewall'>
              + 16 more areas
              <ArrowRight />
            </a>
          </div>

          <div className='footer_col'>
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href='/'>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='footer_bottom'>
          <div className='container footer_bottom_inner'>
            <span>
              © 2026 Brentwood Electrical Experts. All rights reserved.
            </span>
            <span>
              Licensed Electrical Contractor • Serving West Los Angeles
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
