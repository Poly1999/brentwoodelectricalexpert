import './StatsSection.css';

interface Stats {
  icon: React.ReactNode;
  raiting: string;
  title: string;
}

interface StatsSectionProps {
  items: Stats[];
  variant?: 'dark' | 'light';
}

function StatsSection({ items, variant = 'dark' }: StatsSectionProps) {
  return (
    <div
      className={`statssection ${variant === 'light' ? 'statssection_light' : ''}`}
    >
      <div className='container statssection_inner'>
        {items.map((item, index) => (
          <div className='statssection_item' key={index}>
            <div className='statssection_top'>
              <div className='statssection_icon'>{item.icon}</div>
              <span className='statssection_number'>{item.raiting}</span>
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
