import FooterMain from '../../components/Footer/FooterMain/FooterMain';
import './PrivacyPolicyPage.css';

function PrivacyPolicyPage() {
  return (
    <div className='legalpage'>
      <div className='legalpage_hero'>
        <div className='container'>
          <h2>Privacy Policy</h2>
        </div>
      </div>

      <div className='legalpage_content'>
        <div className='legalpage_inner'>
          <p className='legalpage_updated'>Last updated: March 2026</p>

          <h3>Information We Collect</h3>
          <p>
            When you contact us through our website, phone, or email, we may
            collect your name, phone number, email address, service address, and
            details about your electrical service needs. This information is
            used solely to provide you with the services you've requested.
          </p>

          <h3>How We Use Your Information</h3>
          <p>
            We use the information you provide to respond to your service
            requests, schedule appointments, provide estimates, and communicate
            with you about your electrical projects. We do not sell, rent, or
            share your personal information with third parties for marketing
            purposes.
          </p>

          <h3>Data Security</h3>
          <p>
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h3>Cookies</h3>
          <p>
            Our website may use cookies and similar technologies to improve your
            browsing experience and analyze website traffic. You can control
            cookie settings through your browser preferences.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have questions about this privacy policy, please contact us
            at{' '}
            <a href='mailto:info@brentwoodelectricalexpert.com'>
              info@brentwoodelectricalexpert.com
            </a>{' '}
            or call <a href='tel:+13106664752'>(310) 666-4752</a>.
          </p>
        </div>
      </div>

      <FooterMain />
    </div>
  );
}

export default PrivacyPolicyPage;
