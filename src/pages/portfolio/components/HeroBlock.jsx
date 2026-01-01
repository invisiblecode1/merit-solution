import React from "react";

function HeroBlock() {
  const styles = {
    heroBlock: {
      display: "flex",
      minHeight: "100vh",
      padding: "80px 40px",
      background: "#ffffff",
    },
    mainWrapper: {
      display: "flex",
      maxWidth: "1265px",
      margin: "0 auto",
      borderRadius: "10px",
      overflow: "hidden",
      backgroundColor: "#fff",
    },
    infoArea: {
      flex: 1,
      padding: "11px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    visualArea: {
      flex: 1.2,
      position: "relative",
      overflow: "hidden",
    },
    visualAreaImg: {
      position: "absolute",
      width: "100%",
      height: "80%",
      objectFit: "cover",
      borderRadius: "20px",
    },
    h1: {
      fontSize: "clamp(2rem, 6vw, 3rem)",
      marginBottom: "20px",
      color: "#ff4d4d",
    },
    h3: {
      fontSize: "clamp(1.2rem, 5vw, 1.5rem)",
      fontWeight: 500,
      color: "#4a5568",
      marginBottom: "20px",
    },
    cont: {
      fontSize: "clamp(1rem, 4vw, 1.1rem)",
      marginBottom: "30px",
      color: "#4a5568",
    },
  };

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .hero-block-custom {
            padding: 60px 30px !important;
          }
          .main-wrapper-custom {
            padding: 20px !important;
          }
          .info-area-custom {
            padding: 20px !important;
          }
          .h1-custom {
            font-size: 2.2rem !important;
          }
          .h3-custom {
            font-size: 1.3rem !important;
          }
          .cont-custom {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 768px) {
          .hero-block-custom {
            padding: 50px 25px !important;
          }
          .info-area-custom {
            padding: 15px !important;
          }
          .h1-custom {
            font-size: 1.9rem !important;
          }
          .h3-custom {
            font-size: 1.2rem !important;
          }
          .cont-custom {
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 600px) {
          .main-wrapper-custom {
            flex-direction: column-reverse !important;
          }
          .visual-area-custom {
            height: 200px !important;
            margin-bottom: 20px !important;
          }
          .visual-area-img-custom {
            border-radius: 10px !important;
          }
          .info-area-custom {
            padding: 15px !important;
          }
          .h1-custom {
            font-size: 1.8rem !important;
          }
          .h3-custom {
            font-size: 1.1rem !important;
          }
          .cont-custom {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-block-custom {
            padding: 40px 15px !important;
          }
          .visual-area-custom {
            height: 180px !important;
          }
          .visual-area-img-custom {
            border-radius: 8px !important;
          }
          .h1-custom {
            font-size: 1.7rem !important;
          }
          .h3-custom {
            font-size: 1rem !important;
          }
          .cont-custom {
            font-size: 0.85rem !important;
          }
        }

        @media (max-width: 375px) {
          .hero-block-custom {
            padding: 30px 10px !important;
          }
          .visual-area-custom {
            height: 220px !important;
          }
          .visual-area-img-custom {
            height: 100% !important;
            border-radius: 5px !important;
          }
          .info-area-custom {
            padding: 10px !important;
          }
          .h1-custom {
            font-size: 1.5rem !important;
          }
          .h3-custom {
            font-size: 0.95rem !important;
          }
          .cont-custom {
            font-size: 0.8rem !important;
          }
        }
      `}</style>

      <section className="hero-block-custom" style={styles.heroBlock}>
        <div className="main-wrapper-custom" style={styles.mainWrapper}>
          <div className="info-area-custom" style={styles.infoArea}>
            <h1 className="h1-custom" style={styles.h1}>
              Web Design Maestro
            </h1>
            <h3 className="h3-custom" style={styles.h3}>
              Turning visions into high-impact digital realities
            </h3>
            <p className="cont-custom" style={styles.cont}>
              With over a decade of experience in crafting bespoke websites, We
              help businesses transform their online presence through design
              that not only looks stunning but performs flawlessly. At Merits
              Solutions, we blend creative vision with technical mastery to
              build websites that engage, convert, and leave a lasting
              impression.
            </p>
            <p className="cont-custom" style={styles.cont}>
              Each project begins with listening — to your goals, your
              challenges, and your audience. From there, we design
              strategically, ensuring every pixel and line of code serves a
              purpose. Because we believe great web design isn't just about
              beauty — it's about building digital experiences that move people
              and grow businesses.
            </p>
          </div>
          <div className="visual-area-custom" style={styles.visualArea}>
            <img
              className="visual-area-img-custom"
              src="img/plans-1867745_1920.jpg"
              alt="Web Design Portfolio Preview"
              style={styles.visualAreaImg}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroBlock;
