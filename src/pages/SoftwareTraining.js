import React from "react";

import "./Services.css";

export default function SoftwareTraining() {
  return (
    <>
      <div className="services-page">
        {/* Hero Section with Video, Animation, and Related Image */}
        <section className="intro-section hero-animate">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video-fadezoom"
          >
            <source src="/assets/softwarevd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay-fadezoom">
            <h2 className="hero-title-animate">Learn. Build. Evolve.</h2>
            <p className="hero-text-animate">
              Our software training programs are designed to turn beginners into
              experts with hands-on experience in the latest technologies.
            </p>
          </div>
        </section>
        {/* Journey Steps and Service Cards remain as before, but add images to cards */}

        <section className="service-cards">
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/full-stack-development.jpg"
                alt="Full Stack Development"
                className="card-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/dummy.jpg";
                }}
              />
              <div className="overlay-text">Full Stack Development</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Master both front-end and back-end development with modern tools
                like Angular, .NET, and Node.js.
              </p>
              <ul className="highlight-list">
                <li>Develop dynamic and responsive web applications</li>
                <li>Work with APIs and databases</li>
                <li>Implement scalable back-end services</li>
              </ul>
            </div>
            <div className="card-label">Full Stack Development</div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/cloud-devops.jpg"
                alt="Cloud & DevOps"
                className="card-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/dummy.jpg";
                }}
              />
              <div className="overlay-text">Cloud & DevOps</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Gain hands-on expertise in cloud platforms like AWS, Azure, and
                DevOps tools for efficient software delivery.
              </p>
              <ul className="highlight-list">
                <li>Automate deployment pipelines with CI/CD</li>
                <li>Learn cloud infrastructure and scaling</li>
                <li>Master containerization and orchestration</li>
              </ul>
            </div>
            <div className="card-label">Cloud & DevOps</div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/data-science-ai.jpg"
                alt="Data Science & AI"
                className="card-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/dummy.jpg";
                }}
              />
              <div className="overlay-text">Data Science & AI</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Learn Python, machine learning models, data visualization, and
                AI techniques to solve real-world problems.
              </p>
              <ul className="highlight-list">
                <li>Perform data analysis and preprocessing</li>
                <li>Develop machine learning algorithms and models</li>
              </ul>
            </div>
            <div className="card-label">Data Science & AI</div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/cybersecurity.jpg"
                alt="Cybersecurity"
                className="card-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/dummy.jpg";
                }}
              />
              <div className="overlay-text">Cybersecurity</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Gain the skills needed to secure software applications and
                networks against cyber threats and attacks.
              </p>
              <ul className="highlight-list">
                <li>Understand security frameworks and protocols</li>
                <li>Learn ethical hacking and penetration testing</li>
                <li>
                  Implement security measures for web and cloud applications
                </li>
              </ul>
            </div>
            <div className="card-label">Cybersecurity</div>
          </div>
        </section>
      </div>
    </>
  );
}
