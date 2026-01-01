import React, { useEffect, useRef, useState } from "react";
import { FaLightbulb, FaGem, FaBolt, FaHeadset } from "react-icons/fa";

function WhyChooseUs() {
  const [activeCards, setActiveCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target);
          if (index !== -1 && !activeCards.includes(index)) {
            setActiveCards((prev) => [...prev, index]);
          }
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <FaLightbulb />,
      title: "Creative Innovation",
      description: "Pushing boundaries with cutting-edge design solutions that captivate and inspire your audience.",
    },
    {
      icon: <FaGem />,
      title: "Premium Quality",
      description: "Delivering excellence in every pixel with meticulous attention to detail and flawless execution.",
    },
    {
      icon: <FaBolt />,
      title: "Rapid Development",
      description: "Fast-paced delivery without compromising quality, ensuring your project launches on time and exceeds expectations.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Dedication",
      description: "Round-the-clock support and commitment to your success, ensuring peace of mind throughout your project.",
    },
  ];

  const styles = {
    section: {
      paddingBottom: "60px",
      paddingTop: "60px",
      background: "#f8f9fa",
      position: "relative",
      overflow: "hidden",
    },
    outerContainer: {
      padding: "0 20px",
    },
    container: {
      maxWidth: "1265px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    sectionHeader: {
      textAlign: "center",
      marginBottom: "60px",
    },
    title: {
      fontSize: "2.8rem",
      fontWeight: 800,
      color: "#212529",
      marginBottom: "15px",
      position: "relative",
      display: "inline-block",
    },
    titleUnderline: {
      content: '""',
      position: "absolute",
      width: "80px",
      height: "4px",
      background: "#ff4d4d",
      bottom: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      borderRadius: "2px",
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "#555",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    benefitsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "25px",
    },
    benefitCard: {
      background: "white",
      borderRadius: "16px",
      padding: "40px 30px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      position: "relative",
      overflow: "hidden",
      border: "1px solid rgb(0, 0, 0)",
      textAlign: "center",
      opacity: 0,
      transform: "translateY(30px)",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
    benefitCardActive: {
      opacity: 1,
      transform: "translateY(0)",
    },
    benefitIcon: {
      width: "80px",
      height: "80px",
      background: "linear-gradient(135deg, #ff4d4d, #ff4d4d)",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "1.8rem",
      margin: "0 auto 25px",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
    benefitTitle: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "#212529",
      marginBottom: "15px",
    },
    benefitDescription: {
      color: "#666",
      lineHeight: 1.6,
      fontSize: "1rem",
      margin: 0,
    },
  };

  return (
    <>
      <style>{`
        .benefit-card-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #ff4d4d, #ff4d4d);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0;
        }

        .benefit-card-wrapper:hover::before {
          opacity: 1;
        }

        .benefit-card-wrapper:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15) !important;
        }

        .benefit-card-wrapper:hover .benefit-icon-inner {
          transform: rotate(10deg) scale(1.1);
          background: #ff00008a !important;
        }

        /* Large Desktop - 4 columns */
        @media (min-width: 1024px) {
          .benefits-grid-custom {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }

        /* Tablet - 4 columns */
        @media (max-width: 1023px) and (min-width: 768px) {
          .benefits-grid-custom {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 20px !important;
          }
          .benefit-card-wrapper {
            padding: 35px 25px !important;
          }
          .benefit-title-custom {
            font-size: 1.3rem !important;
          }
          .benefit-desc-custom {
            font-size: 0.9rem !important;
          }
        }

        /* Mobile - 1 column */
        @media (max-width: 767px) {
          .section-header-title {
            font-size: 1.8rem !important;
          }
          
          .section-header-subtitle {
            font-size: 1.1rem !important;
          }
          
          .benefits-grid-custom {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .benefit-card-wrapper {
            padding: 30px 25px !important;
          }
        }

        @media (max-width: 480px) {
          .section-header-title {
            font-size: 1.5rem !important;
          }
        }
      `}</style>

      <section style={styles.section}>
        <div style={styles.outerContainer}>
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 className="section-header-title" style={styles.title}>
                Why Choose Us
                <div style={styles.titleUnderline}></div>
              </h2>
              <p className="section-header-subtitle" style={styles.subtitle}>
                Elevate your digital presence with our innovative design solutions and unparalleled expertise
              </p>
            </div>

            <div className="benefits-grid-custom" style={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="benefit-card-wrapper"
                  style={{
                    ...styles.benefitCard,
                    ...(activeCards.includes(index) ? styles.benefitCardActive : {}),
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="benefit-icon-inner" style={styles.benefitIcon}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="benefit-title-custom" style={styles.benefitTitle}>{benefit.title}</h3>
                    <p className="benefit-desc-custom" style={styles.benefitDescription}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
