import { NavLink } from 'react-router-dom';
import './BlogHero.css';
import { ArrowLeft } from 'lucide-react';

interface BlogHero {
  category: string;
  title: string;
  date: string;
}

interface BlogHeroProps {
  hero: BlogHero;
}

function BlogHero({ hero }: BlogHeroProps) {
  return (
    <div className='bloghero'>
      <div className='bloghero_inner'>
        <NavLink to='/blog' className='bloghero_back'>
          <ArrowLeft />
          Back to Blog
        </NavLink>
        <div className='bloghero_content'>
          <span className='bloghero_category'>{hero.category}</span>
          <h1>{hero.title}</h1>
          <p className='bloghero_date'>{hero.date}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogHero;
