import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Briefcase,
  ChevronRight,
  Mail,
  Code,
  ArrowRight,
  User,
  ExternalLink,
  Sun,
  Moon,
  Twitter,
  Linkedin,
  Github,
  Award,
} from "lucide-react";
import "./a.css";

const Portfolio = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeExperience, setActiveExperience] = useState(0);
  const [animatedYears, setAnimatedYears] = useState(0);
  const [theme, setTheme] = useState<keyof typeof themes>("dark");

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate years of experience
  const calculateYearsOfExperience = () => {
    const startDate = new Date("2023-01-16");
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - startDate.getTime());
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return diffYears;
  };

  // Animate the years counter on mount
  useEffect(() => {
    const targetYears = calculateYearsOfExperience();
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetYears / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetYears) {
        setAnimatedYears(targetYears);
        clearInterval(timer);
      } else {
        setAnimatedYears(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const themes = {
    dark: {
      bg: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      cardBg: "rgba(30, 41, 59, 0.6)",
      cardBorder: "rgba(148, 163, 184, 0.1)",
      text: "#f8fafc",
      textSecondary: "#94a3b8",
      innerBg: "rgba(15, 23, 42, 0.6)",
    },
    light: {
      bg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
      cardBg: "rgba(255, 255, 255, 0.8)",
      cardBorder: "rgba(148, 163, 184, 0.2)",
      text: "#0f172a",
      textSecondary: "#475569",
      innerBg: "rgba(241, 245, 249, 0.8)",
    },
  };

  const currentTheme = themes[theme];

  const getStatusColor = () => {
    const hour = currentTime.getHours();
    if (hour >= 9 && hour <= 18) return "#10b981";
    if (hour >= 19 && hour <= 22) return "#f59e0b";
    return "#ef4444";
  };

  const awards = [
    {
      date: "Nov 2023",
      title: "Emerging Employee Award",
      issuedBy: "Stuart Allaway and Nanda Gottumukala",
      description:
        "Awarded for exceptional contributions to professional development and fostering continuous growth within the 1st year of employment",
    },
  ];

  const education = [
    {
      period: "Jul 2019 — Jul 2023",
      degree: "B.Tech, Computer Science Engineering",
      institution: "ICFAI Foundation for Higher Education",
      location: "Hyderabad, India",
      cgpa: "9.1",
      activities: ["Technical Club", "Sports Club"],
    },
  ];

  const experiences = [
    {
      id: 1,
      period: "Jul 2023 — Present",
      title: "Full Stack Developer",
      company: "Xyenta Solutions",
      location: "Hyderabad, India",
      duration: "2y 4m",
      skills: [
        "React Ts/Js",
        "Flutter",
        "Python",
        "GraphQL",
        "Memgraph",
        "NestJS",
        "FastAPI",
      ],
      description:
        "Leading full-stack development on enterprise applications including xflow (governance-driven data lineage tool), shipping portals, and fintech solutions with focus on modern UI/UX and scalable architecture.",
      achievements: [
        "Built xflow ETL platform with React TypeScript, Python backend, and interactive node-based UI using XyFlow",
        "Developed shipping portal for Divi's Laboratories using React.js and NestJS with optimized order/payment tracking",
        "Created fintech app with Flutter and FastAPI, integrating ML-based PDF extraction",
        "Implemented graph databases (Memgraph) with GraphQL and Cypher queries for complex data relationships",
        "Enhanced performance using React Query for intelligent data caching",
      ],
      color: "#3b82f6",
    },
    {
      id: 2,
      period: "2024 — 2024",
      title: "Full Stack Developer",
      company: "ABOIN (Freelance)",
      location: "Hyderabad, India (Remote)",
      duration: "<1y",
      skills: [
        "Flutter",
        "Express.js",
        "PostgreSQL",
        "Firebase",
        "DigitalOcean",
      ],
      description:
        "Designed and built the ABOIN mobile app from scratch, handling end-to-end development from UI/UX to cloud infrastructure deployment.",
      achievements: [
        "Built cross-platform app for Android & iOS with Flutter",
        "Deployed scalable Express.js backend with PostgreSQL",
        "Integrated Firebase OTP authentication & push notifications",
        "Successfully published to App Store and Play Store",
      ],
      color: "#f59e0b",
    },
    {
      id: 3,
      period: "Jan 2023 — Jun 2023",
      title: "Full Stack Intern",
      company: "Xyenta Solutions",
      location: "Hyderabad, India",
      duration: "6m",
      skills: ["JWT Auth", "UI/UX", "PDF Extraction"],
      description:
        "Gained hands-on experience in authentication systems and data processing.",
      achievements: [
        "Implemented secure JWT authentication",
        "Designed intuitive user interfaces",
      ],
      color: "#10b981",
    },
    {
      id: 4,
      period: "Mar 2023 — May 2023",
      title: "Flutter Developer",
      company: "Channel Mandate",
      location: "Remote",
      duration: "3m",
      skills: ["Flutter", "Firebase", "Node.js"],
      description: "Developed comprehensive real estate mobile application.",
      achievements: [
        "Built cross-platform mobile app",
        "Integrated real-time notifications",
      ],
      color: "#8b5cf6",
    },
    {
      id: 5,
      period: "May 2021 — Jul 2021",
      title: "Software Associate",
      company: "Isthara Parks Pvt. Ltd.",
      location: "Hyderabad, India",
      duration: "3m",
      skills: ["Python", "Web Scraping", "Data Analysis", "Automation"],
      description:
        "Developed automated data collection systems for lead generation and management.",
      achievements: [
        "Built Python web scrapers for multiple lead-generating websites",
        "Automated lead investigation and data crunching processes",
        "Revised and optimized lead database for improved quality",
      ],
      color: "#ec4899",
    },
  ];

  const projects = [
    {
      name: "XFlow Platform",
      desc: "Enterprise ETL platform with node-based UI for governance-driven data lineage, built with React TypeScript, Python, and Memgraph",
      color: "#3b82f6",
      status: "Production",
    },
    {
      name: "OneMarineX",
      desc: "World's first integrated maritime platform for ship supplies, port logistics, and crew experiences using AI and real-time data",
      color: "#06b6d4",
      status: "In Development",
    },
    {
      name: "Divi's Shipping Portal",
      desc: "Production-ready logistics management system with role-based access for 4 user types, handling order tracking and payment management",
      color: "#10b981",
      status: "Production",
    },
    {
      name: "ABOIN Mobile App",
      desc: "Cross-platform service booking app with Firebase OTP auth, real-time tracking for medical assistance, property care & personal requests",
      color: "#f59e0b",
      status: "Published",
    },
    {
      name: "GrowCoins (Fintech MVP)",
      desc: "Flutter-based financial planning app with ML-driven spending insights and mutual fund investment plans to help users reach savings goals",
      color: "#8b5cf6",
      status: "MVP",
    },
  ];

  const publications = [
    {
      date: "Dec 2022",
      conf: "ISDA'22",
      title: "Comparative Analysis of ML Models",
    },
    {
      date: "Dec 2022",
      conf: "ICIET-2022",
      title: "Voice Notepad for Smart Healthcare",
    },
  ];

  return (
    <div
      className="portfolio"
      style={{
        background: currentTheme.bg,
        color: currentTheme.text,
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <header
        className="portfolio-header"
        style={{
          background: currentTheme.cardBg,
          border: `1px solid ${currentTheme.cardBorder}`,
        }}
      >
        <div className="avatar">PJ</div>
        <div className="header-info">
          <h1>Parmeshwara Joga</h1>
          <p style={{ color: currentTheme.textSecondary }}>
            Full Stack Developer
          </p>
        </div>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          style={{
            background: currentTheme.innerBg,
            border: `1px solid ${currentTheme.cardBorder}`,
            color: currentTheme.text,
          }}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="download-btn">Download CV</button>
      </header>

      {/* Main Grid - 3 Columns */}
      <div className="portfolio-grid">
        {/* Column 1: About & Contact Card */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div
            className="card about-card"
            style={{
              background: currentTheme.cardBg,
              border: `1px solid ${currentTheme.cardBorder}`,
            }}
          >
            <div className="card-glow" />

            <div className="about-header">
              <div className="about-icon">
                <User size={24} />
              </div>
              <div className="about-title">
                <h3>About Me</h3>
                <span style={{ color: currentTheme.textSecondary }}>
                  Software Architect
                </span>
              </div>
              <div
                className="status-dot"
                style={{
                  background: getStatusColor(),
                  boxShadow: `0 0 20px ${getStatusColor()}`,
                }}
              />
            </div>

            <p
              className="about-description"
              style={{ color: currentTheme.textSecondary }}
            >
              Aspiring <span className="highlight">Software Architect</span>{" "}
              with hands-on experience in full-stack development. Passionate
              about building{" "}
              <span className="highlight">efficient, scalable systems</span>.
            </p>

            <div className="skills-section">
              <h4 style={{ color: currentTheme.textSecondary }}>CORE SKILLS</h4>
              <div className="skills-tags">
                {[
                  "React Ts/Js",
                  "Flutter",
                  "Python",
                  "GraphQL",
                  "Memgraph",
                  "NestJs",
                  "ExpressJs",
                  "PostgresSQL",
                  "MongoDb",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="skill-tag"
                    style={{
                      background: currentTheme.innerBg,
                      border: `1px solid ${currentTheme.cardBorder}`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="stats-grid">
              {[
                { num: "15+", label: "Projects" },
                { num: "5+", label: "Tech Stack" },
                { num: "2y+", label: "Experience" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="stat-item"
                  style={{
                    background: currentTheme.innerBg,
                    border: `1px solid ${currentTheme.cardBorder}`,
                  }}
                >
                  <div className="stat-num">{stat.num}</div>
                  <div
                    className="stat-label"
                    style={{ color: currentTheme.textSecondary }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="location-info"
              style={{ color: currentTheme.textSecondary }}
            >
              <MapPin size={16} />
              <span>Hyderabad, India</span>
              <span
                className="timezone"
                style={{ background: currentTheme.innerBg }}
              >
                GMT+5:30
              </span>
            </div>

            <h4
              className="connect-title"
              style={{ color: currentTheme.textSecondary }}
            >
              CONNECT WITH ME
            </h4>
            <div className="social-grid">
              {[
                { icon: Twitter, label: "Twitter", color: "#1DA1F2" },
                { icon: Linkedin, label: "LinkedIn", color: "#0077B5" },
                {
                  icon: Github,
                  label: "GitHub",
                  color: theme === "dark" ? "#ffffff" : "#333333",
                },
                { icon: Mail, label: "Email", color: "#EA4335" },
              ].map((social, i) => (
                <div
                  key={i}
                  className="social-item"
                  style={{
                    background: `${social.color}15`,
                    border: `1px solid ${social.color}30`,
                  }}
                >
                  {React.createElement(social.icon, {
                    size: 20,
                    color: social.color,
                  })}
                  <div className="social-label">{social.label}</div>
                </div>
              ))}
            </div>

            <button className="contact-btn">
              <Mail size={18} />
              Contact Me
              <ArrowRight size={18} />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              flex: 1,
            }}
          >
            {/* Years of Experience Section */}
            <div
              className="card years-card"
              style={{
                background: currentTheme.cardBg,
                border: `1px solid ${currentTheme.cardBorder}`,
              }}
            >
              <div className="years-content">
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    boxShadow: "0 8px 32px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <Briefcase size={36} color="white" />
                </div>
                <span
                  className="years-number"
                  style={{
                    animation: "scaleIn 0.5s ease-out",
                    display: "inline-block",
                  }}
                >
                  {animatedYears.toFixed(1)}
                </span>
                <span
                  className="years-label"
                  style={{
                    color: currentTheme.textSecondary,
                    animation: "fadeInUp 0.8s ease-out 0.3s both",
                  }}
                >
                  Years of Experience
                </span>
                <p
                  style={{
                    color: currentTheme.textSecondary,
                    fontSize: "13px",
                    marginTop: "12px",
                    textAlign: "center",
                    maxWidth: "200px",
                    animation: "fadeInUp 0.8s ease-out 0.5s both",
                  }}
                >
                  Building scalable solutions across multiple tech stacks
                </p>
              </div>
            </div>
            {/* Awards & Recognition Section */}
            <div
              className="card awards-card"
              style={{
                background: currentTheme.cardBg,
                border: `1px solid ${currentTheme.cardBorder}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Award size={20} color="white" />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "18px" }}>
                    Awards & Recognition
                  </h3>
                  <p
                    style={{
                      margin: "2px 0 0",
                      fontSize: "12px",
                      color: currentTheme.textSecondary,
                    }}
                  >
                    Professional achievements
                  </p>
                </div>
              </div>
              <div className="awards-list">
                {awards.map((award, i) => (
                  <div
                    key={i}
                    className="award-item"
                    style={{
                      background: currentTheme.innerBg,
                      padding: "16px",
                      borderRadius: "10px",
                      border: `1px solid ${currentTheme.cardBorder}`,
                      marginBottom: i === awards.length - 1 ? "0" : "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          color: "#f59e0b",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        {award.date}
                      </span>
                    </div>
                    <h4
                      style={{
                        color: currentTheme.text,
                        fontSize: "15px",
                        fontWeight: "600",
                        margin: "0 0 6px",
                      }}
                    >
                      {award.title}
                    </h4>
                    <p
                      style={{
                        color: currentTheme.textSecondary,
                        fontSize: "12px",
                        margin: "0 0 8px",
                        fontStyle: "italic",
                      }}
                    >
                      Issued by {award.issuedBy}
                    </p>
                    <p
                      style={{
                        color: currentTheme.textSecondary,
                        fontSize: "13px",
                        margin: 0,
                        lineHeight: "1.6",
                      }}
                    >
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div
              className="card education-card"
              style={{
                background: currentTheme.cardBg,
                border: `1px solid ${currentTheme.cardBorder}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "18px" }}>Education</h3>
                  <p
                    style={{
                      margin: "2px 0 0",
                      fontSize: "12px",
                      color: currentTheme.textSecondary,
                    }}
                  >
                    Academic background
                  </p>
                </div>
              </div>
              <div className="education-list">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="education-item"
                    style={{
                      background: currentTheme.innerBg,
                      padding: "16px",
                      borderRadius: "10px",
                      border: `1px solid ${currentTheme.cardBorder}`,
                      marginBottom: i === education.length - 1 ? "0" : "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "8px",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          color: "#06b6d4",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        {edu.period}
                      </span>
                      <div
                        style={{
                          background:
                            "linear-gradient(135deg, #10b981, #059669)",
                          color: "white",
                          padding: "4px 12px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        CGPA: {edu.cgpa}
                      </div>
                    </div>
                    <h4
                      style={{
                        color: currentTheme.text,
                        fontSize: "15px",
                        fontWeight: "600",
                        margin: "0 0 6px",
                      }}
                    >
                      {edu.degree}
                    </h4>
                    <p
                      style={{
                        color: currentTheme.textSecondary,
                        fontSize: "13px",
                        margin: "0 0 12px",
                        fontWeight: "500",
                      }}
                    >
                      {edu.institution}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: currentTheme.textSecondary,
                        fontSize: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                    {edu.activities && edu.activities.length > 0 && (
                      <div>
                        <p
                          style={{
                            color: currentTheme.textSecondary,
                            fontSize: "11px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            margin: "0 0 8px",
                          }}
                        >
                          Extracurricular Activities
                        </p>
                        <div
                          style={{
                            display: "flex",
                            gap: "6px",
                            flexWrap: "wrap",
                          }}
                        >
                          {edu.activities.map((activity, j) => (
                            <span
                              key={j}
                              style={{
                                background: currentTheme.cardBg,
                                border: `1px solid ${currentTheme.cardBorder}`,
                                padding: "4px 10px",
                                borderRadius: "6px",
                                fontSize: "12px",
                                color: currentTheme.textSecondary,
                              }}
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Experience Timeline */}
        <div
          className="card experience-card"
          style={{
            background: currentTheme.cardBg,
            border: `1px solid ${currentTheme.cardBorder}`,
          }}
        >
          <div
            className="experience-header"
            style={{ borderBottom: `1px solid ${currentTheme.cardBorder}` }}
          >
            <div className="exp-header-left">
              <div className="exp-icon">
                <Briefcase size={20} />
              </div>
              <h3>Experience</h3>
            </div>
            <div className="exp-stats">
              <div className="exp-stat">
                <div className="exp-stat-num">3</div>
                <div
                  className="exp-stat-label"
                  style={{ color: currentTheme.textSecondary }}
                >
                  ROLES
                </div>
              </div>
              <div
                className="exp-divider"
                style={{ background: currentTheme.cardBorder }}
              />
              <div className="exp-stat">
                <div className="exp-stat-num">2+</div>
                <div
                  className="exp-stat-label"
                  style={{ color: currentTheme.textSecondary }}
                >
                  YEARS
                </div>
              </div>
            </div>
          </div>

          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="experience-item"
              onClick={() =>
                setActiveExperience(activeExperience === i ? -1 : i)
              }
              style={{
                transform: activeExperience === i ? "translateX(4px)" : "none",
              }}
            >
              <div className="exp-timeline">
                <div
                  className="exp-dot"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 0 4px ${currentTheme.cardBg}, 0 0 0 6px ${
                      activeExperience === i
                        ? exp.color
                        : currentTheme.cardBorder
                    }`,
                  }}
                >
                  <Briefcase size={16} color="white" />
                </div>
                {i < experiences.length - 1 && (
                  <div
                    className="exp-line"
                    style={{
                      background: `linear-gradient(to bottom, ${currentTheme.cardBorder}, transparent)`,
                    }}
                  />
                )}
              </div>

              <div
                className={`exp-content ${
                  activeExperience === i ? "active" : ""
                }`}
                style={{
                  background:
                    activeExperience === i
                      ? "rgba(59, 130, 246, 0.05)"
                      : currentTheme.innerBg,
                  border: `1px solid ${
                    activeExperience === i
                      ? "rgba(59, 130, 246, 0.3)"
                      : currentTheme.cardBorder
                  }`,
                }}
              >
                <div className="exp-meta">
                  <div
                    className="exp-date"
                    style={{ color: currentTheme.textSecondary }}
                  >
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <span
                    className="exp-duration"
                    style={{ background: exp.color }}
                  >
                    {exp.duration}
                  </span>
                </div>

                <h4 className="exp-title">{exp.title}</h4>

                <div className="exp-company-info">
                  <span className="exp-company">{exp.company}</span>
                  <div
                    className="exp-location"
                    style={{ color: currentTheme.textSecondary }}
                  >
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>

                <p
                  className="exp-description"
                  style={{ color: currentTheme.textSecondary }}
                >
                  {exp.description}
                </p>

                <div className="exp-skills">
                  {exp.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="exp-skill"
                      style={{
                        background: currentTheme.innerBg,
                        border: `1px solid ${currentTheme.cardBorder}`,
                        color: currentTheme.textSecondary,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {activeExperience === i && (
                  <div
                    className="exp-achievements"
                    style={{
                      borderTop: `1px solid ${currentTheme.cardBorder}`,
                    }}
                  >
                    <h5 style={{ color: currentTheme.textSecondary }}>
                      KEY ACHIEVEMENTS
                    </h5>
                    {exp.achievements.map((achievement, k) => (
                      <div
                        key={k}
                        className="achievement-item"
                        style={{ color: currentTheme.textSecondary }}
                      >
                        <ChevronRight size={14} color="#3b82f6" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Column 3: Projects & Latest Work */}
        <div className="right-column">
          {/* Projects */}
          <div
            className="card projects-card"
            style={{
              background: currentTheme.cardBg,
              border: `1px solid ${currentTheme.cardBorder}`,
            }}
          >
            <h3 className="projects-title">
              <Code size={24} />
              Featured Projects
            </h3>

            {projects.map((project, i) => (
              <div
                key={i}
                className="project-item"
                style={{
                  background: currentTheme.innerBg,
                  border: `1px solid ${currentTheme.cardBorder}`,
                }}
              >
                <div
                  className="project-icon"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                  }}
                />
                <div className="project-info">
                  <h4>{project.name}</h4>
                  <p style={{ color: currentTheme.textSecondary }}>
                    {project.desc}
                  </p>
                </div>
                <ExternalLink size={16} color={currentTheme.textSecondary} />
              </div>
            ))}

            <div className="cta-box">
              <h4>Ready to start a project?</h4>
              <p style={{ color: currentTheme.textSecondary }}>
                I'm always open to discussing new opportunities
              </p>
              <button className="cta-btn">
                Send Message
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Latest Work */}
          <div
            className="card latest-work-card"
            style={{
              background: currentTheme.cardBg,
              border: `1px solid ${currentTheme.cardBorder}`,
              flex: 1,
            }}
          >
            <div className="latest-work-header">
              <div>
                <h3>Latest Work</h3>
                <p
                  style={{
                    color: currentTheme.textSecondary,
                    fontSize: "13px",
                    margin: "4px 0 0",
                  }}
                >
                  Featured project showcase
                </p>
              </div>
            </div>
            <div
              className="work-showcase"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px",
                border: `1px solid ${currentTheme.cardBorder}`,
              }}
            >
              <div className="work-gradient"></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  zIndex: 2,
                  color: "white",
                }}
              >
                <h4
                  style={{
                    margin: "0 0 6px",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  Divi's Shipping Portal
                </h4>
                <p
                  style={{
                    margin: "0 0 12px",
                    fontSize: "13px",
                    opacity: 0.9,
                  }}
                >
                  React + NestJS based logistics & tracking
                </p>
                <a
                  href="http://xtrack.divislabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: "600",
                    padding: "8px 16px",
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
          {/* Publications and Years Grid */}

          <div
            // className="bottom-grid"
            style={{
              width: "100%",
            }}
          >
            {/* Publications Section */}
            <div
              className="card publications-card"
              style={{
                background: currentTheme.cardBg,
                border: `1px solid ${currentTheme.cardBorder}`,
              }}
            >
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Award size={20} color="white" />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "18px" }}>Publications</h3>
                  <p
                    style={{
                      margin: "2px 0 0",
                      fontSize: "12px",
                      color: currentTheme.textSecondary,
                    }}
                  >
                    Research contributions
                  </p>
                </div>
              </div>
              <div className="publications-list">
                {publications.map((pub, i) => (
                  <div
                    key={i}
                    className="publication-item"
                    style={{
                      background: currentTheme.innerBg,
                      padding: "14px",
                      borderRadius: "10px",
                      border: `1px solid ${currentTheme.cardBorder}`,
                      marginBottom:
                        i === publications.length - 1 ? "0" : "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        marginBottom: "6px",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="pub-date"
                        style={{
                          color: "#3b82f6",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        {pub.date}
                      </span>
                      <span style={{ color: currentTheme.textSecondary }}>
                        •
                      </span>
                      <span
                        className="pub-conf"
                        style={{
                          color: currentTheme.textSecondary,
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        {pub.conf}
                      </span>
                    </div>
                    <span
                      className="pub-title"
                      style={{
                        color: currentTheme.text,
                        fontSize: "13px",
                        display: "block",
                        lineHeight: "1.5",
                      }}
                    >
                      {pub.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="bottom-sections">
        {/* Get in Touch Section - Full Width */}
        <div
          className="card get-in-touch-card"
          style={{
            background: currentTheme.cardBg,
            border: `1px solid ${currentTheme.cardBorder}`,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 8px" }}>Let's Connect</h3>
              <p
                style={{
                  color: currentTheme.textSecondary,
                  fontSize: "13px",
                  margin: 0,
                }}
              >
                Feel free to reach out on any platform
              </p>
            </div>
            <div className="touch-social-links">
              {[
                { icon: Twitter, color: "#1DA1F2", label: "Twitter" },
                { icon: Linkedin, color: "#0077B5", label: "LinkedIn" },
                {
                  icon: Github,
                  color: theme === "dark" ? "#ffffff" : "#333333",
                  label: "GitHub",
                },
                { icon: Mail, color: "#EA4335", label: "Email" },
              ].map((social, i) => (
                <div
                  key={i}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: `${social.color}15`,
                    border: `1px solid ${social.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 4px 12px ${social.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {React.createElement(social.icon, {
                    size: 20,
                    color: social.color,
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
