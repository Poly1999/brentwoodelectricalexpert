import '../../../components/blog-details-page/BlogContentSection.css';
import BlogHero from '../../../components/blog-details-page/BlogHero/BlogHero';
import Footer from '../../../components/Footer/Footer';
import BlogCTA from '../../../components/blog-details-page/BlogCTA/BlogCTA';
import BlogIntro from '../../../components/blog-details-page/BlogIntro/BlogIntro';

import {
  Eye,
  Home,
  Flame,
  Wrench,
  Lightbulb,
  CircleCheckBig,
} from 'lucide-react';

function ModernHomesBlog() {
  const hero = {
    category: 'Safety',
    title: 'Why Modern Homes Need Electrical Safety Inspections More Than Ever',
    date: 'June 8, 2026',
  };

  const intro = [
    {
      paragraph:
        "Today's homes rely on electricity for almost everything. From smart devices and entertainment systems to appliances, HVAC equipment, and home offices, electrical systems are working harder than ever before. While modern technology offers convenience, it also increases the demand placed on a home's wiring and electrical components.",
    },
    {
      paragraph: (
        <>
          At <strong>Brentwood Electrical Experts</strong> , electrical safety
          inspections help homeowners identify hidden issues, improve
          efficiency, and reduce the risk of electrical hazards before they
          become serious problems.
        </>
      ),
    },
  ];

  const cta = {
    title: 'Schedule Your Electrical Safety Inspection',
    subtitle:
      'Protect your home and family with a comprehensive electrical safety inspection from Brentwood Electrical Experts. Our licensed electricians serve West Los Angeles and surrounding areas with thorough inspections and honest recommendations.',
  };

  return (
    <div>
      <BlogHero hero={hero} />
      <BlogIntro intro={intro} />
      <div className='blogcontent'>
        <div className='blogcontent_inner'>
          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Eye />
            </div>
            <div className='blogcontent_text'>
              <h2>Hidden Electrical Problems Often Go Unnoticed</h2>
              <p>
                Many electrical issues develop slowly over time without obvious
                warning signs. Homeowners may not realize there is a problem
                until they experience flickering lights, tripped breakers,
                burning smells, or sudden power loss.
              </p>
              <p>Some common hidden electrical concerns include:</p>
              <ul>
                <li>Outdated wiring</li>
                <li>Overloaded circuits</li>
                <li>Loose electrical connections</li>
                <li>Improper grounding</li>
                <li>Damaged outlets or switches</li>
                <li>Aging breaker panels</li>
                <li>Unsafe DIY electrical work</li>
              </ul>
              <p>
                Without professional inspections, these issues can remain hidden
                behind walls and ceilings while continuing to pose potential
                safety risks.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Home />
            </div>
            <div className='blogcontent_text'>
              <h2>Why Older Homes Need Extra Attention</h2>
              <p>
                Older homes were not originally designed to handle today's
                electrical demands. As more electronics and appliances are added
                over the years, older systems can become overloaded.
              </p>
              <p>
                Electrical inspections are especially important for homes with:
              </p>
              <ul>
                <li>Older breaker panels</li>
                <li>Aluminum wiring</li>
                <li>Limited outlet capacity</li>
                <li>Frequent breaker trips</li>
                <li>Extension cord overuse</li>
                <li>Recent remodeling work</li>
              </ul>
              <p>
                Upgrading outdated electrical systems can improve both safety
                and overall home performance while helping homeowners avoid
                future repair costs.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Flame />
            </div>
            <div className='blogcontent_text'>
              <h2>Protecting Your Home from Electrical Fires</h2>
              <p>
                Electrical malfunctions are one of the leading causes of
                residential fires. Faulty wiring, overloaded circuits, and
                damaged electrical components can create heat buildup that may
                eventually lead to dangerous situations.
              </p>
              <p>Routine inspections help identify:</p>
              <ul>
                <li>Worn or frayed wiring</li>
                <li>Unsafe electrical connections</li>
                <li>Overheating components</li>
                <li>Improper installations</li>
                <li>Code violations</li>
              </ul>
              <p>
                Addressing these problems early helps reduce fire risks and
                provides greater peace of mind for homeowners and families.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Lightbulb />
            </div>
            <div className='blogcontent_text'>
              <h2>Energy Efficiency Starts with Your Electrical System</h2>
              <p>
                An efficient electrical system does more than power a home
                safely — it can also help reduce energy waste. Modern electrical
                upgrades and properly functioning systems may improve energy
                performance throughout the property.
              </p>
              <p>Electrical professionals can help homeowners evaluate:</p>
              <ul>
                <li>Lighting efficiency</li>
                <li>Electrical load balance</li>
                <li>Smart home compatibility</li>
                <li>Surge protection options</li>
                <li>Energy-saving upgrades</li>
              </ul>
              <p>
                Improving efficiency can contribute to lower utility costs while
                supporting the long-term reliability of the home's electrical
                infrastructure.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Wrench />
            </div>
            <div className='blogcontent_text'>
              <h2>The Importance of Professional Electrical Service</h2>
              <p>
                Electrical work should always be handled by trained
                professionals with the knowledge and experience to complete
                projects safely and correctly. Proper installation and
                inspection procedures help ensure electrical systems meet safety
                standards and function reliably.
              </p>
              <p>
                Brentwood Electrical Experts provides professional electrical
                solutions focused on safety, reliability, and quality
                workmanship. Whether handling inspections, repairs, upgrades,
                lighting installations, or panel replacements, the goal is to
                help homeowners maintain safe and dependable electrical systems.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <CircleCheckBig />
            </div>
            <div className='blogcontent_text'>
              <h2>Investing in Long-Term Home Safety</h2>
              <p>
                Electrical safety inspections are one of the smartest
                preventative investments homeowners can make. Catching small
                issues early often helps prevent larger repairs, unexpected
                outages, and costly emergencies later.
              </p>
              <p>
                As homes continue to rely more heavily on technology and
                electrical systems, regular inspections become even more
                important for protecting both property and the people inside it.
              </p>
              <p>
                With professional care and attention to detail,{' '}
                <strong>Brentwood Electrical Experts</strong> helps homeowners
                keep their electrical systems safe, efficient, and prepared for
                the future.
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

export default ModernHomesBlog;
