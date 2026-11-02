import { NavLink } from 'react-router-dom';
import './FAQPage.css';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Shield, Star } from 'lucide-react';
import Footer from '../../components/Footer/Footer';
import TrustBadges from '../../components/Shared/TrustBadges/TrustBadges';

function FAQPage() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const badges = {
    items: [
      '5.0-Star Rated C-10 Contractor',
      'Licensed & Insured (#1102731)',
      '24/7 Emergency Support',
    ],
    icons: [<Star />, <Shield />, <Clock />],
  };

  const faqs = [
    {
      question: 'Are you licensed and insured?',
      text: "Yes. We operate as a fully licensed California electrical contractor (C-10 License #1102731). We carry comprehensive liability insurance and full workers' compensation coverage to protect both our technicians and your property on every job.",
      answer: (
        <>
          Yes. We operate as a fully licensed California electrical contractor
          (C-10 License #1102731). We carry comprehensive liability insurance
          and full workers' compensation coverage to protect both our
          technicians and your property on every job. Learn more{' '}
          <NavLink to='/about'>about us</NavLink>.
        </>
      ),
    },
    {
      question: 'What areas do you serve?',
      text: 'We provide fast, reliable electrical services across the entire West Los Angeles region and surrounding Southern California communities—including Santa Monica, Brentwood, Beverly Hills, Pacific Palisades, Westwood, West Hollywood, Culver City, Malibu, Venice, Manhattan Beach, Pasadena, and beyond.',
      answer: (
        <>
          We provide fast, reliable electrical services across the entire West
          Los Angeles region and surrounding Southern California
          communities—including{' '}
          <NavLink to='/santa-monica'>Santa Monica</NavLink>,{' '}
          <NavLink to='/brentwood'>Brentwood</NavLink>,{' '}
          <NavLink to='/beverly-hills'>Beverly Hills</NavLink>,{' '}
          <NavLink to='/pacific-palisades'>Pacific Palisades</NavLink>,{' '}
          <NavLink to='/westwood'>Westwood</NavLink>,{' '}
          <NavLink to='/west-hollywood'>West Hollywood</NavLink>,{' '}
          <NavLink to='/culver-city'>Culver City</NavLink>, Malibu,{' '}
          <NavLink to='/venice'>Venice</NavLink>,{' '}
          <NavLink to='/manhattan-beach'>Manhattan Beach</NavLink>,{' '}
          <NavLink to='/pasadena'>Pasadena</NavLink>, and beyond. See all{' '}
          <NavLink to='/all-locations'>service areas</NavLink>.
        </>
      ),
    },
    {
      question: 'Do you offer free estimates?',
      text: 'Yes! We believe in 100% transparent communication and upfront pricing. We provide free, no-obligation estimates for standard electrical installations, panel upgrades, and project remodels so you always know costs before work begins.',
    },
    {
      question: 'Do you offer emergency electrical service?',
      text: 'Yes. Electrical emergencies can happen at any time. We provide prompt dispatch and 24/7 emergency electrical response for hazardous situations such as sparking panels, smoking outlets, sudden power outages, or storm damage.',
    },
    {
      question: 'How do I know if I need a panel upgrade?',
      text: 'Common warning signs include circuit breakers that trip frequently, flickering or dimming lights when appliances turn on, a warm or buzzing electrical panel, appliances running on extension cords, or owning an older home (built before 1980) still operating on a 100-amp service or legacy fuse box. Upgrading to a modern 200-amp panel ensures safe power delivery for modern demands and EV chargers.',
      answer: (
        <>
          Common warning signs include circuit breakers that trip frequently,
          flickering or dimming lights when appliances turn on, a warm or
          buzzing electrical panel, appliances running on extension cords, or
          owning an older home (built before 1980) still operating on a 100-amp
          service or legacy fuse box. Upgrading to a modern 200-amp panel
          ensures safe power delivery for modern demands and EV chargers. Learn
          more about our{' '}
          <NavLink to='/panel-upgrades-service'>panel upgrade service</NavLink>.
        </>
      ),
    },
    {
      question: 'Do you handle permits and inspections?',
      text: 'Absolutely. We handle the entire municipal permitting process from start to finish—coordinating plan submissions, permit pulling, and final city or utility inspections so your project is 100% code-compliant and legal.',
    },
    {
      question: 'What types of EV chargers do you install?',
      text: 'We install all makes and models of Level 2 home electric vehicle charging stations, including Tesla Wall Connectors, ChargePoint Home Flex, JuiceBox, Rivian chargers, and universal J1772 units. We also configure multi-unit and HOA parking structure charging networks.',
      answer: (
        <>
          We install all makes and models of Level 2 home electric vehicle
          charging stations, including Tesla Wall Connectors, ChargePoint Home
          Flex, JuiceBox, Rivian chargers, and universal J1772 units. We also
          configure multi-unit and HOA parking structure charging networks.
          Learn more about our{' '}
          <NavLink to='/ev-chargers-service'>
            EV charger installation service
          </NavLink>
          .
        </>
      ),
    },
    {
      question: 'How long does a typical electrical project take?',
      text: 'Timelines depend on the scope of work. Simple service calls, outlet replacements, or standard Level 2 EV charger installations typically take just a few hours to half a day. Main panel upgrades usually take one day. Larger whole-home rewiring projects or commercial tenant improvements can range from several days to a few weeks.',
    },
    {
      question: 'Do you work with general contractors?',
      text: 'Yes. We frequently partner with general contractors, interior designers, and architects on kitchen remodels, bathroom updates, ADU construction, and commercial ground-up build-outs. We coordinate seamlessly to keep your construction timeline on track.',
      answer: (
        <>
          Yes. We frequently partner with general contractors, interior
          designers, and architects on kitchen{' '}
          <NavLink to='/remodeling-service'>remodels</NavLink>, bathroom
          updates, ADU construction, and commercial ground-up build-outs. We
          coordinate seamlessly to keep your construction timeline on track.
        </>
      ),
    },
    {
      question: 'What is your pricing like?',
      text: 'We pride ourselves on honest, upfront, flat-rate pricing with zero hidden fees. You will always receive a clear, written estimate detailing the scope and cost before we start any work, ensuring complete peace of mind.',
      answer: (
        <>
          We pride ourselves on honest, upfront, flat-rate pricing with zero
          hidden fees. You will always receive a clear, written estimate
          detailing the scope and cost before we start any work, ensuring
          complete peace of mind. <NavLink to='/contact'>Contact us</NavLink>{' '}
          for a free estimate.
        </>
      ),
    },
    {
      question: 'Do you install smart home electrical systems?',
      text: 'Yes! We specialize in modern smart home integrations, including Lutron Caséta and RadioRA 3 lighting control systems, automated motorized shades, smart thermostats, doorbell cameras, and whole-home Wi-Fi structured cabling.',
      answer: (
        <>
          Yes! We specialize in modern{' '}
          <NavLink to='/smart-home-service'>smart home integrations</NavLink>,
          including Lutron Caséta and RadioRA 3 lighting control systems,
          automated motorized shades, smart thermostats, doorbell cameras, and
          whole-home Wi-Fi structured cabling.
        </>
      ),
    },
    {
      question: 'Can you add outlets without tearing up my walls?',
      text: 'In many cases, yes. Our experienced electricians use specialized techniques—such as fishing wire through wall cavities, utilizing crawlspaces or attics, and running clean surface-mounted conduit or matching raceways where necessary—to add new switches and outlets with minimal disruption to your drywall and plaster finishes.',
      answer: (
        <>
          In many cases, yes. Our experienced electricians use specialized
          techniques—such as fishing wire through wall cavities, utilizing
          crawlspaces or attics, and running clean surface-mounted conduit or
          matching raceways where necessary—to add new switches and outlets with
          minimal disruption to your drywall and plaster finishes. Learn more
          about our{' '}
          <NavLink to='/outlets&GFCI-service'>
            outlet & GFCI installation service
          </NavLink>
          .
        </>
      ),
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.text,
      },
    })),
  };

  const footer = {
    title: 'Ready to Get Started?',
    subtitle:
      'Call now for a free estimate or schedule your service online. Licensed, insured, and ready to help.',
  };

  return (
    <div className='faqpage'>
      <title>
        Frequently Asked Questions | Brentwood Electrical Experts C-10 #1102731
      </title>
      <meta
        name='description'
        content='Get expert answers on C-10 licensing, upfront pricing, permits, EV chargers & panel upgrades from Brentwood Electrical Experts serving West LA. Call (310) 666-4752.'
      />
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>

      <div className='faqpage_hero'>
        <div className='container'>
          <h2>
            Frequently Asked <span>Questions</span> — Electrical Services,
            Pricing & Licensing
          </h2>
          <p>
            Everything you need to know about our California-licensed{' '}
            <NavLink to='/all-services'>electrical services</NavLink>,
            transparent upfront pricing, municipal permitting, EV charger
            installations, and service coverage across{' '}
            <NavLink to='/all-locations'>West Los Angeles</NavLink> and
            surrounding communities.
          </p>
          <div className='faqpage_buttons'>
            <a href='tel:+13106664752' className='faqpage_button'>
              Call (310) 666-4752
            </a>
            <NavLink to='/contact' className='faqpage_button_secondary'>
              Request a Free Estimate
            </NavLink>
          </div>
        </div>
      </div>

      <TrustBadges badges={badges} />

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
                  <p>{faq.answer ?? faq.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer footer={footer} />
    </div>
  );
}

export default FAQPage;
