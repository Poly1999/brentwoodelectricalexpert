import { NavLink } from 'react-router-dom';
import './FAQPage.css';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../../components/Footer/Footer';

function FAQPage() {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const faqs = [
    {
      question: 'Are you licensed and insured?',
      answer: (
        <>
          Yes — Brentwood Electrical Experts is a fully licensed and insured
          electrical contractor. We carry general liability and workers'
          compensation insurance for your protection. Learn more{' '}
          <NavLink to='/about'>about us</NavLink>.
        </>
      ),
    },
    {
      question: 'What areas do you serve?',
      answer: (
        <>
          We serve <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
          <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
          <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
          <NavLink to='/bel-air'>Bel Air</NavLink>,{' '}
          <NavLink to='/beverly-hills'>Beverly Hills</NavLink>,{' '}
          <NavLink to='/west-hollywood'>West Hollywood</NavLink>,{' '}
          <NavLink to='/venice'>Venice</NavLink>,{' '}
          <NavLink to='/culver-city'>Culver City</NavLink>,{' '}
          <NavLink to='/mar-vista'>Mar Vista</NavLink>,{' '}
          <NavLink to='/westwood'>Westwood</NavLink>,{' '}
          <NavLink to='/century-city'>Century City</NavLink>,{' '}
          <NavLink to='/playa-vista'>Playa Vista</NavLink>,{' '}
          <NavLink to='/marina-del-rey'>Marina Del Rey</NavLink>,{' '}
          <NavLink to='/calabasas'>Calabasas</NavLink>,{' '}
          <NavLink to='/sherman-oaks'>Sherman Oaks</NavLink>, and many more
          communities across West Los Angeles and beyond. See all{' '}
          <NavLink to='/all-locations'>service areas</NavLink>.
        </>
      ),
    },
    {
      question: 'Do you offer free estimates?',
      answer: (
        <>
          Yes — we provide free estimates for most electrical projects. Call us
          at (310) 666-4752 or{' '}
          <NavLink to='/contact'>
            submit a request through our online form
          </NavLink>{' '}
          to get started.
        </>
      ),
    },
    {
      question: 'Do you offer emergency electrical service?',
      answer: (
        <>
          Yes — we offer emergency{' '}
          <NavLink to='/troubleshooting-service'>
            electrical troubleshooting
          </NavLink>{' '}
          service for urgent situations. Call us anytime at (310) 666-4752 and
          we'll respond as quickly as possible.
        </>
      ),
    },
    {
      question: 'How do I know if I need a panel upgrade?',
      answer: (
        <>
          Common signs include frequently tripped breakers, flickering lights,
          burning smells near the panel, an older home with a 100-amp panel, or
          if you're adding major appliances or an{' '}
          <NavLink to='/ev-chargers-service'>EV charger</NavLink>. We can assess
          your panel and provide a recommendation. Learn more about our{' '}
          <NavLink to='/panel-upgrades-service'>panel upgrade service</NavLink>.
        </>
      ),
    },
    {
      question: 'Do you handle permits and inspections?',
      answer: (
        <>
          Yes — we handle all required city permits and coordinate inspections
          as part of our service for{' '}
          <NavLink to='/panel-upgrades-service'>panel upgrades</NavLink>,{' '}
          <NavLink to='/ev-chargers-service'>EV charger installations</NavLink>,{' '}
          <NavLink to='/construction-service'>construction projects</NavLink>,
          and more.
        </>
      ),
    },
    {
      question: 'What types of EV chargers do you install?',
      answer: (
        <>
          We install all major EV charger brands including Tesla Wall Connector,
          ChargePoint, JuiceBox, Grizzl-E, Emporia, and more. We'll help you
          choose the right charger for your vehicle and driving needs. Learn
          more about our{' '}
          <NavLink to='/ev-chargers-service'>
            EV charger installation service
          </NavLink>
          .
        </>
      ),
    },
    {
      question: 'How long does a typical electrical project take?',
      answer: (
        <>
          It depends on the scope. Most{' '}
          <NavLink to='/outlets&GFCI-service'>outlet installations</NavLink> and{' '}
          <NavLink to='/light-fixtures-service'>light fixtures</NavLink> take
          1-2 hours.{' '}
          <NavLink to='/panel-upgrades-service'>Panel upgrades</NavLink> are
          typically completed in one day. Larger projects like{' '}
          <NavLink to='/construction-service'>construction</NavLink> or{' '}
          <NavLink to='/remodeling-service'>remodeling</NavLink> may take
          several days to weeks.
        </>
      ),
    },
    {
      question: 'Do you work with general contractors?',
      answer: (
        <>
          Yes — we regularly partner with general contractors on{' '}
          <NavLink to='/residential-service'>residential</NavLink> and{' '}
          <NavLink to='/Commercial-service'>commercial</NavLink> construction,{' '}
          <NavLink to='/remodeling-service'>remodeling</NavLink>, and tenant
          improvement projects throughout West LA.
        </>
      ),
    },
    {
      question: 'What is your pricing like?',
      answer: (
        <>
          We provide transparent, upfront pricing before any work begins. No
          hidden fees, no surprises. <NavLink to='/contact'>Contact us</NavLink>{' '}
          for a free estimate tailored to your specific project.
        </>
      ),
    },
    {
      question: 'Do you install smart home electrical systems?',
      answer: (
        <>
          Yes — we install{' '}
          <NavLink to='/smart-home-service'>
            smart switches, dimmers, outlets, and whole-home automation wiring
          </NavLink>
          . We work with all major platforms including Apple HomeKit, Google
          Home, Amazon Alexa, Lutron, and Control4.
        </>
      ),
    },
    {
      question: 'Can you add outlets without tearing up my walls?',
      answer: (
        <>
          In many cases, yes. Our electricians use professional techniques to
          run new wiring with minimal wall damage. Learn more about our{' '}
          <NavLink to='/outlets&GFCI-service'>
            outlet & GFCI installation service
          </NavLink>
          .
        </>
      ),
    },
  ];
  return (
    <div className='faqpage'>
      <div className='faqpage_hero'>
        <div className='container'>
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
          <p>
            Everything you need to know about our{' '}
            <NavLink to='/all-services'>electrical services</NavLink>,
            licensing, pricing, and{' '}
            <NavLink to='/all-locations'>service areas.</NavLink>
          </p>
        </div>
      </div>

      <div className='container faqpage_list_section'>
        <h3>Common Electrical Questions</h3>
        <div className='faqpage_list'>
          {faqs.map((faq, index) => (
            <div className='faqpageitem' key={index}>
              <h4
                className='faqpageitem_question'
                onClick={() => setIsOpen(index === isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                {isOpen === index ? <ChevronUp /> : <ChevronDown />}
              </h4>
              <div
                className={`faqpageitem_answer_wrapper ${
                  isOpen === index ? 'faqpageitem_answer_open' : ''
                }`}
              >
                <div className='faqpageitem_answer'>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQPage;
