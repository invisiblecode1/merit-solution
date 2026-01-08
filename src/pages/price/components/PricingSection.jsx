import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$500',
      billing: '/project',
      features: [
        '5-page website',
        'Basic SEO',
        'Contact form',
        'Mobile-friendly',
        '2 revisions'
      ],
      image: 'img/web-1738159_1920.jpg',
      popular: false
    },
    {
      name: 'Pro',
      price: '$999',
      billing: '/project',
      features: [
        '10-page website',
        'Advanced SEO',
        'Custom forms',
        'E-commerce',
        '4 revisions'
      ],
      image: 'img/online-web-design.jpg',
      popular: true
    },
    {
      name: 'Business',
      price: '$1,499',
      billing: '/project',
      features: [
        '15-page website',
        'Premium SEO',
        'Advanced store',
        'Blog system',
        '6 revisions'
      ],
      image: 'img/office-5067104_1280.jpg',
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$2,000',
      billing: '/project',
      features: [
        'Unlimited pages',
        'Enterprise SEO',
        'Custom features',
        'Full E-commerce',
        'Unlimited revisions'
      ],
      image: 'img/building-4803602_1920.jpg',
      popular: false
    },
    {
      name: 'E-commerce',
      price: '$3,000',
      billing: '/project',
      features: [
        'Full store setup',
        'Unlimited products',
        'Multiple payments',
        'Inventory system',
        '6 revisions'
      ],
      image: 'img/online-4275963.jpg',
      popular: false
    },
    {
      name: 'Custom',
      price: '$4,000',
      billing: '/project',
      features: [
        'Custom webapp',
        'API integration',
        'Database setup',
        'Custom features',
        'Unlimited support'
      ],
      image: 'img/lee-campbell-DtDlVpy-vvQ-unsplash.jpg',
      popular: false
    }
  ];

  const styles = {
    container: {
      maxWidth: '1265px',
      margin: '60px auto',
      padding: '5rem 1.5rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    headerH1: {
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      marginBottom: '1rem',
      color: '#333'
    },
    headerP: {
      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
      color: '#666',
      maxWidth: '700px',
      margin: '0 auto'
    },
    pricingPlans: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem'
    },
    plan: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      position: 'relative'
    },
    planPopular: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      position: 'relative',
      border: '2px solid #ff3333',
      transform: 'scale(1.05)'
    },
    popularBadge: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      backgroundColor: '#ff3333',
      color: 'white',
      padding: '0.25rem 0.75rem',
      fontSize: '0.8rem',
      fontWeight: '600',
      borderRadius: '8px',
      letterSpacing: '0.5px',
      zIndex: 10
    },
    planHeader: {
      padding: '3rem 2rem 2rem',
      textAlign: 'center',
      borderBottom: '1px solid #e0e0e0',
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      zIndex: 1
    },
    planHeaderOverlay: {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
      zIndex: -1
    },
    planName: {
      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
      fontWeight: '600',
      marginBottom: '1rem',
      position: 'relative',
      zIndex: 2,
      color: 'white'
    },
    planPrice: {
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      fontWeight: '700',
      color: '#ff3333',
      marginBottom: '0.5rem',
      position: 'relative',
      zIndex: 2,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    planBilling: {
      fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
      color: 'white',
      position: 'relative',
      zIndex: 2
    },
    planFeatures: {
      padding: '2rem'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    featureIcon: {
      marginRight: '0.75rem',
      color: '#ff3333',
      fontSize: '1.2rem'
    },
    featureSpan: {
      fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
      color: '#333'
    },
    planCta: {
      padding: '0 2rem 2rem',
      textAlign: 'center'
    }
  };

  return (
    <>
      <style>{`
        .plan:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .plan-popular:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: transparent !important;
          border-color: #ff4d4d !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d !important;
        }

        /* Large Desktop */
        @media (min-width: 1025px) {
          .cta-button {
            padding: 16px 32px;
            font-size: 1rem;
          }
        }

        /* Tablet: 768px - 1024px - 3 columns */
        @media (max-width: 1024px) {
          .pricing-plans-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }

          .plan-popular {
            transform: scale(1) !important;
          }

          .cta-button {
            padding: 14px 28px;
            font-size: 0.9rem;
          }

          .container-section {
            padding: 4rem 1.5rem !important;
          }
        }

        /* Mobile landscape: 640px - 767px - 2 columns */
        @media (max-width: 767px) {
          .pricing-plans-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }

          .plan-popular {
            transform: scale(1) !important;
          }

          .plan-popular:hover {
            transform: translateY(-5px) !important;
          }

          .cta-button {
            padding: 12px 24px;
            font-size: 0.85rem;
          }

          .container-section {
            padding: 3rem 1.25rem !important;
          }
        }

        /* Mobile portrait: below 640px - 1 column */
        @media (max-width: 639px) {
          .pricing-plans-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .feature-item {
            flex-direction: row;
            align-items: center;
          }

          .cta-button {
            padding: 14px 28px;
            font-size: 0.9rem;
          }

          .container-section {
            padding: 2.5rem 1rem !important;
            margin: 40px auto !important;
          }
        }

        /* Small mobile: below 480px */
        @media (max-width: 479px) {
          .cta-button {
            padding: 12px 24px;
            font-size: 0.85rem;
          }
        }

        /* Extra small mobile: below 375px */
        @media (max-width: 374px) {
          .container-section {
            padding: 2rem 0.75rem !important;
          }

          .cta-button {
            padding: 10px 20px;
            font-size: 0.8rem;
          }

          .plan-features {
            padding: 1.5rem !important;
          }

          .plan-cta {
            padding: 0 1.5rem 1.5rem !important;
          }
        }
      `}</style>

      <section className="container-section" style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.headerH1}>Choose Your Perfect Plan</h1>
          <p style={styles.headerP}>
            Select the ideal package that fits your business needs. All plans include our premium support and regular updates.
          </p>
        </div>

        <div className="pricing-plans-grid" style={styles.pricingPlans}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={plan.popular ? 'plan-popular' : 'plan'}
              style={plan.popular ? styles.planPopular : styles.plan}
            >
              {plan.popular && (
                <div style={styles.popularBadge}>Popular</div>
              )}
              
              <div style={{
                ...styles.planHeader,
                backgroundImage: `url('${plan.image}')`
              }}>
                <div style={styles.planHeaderOverlay}></div>
                <h3 style={styles.planName}>{plan.name}</h3>
                <div style={styles.planPrice}>{plan.price}</div>
                <div style={styles.planBilling}>{plan.billing}</div>
              </div>

              <div className="plan-features" style={styles.planFeatures}>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="feature-item" style={styles.feature}>
                    <span style={styles.featureIcon}>✓</span>
                    <span style={styles.featureSpan}>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="plan-cta" style={styles.planCta}>
                <a href="#letgobook" className="cta-button">
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PricingSection;
