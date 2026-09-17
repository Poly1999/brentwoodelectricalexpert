import './RecentProjects.css';

interface RecentProjects {
  title: string;
  subtitle: string;
  features: { image: string; name: string; location: string }[];
}

interface RecentProjectsProps {
  recents: RecentProjects;
  columns?: 3 | 4;
}

function RecentProjects({ recents, columns = 4 }: RecentProjectsProps) {
  return (
    <div className='recentprojects'>
      <div className='container'>
        <div className='recentprojects_header'>
          <h2>{recents.title}</h2>
          <p>{recents.subtitle}</p>
        </div>
        <div
          className={`recentprojects_grid ${
            columns === 3 ? 'recentprojects_grid_3' : ''
          }`}
        >
          {recents.features.map((recent, index) => (
            <div className='recentprojects_card' key={index}>
              <div className='recentprojects_image'>
                <img src={recent.image} alt={recent.name} />
              </div>
              <div className='recentprojects_content'>
                <h3>{recent.name}</h3>
                <p>{recent.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
