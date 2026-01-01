import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const styles = {
    footer: {
      backgroundColor: "#190000",
      color: "white",
      padding: "1rem 0",
      fontFamily: "Arial, sans-serif",
    },
    footerContent: {
      maxWidth: "1300px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "2rem",
      padding: "0 2rem",
    },
    footerSection: {
      marginBottom: "0.2rem",
    },
    heading: {
      color: "#ffffff",
      fontSize: "1.4rem",
      marginBottom: "0.2rem",
      fontWeight: "bold",
    },
    text: {
      color: "#b89494",
      textDecoration: "none",
      lineHeight: 1.6,
      fontSize: "0.9rem",
      margin: "0.3rem 0",
    },
    link: {
      color: "#b89494",
      textDecoration: "none",
      lineHeight: 1.6,
      fontSize: "0.9rem",
      transition: "color 0.3s ease",
    },
    contactInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    footerBottom: {
      textAlign: "center",
      padding: "1rem 0",
      backgroundColor: "#000000",
      fontSize: "0.8rem",
      color: "#ffffff",
      marginTop: "0.6rem",
    },
  };

  return (
    <>
      <style>{`
        .footer-link:hover {
          color: #0b81cf6e !important;
        }

        /* For medium screens (max-width: 768px) */
        @media (max-width: 768px) {
          .footer-content-custom {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .footer-heading-custom {
            font-size: 1.2rem !important;
          }

          .footer-text-custom,
          .footer-link {
            font-size: 1rem !important;
          }
        }

        /* For small screens (max-width: 480px) */
        @media (max-width: 480px) {
          .footer-content-custom {
            grid-template-columns: 1fr !important;
            padding: 0 1rem !important;
          }

          .footer-heading-custom {
            font-size: 1rem !important;
          }

          .footer-text-custom,
          .footer-link {
            font-size: 0.9rem !important;
          }

          .contact-info-custom {
            gap: 0.3rem !important;
          }

          .footer-bottom-custom {
            font-size: 0.9rem !important;
          }
        }
      `}</style>

      <footer style={styles.footer}>
        <div className="footer-content-custom" style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 className="footer-heading-custom" style={styles.heading}>
              Merit Solution
            </h3>
            <p className="footer-text-custom" style={styles.text}>
              Creating beautiful and functional websites tailored to your needs.
            </p>
          </div>

          <div style={styles.footerSection}>
            <h3 className="footer-heading-custom" style={styles.heading}>
              Portfolio
            </h3>
            <p style={styles.text}>
              <Link to="/portfolio" onClick={handleLinkClick} className="footer-link" style={styles.link}>
                Check our portfolio
              </Link>
            </p>
          </div>

          <div style={styles.footerSection}>
            <h3 className="footer-heading-custom" style={styles.heading}>
              Services
            </h3>
            <p style={styles.text}>
              <Link to="/price" onClick={handleLinkClick} className="footer-link" style={styles.link}>
                Website Design
              </Link>
            </p>
            <p style={styles.text}>
              <Link to="/price" onClick={handleLinkClick} className="footer-link" style={styles.link}>
                Graphics Design
              </Link>
            </p>
            <p style={styles.text}>
              <Link to="/price" onClick={handleLinkClick} className="footer-link" style={styles.link}>
                UI/UX Design
              </Link>
            </p>
            <p style={styles.text}>
              <Link to="/price" onClick={handleLinkClick} className="footer-link" style={styles.link}>
                SEO Optimization
              </Link>
            </p>
          </div>

          <div style={styles.footerSection}>
            <h3 className="footer-heading-custom" style={styles.heading}>
              Contact
            </h3>
            <div className="contact-info-custom" style={styles.contactInfo}>
              <p className="footer-text-custom" style={styles.text}>
                Email:{" "}
                <a
                  href="mailto:Meritsolution@gmail.com"
                  className="footer-link"
                  style={styles.link}
                >
                  Meritsolution@gmail.com
                </a>
              </p>
              <p className="footer-text-custom" style={styles.text}>
                Phone:{" "}
                <a href="tel:+14033074521" className="footer-link" style={styles.link}>
                  (403) 307-4521
                </a>
              </p>
              <p className="footer-text-custom" style={styles.text}>
                Address: Red Deer, Canada
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-custom" style={styles.footerBottom}>
          <p>© 2025 Merit solution. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
