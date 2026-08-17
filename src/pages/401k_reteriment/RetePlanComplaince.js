import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import logo from "../../images/AboutEmployee.png";
import planComplaince from "../../images/401kimges/PlanComplaince.png"          
import "../../css/Rete_plan_Complaince.css";          
import { NavLink } from "react-router-dom";

const RetePlanComplaince = () => {
  return (
    <>
      <main className="complaince-page">
        {/* Hero / Header Section */}
        <div className="complaince-hero">
          <div className="complaince-hero-content">
            <h1>Retirement Plan Compliance</h1>
          </div>
        </div>

        {/* Introduction Section – full width text */}
        <section className="complaince-types-section">
        <div className="complaince-inner">
            <div className="complaince-types-grid">

            {/* Left - Content */}
            <div className="complaince-types-list-wrapper">
                <h4>COMPLIANCE EXPERTS ON YOUR TEAM</h4>

                <p>
                Retirement plan compliance is complex, and that’s an understatement –
                but EGPS is here to help. We provide plan sponsors with expert
                compliance insight and guidance on special projects, because we know
                not everyone loves studying retirement plan rules and regulations in
                their spare time.
                </p>

                <p>
                The EGPS Compliance Team is composed of seasoned retirement plan ERISA
                experts dedicated to ensuring that plans adhere to the highest
                standards of regulatory compliance. With a deep understanding of the
                complexities surrounding retirement legislation, our team is
                well-equipped to tackle any retirement plan issue.
                </p>
            </div>

            {/* Right - Image */}
            <div className="complaince-types-image">
                <img
                src={logo}
                alt="Retirement plan compliance experts"
                />
            </div>

            </div>
        </div>
        </section>

        {/* Compliance Projects – with image + list */}
        <section className="complaince-section">
          <div className="complaince-inner complaince-grid">
            {/* Left: Image */}
            <div className="complaince-image">
              <img src={planComplaince} alt="Retirement plan compliance expertise" />
            </div>

            {/* Right: Content */}
            <div className="complaince-content">
              <h2>COMPLIANCE PROJECTS: WHAT WE DO</h2>
              <p>
                Whether it’s navigating intricate plan amendments, providing audit support, or implementing strategic
                compliance solutions for prior year errors, the EGPS Compliance Team is committed to providing tailored
                guidance and support. Below are just a few of the special compliance consulting projects we tackle:
              </p>
              <ul className="Complaince-type-list">
                <li>Aggregated coverage testing</li>
                <li>Correction of missed deferral opportunities</li>
                <li>Plan document compliance issues (ex: missing restatements for prior years)</li>
                <li>IRS audit support</li>
                <li>Delinquent 5500s</li>
                <li>ADP/ACP testing for prior years</li>
                <li>Plan merger analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="call_Complaince-section">
          <div className="call-Complaince-inner">
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

      {/* ===== Footer – unchanged ===== */}
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

export default RetePlanComplaince;