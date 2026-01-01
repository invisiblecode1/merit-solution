import React, { useEffect, useRef, useState } from "react";

function StepsToGetStarted() {
  const [activeCards, setActiveCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = cardRefs.current.indexOf(entry.target);
        if (index !== -1) {
          setActiveCards((prev) => (prev.includes(index) ? prev : [...prev, index]));
        }
        observer.unobserve(entry.target);
      });
    }, observerOptions);

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = "translateY(-2px) scale(1.01)";
    setTimeout(() => {
      card.style.transform = "";
    }, 180);
  };

  const steps = [
    {
      number: "STEP 1",
      title: "Creative Briefing",
      description:
        `In this free consultation, we'll discuss your goals and project 
details to ensure we understand your vision. If you're ready to move forward, we'll 
schedule a follow-up call to plan the next steps.`,
      image: "img/people-working-together-animation-studio.jpg",
      alt: "Creative Briefing",
    },
    {
      number: "STEP 2",
      title: "Strategic Planning",
      description:
        `Once you decide to move forward with your project, we'll have a call to 
review the details and outline everything needed to bring your vision to life.`,
      image: "img/business-corporate-people-working-concept.jpg",
      alt: "Strategic Planning",
    },
    {
      number: "STEP 3",
      title: "Project",
      description:
        `Once we have all the necessary details, we'll begin your project promptly. 
After completing the first draft, we'll send a request to schedule a call to review 
the finished work together.`,
      image: "img/student-849822_1280.jpg",
      alt: "Project Execution",
    },
  ];

  return (
    <>
      <style>{`
        .stgs-section {
          background-color: #f5f7fb;
          padding: clamp(35px, 6vw, 80px) clamp(10px, 3vw, 20px) clamp(45px, 7vw, 90px);
        }

        .stgs-inner {
          width: 100%;
          max-width: 1265px;
          margin: 0 auto;
        }

        .stgs-title {
          text-align: center;
          font-size: clamp(1.6rem, 4vw, 3.3rem);
          color: #2f3b46;
          margin: 0 0 clamp(22px, 3.5vw, 45px);
          font-weight: 800;
          letter-spacing: 0.2px;
        }

        .stgs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: clamp(18px, 2vw, 20px);
          justify-content: center;
        }

        @media (min-width: 768px) {
          .stgs-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .stgs-card {
          background-color: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 26px rgba(16, 24, 40, 0.12);
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 180ms ease;
          opacity: 0;
          transform: translateY(18px);
        }

        .stgs-card.active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 700ms ease, transform 700ms ease;
        }

        .stgs-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 34px rgba(16, 24, 40, 0.16);
        }

        .stgs-img {
          width: 100%;
          height: clamp(140px, 20vw, 185px);
          object-fit: cover;
          display: block;
        }

        .stgs-body {
          padding: clamp(16px, 2vw, 22px) clamp(16px, 2vw, 22px) clamp(20px, 2.5vw, 26px);
          text-align: center;
        }

        .stgs-pill {
          display: inline-block;
          background-color: #ff4d4d;
          color: #fff;
          font-weight: 700;
          font-size: clamp(11px, 1.2vw, 14px);
          padding: clamp(7px, 1vw, 10px) clamp(14px, 1.8vw, 20px);
          border-radius: 8px;
          margin-top: 4px;
          margin-bottom: clamp(10px, 1.2vw, 14px);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          box-shadow: 0 10px 25px rgba(255, 77, 77, 0.35);
          transition: all 0.3s ease;
        }

        .stgs-pill:hover {
          background-color: #e60000;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255, 77, 77, 0.4);
        }

        .stgs-card-title {
          margin: 0 0 12px;
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 800;
          color: #2f3b46;
        }

        .stgs-desc {
          margin: 0;
          color: #6b7280;
          line-height: 1.7;
          font-size: clamp(13px, 1.4vw, 15.5px);
          white-space: pre-line;
        }

        .stgs-button-wrap {
          text-align: center;
          margin-top: clamp(28px, 4vw, 50px);
        }

        .cta-button {
          display: inline-block;
          padding: clamp(12px, 1.5vw, 14px) clamp(22px, 2.5vw, 28px);
          background-color: #ff4d4d;
          color: rgb(255, 255, 255);
          text-decoration: none;
          border-radius: 8px;
          font-size: clamp(0.8rem, 1vw, 0.9rem);
          font-weight: 600;
          transition: all 0.4s ease;
          border: 2px solid transparent;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: transparent !important;
          border-color: #ff4d4d !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3) !important;
          color: #ff4d4d !important;
        }

        /* Ensures 3-column layout from tablet to desktop */
        @media (max-width: 767px) {
          .stgs-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>

      <section className="stgs-section">
        <div className="stgs-inner">
          <h2 className="stgs-title">Steps to Get Started</h2>

          <div className="stgs-grid">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`stgs-card ${activeCards.includes(index) ? 'active' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <img
                  src={step.image}
                  alt={step.alt}
                  className="stgs-img"
                />
                <div className="stgs-body">
                  <div className="stgs-pill">{step.number}</div>
                  <h3 className="stgs-card-title">{step.title}</h3>
                  <p className="stgs-desc">"{step.description}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="stgs-button-wrap">
            <a 
              href="#letgobook" 
              className="cta-button"
            >
              BOOK US NOW
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default StepsToGetStarted;
