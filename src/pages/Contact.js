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
import Contactus from '../images/Contact.png'
import "../css/About.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
  return (
    <>
    <main className="contact-page">
      <div className="About_back">
           <img src={Contactus} alt="Banner" className="contact-banner" />
        <div className="contact-content">
            <h1>Our Partners &amp; Clients</h1>

            <p className="hero-lede">
            At EGPS, we serve a variety of distinct clients. We work with advisors,
            employers, CPAs, and attorneys to deliver innovative retirement plan
            solutions, no matter how complex the scenario. We also partner with
            other TPAs to bring them the best in actuarial services and consulting.
            </p>
        </div>
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

export default Contact;