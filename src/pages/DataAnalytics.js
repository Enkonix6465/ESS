import "./Services.css";

export default function DataAnalytics() {
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
            <source
              src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660751/datavd_qr8mfe.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay-fadezoom">
            <h2 className="hero-title-animate">
              Smarter Business Starts With Data
            </h2>
            <p className="hero-text-animate">
              At Enkonix Global, we turn data into clarity. Our analytics
              solutions help enterprises gain real-time insights, optimize
              decisions, and unlock next-gen growth strategies — powered by
              clean, connected, and intelligent data.
            </p>
          </div>
        </section>
        {/* Service Cards (Responsive Glass Cards) */}
        <section className="service-cards">
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/business-intelligence.jpg"
                alt="BI Dashboards"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/6.PNG";
                }}
              />
              <div className="overlay-text">BI Dashboards</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Interactive dashboards and reports for real-time business
                insights and decision-making.
              </p>
              <ul className="highlight-list">
                <li>Custom Power BI & Tableau solutions</li>
                <li>Real-time data visualization</li>
                <li>Role-based access & sharing</li>
              </ul>
            </div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/predictive-insights.jpg"
                alt="Predictive Analytics"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/6.PNG";
                }}
              />
              <div className="overlay-text">Predictive Analytics</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                AI-driven analytics to forecast trends, optimize operations, and
                drive growth.
              </p>
              <ul className="highlight-list">
                <li>Machine learning models</li>
                <li>Sales & demand forecasting</li>
                <li>Churn & risk analysis</li>
              </ul>
            </div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/data-engineering.jpg"
                alt="Data Integration"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/6.PNG";
                }}
              />
              <div className="overlay-text">Data Integration</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Unified data pipelines and integration for a single source of
                truth across your business.
              </p>
              <ul className="highlight-list">
                <li>ETL/ELT pipelines</li>
                <li>Cloud & on-premise data sources</li>
                <li>Data quality & governance</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Modern Banner Cards Section */}
        <section className="data-banner-cards-section">
          <div className="data-banner-rod"></div>
          <div className="data-banner-cards">
            <div className="data-banner-card banner-yellow">
              <div className="banner-icon">🚀</div>
              <div className="banner-title">Strategic Value</div>
              <div className="banner-desc">
                Drive innovation, improve decision-making, and gain a
                competitive advantage with our data and analytics services.
              </div>
            </div>
            <div className="data-banner-card banner-blue">
              <div className="banner-icon">📊</div>
              <div className="banner-title">Overview & Scope</div>
              <div className="banner-desc">
                We empower organizations to unlock actionable insights from
                their data using advanced analytics, BI, and AI-driven
                solutions.
              </div>
            </div>
            <div className="data-banner-card banner-orange">
              <div className="banner-icon">🌟</div>
              <div className="banner-title">Why Choose Us?</div>
              <ul className="banner-list">
                <li>Certified data scientists and BI experts</li>
                <li>Industry-leading tools and platforms</li>
                <li>Custom solutions for every business</li>
                <li>Proven track record of client success</li>
              </ul>
            </div>
            <div className="data-banner-card banner-cyan">
              <div className="banner-icon">🔎</div>
              <div className="banner-title">Core Benefits</div>
              <ul className="banner-list">
                <li>Unified data collection and integration</li>
                <li>Advanced analytics and real-time dashboards</li>
                <li>Predictive and prescriptive insights</li>
                <li>Data security and compliance</li>
              </ul>
            </div>
            <div className="data-banner-card banner-green">
              <div className="banner-icon">🏆</div>
              <div className="banner-title">Client Success Story</div>
              <div className="banner-desc">
                <strong>Case Study: Predictive Sales Analytics</strong>
              </div>
              <ul className="banner-list">
                <li>
                  <strong>Challenge:</strong> Siloed data, slow reporting, and
                  missed sales opportunities.
                </li>
                <li>
                  <strong>Solution:</strong> Built a unified analytics dashboard
                  with real-time predictive insights.
                </li>
                <li>
                  <strong>Result:</strong> 25% increase in sales, faster
                  decision-making, and improved forecasting accuracy.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container">
            <h2>How We Work</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flex: "1 1 180px",
                  minWidth: "180px",
                  textAlign: "center",
                }}
              >
                <span
                  role="img"
                  aria-label="Discovery"
                  style={{ fontSize: "2.2rem" }}
                >
                  🔍
                </span>
                <h3>Discovery</h3>
                <p>We assess your data landscape and business goals.</p>
              </div>
              <div
                style={{
                  flex: "1 1 180px",
                  minWidth: "180px",
                  textAlign: "center",
                }}
              >
                <span
                  role="img"
                  aria-label="Integration"
                  style={{ fontSize: "2.2rem" }}
                >
                  🔗
                </span>
                <h3>Integration</h3>
                <p>We unify and cleanse your data for reliable analytics.</p>
              </div>
              <div
                style={{
                  flex: "1 1 180px",
                  minWidth: "180px",
                  textAlign: "center",
                }}
              >
                <span
                  role="img"
                  aria-label="Analysis"
                  style={{ fontSize: "2.2rem" }}
                >
                  📊
                </span>
                <h3>Analysis & Insights</h3>
                <p>
                  Our experts build dashboards and deliver actionable insights.
                </p>
              </div>
              <div
                style={{
                  flex: "1 1 180px",
                  minWidth: "180px",
                  textAlign: "center",
                }}
              >
                <span
                  role="img"
                  aria-label="Optimization"
                  style={{ fontSize: "2.2rem" }}
                >
                  🚀
                </span>
                <h3>Optimization</h3>
                <p>
                  Continuous improvement and support to maximize your data ROI.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container" style={{ textAlign: "center" }}>
            <h2>Ready to Unlock Your Data's Potential?</h2>
            <p>
              Contact us for a free data strategy session and see how Enkonix
              can help you turn insights into action.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
