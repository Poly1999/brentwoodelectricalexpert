import './HowItWorks.css';

const steps = [
  {
    number: 1,
    title: 'Call or Request',
    text: 'Call (310) 666-4752 or fill out our online form to describe your project.',
  },
  {
    number: 2,
    title: 'Free Assessment',
    text: 'We assess your electrical needs and provide transparent, upfront pricing.',
  },
  {
    number: 3,
    title: 'Expert Service',
    text: 'Our licensed electricians complete the work safely, cleanly, and on time.',
  },
  {
    number: 4,
    title: '100% Satisfaction',
    text: "We test everything, clean up, and make sure you're completely satisfied.",
  },
];

function HowItWorks() {
  return (
    <div className='howitworks'>
      <div className='container'>
        <div className='howitworks_header'>
          <h2>How It Works</h2>
          <p>Getting expert electrical service is easy</p>
        </div>

        <div className='howitworks_grid'>
          {steps.map(step => (
            <div className='howitworks_step' key={step.number}>
              <div className='howitworks_number'>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
