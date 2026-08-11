import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
  FaUsers,
  FaChartLine,
  FaHeartbeat,
  FaGraduationCap,
  FaBalanceScale,
  FaHandshake,
  FaClock,
  FaFileAlt,
  FaUserCheck,
  FaStar,
  FaBriefcase,
  FaShieldAlt,
} from "react-icons/fa";
import logo from "../images/logo.png";
import "../css/Career.css";
import { NavLink, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Career = () => {

const employees = [
  {
    image: require("../images/Team/Daniel.png"),
    name: "Irit",
    designation: "Senior Engineer",
    location: "Israel",
    quote:
      "EGPS gave me the opportunity to grow professionally while working with an amazing team.",
  },
  {
    image: require("../images/Team/Dawn.png"),
    name: "John",
    designation: "Plan Administrator",
    location: "USA",
    quote:
      "The work environment is collaborative and everyone supports each other.",
  },
  {
    image: require("../images/Team/Ryan.png"),
    name: "Sarah",
    designation: "Compliance Analyst",
    location: "Canada",
    quote:
      "I've learned so much here and continue to grow every day.",
  },
];

  const openPositions = [
    {
      title: "Retirement Plan Administrator",
      department: "Plan Administration",
      location: "On-site",
      type: "Full-Time",
    },
    {
      title: "ERISA Compliance Analyst",
      department: "Compliance",
      location: "On-site",
      type: "Full-Time",
    },
    {
      title: "Actuarial Consultant",
      department: "Actuarial Services",
      location: "On-site",
      type: "Full-Time",
    },
    {
      title: "Client Relationship Manager",
      department: "Advisor Partnerships",
      location: "On-site",
      type: "Full-Time",
    },
  ];

  const whyJoinUs = [
    {
      icon: <FaChartLine />,
      title: "Growth-Focused Culture",
      desc: "Clear paths for advancement backed by ongoing training and mentorship.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Health & Wellness",
      desc: "Comprehensive medical, dental, and vision coverage for you and your family.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Learning & Development",
      desc: "Support for certifications, continuing education, and industry credentials.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Work-Life Balance",
      desc: "Flexible hybrid and remote arrangements built around real life.",
    },
    {
      icon: <FaUsers />,
      title: "Collaborative Teams",
      desc: "Work alongside experienced actuaries, administrators, and consultants.",
    },
    {
      icon: <FaHandshake />,
      title: "Since 1966",
      desc: "Join a stable, trusted firm with nearly six decades in retirement services.",
    },
  ];

  // Benefits & Perks
  const benefits = [
    { icon: <FaBriefcase />, title: "401(k) with Match", desc: "We help others save—and we save for ourselves too." },
    { icon: <FaShieldAlt />, title: "Professional Liability Insurance", desc: "Coverage for your peace of mind." },
    { icon: <FaClock />, title: "Flexible Scheduling", desc: "Core hours with autonomy over your day." },
    { icon: <FaStar />, title: "Performance Bonuses", desc: "Recognizing your contributions with annual incentives." },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "EGPS Ventures gave me the opportunity to grow from an entry-level analyst to a lead consultant. The mentorship here is unmatched.",
      author: "Sarah K., Senior Consultant",
    },
    {
      quote: "The culture is collaborative and supportive. I've never felt more valued in a workplace.",
      author: "Mike R., Plan Administrator",
    },
  ];

  // Application steps
  const steps = [
    { step: 1, label: "Submit Application", icon: <FaFileAlt /> },
    { step: 2, label: "Initial Screening", icon: <FaUserCheck /> },
    { step: 3, label: "Technical Interview", icon: <FaBriefcase /> },
    { step: 4, label: "Offer & Onboarding", icon: <FaHandshake /> },
  ];

  return (
    <>
      <main className="career-page">
        {/* Hero */}
        <div className="career-back">
          <div className="career-content">
            <h1>Careers</h1>
            <p>Build your career with a team dedicated to retirement plan excellence.</p>
          </div>
        </div>

        {/* Intro Section */}
        <section className="career-intro">
          <div className="career-intro-content">
            <h2>Join Our Team</h2>
            <p>
              At EGPS Ventures, we've spent nearly 60 years helping advisors, partners,
              and employers navigate the complexities of retirement plan design,
              compliance, and fiduciary services. We're looking for driven, detail-oriented
              people who want to make a real difference in how Americans save for retirement.
            </p>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="career-why">
          <h2>Why Work With Us</h2>
          <div className="career-why-grid">
            {whyJoinUs.map((item, index) => (
              <div className="career-why-card" key={index}>
                <div className="career-why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="career-benefits">
          <h2>Benefits & Perks</h2>
          <div className="career-benefits-grid">
            {benefits.map((item, index) => (
              <div className="career-benefit-card" key={index}>
                <div className="career-benefit-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="career-steps">
          <h2>Our Hiring Process</h2>
          <div className="career-steps-timeline">
            {steps.map((item) => (
              <div className="career-step" key={item.step}>
                <div className="career-step-number">{item.step}</div>
                <div className="career-step-icon">{item.icon}</div>
                <div className="career-step-label">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="employee-slider">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {employees.map((emp, index) => (
                    <SwiperSlide key={index}>
                        <div className="employee-slide">
                            <div className="employee-left">
                                <h2>Hear From Our Employees</h2>
                                <p className="quote">
                                    "{emp.quote}"
                                </p>
                                <hr />
                                <h3>{emp.name}</h3>
                                <span>
                                    {emp.designation}
                                    <br />
                                    {emp.location}
                                </span>
                            </div>
                            <div className="employee-right">
                                <img
                                    src={emp.image}
                                    alt={emp.name}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

        {/* Open Positions Section */}
        <section className="career-positions">
          <h2>Open Positions</h2>
          <div className="career-positions-list">
            {openPositions.map((job, index) => (
              <div className="career-position-card" key={index}>
                <div className="career-position-info">
                  <h3>{job.title}</h3>
                  <div className="career-position-meta">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Link to="/contact-us" className="career-apply-btn">
                  Apply Now <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="career-testimonials">
          <h2>What Our Team Says</h2>
          <div className="career-testimonials-grid">
            {testimonials.map((t, idx) => (
              <blockquote className="career-testimonial" key={idx}>
                <p>“{t.quote}”</p>
                <cite>— {t.author}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="career-cta">
          <h2>Don't See the Right Role?</h2>
          <p>
            We're always interested in connecting with talented professionals.
            Send us your resume and let us know how you'd like to contribute.
          </p>
          <Link to="/contact-us" className="career-cta-btn">
            Get In Touch <FaArrowRight />
          </Link>
        </section>
      </main>

      {/* ===== FOOTER (unchanged) ===== */}
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
                <li><NavLink to="/Careers">Careers</NavLink></li>
                <li><NavLink to="/contact-us">Contact</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><NavLink to="/retirement-plan-design">Retirement Plan Design</NavLink></li>
                <li><NavLink to="/services">Compliance</NavLink></li>
                <li><NavLink to="/services">401(k) Combined</NavLink></li>
                <li><NavLink to="/services">Advisor Partnership</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><NavLink to="/insights">Insights</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/testimonials">Case Studies</NavLink></li>
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
              <NavLink to="/privacy">Privacy Policy</NavLink>
              <NavLink to="/terms">Terms of Service</NavLink>
              <NavLink to="/adv-disclosures">ADV Disclosures</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Career;