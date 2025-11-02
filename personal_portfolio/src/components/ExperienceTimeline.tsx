import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import "./ExperienceTimeline.css";

const ExperienceTimeline = () => {
  const [activeItem, setActiveItem] = useState(0);

  const timelineData = [
    {
      id: 1,
      period: "Jul 2023 — Present",
      title: "Full Stack Developer",
      company: "Xyenta Solutions",
      type: "work",
      location: "Hyderabad, India",
      duration: "1.5 years",
      skills: ["React", "NestJS", "Python", "Flutter", "FastAPI"],
      description:
        "Leading full-stack development projects with modern tech stack, focusing on scalable solutions and user experience optimization.",
      achievements: [
        "Built 5+ production applications",
        "Improved app performance by 40%",
        "Mentored 2 junior developers",
      ],
      color: "bg-blue-500",
    },
    {
      id: 2,
      period: "Jan 2023 — Jun 2023",
      title: "Full Stack Intern",
      company: "Xyenta Solutions",
      type: "work",
      location: "Hyderabad, India",
      duration: "6 months",
      skills: ["JWT Auth", "UI/UX", "PDF Data Extraction"],
      description:
        "Gained hands-on experience in authentication systems and data processing while contributing to key product features.",
      achievements: [
        "Implemented secure JWT authentication",
        "Designed intuitive user interfaces",
        "Developed PDF parsing solutions",
      ],
      color: "bg-green-500",
    },
    {
      id: 3,
      period: "Mar 2023 — May 2023",
      title: "Flutter Developer",
      company: "Channel Mandate",
      type: "work",
      location: "Remote",
      duration: "3 months",
      skills: ["Flutter", "Firebase", "Node.js"],
      description:
        "Developed a comprehensive real estate mobile application with real-time features and robust backend integration.",
      achievements: [
        "Built cross-platform mobile app",
        "Integrated real-time notifications",
        "Optimized app for performance",
      ],
      color: "bg-purple-500",
    },
    {
      id: 4,
      period: "Jul 2019 — Present",
      title: "B.Tech, Computer Science",
      company: "ICFAI University",
      type: "education",
      location: "Hyderabad, India",
      duration: "4+ years",
      skills: ["Data Structures", "Algorithms", "Software Engineering"],
      description:
        "Pursuing comprehensive computer science education with focus on software development and emerging technologies.",
      achievements: [
        "CGPA: 9.1/10",
        "Published 2 research papers",
        "Active in tech communities",
      ],
      color: "bg-orange-500",
    },
  ];

  const formatDuration = (period) => {
    const current = new Date();
    const [start] = period.split(" — ");
    const [month, year] = start.split(" ");
    const startDate = new Date(`${month} 1, ${year}`);
    const diffTime = current - startDate;
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
    return diffMonths > 12
      ? `${Math.floor(diffMonths / 12)}y ${diffMonths % 12}m`
      : `${diffMonths}m`;
  };

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <div className="header-content">
          <div className="header-icon">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="header-title">Experience & Education</h3>
        </div>
        <div className="timeline-stats">
          <div className="stat-item">
            <span className="stat-number">
              {timelineData.filter((item) => item.type === "work").length}
            </span>
            <span className="stat-label">Roles</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years</span>
          </div>
        </div>
      </div>

      <div className="timeline-content">
        <div className="timeline-track">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${
                activeItem === index ? "active" : ""
              }`}
              onClick={() => setActiveItem(index)}
            >
              <div className="timeline-marker">
                <div className={`marker-dot ${item.color}`}>
                  {item.type === "work" ? (
                    <Briefcase className="w-3 h-3 text-white" />
                  ) : (
                    <GraduationCap className="w-3 h-3 text-white" />
                  )}
                </div>
                {index < timelineData.length - 1 && (
                  <div className="timeline-line"></div>
                )}
              </div>

              <div className="timeline-card">
                <div className="card-header">
                  <div className="period-badge">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>
                  <div className="duration-badge">
                    {formatDuration(item.period)}
                  </div>
                </div>

                <div className="card-content">
                  <h4 className="job-title">{item.title}</h4>
                  <div className="company-info">
                    <span className="company-name">{item.company}</span>
                    <div className="location">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="description">{item.description}</p>

                  <div className="skills-container">
                    {item.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {activeItem === index && (
                    <div className="achievements">
                      <h5 className="achievements-title">Key Achievements</h5>
                      <ul className="achievements-list">
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="achievement-item">
                            <ChevronRight className="w-3 h-3 text-blue-500" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="card-footer">
                  <button className="expand-btn">
                    {activeItem === index ? "Show Less" : "Learn More"}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        activeItem === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
