/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaRocket,
  FaSatellite,
  FaShieldAlt,
  FaCogs,
  FaPlane,
  FaWifi,
} from "react-icons/fa";
import "./AerospaceDefense.css";

const solutions = [
  {
    imgSrc: "/assets/WhatsApp Image 2025-07-14 at 16.06.49_7eadc876.jpg",
    title: "Advanced Aerospace Technologies",
    text: "Innovative systems for airspace management, satellite communication, and space exploration.",
  },
  {
    imgSrc: "/assets/WhatsApp Image 2025-07-14 at 16.07.01_43b803e8.jpg",
    title: "Satellite Systems",
    text: "High-performance satellite technology for global communication and surveillance.",
  },
  {
    imgSrc: "/assets/WhatsApp Image 2025-07-14 at 16.07.07_0a6c8d49.jpg",
    title: "Cybersecurity",
    text: "Robust security solutions to protect critical defense systems from cyber threats.",
  },
];

export default function AerospaceDefense() {
  return (
    <>
      <div className="industry-page dark-theme">
        {/* Hero Section */}
        <section className="industry-hero">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="industry-hero-bg-video"
          >
            <source
              src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660766/3125448-uhd_3840_2160_25fps_jopqf2.mp4"
              type="video/mp4"
            />
          </video>
          <div className="industry-hero-overlay">
            <h1>Aerospace & Defense</h1>
            <p>
              Innovating the future of air, space, and defense technologies for
              global security.
            </p>
          </div>
        </section>
        {/* Solutions Section */}
        <section className="industry-solutions">
          <h2>Key Aerospace & Defense IT Solutions</h2>
          <div className="industry-solutions-grid">
            {solutions.map((solution, index) => (
              <SolutionFlipCard key={index} {...solution} />
            ))}
          </div>
        </section>
        {/* Benefits Section */}
        <section className="industry-benefits">
          <h2>Benefits for Aerospace & Defense</h2>
          <ul>
            <li>Mission-critical reliability</li>
            <li>Global communication and surveillance</li>
            <li>Advanced security and compliance</li>
            <li>Innovative, future-ready solutions</li>
            <li>Data-driven decision making</li>
          </ul>
        </section>

        {/* Flip Cards Section */}
        <section className="aero-flip-section">
          <h2>Core Capabilities</h2>
          <div className="aero-flip-grid">
            <AeroFlipCard
              icon={<FaRocket />}
              title="Space Launch"
              desc="Reliable launch systems for satellites and cargo."
            />
            <AeroFlipCard
              icon={<FaSatellite />}
              title="Satellite Ops"
              desc="24/7 satellite monitoring and control."
            />
            <AeroFlipCard
              icon={<FaShieldAlt />}
              title="Defense Security"
              desc="Advanced cybersecurity for defense assets."
            />
          </div>
        </section>

        {/* Animated Circles Section */}
        <section className="aero-circle-section">
          <h2>Mission Highlights</h2>
          <div className="mission-highlight-grid">
            <MissionHighlightCard
              number="01"
              color="#7c3aed"
              icon={<FaCogs />}
              title="Engineering"
              text="Precision engineering for mission success."
            />
            <MissionHighlightCard
              number="02"
              color="#ef4444"
              icon={<FaPlane />}
              title="Aviation"
              text="Cutting-edge aviation technology."
            />
            <MissionHighlightCard
              number="03"
              color="#0ea5e9"
              icon={<FaWifi />}
              title="Comms"
              text="Secure, global communications."
            />
          </div>
        </section>

        {/* Animated Image Cards Section */}
        <section className="aero-img-anim-section">
          <h2>Innovation in Action</h2>
          <div className="aero-img-anim-grid">
            <SolutionFlipCard
              imgSrc="/assets/WhatsApp Image 2025-07-14 at 16.07.05_100d9ba1.jpg"
              title="Rocket Launch"
              text="Rocket Launch"
            />
            <SolutionFlipCard
              imgSrc="/assets/WhatsApp Image 2025-07-15 at 12.09.13_679df491.jpg"
              title="Jet Fighter"
              text="Jet Fighter"
            />
            <SolutionFlipCard
              imgSrc="/assets/WhatsApp Image 2025-07-15 at 12.11.43_422a8b23.jpg"
              title="Helicopter"
              text="Helicopter"
            />
          </div>
        </section>
      </div>
    </>
  );
}

function SolutionFlipCard({ imgSrc, title, text }) {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className={`flip-image-card${flipped ? " flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
    >
      <div className="flip-image-inner">
        <div className="flip-image-front">
          <img src={imgSrc} alt={title} className="industry-img-responsive" />
        </div>
        <div className="flip-image-back">
          <div className="flip-image-back-content">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AeroFlipCard({ icon, title, desc }) {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <div
      className={`aero-flip-card${flipped ? " flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && setFlipped((f) => !f)
      }
      role="button"
      aria-pressed={flipped}
    >
      <div className="aero-flip-inner">
        <div className="aero-flip-front">
          <span className="aero-flip-icon">{icon}</span>
          <h4>{title}</h4>
        </div>
        <div className="aero-flip-back">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

function AeroCircle({ icon, label, text }) {
  return (
    <div className="aero-circle">
      <span className="aero-circle-icon">{icon}</span>
      <div className="aero-circle-label">{label}</div>
      <div className="aero-circle-text">{text}</div>
    </div>
  );
}

function AeroImgAnim({ src, text }) {
  return (
    <div className="aero-img-anim-card">
      <img src={src} alt={text} className="industry-img-responsive" />
      <div className="aero-img-anim-text">{text}</div>
    </div>
  );
}

function MissionHighlightCard({ number, color, icon, title, text }) {
  return (
    <div className="mission-highlight-card">
      <div className="mission-highlight-badge" style={{ background: color }}>
        <span>{number}</span>
      </div>
      <div className="mission-highlight-icon">{icon}</div>
      <div className="mission-highlight-title">{title}</div>
      <div className="mission-highlight-text">{text}</div>
    </div>
  );
}
