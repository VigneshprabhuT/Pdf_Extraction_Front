import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
  FaClipboardList,
  FaMoneyCheckAlt,
  FaUserPlus,
  FaComments,
  FaHandsHelping,
  FaFileAlt,
} from 'react-icons/fa';
import "../../css/FiduciaryServices.css"
import logo from "../../images/Home.png"

const FiduciaryServices = () => {
  return (
    <>
      <main className="Fiduciary-page">
        {/* Hero / Header Section */}
        <div className="Fiduciary-hero">
          <div className="Fiduciary-hero-content">
            <h1>3(16) Fiduciary Services</h1>
          </div>
        </div>

        {/* Introduction Section – full width text */}
        <section className="Fiduciary-types-section">
          <div className="Fiduciary-inner">
            <div className="Fiduciary-types-grid">
              {/* Left - Content */}
              <div className="Fiduciary-types-list-wrapper">
                <h2>Why it's Important</h2>
                <p>
                  Along with all the awesome benefits of sponsoring a retirement plan,
                  business owners are also held legally responsible for the compliance of the plan.
                  This is called fiduciary liability. Most employers aren’t familiar with all
                  the rules and regulations established by the IRS and DOL, so this can seem impossible.
                  That’s why outsourcing the administrative tasks associated with plan compliance
                  can be a great option. EGPS offers these services, known as 3(16) fiduciary services,
                  or 3(16) plan administration. Outsource the time-consuming tasks and compliance associated
                  with your retirement plan to EGPS.
                </p>
                <div className="Fiduciary-services-special">
                  <h4>Benefits of our 3(16) fiduciary services:</h4>
                  <ul className="Fiduciary-type-list">
                    <li>Save valuable time</li>
                    <li>Ensure plan compliance</li>
                    <li>ERISA retirement plan experts on your team, always ready to help</li>
                  </ul>
                </div>
              </div>

              {/* Right - Image */}
              <div className="Fiduciary-types-image">
                <img src={logo} alt="Retirement plan compliance experts" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== NEW SECTION: Reduce Work and Responsibility (Card Grid) ===== */}
        <section className="Fiduciary-reduce-section">
          <div className="Fiduciary-inner">
            <div className="Fiduciary-reduce-header">
              <h2>Reduce Work and Responsibility</h2>
              <p className="reduce-subhead">
                Running a retirement plan can be difficult and complex. EGPS can take these tasks off your plate.
              </p>
            </div>
            <div className="Fiduciary-reduce-grid">
              {/* Card 1 */}
              <div className="reduce-card">
                <div className="reduce-card-icon">
                  <FaClipboardList />
                </div>
                <h3>Plan Design &amp; Record Retention</h3>
                <ul>
                  <li>Collect and maintain copies of signed Plan Documents</li>
                  <li>Make copies of Plan Documents available to participants upon request</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="reduce-card">
                <div className="reduce-card-icon">
                  <FaMoneyCheckAlt />
                </div>
                <h3>Payroll Review &amp; Integration</h3>
                <ul>
                  <li>Review payroll and automatic participant enrollment to confirm accuracy</li>
                  <li>Monitor timeliness salary deferrals and loan repayments to the plan</li>
                  <li>Review payroll and participant elections to confirm the accuracy</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="reduce-card">
                <div className="reduce-card-icon">
                  <FaUserPlus />
                </div>
                <h3>Participant Enrollment</h3>
                <ul>
                  <li>Determine eligibility throughout the plan year</li>
                  <li>Review and disseminate materials to eligible participants</li>
                  <li>Approve Rollover Contribution into the Plan</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="reduce-card">
                <div className="reduce-card-icon">
                  <FaComments />
                </div>
                <h3>Employee Communication</h3>
                <ul>
                  <li>Provide necessary plan-related disclosures to participants</li>
                  <li>Field participant related questions</li>
                  <li>Attempt to locate missing participants</li>
                </ul>
              </div>

              {/* Card 5 */}
              <div className="reduce-card">
                <div className="reduce-card-icon">
                  <FaHandsHelping />
                </div>
                <h3>Loan Administration &amp; Distribution Review</h3>
                <ul>
                  <li>Administer plan’s loan policy, including the review and approval</li>
                  <li>Review and approve distributions, including Hardships, QDRO &amp; RMD</li>
                  <li>Administer the plan’s mandatory/forced distribution policy</li>
                </ul>
              </div>

              {/* Card 6 */}
              <div className="reduce-card">
                <div className="reduce-card-icon">
                  <FaFileAlt />
                </div>
                <h3>Plan Compliance &amp; Reporting</h3>
                <ul>
                  <li>Ensure compliance testing is complete and corrective actions are conveyed</li>
                  <li>Prepare and Sign Form 5500 and/or Form 8955 SSA</li>
                  <li>Sign and file Forms 1099R and 945 (as needed)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Projects – with image + list */}
        <section className="Fiduciary-section">
          <div className="Fiduciary-inner Fiduciary-grid">
            {/* Left: Image */}
            <div className="Fiduciary-image">
              <img src={logo} alt="Retirement plan compliance expertise" />
            </div>

            {/* Right: Content */}
            <div className="Fiduciary-content">
              <h2>COMPLIANCE PROJECTS: WHAT WE DO</h2>
              <p>
                Whether it’s navigating intricate plan amendments, providing audit support, or implementing strategic
                compliance solutions for prior year errors, the EGPS Compliance Team is committed to providing tailored
                guidance and support. Below are just a few of the special compliance consulting projects we tackle:
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="call_Fiduciary-section">
          <div className="call-Fiduciary-inner">
            <h2>HAVE A POTENTIAL PROBLEM? WE GOT YOU.</h2>
            <p>
              Do you have a retirement plan compliance question or a scenario that requires
              some attention? We’re ready to help! Trust in our expertise to confidently guide
              you through every compliance hurdle.
            </p>
            <a href="/contact-us" className="btn-primary">
              Contact Us
            </a>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
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
                <li>
                  <NavLink to="/about-us">About</NavLink>
                </li>
                <li>
                  <a href="/Careers">Careers</a>
                </li>
                <li>
                  <a href="/contact-us">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="/retirement-plan-design">Retirement Plan Design</a>
                </li>
                <li>
                  <a href="/retirement-plan-compliance">Compliance</a>
                </li>
                <li>
                  <a href="/3(16)-fiduciary-services">3(16) Fiduciary Services</a>
                </li>
                <li>
                  <a href="/services">Advisor Partnership</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="/insights">Insights</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a href="/testimonials">Case Studies</a>
                </li>
              </ul>
            </div>

            <div className="footer-col footer-newsletter">
              <h4>Stay Informed</h4>
              <p>Plan updates and compliance news, occasionally in your inbox.</p>
              <form
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Work email"
                  aria-label="Work email"
                  required
                />
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

export default FiduciaryServices;