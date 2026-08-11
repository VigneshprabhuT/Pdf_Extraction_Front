import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import logo from "../../images/Contact.png";           // adjust path to your logo
import "../../css/Rete_plan_design.css";       // we'll create this CSS file
import { NavLink } from "react-router-dom";

const Rete_plan_design = () => {
  return (
    <>
      <main className="retirement-page">
        {/* Hero / Header Section */}
        <div className="retirement-hero">
          <div className="retirement-hero-content">
            <h1>Retirement Plans Design</h1>
          </div>
        </div>

        
        {/* Plan Types Section — UPDATED with two‑column layout */}
        <section className="plan-types-section">
          <div className="section-inner">
            <div className="plan-types-grid">
              {/* Left column: text */}
              <div className="plan-types-text">
                <p className="hero-lede">
                  At EGPS, we know each client’s needs are unique. That’s why we
                  take the time to thoroughly understand our client’s business and
                  goals before we create a retirement plan design. Our team of
                  experts carefully crafts each plan to help clients and their
                  employees get the most out of their retirement savings. From
                  maximizing available tax deductions to retaining employees, we
                  develop plans to meet our client’s specific needs.
                </p>
              </div>

              {/* Right column: plan list in multi‑column layout */}
              <div className="plan-types-list-wrapper">
                <h4>
                  We provide plan design and administration for a wide variety of
                  plan types, including:
                </h4>
                <ul className="plan-type-list">
                  <li>401(k) profit sharing</li>
                  <li>Defined benefit</li>
                  <li>Cash balance</li>
                  <li>MEP/PEP aggregated</li>
                  <li>Non‑qualified</li>
                  <li>Prevailing wage</li>
                  <li>403(b)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Expertise Section */}
        <section className="expertise-section">
          <div className="section-inner expertise-grid">

            {/* Left: Image */}
            <div className="expertise-image">
              <img
                src={logo}
                alt="Retirement plan expertise"
              />
            </div>

            {/* Right: Content */}
            <div className="expertise-content">
              <h2>Expertise You Can Trust</h2>
              <p>
                With 50 years of experience in the industry, we understand the
                complexities of retirement plan design. Our compliance professionals
                are experts on all the various plan types and combinations, and can
                explain the pros and cons of each. We’re ready to create the very
                best solutions for each client, and then keep their plan running
                smoothly.
              </p>
            </div>

          </div>
        </section>

        {/* Redesign Section */}
        <section className="redesign-section">
          <div className="section-inner redesign-grid">

            {/* Left: Content */}
            <div className="redesign-content">
              <h2>Is It Time For a Redesign?</h2>

              <p>
                When last year’s plan does not fit this year’s needs, our expert
                consultants are here to help. We can help determine if a plan needs
                adjusting due to shifting employee demographics, business growth, or
                legislation changes.
              </p>

              <p>
                Our consultants are ready to help update plans by reassessing our
                clients’ needs and priorities, while including any required plan
                amendments.
              </p>
            </div>

            {/* Right: Image */}
            <div className="redesign-image">
              <img src={logo} alt="Retirement plan redesign"/>
            </div>

          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="section-inner">
            <h2>We're Ready to Help</h2>
            <p>
              Whether you’re looking to start a new plan or evaluate a current one,
              we’re here and ready to answer your questions.
            </p>
            <a href="/contact-us" className="btn-primary">
              Start the Conversation
            </a>
          </div>
        </section>
      </main>

      {/* ===== Footer – exactly as in your Contact page ===== */}
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

export default Rete_plan_design;