import React from "react";
import { 
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";
import logo from "../images/logo.png";
import "../css/Team.css";
import { NavLink } from "react-router-dom";
import Daniel from "../images/Team/Daniel.png";
import Dawn from "../images/Team/Dawn.png"
import Ryan from "../images/Team/Ryan.png"
import Raja from "../images/Team/Raja.png"
import parthiban from "../images/Team/Parthipan.png"

const Team = () => {
  return (
    <>
      <main className="Team-page">
        <div className="Team_back">
          <div className="Team-content">
            <h1>Executive Team</h1>
          </div>
        </div>
        
        
        {/* ----- NEW SECTION ----- */}
        <section className="leadership-team">
          <div className="container">
            <h2 className="section-title">Our Sales and Leadership Team</h2>

            {/* CEO */}
            <div className="team-member">
              <div className="member-image">
                <img 
                  src={Daniel}
                  alt="CEO" 
                />
              </div>
              <div className="member-info">
                <h3>Daniel Liss, EA, MSPA</h3>
                <span className="designation">Chief Executive Officer</span>
                <p>
                  Daniel’s passion for helping people build their goals and dreams guides the strategic
                  direction and vision of EGPS. He joined EGPS in 2003, became an enrolled actuary in 2009,
                  and now uses his 18 years of industry experience to lead the company as CEO. Over the years, 
                  he has built the business through acquisitions and a strong sales team
                </p>
              </div>
            </div>

            {/* Director */}
            <div className="team-member">
              <div className="member-image">
                <img 
                  src={Dawn}
                  alt="Director" 
                />
              </div>
              <div className="member-info">
                <h3>Dawn Genz</h3>
                <span className="designation">Chief Operating Officer</span>
                <p>
                  In an industry dedicated to realizing people’s aspirations, 
                  Dawn stands out for her talent in deeply understanding client 
                  needs and seamlessly integrating their unique business needs 
                  with tailored retirement plan design and administration. 
                  Assuming the role of Chief Operating Officer
                  at EGPS on January 1, 2019, she brought with her over 29 years of 
                  extensive industry expertise. Dawn’s diverse background spans sales, 
                  ERISA consulting, investment advising, educational initiatives, and retirement plan administration.
                   Her expertise is evident in her execution of strategic business plans,
                  efficient streamlining of end-to-end office operations, unwavering commitment to financial integrity,
                  navigation of complex change management, and implementation of effective risk management strategies,
                  all while evaluating performance metrics.
                </p>
              </div>
            </div>

            {/* Manager */}
            <div className="team-member">
              <div className="member-image">
                <img 
                  src={Ryan} 
                  alt="Manager" 
                />
              </div>
              <div className="member-info">
                <h3>Ryan Beaver</h3>
                <span className="designation">Director of International Operations</span>
                <p>
                  Ryan Beaver is an accomplished ERISA professional with almost 20 years of experience in the retirement industry. As the Director of International Operations at EGPS, Ryan oversees all aspects of the company’s Chennai, India office, managing day-to-day operations, strategic initiatives, and fostering a cohesive, collaborative environment between U.S.-based and international teams to drive operational excellence and unified service to clients.
                  Prior to this role, Ryan served as the Manager of the Plan Documents Team at EGPS, where he expertly managed document-related processes, projects, and provided critical consultative retirement plan design support to the Sales team and referral partners. Before joining EGPS, he was the Director of the Plan Documents and Compliance Department for a leading Third-Party Administrator (TPA) and recordkeeper, reporting directly to an ERISA attorney, refining his expertise in regulatory compliance and legal plan document management and drafting.
                </p>
              </div>
            </div>
          </div>

        {/* Director */}
            <div className="team-member">
              <div className="member-image">
                <img 
                  src={Raja}
                  alt="Director" 
                />
              </div>
              <div className="member-info">
                <h3>Iruthaya Raja</h3>
                <span className="designation">Managing Director</span>
                <p>
                  Iruthaya Raja is a seasoned Managing Director with more than 13.5 years of professional
                    experience. In his leadership role, he oversees critical aspects of organizational strategy,
                    business development, compliance, and operational excellence. He plays a central role in
                    aligning corporate vision with long-term objectives, ensuring sustainable growth,
                    accountability, and innovation across all functions. His strategic direction has been
                    instrumental in driving initiatives that strengthen ef􀏐iciency, enhance competitiveness,
                    and foster a culture of transparency and collaboration.
                    Throughout his career, Iruthaya Raja has developed extensive expertise in diverse areas of
                    management, including corporate governance, process optimization, risk management,
                    and strategic planning. His passion for automation has been a de􀏐ining aspect of his
                    professional journey, enabling him to implement forward-thinking solutions that
                    streamline operations, reduce inef􀏐iciencies, and create scalable systems for growth.
                    Recognized for his analytical mindset and ability to anticipate industry trends, he
                    consistently provides insights that safeguard long-term stability while achieving shortterm
                    milestones.
                </p>
              </div>
            </div>

            {/* Director */}
            <div className="team-member">
              <div className="member-image">
                <img 
                  src={parthiban}
                  alt="Director" 
                />
              </div>
              <div className="member-info">
                <h3>Parthiban Ganesan</h3>
                <span className="designation">Associate Vice President</span>
                <p>
                  Parthiban Ganesan brings 13 years of proven leadership in business management and
                operations. As Associate Vice President, he manages teams, oversees operations, and
                drives strategic initiatives that contribute to sustainable business growth. His role
                emphasizes aligning organizational strategies with operational excellence, fostering
                collaboration, and ensuring the successful execution of projects that deliver measurable
                impact.
                Throughout his career, Parthiban has developed expertise in leadership, project
                management, and business operations, particularly within the 401(k) Retirement process.
                His ability to streamline work􀏐lows, implement effective strategies, and guide teams
                toward achieving organizational objectives has been instrumental in enhancing ef􀏐iciency
                and supporting long-term success.
                </p>
              </div>
            </div>  
        </section>
        {/* ----- END NEW SECTION ----- */}
        
      </main>

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
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
                <li><a href="/services">Retirement Plan Design</a></li>
                <li><a href="/services">Compliance</a></li>
                <li><a href="/services">401(k) Combined</a></li>
                <li><a href="/services">Advisor Partnership</a></li>
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

export default Team;