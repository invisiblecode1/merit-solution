import React, { useState, useEffect } from "react";


function FeaturesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const images = [
    `${import.meta.env.BASE_URL}img/design-1210160_1920.jpg`,
    `${import.meta.env.BASE_URL}img/seo-1210158_1920.jpg`,
    `${import.meta.env.BASE_URL}img/web.jpg`,
    `${import.meta.env.BASE_URL}img/internet-2224603_1920.jpg`
  ];


  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);


  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  const styles = {
    section: {
      padding: '0 20px',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '120px'
    },
    container: {
      maxWidth: '1265px',
      backgroundColor: '#660000',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexWrap: 'wrap'
    },
    textContent: {
      flex: 1,
      minWidth: '300px',
      padding: '60px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    title: {
      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
      marginBottom: '25px',
      color: '#ffffff'
    },
    paragraph: {
      marginBottom: '20px',
      color: '#ffffff',
      lineHeight: 1.7,
      fontSize: 'clamp(1rem, 2.5vw, 1.2rem)'
    },
    carouselWrapper: {
      flex: 1,
      minWidth: '400px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '500px'
    },
    carouselContainer: {
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    slideImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      opacity: 0,
      transition: 'opacity 1s ease-in-out'
    },
    slideImageActive: {
      opacity: 1
    },
    dotsContainer: {
      position: 'absolute',
      bottom: '30px',
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      zIndex: 10
    },
    dot: {
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      backgroundColor: '#ff4d4d',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    dotActive: {
      backgroundColor: 'white'
    }
  };


  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.textContent}>
          <h2 style={styles.title}>Our Amazing Features</h2>
          <p style={styles.paragraph}>
            At Merits Solutions, we craft responsive, mobile-friendly websites 
            with custom layouts that reflect your brand's unique identity. We 
            integrate SEO best practices, fast load times, and easy-to-use 
            content management systems—giving you full control of your site. 
            Your website will be secure, with SSL protection, privacy policy 
            setup, and spam prevention built in.
          </p>
          <p style={styles.paragraph}>
            To boost engagement, we offer features like contact forms, live 
            chat, newsletter signup, and seamless social media integration. 
            Need more? We provide e-commerce solutions, booking systems, 
            portfolios, blogs, and client testimonials. Plus, we offer premium 
            add-ons like custom animations, multilingual support, performance 
            tracking, and ongoing maintenance plans.
          </p>
        </div>
        
        <div style={styles.carouselWrapper}>
          <div style={styles.carouselContainer}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Feature ${index + 1}`}
                style={{
                  ...styles.slideImage,
                  ...(currentSlide === index ? styles.slideImageActive : {})
                }}
              />
            ))}
          </div>
          
          <div style={styles.dotsContainer}>
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = currentSlide === index ? 'white' : '#ff4d4d'}
                style={{
                  ...styles.dot,
                  ...(currentSlide === index ? styles.dotActive : {})
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default FeaturesCarousel;
