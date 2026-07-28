import React from "react";
import { 
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";
import logo from "../images/logo.png";
import "../css/Contact.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <main className="contact-page">
        <div className="contact_back">
          <div className="contact-content">
            <h1>We're Ready to Help</h1>
            <p className="hero-lede">
              With a growing national presence of experts across Chennai, we're
              ready to support your retirement plan needs. Learn more about how
              we can help you achieve your goals.
            </p>
          </div>
        </div>

        {/* ===== Contact Form & Info Section ===== */}
        <section className="contact-form-section">
          <div className="contact-form-inner">
            <div className="contact-info-block">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our retirement plan solutions? Our team of
                experts is here to help. Fill out the form or reach us directly.
              </p>
              <ul className="contact-details-list">
                <li><strong>Phone:</strong> (555) 123‑4567</li>
                <li><strong>Email:</strong> info@egps.com</li>
                <li><strong>Address:</strong> 123 Financial Plaza, Suite 400, Chennai, India</li>
              </ul>
              <div className="office-hours">
                <h4>Office Hours</h4>
                <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                <p>Sat – Sun: Closed</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" rows="5" placeholder="Tell us how we can help..." required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        {/* ===== Map Section ===== */}
        <section className="contact-map-section alt">
          <div className="map-inner">
            <h2>Find Us</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6078238830227!2d80.24561531537665!3d13.05234019079361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d6b8d4b2f3%3A0x4a0d5d8e0f5c6d7!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1650000000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </section>
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