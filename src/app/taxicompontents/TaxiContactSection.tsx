"use client";

import Link from "next/link";

const TaxiContactSection = () => {
  return (
    <section className="taxi-contact-section">
      <div className="container">
        <div className="row align-items-center">

          {/* =================================
              LEFT CONTENT
          ================================= */}
          <div className="col-lg-6">
            <div className="taxi-contact-info">

              <span className="contact-subtitle">
                GET IN TOUCH
              </span>

              <h2>
                Let’s Plan Your
                <br />
                <span>Rajasthan Journey</span>
              </h2>

              <p className="contact-description">
                Need a comfortable taxi for local sightseeing,
                airport transfer or an outstation trip? Our travel
                team is ready to help you choose the right vehicle
                for your journey.
              </p>


              {/* Contact Details */}
              <div className="contact-details">

                {/* Location */}
                <div className="contact-detail-item">

                  <div className="contact-icon">
                    📍
                  </div>

                  <div>
                    <span>Our Location</span>
                    <strong>
                      Vaishali Nagar, Jaipur, Rajasthan
                    </strong>
                  </div>

                </div>


                {/* Phone */}
                <div className="contact-detail-item">

                  <div className="contact-icon">
                    ☎
                  </div>

                  <div>
                    <span>Call Us</span>

                    <Link href="tel:+919999999999">
                      <strong>
                        +91 99999 99999
                      </strong>
                    </Link>
                  </div>

                </div>


                {/* Email */}
                <div className="contact-detail-item">

                  <div className="contact-icon">
                    ✉
                  </div>

                  <div>
                    <span>Email Us</span>

                    <Link href="mailto:info@example.com">
                      <strong>
                        info@example.com
                      </strong>
                    </Link>
                  </div>

                </div>

              </div>


              {/* Social */}
              <div className="contact-social">

                <span>Follow Us</span>

                <div className="social-links">

                  <Link href="#" aria-label="Facebook">
                    f
                  </Link>

                  <Link href="#" aria-label="Instagram">
                    ◎
                  </Link>

                  <Link href="#" aria-label="YouTube">
                    ▶
                  </Link>

                  <Link href="#" aria-label="WhatsApp">
                    ☎
                  </Link>

                </div>

              </div>

            </div>
          </div>


          {/* =================================
              RIGHT FORM
          ================================= */}
          <div className="col-lg-6">

            <div className="taxi-contact-form">

              <div className="form-heading">

                <span>
                  HAVE A QUESTION?
                </span>

                <h3>
                  Send Us A Message
                </h3>

                <p>
                  Fill out the form and our travel team
                  will get back to you shortly.
                </p>

              </div>


              <form>

                {/* Name + Phone */}
                <div className="row">

                  <div className="col-md-6">

                    <div className="form-group">

                      <label>
                        Name <em>*</em>
                      </label>

                      <input
                        type="text"
                        placeholder="Your Name"
                      />

                    </div>

                  </div>


                  <div className="col-md-6">

                    <div className="form-group">

                      <label>
                        Mobile Number <em>*</em>
                      </label>

                      <input
                        type="tel"
                        placeholder="Your Mobile Number"
                      />

                    </div>

                  </div>

                </div>


                {/* Email */}
                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Your Email Address"
                  />

                </div>


                {/* Service */}
                {/* <div className="form-group">

                  <label>
                    Taxi Service
                  </label>

                  <select defaultValue="">

                    <option value="" disabled>
                      Select Taxi Service
                    </option>

                    <option value="local">
                      Local Sightseeing
                    </option>

                    <option value="airport">
                      Airport Transfer
                    </option>

                    <option value="outstation">
                      Outstation Taxi
                    </option>

                    <option value="tempo">
                      Tempo Traveller
                    </option>

                    <option value="luxury">
                      Luxury Taxi
                    </option>

                  </select>

                </div> */}


                {/* Message */}
                <div className="form-group">

                  <label>
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your travel plan..."
                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Send Message

                  <span>
                    →
                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>
      </div>


      {/* =========================================
          CSS
      ========================================= */}
      <style jsx>{`

        /* =========================================
           SECTION
        ========================================= */

        .taxi-contact-section {
          position: relative;

          padding: 100px 0;

          background: #f4eeff;

          overflow: hidden;
        }


        .taxi-contact-section::before {
          content: "";

          position: absolute;

          width: 350px;
          height: 350px;

          right: -120px;
          top: -120px;

          border-radius: 50%;

          background: rgba(91, 16, 232, 0.07);

          pointer-events: none;
        }


        .taxi-contact-section::after {
          content: "";

          position: absolute;

          width: 250px;
          height: 250px;

          left: -100px;
          bottom: -100px;

          border-radius: 50%;

          background: rgba(255, 157, 0, 0.08);

          pointer-events: none;
        }


        /* =========================================
           LEFT CONTENT
        ========================================= */

        .taxi-contact-info {
          position: relative;

          z-index: 2;

          padding-right: 50px;
        }


        .contact-subtitle {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          color: #5b10e8;

          font-size: 13px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }


        .contact-subtitle::before {
          content: "";

          width: 30px;
          height: 3px;

          border-radius: 20px;

          background: #ff9d00;
        }


        .taxi-contact-info h2 {
          margin: 18px 0 18px;

          color: #17121f;

          font-size: 45px;

          line-height: 1.15;

          font-weight: 700;
        }


        .taxi-contact-info h2 span {
          color: #5b10e8;
        }


        .contact-description {
          max-width: 570px;

          margin: 0 0 32px;

          color: #6b7280;

          font-size: 16px;

          line-height: 1.8;
        }


        /* =========================================
           CONTACT DETAILS
        ========================================= */

        .contact-details {
          display: flex;

          flex-direction: column;

          gap: 18px;

          margin-bottom: 35px;
        }


        .contact-detail-item {
          display: flex;

          align-items: center;

          gap: 15px;
        }


        .contact-icon {
          width: 48px;
          height: 48px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 12px;

          background: #ffffff;

          color: #5b10e8;

          font-size: 19px;

          box-shadow:
            0 8px 20px rgba(63, 10, 168, 0.08);
        }


        .contact-detail-item span {
          display: block;

          margin-bottom: 4px;

          color: #8a8392;

          font-size: 12px;

          font-weight: 600;
        }


        .contact-detail-item strong {
          display: block;

          color: #30283a;

          font-size: 15px;

          font-weight: 700;
        }


        .contact-detail-item a {
          text-decoration: none;
        }


        .contact-detail-item a strong {
          transition: color 0.3s ease;
        }


        .contact-detail-item a:hover strong {
          color: #5b10e8;
        }


        /* =========================================
           SOCIAL
        ========================================= */

        .contact-social {
          padding-top: 25px;

          border-top: 1px solid rgba(91, 16, 232, 0.12);
        }


        .contact-social > span {
          display: block;

          margin-bottom: 14px;

          color: #3f0aa8;

          font-size: 14px;

          font-weight: 700;
        }


        .social-links {
          display: flex;

          gap: 10px;
        }


        .social-links a {
          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background: #ffffff;

          color: #5b10e8;

          font-size: 16px;

          font-weight: 800;

          text-decoration: none;

          box-shadow:
            0 7px 18px rgba(63, 10, 168, 0.08);

          transition: all 0.3s ease;
        }


        .social-links a:hover {
          background: #5b10e8;

          color: #ffffff;

          transform: translateY(-3px);
        }


        /* =========================================
           FORM BOX
        ========================================= */

        .taxi-contact-form {
          position: relative;

          z-index: 2;

          padding: 38px;

          border-radius: 22px;

          background: #ffffff;

          border: 1px solid #e7ddf5;

          box-shadow:
            0 20px 55px rgba(63, 10, 168, 0.12);
        }


        /* =========================================
           FORM HEADING
        ========================================= */

        .form-heading {
          margin-bottom: 25px;
        }


        .form-heading span {
          color: #ff9d00;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 1.2px;
        }


        .form-heading h3 {
          margin: 7px 0 7px;

          color: #17121f;

          font-size: 29px;

          line-height: 1.2;

          font-weight: 700;
        }


        .form-heading p {
          margin: 0;

          color: #7a7481;

          font-size: 13px;

          line-height: 1.6;
        }


        /* =========================================
           FORM GROUP
        ========================================= */

        .form-group {
          margin-bottom: 17px;
        }


        .form-group label {
          display: block;

          margin-bottom: 7px;

          color: #30283a;

          font-size: 13px;

          font-weight: 700;
        }


        .form-group label em {
          color: #ff5b5b;

          font-style: normal;
        }


        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;

          padding: 13px 15px;

          border: 1px solid #ddd5e8;

          border-radius: 8px;

          outline: none;

          background: #ffffff;

          color: #30283a;

          font-size: 13px;

          font-family: inherit;

          transition: all 0.3s ease;
        }


        .form-group input {
          height: 48px;
        }


        .form-group select {
          height: 48px;

          cursor: pointer;
        }


        .form-group textarea {
          resize: vertical;

          min-height: 105px;
        }


        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #aaa3b0;
        }


        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #5b10e8;

          box-shadow:
            0 0 0 3px rgba(91, 16, 232, 0.08);
        }


        /* =========================================
           SUBMIT BUTTON
        ========================================= */

        .contact-submit-btn {
          width: 100%;

          min-height: 50px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 12px;

          margin-top: 5px;

          border: none;

          border-radius: 9px;

          background: #5b10e8;

          color: #ffffff;

          font-size: 14px;

          font-weight: 700;

          cursor: pointer;

          transition: all 0.3s ease;
        }


        .contact-submit-btn span {
          font-size: 19px;

          line-height: 1;

          transition: transform 0.3s ease;
        }


        .contact-submit-btn:hover {
          background: #ff9d00;

          color: #ffffff;

          transform: translateY(-2px);

          box-shadow:
            0 10px 25px rgba(255, 157, 0, 0.25);
        }


        .contact-submit-btn:hover span {
          transform: translateX(5px);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 991px) {

          .taxi-contact-section {
            padding: 80px 0;
          }


          .taxi-contact-info {
            padding-right: 0;

            margin-bottom: 45px;
          }


          .taxi-contact-info h2 {
            font-size: 40px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 575px) {

          .taxi-contact-section {
            padding: 60px 0;
          }


          .taxi-contact-info {
            margin-bottom: 35px;
          }


          .taxi-contact-info h2 {
            font-size: 31px;
          }


          .contact-description {
            font-size: 14px;

            line-height: 1.7;
          }


          .taxi-contact-form {
            padding: 22px;

            border-radius: 17px;
          }


          .form-heading h3 {
            font-size: 25px;
          }


          .contact-detail-item {
            gap: 12px;
          }


          .contact-icon {
            width: 43px;
            height: 43px;

            font-size: 17px;
          }


          .contact-detail-item strong {
            font-size: 13px;
          }

        }

      `}</style>
    </section>
  );
};

export default TaxiContactSection;