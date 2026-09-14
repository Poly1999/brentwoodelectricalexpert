import { CircleCheck } from 'lucide-react';
import './ServiceBenefits.css';

interface ServiceBenefits {
  features: string[];
  image: string;
}

interface ServiceBenefitsProps {
  benefits: ServiceBenefits;
}

function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <div className='servicebenefits'>
      <div className='container servicebenefits_layout'>
        <div className='servicebenefits_content'>
          <h2>Benefits</h2>
          <ul className='servicebenefits_list'>
            {benefits.features.map((benefit, index) => (
              <li key={index}>
                <CircleCheck />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className='servicebenefits_image'>
          <img src={benefits.image} alt='Service benefits' />
        </div>
      </div>
    </div>
  );
}

export default ServiceBenefits;
