import './BlogPreview.css';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const posts = [
  {
    tag: 'Energy Efficiency',
    title:
      'How to Make Your Home More Energy Efficient With Better Electrical Planning',
    text: 'Energy efficiency starts with smart electrical planning. Learn how LED lighting, smart controls, panel upgrades and EV prep can lower energy use.',
    date: 'August 13, 2026',
    slug: 'energy-planning-blog',
  },
  {
    tag: 'Panel Upgrades',
    title: 'When Should You Upgrade Your Electrical Panel?',
    text: 'Learn the warning signs that your panel is outdated and why upgrading to 200 amps is essential for modern homes.',
    date: 'March 15, 2026',
    slug: 'blog',
  },
  {
    tag: 'EV Chargers',
    title: 'The Complete Guide to Home EV Charger Installation',
    text: 'Everything you need to know about installing a Level 2 EV charger at home — from selection to panel requirements.',
    date: 'March 8, 2026',
    slug: 'blog',
  },
];

function BlogPreview() {
  return (
    <div className='blogpreview'>
      <div className='container'>
        <div className='blogpreview_header'>
          <div>
            <span className='blogpreview_label'>
              Electrical Tips & Insights
            </span>
            <h2>From the Blog</h2>
            <p>
              Expert advice, safety guides, and tips from West LA's trusted
              electricians.
            </p>
          </div>
          <NavLink to='/blog' className='blogpreview_viewall'>
            View All Posts
            <ArrowRight />
          </NavLink>
        </div>

        <div className='blogpreview_grid'>
          {posts.map((post, index) => (
            <div className='blogcard' key={index}>
              <span className='blogcard_tag'>{post.tag}</span>
              <h3>{post.title}</h3>
              <p className='blogcard_text'>{post.text}</p>
              <div className='blogcard_footer'>
                <span className='blogcard_date'>{post.date}</span>
                <NavLink to={`/${post.slug}`} className='blogcard_read'>
                  Read
                  <ArrowRight />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPreview;
