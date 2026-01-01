import React, { useState, useEffect, useRef } from "react";

function CompanySection() {
  const [visibleElements, setVisibleElements] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleElements.includes(index)) {
              setVisibleElements((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const getFadeInStyle = (index) => ({
    opacity: visibleElements.includes(index) ? 1 : 0,
    transform: visibleElements.includes(index) ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  });

  const steps = [
    {
      num: "1",
      title: "Research",
      description: "Understanding user needs and market requirements"
    },
    {
      num: "2",
      title: "Design",
      description: "Creating wireframes and interactive prototypes"
    },
    {
      num: "3",
      title: "Develop",
      description: "Building responsive and accessible solutions"
    },
    {
      num: "4",
      title: "Deliver",
      description: "Testing and refining the final product"
    }
  ];

  return (
    <>
      <style>{`
        .header-title-custom::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background-color: #ff4d4d;
        }

        .about-section-h2::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 5px;
          background-color: #ff4d4d;
        }

        .design-section-h2::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 5px;
          background-color: #ff4d4d;
        }

        @media (max-width: 768px) {
          .design-steps-custom {
            flex-direction: column !important;
          }
          .step-custom {
            margin-bottom: 20px !important;
          }
          .container-custom {
            padding: 80px 15px !important;
          }
          .about-section-custom,
          .design-section-custom {
            padding: 30px 20px !important;
          }
          .header-title-custom {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .container-custom {
            padding: 60px 10px !important;
          }
          .header-title-custom {
            font-size: 1.8rem !important;
          }
          .about-section-h2,
          .design-section-h2 {
            font-size: 1.5rem !important;
          }
          .about-content-custom {
            font-size: 0.95rem !important;
          }
          .step-num-custom {
            font-size: 2rem !important;
          }
          .step-title-custom {
            font-size: 1.1rem !important;
          }
        }
      `}</style>

      <section className="container-custom" style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "120px 20px"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "60px"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: "20px"
          }}>
            <h1 className="header-title-custom" style={{
              fontSize: "2.5rem",
              color: "#2c3e50",
              marginBottom: "10px",
              position: "relative",
              display: "inline-block"
            }}>
              MERITS SOLUTION
            </h1>
          </div>

          <div
            ref={addToRefs}
            className="about-section-custom"
            style={{
              ...getFadeInStyle(0),
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "40px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h2 className="about-section-h2" style={{
              color: "#2c3e50",
              fontSize: "1.8rem",
              marginBottom: "20px",
              position: "relative",
              paddingLeft: "15px"
            }}>
              About Our Company
            </h2>
            <div className="about-content-custom" style={{
              fontSize: "1.05rem",
              color: "#555",
              textAlign: "justify"
            }}>
              <p>Founded in 2015, we are a leading digital solutions provider committed to delivering exceptional web experiences. Our team of passionate developers and designers works tirelessly to transform your digital vision into reality.</p>
              <br />
              <p>We pride ourselves on our customer-centric approach, ensuring that each project is tailored to meet the unique needs of our clients. With a track record of successful projects across various industries including e-commerce, healthcare, and education, we bring expertise and innovation to every engagement.</p>
              <br />
              <p>Our commitment to excellence has earned us recognition as a trusted partner for businesses of all sizes. We leverage cutting-edge technologies and best practices to ensure your digital presence not only meets but exceeds industry standards. Whether you're a startup looking to establish your online presence or an enterprise seeking digital transformation, we have the expertise to help you succeed.</p>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="design-section-custom"
            style={{
              ...getFadeInStyle(1),
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "40px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h2 className="design-section-h2" style={{
              color: "#2c3e50",
              fontSize: "1.8rem",
              marginBottom: "30px",
              position: "relative",
              paddingLeft: "15px"
            }}>
              Design Philosophy
            </h2>
            <div className="design-steps-custom" style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px"
            }}>
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className="step-custom"
                  style={{
                    ...getFadeInStyle(index + 2),
                    flex: "1 1 250px",
                    backgroundColor: "#f3ecec",
                    borderRadius: "8px",
                    padding: "25px",
                    textAlign: "center",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.411)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = visibleElements.includes(index + 2) ? "translateY(0)" : "translateY(20px)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="step-num-custom" style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#ff4d4d",
                    marginBottom: "10px"
                  }}>
                    {step.num}
                  </div>
                  <div className="step-title-custom" style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: "#2c3e50",
                    marginBottom: "15px"
                  }}>
                    {step.title}
                  </div>
                  <div style={{
                    fontSize: "1rem",
                    color: "#666"
                  }}>
                    {step.description}
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

export default CompanySection;
