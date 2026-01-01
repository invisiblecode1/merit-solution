import React from "react";

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

  return (
    <>
      <style>{`
        .portfolio-section {
          background: #330000;
          padding: 30px 0;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 30px;
          align-items: center;
        }

        .first-slider-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        }

        .portfolio-header {
          position: absolute;
          right: 120px;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          width: 450px;
          z-index: 10;
          text-align: left;
          padding: 30px;
          background: rgba(42, 15, 15, 0.9);
          border-radius: 20px;
        }

        .portfolio-title {
          font-size: 3.5rem;
          margin-bottom: 20px;
          color: #fff;
          font-weight: 800;
          line-height: 1.2;
        }

        .portfolio-subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          line-height: 1.6;
          padding-bottom: 30px;
        }

        .portfolio-button {
          display: inline-block;
          padding: 18px 36px;
          background-color: #ff4d4d;
          color: rgb(255, 255, 255);
          text-decoration: none;
          border-radius: 8px;
          font-size: 1.2rem;
          font-weight: 600;
          transition: all 0.4s ease;
          border: 2px solid transparent;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 20px;
          cursor: pointer;
        }

        .portfolio-button:hover {
          background-color: transparent;
          border-color: #ff4d4d;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d;
        }

        .slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .slider-track {
          display: flex;
          gap: 30px;
          padding: 20px 0;
          width: fit-content;
        }

        .slider-track-left {
          animation: scrollLeft 50s linear infinite;
        }

        .slider-track-right {
          animation: scrollRight 50s linear infinite;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }

        .slider-item {
          min-width: 120px;
          height: 860px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        .slider-item:hover img {
          transform: scale(1.05);
        }

        .slider-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .fade-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(to right, #330000, transparent);
        }

        .fade-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(to left, #330000, transparent);
        }

        @media (max-width: 1024px) {
          .portfolio-title {
            font-size: 2.8rem;
          }
          .portfolio-subtitle {
            font-size: 1.1rem;
          }
          .portfolio-header {
            width: 100%;
            max-width: 400px;
            padding: 20px;
          }
          .slider-item {
            height: 1000px;
          }
        }

        @media (max-width: 768px) {
          .portfolio-title {
            font-size: 2.4rem;
          }
          .portfolio-subtitle {
            font-size: 1rem;
          }
          .portfolio-header {
            max-width: 90%;
            left: 50%;
            right: auto;
            transform: translate(-50%, -50%);
          }
          .slider-item {
            height: 900px;
          }
        }

        @media (max-width: 480px) {
          .portfolio-title {
            font-size: 2rem;
          }
          .portfolio-subtitle {
            font-size: 0.9rem;
          }
          .portfolio-button {
            font-size: 0.9rem;
            padding: 12px 10px;
          }
          .slider-item {
            height: 700px;
          }
          .fade-left, .fade-right {
            width: 50px;
          }
        }
      `}</style>

      <section className="portfolio-section">
        {/* First Slider - Moving Left with Header */}
        <div className="first-slider-wrapper">
          <div className="portfolio-header">
            <h2 className="portfolio-title">Our Creative Journey</h2>
            <p className="portfolio-subtitle">
              Discover our most impactful projects that showcase our passion for
              innovative design and flawless execution
            </p>
            <a href="portfolio.html" className="portfolio-button">
              check our portfolio
            </a>
          </div>

          <div className="slider-container">
            <div className="fade-left"></div>
            <div className="fade-right"></div>
            <div className="slider-track slider-track-left">
              {portfolioImages.map((image, index) => (
                <div key={`left-1-${index}`} className="slider-item">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
              {portfolioImages.map((image, index) => (
                <div key={`left-2-${index}`} className="slider-item">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Slider - Moving Right without Header */}
        <div className="slider-container">
          <div className="fade-left"></div>
          <div className="fade-right"></div>
          <div className="slider-track slider-track-right">
            {portfolioImages.map((image, index) => (
              <div key={`right-1-${index}`} className="slider-item">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
            {portfolioImages.map((image, index) => (
              <div key={`right-2-${index}`} className="slider-item">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioSlider;
