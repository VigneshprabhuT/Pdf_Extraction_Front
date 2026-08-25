import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Blog.css";
import { 
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import logo from "../images/logo.png";

// ============================================================
// BLOG POSTS DATA – with fullContent for detail pages
// ============================================================

const allBlogPosts = [
  // ======== POST 1 – FEATURED ========
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
    image: "https://picsum.photos/seed/retirement/600/400",
    imageAlt: "Person reviewing retirement savings plan on tablet",
    fullContent: `
      <p>As we enter 2026, the IRS has announced new contribution limits for 401(k) and other retirement plans. The annual limit has increased to <strong>$23,500</strong>, with an additional <strong>$7,500</strong> catch-up contribution for those aged 50 and older.</p>
      
      <p>This means you can now save up to <strong>$31,000</strong> if you're over 50 – a significant opportunity to supercharge your retirement savings. But maximizing your contributions requires strategic planning.</p>
      
      <h2>Three Key Strategies to Maximize Your 401(k)</h2>
      
      <p>Here are three key strategies to consider:</p>
      
      <ul>
        <li><strong>Increase your deferral percentage</strong> – even a 1% increase can compound significantly over time. Consider bumping your contribution by 1-2% each year until you reach the maximum.</li>
        <li><strong>Take advantage of employer matching</strong> – always contribute enough to get the full match; it's free money. If your employer matches 50% up to 6%, that's an immediate 50% return on your investment.</li>
        <li><strong>Consider Roth contributions</strong> – depending on your tax bracket, Roth 401(k) contributions can provide tax-free growth and tax-free withdrawals in retirement.</li>
      </ul>
      
      <h2>Understanding the New Limits</h2>
      
      <p>The IRS annually adjusts contribution limits based on inflation. For 2026, the increases reflect a 3.5% cost-of-living adjustment. Here's a quick breakdown:</p>
      
      <ul>
        <li><strong>Under 50:</strong> $23,500 maximum</li>
        <li><strong>50 and older:</strong> $31,000 maximum (including catch-up)</li>
        <li><strong>Total combined employer + employee:</strong> $69,000 (or $76,500 with catch-up)</li>
      </ul>
      
      <p>Consult with your financial advisor to determine the best approach for your unique situation. Every dollar you save today can grow significantly over decades of compound growth.</p>
    `,
  },

  // ======== POST 2 ========
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
    fullContent: `
      <p>Market volatility is an inevitable part of investing. While it can be unsettling, understanding its causes and maintaining a disciplined approach is essential for long-term retirement success.</p>
      
      <h2>What's Driving Market Volatility in 2026?</h2>
      
      <p>Several factors are contributing to current market fluctuations:</p>
      
      <ul>
        <li><strong>Interest rate uncertainty</strong> – The Federal Reserve's policy decisions continue to influence bond and equity markets.</li>
        <li><strong>Geopolitical tensions</strong> – Global conflicts and trade disputes create uncertainty for multinational corporations.</li>
        <li><strong>Inflation concerns</strong> – While inflation has moderated, persistent price pressures in certain sectors remain a concern.</li>
        <li><strong>Election cycle</strong> – Political transitions often bring policy uncertainty that impacts market sentiment.</li>
      </ul>
      
      <h2>Strategies for Navigating Volatility</h2>
      
      <p>Here's what retirement savers should keep in mind:</p>
      
      <ul>
        <li><strong>Stay the course</strong> – Trying to time the market is notoriously difficult. Historical data shows that missing just a few of the best days in the market can significantly reduce long-term returns.</li>
        <li><strong>Rebalance regularly</strong> – Volatility can throw your asset allocation out of balance. Rebalancing ensures you maintain your target risk level.</li>
        <li><strong>Focus on what you can control</strong> – You can't control market movements, but you can control your savings rate, asset allocation, and investment costs.</li>
        <li><strong>Think long-term</strong> – Retirement investing is a marathon, not a sprint. Short-term fluctuations are noise; long-term trends matter most.</li>
      </ul>
      
      <p>Remember, market downturns can actually be opportunities to buy quality assets at discounted prices – especially for younger savers with decades until retirement.</p>
    `,
  },

  // ======== POST 3 ========
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
    fullContent: `
      <p>Environmental, Social, and Governance (ESG) investing has moved from the fringe to the mainstream. Today, over 85% of institutional investors consider ESG factors in their investment decisions, and plan participants are increasingly demanding sustainable options.</p>
      
      <h2>Why ESG Matters for Retirement Plans</h2>
      
      <p>ESG considerations are no longer just about values – they're about value. Companies with strong ESG practices often demonstrate:</p>
      
      <ul>
        <li><strong>Better risk management</strong> – Proactive environmental and social policies reduce regulatory and reputational risks.</li>
        <li><strong>Long-term resilience</strong> – Sustainable business practices position companies for long-term success in a changing world.</li>
        <li><strong>Attracting top talent</strong> – Younger workers increasingly prefer employers with strong ESG commitments.</li>
        <li><strong>Competitive advantage</strong> – Companies leading in sustainability often outperform peers over the long term.</li>
      </ul>
      
      <h2>ESG Integration Strategies for Plan Sponsors</h2>
      
      <p>Plan sponsors can incorporate ESG in several ways:</p>
      
      <ul>
        <li><strong>ESG-focused funds</strong> – Adding ESG-specific mutual funds or ETFs to the investment menu.</li>
        <li><strong>Integration across all funds</strong> – Working with providers to incorporate ESG factors across all investment options.</li>
        <li><strong>Proxy voting policies</strong> – Aligning proxy voting with ESG principles.</li>
        <li><strong>Participant education</strong> – Educating participants on the role of ESG in their retirement portfolios.</li>
      </ul>
      
      <p>As participant demand continues to grow, plan sponsors who proactively address ESG will be better positioned to attract and retain talent while supporting their fiduciary duties.</p>
    `,
  },

  // ======== POST 4 ========
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
    fullContent: `
      <p>Fiduciary responsibility is the cornerstone of retirement plan governance. As a plan sponsor, you have a legal and ethical duty to act in the best interests of your plan participants.</p>
      
      <h2>Understanding Your Fiduciary Role</h2>
      
      <p>Under ERISA, fiduciaries must adhere to several key principles:</p>
      
      <ul>
        <li><strong>Duty of Loyalty</strong> – Acting solely in the interest of participants and beneficiaries.</li>
        <li><strong>Duty of Prudence</strong> – Making decisions with care, skill, and diligence.</li>
        <li><strong>Duty to Diversify</strong> – Spreading investments to reduce risk.</li>
        <li><strong>Duty to Follow Plan Documents</strong> – Administering the plan according to its terms.</li>
      </ul>
      
      <h2>Practical Steps for Fiduciary Compliance</h2>
      
      <ul>
        <li><strong>Establish a formal investment policy statement</strong> – Document your investment philosophy and selection criteria.</li>
        <li><strong>Conduct regular investment reviews</strong> – Monitor fund performance and fees at least quarterly.</li>
        <li><strong>Document your process</strong> – Keep records of decisions, reviews, and rationale.</li>
        <li><strong>Engage qualified professionals</strong> – Consider hiring a 3(21) or 3(38) investment fiduciary for expertise and shared liability.</li>
        <li><strong>Stay educated</strong> – Keep up with regulatory changes and industry best practices.</li>
      </ul>
      
      <p>Working with experienced advisors and documenting your fiduciary process helps protect both you and your participants.</p>
    `,
  },

  // ======== POST 5 ========
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
    fullContent: `
      <p>Artificial intelligence is revolutionizing the retirement planning industry. From personalized advice to automated portfolio management, AI-powered tools are making retirement planning more accessible and effective than ever before.</p>
      
      <h2>AI Applications in Retirement Planning</h2>
      
      <ul>
        <li><strong>Personalized portfolio construction</strong> – AI algorithms analyze participant data to create customized asset allocations based on age, risk tolerance, and goals.</li>
        <li><strong>Dynamic rebalancing</strong> – Automated systems continuously monitor and rebalance portfolios to maintain target allocations.</li>
        <li><strong>Retirement income projections</strong> – Advanced modeling provides more accurate retirement income forecasts.</li>
        <li><strong>Behavioral coaching</strong> – AI can detect emotional reactions to market volatility and provide timely guidance.</li>
        <li><strong>Fraud detection</strong> – Machine learning identifies suspicious activities and protects participant accounts.</li>
      </ul>
      
      <h2>The Future of AI in Retirement</h2>
      
      <p>Looking ahead, we can expect even more sophisticated applications:</p>
      
      <ul>
        <li><strong>Natural language interfaces</strong> – Chatbots and voice assistants that answer participant questions in real-time.</li>
        <li><strong>Predictive analytics</strong> – Early identification of participants at risk of not meeting their retirement goals.</li>
        <li><strong>Hyper-personalized advice</strong> – Recommendations tailored to individual life circumstances and values.</li>
      </ul>
      
      <p>While AI offers tremendous potential, human advisors remain essential for complex situations, emotional support, and fiduciary oversight. The future is human + AI collaboration.</p>
    `,
  },

  // ======== POST 6 ========
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
    fullContent: `
      <p>Signed into law in late 2022, the SECURE 2.0 Act introduced sweeping changes to retirement planning. As we approach 2027, many provisions are now fully effective, and plan sponsors need to ensure compliance.</p>
      
      <h2>Key Provisions of SECURE 2.0</h2>
      
      <ul>
        <li><strong>Automatic enrollment requirements</strong> – New 401(k) and 403(b) plans must include automatic enrollment with a minimum 3% deferral (phasing up to at least 10%).</li>
        <li><strong>Increased catch-up limits</strong> – Individuals aged 60-63 can make higher catch-up contributions of up to $10,000 (indexed).</li>
        <li><strong>Student loan matching</strong> – Employers can now match student loan payments with retirement contributions.</li>
        <li><strong>Roth provisions</strong> – Roth matching contributions are now allowed, and certain distributions are required to be made to Roth accounts.</li>
        <li><strong>Savings incentives</strong> – Employers can offer small financial incentives to encourage participation.</li>
        <li><strong>Part-time worker eligibility</strong> – Part-time employees must be eligible after two years of service (reduced from three).</li>
      </ul>
      
      <h2>What Plan Sponsors Need to Do</h2>
      
      <ul>
        <li><strong>Review plan documents</strong> – Ensure your plan document reflects the new provisions.</li>
        <li><strong>Update payroll systems</strong> – Implement automatic enrollment and other changes.</li>
        <li><strong>Communicate with participants</strong> – Educate employees about new options and requirements.</li>
        <li><strong>Work with providers</strong> – Coordinate with your TPA and recordkeeper to implement changes.</li>
      </ul>
      
      <p>Staying proactive on SECURE 2.0 implementation will help you avoid compliance issues and maximize the benefits for your participants.</p>
    `,
  },

  // ======== POST 7 ========
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
    fullContent: `
      <p>For individuals aged 50 and older, catch-up contributions offer a valuable opportunity to accelerate retirement savings. These additional contributions can make a meaningful difference in retirement readiness.</p>
      
      <h2>2026 Catch-Up Contribution Limits</h2>
      
      <p>The 2026 limits are:</p>
      
      <ul>
        <li><strong>401(k), 403(b), 457(b):</strong> $7,500 additional (total $31,000 including regular limit)</li>
        <li><strong>IRA (Traditional and Roth):</strong> $1,000 additional (total $8,000)</li>
        <li><strong>SIMPLE IRA:</strong> $3,500 additional (total $19,500)</li>
      </ul>
      
      <p>Under SECURE 2.0, participants aged 60-63 will have even higher limits starting in 2027.</p>
      
      <h2>Who Should Use Catch-Up Contributions?</h2>
      
      <p>Catch-up contributions are particularly beneficial for:</p>
      
      <ul>
        <li><strong>Late starters</strong> – Those who didn't save much in their 20s and 30s.</li>
        <li><strong>High earners</strong> – Individuals with the cash flow to maximize contributions.</li>
        <li><strong>Those near retirement</strong> – Savers who need to boost their nest egg in the final years before retirement.</li>
        <li><strong>Two-income households</strong> – Families with extra household income to allocate to retirement.</li>
      </ul>
      
      <p>If you're eligible, catch-up contributions are one of the most effective ways to improve your retirement readiness. Every dollar you contribute reduces your taxable income and grows tax-deferred or tax-free (if using Roth options).</p>
    `,
  },

  // ======== POST 8 ========
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
    fullContent: `
      <p>Bond markets provide important signals about economic conditions and future expectations. For retirement investors, understanding these signals can inform asset allocation decisions and risk management.</p>
      
      <h2>Key Bond Market Indicators</h2>
      
      <ul>
        <li><strong>Yield curve</strong> – The spread between short-term and long-term yields. An inverted yield curve has historically preceded recessions.</li>
        <li><strong>Treasury yields</strong> – Risk-free rates that influence all other asset prices.</li>
        <li><strong>Credit spreads</strong> – The difference between corporate and government bond yields, indicating economic risk perception.</li>
        <li><strong>Inflation expectations</strong> – Derived from Treasury Inflation-Protected Securities (TIPS).</li>
      </ul>
      
      <h2>What Current Signals Are Saying</h2>
      
      <p>As of mid-2026, bond markets are signaling:</p>
      
      <ul>
        <li><strong>Stabilizing inflation</strong> – Long-term inflation expectations have moderated, reducing pressure on fixed income.</li>
        <li><strong>Normalizing yield curve</strong> – The inverted yield curve is returning to normal, suggesting reduced recession risk.</li>
        <li><strong>Attractive yields</strong> – Higher interest rates mean better income opportunities for retirement portfolios.</li>
      </ul>
      
      <h2>Implications for Retirement Portfolios</h2>
      
      <p>Consider these implications:</p>
      
      <ul>
        <li><strong>Bond allocations</strong> – Higher yields make bonds more attractive for income and diversification.</li>
        <li><strong>Duration management</strong> – Consider shorter duration bonds in uncertain environments.</li>
        <li><strong>Credit quality</strong> – Higher yields on corporate bonds may compensate for additional risk.</li>
      </ul>
      
      <p>Working with an advisor to interpret bond market signals can help you position your portfolio effectively.</p>
    `,
  },

  // ======== POST 9 ========
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
    fullContent: `
      <p>Auto-enrollment is one of the most effective tools for improving retirement plan participation. By automatically enrolling employees in your plan, you dramatically increase participation rates and help your workforce build a more secure retirement future.</p>
      
      <h2>Why Auto-Enrollment Works</h2>
      
      <p>Studies consistently show that auto-enrollment drives participation rates from 30-40% to 80% or higher. The key reasons:</p>
      
      <ul>
        <li><strong>Inertia</strong> – Most participants stick with the default option, making it a powerful force for good.</li>
        <li><strong>Overcomes procrastination</strong> – Many employees intend to save but never get around to enrolling.</li>
        <li><strong>Removes decision paralysis</strong> – Employees don't have to choose a contribution rate or investment option immediately.</li>
        <li><strong>Normalizes saving</strong> – When saving is the default, it becomes the social norm.</li>
      </ul>
      
      <h2>Auto-Enrollment Best Practices</h2>
      
      <ul>
        <li><strong>Set an appropriate default rate</strong> – Start at 6% and consider an auto-escalation feature that increases contributions annually.</li>
        <li><strong>Choose a qualified default investment</strong> – Typically a target-date fund or balanced fund that aligns with the participant's expected retirement date.</li>
        <li><strong>Provide opt-out options</strong> – Participants should always have the ability to opt out or change their contribution rate.</li>
        <li><strong>Communicate clearly</strong> – Ensure employees understand the auto-enrollment process, default investments, and their rights.</li>
        <li><strong>Consider auto-escalation</strong> – Automatic annual increases help participants reach savings goals more quickly.</li>
      </ul>
      
      <h2>Legal and Compliance Considerations</h2>
      
      <p>When implementing auto-enrollment, be aware of:</p>
      
      <ul>
        <li><strong>Notice requirements</strong> – Employees must receive proper notice before auto-enrollment takes effect.</li>
        <li><strong>Grace periods</strong> – Participants must have the opportunity to opt out before contributions begin.</li>
        <li><strong>State auto-IRA programs</strong> – Some states have their own auto-enrollment programs that may affect your plan.</li>
      </ul>
      
      <p>Auto-enrollment is a proven strategy for improving retirement outcomes. Working with your TPA and recordkeeper, you can design an auto-enrollment program that works for your organization and your employees.</p>
    `,
  },
];

// ============================================================
// EXPORT – for use in BlogDetail component
// ============================================================

export { allBlogPosts };

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
                    <NavLink to={`/blog/${post.id}`} className="blog-card-link">
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

      {/* ===== FOOTER ===== */}
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