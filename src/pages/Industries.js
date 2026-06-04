/* eslint-disable no-unused-vars */
import React from "react";

import {
  FaBroadcastTower,
  FaCar,
  FaChalkboardTeacher,
  FaHospitalSymbol,
  FaIndustry,
  FaRocket,
  FaShoppingCart,
  FaUniversity,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Industries.css";

const industries = [
  {
    name: "Healthcare",
    icon: <FaHospitalSymbol />,
    link: "/healthcare",
    desc: "Innovative solutions for  healthcare.",
  },
  {
    name: "Banking & Finance",
    icon: <FaUniversity />,
    link: "/bankingfinance",
    desc: "Secure, scalable financial technology.",
  },
  {
    name: "Retail & E-commerce",
    icon: <FaShoppingCart />,
    link: "/retailecommerce",
    desc: "Transforming retail with digital.",
  },
  {
    name: "Automotive",
    icon: <FaCar />,
    link: "/automotive",
    desc: "Driving innovation in automotive tech.",
  },
  {
    name: "Telecom",
    icon: <FaBroadcastTower />,
    link: "/telecom",
    desc: "Empowering global connectivity.",
  },
  {
    name: "Manufacturing",
    icon: <FaIndustry />,
    link: "/manufacturing",
    desc: "Smart manufacturing for Industry 4.0.",
  },
  {
    name: "Education",
    icon: <FaChalkboardTeacher />,
    link: "/education",
    desc: "Digital learning for the next generation.",
  },
  {
    name: "Aerospace & Defense",
    icon: <FaRocket />,
    link: "/aerospacedefense",
    desc: "Advanced tech for AeroDefense.",
  },
];
const caseStudies = [
  {
    title: "Retail Automation",
    description:
      "Streamlined supply chain for a Fortune 500 retailer using cloud-native solutions.",
    points: ["Reduced delivery time by 30%", "Integrated real-time analytics"],
  },
  {
    title: "Healthcare AI",
    description:
      "Enabled real-time diagnostics using our Cognitive Business AI suite.",
    points: [
      "Improved diagnostic accuracy",
      "Automated patient data workflows",
    ],
  },
  {
    title: "FinTech Cloud Migration",
    description:
      "Migrated a leading FinTech platform to a secure, scalable cloud environment.",
    points: ["99.99% uptime achieved", "Enhanced data security"],
  },
  {
    title: "E-Commerce Personalization",
    description:
      "Implemented AI-driven personalization for a global e-commerce brand.",
    points: [
      "Boosted conversion rates",
      "Personalized product recommendations",
    ],
  },
];

const approachSteps = [
  "Discovery",
  "Strategy",
  "Development",
  "Launch",
  "Scale",
];

export default function Industries() {
  // Confetti animation on hover for leader card
  React.useEffect(() => {
    const card = document.querySelector(".team-card");
    const canvas = document.querySelector(".confetti-canvas");
    if (!card || !canvas) return;
    let confettiActive = false;
    let ctx, confetti;
    function randomColor() {
      const colors = ["#87cefa", "#facc15", "#ff69b4", "#00e676", "#ff7043"];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    function createConfetti() {
      return Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 40 + 10,
        color: randomColor(),
        tilt: Math.random() * 10 - 5,
      }));
    }
    function drawConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach((c) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
      });
    }
    function updateConfetti() {
      confetti.forEach((c) => {
        c.y += Math.cos(c.d) + 2 + c.r / 2;
        c.x += Math.sin(0.5) * 2;
        if (c.y > canvas.height) {
          c.x = Math.random() * canvas.width;
          c.y = Math.random() * -canvas.height;
        }
      });
    }
    function animate() {
      if (!confettiActive) return;
      drawConfetti();
      updateConfetti();
      requestAnimationFrame(animate);
    }
    function startConfetti() {
      if (confettiActive) return;
      confettiActive = true;
      canvas.width = card.offsetWidth;
      canvas.height = card.offsetHeight;
      ctx = canvas.getContext("2d");
      confetti = createConfetti();
      animate();
    }
    function stopConfetti() {
      confettiActive = false;
      ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    card.addEventListener("mouseenter", startConfetti);
    card.addEventListener("mouseleave", stopConfetti);
    return () => {
      card.removeEventListener("mouseenter", startConfetti);
      card.removeEventListener("mouseleave", stopConfetti);
    };
  }, []);

  function getRandomPng() {
    const n = Math.floor(Math.random() * 14) + 1;
    return `/assets/${n}.PNG`;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          poster="/assets/back.jpg"
        >
          <source
            src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660786/6266247-uhd_3840_2160_25fps_yawmdx.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Industries We Empower</h1>
          <p>
            Driving innovation and transformation across sectors with tailored
            technology solutions.
          </p>
        </div>
      </section>

      <div className="industries-page">
        {/* Industries Grid */}
        <section className="industries-section">
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <Link
                to={ind.link}
                className="industry-card"
                key={ind.name}
                tabIndex={0}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "320px",
                }}
              >
                <div className="industry-card-accent">
                  <span
                    className="industry-icon"
                    aria-label={ind.name + " Icon"}
                  >
                    {ind.icon}
                  </span>
                </div>
                <div
                  className="industry-card-content"
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <div className="industry-card-title">{ind.name}</div>
                  <div className="industry-card-desc">{ind.desc}</div>
                  <div style={{ flexGrow: 1 }}></div>
                  <span
                    className="industry-card-btn"
                    style={{
                      marginTop: "auto",
                      marginBottom: "1rem",
                      width: "100%",
                      maxWidth: 180,
                      textAlign: "center",
                      display: "inline-block",
                    }}
                  >
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="capabilities-section">
          <h2 className="section-title">Our Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <h4>Cloud Solutions</h4>
              <p>
                Scalable, secure, and cost-effective cloud migration and
                management.
              </p>
            </div>
            <div className="capability-card">
              <h4>AI & Analytics</h4>
              <p>
                Unlock insights and automate with advanced analytics and machine
                learning.
              </p>
            </div>
            <div className="capability-card">
              <h4>Cybersecurity</h4>
              <p>
                Protect your data and operations with proactive security and
                compliance.
              </p>
            </div>
            <div className="capability-card">
              <h4>IT Consulting</h4>
              <p>
                Strategic guidance to help you innovate, adapt, and lead in the
                digital era.
              </p>
            </div>
          </div>
        </section>

        <section className="strategic-value-section unique-stepper">
          <h2 className="section-title">Strategic Value</h2>
          <div className="strategic-stepper">
            <div className="step-circle step1">
              <div className="step-number">1</div>
              <div className="step-title">Trusted by Global Leaders</div>
              <div className="step-desc">
                Partnered with Fortune 500s and industry disruptors worldwide.
              </div>
            </div>
            <div className="step-arrow"></div>
            <div className="step-circle step2">
              <div className="step-number">2</div>
              <div className="step-title">End-to-End Delivery</div>
              <div className="step-desc">
                From ideation to launch, we deliver seamless, integrated
                solutions.
              </div>
            </div>
            <div className="step-arrow"></div>
            <div className="step-circle step3">
              <div className="step-number">3</div>
              <div className="step-title">Compliance & Security</div>
              <div className="step-desc">
                Industry-leading standards for data privacy, security, and
                compliance.
              </div>
            </div>
            <div className="step-arrow"></div>
            <div className="step-circle step4">
              <div className="step-number">4</div>
              <div className="step-title">Innovation at Scale</div>
              <div className="step-desc">
                Cutting-edge technology and agile teams for rapid
                transformation.
              </div>
            </div>
          </div>
        </section>

        <section className="client-metrics-section">
          <h2 className="section-title">Client Success Metrics</h2>
          <div className="client-metrics-circle-grid">
            <MetricCircleCard
              value="500+"
              label="Projects Delivered"
              color="#00bfff"
            />
            <MetricCircleCard
              value="50+"
              label="Countries Served"
              color="#7c3aed"
            />
            <MetricCircleCard
              value="95%"
              label="Client Satisfaction"
              color="#ef4444"
            />
          </div>
        </section>

        <section className="case-studies-section">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            How Enkonix transformed businesses globally.
          </p>
          <div className="case-study-grid">
            {caseStudies.map((c, i) => (
              <div
                className={`case-card flip-card`}
                tabIndex={0}
                key={c.title}
                onMouseEnter={(e) => e.currentTarget.classList.add("flipped")}
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("flipped")
                }
                onFocus={(e) => e.currentTarget.classList.add("flipped")}
                onBlur={(e) => e.currentTarget.classList.remove("flipped")}
                aria-pressed={false}
                role="button"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h4>{c.title}</h4>
                    <p>{c.description}</p>
                  </div>
                  <div className="flip-card-back">
                    <h4>Key Outcomes</h4>
                    <ul>
                      {c.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="approach-section">
          <h2 className="section-title">Our Approach</h2>
          <p className="section-subtitle">
            We don’t just deliver solutions — we architect success, one step at
            a time.
          </p>
          <div className="steps">
            {approachSteps.map((step, i) => (
              <div className="step" key={step}>
                {step}
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2 className="section-title">Meet Our Leader</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="/assets/mem1.png" alt="CEO" className="team-photo" />
              <canvas className="confetti-canvas"></canvas>
              <h3>Annaiah Samekeri</h3>
              <p>Founder & CEO</p>
              <p>
                Visionary behind Enkonix Software Services Pvt. Ltd. rapid rise
                in tech solutions.
              </p>
              <div className="related-content-label">
                <p>• Visionary leadership in tech</p>
                <p>• Champion of innovation</p>
                <p>• Driving global impact</p>
                <p>• Empowering digital teams</p>
                <p>• Commitment to excellence</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function MetricCircleCard({ value, label, color }) {
  return (
    <div className="metric-circle-card" style={{ borderColor: color }}>
      <div className="metric-circle-value" style={{ color }}>
        {value}
      </div>
      <div className="metric-circle-label">{label}</div>
    </div>
  );
}
