import React from "react";
import { 
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
  FaBullseye,
  FaEye,
  FaHandshake,
  FaClipboardCheck,
  FaUsers,
  FaStar,
  FaRocket,
 } from "react-icons/fa";
import logo from "../images/logo.png"; // adjust path to match your project structure
import "../css/About.css";
import { NavLink } from "react-router-dom";

const About = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
  return (
    <>
    <main className="about-page">
      <div className="About_back">
        <div className="about-content">
            <h1>Our Partners &amp; Clients</h1>

            <p className="hero-lede">
            At EGPS, we serve a variety of distinct clients. We work with advisors,
            employers, CPAs, and attorneys to deliver innovative retirement plan
            solutions, no matter how complex the scenario. We also partner with
            other TPAs to bring them the best in actuarial services and consulting.
            </p>
        </div>
      </div>
      {/* ===== Hero ===== */}
      <section className="about-hero">

        <nav className="partner-index">
            <button onClick={() => scrollToSection("advisors")}>
                <span className="tag">ADV</span>
            </button>

            <button onClick={() => scrollToSection("employers")}>
                <span className="tag">EMP</span> 
            </button>

            <button onClick={() => scrollToSection("tpas")}>
                <span className="tag">TPA</span> 
            </button>

            <button onClick={() => scrollToSection("recordkeepers")}>
                <span className="tag">RK</span>
            </button>
        </nav>
      </section>

      {/* ===== Advisors ===== */}
      <section id="advisors" className="partner-section advisors">
        <div className="partner-media" aria-hidden="true">
          <svg viewBox="0 0 340 340" className="ledger-art" xmlns="http://www.w3.org/2000/svg">
            <rect x="46" y="34" width="200" height="256" rx="6" fill="#FAFBFC" stroke="#16274e" strokeWidth="2" />
            <rect x="70" y="34" width="200" height="256" rx="6" fill="#FFFFFF" stroke="#16274e" strokeWidth="2" />
            <line x1="94" y1="76" x2="230" y2="76" stroke="#D8DEE8" strokeWidth="2" />
            <line x1="94" y1="98" x2="230" y2="98" stroke="#D8DEE8" strokeWidth="2" />
            <line x1="94" y1="120" x2="196" y2="120" stroke="#D8DEE8" strokeWidth="2" />
            <polyline points="94,236 122,206 150,222 178,168 206,186 230,144"
              fill="none" stroke="#A9812F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="230" cy="144" r="6" fill="#A9812F" />
            <circle cx="252" cy="266" r="34" fill="#16274e" />
            <path d="M238 266 l10 10 l20 -22" fill="none" stroke="#F1F3F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="partner-copy">
          <span className="tag">ADV</span>
          <h2>Advisors</h2>
          <p>
            We believe a good TPA is an advisor&rsquo;s best ally. Partner with us
            for innovative and creative solutions backed by excellent service.
          </p>
          <p>
            We provide you with the right tools,{" "}
            <a href="https://egps.com/resources/">resources</a>, and expertise to
            serve your clients and prospects. We work behind the scenes,{" "}
            <a href="https://egps.com/our-services/plan-design/">creating designs</a>{" "}
            for tax advantages and maximized savings. We&rsquo;ll develop custom
            solutions and proposals for your clients, along with expert advice
            from our credentialed professionals.
          </p>
        </div>
      </section>

      {/* ===== Employers ===== */}
      <section id="employers" className="partner-Employee alt">
        <div className="partner-copy full">
          <span className="tag">EMP</span>
          <h2>Employers</h2>
          <p>
            At EGPS, we take the time to understand clients&rsquo; goals, and work
            to provide solutions tailored to their needs. We join their team and
            help them:
          </p>
          <ul className="ledger-list">
            <li>Attract and retain talent</li>
            <li>Maximize tax benefits &amp; minimize risk</li>
            <li>Save for their dreams</li>
          </ul>
          <p>
            We continuously strive to provide the best service in the industry,
            providing each client one expert Retirement Plan Consultant dedicated
            to their needs.
          </p>
        </div>
      </section>

      {/* ===== TPAs ===== */}
      <section id="tpas" className="partner-Tpa">
        <div className="partner-copy full">
          <span className="tag">TPA</span>
          <h2>Third Party Administrators (TPAs)</h2>
          <p>
            With 50 years of experience in the defined benefit field, we are
            well-equipped to serve as your back-office team on all types of
            defined benefit plans. We will white-label our work and run
            complimentary proposals for your clients.
          </p>
        </div>
      </section>

      {/* ===== Recordkeepers ===== */}
      <section id="recordkeepers" className="partner-rk alt">
        <div className="partner-copy full">
          <span className="tag">RK</span>
          <h2>Recordkeepers</h2>
          <p>
            We work with a wide array of recordkeepers, allowing our partners and
            clients to choose which one best fits their needs.
          </p>
        </div>
      </section>
    <div className="Our_full_process">
      {/* ===== NEW: Our Purpose (Credo, Mission, Vision) ===== */}
        <section className="purpose-section">
          <div className="purpose-inner">
            <span className="eyebrow">Our Purpose</span>
            <h2>Why We Exist</h2>
            <div className="purpose-grid">
              <div className="purpose-card credo">
                <div className="purpose-icon">
                  <FaRocket />
                </div>
                <h3>Credo</h3>
                <p>We believe all people deserve the opportunity to build wealth.</p>
              </div>
              <div className="purpose-card mission">
                <div className="purpose-icon">
                  <FaBullseye />
                </div>
                <h3>Mission</h3>
                <p>
                  We make it easy for retirement plan professionals and sponsors to
                  provide wealth building benefits to business owners and their
                  employees.
                </p>
              </div>
              <div className="purpose-card vision">
                <div className="purpose-icon">
                  <FaEye />
                </div>
                <h3>Vision</h3>
                <p>
                  We want to see more people achieve financial independence, enjoy a
                  meaningful retirement and leave a legacy for their family.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NEW: Our Values ===== */}
        <section className="values-section alt">
          <div className="values-inner">
            <span className="eyebrow">Our Values</span>
            <h2>What Guides Us</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <FaClipboardCheck />
                </div>
                <h3>Precision</h3>
                <p>We keep accurate records and deliver timely, error‑free services.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaHandshake />
                </div>
                <h3>Efficacy</h3>
                <p>
                  We support our clients’ success by ensuring they meet regulatory
                  requirements, communicate to participants, and guide employees toward
                  retirement.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaUsers />
                </div>
                <h3>Advocacy</h3>
                <p>
                  We are a strong voice for favorable regulatory and legislative
                  requirements that allow employers to easily offer retirement benefit
                  plans.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaHandshake />
                </div>
                <h3>Collaboration</h3>
                <p>
                  We are a reliable and trusted resource alongside our clients,
                  partners, and teammates.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaStar />
                </div>
                <h3>Excellence</h3>
                <p>
                  We proactively provide professional, high‑touch, personalized care
                  to all.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>

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
              <li><a href="/industries">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
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

export default About;