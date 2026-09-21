import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './BlogPage.css';
import Footer from '../../components/Footer/Footer';

function BlogPage() {
  const articles = [
    {
      category: 'Energy Efficiency',
      title:
        'How to Make Your Home More Energy Efficient With Better Electrical Planning',
      excerpt:
        'Energy efficiency starts with smart electrical planning. Learn how LED lighting, smart controls, panel upgrades and EV prep can lower energy use.',
      date: 'August 13, 2026',
      slug: 'energy-planning-blog',
    },
    {
      category: 'Safety',
      title:
        'Why Whole-Home Surge Protection Is One of the Smartest Electrical Upgrades for Modern Homes',
      excerpt:
        'Power strips only protect one device. Learn how a panel-mounted whole-home surge protector shields appliances, smart devices and EV chargers.',
      date: 'August 5, 2026',
      slug: 'surge-protection-blog',
    },
    {
      category: 'Panel Upgrades',
      title:
        "Is It Time to Replace Your Old Zinsco Electrical Panel? Here's What Every Homeowner Should Know",
      excerpt:
        'Zinsco panels from the 1950s–70s can fail to trip during an overload. Learn the warning signs and the benefits of a modern panel upgrade.',
      date: 'July 28, 2026',
      slug: 'zinsco-panel-blog',
    },
    {
      category: 'Panel Upgrades',
      title:
        'Upgrading Your Electrical Panel: The Dust-Free, Legal Way to Protect Your Home',
      excerpt:
        'How we replace hazardous Zinsco and Federal Pacific panels with premium Siemens load centers — 100% dust-free, fully permitted, and flat-rate priced.',
      date: 'July 17, 2026',
      slug: 'dust-free-upgrade-blog',
    },
    {
      category: 'Lighting',
      title: 'Why Layered Lighting Is One of the Most Overlooked Home Upgrades',
      excerpt:
        "Discover how layered lighting can transform your home's mood, functionality, and value — and why it's one of the most impactful upgrades homeowners overlook.",
      date: 'June 26, 2026',
      slug: 'layered-lighting-blog',
    },
    {
      category: 'Safety',
      title:
        'Why Modern Homes Need Electrical Safety Inspections More Than Ever',
      excerpt:
        'As homes rely more on electricity than ever, discover why regular electrical safety inspections are essential for protecting your family and property.',
      date: 'June 8, 2026',
      slug: 'modern-homes-blog',
    },
    {
      category: 'Safety',
      title:
        "7 Warning Signs Your Home's Electrical System Needs Immediate Attention",
      excerpt:
        'From flickering lights to warm outlets, learn the critical warning signs that your electrical system needs professional inspection.',
      date: 'April 22, 2026',
      slug: 'warning-signs-blog',
    },
    {
      category: 'Panel Upgrades',
      title: 'When Should You Upgrade Your Electrical Panel?',
      excerpt:
        'Learn the warning signs that your electrical panel is outdated and why upgrading to 200 amps is essential for modern homes.',
      date: 'March 15, 2026',
      slug: 'blog',
    },
    {
      category: 'EV Chargers',
      title: 'The Complete Guide to Home EV Charger Installation',
      excerpt:
        'Everything you need to know about installing a Level 2 EV charger at home — from charger selection to panel requirements.',
      date: 'March 8, 2026',
      slug: 'blog',
    },
    {
      category: 'Safety',
      title: 'GFCI Outlets Explained: Where You Need Them',
      excerpt:
        "Understanding GFCI protection, where it's required by code, and why it's critical for safety in kitchens, bathrooms, and outdoor areas.",
      date: 'February 28, 2026',
      slug: 'blog',
    },
    {
      category: 'Smart Home',
      title: '5 Smart Home Electrical Upgrades Worth the Investment',
      excerpt:
        'Discover the top smart home electrical upgrades that add convenience, security, and value to your West LA home.',
      date: 'February 20, 2026',
      slug: 'blog',
    },
    {
      category: 'Security',
      title: 'Security Lighting: How to Protect Your Home After Dark',
      excerpt:
        'Professional tips for planning and installing security lighting that deters intruders and enhances curb appeal.',
      date: 'February 12, 2026',
      slug: 'blog',
    },
    {
      category: 'Safety',
      title: 'Annual Electrical Safety Checklist for Homeowners',
      excerpt:
        'A simple checklist to help you identify potential electrical hazards and keep your home safe year-round.',
      date: 'February 5, 2026',
      slug: 'blog',
    },
  ];

  return (
    <div className='blogpage'>
      <div className='blogpage_hero'>
        <div className='container'>
          <h2>
            Electrical Tips & <span>Blog</span>
          </h2>
          <p>
            Expert advice, guides, and tips from your trusted West LA
            electricians.
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='blogpage_grid'>
          {articles.map((article, index) => (
            <NavLink
              to={`/${article.slug}`}
              className='blogpage_card'
              key={index}
              onClick={() => {
                if (article.slug === 'blog') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <span className='blogpage_category'>{article.category}</span>
              <h3>{article.title}</h3>
              <p className='blogpage_excerpt'>{article.excerpt}</p>
              <div className='blogpage_footer'>
                <span className='blogpage_date'>{article.date}</span>
                <span className='blogpage_read'>
                  Read <ArrowRight />
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
