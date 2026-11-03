import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import './FAQSection.css';
import FAQImage from '../../../assets/ev-charger-3.webp';
import { NavLink } from 'react-router-dom';

function FAQSection() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const faqs = [
    {
      question:
        'Are you a licensed and insured California electrical contractor?',
      answer:
        "Yes. Brentwood Electrical Experts holds an active California C-10 Electrical Contractor license (#1102731) through the Contractors State License Board (CSLB) and carries full general liability and workers' compensation insurance.",
    },
    {
      question: 'Do you provide free estimates before starting work?',
      answer:
        'Yes. We provide complimentary assessments and deliver clear, upfront written estimates so you know the exact scope and cost before authorizing any work.',
    },
    {
      question: 'Which areas around West Los Angeles do you cover?',
      answer:
        'We serve over 28 neighborhoods across the Westside, South Bay, and Valley, including Brentwood, Santa Monica, Pacific Palisades, Beverly Hills, Bel Air, Venice, Mar Vista, Culver City, Westwood, West Hollywood, and Sherman Oaks.',
    },
    {
      question: 'How fast can you dispatch an electrician?',
      answer:
        'We offer same-day appointments for urgent electrical troubleshooting, tripped main breakers, and partial power outages across our core West LA service territory.',
    },
    {
      question: 'Do you pull city permits and coordinate utility shut-offs?',
      answer:
        'Yes. Our team handles all municipal building permits (LADBS, City of Santa Monica, Beverly Hills) and coordinates meter spot requests and disconnects directly with LADWP and Southern California Edison (SCE).',
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
