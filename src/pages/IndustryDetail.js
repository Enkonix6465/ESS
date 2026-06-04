import React from "react";
import "./AerospaceDefense.css";

export default function IndustryDetail({
  heroBg,
  heroTitle,
  heroDesc,
  solutions,
  benefits,
  flipCards,
  highlights,
  innovationImages,
}) {
  const badgeColors = [
    "#7c3aed",
    "#ef4444",
    "#0ea5e9",
    "#f59e42",
    "#22c55e",
    "#eab308",
  ]; // extend as needed

  return (
    <div className="industry-page dark-theme">
      {/* Hero Section */}
      <section className="hero">
        {heroBg.endsWith(".mp4") ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
            poster="/assets/back.jpg"
          >
            <source src={heroBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={heroBg}
            alt="Hero"
            className="hero-video industry-img-responsive"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        )}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{heroTitle}</h1>
          <p>{heroDesc}</p>
        </div>
      </section>
      {/* Solutions Section */}
      <section className="industry-solutions">
        <h2>Key Solutions</h2>
        <div className="industry-solutions-grid">
          {solutions.map((sol, i) => (
            <FlipImageCard
              key={i}
              img={sol.img}
              title={sol.title}
              desc={sol.desc}
            />
          ))}
        </div>
      </section>
      {/* Benefits Section */}
      <section className="industry-benefits">
        <h2>Benefits</h2>
        <ul>
          {benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>
      {/* Flip Cards Section */}
      <section className="aero-flip-section">
        <h2>Core Capabilities</h2>
        <div className="aero-flip-grid">
          {flipCards.map((card, i) => (
            <AeroFlipCard
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              key={i}
            />
          ))}
        </div>
      </section>
      {/* Mission Highlights (Animated Circles) */}
      <section className="aero-circle-section">
        <h2>Mission Highlights</h2>
        <div className="mission-highlight-grid">
          {highlights.map((h, i) => (
            <MissionHighlightCard
              key={i}
              number={String(i + 1).padStart(2, "0")}
              color={badgeColors[i % badgeColors.length]}
              icon={h.icon}
              title={h.label}
              text={h.text}
            />
          ))}
        </div>
      </section>
      {/* Innovation in Action (Animated Image Cards) */}
      <section className="aero-img-anim-section">
        <h2>Innovation in Action</h2>
        <div className="aero-img-anim-grid">
          {innovationImages.map((img, i) => (
            <FlipImageCard
              key={i}
              img={img.src}
              title={img.text}
              desc={img.text}
              isAnim
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function FlipImageCard({ img, title, desc, isAnim }) {
  return (
    <div
      className={`flip-image-card${isAnim ? " aero-img-anim-card" : ""}`}
      tabIndex={0}
      onMouseEnter={(e) => e.currentTarget.classList.add("flipped")}
      onMouseLeave={(e) => e.currentTarget.classList.remove("flipped")}
      onFocus={(e) => e.currentTarget.classList.add("flipped")}
      onBlur={(e) => e.currentTarget.classList.remove("flipped")}
      role="button"
      aria-pressed={false}
      style={{ cursor: "pointer", outline: "none" }}
    >
      <div className="flip-image-inner">
        <div className="flip-image-front">
          <img
            src={img}
            alt={title}
            className={
              isAnim
                ? "aero-img-anim-img industry-img-responsive"
                : "industry-img-responsive"
            }
          />
        </div>
        <div className="flip-image-back">
          <div className="flip-image-back-content">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AeroFlipCard({ icon, title, desc }) {
  return (
    <div
      className="aero-flip-card"
      tabIndex={0}
      onMouseEnter={(e) => e.currentTarget.classList.add("flipped")}
      onMouseLeave={(e) => e.currentTarget.classList.remove("flipped")}
      onFocus={(e) => e.currentTarget.classList.add("flipped")}
      onBlur={(e) => e.currentTarget.classList.remove("flipped")}
      role="button"
      aria-pressed={false}
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
