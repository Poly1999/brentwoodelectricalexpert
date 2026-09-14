import { ChevronDown, ChevronUp } from 'lucide-react';
import './ServiceFAQ.css';
import { useState } from 'react';

interface ServiceFAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: ServiceFAQItem[];
}

function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  return (
    <div className='servicefaq'>
      <div className='container servicefaq_inner'>
        <h2>Frequently Asked Questions</h2>
        <div className='servicefaq_list'>
          {faqs.map((faq, index) => (
            <div className='servicefaqitem' key={index}>
              <h3
                className='servicefaqitem_question'
                onClick={() => setIsOpen(index === isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                {isOpen === index ? <ChevronUp /> : <ChevronDown />}
              </h3>
              <div
                className={`servicefaqitem_answer_wrapper ${
                  isOpen === index ? 'servicefaqitem_answer_open' : ''
                }`}
              >
                <div className='servicefaqitem_answer'>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceFAQ;
