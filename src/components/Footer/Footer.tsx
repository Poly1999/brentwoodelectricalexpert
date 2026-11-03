import './Footer.css';
import { Phone, FileText } from 'lucide-react';
import FooterMain from './FooterMain/FooterMain';
import { NavLink } from 'react-router-dom';

interface Footer {
  title: string;
  subtitle: string;
}

interface FooterProps {
  footer: Footer;
}

function Footer({ footer }: FooterProps) {
  return (
    <footer className='footer'>
      <div className='footer_cta'>
        <div className='container footer_cta_inner'>
          <h2>{footer.title}</h2>
          <p>{footer.subtitle}</p>

          <div className='footer_cta_buttons'>
            <a href='tel:+13106664752' className='footer_cta_call'>
              <Phone />
              Call (310) 666-4752
            </a>
            <NavLink to='/contact' className='footer_cta_quote'>
              <FileText />
              Get FREE Quote
            </NavLink>
          </div>
        </div>
      </div>
      <FooterMain />
    </footer>
  );
}

export default Footer;
