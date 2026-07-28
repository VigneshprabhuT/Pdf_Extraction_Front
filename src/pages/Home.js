import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Home.css";
import {
  FaFileLines,
  FaFolderOpen,
  FaHandshake,
  FaClipboardList,
  FaPenToSquare,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa6";
import logo from "../images/logo.png";

const services = [
  {
    icon: <FaFileLines />,
    title: "Retirement Plan Design",
    text: "We'll design an individualized plan to meet the unique needs of your organization.",
  },
  {
    icon: <FaFolderOpen />,
    title: "Administration & Consulting",
    text: "We handle all the complex administrative work and provide a dedicated Retirement Plan Consultant.",
  },
  {
    icon: <FaHandshake />,
    title: "Actuarial Consulting",
    text: "Our actuaries revel in crunching numbers and presenting complex options in simple ways.",
  },
  {
    icon: <FaClipboardList />,
    title: "3(16) Fiduciary Services",
    text: "We'll reduce your responsibilities and risk, while keeping your plan in compliance.",
  },
  {
    icon: <FaPenToSquare />,
    title: "Compliance Consulting",
    text: "Our team provides expert consulting on special retirement plan compliance projects.",
  },
];

const Home = () => {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="hero section">
        <h1>Retirement Plan Solutions, Simplified.</h1>
        <p>
          We help advisors, partners, and employers achieve their goals,
          providing exceptional service and superior retirement plans for
          better futures.
        </p>
        <button className="btn-primary">Our Services</button>
      </section>

      {/* ===== Our Services ===== */}
      <section id="services" className="our-services section">
        <h2>Our Services</h2>
        <p className="services-intro">
          We are a third-party administrator and so much more. At EGPS, we
          provide industry-leading plan design, administration, actuarial
          consulting, and 3(16) fiduciary services for all types of
          retirement plans. We can join your team and help you reach your
          goals. See how.
        </p>

        <div className="grid services-grid">
          {services.map((s) => (
            <div className="card service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Retirement Plan Solutions ===== */}
      <section className="plan-solutions section">
        <h2>Tax-advantaged equity compensation and savings benefit plans from the trusted team at EGPS Ventures.</h2>
        <div className="grid plan-grid">
          <div className="card plan-card">
            <h3>Employee Stock Ownership Plans (ESOP)</h3>
            <p>
              Give your employees a stake in your company's financial success.
              We make certain you meet regulatory requirements, keep accurate
              records, communicate timely to participants, and ultimately guide
              your employees toward a meaningful retirement.
            </p>
          </div>
          <div className="card plan-card">
            <h3>Defined Contribution Plans — 401(k)</h3>
            <p>
              We design qualified retirement plans and ensure they comply with
              all legal requirements. Let us handle the document preparation,
              governmental reporting, and annual nondiscrimination testing for
              your plan – so you can focus on your business.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Trusted Partner (Blue Ridge) ===== */}
      <section className="trusted-partner section">
        <div className="trusted-inner">
          <h2>The Trusted Partner for Retirement Plan Professionals and Sponsors</h2>
          <p>
            Serving since 1966, Blue Ridge is a leading provider of
            administration solutions for employer-sponsored, tax-advantaged
            equity compensation and savings benefit plans. Our highly skilled
            team members provide a full suite of technology-enabled
            compliance services. Our integrated, best-of-breed delivery model
            and established network of strategic distribution partners make
            it easy for employers to provide wealth-building benefits to
            employees.
          </p>
          <a href="/about" className="btn-secondary">
            Learn more about Blue Ridge
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* CTA banner */}
        <div className="footer-cta">
          <div className="footer-cta-inner">
            <div>
              <h3>Ready to build a better plan?</h3>
              <p>Talk to a Retirement Plan Consultant about your organization's goals.</p>
            </div>
            <a href="/contact" className="btn-primary">Get in Touch</a>
          </div>
        </div>

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

export default Home;