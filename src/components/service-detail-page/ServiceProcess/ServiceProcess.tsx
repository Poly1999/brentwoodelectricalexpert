import './ServiceProcess.css';

interface FeaturesDescription {
  title: string;
  features: { title: string; subtitle: string }[];
}

interface FeaturesDescriptionProps {
  featuresDescription: FeaturesDescription;
}

function ServiceProcess({ featuresDescription }: FeaturesDescriptionProps) {
  return (
    <div className='serviceprocess'>
      <div className='container'>
        <h2>Our Process</h2>
        <div className='serviceprocess_grid'>
          {featuresDescription.features.map((features, index) => (
            <div className='serviceprocess_card' key={index}>
              <div className='serviceprocess_number'>{index + 1}</div>
              <div>
                <h3>{features.title}</h3>
                <p>{features.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceProcess;
