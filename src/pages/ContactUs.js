/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from "react";
import {
  FaAddressBook,
  FaArrowDown,
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaCommentAlt,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaHandshake,
  FaHandsHelping,
  FaHeadset,
  FaLaptopCode,
  FaLightbulb,
  FaMap,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaShieldAlt,
  FaTag,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import "./Contact.css";

function getRandomPng() {
  const n = Math.floor(Math.random() * 14) + 1;
  return `/assets/${n}.PNG`;
}

function handleVideoError(e) {
  const source = e.target;
  if (source.src.indexOf("background_video.mp4") === -1) {
    source.src = "/assets/background_video.mp4";
    source.parentNode.load();
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message, category } = formData;

    const mailtoSubject = `Contact Form Submission: ${subject}`;
    const mailtoBody = `You have received a new message from your website contact form.

Here are the details:
Name: ${name}
Email: ${email}
Category: ${category}

Message:
${message}
`;

    const mailtoLink = `mailto:hr@enkonix.in?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;

    window.location.href = mailtoLink;

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Increased timeout for user to see the success message
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="bg-video">
          <source
            src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660785/1851190-uhd_3840_2160_25fps_uimvhx.mp4"
            type="video/mp4"
            onError={handleVideoError}
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-heading">
            Let's Build the <span>Future</span> Together
          </h1>
          <p className="hero-subtext">
            Ready to transform your business? Our expert team is here to turn
            your vision into reality.
          </p>
          <a href="#contact-info" className="hero-btn">
            <FaArrowDown />
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Support Highlight */}
      <section id="cta" className="support-highlight">
        <div className="container">
          <div className="support-content">
            <div className="support-text">
              <div className="support-icon">
                <FaHeadset />
              </div>
              <h2>24/7 Expert Support Team</h2>
              <p>
                Real humans. Real solutions. Contact our dedicated team anytime,
                anywhere.
              </p>
              <div className="support-features">
                <div className="feature">
                  <FaUsers />
                  <span>Expert Team</span>
                </div>
                <div className="feature">
                  <FaClock />
                  <span>Fast Response</span>
                </div>
                <div className="feature">
                  <FaShieldAlt />
                  <span>Secure & Reliable</span>
                </div>
              </div>
            </div>
            <div className="support-image">
              <img src="/assets/pexels-olly-789822.jpg" alt="Support Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="locations-section">
        <div className="container">
          <div className="section-header">
            <div className="header-icon">
              <FaBuilding />
            </div>
            <h2>Our Global Presence</h2>
            <p>Strategic locations to serve you better</p>
          </div>
          <div className="locations-grid">
            <div className="location-card" data-aos="fade-up">
              <div className="location-image">
                <img src="/assets/india-flag.jpg" alt="India Office" />
              </div>
              <div className="location-content">
                <h4>Bangalore, India</h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <p style={{ marginBottom: 0 }}>
                    1st Floor, MSR Tech Park, Novel Office, Marathahalli,
                    Bangalore, Karnataka, 560036
                  </p>
                  <a
                    href="#contact-form"
                    className="hero-btn"
                    style={{
                      margin: 0,
                      width: "fit-content",
                      padding: "0.5rem 1.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    Reach Us
                  </a>
                </div>
                <div className="location-contact"></div>
              </div>
            </div>
            <div
              className="location-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="location-image">
                <img src="/assets/uk-flag.jpg" alt="UK Office" />
              </div>
              <div className="location-content">
                <h4>London, UK</h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <p style={{ marginBottom: 0 }}>
                    30, Churchill Place, London E14 5RE, United Kingdom{" "}
                  </p>
                  <a
                    href="#contact-form"
                    className="hero-btn"
                    style={{
                      margin: 0,
                      width: "fit-content",
                      padding: "0.5rem 1.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    Reach Us
                  </a>
                </div>
                <div className="location-contact"></div>
              </div>
            </div>
            <div
              className="location-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="location-image">
                <img src="/assets/usa-flag.jpg" alt="USA Office" />
              </div>
              <div className="location-content">
                <h4>New York, USA</h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <p style={{ marginBottom: 0 }}>
                    250 Vesey St, New York, NY 10281
                  </p>
                  <a
                    href="#contact-form"
                    className="hero-btn"
                    style={{
                      margin: 0,
                      width: "fit-content",
                      padding: "0.5rem 1.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    Reach Us
                  </a>
                </div>
                <div className="location-contact"></div>
              </div>
            </div>
            <div
              className="location-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="location-image">
                <img
                  src="\assets\image.png"
                  alt="Australia Office"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/australia-flag.jpg";
                  }}
                />
              </div>
              <div className="location-content">
                <h4>Sydney, Australia</h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <p style={{ marginBottom: 0 }}>
                    101 Collins Street Melbourne VIC 3000, Australia
                  </p>
                  <a
                    href="#contact-form"
                    className="hero-btn"
                    style={{
                      margin: 0,
                      width: "fit-content",
                      padding: "0.5rem 1.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    Reach Us
                  </a>
                </div>
                <div className="location-contact"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact-info" className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <div className="header-icon">
              <FaAddressBook />
            </div>
            <h2>Get In Touch</h2>
            <p>Choose your preferred way to reach us</p>
          </div>
          <div className="info-grid">
            <div className="info-card" data-aos="fade-up">
              <div className="info-image"></div>
              <div className="info-icon">
                <FaPhone />
              </div>
              <h5>Call Us</h5>
              <p>+91 9108191003</p>
              <p className="info-subtitle">Available 24/7</p>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="100">
              <div className="info-image"></div>
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h5>Email Us</h5>
              <p>info@enkonix.in</p>
              <p className="info-subtitle">Response within 2 hours</p>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="info-image"></div>
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h5>Visit Us</h5>
              <p>
                1st Floor, MSR Tech Park, Novel Office, Marathahalli, Bangalore,
                Karnataka, 560036
              </p>
              <p className="info-subtitle">Schedule a meeting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <div className="header-icon">
              <FaHandshake />
            </div>
            <h2>How Can We Help You?</h2>
            <p>Select the category that best describes your inquiry</p>
          </div>
          <div className="categories-grid">
            <div className="category-card" data-aos="fade-up">
              <div className="category-image">
                <img
                  src="/assets/pexels-fauxels-3184416.jpg"
                  alt="Sales & Business"
                />
              </div>
              <div className="category-icon">
                <FaChartLine />
              </div>
              <h4>Sales & Business</h4>
              <p>Explore our solutions and discuss business opportunities</p>
              <ul>
                <li>Product demonstrations</li>
                <li>Pricing inquiries</li>
                <li>Business partnerships</li>
              </ul>
            </div>
            <div
              className="category-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="category-image">
                <img
                  src="/assets/pexels-field-engineer-147254-442150.jpg"
                  alt="Technical Support"
                />
              </div>
              <div className="category-icon">
                <FaLaptopCode />
              </div>
              <h4>Technical Support</h4>
              <p>Get help with our products and technical solutions</p>
              <ul>
                <li>Implementation support</li>
                <li>Technical consultation</li>
                <li>Integration assistance</li>
              </ul>
            </div>
            <div
              className="category-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="category-image">
                <img
                  src="/assets/pexels-fauxels-3184291.jpg"
                  alt="Partnerships"
                />
              </div>
              <div className="category-icon">
                <FaUsers />
              </div>
              <h4>Partnerships</h4>
              <p>Build strategic alliances and explore collaboration</p>
              <ul>
                <li>Channel partnerships</li>
                <li>Technology alliances</li>
                <li>Joint ventures</li>
              </ul>
            </div>
            <div
              className="category-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="category-image">
                <img
                  src="/assets/pexels-pixabay-356079.jpg"
                  alt="General Inquiries"
                  onError={(e) => {
                    e.target.src = "/assets/4.PNG";
                  }}
                />
              </div>
              <div className="category-icon">
                <FaLightbulb />
              </div>
              <h4>General Inquiries</h4>
              <p>Any other questions or information you need</p>
              <ul>
                <li>Company information</li>
                <li>Career opportunities</li>
                <li>General questions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="help-section">
        <div className="container">
          <div className="help-content">
            <div className="help-image" data-aos="fade-right">
              <div className="image-container">
                <img
                  src="/assets/supportagent.png"
                  alt="Contact Us"
                  onError={getRandomPng}
                />
              </div>
            </div>
            <div className="help-text" data-aos="fade-left">
              <div className="text-icon">
                <FaHandsHelping />
              </div>
              <h2>We are here to help</h2>
              <p>
                Whether you're looking for a quote, a question answered, or a
                partner in tech, our team is ready to respond with expertise and
                enthusiasm.
              </p>
              <div className="help-features">
                <div className="help-feature">
                  <FaCheckCircle />
                  <span>Expert Consultation</span>
                </div>
                <div className="help-feature">
                  <FaCheckCircle />
                  <span>Quick Response</span>
                </div>
                <div className="help-feature">
                  <FaCheckCircle />
                  <span>24/7 Support</span>
                </div>
                <div className="help-feature">
                  <FaCheckCircle />
                  <span>Personalized Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="form-wrapper" data-aos="fade-up">
            <div className="form-header">
              <div className="form-icon">
                <FaEnvelopeOpenText />
              </div>
              <h3>Send Us a Message</h3>
              <p>
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <div className="input-icon">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="input-icon">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <div className="input-icon">
                    <FaTag />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="input-icon">
                    <FaHandshake />
                  </div>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Business</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon">
                  <FaCommentAlt />
                </div>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="submit-btn">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-icon">
                    <FaPaperPlane />
                  </span>
                </button>
              </div>
            </form>
            {isSubmitted && (
              <div className="success-message">
                <FaCheckCircle />
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-header">
          <div className="map-icon">
            <FaMap />
          </div>
          <h3>Find Us</h3>
          <p>Visit our headquarters in Bangalore</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d77.6956!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwNDEnNDQuMyJF!5e0!3m2!1sen!2sin!4v1234567890123"
          height="400"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
