import { NavLink } from 'react-router-dom';
import './BlogCTA.css';
import { Phone, FileText } from 'lucide-react';

interface BlogCTA {
  title: string;
  subtitle: string;
}

interface BlogCTAProps {
  cta: BlogCTA;
}

function BlogCTA({ cta }: BlogCTAProps) {
  return (
    <div className='blogcta'>
      <div className='container blogcta_inner'>
        <div className='blogcta_box'>
          <h3>{cta.title}</h3>
          <p>{cta.subtitle}</p>
          <div className='blogcta_buttons'>
            <a href='tel:+13106664752' className='blogcta_button'>
              <Phone />
              Call for a Free Estimate
            </a>
            <NavLink to='/contact' className='blogcta_button_secondary'>
              <FileText />
              Request a Quote Online
            </NavLink>
          </div>
        </div>
        <div className='blogcta_footer'>
          <p className='blogcta_footer_name'>Brentwood Electrical Experts</p>
          <p className='blogcta_footer_license'>C-10 license #1102731</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCTA;
