/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaLightbulb, FaUsers, FaHandshake } from "react-icons/fa";

const stats = [
  {
    heading: "Projects",
    target: 70,
    text: "Crafted with Code. Delivered with Heart.",
  },
  {
    heading: "Team",
    target: 10,
    text: "A Team That Turns Every Day Into a Milestone.",
  },
  {
    heading: "Clients",
    target: 10,
    text: "Our True Success Lies in the Satisfaction of Our Clients.",
  },
  {
    heading: "Offices",
    target: 4,
    text: "Expanding Horizons with Offices Nationwide.",
  },
];

const alumni = [
  { src: "/assets/stanford.png", alt: "Stanford" },
  { src: "/assets/google.png", alt: "Google" },
  { src: "/assets/iitbombay.png", alt: "IIT Bombay" },
  { src: "/assets/amazon.png", alt: "Amazon" },
  { src: "/assets/iitdelhi.png", alt: "IIT Delhi" },
  { src: "/assets/microsoft.png", alt: "Microsoft" },
];

const recognized = [
  { src: "/assets/nasscom.png", alt: "Nasscom" },
  { src: "/assets/govt.png", alt: "Govt" },
  { src: "/assets/startup.png", alt: "Startup" },
  { src: "/assets/nsdc.png", alt: "NSDC" },
];

const testimonials = [
  {
    text: "“Their commitment to timelines and quality is unmatched. We’re already on the next project with them.”",
    author: "– Anand R., Founder, QuickBank",
  },
  {
    text: "“Their team delivered a powerful backend system in record time. Extremely reliable and committed.”",
    author: "– Karan B., Head of Tech at FinForce",
  },
  {
    text: "“Our UI went from 2000s to futuristic! Their design sense is fire. Truly understand users.”",
    author: "– Swetha L., Product Manager, StyleFusion",
  },
  {
    text: "“Best dev team we've ever worked with. Full stack delivery + documentation = 100%.”",
    author: "– John M., COO, DevStrive Inc.",
  },
  {
    text: "“Our conversion rates doubled after they revamped our frontend. Legit game changers.”",
    author: "– Preethi D., Digital Head at ShopDeck",
  },

  {
    text: "“The perfect balance of design, performance, and delivery. Highly recommend this team.”",
    author: "– Riya N., Marketing Director at EchoCloud",
  },
];

const carouselSlides = [
  {
    src: "/assets/1.PNG",
    heading: "Cloud Services",
    text: "Empowering businesses to scale and innovate through secure, flexible, and cost-efficient cloud solutions.",
  },
  {
    src: "/assets/2.PNG",
    heading: "Application Development",
    text: "Transforming ideas into powerful digital experiences with seamless application development and proactive management.",
  },
  {
    src: "/assets/3.PNG",
    heading: "Cognitive Operations",
    text: "Enhancing operational efficiency and decision-making with AI-powered solutions that drive smarter business processes.",
  },
  {
    src: "/assets/4.PNG",
    heading: "Data & Analytics",
    text: "Unlocking the full potential of data by delivering actionable insights and fostering data-driven growth strategies.",
  },
  {
    src: "/assets/5.PNG",
    heading: "Network Solutions",
    text: "Building resilient, high-performance network infrastructures that enable seamless connectivity and secure communication.",
  },
  {
    src: "/assets/6.PNG",
    heading: "IT Consulting",
    text: "Providing expert guidance and innovative solutions to help businesses optimize technology, streamline operations, and achieve strategic goals.",
  },
];

const slideLinks = [
  "/services/cloud-solutions",
  "/services/application-development",
  "/services/cognitive-operations",
  "/services/data-analytics",
  "/services/network-solutions",
  "/services/it-consulting",
];

const slides = [
  {
    url: "/mou_collage_images/Madanapalle_Institute_of_Technology_&_Science_cst.jpg",
    title: "(MITS) CST Department Collaboration",
  },
  {
    url: "/mou_collage_images/VISWAM_Engineering_College.jpg",
    title: "Viswam Group of Institutions Campus Collaboration",
  },
  {
    url: "/mou_collage_images/Madanapalle_Institute_of_Technology_&_Science_csd.jpg",
    title: "(MITS) CSD Department Collaboration",
  },
  {
    url: "/mou_collage_images/Madanapalle_Institute_of_Technology_&_Science_cst_1.jpg",
    title: "(MITS) CST Department Collaboration",
  },
  {
    url: "/mou_collage_images/Sathyabama_University.jpg",
    title: "Sathyabama University Collaboration",
  }
];

export default function Home() {
  const statsRef = useRef();
  const countersStarted = useRef(false);
  const marqueeRef = useRef();
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupService, setPopupService] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-Play Effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Change 3000 to whatever speed you want (in milliseconds)

    // Cleanup the interval on component unmount or when index changes
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Stats counter animation
  useEffect(() => {
    const runCounters = () => {
      if (!statsRef.current) return;
      const counters = statsRef.current.querySelectorAll(".counter");
      counters.forEach((counter, i) => {
        counter.innerText = "0";
        const target = stats[i].target;
        const speed = 50; // Increased speed for better mobile performance
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
            // Small delay to ensure DOM is ready
            setTimeout(runCounters, 100);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" },
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Carousel fade+slide effect
  useEffect(() => {
    let animationFrame;
    let scrollAmount = 0;
    const speed = 1.2; // px per frame
    const scroll = () => {
      if (marqueeRef.current) {
        scrollAmount += speed;
        if (scrollAmount >= marqueeRef.current.scrollWidth / 2) {
          scrollAmount = 0;
        }
        marqueeRef.current.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    scroll();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Mission/Vision/Values card animation
  useEffect(() => {
    const cards = document.querySelectorAll(".mv-card");
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.2 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      src: "/assets/1.PNG",
      heading: "Cloud Solutions",
      text: "Seamless cloud migration and management services across AWS, Azure, and hybrid environments for scalable, secure, and cost-effective solutions.",
    },
    {
      src: "/assets/2.PNG",
      heading: "Application Development",
      text: "Custom web and mobile applications built with modern technologies, delivering exceptional user experiences and driving business growth.",
    },
    {
      src: "/assets/3.PNG",
      heading: "Cognitive Business Operations",
      text: "AI-powered automation and analytics to streamline operations, reduce costs, and enable smarter decision-making for modern enterprises.",
    },
    {
      src: "/assets/4.PNG",
      heading: "Data & Analytics",
      text: "Transform raw data into actionable insights with advanced analytics, BI dashboards, and AI-driven solutions for data-driven decision making.",
    },
    {
      src: "/assets/5.PNG",
      heading: "Network Solutions & Services",
      text: "Secure, high-performance network infrastructure and services ensuring seamless connectivity, reliability, and protection for your business.",
    },
    {
      src: "/assets/6.PNG",
      heading: "IT Consulting",
      text: "Strategic IT consulting to align technology with business goals, drive digital transformation, and maximize ROI through expert guidance.",
    },
  ];

  const carouselData = [
    {
      id: 1,
      title: "Cloud Services",
      description:
        "Empowering businesses to scale and innovate through secure, flexible cloud solutions worldwide.",
      image: "/assets/Cloud.jpg",
      link: "/services/cloud-solutions",
    },
    {
      id: 2,
      title: "Application Development",
      description:
        "Transforming ideas into powerful digital experiences with seamless development and management.",
      image: "/assets/App Development.jpg",
      link: "/services/application-development",
    },
    {
      id: 3,
      title: "Cognitive Operations",
      description:
        "Enhancing operational efficiency with AI-powered solutions for smarter business processes.",
      image: "/assets/data-science-ai.jpg",
      link: "/services/cognitive-operations",
    },
    {
      id: 4,
      title: "Data & Analytics",
      description:
        "Unlocking data potential with actionable insights and strategic growth solutions.",
      image: "/assets/business-intelligence.jpg",
      link: "/services/data-analytics",
    },
    {
      id: 5,
      title: "Network Solutions",
      description:
        "Building resilient network infrastructures for seamless connectivity and communication.",
      image: "/assets/network-monitoring.jpg",
      link: "/services/network-solutions",
    },
    {
      id: 6,
      title: "IT Consulting",
      description:
        "Providing expert guidance to optimize technology and achieve strategic goals.",
      image: "/assets/it-strategy.jpg",
      link: "/services/it-consulting",
    },
  ];

  const handleCarouselPause = () => {
    const carousel = document.querySelector(".carousel-marquee");
    if (carousel) {
      carousel.style.animationPlayState = "paused";
    }
  };

  const handleCarouselResume = () => {
    const carousel = document.querySelector(".carousel-marquee");
    if (carousel) {
      carousel.style.animationPlayState = "running";
    }
  };

  return (
    <>
      <div className="marquee-container">
        <div className="marquee">
          Welcome to Enkonix Software Services Pvt. Ltd — Empowering Innovation,
          Delivering Excellence Worldwide | Reach us at hr@enkonix.in | Call us:
          +91-9108191003
        </div>
      </div>
      <section id="home" className="home-section">
        <video autoPlay muted loop playsInline className="home-video-bg">
          <source
            src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660703/3202044-hd_1920_1080_25fps_lsyy0a.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="home-content">
          <h2 className="home-title">
            Welcome to
            <br />
            Enkonix Software Services
          </h2>
          <p className="home-text">
            <strong>At Enkonix Software Services Pvt. Ltd</strong>, we
            specialize in end-to-end software development, offering robust
            frontend and backend solutions as a full-stack development team. Our
            expertise spans across diverse technologies and frameworks, enabling
            us to build scalable, high-performance applications tailored to
            client needs.
          </p>
          <p className="home-text">
            We proudly collaborate on international projects, including key
            partnerships in the UK, delivering innovative and reliable software
            solutions across industries. Whether it's building custom platforms,
            modernizing legacy systems, or integrating cloud-based
            infrastructure
          </p>
          <p className="home-text">
            <strong>
              From concept to code — Enkonix powers your digital vision.
            </strong>
          </p>
        </div>
      </section>
      <section id="about" className="mission-vision-section">
        <Link to="/mission" className="mv-card-link">
          <div className="mv-card">
            <img
              src="/assets/mission_logo.png"
              alt="Mission Icon"
              className="mv-icon"
            />
            <h2 className="mv-title">Our Mission</h2>
            <p className="mv-text">
              To innovate and deliver impactful tech solutions that transform
              businesses and uplift communities.
            </p>
            <span className="read-more-link">Read More</span>
          </div>
        </Link>
        <Link to="/vision" className="mv-card-link">
          <div className="mv-card">
            <img
              src="/assets/vision_logo.png"
              alt="Vision Icon"
              className="mv-icon"
            />
            <h2 className="mv-title">Our Vision</h2>
            <p className="mv-text">
              To be a global leader in digital transformation, inspiring
              progress through technology.
            </p>
            <span className="read-more-link">Read More</span>
          </div>
        </Link>
        <Link to="/values" className="mv-card-link">
          <div className="mv-card">
            <img
              src="/assets/valores_logo.png"
              alt="Values Icon"
              className="mv-icon"
            />
            <h2 className="mv-title">Our Values</h2>
            <p className="mv-text">
              Integrity, Innovation, Collaboration, <br />
              and <br />
              Customer-Centric Excellence.
            </p>
            <span className="read-more-link">Read More</span>
          </div>
        </Link>
      </section>
      <section className="carousel-wrapper">
        <div className="carousel-container" id="carousel-container">
          {carouselData.map((service, index) => (
            <div className="carousel-slide" key={service.id}>
              <div
                className="slide-container glass-effect"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="slide-image"
                  style={{ marginBottom: "12px" }}
                />
                <h1 className="slide-heading" style={{ marginBottom: "18px" }}>
                  {service.title}
                </h1>
                <Link
                  to={service.link}
                  className="read-more-link"
                  style={{
                    margin: "0 auto",
                    display: "block",
                    fontSize: "1rem",
                    padding: "0.7rem 1.6rem",
                    zIndex: 10,
                    position: "relative",
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
          {/* Duplicate slides for seamless loop */}
          {carouselData.map((service, index) => (
            <div className="carousel-slide" key={`duplicate-${service.id}`}>
              <div
                className="slide-container glass-effect"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="slide-image"
                  style={{ marginBottom: "12px" }}
                />
                <h1 className="slide-heading" style={{ marginBottom: "18px" }}>
                  {service.title}
                </h1>
                <Link
                  to={service.link}
                  className="read-more-link"
                  style={{
                    margin: "0 auto",
                    display: "block",
                    fontSize: "1rem",
                    padding: "0.7rem 1.6rem",
                    zIndex: 10,
                    position: "relative",
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {popupOpen && popupService && (
        <div
          className="explore-popup-overlay"
          onClick={() => setPopupOpen(false)}
        >
          <div
            className="explore-popup-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ color: "#00f7ff", marginBottom: "12px" }}>
              {popupService.title}
            </h2>
            <p style={{ color: "#e0e0e0", marginBottom: "18px" }}>
              {popupService.description}
            </p>
            <button
              className="explore-popup-close"
              onClick={() => setPopupOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <section className="featured-section">
        <div className="featured-container">
          <h2 className="featured-title">Featured Solutions</h2>
          <div className="featured-grid">
            <div className="featured-card">
              <img
                src="/assets/data-science-ai.jpg"
                alt="AI & Data Science"
                className="featured-img"
              />
              <h3>AI & Data Science</h3>
              <p>
                Transform your business with intelligent automation and advanced
                analytics that streamline workflows, reduce costs, and
                accelerate innovation through machine learning and AI-powered
                insights.
              </p>
              <Link to="/services/ai-service" className="featured-link">
                Learn More
              </Link>
            </div>
            <div className="featured-card">
              <img
                src="/assets/Cloud.jpg"
                alt="Cloud Solutions"
                className="featured-img"
              />
              <h3>Cloud Solutions</h3>
              <p>
                Unlock the full potential of the cloud with expert consulting,
                migration, and management services across AWS, Azure, and hybrid
                environments for scalable, secure, and cost-effective solutions.
              </p>
              <Link to="/services/cloud-solutions" className="featured-link">
                Learn More
              </Link>
            </div>
            <div className="featured-card">
              <img
                src="/assets/App Development.jpg"
                alt="Application Development"
                className="featured-img"
              />
              <h3>Application Development</h3>
              <p>
                Build robust, scalable web and mobile applications with our
                end-to-end full stack development expertise across modern
                technologies, delivering exceptional user experiences.
              </p>
              <Link
                to="/services/application-development"
                className="featured-link"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="whychoose-section dark">
        <div className="whychoose-container">
          <h2 className="whychoose-title">Why Choose Enkonix?</h2>
          <div className="whychoose-grid">
            <div className="whychoose-card">
              <div className="whychoose-card-top">
                <FaLightbulb className="whychoose-card-icon" />
              </div>
              <div className="whychoose-card-content">
                <h3>Innovation-Driven</h3>
                <p>
                  We lead with cutting-edge innovation, delivering future-ready
                  solutions that keep you ahead of the curve with advanced
                  technologies and forward-thinking approaches.
                </p>
                <span className="whychoose-label">INNOVATION</span>
              </div>
            </div>
            <div className="whychoose-card">
              <div className="whychoose-card-top">
                <FaUsers className="whychoose-card-icon" />
              </div>
              <div className="whychoose-card-content">
                <h3>Expert Team</h3>
                <p>
                  Our team of certified professionals brings deep expertise and
                  a passion for excellence to every project, ensuring superior
                  quality and reliable delivery.
                </p>
                <span className="whychoose-label">TEAM</span>
              </div>
            </div>
            <div className="whychoose-card">
              <div className="whychoose-card-top">
                <FaHandshake className="whychoose-card-icon" />
              </div>
              <div className="whychoose-card-content">
                <h3>Client-Focused</h3>
                <p>
                  We partner with you at every step, ensuring solutions are
                  tailored to your unique goals and challenges with personalized
                  attention and dedicated support.
                </p>
                <span className="whychoose-label">CLIENT-FIRST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 1: Core Competencies */}
      <section className="core-competencies-section">
        <div className="core-competencies-container">
          <h2 className="core-competencies-title">Our Core Competencies</h2>
          <p className="core-competencies-subtitle">
            Delivering cutting-edge solutions across the digital landscape
          </p>
          <div className="core-competencies-grid">
            <div className="competency-card">
              <div className="competency-icon">
                <img src="/assets/cybersecurity.jpg" alt="Cybersecurity" />
              </div>
              <h3>Cybersecurity & Compliance</h3>
              <p>
                Fortify your digital assets with enterprise-grade security
                solutions, ensuring compliance with industry standards and
                protecting against evolving cyber threats.
              </p>
              <ul className="competency-features">
                <li>Advanced Threat Detection</li>
                <li>Compliance Management</li>
                <li>Security Audits & Assessments</li>
              </ul>
            </div>
            <div className="competency-card">
              <div className="competency-icon">
                <img
                  src="/assets/digital-transformation.jpg"
                  alt="Digital Transformation"
                />
              </div>
              <h3>Digital Transformation</h3>
              <p>
                Accelerate your business evolution with comprehensive digital
                transformation strategies that modernize operations and drive
                competitive advantage.
              </p>
              <ul className="competency-features">
                <li>Legacy System Modernization</li>
                <li>Process Automation</li>
                <li>Technology Roadmapping</li>
              </ul>
            </div>
            <div className="competency-card">
              <div className="competency-icon">
                <img
                  src="/assets/enterprise-software.jpg"
                  alt="Enterprise Solutions"
                />
              </div>
              <h3>Enterprise Solutions</h3>
              <p>
                Build scalable, robust enterprise applications that streamline
                operations, enhance productivity, and provide measurable
                business value.
              </p>
              <ul className="competency-features">
                <li>Custom ERP Systems</li>
                <li>Workflow Automation</li>
                <li>Integration Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us" ref={statsRef}>
        <div className="content-wrapper">
          <h2>
            Why Choose <span>Enkonix Software Services Pvt. Ltd?</span>
          </h2>
          <p>
            At Enkonix, we don’t just build tech — we build trust. Our team
            crafts tailored software with innovation, precision, and passion.
            We're not just coders, we're problem-solvers with purpose.
          </p>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div className="stat-box" key={i}>
                <div className="stat-heading">
                  <b>{stat.heading}</b>
                </div>
                <h3 className="counter">0</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="explore-services-section">
        <h1>Explore Our Collaborative Milestones</h1>
        <p>
          Discover how Enkonix Software Services Pvt. Ltd is shaping the future
          of technology through strategic partnerships and innovative projects.
        </p>

        <div className="carousel-marquee-container" ref={marqueeRef}>
          {/* Main Image */}
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              objectFit: "contain",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="carousel-marquee-group"
          >
            <div className="carousel-marquee-content">
              <h2>{slides[currentIndex].title}</h2>
            </div>
          </div>

          {/* Left Arrow */}
          <div className="carousel-marquee-left-arrow">
            <button onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>

          {/* Right Arrow */}
          <div className="carousel-marquee-right-arrow">
            <button onClick={nextSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="carousel-marquee-dots">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`carousel-marquee-index-dots  `}
              >
                <span
                  className={` ${
                    currentIndex === slideIndex
                      ? "active-dot  "
                      : "not-active-dot"
                  }`}
                >
                  ●
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="learn-best-from-alumni">
        <div className="content-wrapper">
          <h2>Learn the Best from the Alumni of</h2>
          <div className="alumni-logos">
            {alumni.map((a, i) => (
              <img src={a.src} alt={a.alt} className="alumni-logo" key={i} />
            ))}
          </div>
          <br />
          <h2> and many more...</h2>
          <h3>Recognized By</h3>
          <div className="recognized-logos">
            {recognized.map((r, i) => (
              <img
                src={r.src}
                alt={r.alt}
                className="recognized-logo"
                key={i}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials" className="testimonials-section">
        <h1 className="testimonials-title">What Our Clients Say</h1>
        <p className="testimonials-subtitle">
          Real stories from real clients who’ve experienced transformation with
          us.
        </p>
        <div className="testimonial-cards">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">{t.text}</p>
              <h3 className="testimonial-author">{t.author}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
