import React from "react";

import "./Services.css";

export default function CognitiveOperations() {
  return (
    <>
      <div className="services-page">
        {/* Hero Section with Video and Animation */}
        <section className="intro-section hero-animate">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video-fadezoom"
          >
            <source
              src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660766/3125448-uhd_3840_2160_25fps_jopqf2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay-fadezoom">
            <h2 className="hero-title-animate">
              Cognitive Business Operations
            </h2>
            <p className="hero-text-animate">
              We harness AI, automation, and analytics to streamline business
              processes, reduce costs, and enable smarter decision-making for
              modern enterprises.
            </p>
          </div>
        </section>
        {/* Modern Gold Card Section */}
        <section className="cognitive-cards-section">
          <div className="cognitive-cards">
            <div className="cognitive-card">
              <div className="cognitive-card-title gold-text">
                Overview & Scope
              </div>
              <div className="cognitive-card-desc">
                We harness AI, automation, and analytics to streamline business
                processes, reduce costs, and enable smarter decision-making for
                modern enterprises.
              </div>
            </div>
            <div className="cognitive-card">
              <div className="cognitive-card-title gold-text">
                Core Benefits
              </div>
              <ul className="cognitive-card-list">
                <li>Automated workflows and reduced manual effort</li>
                <li>Real-time insights and predictive analytics</li>
                <li>Improved accuracy and compliance</li>
                <li>Scalable solutions for any business size</li>
              </ul>
            </div>
            <div className="cognitive-card">
              <div className="cognitive-card-title gold-text">
                Strategic Value
              </div>
              <div className="cognitive-card-desc">
                Transform your operations, boost productivity, and gain a
                competitive edge with our cognitive business solutions.
              </div>
            </div>
            <div className="cognitive-card">
              <div className="cognitive-card-title gold-text">
                Why Choose Us?
              </div>
              <ul className="cognitive-card-list">
                <li>AI/ML experts and certified automation engineers</li>
                <li>Custom solutions for your unique needs</li>
                <li>End-to-end implementation and support</li>
                <li>Proven results for global clients</li>
              </ul>
            </div>
            <div className="cognitive-card">
              <div className="cognitive-card-title gold-text">
                Client Success Story
              </div>
              <div className="cognitive-card-desc">
                <strong>Case Study: Automated Invoice Processing</strong>
              </div>
              <ul className="cognitive-card-list">
                <li>
                  <strong>Challenge:</strong> Manual invoice handling, slow
                  approvals, and frequent errors.
                </li>
                <li>
                  <strong>Solution:</strong> Implemented AI-powered document
                  processing and automated workflows.
                </li>
                <li>
                  <strong>Result:</strong> 80% reduction in processing time, 99%
                  accuracy, and improved compliance.
                </li>
              </ul>
            </div>
            <div className="cognitive-card">
              <div className="cognitive-card-title gold-text">How We Work</div>
              <ul className="cognitive-card-list">
                <li>
                  <span className="gold-text">🔬 Discovery:</span> We analyze
                  your processes and identify automation opportunities.
                </li>
                <li>
                  <span className="gold-text">🧠 AI Solution Design:</span> Our
                  experts design and prototype AI-driven workflows tailored to
                  your needs.
                </li>
                <li>
                  <span className="gold-text">⚙️ Implementation:</span> We
                  deploy, integrate, and test solutions for seamless adoption.
                </li>
                <li>
                  <span className="gold-text">📈 Optimization:</span> Continuous
                  improvement and support to maximize ROI.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container" style={{ textAlign: "center" }}>
            <h2>Ready to Automate Your Operations?</h2>
            <p>
              Contact us for a free automation assessment and discover how
              Enkonix can transform your business processes.
            </p>
          </div>
        </section>
        <section className="service-cards">
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/ai-automation.jpg"
                alt="AI-Driven Automation"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/6.PNG";
                }}
              />
              <div className="overlay-text">AI-Driven Automation</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Automate business workflows using AI, reduce costs, and improve
                efficiency across departments.
              </p>
              <ul className="highlight-list">
                <li>End-to-end process automation</li>
                <li>Reduced manual interventions</li>
                <li>Scalable efficiency across teams</li>
              </ul>
            </div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/predictive-insights.jpg"
                alt="Predictive Insights"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/6.PNG";
                }}
              />
              <div className="overlay-text">Predictive Insights</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Unlock the power of data to anticipate outcomes and make
                informed business decisions faster.
              </p>
              <ul className="highlight-list">
                <li>AI-powered analytics</li>
                <li>Forecasting business outcomes</li>
                <li>Real-time actionable data</li>
              </ul>
            </div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/hyperautomation.jpg"
                alt="Hyperautomation"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/6.PNG";
                }}
              />
              <div className="overlay-text">Hyperautomation</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Combine RPA, ML, and NLP to build an intelligent automation
                pipeline from end to end.
              </p>
              <ul className="highlight-list">
                <li>Integrates RPA, ML & NLP</li>
                <li>Smart task orchestration</li>
                <li>Accelerated digital transformation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
