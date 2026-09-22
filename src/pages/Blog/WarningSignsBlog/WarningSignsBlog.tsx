import '../../../components/blog-details-page/BlogContentSection.css';
import BlogHero from '../../../components/blog-details-page/BlogHero/BlogHero';
import Footer from '../../../components/Footer/Footer';
import BlogCTA from '../../../components/blog-details-page/BlogCTA/BlogCTA';
import BlogIntro from '../../../components/blog-details-page/BlogIntro/BlogIntro';

import {
  Zap,
  Flame,
  Plug,
  Volume2,
  TriangleAlert,
  Calendar,
  CircleCheckBig,
} from 'lucide-react';

function WarningSignsBlog() {
  const hero = {
    category: 'Safety',
    title:
      "7 Warning Signs Your Home's Electrical System Needs Immediate Attention",
    date: 'April 22, 2026',
  };

  const intro = [
    {
      paragraph:
        'When it comes to your home, electrical issues are one of the most overlooked — and potentially dangerous — problems homeowners face. Many electrical problems start small but can quickly turn into serious safety hazards if ignored.',
    },
    {
      paragraph: (
        <>
          At <strong>Brentwood Electrical Experts</strong> , we've seen
          firsthand how minor warning signs can lead to major repairs, outages,
          or even fire risks. If you notice any of the signs below, it may be
          time to have your system inspected by a licensed electrician.
        </>
      ),
    },
  ];

  const cta = {
    title: 'Schedule Your Electrical Inspection Today',
    subtitle:
      "Don't wait for a small issue to turn into a major problem. Brentwood Electrical Experts offers comprehensive electrical inspections for homes across West Los Angeles and surrounding areas.",
  };

  return (
    <div>
      <BlogHero hero={hero} />
      <BlogIntro intro={intro} />
      <div className='blogcontent'>
        <div className='blogcontent_inner'>
          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Zap />
            </div>
            <div className='blogcontent_text'>
              <h2>1. Flickering or Dimming Lights</h2>
              <p>
                If your lights flicker when you turn on appliances or dim
                unexpectedly, this is often a sign your electrical system is
                struggling to handle the load.
              </p>
              <p>This can indicate:</p>
              <ul>
                <li>Outdated wiring</li>
                <li>Overloaded circuits</li>
                <li>Issues with your electrical panel</li>
              </ul>
              <p>
                Frequent flickering is one of the most common early warning
                signs of electrical problems and should never be ignored.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <TriangleAlert />
            </div>
            <div className='blogcontent_text'>
              <h2>2. Circuit Breakers That Keep Tripping</h2>
              <p>
                Your circuit breaker is designed to protect your home — not
                inconvenience you. If your breaker trips frequently, it's
                usually because:
              </p>
              <ul>
                <li>Too much power is being drawn on one circuit</li>
                <li>There's a wiring issue</li>
                <li>Your panel may need upgrading</li>
              </ul>
              <p>
                Repeated tripping is your system telling you something is wrong.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Flame />
            </div>
            <div className='blogcontent_text'>
              <h2>3. Warm or Discolored Outlets</h2>
              <p>
                Outlets should never feel warm to the touch. If you notice heat,
                burn marks, or a burning smell, this may indicate faulty wiring
                or electrical arcing — a major fire risk.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Plug />
            </div>
            <div className='blogcontent_text'>
              <h2>4. Overuse of Extension Cords</h2>
              <p>
                Extension cords are meant to be temporary. Heavy reliance on
                them often signals your home doesn't have enough circuits to
                safely support demand.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Calendar />
            </div>
            <div className='blogcontent_text'>
              <h2>5. Outdated Electrical Panels</h2>
              <p>
                Older panels were not designed for today's energy usage,
                including HVAC systems, EV chargers, and modern appliances. If
                your home still has a panel from the 1970s or 1980s, it's likely
                time for an upgrade.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Volume2 />
            </div>
            <div className='blogcontent_text'>
              <h2>6. Buzzing Sounds or Burning Smells</h2>
              <p>
                Electricity should be silent. Any buzzing, crackling, or burning
                smell is a sign of a serious issue that requires immediate
                attention from a licensed electrician.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_icon'>
              <Plug />
            </div>
            <div className='blogcontent_text'>
              <h2>7. Outlets Not Working or Constant Resetting</h2>
              <p>
                Frequent GFCI trips or non-working outlets can indicate deeper
                electrical system issues that need professional diagnosis.
              </p>
            </div>
          </div>

          <div className='blogwarning'>
            <div className='blogwarning_icon'>
              <TriangleAlert />
            </div>
            <div className='blogwarning_text'>
              <h2>Why You Should Never Ignore Electrical Warning Signs</h2>
              <p>
                Electrical issues worsen over time and can lead to fires, shock
                hazards, and costly repairs if left unaddressed. What starts as
                a minor inconvenience can quickly escalate into a dangerous
                situation for your family and property.
              </p>
            </div>
          </div>

          <div className='blogcontent_section'>
            <div className='blogcontent_text'>
              <h2>When to Call a Licensed Electrician</h2>
              <p>
                If you're experiencing any of these issues, it's best to have
                your system inspected by a professional. A licensed electrician
                can identify the root cause and recommend safe, code-compliant
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BlogCTA cta={cta} showFooter={false} />
      <div className='blogprotip'>
        <div className='blogprotip_inner'>
          <div className='blogprotip_header'>
            <div className='blogprotip_icon'>
              <CircleCheckBig />
            </div>
            <span className='blogprotip_label'>Pro Tip</span>
          </div>
          <p className='blogprotip_description'>
            Routine electrical inspections every few years can help prevent
            issues before they start — saving you money and keeping your family
            safe.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WarningSignsBlog;
