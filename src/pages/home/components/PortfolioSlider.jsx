import React from "react";
import { Link } from "react-router-dom";

function PortfolioSlider() {
  const portfolioImages = [
    { src: "img/full-template-578-first-portfolio.jpg", alt: "Portfolio 1" },
    { src: "img/full-template-580-woox-travel.jpg", alt: "Portfolio 2" },
    { src: "img/full-template-572-designer.jpg", alt: "Portfolio 3" },
    { src: "img/full-template-574-mexant.jpg", alt: "Portfolio 4" },
    { src: "img/full-health.jpg", alt: "Portfolio 5" },
    { src: "img/fullnew.jpg", alt: "Portfolio 6" },
    { src: "img/full-template-581-kind-heart-charity.jpg", alt: "Portfolio 7" },
    { src: "img/full-template-586-scholar.jpg", alt: "Portfolio 8" },
    { src: "img/full-template-587-tiya-golf-club.jpg", alt: "Portfolio 9" },
    { src: "img/full-template-591-villa-agency.jpg", alt: "Portfolio 10" },
  ];

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const styles = {
    section: {
      background: "#330000",
      padding: "20px 0",
      position: "relative",
      overflow: "hidden",
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
    },
    sectionContent: {
      display: "flex",
      justifyContent: "flex-start",
      position: "relative",
      width: "100%",
    },
    portfolioHeader: {
      position: "absolute",
      right: "120px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "white",
      width: "450px",
      zIndex: 10,
      textAlign: "left",
      padding: "25px",
      background: "rgba(42, 15, 15, 0.9)",
      borderRadius: "20px",
    },
    portfolioTitle: {
      fontSize: "3.5rem",
      marginBottom: "15px",
      color: "#fff",
      fontWeight: 800,
      lineHeight: 1.2,
    },
    portfolioSubtitle: {
      fontSize: "1.2rem",
      color: "#94a3b8",
      lineHeight: 1.6,
      paddingBottom: "20px",
    },
    portfolioButton: {
      display: "inline-block",
      padding: "16px 32px",
      backgroundColor: "#ff4d4d",
      color: "rgb(255, 255, 255)",
      textDecoration: "none",
      borderRadius: "8px",
      fontSize: "1.1rem",
      fontWeight: 600,
      transition: "all 0.4s ease",
      border: "2px solid transparent",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginTop: "15px",
      cursor: "pointer",
    },
    sliderContainer: {
      width: "100%",
      overflow: "hidden",
      position: "relative",
    },
    sliderTrack: {
      display: "flex",
      gap: "30px",
      padding: "20px 0",
    },
    sliderItem: {
      width: "auto",
      height: "860px",
      borderRadius: "20px",
      overflow: "hidden",
      position: "relative",
      flexShrink: 0,
    },
    sliderImg: {
      width: "auto",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.5s ease",
    },
    fadeLeft: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "80px",
      height: "100%",
      zIndex: 2,
      pointerEvents: "none",
      background: "linear-gradient(to right, #330000, transparent)",
    },
    fadeRight: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "80px",
      height: "100%",
      zIndex: 2,
      pointerEvents: "none",
      background: "linear-gradient(to left, #330000, transparent)",
    },
  };

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-track {
          animation: scroll 50s linear infinite;
        }

        .slider-item-custom:hover img {
          transform: scale(1.05);
        }

        .portfolio-button-custom:hover {
          background-color: transparent !important;
          border-color: #ff4d4d !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d !important;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .portfolio-section-custom {
            padding: 15px 0 !important;
            min-height: 70vh !important;
          }
          .portfolio-header-custom {
            right: 60px !important;
            width: 380px !important;
            padding: 22px !important;
          }
          .portfolio-title-custom {
            font-size: 2.5rem !important;
          }
          .portfolio-subtitle-custom {
            font-size: 1.05rem !important;
          }
          .slider-item-custom {
            height: 650px !important;
          }
        }

        /* Mobile landscape & small tablets */
        @media (max-width: 768px) {
          .portfolio-section-custom {
            padding: 40px 0 !important;
            min-height: auto !important;
            flex-direction: column !important;
          }
          .portfolio-section-content {
            flex-direction: column !important;
          }
          .portfolio-header-custom {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
            width: 90% !important;
            max-width: 500px !important;
            margin: 0 auto 30px !important;
            padding: 25px !important;
            text-align: center !important;
          }
          .portfolio-title-custom {
            font-size: 2.2rem !important;
          }
          .portfolio-subtitle-custom {
            font-size: 1rem !important;
          }
          .slider-item-custom {
            height: 500px !important;
          }
          .slider-track-custom {
            gap: 20px !important;
          }
        }

        /* Mobile portrait */
        @media (max-width: 480px) {
          .portfolio-section-custom {
            padding: 30px 0 !important;
          }
          .portfolio-header-custom {
            width: 85% !important;
            padding: 20px 18px !important;
            margin-bottom: 25px !important;
          }
          .portfolio-title-custom {
            font-size: 1.8rem !important;
            margin-bottom: 12px !important;
          }
          .portfolio-subtitle-custom {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
            padding-bottom: 15px !important;
          }
          .portfolio-button-custom {
            font-size: 0.9rem !important;
            padding: 12px 24px !important;
          }
          .slider-item-custom {
            height: 400px !important;
          }
          .slider-track-custom {
            gap: 15px !important;
          }
          .fade-left-custom, .fade-right-custom {
            width: 40px !important;
          }
        }

        /* Small mobile */
        @media (max-width: 375px) {
          .portfolio-header-custom {
            width: 90% !important;
            padding: 18px 15px !important;
          }
          .portfolio-title-custom {
            font-size: 1.6rem !important;
          }
          .portfolio-subtitle-custom {
            font-size: 0.85rem !important;
          }
          .portfolio-button-custom {
            font-size: 0.85rem !important;
            padding: 10px 20px !important;
          }
          .slider-item-custom {
            height: 350px !important;
          }
        }
      `}</style>

      <section className="portfolio-section-custom" style={styles.section}>
        <div className="portfolio-section-content" style={styles.sectionContent}>
          <div className="portfolio-header-custom" style={styles.portfolioHeader}>
            <h2 className="portfolio-title-custom" style={styles.portfolioTitle}>
              Our Creative Journey
            </h2>
            <p className="portfolio-subtitle-custom" style={styles.portfolioSubtitle}>
              Discover our most impactful projects that showcase our passion for
              innovative design and flawless execution
            </p>
            <Link
              to="/portfolio"
              onClick={handleLinkClick}
              className="portfolio-button-custom"
              style={styles.portfolioButton}
            >
              check our portfolio
            </Link>
          </div>

          <div style={styles.sliderContainer}>
            <div className="fade-left-custom" style={styles.fadeLeft}></div>
            <div className="fade-right-custom" style={styles.fadeRight}></div>

            <div className="animate-track slider-track-custom" style={styles.sliderTrack}>
              {portfolioImages.map((image, index) => (
                <div
                  key={`first-${index}`}
                  className="slider-item-custom"
                  style={styles.sliderItem}
                >
                  <img src={image.src} alt={image.alt} style={styles.sliderImg} />
                </div>
              ))}
              {portfolioImages.map((image, index) => (
                <div
                  key={`second-${index}`}
                  className="slider-item-custom"
                  style={styles.sliderItem}
                >
                  <img src={image.src} alt={image.alt} style={styles.sliderImg} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioSlider;
