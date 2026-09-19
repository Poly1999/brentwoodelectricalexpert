import './LocationDetails.css';

interface LocationDetails {
  city: string;
  pharagraphs: { text: string }[];
  features: { item: string }[];
}

interface LocationDetailsProps {
  details: LocationDetails;
}

function LocationDetails({ details }: LocationDetailsProps) {
  return (
    <div className='locationdetails'>
      <div className='locationdetails_inner'>
        <h2>Your Trusted Electrician in {details.city}, California</h2>
        {details.pharagraphs.map((pharagraph, index) => (
          <p className='locationdetails_paragraph' key={index}>
            {pharagraph.text}
          </p>
        ))}
        <h3>Areas & Landmarks We Serve Near {details.city}</h3>
        <div className='locationdetails_tags'>
          {details.features.map((feature, index) => (
            <span className='locationdetails_tag' key={index}>
              {feature.item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
