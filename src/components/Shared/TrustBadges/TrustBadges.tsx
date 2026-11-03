import './TrustBadges.css';

interface Badges {
  items: string[];
  icons: React.ReactNode[];
}

interface TrustBadgesProps {
  badges: Badges;
}

function TrustBadges({ badges }: TrustBadgesProps) {
  return (
    <div className='trustbadges'>
      <div className='container trustbadges_inner'>
        {badges.items.map((item, index) => (
          <div className='trustbadges_item' key={index}>
            <div className='trustbadges_icon'>{badges.icons[index]}</div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustBadges;
