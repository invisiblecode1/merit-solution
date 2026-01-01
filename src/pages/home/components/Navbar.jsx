import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navContainerRef = useRef(null);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        // In your Navbar component's <style> tag, change:
html {
  height: auto;
  scroll-behavior: auto;  /* Change from smooth to auto */
}


        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          background-color: #f8f9fa;
        }

        nav {
         background-color: #ffffff;
         padding: 0.8rem 5rem;
         box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
         position: sticky;  /* Change from fixed to sticky */
         top: 0;
         width: 100%;
         z-index: 1000;
        }


        .nav-container {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0.5rem 1rem;
        }

        .logo img {
          max-height: 50px;
          width: auto;
          display: block;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
        }

        .nav-links a {
          color: #333;
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 500;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .nav-links a:hover {
          background-color: #f0f0f0;
          color: #d43737;
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          padding: 0.1rem;
          color: #333;
          position: absolute;
          right: 1rem;
          cursor: pointer;
          width: 30px;
          text-align: center;
          line-height: 1;
          z-index: 1002;
        }

        /* 1538px breakpoint */
        @media (max-width: 1538px) {
          .nav-container {
            max-width: 1280px;
          }
          .logo {
            font-size: 1.4rem;
          }
          .nav-links a {
            font-size: 1.2rem;
          }
        }

        /* 1280px breakpoint */
        @media (max-width: 1280px) {
          nav {
            padding: 0.8rem 4rem;
          }
          .nav-container {
            max-width: 1024px;
          }
          .logo {
            font-size: 1.2rem;
          }
          .logo img {
            max-height: 45px;
          }
          .nav-links a {
            font-size: 1rem;
          }
        }

        /* 1025px breakpoint */
        @media (max-width: 1025px) {
          nav {
            padding: 0.8rem 3rem;
          }
          .nav-container {
            max-width: 900px;
          }
          .logo img {
            max-height: 40px;
          }
          .nav-links {
            gap: 1.2rem;
          }
        }

        /* 768px breakpoint - HAMBURGER MENU STARTS HERE */
        @media (max-width: 768px) {
          nav {
            padding: 0.8rem 2rem;
          }
          
          .menu-btn {
            display: block;
          }
          
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            width: 90%;
            margin: 0 auto;
            background: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            border-radius: 8px;
            z-index: 1001;
            gap: 0;
          }
          
          .nav-links.active {
            display: flex;
          }
          
          .nav-links li {
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #f0f0f0;
          }
          
          .nav-links li:last-child {
            border-bottom: none;
          }
          
          .nav-links a {
            display: block;
            width: 100%;
            padding: 0.8rem 1rem;
            font-size: 1rem;
          }
          
          .logo img {
            max-height: 38px;
          }
        }

        /* 640px breakpoint */
        @media (max-width: 640px) {
          nav {
            padding: 0.8rem 1.5rem;
          }
          
          .logo img {
            max-height: 36px;
          }
          
          .nav-links {
            top: 55px;
          }
        }

        /* 470px breakpoint */
        @media (max-width: 470px) {
          nav {
            padding: 0.8rem 1.2rem;
          }
          
          .logo {
            padding: 0.5rem 0;
            padding-left: 0;
          }
          
          .logo img {
            max-height: 35px;
          }
          
          .menu-btn {
            font-size: 1.3rem;
            right: 1rem;
          }
        }

        /* 425px breakpoint */
        @media (max-width: 425px) {
          nav {
            padding: 0.8rem 1rem;
          }
          
          .logo img {
            max-height: 32px;
          }
        }

        /* 375px breakpoint */
        @media (max-width: 375px) {
          nav {
            padding: 0.8rem 0.8rem;
          }
          
          .logo img {
            max-height: 30px;
          }
          
          .menu-btn {
            font-size: 1.2rem;
          }
        }

        /* 320px breakpoint */
        @media (max-width: 320px) {
          nav {
            padding: 0.8rem 0.5rem;
          }
          
          .logo img {
            max-height: 28px;
          }
          
          .menu-btn {
            font-size: 1.1rem;
            right: 0.5rem;
          }
          
          .nav-links {
            width: 95%;
            padding: 0.8rem;
          }
          
          .nav-links a {
            font-size: 0.9rem;
            padding: 0.7rem 0.8rem;
          }
        }
      `}</style>

      <nav>
        <div className="nav-container" ref={navContainerRef}>
          <Link to="/" className="logo">
            <img src="img/merit logo.png" alt="Logo" />
          </Link>
          <button className="menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/price" onClick={handleLinkClick}>Pricing</Link></li>
            <li><Link to="/portfolio" onClick={handleLinkClick}>Portfolio</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
