import React, { useState, useEffect, useRef } from "react";

function PricingServices() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const pricingData = [
    {
      title: "Content Writing",
      description: "We create engaging content that delivers your message seamlessly.",
      price: "$99 / 500 WORDS"
    },
    {
      title: "Social Media Setup",
      description: "Let us set up your Facebook Business Page with a professional look.",
      price: "$99 / Project"
    },
    {
      title: "Additional Pages",
      description: "Add more pages to your website as your business grows.",
      price: "$99 / Page"
    },
    {
      title: "Google My Business Setup",
      description: "Boost your local search visibility with a properly set up Google listing.",
      price: "$99 / Project"
    },
    {
      title: "SEO Optimization",
      description: "Improve rankings and drive organic traffic with expert SEO.",
      price: "$99 / Project"
    },
    {
      title: "Graphic Design",
      description: "Custom logos, business cards, social media graphics, and more.",
      price: "$99 / Project"
    },
    {
      title: "Website Maintenance",
      description: "Keep your site secure and updated with our maintenance services.",
      price: "Get a Quote"
    },
    {
      title: "Web Hosting & Domain",
      description: "Reliable web hosting and domain management solutions.",
      price: "$49 / Project"
    },
    {
      title: "UX & UI Design",
      description: "Enhance your website's usability and appeal with expert UX/UI design.",
      price: "Get a Quote"
    }
  ];

  return (
    <>
      <style>{`
        .pricing-section {
          padding: 60px 20px;
          background: white;
        }

        .pricing-main-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 30px;
          text-align: center;
          font-weight: 700;
        }

        .pricing-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          max-width: 1265px;
          margin: 0 auto;
        }

        .pricing-card {
          background: #ffffff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.6s ease;
          text-align: left;
          opacity: 0;
          transform: translateX(-50px);
        }

        .pricing-card:nth-child(even) {
          transform: translateX(50px);
        }

        .pricing-card.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .pricing-card-title {
          margin-bottom: 10px;
          color: #222;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .pricing-card-desc {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        .pricing-card-price {
          display: inline-block;
          margin-top: 15px;
          font-weight: bold;
          color: #ff3333;
          font-size: 1.2rem;
        }

        /* Tablet - 1024px */
        @media (max-width: 1024px) {
          .pricing-section {
            padding: 50px 30px;
          }

          .pricing-main-title {
            font-size: 2.2rem;
          }

          .pricing-container {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }

          .pricing-card {
            padding: 22px;
          }
        }

        /* Mobile - 768px */
        @media (max-width: 768px) {
          .pricing-section {
            padding: 40px 20px;
          }

          .pricing-main-title {
            font-size: 2rem;
            margin-bottom: 25px;
          }

          .pricing-container {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 18px;
          }

          .pricing-card {
            padding: 20px;
          }

          .pricing-card-title {
            font-size: 1.3rem;
          }

          .pricing-card-desc {
            font-size: 0.95rem;
          }

          .pricing-card-price {
            font-size: 1.1rem;
          }
        }

        /* Mobile - 640px */
        @media (max-width: 640px) {
          .pricing-container {
            grid-template-columns: 1fr;
          }
        }

        /* Small Mobile - 480px */
        @media (max-width: 480px) {
          .pricing-section {
            padding: 40px 15px;
          }

          .pricing-main-title {
            font-size: 1.8rem;
          }

          .pricing-card {
            padding: 18px;
          }

          .pricing-card-title {
            font-size: 1.2rem;
          }

          .pricing-card-desc {
            font-size: 0.9rem;
          }
        }

        /* Extra Small Mobile - 375px */
        @media (max-width: 375px) {
          .pricing-main-title {
            font-size: 1.6rem;
          }

          .pricing-card {
            padding: 16px;
          }

          .pricing-card-price {
            font-size: 1rem;
            margin-top: 12px;
          }
        }

        /* Extra Small Mobile - 320px */
        @media (max-width: 320px) {
          .pricing-section {
            padding: 30px 10px;
          }

          .pricing-main-title {
            font-size: 1.5rem;
          }

          .pricing-card {
            padding: 15px;
          }

          .pricing-card-title {
            font-size: 1.1rem;
          }

          .pricing-card-desc {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <section className="pricing-section" id="ourprice">
        <h2 className="pricing-main-title">Our Services & Pricing</h2>
        
        <div className="pricing-container">
          {pricingData.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`pricing-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            >
              <h3 className="pricing-card-title">{service.title}</h3>
              <p className="pricing-card-desc">{service.description}</p>
              <span className="pricing-card-price">{service.price}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PricingServices;
