/* eslint-disable no-unused-vars */
import {
  FaBrain,
  FaChartLine,
  FaCheckCircle,
  FaCloud,
  FaCogs,
  FaHandshake,
  FaLightbulb,
  FaMobileAlt,
  FaPalette,
  FaRocket,
  FaSeedling,
  FaShieldAlt,
  FaStar,
  FaSyncAlt,
  FaUserShield,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          poster="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660757/innovation-bg_nej4bw.mp4"
        >
          <source
            src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660757/innovation-bg_nej4bw.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Enkonix Software Services Pvt. Ltd</h1>
          <p>Driving Digital Innovation with Trust, Agility, and Excellence.</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section" id="who-we-are">
        <h3 className="section-title">Who We Are</h3>
        <div className="who-we-are-container">
          <div className="who-we-are-image">
            <img src="/assets/team.png" alt="Enkonix Team" />
          </div>
          <div className="who-we-are-text">
            <p>
              Enkonix is a forward-thinking technology company dedicated to
              solving real-world challenges through smart, scalable digital
              solutions. We're not just developers — we're innovators,
              strategists, and changemakers committed to driving progress
              through the power of technology.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section what-we-do-section" id="what-we-do">
        <h3 className="section-title">What We Do</h3>
        <div className="what-we-do-cards-grid">
          {[
            {
              title: "Custom Software Development",
              desc: "Tailored solutions for your unique business needs, from web to enterprise systems.",
              icon: <FaCogs />,
              color: "linear-gradient(135deg, #ff9800 60%, #ff5722 100%)",
              label: "SOFTWARE",
            },
            {
              title: "Cloud Infrastructure & DevOps",
              desc: "Modernize, scale, and automate with secure cloud and DevOps best practices.",
              icon: <FaCloud />,
              color: "linear-gradient(135deg, #00bfff 60%, #3f51b5 100%)",
              label: "CLOUD",
            },
            {
              title: "AI & Data-Driven Solutions",
              desc: "Unlock insights and automation with advanced analytics and machine learning.",
              icon: <FaBrain />,
              color: "linear-gradient(135deg, #7b1fa2 60%, #536dfe 100%)",
              label: "AI/ML",
            },
            {
              title: "Mobile App Development",
              desc: "Engage your audience anywhere with robust, user-friendly mobile apps.",
              icon: <FaMobileAlt />,
              color: "linear-gradient(135deg, #00c853 60%, #00bfae 100%)",
              label: "MOBILE",
            },
            {
              title: "Cybersecurity Services",
              desc: "Protect your data and operations with proactive security and compliance.",
              icon: <FaShieldAlt />,
              color: "linear-gradient(135deg, #009688 60%, #00bcd4 100%)",
              label: "SECURITY",
            },
            {
              title: "UX/UI Design & Consulting",
              desc: "Delight users with intuitive, beautiful, and accessible digital experiences.",
              icon: <FaPalette />,
              color: "linear-gradient(135deg, #e040fb 60%, #7c4dff 100%)",
              label: "DESIGN",
            },
            {
              title: "Digital Transformation Consulting",
              desc: "Strategic guidance to help you innovate, adapt, and lead in the digital era.",
              icon: <FaSyncAlt />,
              color: "linear-gradient(135deg, #ff6f00 60%, #ff8f00 100%)",
              label: "TRANSFORM",
            },
            {
              title: "QA & Automation Testing Services",
              desc: "Ensure quality and reliability with rigorous testing and automation.",
              icon: <FaCheckCircle />,
              color: "linear-gradient(135deg, #00bcd4 60%, #009688 100%)",
              label: "QA",
            },
          ].map((item, i) => (
            <div className="what-we-do-modern-card" key={item.title}>
              <div
                className="what-we-do-card-top"
                style={{ background: item.color }}
              >
                <span className="what-we-do-icon">{item.icon}</span>
              </div>
              <div className="what-we-do-card-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <span
                  className="what-we-do-label"
                  style={{ background: item.color }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="section global-impact-section" id="global-impact">
        <h3 className="section-title">Global Impact</h3>
        <div className="impact-content">
          <div className="impact-stats impact-stats-circles">
            {[
              { value: "4+", label: "Countries Served", delay: "0s" },
              { value: "10+", label: "Projects Delivered", delay: "0.7s" },
              { value: "100%", label: "Client Satisfaction", delay: "1.4s" },
              { value: "24/7", label: "Global Support", delay: "2.1s" },
            ].map((stat, i) => (
              <div
                className="stat-item stat-circle"
                key={stat.label}
                style={{ animationDelay: stat.delay }}
              >
                <div className="stat-circle-inner">
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="impact-text">
            <h4>Making a Difference Worldwide</h4>
            <p>
              Our solutions have transformed businesses across industries, from
              healthcare and finance to education and manufacturing. We've
              helped startups scale globally, enterprises modernize their
              operations, and organizations achieve digital excellence.
            </p>
            <p>
              Through strategic partnerships and innovative solutions, we
              continue to expand our global footprint while maintaining the
              personalized service and attention to detail that sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section" id="core-values">
        <h3 className="section-title">Our Core Values</h3>
        <div className="values-grid modern-core-values">
          {[
            {
              title: "Innovation",
              desc: "We thrive on continuous innovation, pushing boundaries to create future-ready solutions.",
              icon: <FaLightbulb />,
            },
            {
              title: "Trust",
              desc: "Integrity is at our core. We build relationships based on transparency, honesty, and respect.",
              icon: <FaUserShield />,
            },
            {
              title: "Agility",
              desc: "In a fast-paced world, our adaptable mindset helps us stay ahead of the curve.",
              icon: <FaRocket />,
            },
            {
              title: "Customer Obsession",
              desc: "We don't just serve clients — we walk with them at every step, turning ideas into impact.",
              icon: <FaHandshake />,
            },
            {
              title: "Collaboration",
              desc: "We believe in the power of teamwork — because great things happen when minds unite.",
              icon: <FaUsers />,
            },
            {
              title: "Responsibility",
              desc: "From data to nature, we take responsibility seriously — aiming to create a better tomorrow.",
              icon: <FaSeedling />,
            },
            {
              title: "Excellence",
              desc: "We aim high and deliver higher — quality isn't just a goal, it's our default setting.",
              icon: <FaStar />,
            },
            {
              title: "Growth Mindset",
              desc: "Every challenge is an opportunity to learn, evolve, and level up — as individuals and as a team.",
              icon: <FaChartLine />,
            },
          ].map((val, i) => (
            <div className="core-value-modern-card" key={val.title}>
              <div className="core-value-icon">{val.icon}</div>
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section sustainability-section" id="sustainability">
        <h3 className="section-title">Corporate Sustainability</h3>
        <div className="sustainability-content">
          <h4 className="sustainability-subtitle">
            🌿 Enkonix Green Code Initiative
          </h4>
          <p className="sustainability-highlight">
            <strong>Technology That Cares for the Planet</strong>
          </p>
          <p className="sustainability-text">
            At Enkonix Software Services Pvt. Ltd., we believe innovation should
            go hand in hand with sustainability. Through our{" "}
            <span className="highlight">Green Code Initiative</span>, we're
            committed to reducing our environmental footprint while delivering
            world-class digital solutions.
          </p>
          <p className="sustainability-text">
            For every project we complete, we plant a tree — transforming{" "}
            <span className="green-text">digital success</span> into{" "}
            <span className="green-text">a greener tomorrow</span>. To date,
            we've offset{" "}
            <strong className="green-highlight">35.6 metric tons</strong> of
            carbon emissions, and we're just getting started.
          </p>
          <p className="sustainability-quote">
            🌱 At Enkonix, it's not just about building software. It's about
            building a better future.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" id="team">
        <h3 className="section-title">Meet Our Team</h3>
        <div className="team-container">
          <div className="team-member-card">
            <div className="team-img-container">
              <img src="/assets/CEO1.png" alt="CEO" className="team-img" />
            </div>
            <h4 className="team-name">Annaiah Samekeri</h4>
            <p className="team-role">Chief Executive Officer (CEO)</p>
            <p className="team-description">
              A strategic leader with a forward-thinking mindset, blending
              expertise in cloud computing and AI to shape a smarter, more
              sustainable digital future. Committed to driving innovation,
              growth, and long-term impact.
            </p>
          </div>

          <div className="team-member-card">
            <div className="team-img-container">
              <img src="/assets/CDO.png" alt="CDO" className="team-img" />
            </div>
            <h4 className="team-name">Alluri Durga Prasad</h4>
            <p className="team-role">Chief Data Officer (CDO)</p>
            <p className="team-description">
              A data-driven leader with deep expertise in cloud and data
              architecture. He empowers organizations to unlock the full
              potential of their data through secure, scalable, and intelligent
              solutions that fuel business transformation.
            </p>
          </div>

          <div className="team-member-card">
            <div className="team-img-container">
              <img src="/assets/CTO.png" alt="CTO" className="team-img" />
            </div>
            <h4 className="team-name">Alluri Suvarchala Devi</h4>
            <p className="team-role">Chief Technology Officer (CTO)</p>
            <p className="team-description">
              A tech visionary dedicated to driving innovation through
              cutting-edge technologies. She leads the development of
              intelligent, scalable solutions that turn complex challenges into
              growth opportunities.
            </p>
          </div>

          <div className="team-member-card">
            <div className="team-img-container">
              <img src="/assets/COO.png" alt="COO" className="team-img" />
            </div>
            <h4 className="team-name">Shankar Vangari</h4>
            <p className="team-role">Chief Operating Officer (COO)</p>
            <p className="team-description">
              An operations expert focused on optimizing performance and driving
              efficiency. Passionate about transforming data into strategic
              decisions that accelerate business growth and operational
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section" id="why-enkonix">
        <h2 className="why-title">
          Why Choose <span>Enkonix Software Services Pvt. Ltd</span>
          <span className="qm">?</span>
        </h2>
        <div className="why-grid">
          <div className="why-card">
            <i className="icon fas fa-check-circle"></i>
            <h3>Proven Global Delivery</h3>
            <p>
              Backed by years of successful projects across industries and
              continents.
            </p>
          </div>
          <div className="why-card">
            <i className="icon fas fa-cogs"></i>
            <h3>Agile & Scalable</h3>
            <p>
              Flexible frameworks that adapt to your growth and goals
              seamlessly.
            </p>
          </div>
          <div className="why-card">
            <i className="icon fas fa-users"></i>
            <h3>Passionate Team</h3>
            <p>
              Driven minds who turn ideas into impactful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="cta">
        <div className="cta-content">
          <h3>
            Ready to <span>Shape Tomorrow?</span>
          </h3>
          <p>
            Join us <strong>in crafting</strong> innovative digital solutions
            that make an impact. <br />
            Enkonix Software Services Pvt. Ltd. is your trusted partner in
            transformation.
          </p>
          <Link to="/contactus" className="cta-button flip-button">
            <span className="button-front">Let's Collaborate</span>
            <span className="button-back">Get Started</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

function FlipValueCard({ title, desc }) {
  return (
    <div
      className={`value-card flip-card`}
      tabIndex={0}
      onMouseEnter={(e) => e.currentTarget.classList.add("flipped")}
      onMouseLeave={(e) => e.currentTarget.classList.remove("flipped")}
      onFocus={(e) => e.currentTarget.classList.add("flipped")}
      onBlur={(e) => e.currentTarget.classList.remove("flipped")}
      aria-pressed={false}
      role="button"
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h4>{title}</h4>
        </div>
        <div className="flip-card-back">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
