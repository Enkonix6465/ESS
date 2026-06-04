import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Careers.css";

export default function ApplicationForm() {
  const { jobTitle } = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((f) => ({
      ...f,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="application-form-page">
      <div className="application-form-container">
        <h2>
          Apply for:{" "}
          <span className="job-title-highlight">
            {decodeURIComponent(jobTitle)}
          </span>
        </h2>
        {submitted ? (
          <div className="application-success">
            <h3>Thank you for applying!</h3>
            <p>We have received your application and will get in touch soon.</p>
          </div>
        ) : (
          <form className="application-form" onSubmit={handleSubmit}>
            <label>
              Full Name*
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email*
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number*
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Education*
              <input
                type="text"
                name="education"
                value={form.education}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Professional Experience*
              <textarea
                name="experience"
                value={form.experience}
                onChange={handleChange}
                required
                rows={3}
              />
            </label>
            <label>
              Resume/CV (PDF, DOC, DOCX)*
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Cover Letter (optional)
              <textarea
                name="coverLetter"
                value={form.coverLetter}
                onChange={handleChange}
                rows={3}
              />
            </label>
            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
