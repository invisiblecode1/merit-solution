import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    requirements: "",
  });


  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.fullName || !formData.email || !formData.phone || !formData.service) {
      alert("Please fill in all required fields.");
      return;
    }


    setIsSubmitting(true);


    try {
      const web3FormsData = new FormData();


      web3FormsData.append("access_key", "42b767c1-7b37-4f28-be80-41c30165e209");
      web3FormsData.append("name", formData.fullName);
      web3FormsData.append("email", formData.email);
      web3FormsData.append("phone", formData.phone);
      web3FormsData.append("service", formData.service);
      web3FormsData.append("requirements", formData.requirements);
      web3FormsData.append("subject", `Quote Request from ${formData.fullName}`);


      const message = `
        New Quote Request:
        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service: ${formData.service}
        Requirements: ${formData.requirements}
      `;
      web3FormsData.append("message", message);


      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormsData,
      });


      const result = await response.json();


      if (result.success) {
        alert("Your quote request has been sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          requirements: "",
        });
      } else {
        throw new Error(result.message || "Failed to send the request.");
      }
    } catch (error) {
      alert("Error sending request. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  const styles = {
    section: {
      position: "relative",
      backgroundImage: "url('img/chairs-2181919_1920.jpg')",
      paddingTop: "100px",
      paddingBottom: "100px",
      backgroundAttachment: "scroll",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      zIndex: 1,
    },
    bookingContainer: {
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "0 20px",
    },
    bookingForm: {
      background: "white",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      marginBottom: "40px",
      width: "100%",
      maxWidth: "1300px",
      margin: "0 auto 40px",
    },
    formTitle: {
      textAlign: "center",
      color: "#2c3e50",
      marginBottom: "30px",
      fontSize: "50px",
      fontWeight: 700,
    },
    formRow: {
      display: "flex",
      gap: "20px",
      marginBottom: "20px",
    },
    formGroup: {
      flex: 1,
    },
    label: {
      display: "block",
      marginBottom: "8px",
      color: "#2c3e50",
      fontWeight: 500,
    },
    input: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      transition: "border-color 0.3s",
      boxSizing: "border-box",
      color: "#2c3e50",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      height: "120px",
      resize: "vertical",
      marginBottom: "20px",
      transition: "border-color 0.3s",
      boxSizing: "border-box",
      color: "#2c3e50",
    },
    button: {
      display: "block",
      width: "100%",
      padding: "18px 36px",
      backgroundColor: "#ff4d4d",
      color: "rgb(255, 255, 255)",
      textDecoration: "none",
      borderRadius: "8px",
      fontSize: "1.2rem",
      fontWeight: 600,
      transition: "all 0.4s ease",
      border: "2px solid transparent",
      textTransform: "uppercase",
      letterSpacing: "1px",
      cursor: "pointer",
    },
    contactSection: {
      background: "white",
      marginTop: "50px",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    },
    contactTitle: {
      textAlign: "center",
      color: "#2c3e50",
      marginBottom: "30px",
      fontSize: "34px",
      fontWeight: 700,
    },
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "30px",
      textAlign: "center",
    },
    contactItem: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    contactIcon: {
      fontSize: "1.5rem",
      color: "#ff4d4d",
      marginBottom: "1rem",
    },
    contactHeading: {
      color: "#ff4d4d",
      marginBottom: "10px",
      fontSize: "18px",
      fontWeight: 600,
    },
    contactText: {
      color: "#2c3e50",
      lineHeight: 1.6,
      margin: 0,
    },
  };


  return (
    <>
      <style>{`
        /* Fix for iOS background blur and size issues */
        .appointment-section-custom {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        /* Desktop - use fixed attachment */
        @media (min-width: 1025px) {
          .appointment-section-custom {
            background-attachment: fixed !important;
          }
        }

        /* iOS and mobile - disable fixed and optimize image */
        @media (max-width: 1024px) {
          .appointment-section-custom {
            background-attachment: scroll !important;
            background-size: cover !important;
            background-position: center center !important;
          }
        }

        .appointment-input,
        .appointment-select,
        .appointment-textarea {
          color: #2c3e50 !important;
        }


        .appointment-input:focus,
        .appointment-select:focus,
        .appointment-textarea:focus {
          outline: none;
          border-color: #ff4d4d !important;
        }


        .appointment-button:hover {
          background-color: transparent !important;
          border-color: #ff4d4d !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d !important;
        }


        .appointment-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }


        @media (max-width: 1024px) {
          .appointment-section-custom {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .booking-container-custom {
            max-width: 90% !important;
          }
          .booking-form-custom {
            padding: 25px !important;
          }
          .form-title-custom {
            font-size: 42px !important;
          }
          .contact-grid-custom {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 15px !important;
          }
          .contact-item-custom {
            padding: 15px !important;
          }
          .contact-heading-custom {
            font-size: 18px !important;
          }
          .contact-text-custom {
            font-size: 14px !important;
          }
        }


        @media (max-width: 768px) {
          .appointment-section-custom {
            padding-top: 70px !important;
            padding-bottom: 70px !important;
          }
          .booking-container-custom {
            max-width: 95% !important;
          }
          .form-title-custom {
            font-size: 32px !important;
            margin-bottom: 20px !important;
          }
          .booking-form-custom {
            padding: 20px !important;
          }
          .form-row-custom {
            flex-direction: column !important;
            gap: 15px !important;
          }
          .contact-grid-custom {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 10px !important;
          }
          .appointment-button {
            font-size: 1.1rem !important;
            padding: 16px 30px !important;
          }
        }


        @media (max-width: 620px) {
          .appointment-section-custom {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
          .booking-container-custom {
            padding: 0 15px !important;
          }
          .form-title-custom {
            font-size: 28px !important;
          }
          .contact-grid-custom {
            grid-template-columns: repeat(1, 1fr) !important;
            gap: 15px !important;
          }
          .contact-item-custom {
            padding: 10px !important;
          }
          .contact-title-custom {
            font-size: 26px !important;
          }
        }


        @media (max-width: 425px) {
          .appointment-section-custom {
            padding-top: 50px !important;
            padding-bottom: 50px !important;
          }
          .booking-form-custom {
            padding: 15px !important;
            border-radius: 10px !important;
          }
          .form-title-custom {
            font-size: 24px !important;
            margin-bottom: 15px !important;
          }
          .contact-section-custom {
            padding: 20px !important;
            margin-top: 30px !important;
          }
          .contact-title-custom {
            font-size: 22px !important;
            margin-bottom: 20px !important;
          }
          .appointment-button {
            font-size: 1rem !important;
            padding: 14px 28px !important;
          }
          .appointment-label {
            font-size: 14px !important;
          }
          .appointment-input,
          .appointment-select,
          .appointment-textarea {
            padding: 10px !important;
            font-size: 14px !important;
          }
        }


        @media (max-width: 375px) {
          .appointment-section-custom {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .booking-container-custom {
            padding: 0 10px !important;
          }
          .booking-form-custom {
            padding: 15px !important;
          }
          .form-title-custom {
            font-size: 22px !important;
          }
          .contact-heading-custom {
            font-size: 16px !important;
          }
          .contact-text-custom {
            font-size: 13px !important;
          }
          .appointment-textarea {
            height: 100px !important;
          }
          .appointment-button {
            padding: 12px 24px !important;
          }
        }


        @media (max-width: 320px) {
          .appointment-section-custom {
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }
          .booking-form-custom {
            padding: 12px !important;
            border-radius: 8px !important;
          }
          .form-title-custom {
            font-size: 20px !important;
            margin-bottom: 12px !important;
          }
          .form-row-custom {
            gap: 10px !important;
            margin-bottom: 10px !important;
          }
          .contact-section-custom {
            padding: 15px !important;
            margin-top: 25px !important;
            border-radius: 8px !important;
          }
          .contact-title-custom {
            font-size: 20px !important;
            margin-bottom: 15px !important;
          }
          .contact-item-custom {
            padding: 8px !important;
          }
          .contact-heading-custom {
            font-size: 15px !important;
            margin-bottom: 5px !important;
          }
          .contact-text-custom {
            font-size: 12px !important;
          }
          .contact-icon-custom {
            font-size: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          .appointment-button {
            font-size: 0.9rem !important;
            padding: 10px 20px !important;
          }
          .appointment-input,
          .appointment-select,
          .appointment-textarea {
            padding: 8px !important;
            font-size: 13px !important;
            border-radius: 6px !important;
          }
          .appointment-textarea {
            height: 80px !important;
            margin-bottom: 15px !important;
          }
          .appointment-label {
            margin-bottom: 5px !important;
            font-size: 13px !important;
          }
        }
      `}</style>


      <section className="appointment-section-custom" style={styles.section} id="letgobook">
        <div className="booking-container-custom" style={styles.bookingContainer}>
          <div className="booking-form-custom" style={styles.bookingForm}>
            <h2 className="form-title-custom" style={styles.formTitle}>
              Get a Quote
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row-custom" style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label htmlFor="fullName" className="appointment-label" style={styles.label}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="appointment-input"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="email" className="appointment-label" style={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="appointment-input"
                    style={styles.input}
                  />
                </div>
              </div>


              <div className="form-row-custom" style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label htmlFor="phone" className="appointment-label" style={styles.label}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="appointment-input"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="service" className="appointment-label" style={styles.label}>
                    Select Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="appointment-select appointment-input"
                    style={styles.input}
                  >
                    <option value="">Choose a service</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="Social Media Setup">Social Media Setup</option>
                    <option value="Additional Pages">Additional Pages</option>
                    <option value="Google my business setup">Google my business setup</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="Graphic design">Graphic design</option>
                    <option value="Website Maintenance">Website Maintenance</option>
                    <option value="Web Hosting & Domain Management">
                      Web Hosting & Domain Management
                    </option>
                    <option value="UX & UI Design">UX & UI Design</option>
                    <option value="Other service">Other service</option>
                  </select>
                </div>
              </div>


              <div style={styles.formGroup}>
                <label htmlFor="requirements" className="appointment-label" style={styles.label}>
                  Special Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Any special requirements or notes..."
                  className="appointment-textarea"
                  style={styles.textarea}
                ></textarea>
              </div>


              <button
                type="submit"
                disabled={isSubmitting}
                className="appointment-button"
                style={styles.button}
              >
                {isSubmitting ? "Sending..." : "Book Appointment"}
              </button>
            </form>
          </div>


          <div className="contact-section-custom" style={styles.contactSection}>
            <h2 className="contact-title-custom" style={styles.contactTitle}>
              Contact Information
            </h2>
            <div className="contact-grid-custom" style={styles.contactGrid}>
              <div className="contact-item-custom" style={styles.contactItem}>
                <FaMapMarkerAlt className="contact-icon-custom" style={styles.contactIcon} />
                <h3 className="contact-heading-custom" style={styles.contactHeading}>
                  Address
                </h3>
                <p className="contact-text-custom" style={styles.contactText}>
                  Red deer, Alberta
                </p>
              </div>
              <div className="contact-item-custom" style={styles.contactItem}>
                <FaPhoneAlt className="contact-icon-custom" style={styles.contactIcon} />
                <h3 className="contact-heading-custom" style={styles.contactHeading}>
                  Phone
                </h3>
                <p className="contact-text-custom" style={styles.contactText}>
                  (403) 307-4521
                </p>
              </div>
              <div className="contact-item-custom" style={styles.contactItem}>
                <FaEnvelope className="contact-icon-custom" style={styles.contactIcon} />
                <h3 className="contact-heading-custom" style={styles.contactHeading}>
                  Email
                </h3>
                <p className="contact-text-custom" style={styles.contactText}>
                  Makinde.taofeek95@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default AppointmentForm;
