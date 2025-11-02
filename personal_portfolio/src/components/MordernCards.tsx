import React, { useState, useEffect } from "react";
import {
  Zap,
  Coffee,
  MessageCircle,
  Mail,
  Phone,
  Calendar,
  User,
  Code,
  Rocket,
  Heart,
  Star,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Briefcase,
} from "lucide-react";
import "./MordernCard.css";

const ModernCards = () => {
  const [modeHovered, setModeHovered] = useState(false);
  const [aboutHovered, setAboutHovered] = useState(false);
  const [modeAnimationIndex, setModeAnimationIndex] = useState(0);
  const [aboutAnimationIndex, setAboutAnimationIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Animated status messages for mode card
  const statusMessages = [
    {
      icon: Zap,
      text: "Ready to build amazing things",
      color: "text-green-500",
    },
    {
      icon: Coffee,
      text: "Fueled by coffee & creativity",
      color: "text-yellow-500",
    },
    {
      icon: Rocket,
      text: "Launching new projects daily",
      color: "text-blue-500",
    },
    { icon: Heart, text: "Passionate about clean code", color: "text-red-500" },
  ];

  // Animated skills for about card
  const skills = [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "Flutter", level: 85, color: "bg-cyan-500" },
    { name: "Python", level: 88, color: "bg-green-500" },
    { name: "Node.js", level: 82, color: "bg-yellow-500" },
  ];

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Animate status messages
  useEffect(() => {
    const interval = setInterval(() => {
      setModeAnimationIndex((prev) => (prev + 1) % statusMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate about card elements
  useEffect(() => {
    const interval = setInterval(() => {
      setAboutAnimationIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const getStatusColor = () => {
    const hour = currentTime.getHours();
    if (hour >= 9 && hour <= 18) return "bg-green-500";
    if (hour >= 19 && hour <= 22) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getStatusText = () => {
    const hour = currentTime.getHours();
    if (hour >= 9 && hour <= 18) return "Active & Available";
    if (hour >= 19 && hour <= 22) return "Evening Hours";
    return "Offline";
  };

  return (
    <div className="cards-container">
      {/* Mode Card */}
      <div
        className={`mode-card ${modeHovered ? "hovered" : ""}`}
        onMouseEnter={() => setModeHovered(true)}
        onMouseLeave={() => setModeHovered(false)}
      >
        <div className="card-header">
          <div className="header-left">
            <div className="status-indicator">
              <div className={`status-dot ${getStatusColor()}`}></div>
              <span className="status-text">{getStatusText()}</span>
            </div>
            <div className="time-display">
              <Clock className="w-4 h-4" />
              <span>{formatTime(currentTime)}</span>
            </div>
          </div>
          <div className="availability-badge">
            <Zap className="w-4 h-4" />
            <span>Available</span>
          </div>
        </div>

        <div className="card-content">
          <div className="mode-title">
            <h3>Current Mode</h3>
            <div className="pulse-ring"></div>
          </div>

          <div className="status-message">
            <div className="status-icon">
              {React.createElement(statusMessages[modeAnimationIndex].icon, {
                className: `w-5 h-5 ${statusMessages[modeAnimationIndex].color}`,
              })}
            </div>
            <p className="status-text-animated">
              {statusMessages[modeAnimationIndex].text}
            </p>
          </div>

          <div className="opportunities-section">
            <h4>Open For:</h4>
            <div className="opportunity-tags">
              <span className="tag full-time">
                <Briefcase className="w-3 h-3" />
                Full-time
              </span>
              <span className="tag freelance">
                <Star className="w-3 h-3" />
                Freelance
              </span>
              <span className="tag consulting">
                <MessageCircle className="w-3 h-3" />
                Consulting
              </span>
            </div>
          </div>

          <div className="location-info">
            <MapPin className="w-4 h-4" />
            <span>Hyderabad, India</span>
            <span className="timezone">GMT+5:30</span>
          </div>
        </div>

        <div className="card-footer">
          <button className="contact-btn primary">
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="contact-btn secondary">
            <Calendar className="w-4 h-4" />
            <span>Schedule</span>
          </button>
        </div>
      </div>

      {/* About Card */}
      <div
        className={`about-card ${aboutHovered ? "hovered" : ""}`}
        onMouseEnter={() => setAboutHovered(true)}
        onMouseLeave={() => setAboutHovered(false)}
      >
        <div className="card-header">
          <div className="profile-section">
            <div className="profile-icon">
              <User className="w-5 h-5" />
            </div>
            <div className="profile-info">
              <h3>About Me</h3>
              <span className="role-badge">Software Architect</span>
            </div>
          </div>
          <div className="experience-badge">
            <span className="exp-number">2+</span>
            <span className="exp-label">Years</span>
          </div>
        </div>

        <div className="card-content">
          <div className="description">
            <p>
              Aspiring <span className="highlight">Software Architect</span>{" "}
              with hands-on experience in full-stack development. I'm passionate
              about building{" "}
              <span className="highlight">efficient, scalable systems</span> and
              crafting
              <span className="highlight">impactful user experiences</span> that
              make a difference.
            </p>
          </div>

          <div className="skills-section">
            <h4>Core Skills</h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`skill-item ${
                    index === aboutAnimationIndex ? "active" : ""
                  }`}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-progress ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="passion-section">
            <div className="passion-item">
              <Code className="w-4 h-4 text-blue-500" />
              <span>Clean Architecture</span>
            </div>
            <div className="passion-item">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>Innovation</span>
            </div>
            <div className="passion-item">
              <Heart className="w-4 h-4 text-red-500" />
              <span>User Experience</span>
            </div>
          </div>
        </div>

        <div className="card-footer">
          <div className="achievement-stats">
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Publications</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernCards;
