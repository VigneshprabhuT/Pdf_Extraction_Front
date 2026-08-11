import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa';
import "../../css/AdvisorPartnership.css"
import logo from "../../images/Team.png"

const AdvisorPartnership = () => {
  return (
    <>
      <main className="AdvisorPartnership-page">
        {/* Hero / Header Section */}
        <div className="AdvisorPartnership-hero">
          <div className="AdvisorPartnership-hero-content">
            <h1>Advisor Partnership</h1>
          </div>
        </div>

        {/* Introduction Section – full width text */}
        <section className="AdvisorPartnership-types-section">
          <div className="AdvisorPartnership-inner">
            <div className="AdvisorPartnership-types-grid">
              {/* Left - Content */}
              <div className="AdvisorPartnership-types-list-wrapper">
                <h2>Making the Complex simple</h2>
                <p>
                  Our team of enrolled actuaries, with a combined 80 years of experience, 
                  are ready to tackle any project. We revel in crunching numbers and presenting 
                  complex options in simple ways.
                </p>
                <p>
                    EGPS partners with TPAs across the country to provide white-label work on all 
                    types of defined benefit and cash balance plans. We offer proposals and illustrations 
                    for your clients so they can see the power of a defined benefit plan.
                </p>
                <div className="AdvisorPartnership-services-special">
                  <h4>Cash Balance Resources</h4>
                  <ul className="AdvisorPartnership-type-list">
                    <li>Save valuable time</li>
                    <li>Ensure plan compliance</li>
                    <li>ERISA retirement plan experts on your team, always ready to help</li>
                  </ul>
                </div>
              </div>

              {/* Right - Image */}
              <div className="AdvisorPartnership-types-image">
                <img src={logo} alt="Retirement plan compliance experts" />
              </div>
            </div>
          </div>
        </section>

    
        {/* Compliance Projects – with image + list */}
        <section className="AdvisorPartnership-section">
          <div className="AdvisorPartnership-inner AdvisorPartnership-grid">
            {/* Left: Image */}
            <div className="AdvisorPartnership-image">
              <img src={logo} alt="Retirement plan compliance expertise" />
            </div>

            {/* Right: Content */}
            <div className="AdvisorPartnership-content">
              <h2>WHY EGPS</h2>
              <p>
                Fast turnaround time. We pride ourselves on timely results, typically providing illustrations and re­quested deliverables back to our TPA partners within 2 weeks of receiving complete data.

Low risk. We don’t do contracts or obligations. Simply send us a project and if you enjoy the EGPS experience, feel free to send us more. No pressure.

Reasonable cost. Our goal is to help your busi­ness grow and profit with defined benefit and cash balance plans, so we price our work accordingly.

Communication. We communicate frequently with you, our client, but don’t communicate with your clients unless you request it. We simply work in the background.


              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="call-AdvisorPartnership-section">
          <div className="call-AdvisorPartnership-inner">
            <h2>Increase Client Satisfaction, Loyalty and Profitability</h2>
            <p>
              We partner with you to provide quality service to your clients. By adding defined benefit and cash balance plans to the services your firm offers, you can provide additional benefits to your clients, increasing loyalty and the profitability of your business. Contact us to discuss how we can help your bottom line. We’re here to help.
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
                  <a href="/advisor-partnership">Advisor Partnership</a>
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
  )
}

export default AdvisorPartnership