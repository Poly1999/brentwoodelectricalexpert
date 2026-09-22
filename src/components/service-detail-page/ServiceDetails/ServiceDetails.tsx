import { Phone, FileText } from 'lucide-react';
import './ServiceDetails.css';
import { NavLink } from 'react-router-dom';

interface FullDescription {
  title: string;
  paragraphs: React.ReactNode[];
}
interface ExpectationsDescription {
  title: string;
  paragraphs: React.ReactNode[];
}
interface FeaturesDescription {
  title: string;
  features: { title: string; subtitle: string }[];
}
interface SafetyDescription {
  title: string;
  paragraphs: React.ReactNode[];
}
interface CoverageDescription {
  title: string;
  paragraphs: React.ReactNode[];
}

interface ServiceDetailsProps {
  fullDescription?: FullDescription;
  expectationsDescription?: ExpectationsDescription;
  featuresDescription?: FeaturesDescription;
  safetyDescription?: SafetyDescription;
  coverageDescription?: CoverageDescription;
}

function ServiceDetails({
  fullDescription,
  expectationsDescription,
  featuresDescription,
  safetyDescription,
  coverageDescription,
}: ServiceDetailsProps) {
  return (
    <div className='servicedetails'>
      <div className='servicedetails_wrapper'>
        <div className='servicedetails_container'>
          {fullDescription ? (
            <div className='servicedetails_block'>
              <h2>{fullDescription.title}</h2>
              {fullDescription.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          <div className='servicedetails_buttons'>
            <a href='tel:+13106664752' className='servicedetails_button'>
              <Phone />
              Call for a Free Estimate
            </a>
            <NavLink to='/contact' className='servicedetails_button_secondary'>
              <FileText />
              Request a Quote Online
            </NavLink>
          </div>

          {expectationsDescription ? (
            <div className='servicedetails_block'>
              <h2>{expectationsDescription.title}</h2>
              {expectationsDescription.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {featuresDescription ? (
            <div className='servicedetails_block'>
              <h2>{featuresDescription.title}</h2>
              <div className='servicedetails_process'>
                {featuresDescription.features.map((feature, index) => (
                  <div className='servicedetails_process_item' key={index}>
                    <div className='servicedetails_process_number'>
                      {index + 1}
                    </div>
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {safetyDescription ? (
            <div className='servicedetails_block'>
              <h2>{safetyDescription.title}</h2>
              {safetyDescription.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {coverageDescription ? (
            <div className='servicedetails_block'>
              <h2>{coverageDescription.title}</h2>
              {coverageDescription.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
