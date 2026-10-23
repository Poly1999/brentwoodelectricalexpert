import './Footer.css';
import { Phone, FileText } from 'lucide-react';
import FooterMain from './FooterMain/FooterMain';
import { NavLink } from 'react-router-dom';

interface FooterProps {
  ctaTitle?: string;
  ctaText?: string;
}

function Footer({
  ctaTitle = 'Ready to Get Started?',
  ctaText = 'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
}: FooterProps) {
  return (
    <footer className='footer'>
      <div className='footer_cta'>
        <div className='container footer_cta_inner'>
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>

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
