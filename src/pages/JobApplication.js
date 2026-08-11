import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"; // ← added useNavigate
import emailjs from "emailjs-com";
import "../css/JobApplication.css";

const JobApplication = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); // ← hook for navigation
  const position = searchParams.get("position") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: position,
    coverLetter: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // "success" | "error" | ""

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      position: formData.position,
      cover_letter: formData.coverLetter || "No cover letter provided.",
      resume: formData.resume ? formData.resume.name : "No file attached",
    };

    try {
      const serviceID = "service_xerds5r";
      const templateID = "template_igs2whu";
      const publicKey = "MwgpVKyH2Z7wK3ORZ";

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: position,
        coverLetter: "",
        resume: null,
      });

      // ⏳ Wait 2 seconds, then navigate to Careers page
      setTimeout(() => {
        navigate("/careers"); // adjust the path if your Careers page is different
      }, 2000);

    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="application-page">
      <div className="application-container">
        <h1>Job Application</h1>
        <p className="application-position">
          Applying for: <strong>{position}</strong>
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row: Email + Phone */}
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Position (read‑only) */}
          <div className="form-group">
            <label>Position</label>
            <input type="text" value={formData.position} readOnly />
          </div>

          {/* Resume file */}
          <div className="form-group">
            <label>Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
            <small>PDF, DOC or DOCX</small>
          </div>

          {/* Cover letter */}
          <div className="form-group">
            <label>Cover Letter</label>
            <textarea
              name="coverLetter"
              rows="7"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
            />
          </div>

          {/* Submit button with status */}
          <button
            type="submit"
            className="application-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Application"}
          </button>

          {submitStatus === "success" && (
            <p className="status-message success">
              ✅ Application sent successfully! Redirecting...
            </p>
          )}
          {submitStatus === "error" && (
            <p className="status-message error">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default JobApplication;