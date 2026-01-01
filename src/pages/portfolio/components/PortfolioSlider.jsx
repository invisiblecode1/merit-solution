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
          min-height: 900px;
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
          margin-bottom: 0;
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
          width: auto;
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
          width: auto;
          height: 100%;
          object-fit: cover;
          display: block;
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
            height: 650px;
          }
          .first-slider-wrapper {
            min-height: 700px;
          }
        }

        @media (max-width: 768px) {
          .portfolio-section {
            padding: 40px 0;
          }
          .portfolio-title {
            font-size: 2.2rem;
          }
          .portfolio-subtitle {
            font-size: 1rem;
          }
          .portfolio-header {
            position: relative;
            max-width: 90%;
            left: auto;
            right: auto;
            top: auto;
            transform: none;
            margin: 0 auto 30px;
            text-align: center;
          }
          .slider-item {
            height: 500px;
          }
          .first-slider-wrapper {
            min-height: auto;
          }
        }

        @media (max-width: 480px) {
          .portfolio-section {
            padding: 30px 0;
          }
          .portfolio-title {
            font-size: 1.8rem;
          }
          .portfolio-subtitle {
            font-size: 0.9rem;
          }
          .slider-item {
            height: 400px;
          }
          .fade-left, .fade-right {
            width: 40px;
          }
        }

        @media (max-width: 375px) {
          .portfolio-title {
            font-size: 1.6rem;
          }
          .portfolio-subtitle {
            font-size: 0.85rem;
          }
          .slider-item {
            height: 350px;
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
