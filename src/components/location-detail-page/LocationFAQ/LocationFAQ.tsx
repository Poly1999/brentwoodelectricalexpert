import { useState } from 'react';
import './LocationFAQ.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface LocationFAQ {
  city: string;
  features: { question: string; answer: string }[];
}

interface LocationFAQProps {
  faqs: LocationFAQ;
}
function LocationFAQ({ faqs }: LocationFAQProps) {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  return (
    <div className='locationfaq'>
      <div className='locationfaq_inner'>
        <div className='locationfaq_header'>
          <h2>Frequently Asked Questions — {faqs.city} Electrical Services</h2>
          <p>
            Common questions from {faqs.city} homeowners about our electrical
            services.
          </p>
        </div>
        {faqs.features.map((faq, index) => (
          <div className='locationfaqitem' key={index}>
            <h3
              className='locationfaqitem_question'
              onClick={() => setIsOpen(index === isOpen ? null : index)}
            >
              <span>{faq.question}</span>
              {isOpen === index ? <ChevronUp /> : <ChevronDown />}
            </h3>
            <div
              className={`locationfaqitem_answer_wrapper ${
                isOpen === index ? 'locationfaqitem_answer_open' : ''
              }`}
            >
              <div className='locationfaqitem_answer'>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationFAQ;
