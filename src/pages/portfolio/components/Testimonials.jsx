import React, { useState } from "react";

function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "img/woman-2112292_1920.jpg",
      rating: 5,
      text: "The product exceeded all my expectations. The customer service team was incredibly helpful throughout the entire process. I'll definitely be recommending this to my colleagues!",
      date: "March 15, 2025"
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      image: "img/man-3803551_1920.jpg",
      rating: 5,
      text: "This solution streamlined our entire workflow. We've seen a 40% increase in productivity since implementing it just three months ago. The onboarding process was seamless.",
      date: "March 28, 2025"
    },
    {
      name: "Emma Rodriguez",
      role: "Small Business Owner",
      image: "img/business-man-4226023_1920.jpg",
      rating: 4,
      text: "As a small business owner, I needed an affordable solution that didn't compromise on quality. This product delivered exactly that. The only thing I'd suggest improving is the mobile app interface.",
      date: "April 1, 2025"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes continuousPopUp {
          0%, 100% {
            transform: scale(1) translateY(0);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          }
          10% {
            transform: scale(1.05) translateY(-10px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          }
          20% {
            transform: scale(1) translateY(0);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          }
        }

        @keyframes moveLineLeftFull {
          0% {
            left: 100%;
            opacity: 0;
          }
          5% {
            opacity: 0.3;
          }
          95% {
            opacity: 0.3;
          }
          100% {
            left: -100%;
            opacity: 0;
          }
        }

        .review-card-animated {
          animation: continuousPopUp 9s ease-in-out infinite;
        }

        .review-card-animated:nth-child(1) {
          animation-delay: 0s;
        }

        .review-card-animated:nth-child(2) {
          animation-delay: 3s;
        }

        .review-card-animated:nth-child(3) {
          animation-delay: 6s;
        }

        .review-card-animated:hover {
          animation-play-state: paused;
          transform: translateY(-10px) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
        }

        .animated-line-bg {
          position: absolute;
          height: 2px;
          background: #ff4d4d;
          animation: moveLineLeftFull linear infinite;
          opacity: 0;
          z-index: 0;
        }

        .animated-line-bg:nth-child(1) {
          top: 12%;
          width: 200px;
          animation-duration: 8s;
          animation-delay: 0s;
        }

        .animated-line-bg:nth-child(2) {
          top: 22%;
          width: 350px;
          animation-duration: 12s;
          animation-delay: 2s;
        }

        .animated-line-bg:nth-child(3) {
          top: 35%;
          width: 150px;
          animation-duration: 9s;
          animation-delay: 4s;
        }

        .animated-line-bg:nth-child(4) {
          top: 48%;
          width: 280px;
          animation-duration: 11s;
          animation-delay: 1s;
        }

        .animated-line-bg:nth-child(5) {
          top: 60%;
          width: 180px;
          animation-duration: 10s;
          animation-delay: 5s;
        }

        .animated-line-bg:nth-child(6) {
          top: 72%;
          width: 120px;
          animation-duration: 7s;
          animation-delay: 3s;
        }

        .animated-line-bg:nth-child(7) {
          top: 82%;
          width: 240px;
          animation-duration: 13s;
          animation-delay: 6s;
        }

        .animated-line-bg:nth-child(8) {
          top: 92%;
          width: 160px;
          animation-duration: 8.5s;
          animation-delay: 2.5s;
        }

        /* Desktop - 3 columns */
        .reviews-container-custom {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
          position: relative;
          z-index: 1;
        }

        /* Tablet - 3 columns but smaller */
        @media (max-width: 1024px) and (min-width: 769px) {
          .reviews-container-custom {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }
          .section-title-custom h2 {
            font-size: 2.2rem !important;
          }
          .section-title-custom p {
            font-size: 1rem !important;
          }
          .review-card-custom {
            padding: 1.5rem !important;
          }
          .customer-info-custom h3 {
            font-size: 1.1rem !important;
          }
          .rating-custom {
            font-size: 1.1rem !important;
          }
          .review-text-custom {
            font-size: 0.95rem !important;
          }
          .customer-img-custom {
            width: 55px !important;
            height: 55px !important;
          }
        }

        /* Mobile - 1 column */
        @media (max-width: 768px) {
          .reviews-container-custom {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .review-card-custom {
            max-width: 500px !important;
            margin: 0 auto !important;
            padding: 1.5rem !important;
          }
          .section-title-custom h2 {
            font-size: 1.9rem !important;
          }
          .section-title-custom p {
            font-size: 0.95rem !important;
          }
          .customer-info-custom h3 {
            font-size: 1.1rem !important;
          }
          .rating-custom {
            font-size: 1.1rem !important;
          }
          .review-text-custom {
            font-size: 0.95rem !important;
          }
          .quote-icon-custom {
            font-size: 3rem !important;
          }
        }

        @media (max-width: 576px) {
          .review-card-custom {
            max-width: 400px !important;
            padding: 1.3rem !important;
          }
          .section-title-custom h2 {
            font-size: 1.7rem !important;
          }
          .section-title-custom p {
            font-size: 0.9rem !important;
          }
          .customer-info-custom h3 {
            font-size: 1rem !important;
          }
          .review-text-custom {
            font-size: 0.9rem !important;
          }
          .review-date-custom {
            font-size: 0.8rem !important;
          }
          .quote-icon-custom {
            font-size: 2.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .testimonials-container-main {
            padding: 4rem 1.5rem !important;
          }
          .review-card-custom {
            max-width: 340px !important;
            padding: 1.2rem !important;
          }
          .section-title-custom h2 {
            font-size: 1.6rem !important;
          }
          .section-title-custom p {
            font-size: 0.85rem !important;
          }
          .customer-img-custom {
            width: 50px !important;
            height: 50px !important;
          }
          .customer-info-custom h3 {
            font-size: 0.95rem !important;
          }
          .review-text-custom {
            font-size: 0.85rem !important;
          }
          .review-date-custom {
            font-size: 0.75rem !important;
          }
          .quote-icon-custom {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 375px) {
          .testimonials-container-main {
            padding: 3.5rem 1rem !important;
          }
          .review-card-custom {
            max-width: 300px !important;
            padding: 1rem !important;
          }
          .section-title-custom h2 {
            font-size: 1.5rem !important;
          }
          .section-title-custom p {
            font-size: 0.8rem !important;
          }
          .customer-img-custom {
            width: 45px !important;
            height: 45px !important;
          }
          .customer-info-custom h3 {
            font-size: 0.9rem !important;
          }
          .customer-info-custom span {
            font-size: 0.8rem !important;
          }
          .review-text-custom {
            font-size: 0.8rem !important;
          }
          .review-date-custom {
            font-size: 0.7rem !important;
          }
          .quote-icon-custom {
            font-size: 1.8rem !important;
          }
        }
      `}</style>

      <section className="testimonials-container-main" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "5rem 2rem",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Animated Lines - Behind Cards */}
        <div className="animated-line-bg"></div>
        <div className="animated-line-bg"></div>
        <div className="animated-line-bg"></div>
        <div className="animated-line-bg"></div>
        <div className="animated-line-bg"></div>
        <div className="animated-line-bg"></div>
        <div className="animated-line-bg"></div>
        <div className="animated-line-bg"></div>

        <div className="section-title-custom" style={{
          textAlign: "center",
          marginBottom: "3rem",
          position: "relative",
          zIndex: 2
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d3748",
            marginBottom: "1rem"
          }}>
            What Our Customers Say
          </h2>
          <p style={{
            fontSize: "1.1rem",
            color: "#718096",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Read the success stories from our satisfied customers around the world
          </p>
          <div style={{
            content: '',
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg,#ff3333,#ff3333)",
            borderRadius: "2px"
          }}></div>
        </div>

        <div className="reviews-container-custom">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card-custom review-card-animated"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div style={{
                content: '',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "5px",
                background: "linear-gradient(90deg,#ff3333,#ff333377)"
              }}></div>

              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem"
              }}>
                <img
                  src={review.image}
                  alt={review.name}
                  className="customer-img-custom"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "1rem",
                    border: "3px solid #f3f4f6"
                  }}
                />
                <div className="customer-info-custom">
                  <h3 style={{
                    fontSize: "1.2rem",
                    marginBottom: "0.2rem",
                    color: "#2d3748"
                  }}>
                    {review.name}
                  </h3>
                  <span style={{
                    fontSize: "0.9rem",
                    color: "#718096"
                  }}>
                    {review.role}
                  </span>
                </div>
              </div>

              <div className="rating-custom" style={{
                display: "flex",
                marginBottom: "1rem",
                color: "#ff3333",
                fontSize: "1.2rem"
              }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                ))}
              </div>

              <p className="review-text-custom" style={{
                color: "#4a5568",
                lineHeight: 1.7,
                marginBottom: "1rem"
              }}>
                {review.text}
              </p>

              <span className="review-date-custom" style={{
                fontSize: "0.85rem",
                color: "#a0aec0",
                display: "block",
                textAlign: "right"
              }}>
                {review.date}
              </span>

              <div className="quote-icon-custom" style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                opacity: 0.1,
                fontSize: "4rem",
                color: "#6366f1"
              }}>
                "
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimonials;
