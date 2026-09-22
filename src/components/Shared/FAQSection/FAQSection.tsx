import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import './FAQSection.css';
import FAQImage from '../../../assets/ev-charger-3.webp';
import { NavLink } from 'react-router-dom';

function FAQSection() {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const faqs = [
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes — Brentwood Electrical Experts is a fully licensed and insured electrical contractor. We carry general liability and workers compensation insurance for your protection.',
    },
    {
      question: 'Do you offer free estimates?',
      answer:
        'Yes — we provide free estimates for most electrical projects. Call us at (310) 666-4752 or submit a request through our online form.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve Brentwood, Santa Monica, Pacific Palisades, Bel Air, Beverly Hills, West Hollywood, Venice, Culver City, Mar Vista, Westwood, and many more communities across West LA.',
    },
    {
      question: 'How quickly can you respond?',
      answer:
        'We offer same-day service for most requests and 24/7 emergency service for urgent electrical issues. Call us anytime.',
    },
    {
      question: 'Do you handle permits and inspections?',
      answer:
        'Yes — we manage all required city permits and coordinate inspections for panel upgrades, EV chargers, construction, and more.',
    },
  ];

  return (
    <div className='faqsection'>
      <div className='container faqsection_inner'>
        <div className='faqsection_left'>
          <h2>Frequently Asked Questions</h2>
          <p className='faqsection_subtitle'>
            Have questions? We have answers. For anything else, call us at (310)
            666-4752.
          </p>

          <div className='faqsection_list'>
            {faqs.map((faq, index) => (
              <div className='faqitem' key={index}>
                <h3
                  className='faqitem_question'
                  onClick={() => setIsOpen(index === isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  {isOpen === index ? <ChevronUp /> : <ChevronDown />}
                </h3>
                <div
                  className={`faqitem_answer_wrapper ${
                    isOpen === index ? 'faqitem_answer_open' : ''
                  }`}
                >
                  <div className='faqitem_answer'>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <NavLink to='/faq' className='faqsection_viewall'>
            View All FAQs
            <ArrowRight />
          </NavLink>
        </div>

        <div className='faqsection_image'>
          <img src={FAQImage} alt='EV Charger Installation' />
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
