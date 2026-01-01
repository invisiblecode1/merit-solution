import React, { useState } from "react";

function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: "fas fa-chart-line",
      title: "SEO Optimization",
      description: "Boost your website's visibility with our expert SEO services to rank higher and attract more organic traffic."
    },
    {
      icon: "fas fa-paint-brush",
      title: "UI/UX Design",
      description: "Create stunning user experiences that engage visitors and convert them into loyal customers."
    },
    {
      icon: "fas fa-laptop-code",
      title: "Website Design",
      description: "Custom websites that perfectly reflect your brand identity while delivering exceptional performance."
    },
    {
      icon: "fas fa-hashtag",
      title: "Social Media",
      description: "Engage your audience across all platforms with strategic content that builds brand loyalty."
    },
    {
      icon: "fas fa-pen-fancy",
      title: "Content Writing",
      description: "Engage, inform, and inspire your audience with powerful, SEO-optimized content."
    },
    {
      icon: "fas fa-palette",
      title: "Graphics Design",
      description: "Creative visual solutions that captivate your audience and elevate your brand identity."
    }
  ];

  return (
    <>
      <style>{`
        .services-wrapper {
          background: white;
          padding: 80px 20px;
        }

        .services-container {
          max-width: 1265px;
          margin: 0 auto;
        }

        .services-intro {
          text-align: center;
          margin-bottom: 60px;
        }

        @keyframes continuousPopUp {
          0%, 100% {
            transform: scale(1) translateY(0);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          }
          10% {
            transform: scale(1.08) translateY(-10px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          }
          20% {
            transform: scale(1) translateY(0);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          }
        }

        .services-main-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 25px;
          position: relative;
        }

        .services-subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #555;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .services-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service-card-item {
          background: #f8f9fa;
          border-radius: 20px;
          padding: 40px 30px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
          animation: continuousPopUp 6s ease-in-out infinite;
        }

        .service-card-item:nth-child(1) {
          animation-delay: 0s;
        }

        .service-card-item:nth-child(2) {
          animation-delay: 1s;
        }

        .service-card-item:nth-child(3) {
          animation-delay: 2s;
        }

        .service-card-item:nth-child(4) {
          animation-delay: 3s;
        }

        .service-card-item:nth-child(5) {
          animation-delay: 4s;
        }

        .service-card-item:nth-child(6) {
          animation-delay: 5s;
        }

        .service-card-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 77, 77, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .service-card-item:hover {
          animation-play-state: paused;
          transform: translateY(-12px) scale(1.02) !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15) !important;
        }

        .service-card-item:hover::before {
          left: 100%;
        }

        .service-icon-box {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff4d4d, #ff8080);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          transition: all 0.4s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .service-card-item:hover .service-icon-box {
          transform: rotate(360deg) scale(1.1);
          background: linear-gradient(135deg, #ff8080, #ff4d4d);
        }

        .service-icon-box i {
          color: white;
          font-size: 2rem;
        }

        .service-card-title {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .service-card-description {
          color: #666;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        /* Tablet - 768px to 1024px */
        @media (max-width: 1024px) {
          .services-wrapper {
            padding: 60px 30px;
          }

          .services-grid-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        /* Mobile - below 768px */
        @media (max-width: 768px) {
          .services-wrapper {
            padding: 50px 20px;
          }

          .services-intro {
            margin-bottom: 40px;
          }

          .services-grid-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .service-card-item {
            padding: 30px 25px;
          }

          .service-icon-box {
            width: 70px;
            height: 70px;
          }

          .service-icon-box i {
            font-size: 1.7rem;
          }

          .service-card-title {
            font-size: 1.3rem;
          }

          .service-card-description {
            font-size: 1rem;
          }
        }

        /* Small Mobile - below 480px */
        @media (max-width: 480px) {
          .services-wrapper {
            padding: 40px 15px;
          }

          .service-card-item {
            padding: 25px 20px;
          }

          .service-icon-box {
            width: 60px;
            height: 60px;
          }

          .service-icon-box i {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <section className="services-wrapper">
        <div className="services-container">
          <div className="services-intro">
            <h2 className="services-main-title">Our Digital Services</h2>
            <p className="services-subtitle">
              We offer a comprehensive suite of digital services designed to help your 
              business thrive in the online world. From creating stunning websites and 
              optimizing them for search engines to managing your social media presence, 
              our team of experts is here to help you achieve your digital goals.
            </p>
          </div>

          <div className="services-grid-container">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card-item"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="service-icon-box">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
