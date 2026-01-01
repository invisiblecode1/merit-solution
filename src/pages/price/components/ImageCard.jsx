import React from "react";

function ImageCard() {
  const styles = {
    section: {
      width: "100%",
      maxWidth: "1265px",
      height: "400px",
      margin: "120px auto",
      position: "relative",
      overflow: "hidden",
      padding: "0 20px",
    },
    outerWrapper: {
      backgroundColor: "#f8f9fa",  // Add this wrapper
      width: "100%",
    },
    imageContainer: {
      width: "100%",
      height: "100%",
      position: "relative",
    },
    backgroundImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "8px",
    },
    blurOverlay: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "70%",
      height: "100%",
      background: "linear-gradient(to right, transparent 6%, #000000d0 50%, rgba(0, 0, 0, 0.342) 100%)",
      backdropFilter: "blur(10%)",
      WebkitBackdropFilter: "blur(10%)",
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 200px",
      borderRadius: "10px",
    },
    blurContent: {
      maxWidth: "550px",
      color: "#fffdfd",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "15px",
      fontWeight: 700,
    },
    description: {
      fontSize: "1.1rem",
      marginBottom: "25px",
      opacity: 0.8,
      lineHeight: 1.6,
    },
    buttonGroup: {
      display: "flex",
      gap: "15px",
    },
    button: {
      display: "inline-block",
      padding: "18px 100px",
      backgroundColor: "#ff4d4d",
      color: "rgb(255, 255, 255)",
      textDecoration: "none",
      borderRadius: "8px",
      fontSize: "1.2rem",
      fontWeight: 600,
      transition: "all 0.4s ease",
      border: "2px solid transparent",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginTop: "20px",
      cursor: "pointer",
    },
  };

  return (
    <>
      <style>{`
        .btn-custom:hover {
          background-color: transparent !important;
          border-color: #ff4d4d !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d !important;
        }

        @media (max-width: 1024px) {
          .image-section-custom {
            height: 350px !important;
            margin: 100px auto !important;
          }

          .blur-overlay-custom {
            width: 100% !important;
            padding: 0 60px !important;
            align-items: center !important;
            text-align: center !important;
          }

          .blur-content-custom {
            max-width: 100% !important;
          }

          .blur-title-custom {
            font-size: 2.2rem !important;
          }

          .blur-desc-custom {
            font-size: 1rem !important;
          }

          .btn-custom {
            padding: 10px 20px !important;
          }
        }

        @media (max-width: 768px) {
          .blur-title-custom {
            font-size: 2rem !important;
          }

          .blur-desc-custom {
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 480px) {
          .image-section-custom {
            height: 300px !important;
            margin: 80px auto !important;
          }

          .blur-overlay-custom {
            padding: 0 30px !important;
          }

          .blur-title-custom {
            font-size: 1.6rem !important;
          }

          .blur-desc-custom {
            font-size: 0.9rem !important;
            margin-bottom: 20px !important;
          }

          .btn-custom {
            font-size: 0.95rem !important;
            padding: 10px 18px !important;
          }
        }

        @media (max-width: 375px) {
          .blur-title-custom {
            font-size: 1.4rem !important;
          }

          .blur-desc-custom {
            font-size: 0.85rem !important;
          }

          .btn-custom {
            width: 100% !important;
            padding: 12px !important;
            font-size: 1rem !important;
          }
        }
      `}</style>

      <div style={styles.outerWrapper}>
        <section className="image-section-custom" style={styles.section}>
          <div style={styles.imageContainer}>
            <img
              src="img/women-8080878_1920.png"
              alt="Scenic landscape"
              style={styles.backgroundImage}
            />
            <div className="blur-overlay-custom" style={styles.blurOverlay}>
              <div className="blur-content-custom" style={styles.blurContent}>
                <h2 className="blur-title-custom" style={styles.title}>
                  Explore More Flexible Plans
                </h2>
                <p className="blur-desc-custom" style={styles.description}>
                  Find the perfect fit with our additional flexible plans.
                </p>
                <div style={styles.buttonGroup}>
                  <a href="about.html" className="btn-custom" style={styles.button}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ImageCard;
