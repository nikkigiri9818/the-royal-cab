"use client";

import Image from "next/image";
import Link from "next/link";

import taxiAboutImage from "@/assets/img/taxi/taxi.avif";

const RajasthanTaxiAbout = () => {
  return (
    <>
      <section className="rajasthan-taxi-about">
        <div className="container">
          <div className="row align-items-center">

            {/* =========================
                LEFT IMAGE
            ========================= */}
            <div className="col-lg-6">
              <div className="rajasthan-about-image">

                <Image
                  src={taxiAboutImage}
                  alt="Rajasthan Taxi Service"
                  width={600}
                  height={500}
                  priority
                />

                {/* Image Badge */}
                <div className="about-image-badge">

                  <span className="badge-icon">
                    🚕
                  </span>

                  <div>
                    <strong>Private Taxi</strong>
                    <small>Across Rajasthan</small>
                  </div>

                </div>

              </div>
            </div>


            {/* =========================
                RIGHT CONTENT
            ========================= */}
            <div className="col-lg-6">
              <div className="rajasthan-about-content">

                {/* Small Heading */}
                <span className="about-subtitle">
                  RAJASTHAN TAXI SERVICE
                </span>


                {/* Main Heading */}
                <h2>
                  Explore Rajasthan
                  <br />
                  <span>With Comfortable Taxi</span>
                </h2>


                {/* Description */}
                <p className="about-intro">
                  Discover the beauty of Rajasthan with a comfortable
                  private taxi and experienced driver. Whether you are
                  planning local sightseeing, airport transfer or a
                  multi-city Rajasthan trip, choose a vehicle that
                  fits your journey.
                </p>

                <p>
                  Travel comfortably between Jaipur, Udaipur, Jodhpur,
                  Jaisalmer, Ajmer, Pushkar, Bikaner and other popular
                  destinations across Rajasthan.
                </p>


                {/* =========================
                    VEHICLE LIST
                ========================= */}
                <div className="about-vehicle-list">

                  <div className="about-vehicle-item">
                    <span>✓</span>
                    <strong>Sedan Cars</strong>
                  </div>

                  <div className="about-vehicle-item">
                    <span>✓</span>
                    <strong>SUV & Innova</strong>
                  </div>

                  <div className="about-vehicle-item">
                    <span>✓</span>
                    <strong>Premium Crysta</strong>
                  </div>

                  <div className="about-vehicle-item">
                    <span>✓</span>
                    <strong>Tempo Traveller</strong>
                  </div>

                </div>


                {/* =========================
                    CONTACT BOX
                ========================= */}
                <div className="about-contact-box">

                  <div className="about-contact-icon">
                    ☎
                  </div>

                  <div className="about-contact-text">
                    <span>Need a Taxi?</span>
                    <strong>Talk to our travel team</strong>
                  </div>

                  <Link
                    href="#booking"
                    className="about-contact-btn"
                  >
                    Get A Quote
                  </Link>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CSS
      ===================================================== */}
      <style jsx>{`

        /* =========================================
           MAIN SECTION
        ========================================= */

        .rajasthan-taxi-about {
          padding: 110px 0;
          background: #ffffff;
          overflow: hidden;
        }


        /* =========================================
           LEFT IMAGE
        ========================================= */

        .rajasthan-about-image {
          position: relative;

          width: 100%;
          height: 540px;

          margin-right: 35px;

          border-radius: 28px;

          overflow: hidden;

          background: #f4eeff;

          box-shadow: 0 20px 50px rgba(63, 10, 168, 0.10);
        }


        .rajasthan-about-image::after {
          content: "";

          position: absolute;

          inset: 0;

          background: linear-gradient(
            180deg,
            rgba(63, 10, 168, 0) 40%,
            rgba(63, 10, 168, 0.45) 100%
          );

          pointer-events: none;
        }


        .rajasthan-about-image :global(img) {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;

          transition: transform 0.6s ease;
        }


        .rajasthan-about-image:hover :global(img) {
          transform: scale(1.05);
        }


        /* =========================================
           IMAGE BADGE
        ========================================= */

        .about-image-badge {
          position: absolute;

          z-index: 3;

          left: 25px;
          bottom: 25px;

          display: flex;
          align-items: center;

          gap: 12px;

          padding: 14px 20px;

          border-radius: 14px;

          background: rgba(255, 255, 255, 0.96);

          box-shadow:
            0 12px 35px rgba(63, 10, 168, 0.18);

          backdrop-filter: blur(5px);
        }


        .badge-icon {
          width: 44px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 10px;

          background: #f4eeff;

          font-size: 21px;
        }


        .about-image-badge strong {
          display: block;

          color: #3f0aa8;

          font-size: 15px;

          font-weight: 700;

          line-height: 1.2;
        }


        .about-image-badge small {
          display: block;

          margin-top: 4px;

          color: #6b7280;

          font-size: 12px;

          line-height: 1.2;
        }


        /* =========================================
           RIGHT CONTENT
        ========================================= */

        .rajasthan-about-content {
          padding-left: 20px;
        }


        /* =========================================
           SUBTITLE
        ========================================= */

        .about-subtitle {
          position: relative;

          display: inline-flex;
          align-items: center;

          gap: 10px;

          color: #5b10e8;

          font-size: 13px;

          font-weight: 800;

          letter-spacing: 1.5px;

          line-height: 1;
        }


        .about-subtitle::before {
          content: "";

          width: 30px;
          height: 3px;

          border-radius: 20px;

          background: #ff9d00;
        }


        /* =========================================
           HEADING
        ========================================= */

        .rajasthan-about-content h2 {
          margin: 18px 0 22px;

          color: #17121f;

          font-size: 46px;

          line-height: 1.12;

          font-weight: 700;

          letter-spacing: -0.5px;
        }


        .rajasthan-about-content h2 span {
          color: #5b10e8;
        }


        /* =========================================
           PARAGRAPH
        ========================================= */

        .rajasthan-about-content p {
          margin: 0 0 18px;

          color: #6b7280;

          font-size: 16px;

          line-height: 1.8;
        }


        .rajasthan-about-content .about-intro {
          color: #3f3a47;

          font-size: 17px;

          line-height: 1.75;
        }


        /* =========================================
           VEHICLE LIST
        ========================================= */

        .about-vehicle-list {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 14px 25px;

          margin: 28px 0 30px;
        }


        .about-vehicle-item {
          display: flex;

          align-items: center;

          gap: 10px;

          color: #30283a;

          font-size: 15px;

          line-height: 1.4;
        }


        .about-vehicle-item span {
          width: 25px;
          height: 25px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 50%;

          background: #f4eeff;

          color: #5b10e8;

          font-size: 12px;

          font-weight: 800;
        }


        .about-vehicle-item strong {
          font-weight: 600;
        }


        /* =========================================
           CONTACT BOX
        ========================================= */

        .about-contact-box {
          display: flex;

          align-items: center;

          gap: 14px;

          width: 100%;

          padding: 15px;

          margin-top: 28px;

          border-radius: 16px;

          background: #f4eeff;

          border: 1px solid #e9ddff;

          transition: all 0.3s ease;
        }


        .about-contact-box:hover {
          border-color: #d9c5ff;

          box-shadow:
            0 10px 30px rgba(91, 16, 232, 0.08);
        }


        /* =========================================
           CONTACT ICON
        ========================================= */

        .about-contact-icon {
          width: 48px;
          height: 48px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 12px;

          background: #5b10e8;

          color: #ffffff;

          font-size: 19px;
        }


        /* =========================================
           CONTACT TEXT
        ========================================= */

        .about-contact-text {
          min-width: 0;
        }


        .about-contact-text span {
          display: block;

          margin-bottom: 3px;

          color: #6b7280;

          font-size: 12px;

          line-height: 1.2;
        }


        .about-contact-text strong {
          display: block;

          color: #3f0aa8;

          font-size: 15px;

          font-weight: 700;

          line-height: 1.3;
        }


        /* =========================================
           QUOTE BUTTON
        ========================================= */

        .about-contact-btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          margin-left: auto;

          flex-shrink: 0;

          padding: 12px 20px;

          border-radius: 8px;

          background: #ff9d00;

          color: #ffffff;

          font-size: 13px;

          font-weight: 700;

          text-decoration: none;

          white-space: nowrap;

          transition: all 0.3s ease;
        }


        .about-contact-btn:hover {
          background: #5b10e8;

          color: #ffffff;

          transform: translateY(-2px);
        }


        /* =========================================
           LARGE TABLET
        ========================================= */

        @media (max-width: 1199px) {

          .rajasthan-about-image {
            height: 500px;

            margin-right: 15px;
          }


          .rajasthan-about-content {
            padding-left: 10px;
          }


          .rajasthan-about-content h2 {
            font-size: 40px;
          }


          .rajasthan-about-content p {
            font-size: 15px;
          }

        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 991px) {

          .rajasthan-taxi-about {
            padding: 80px 0;
          }


          .rajasthan-about-image {
            height: 450px;

            margin-right: 0;

            margin-bottom: 45px;
          }


          .rajasthan-about-content {
            padding-left: 0;
          }


          .rajasthan-about-content h2 {
            font-size: 38px;
          }


          .rajasthan-about-content p {
            font-size: 16px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 575px) {

          .rajasthan-taxi-about {
            padding: 65px 0;
          }


          .rajasthan-about-image {
            height: 360px;

            border-radius: 20px;

            margin-bottom: 35px;
          }


          .about-image-badge {
            left: 15px;

            bottom: 15px;

            padding: 10px 14px;
          }


          .badge-icon {
            width: 38px;
            height: 38px;

            font-size: 18px;
          }


          .rajasthan-about-content h2 {
            font-size: 32px;

            margin-top: 15px;
          }


          .rajasthan-about-content p {
            font-size: 15px;

            line-height: 1.7;
          }


          .rajasthan-about-content .about-intro {
            font-size: 16px;
          }


          .about-vehicle-list {
            grid-template-columns: 1fr;

            gap: 12px;

            margin: 25px 0;
          }


          .about-contact-box {
            align-items: center;

            flex-wrap: wrap;

            padding: 14px;
          }


          .about-contact-btn {
            width: 100%;

            margin-left: 0;

            text-align: center;
          }

        }


        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 375px) {

          .rajasthan-about-content h2 {
            font-size: 29px;
          }


          .about-image-badge {
            padding: 9px 12px;
          }


          .about-image-badge strong {
            font-size: 13px;
          }


          .about-contact-text strong {
            font-size: 13px;
          }

        }

      `}</style>
    </>
  );
};

export default RajasthanTaxiAbout;