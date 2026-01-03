import React, { useState, useEffect, useRef } from 'react';


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef([]);
  const slideInterval = 10000;
  const timerRef = useRef(null);


  const slides = [
    {
      video: `${import.meta.env.BASE_URL}vid/vedio1.mp4`,
      hasOverlay: false
    },
    {
      video: `${import.meta.env.BASE_URL}vid/vedio2.mp4`,
      hasOverlay: true,
      title: 'Inspiring Design',
      description: 'Elevate your digital presence with Merit Solution. Our innovative solutions create captivating experiences that truly engage your audience.',
      link: '#taofeek'
    }
  ];


  const showSlide = (index) => {
    setCurrentSlide(index);
    
    slidesRef.current.forEach((slide) => {
      const video = slide?.querySelector('video');
      if (video) video.pause();
    });


    const activeSlide = slidesRef.current[index];
    const activeVideo = activeSlide?.querySelector('video');
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play();
    }
  };


  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  };


  const resetInterval = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(nextSlide, slideInterval);
  };


  const handleDotClick = (index) => {
    if (currentSlide !== index) {
      showSlide(index);
      resetInterval();
    }
  };


  useEffect(() => {
    timerRef.current = setInterval(nextSlide, slideInterval);


    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
        resetInterval();
      } else if (e.key === 'ArrowRight') {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
        resetInterval();
      }
    };


    document.addEventListener('keydown', handleKeyDown);


    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);


  return (
    <>
      <style>{`
        .fslider-container {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          margin-top: 0;
        }


        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          z-index: 1;
        }


        .slide.active {
          opacity: 1;
          z-index: 2;
        }


        .slide video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }


        .content-overlay {
          position: absolute;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          max-width: 600px;
          padding: 1rem;
          color: rgba(0, 0, 0, 0.829);
          z-index: 3;
          backdrop-filter: blur(5px);
          border-radius: 15px;
          animation: slideIn 3s ease-out;
        }


        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translate(100px, -50%);
          }
          to {
            opacity: 1;
            transform: translate(0, -50%);
          }
        }


        .content-overlay h2 {
          font-size: 4rem;
          line-height: 1;
          margin-bottom: 1rem;
          font-weight: 800;
          text-shadow: 2px 2px 4px rgba(240, 1, 1, 0.459);
        }


        .content-overlay p {
          font-size: 1rem;
          margin-bottom: 2rem;
          line-height: 1.6;
          text-shadow: 1px 1px 2px rgba(131, 122, 122, 0.3);
        }


        .cta-button {
          display: inline-block;
          padding: 14px 28px;
          background-color: #ff4d4d;
          color: rgb(255, 255, 255);
          text-decoration: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.4s ease;
          border: 2px solid transparent;
          text-transform: uppercase;
          letter-spacing: 1px;
        }


        .cta-button:hover {
          background-color: transparent;
          border-color: #ff4d4d;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d;
        }


        .slider-nav {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 3;
        }


        .slider-dot {
          width: 12px;
          height: 12px;
          border: 2px solid rgb(255, 255, 255);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.4s ease;
        }


        .slider-dot.active {
          background-color: #ff00008a;
          transform: scale(1.2);
        }


        @media (max-width: 768px) {
          .fslider-container { height: 80vh; }
          .slide video { height: 80vh; }
          .content-overlay {
            left: 50%;
            right: auto;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 50%;
          }
          .content-overlay h2 { font-size: 1.6rem; }
          .content-overlay p { font-size: 1rem; }
        }


        @media (max-width: 640px) {
          .fslider-container { height: 70vh; }
          .slide video { height: 70vh; }
          .content-overlay { display: none; }
        }


        @media (max-width: 470px) {
          .fslider-container { height: 60vh; }
          .slide video { height: 60vh; }
        }
      `}</style>


      <div className="fslider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
          >
            <video autoPlay muted loop playsInline>
              <source src={slide.video} type="video/mp4" />
            </video>
            {slide.hasOverlay && (
              <div className="content-overlay">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <a href={slide.link} className="cta-button">Explore More</a>
              </div>
            )}
          </div>
        ))}


        <div className="slider-nav">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};


export default HeroSlider;
