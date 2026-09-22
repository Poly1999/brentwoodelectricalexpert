import '../../../components/blog-details-page/BlogContentSection.css';
import BlogHero from '../../../components/blog-details-page/BlogHero/BlogHero';
import Footer from '../../../components/Footer/Footer';
import BlogCTA from '../../../components/blog-details-page/BlogCTA/BlogCTA';
import BlogIntro from '../../../components/blog-details-page/BlogIntro/BlogIntro';

import {
  AlertTriangle,
  Zap,
  DollarSign,
  ShieldCheck,
  FileText,
} from 'lucide-react';

import OutdatedPanelImage from '../../../assets/panel-old.jpeg';
import DustContainmentImage from '../../../assets/dust-containment.jpeg';
import SiemensPanelImage from '../../../assets/panel-siemens.jpeg';

function DustFreeUpgradeBlog() {
  const hero = {
    category: 'Panel Upgrades',
    title:
      'Upgrading Your Electrical Panel: The Dust-Free, Legal Way to Protect Your Home',
    date: 'July 17, 2026',
  };

  const intro = [
    {
      paragraph:
        'If your home was built or updated between the 1950s and 1980s, there is a hidden danger that might be lurking inside your walls: an outdated electrical panel.',
    },
    {
      paragraph:
        'At Brentwood Electrical Experts, we specialize in identifying and replacing obsolete systems—specifically hazardous Zinsco and Federal Pacific (FPE) panels—with modern, high-capacity Siemens load centers. We provide homeowners across Los Angeles and Santa Monica with a premium, seamless upgrade experience that prioritizes safety, cleanliness, and transparency.',
    },
  ];

  const cta = {
    title: 'Ready to Secure Your Home?',
    subtitle:
      "Don't wait for a breaker to fail before taking action. Upgrade your home's electrical infrastructure with the cleanest, most reliable contractors in Los Angeles.",
  };

  return (
    <div>
      <BlogHero hero={hero} />
      <BlogIntro intro={intro} />

      <div className='blogimage'>
        <div className='blogimage_inner'>
          <img src={OutdatedPanelImage} alt='Outdated electrical panel' />
          <p className='blogimage_caption'>
            Outdated panels like this one are common in homes built between the
            1950s and 1980s.
          </p>
        </div>
      </div>

      <div className='blogcontent'>
        <div className='blogcontent_inner'>
          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <AlertTriangle />
            </div>
            <div className='blogcontent_text'>
              <h2>The Hidden Danger: Zinsco & Federal Pacific Panels</h2>
              <p>
                Electrical panels are designed to be your home's ultimate safety
                net. When a circuit overloads, the breaker is supposed to "trip"
                and immediately cut the power before the wires overheat and
                cause a fire. Unfortunately, two prominent brands installed in
                thousands of Southern California homes have been proven to fail
                at this critical job.
              </p>

              <ul>
                <li>
                  <strong>Zinsco Panels:</strong> Zinsco panels suffer from a
                  critical design flaw where the breakers can literally melt and
                  fuse to the aluminum bus bar. When this happens, the breaker
                  cannot trip, allowing power to continuously flow through an
                  overloaded circuit. Even more dangerous, a Zinsco breaker can
                  appear to be in the "off" position while still carrying live
                  electrical current.
                </li>
                <li>
                  <strong>
                    Federal Pacific Electric (FPE) Stab-Lok Panels:
                  </strong>{' '}
                  FPE panels are widely considered a severe fire risk by
                  industry experts and insurance companies. Independent testing
                  has shown that FPE Stab-Lok breakers fail to trip during
                  overloads or short circuits at an alarming rate. Additionally,
                  the connection points inside the panel are prone to loosening
                  over time, leading to electrical arcing and heat buildup.
                </li>
              </ul>
              <p>
                If you open your panel and see the names "Zinsco," "Sylvania,"
                "Federal Pacific," or the "Stab-Lok" label, do not touch the
                breakers. Contact a licensed professional immediately for an
                assessment.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_text'>
              <h2>The Brentwood Electrical Experts Difference</h2>
              <p>
                Replacing an electrical panel is a major structural upgrade, but
                it shouldn't leave your home looking like a construction zone.
                We do things differently.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <ShieldCheck />
            </div>
            <div className='blogcontent_text'>
              <h2>1. 100% Dust-Free Installation</h2>
              <p>
                We respect your home. Before we remove a single screw, our team
                sets up heavy-duty, floor-to-ceiling plastic containment
                barriers around the entire work area. This meticulous
                preparation ensures that drywall dust, debris, and insulation
                stay completely isolated. When we leave, your home is exactly as
                clean as when we arrived.
              </p>
            </div>
          </div>

          <div className='blogimage'>
            <div className='blogimage_inner'>
              <img
                src={DustContainmentImage}
                alt='Dust containment setup during panel installation'
              />
              <p className='blogimage_caption'>
                Our dust containment setup keeps drywall dust and debris
                completely isolated from your home.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Zap />
            </div>
            <div className='blogcontent_text'>
              <h2>2. Premium Equipment</h2>
              <p>
                We replace hazardous, outdated systems with top-of-the-line
                Siemens electrical panels. Siemens load centers are engineered
                for maximum reliability, providing clean, consistent power
                distribution and immediate protection against modern electrical
                demands.
              </p>
            </div>
          </div>

          <div className='blogimage'>
            <div className='blogimage_inner'>
              <img
                src={SiemensPanelImage}
                alt='Newly installed Siemens load center'
              />
              <p className='blogimage_caption'>
                A newly installed Siemens load center — clean, organized, and
                clearly labeled.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <FileText />
            </div>
            <div className='blogcontent_text'>
              <h2>3. Fully Permitted, Legal, and Inspected</h2>
              <p>
                Safety cannot be shortcut. We handle the entire permitting
                process from start to finish. Every panel upgrade we perform
                strictly adheres to current National Electrical Code (NEC)
                standards and is fully inspected by the city. Whether you are in
                Santa Monica, Bel Air, or anywhere in the greater Los Angeles
                area, you get the peace of mind that your home is 100%
                compliant.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <DollarSign />
            </div>
            <div className='blogcontent_text'>
              <h2>4. Flat, Clear Pricing</h2>
              <p>
                Nobody likes hidden fees. We believe in total transparency. When
                we provide an estimate for a panel upgrade, you get a clear,
                flat-rate price that covers materials, professional
                installation, and permit processing. The price you see is the
                price you pay.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BlogCTA cta={cta} />
      <Footer />
    </div>
  );
}

export default DustFreeUpgradeBlog;
