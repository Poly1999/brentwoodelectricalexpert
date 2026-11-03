import './PortfolioPreview.css';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface HomeProjects {
  image: string;
  title: string;
}

interface PortfolioPreviewProps {
  title: string;
  subtitle: string;
  projects: HomeProjects[];
  variant?: 'light' | 'dark';
  isButtonVisible?: boolean;
}

function PortfolioPreview({
  title,
  subtitle,
  projects,
  variant = 'light',
  isButtonVisible = true,
}: PortfolioPreviewProps) {
  return (
    <div className={`portfolio ${variant === 'dark' ? 'portfolio_dark' : ''}`}>
      <div className='container'>
        <div className='portfolio_header'>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className='portfolio_grid'>
          {projects.map((project, index) => (
            <div className='portfolio_card' key={index}>
              <img src={project.image} alt={project.title} />
              <div className='portfolio_overlay'>
                <span>{project.title}</span>
              </div>
            </div>
          ))}
        </div>

        {isButtonVisible === true ? (
          <div className='portfolio_viewall'>
            <NavLink to='/projects' className='portfolio_viewall_button'>
              View All Projects
              <ArrowRight />
            </NavLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default PortfolioPreview;
