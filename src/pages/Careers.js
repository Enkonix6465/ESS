/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaArrowDown,
  FaBriefcase,
  FaCertificate,
  FaChartLine,
  FaClock,
  FaCloud,
  FaCode,
  FaEnvelope,
  FaEnvelopeOpen,
  FaGlobe,
  FaHeartbeat,
  FaLaptop,
  FaLightbulb,
  FaMapMarkerAlt,
  FaMapSigns,
  FaPalette,
  FaPhone,
  FaProjectDiagram,
  FaRocket,
  FaServer,
  FaSmile,
  FaStar,
  FaTasks,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";
import "./Careers.css";

function getRandomPng() {
  const n = Math.floor(Math.random() * 12) + 1;
  return `/assets/${n}.PNG`;
}

function handleVideoError(e) {
  const source = e.target;
  if (source.src.indexOf("background_video.mp4") === -1) {
    source.src = "/assets/background_video.mp4";
    source.parentNode.load();
  }
}

const Careers = () => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState({});
  const jobPositions = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      description:
        "Craft clean UI with React & Tailwind CSS. 1+ years exp preferred.",
      icon: <FaCode />,
      category: "Development",
      experience: "1+ years",
      type: "Full-time",
      prerequisites: [
        "Proficiency in React.js and CSS frameworks",
        "Experience with responsive design",
        "Strong problem-solving skills",
      ],
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Hyderabad",
      description: "Work with Node.js & .NET Core. Cloud knowledge a big plus!",
      icon: <FaServer />,
      category: "Development",
      experience: "2+ years",
      type: "Full-time",
      prerequisites: [
        "Experience with Node.js or .NET Core",
        "Familiarity with REST APIs and databases",
        "Cloud platform knowledge (AWS/Azure)",
      ],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Bengaluru",
      description:
        "Love design? Let's build stunning product experiences together.",
      icon: <FaPalette />,
      category: "Design",
      experience: "1+ years",
      type: "Full-time",
      prerequisites: [
        "Portfolio of UI/UX projects",
        "Experience with Figma/Adobe XD",
        "Understanding of design systems",
      ],
    },
    {
      id: 4,
      title: "DevOps Engineer",
      location: "Remote",
      description:
        "Build and maintain cloud infrastructure with AWS/Azure expertise.",
      icon: <FaCloud />,
      category: "Operations",
      experience: "2+ years",
      type: "Full-time",
      prerequisites: [
        "Experience with AWS or Azure",
        "CI/CD pipeline management",
        "Infrastructure as Code (IaC) knowledge",
      ],
    },
    {
      id: 5,
      title: "Data Scientist",
      location: "Mumbai",
      description:
        "Transform data into insights using ML and advanced analytics.",
      icon: <FaChartLine />,
      category: "Analytics",
      experience: "3+ years",
      type: "Full-time",
      prerequisites: [
        "Python/R and ML libraries",
        "Experience with data visualization",
        "Statistical analysis skills",
      ],
    },
    {
      id: 6,
      title: "Project Manager",
      location: "Delhi",
      description:
        "Lead agile teams and deliver exceptional software solutions.",
      icon: <FaTasks />,
      category: "Management",
      experience: "4+ years",
      type: "Full-time",
      prerequisites: [
        "Experience managing software projects",
        "Agile/Scrum certification",
        "Excellent communication skills",
      ],
    },
  ];

  const benefits = [
    {
      icon: <FaLightbulb />,
      title: "Innovation First",
      description: "From AI to Cloud — we stay ahead of the tech curve.",
      color: "#87cefa",
    },
    {
      icon: <FaGlobe />,
      title: "Remote Friendly",
      description: "Work from anywhere, stay connected with awesome teams.",
      color: "#facc15",
    },
    {
      icon: <FaRocket />,
      title: "Career Growth",
      description: "Upskill programs, mentorship & leadership opportunities.",
      color: "#87cefa",
    },
    {
      icon: <FaUsers />,
      title: "Great Team",
      description: "Collaborate with talented professionals worldwide.",
      color: "#facc15",
    },
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <FaUsers /> },
    { number: "15+", label: "Countries", icon: <FaGlobe /> },
    { number: "100+", label: "Projects Delivered", icon: <FaProjectDiagram /> },
    { number: "95%", label: "Client Satisfaction", icon: <FaSmile /> },
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source
              src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660725/8201837-uhd_3840_2160_25fps_rgd2so.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Join the Enkonix Software Services Pvt. Ltd.
          </h1>
          <p className="hero-subtitle">Grow with us.</p>
          <a href="#careers" className="hero-btn">
            <FaArrowDown />
            Explore Careers
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                className="stat-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="career-opportunities-section">
        <h2 className="section-header">Career Opportunities</h2>
        <div className="job-listings">
          {jobPositions.map((job, index) => (
            <div
              className={`flip-card${flipped[job.id] ? " flipped" : ""}`}
              tabIndex={0}
              onMouseEnter={(e) =>
                setFlipped((f) => ({ ...f, [job.id]: true }))
              }
              onMouseLeave={(e) =>
                setFlipped((f) => ({ ...f, [job.id]: false }))
              }
              onFocus={(e) => setFlipped((f) => ({ ...f, [job.id]: true }))}
              onBlur={(e) => setFlipped((f) => ({ ...f, [job.id]: false }))}
              aria-pressed={!!flipped[job.id]}
              role="button"
              key={job.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <div className="job-header">
                    <div className="job-icon">{job.icon}</div>
                    <div className="job-info">
                      <h3>{job.title}</h3>
                      <div className="job-meta">
                        <span className="location">
                          <FaMapMarkerAlt />
                          {job.location}
                        </span>
                        <span className="experience">
                          <FaClock />
                          {job.experience}
                        </span>
                        <span className="type">
                          <FaBriefcase />
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <div className="job-footer job-footer-row">
                    <span className="job-category">{job.category}</span>
                    <div className="job-buttons-row">
                      <button
                        className="readmore-btn"
                        onClick={() =>
                          setFlipped((f) => ({ ...f, [job.id]: true }))
                        }
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
                {/* Back Side */}
                <div className="flip-card-back">
                  <h3>{job.title}</h3>
                  <h4>Pre-requisites</h4>
                  <ul className="prerequisites-list">
                    {job.prerequisites.map((item, idx) => (
                      <li key={idx}>
                        <FaStar className="prereq-icon" /> {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:hr@enkonix.in?subject=Application%20for%20${encodeURIComponent(job.title)}&body=Dear%20HR%20Team,%0D%0A%0D%0AI%20am%20applying%20for%20the%20position%20of%20${encodeURIComponent(job.title)}.%0D%0A%0D%0APlease%20find%20my%20resume%20attached.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]`}
                    className="cta-btn primary"
                    style={{ marginTop: "1rem" }}
                  >
                    <FaEnvelope style={{ marginRight: "0.5rem" }} />
                    Apply
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="company-culture-section modern-culture-section">
        <div className="culture-bg"></div>
        <div className="culture-card">
          <div className="culture-content-grid">
            <div className="culture-text">
              <h2 className="section-header">Company Culture</h2>
              <h3>Our Culture</h3>
              <p>
                At Enkonix, we foster a culture of innovation, collaboration,
                and continuous learning. Our team members are our greatest
                asset, and we invest in their growth and development. We value
                inclusivity, flexibility, and a healthy work-life balance.
              </p>
              <ul className="culture-values-list">
                <li>
                  <FaUsers className="culture-value-icon" /> Inclusive
                  Environment
                </li>
                <li>
                  <FaClock className="culture-value-icon" /> Flexible Work Hours
                </li>
                <li>
                  <FaHeartbeat className="culture-value-icon" /> Health Benefits
                </li>
                <li>
                  <FaTasks className="culture-value-icon" /> Team Collaboration
                </li>
              </ul>
            </div>
            <div className="culture-image">
              <img
                src="/assets/team.png"
                alt="Team Culture"
                className="culture-img-modern"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="employee-benefits-section">
        <h2 className="section-header">Employee Benefits</h2>
        <div className="employee-benefits-grid">
          <div className="employee-benefit-card">
            <div className="benefit-card-top benefit-gradient1">
              <FaHeartbeat className="benefit-icon" />
            </div>
            <div className="benefit-card-content">
              <h3>Health & Wellness</h3>
              <p>
                Comprehensive health insurance and wellness programs for you and
                your family.
              </p>
            </div>
          </div>
          <div className="employee-benefit-card">
            <div className="benefit-card-top benefit-gradient2">
              <FaLaptop className="benefit-icon" />
            </div>
            <div className="benefit-card-content">
              <h3>Remote Flexibility</h3>
              <p>
                Work from anywhere with flexible hours and the latest tech
                tools.
              </p>
            </div>
          </div>
          <div className="employee-benefit-card">
            <div className="benefit-card-top benefit-gradient3">
              <FaUsers className="benefit-icon" />
            </div>
            <div className="benefit-card-content">
              <h3>Team Culture</h3>
              <p>
                Collaborative, inclusive environment with regular team events
                and learning opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Growth & Development Section */}
      <section className="growth-section">
        <h2 className="section-header">Professional Growth & Development</h2>
        <div className="growth-cards-grid">
          <div className="growth-card">
            <div className="growth-icon">
              <FaUserGraduate />
            </div>
            <h4>Mentorship & Leadership Programs</h4>
            <p>
              Grow with guidance from experienced mentors and take part in
              leadership tracks designed for your career advancement.
            </p>
          </div>
          <div className="growth-card">
            <div className="growth-icon">
              <FaCertificate />
            </div>
            <h4>Sponsored Certifications & Courses</h4>
            <p>
              Access company-sponsored certifications and courses to keep your
              skills sharp and stay ahead in the tech industry.
            </p>
          </div>
          <div className="growth-card">
            <div className="growth-icon">
              <FaMapSigns />
            </div>
            <h4>Career Path Planning</h4>
            <p>
              Work with our team to map out your career journey, set goals, and
              achieve milestones for continuous growth.
            </p>
          </div>
          <div className="growth-card">
            <div className="growth-icon">
              <FaLightbulb />
            </div>
            <h4>Tech Talks & Knowledge Sharing</h4>
            <p>
              Participate in regular tech talks, workshops, and
              knowledge-sharing sessions to learn and collaborate with peers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section" data-aos="fade-up">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <FaEnvelopeOpen />
            </div>
            <h2>Didn't find your role?</h2>
            <p>
              Send your resume to{" "}
              <a href="mailto:hr@enkonix.in">hr@enkonix.in</a>
            </p>
            <p className="cta-subtitle">
              We're always looking for talented individuals to join our team!
            </p>
            <div className="cta-buttons">
              <a href="mailto:hr@enkonix.in" className="cta-btn primary">
                <FaEnvelope />
                Send Resume
              </a>
              <Link to="/contactus#contact-form" className="cta-btn secondary">
                <FaPhone />
                Contact HR
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
