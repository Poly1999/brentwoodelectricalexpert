import { CheckCircle2 } from 'lucide-react';
import './RequestService.css';
import ContactImage from '../../../assets/recessed-lighting.webp';
import RequestServiceForm from './RequestServiceForm/RequestServiceForm';

function RequestService() {
  return (
    <div className='requestform'>
      <div className='container requestform_inner'>
        <div className='requestform_left'>
          <h2>Request Electrical Service</h2>
          <p className='requestform_subtitle'>
            Fill out the form and we'll get back to you within 1 business day
            with a free estimate. Or call us now at{' '}
            <a href='tel:+13106664752'>(310) 666-4752</a>.
          </p>

          <RequestServiceForm />
        </div>

        <div className='requestform_right'>
          <div className='requestform_image'>
            <img src={ContactImage} alt='Electrical Service' />
          </div>

          <div className='requestform_why'>
            <h3>Why Contact Us?</h3>
            <div className='requestform_why_item'>
              <CheckCircle2 />
              <span>Free estimates on all projects</span>
            </div>
            <div className='requestform_why_item'>
              <CheckCircle2 />
              <span>Same-day service available</span>
            </div>
            <div className='requestform_why_item'>
              <CheckCircle2 />
              <span>Licensed & insured professionals</span>
            </div>
            <div className='requestform_why_item'>
              <CheckCircle2 />
              <span>Transparent, upfront pricing</span>
            </div>
            <div className='requestform_why_item'>
              <CheckCircle2 />
              <span>Serving 28+ West LA communities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestService;
