/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { FaChartBar, FaCloud, FaCogs, FaUserTie } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "Cloud Solutions",
    img: "/assets/Cloud.jpg",
    desc: [
      "Seamless migration from legacy systems with zero downtime.",
      "End-to-end data protection with high availability and disaster recovery.",
      "Expertise across AWS, Azure, and hybrid cloud environments.",
      "Real-time monitoring, performance optimization, and auto-scaling features.",
      "Cost-efficient architecture tailored to your business size and scale.",
      "Custom strategies that drive innovation, agility, and long-term success.",
    ],
    link: "/services/cloud-solutions",
  },
  {
    title: "Application Development",
    img: "/assets/App Development.jpg",
    desc: [
      "Custom-built applications tailored to your business needs.",
      "High-performance architecture optimized for speed and scalability.",
      "Cross-platform development for web, iOS, and Android.",
      "Intuitive UI/UX designs that enhance user engagement.",
      "Thorough testing to ensure bug-free, secure deployment.",
      "Ongoing maintenance, updates, and post-launch support.",
      "From idea to execution — we handle the entire app lifecycle.",
    ],
    link: "/services/application-development",
  },
  {
    title: "Cognitive Business Operations",
    img: "/assets/Cognitive Ops.jpg",
    desc: [
      "Leverage AI and automation to streamline repetitive tasks.",
      "Analyze large datasets for faster, smarter decision-making.",
      "Automate workflows to boost efficiency and consistency.",
      "Reduce operational costs through intelligent process optimization.",
      "Real-time insights and alerts for proactive problem-solving.",
      "Seamless integration with existing tools and systems.",
      "Scalable solutions tailored for modern digital enterprises.",
    ],
    link: "/services/cognitive-operations",
  },
  {
    title: "Data & Analytics",
    img: "/assets/Data & Analytics.jpg",
    desc: [
      "Collect and consolidate data from multiple sources effortlessly.",
      "Uncover hidden patterns with advanced analytics and AI models.",
      "Build dashboards and reports for real-time decision-making.",
      "Empower teams with predictive and prescriptive insights.",
      "Ensure data quality, security, and compliance at every step.",
      "Seamless integration with BI tools like Power BI, Tableau, and more.",
      "Drive innovation through data-driven strategies and automation.",
    ],
    link: "/services/data-analytics",
  },
  {
    title: "Network Solutions & Services",
    img: "/assets/Network Solutions.jpg",
    desc: [
      "Build secure, high-speed networks tailored to your infrastructure.",
      "Ensure seamless connectivity across offices, data centers, and cloud.",
      "Optimize performance with intelligent routing and traffic management.",
      "Implement advanced firewalls and threat protection systems.",
      "Enable reliable remote access with VPN and SD-WAN solutions.",
      "Monitor network health in real-time with analytics and alerts.",
      "Scalable architecture to grow with your business needs.",
    ],
    link: "/services/network-solutions",
  },
  {
    title: "IT Consulting",
    img: "/assets/IT Consulting.jpg",
    desc: [
      "Strategic guidance to align IT with your business objectives.",
      "Tailored tech roadmaps for digital transformation and innovation.",
      "Improve operational efficiency with the right tools and platforms.",
      "Conduct in-depth assessments and risk analysis for smarter decisions.",
      "Collaborate on vendor selection, migration, and implementation.",
      "Accelerate growth through future-ready IT strategies.",
      "Flexible consulting models to match your pace and budget.",
    ],
    link: "/services/it-consulting",
  },
];

const news = [
  {
    title: "AWS Partnership",
    desc: "Enkonix collaborates with AWS to deliver top-tier cloud services worldwide.",
  },
  {
    title: "Hyderabad Data Center",
    desc: "We’re expanding our presence with a high-speed, secure data center in India.",
  },
  {
    title: "Internship Launch 2025",
    desc: "Calling all techies — grow with us through our elite internship program.",
  },
];

const serviceIcons = [];

export default function Services() {
  const location = useLocation();
  // Animated stats for impact section
  const stats = [
    { target: 120, label: "Clients Served" },
    { target: 350, label: "Projects Delivered" },
    { target: 98, label: "Client Retention (%)" },
    { target: 15, label: "Countries Reached" },
  ];
  const statsRef = React.useRef();
  const countersStarted = React.useRef(false);
  React.useEffect(() => {
    const runCounters = () => {
      if (!statsRef.current) return;
      const counters = statsRef.current.querySelectorAll(".counter");
      counters.forEach((counter, i) => {
        counter.innerText = "0";
        const target = stats[i].target;
        const speed = 40;
        const increment = target / speed;
        let current = 0;
        const updateCount = () => {
          if (current < target) {
            current += increment;
            counter.innerText = `${Math.ceil(current)}+`;
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = `${target}+`;
          }
        };
        updateCount();
      });
    };
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted.current) {
            countersStarted.current = true;
            setTimeout(runCounters, 100);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      {/* Hero/Intro Section */}
      <section className="services-hero-section">
        <video autoPlay muted loop playsInline className="services-hero-video">
          <source
            src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660715/7989680-hd_1920_1080_25fps_dxdvv4.mp4"
            type="video/mp4"
          />
        </video>
        <div className="services-hero-overlay">
          <h1 className="services-hero-title">
            Empowering Your Digital Future
          </h1>
          <p className="services-hero-text">
            From cloud to code, analytics to automation — we deliver innovation,
            reliability, and growth for tomorrow’s leaders.
          </p>
          <a href="#services-list" className="services-hero-cta">
            Explore Our Services
          </a>
        </div>
      </section>
      <nav className="service-nav-bar">
        {services.map((service, idx) => (
          <Link
            key={service.title}
            to={service.link}
            className={`service-nav-link${location.pathname === service.link ? " active" : ""}`}
          >
            <span className="service-nav-icon service-nav-icon-lib">
              {serviceIcons[idx]}
            </span>
            <span>{service.title}</span>
          </Link>
        ))}
      </nav>
      <div className="services-page">
        {/* Why Choose Us Section */}
        <section className="why-choose-us-section">
          <h2 className="why-choose-title">Why Choose Enkonix?</h2>
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <span className="why-choose-icon">
                <FaCloud />
              </span>
              <h3>Cloud-Native Expertise</h3>
              <p>
                Certified architects and engineers for seamless, secure, and
                scalable cloud journeys.
              </p>
            </div>
            <div className="why-choose-card">
              <span className="why-choose-icon">
                <FaCogs />
              </span>
              <h3>AI-Driven Innovation</h3>
              <p>
                We harness automation and intelligence to drive efficiency and
                business value.
              </p>
            </div>
            <div className="why-choose-card">
              <span className="why-choose-icon">
                <FaChartBar />
              </span>
              <h3>Data-First Decisions</h3>
              <p>
                Unlock actionable insights and growth with advanced analytics
                and BI solutions.
              </p>
            </div>
            <div className="why-choose-card">
              <span className="why-choose-icon">
                <FaUserTie />
              </span>
              <h3>Client-Centric Delivery</h3>
              <p>
                Transparent, agile, and collaborative — your goals are our
                mission.
              </p>
            </div>
          </div>
        </section>
        {/* Animated Stats Section */}
        <section className="services-impact-section">
          <div className="impact-stats-grid" ref={statsRef}>
            {stats.map((stat, i) => (
              <div className="impact-stat-box" key={stat.label}>
                <div className="counter" />
                <div className="impact-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="services-section" id="services-list">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We deliver world-class tech solutions that go beyond just
            functionality — we innovate, optimize, and future-proof your
            business. Whether it's cloud integration, intelligent automation,
            custom applications, or real-time data insights, we craft scalable
            solutions that accelerate growth, drive digital transformation, and
            keep you ahead in a rapidly evolving digital world.
          </p>
          <div className="services-grid">
            {services.map((service, i) => (
              <div
                className="service-card glass-card creative-service-card"
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="service-image">
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/6.PNG";
                    }}
                    className="service-img-responsive"
                  />
                  <span className="service-card-icon-overlay">
                    {serviceIcons[i]}
                  </span>
                </div>
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <ul>
                    {service.desc.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                  <Link to={service.link} className="view-more-button">
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="news-section">
          <h2 className="section-title">Latest News</h2>
          <div className="news-grid">
            {news.map((n, i) => (
              <div
                className="news-card"
                key={n.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h4>{n.title}</h4>
                <p>{n.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
