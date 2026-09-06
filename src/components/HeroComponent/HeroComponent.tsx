import './HeroComponent.css';
import MainImage from '../../assets/hero-vehicles.webp';
import {
  CheckCircle,
  Clock,
  FileText,
  Phone,
  Shield,
  Star,
} from 'lucide-react';

function HeroComponent() {
  return (
    <div className='hero'>
      <img src={MainImage} alt='Hero Main Image' className='hero_image' />
      <div className='hero_overlay'></div>
      <div className='hero_fade'></div>
      <div className='container hero_container'>
        <div className='hero_box'>
          <div className='hero_toptext'>
            <Shield />
            <p>Licensed & Insured Electrical Contractor</p>
          </div>
          <h1 className='hero_title'>
            West LA's Trusted <span>Electrical Experts</span>
          </h1>
          <p className='hero_maintext'>
            Panel upgrades, EV charger installation, lighting design, and
            complete electrical services for homes and businesses across
            Brentwood, Santa Monica, Beverly Hills, and beyond.
          </p>
          <div className='herobox_button'>
            <a href='tel:+13106664752' className='hero_button'>
              <Phone className='herobox_button_icon' />
              Call (310) 666-4752
            </a>

            <button className='hero_button_secondary'>
              <FileText className='herobox_button_icon' />
              Get FREE Quote
            </button>
          </div>
          <div className='herobox_bottom'>
            <div className='herobox_ourtop'>
              <Star size={18} fill='#C7973D' color='#C7973D' />
              <p>5.0 Google Rating</p>
            </div>
            <div className='herobox_ourtop'>
              <CheckCircle size={18} color='#C7973D' />
              <p>Upfront Pricing</p>
            </div>
            <div className='herobox_ourtop'>
              <Clock size={18} color='#C7973D' />
              <p>Same-Day Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
