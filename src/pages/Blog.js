import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Blog.css";
import { 
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
 } from "react-icons/fa";
import logo from "../images/logo.png"; // adjust path to match your project structure

// ============================================================
// SAMPLE BLOG POSTS WITH IMAGES
// Replace the image URLs with your own local imports or CDN links
// Example for local images:
// import blog1 from "../../images/blog/blog1.jpg";
// import blog2 from "../../images/blog/blog2.jpg";
// ...
// Then use: image: blog1
// ============================================================

const allBlogPosts = [
  {
    id: 1,
    category: "Retirement Planning",
    date: "August 18, 2026",
    readTime: "5 min read",
    title: "How to Maximize Your 401(k) Contributions in 2026",
    excerpt:
      "With the new contribution limits taking effect, learn how to make the most of your retirement savings and reduce your tax liability.",
    featured: true,
    author: "Sarah Johnson",
    authorRole: "Senior Retirement Strategist",
    // Using picsum for demo – replace with your own image
    image: "https://picsum.photos/seed/retirement/600/400",
    imageAlt: "Person reviewing retirement savings plan on tablet",
  },
  {
    id: 2,
    category: "Market Updates",
    date: "August 14, 2026",
    readTime: "4 min read",
    title: "Market Volatility: What Retirement Savers Need to Know",
    excerpt:
      "Understanding market cycles and how to stay disciplined during periods of uncertainty is key to long-term retirement success.",
    featured: false,
    author: "Michael Chen",
    authorRole: "Chief Investment Officer",
    image: "https://picsum.photos/seed/market/600/400",
    imageAlt: "Stock market charts on digital display",
  },
  {
    id: 3,
    category: "Plan Design",
    date: "August 10, 2026",
    readTime: "6 min read",
    title: "The Rise of ESG Investing in Retirement Plans",
    excerpt:
      "Environmental, Social, and Governance factors are becoming increasingly important to plan participants. Here's what plan sponsors need to know.",
    featured: false,
    author: "Emily Rodriguez",
    authorRole: "ESG Research Lead",
    image: "https://picsum.photos/seed/esg/600/400",
    imageAlt: "Green energy and sustainable investing concept",
  },
  {
    id: 4,
    category: "Fiduciary",
    date: "August 5, 2026",
    readTime: "3 min read",
    title: "Fiduciary Duties: A Practical Guide for Plan Sponsors",
    excerpt:
      "Understanding your fiduciary responsibilities is essential for protecting both your organization and your plan participants.",
    featured: false,
    author: "David Kim",
    authorRole: "Fiduciary Counsel",
    image: "https://picsum.photos/seed/fiduciary/600/400",
    imageAlt: "Business documents and legal gavel",
  },
  {
    id: 5,
    category: "Technology",
    date: "July 28, 2026",
    readTime: "4 min read",
    title: "How AI Is Transforming Retirement Advice",
    excerpt:
      "From personalized portfolio recommendations to automated rebalancing, AI is changing the landscape of retirement planning.",
    featured: false,
    author: "Alex Patel",
    authorRole: "Head of Technology",
    image: "https://picsum.photos/seed/ai/600/400",
    imageAlt: "AI and machine learning visualization",
  },
  {
    id: 6,
    category: "Regulatory",
    date: "July 22, 2026",
    readTime: "5 min read",
    title: "SECURE 2.0: Key Provisions You Should Know",
    excerpt:
      "A comprehensive breakdown of the SECURE 2.0 Act and how it impacts retirement plan design, participant savings, and employer obligations.",
    featured: false,
    author: "Lisa Thompson",
    authorRole: "Regulatory Affairs Director",
    image: "https://picsum.photos/seed/regulatory/600/400",
    imageAlt: "Government building with regulatory documents",
  },
  {
    id: 7,
    category: "Retirement Planning",
    date: "July 15, 2026",
    readTime: "4 min read",
    title: "Catch-Up Contributions: A Guide for Savers Over 50",
    excerpt:
      "Older savers have the opportunity to contribute additional funds to their retirement accounts. Here's how to take advantage.",
    featured: false,
    author: "Sarah Johnson",
    authorRole: "Senior Retirement Strategist",
    image: "https://picsum.photos/seed/catchup/600/400",
    imageAlt: "Older couple reviewing retirement portfolio",
  },
  {
    id: 8,
    category: "Market Updates",
    date: "July 8, 2026",
    readTime: "3 min read",
    title: "Bond Market Signals: What They Mean for Retirement",
    excerpt:
      "Understanding yield curves and bond market dynamics can help you make better asset allocation decisions for your retirement portfolio.",
    featured: false,
    author: "Michael Chen",
    authorRole: "Chief Investment Officer",
    image: "https://picsum.photos/seed/bonds/600/400",
    imageAlt: "Bond market trends and economic indicators",
  },
  {
    id: 9,
    category: "Plan Design",
    date: "June 30, 2026",
    readTime: "5 min read",
    title: "Auto-Enrollment: Best Practices for Plan Sponsors",
    excerpt:
      "Auto-enrollment has become a powerful tool for improving retirement readiness. Learn the best practices for implementation and communication.",
    featured: false,
    author: "Emily Rodriguez",
    authorRole: "ESG Research Lead",
    image: "https://picsum.photos/seed/autoenroll/600/400",
    imageAlt: "Business team discussing employee benefits",
  },
];

// ============================================================
// BLOG COMPONENT
// ============================================================

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Retirement Planning",
    "Market Updates",
    "Plan Design",
    "Fiduciary",
    "Technology",
    "Regulatory",
  ];

  const filteredPosts =
    activeCategory === "All"
      ? allBlogPosts
      : allBlogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = allBlogPosts.find((post) => post.featured === true);

  // Get remaining posts (excluding featured)
  const regularPosts = filteredPosts.filter(
    (post) => post.id !== featuredPost?.id
  );

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed!");
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="blog-hero">
        <div className="blog-hero-overlay">
          <div className="blog-hero-content">
            <h1>Blog</h1>
            <p className="blog-hero-lede">
              Expert insights, practical advice, and thoughtful perspectives
              on retirement planning, investing, and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY FILTER ===== */}
      <nav className="blog-filter" aria-label="Blog categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => handleCategorySelect(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* ===== FEATURED POST ===== */}
      {featuredPost && (
        <section className="blog-featured">
          <div className="blog-featured-inner">
            <div className="blog-featured-media">
              <img
                src={featuredPost.image}
                alt={featuredPost.imageAlt}
                loading="lazy"
                className="blog-featured-img"
              />
            </div>
            <div className="blog-featured-copy">
              <span className="tag">Featured</span>
              <span className="blog-date">{featuredPost.date}</span>
              <span className="blog-read-time">· {featuredPost.readTime}</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className="blog-author">
                <span className="author-name">{featuredPost.author}</span>
                <span className="author-role">· {featuredPost.authorRole}</span>
              </div>
              <NavLink to={`/blog/${featuredPost.id}`} className="read-more">
                Read Article
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </NavLink>
            </div>
          </div>
        </section>
      )}

      {/* ===== BLOG GRID ===== */}
      <section className="blog-grid-section">
        <div className="blog-section-header">
          <h2>Latest Articles</h2>
          <span className="blog-count">{regularPosts.length} articles</span>
        </div>

        <div className="blog-grid">
          {regularPosts.length > 0 ? (
            regularPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-media">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="blog-card-img"
                  />
                </div>
                <div className="blog-card-body">
                  <span className="tag">{post.category}</span>
                  <span className="blog-card-date">{post.date}</span>
                  <span className="blog-card-read">· {post.readTime}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-author">{post.author}</span>
                    <NavLink
                      to={`/blog/${post.id}`}
                      className="blog-card-link"
                    >
                      Read
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </NavLink>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="blog-empty">
              <p>No articles found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== NEWSLETTER BANNER ===== */}
      <section className="blog-newsletter">
        <div className="blog-newsletter-inner">
          <span className="eyebrow">Stay in the loop</span>
          <h2>Get the latest blog posts in your inbox</h2>
          <p>
            Subscribe to our weekly newsletter for fresh insights, practical tips,
            and expert commentary on retirement planning and investing.
          </p>
          <form className="blog-newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="blog-newsletter-note">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
      <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">
                <img src={logo} alt="Company Logo" className="logo-img" />
              </div>
              <div className="logo-text">
                <b>EGPS Ventures</b>
                <span>RETIREMENT PLAN SOLUTIONS</span>
              </div>
            </div>
            <p className="footer-tag">
              Third-party administration, plan design, actuarial consulting,
              and 3(16) fiduciary services — serving advisors, partners, and
              employers since 1966.
            </p>
            <div className="social">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a href="mailto:info@example.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><NavLink to="/about-us">About</NavLink></li>
              <li><a href="/Careers">Careers</a></li>
              <li><a href="/contact-us">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/retirement-plan-design">Retirement Plan Design</a></li>
              <li><a href="/retirement-plan-compliance">Compliance</a></li>
              <li><a href="/3(16)-fiduciary-services">3(16) Fiduciary Services</a></li>
              <li><a href="/advisor-partnership">Advisor Partnership</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="/insights">Insights</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/testimonials">Case Studies</a></li>
            </ul>
          </div>

          <div className="footer-col footer-newsletter">
            <h4>Stay Informed</h4>
            <p>Plan updates and compliance news, occasionally in your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Work email" aria-label="Work email" required />
              <button type="submit" aria-label="Subscribe">
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 EGPS Ventures. All rights reserved.</span>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/adv-disclosures">ADV Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Blog;