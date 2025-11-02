import React, { useState } from "react";
import { FaXTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa6";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";
import "./GetInTouchCard.css";

const EnhancedContactCard = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const socialLinks = [
    {
      id: "twitter",
      icon: FaXTwitter,
      href: "https://twitter.com/Param07",
      label: "Twitter",
      color: "#1DA1F2",
      hoverColor: "#0d8bd9",
    },
    {
      id: "linkedin",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/parmeshwar-joga-958387193/",
      label: "LinkedIn",
      color: "#0077B5",
      hoverColor: "#005885",
    },
    {
      id: "behance",
      icon: FaBehance,
      href: "https://www.behance.net/",
      label: "Behance",
      color: "#1769FF",
      hoverColor: "#0052CC",
    },
    {
      id: "email",
      icon: FiMail,
      href: "mailto:parmeshwar5jan@gmail.com",
      label: "Email",
      color: "#EA4335",
      hoverColor: "#c23321",
    },
  ];

  const handleEmailCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("parmeshwar5jan@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      window.location.href = "mailto:parmeshwar5jan@gmail.com";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 flex items-center justify-center">
      <div className="enhanced-contact-card">
        {/* Header with animated gradient */}
        <div className="card-header-enhanced">
          <div className="header-content">
            <h3 className="header-title">Get in Touch</h3>
            <div className="header-subtitle">Let's connect and collaborate</div>
          </div>
          <div className="header-decoration"></div>
        </div>

        {/* Social Links Grid */}
        <div className="social-grid">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            const isEmail = social.id === "email";

            return (
              <div
                key={social.id}
                className="social-item"
                onMouseEnter={() => setHoveredSocial(social.id)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <a
                  href={social.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener"}
                  className="social-link"
                  onClick={isEmail ? handleEmailCopy : undefined}
                  style={{
                    "--hover-color": social.hoverColor,
                    "--brand-color": social.color,
                  }}
                >
                  <div className="social-icon-wrapper">
                    <IconComponent className="social-icon" />
                    {isEmail && (
                      <div className="email-copy-indicator">
                        {copiedEmail ? <FiCheck /> : <FiCopy />}
                      </div>
                    )}
                  </div>
                  <div className="social-label">
                    <span className="social-name">{social.label}</span>
                    <span className="social-action">
                      {isEmail
                        ? copiedEmail
                          ? "Copied!"
                          : "Click to copy"
                        : "Visit profile"}
                    </span>
                  </div>
                </a>

                {/* Animated background */}
                <div
                  className="social-bg"
                  style={{
                    background: `linear-gradient(135deg, ${social.color}15, ${social.color}05)`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="contact-cta">
          <div className="cta-content">
            <div className="cta-text">
              <div className="cta-title">Ready to start a project?</div>
              <div className="cta-subtitle">
                I'm always open to discussing new opportunities
              </div>
            </div>
            <a
              href="mailto:parmeshwar5jan@gmail.com"
              className="cta-button"
              onClick={handleEmailCopy}
            >
              <span>Send Message</span>
              <div className="cta-arrow">→</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContactCard;
