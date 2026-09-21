import './BlogIntro.css';

interface BlogIntroItem {
  paragraph: React.ReactNode;
}

interface BlogIntroProps {
  intro: BlogIntroItem[];
}

function BlogIntro({ intro }: BlogIntroProps) {
  return (
    <div className='blogintro'>
      <div className='container blogintro_inner'>
        {intro.map((item, index) => (
          <p key={index}>{item.paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default BlogIntro;
