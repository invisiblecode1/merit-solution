import React, { useEffect, useRef, useState } from "react";

function WorkflowTimeline() {
  const [activeItems, setActiveItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.indexOf(entry.target);
          if (index !== -1 && !activeItems.includes(index)) {
            setActiveItems((prev) => [...prev, index]);
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      title: "1. Research & Strategy",
      description: "Understanding your business needs and audience to create a strategy that aligns with your goals.",
      image: "img/ai-generated-8876530_640.png",
      alt: "Research & Strategy",
    },
    {
      title: "2. Prototyping",
      description: "Creating wireframes and interactive prototypes in Figma to visualize the user experience.",
      image: "img/template-1599663_1920.png",
      alt: "Wireframing & Prototyping",
    },
    {
      title: "3. UI/UX Design",
      description: "Designing a clean and modern interface that is user-friendly and aesthetically pleasing.",
      image: "img/ui-8827392_1920.jpg",
      alt: "UI/UX Design",
    },
    {
      title: "4. Development & Testing",
      description: "Building the website with clean code, followed by rigorous testing for performance and compatibility.",
      image: "img/freelance-work-7308505_1920.png",
      alt: "Development & Testing",
    },
    {
      title: "5. Launch & Maintenance",
      description: "Deploying your website and providing continuous support to ensure long-term success.",
      image: "img/spaceship-8598172_1920.jpg",
      alt: "Launch & Maintenance",
    },
  ];

  const styles = {
    section: {
      padding: "80px 0",
    },
    container: {
      maxWidth: "1365px",
      margin: "0 auto",
      padding: "0 20px",
    },
    sectionTitle: {
      textAlign: "center",
      marginBottom: "60px",
      position: "relative",
    },
    titleText: {
      fontSize: "clamp(24px, 5vw, 60px)",
      display: "inline-block",
      background: "#ff4d4d",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      marginBottom: "15px",
      fontWeight: 800,
    },
    timeline: {
      position: "relative",
      maxWidth: "1265px",
      margin: "0 auto",
      padding: "20px 0",
    },
    timelineLine: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      width: "4px",
      background: "#ff4d4d",
      transform: "translateX(-50%)",
      borderRadius: "2px",
    },
    timelineItem: {
      position: "relative",
      padding: "20px 0",
      width: "50%",
      marginBottom: "30px",
      opacity: 0,
      transform: "translateY(30px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
    },
    timelineItemActive: {
      opacity: 1,
      transform: "translateY(0)",
    },
    timelineContent: {
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      position: "relative",
    },
    timelineDot: {
      position: "absolute",
      width: "20px",
      height: "20px",
      background: "white",
      border: "4px solid #ff4d4d",
      borderRadius: "50%",
      top: "50%",
      zIndex: 2,
      boxShadow: "0 0 0 4px #ff4d4d",
    },
    timelineFlex: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    timelineImg: {
      width: "250px",
      height: "250px",
      borderRadius: "8px",
      objectFit: "cover",
      flexShrink: 0,
    },
    timelineText: {
      flexGrow: 1,
    },
    timelineTitle: {
      fontSize: "22px",
      marginBottom: "10px",
      color: "#ff4d4d",
      fontWeight: 700,
    },
    timelineDescription: {
      fontSize: "19px",
      color: "#666",
      lineHeight: 1.6,
      margin: 0,
    },
  };

  return (
    <>
      <style>{`
        .timeline-item-odd {
          left: 0;
          padding-right: 40px;
        }
        
        .timeline-item-even {
          left: 50%;
          padding-left: 40px;
        }
        
        .timeline-dot-odd {
          right: -10px;
          transform: translateY(-50%);
        }
        
        .timeline-dot-even {
          left: -10px;
          transform: translateY(-50%);
        }
        
        .timeline-content-odd:after {
          content: '';
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 10px 0 10px 10px;
          border-style: solid;
          border-color: transparent transparent transparent white;
        }
        
        .timeline-content-even:after {
          content: '';
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 10px 10px 10px 0;
          border-style: solid;
          border-color: transparent white transparent transparent;
        }

        @media (max-width: 1265px) {
          .timeline-img-custom {
            width: 200px !important;
            height: 200px !important;
          }
          .timeline-content-custom {
            padding: 15px !important;
          }
          .timeline-title-custom {
            font-size: 20px !important;
          }
          .timeline-desc-custom {
            font-size: 15px !important;
          }
        }

        @media (max-width: 768px) {
          .timeline-line-custom {
            left: 20px !important;
          }
          .timeline-item-custom {
            width: 100% !important;
            left: 0 !important;
            padding: 0 0 0 50px !important;
          }
          .timeline-dot-custom {
            left: 10px !important;
            right: auto !important;
          }
          .timeline-content-custom:after {
            display: none !important;
          }
          .timeline-flex-custom {
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          .timeline-img-custom {
            width: 100% !important;
            height: auto !important;
            max-width: 100% !important;
            margin-bottom: 15px !important;
          }
          .timeline-text-custom {
            width: 100% !important;
          }
          .section-title-custom h2 {
            font-size: 28px !important;
          }
          .process-section-custom {
            padding: 50px 0 !important;
          }
        }

        @media (max-width: 480px) {
          .timeline-item-custom {
            padding-left: 40px !important;
          }
          .timeline-content-custom {
            padding: 15px !important;
          }
          .timeline-title-custom {
            font-size: 18px !important;
          }
          .timeline-desc-custom {
            font-size: 14px !important;
          }
          .section-title-custom h2 {
            font-size: 24px !important;
          }
        }

        @media (max-width: 360px) {
          .timeline-item-custom {
            padding-left: 35px !important;
          }
          .timeline-dot-custom {
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}</style>

      <section className="process-section-custom" style={styles.section}>
        <div style={styles.container}>
          <div className="section-title-custom" style={styles.sectionTitle}>
            <h2 style={styles.titleText}>OUR Workflow Timeline</h2>
          </div>

          <div style={styles.timeline}>
            <div className="timeline-line-custom" style={styles.timelineLine}></div>

            {timelineData.map((item, index) => {
              const isOdd = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`timeline-item-custom ${isOdd ? "timeline-item-odd" : "timeline-item-even"}`}
                  style={{
                    ...styles.timelineItem,
                    ...(activeItems.includes(index) ? styles.timelineItemActive : {}),
                  }}
                >
                  <div
                    className={`timeline-content-custom ${isOdd ? "timeline-content-odd" : "timeline-content-even"}`}
                    style={styles.timelineContent}
                  >
                    <div
                      className={`timeline-dot-custom ${isOdd ? "timeline-dot-odd" : "timeline-dot-even"}`}
                      style={styles.timelineDot}
                    ></div>
                    <div className="timeline-flex-custom" style={styles.timelineFlex}>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="timeline-img-custom"
                        style={styles.timelineImg}
                      />
                      <div className="timeline-text-custom" style={styles.timelineText}>
                        <h3 className="timeline-title-custom" style={styles.timelineTitle}>
                          {item.title}
                        </h3>
                        <p className="timeline-desc-custom" style={styles.timelineDescription}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkflowTimeline;
