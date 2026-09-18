import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";

import about_thumb1 from "@/assets/img/tour/udaipur.webp";

const Aboutsec = () => {
  return (
    <section className="tg-about-area">

      {/* ================= TOP HEADING ================= */}
      <div className="container">
        <div className="tg-about-top text-center">
          <span className="tg-about-subtitle">
            ABOUT THE ROYAL CARS
          </span>

          <h2>
            Your Trusted Travel Partner In Rajasthan
          </h2>

          <p>
            From comfortable airport transfers and one-way taxis to
            carefully planned Rajasthan tours, we make every journey
            simple, safe and comfortable.
          </p>
        </div>
      </div>

      {/* ================= MAIN ABOUT SECTION ================= */}
      <div className="container">
        <div className="row align-items-stretch tg-about-row">

          {/* LEFT IMAGE */}
          <div className="col-lg-6">
            <div className="tg-about-image-wrap">

              <Image
                src={about_thumb1}
                alt="The Royal Cars Rajasthan travel service"
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />

              {/* Floating card */}
              <div className="tg-about-image-card">
                <span className="tg-about-image-card-number">
                  10+
                </span>

                <span className="tg-about-image-card-text">
                  Years of Travel Experience
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <div className="tg-about-content">

              <span className="tg-about-content-label">
                TRAVEL WITH CONFIDENCE
              </span>

              <h3>
                More Than Just A Taxi Service
              </h3>

              <p>
                At The Royal Cars, we help travellers explore Rajasthan
                comfortably and without the usual travel hassles. Whether
                you need a quick airport pickup, a one-way taxi between
                cities, or a complete Rajasthan holiday, our team is here
                to make your journey easy.
              </p>

              <p>
                We know the roads, destinations and routes across Rajasthan
                and provide reliable cars with experienced drivers. From
                Jaipur and Udaipur to Jodhpur, Jaisalmer, Ajmer and Pushkar,
                you can travel with a service that understands the region.
              </p>

              {/* FEATURES */}
              <div className="tg-about-features">

                <div className="tg-about-feature">
                  <div className="tg-about-feature-icon">
                    ✓
                  </div>

                  <div>
                    <h4>Experienced Drivers</h4>
                    <p>
                      Professional drivers who know Rajasthan routes.
                    </p>
                  </div>
                </div>

                <div className="tg-about-feature">
                  <div className="tg-about-feature-icon">
                    ✓
                  </div>

                  <div>
                    <h4>Comfortable Cars</h4>
                    <p>
                      Clean and well-maintained vehicles for every journey.
                    </p>
                  </div>
                </div>

                <div className="tg-about-feature">
                  <div className="tg-about-feature-icon">
                    ✓
                  </div>

                  <div>
                    <h4>Taxi & Tour Services</h4>
                    <p>
                      One-way taxis, local rides and complete tour packages.
                    </p>
                  </div>
                </div>

                <div className="tg-about-feature">
                  <div className="tg-about-feature-icon">
                    ✓
                  </div>

                  <div>
                    <h4>Easy Booking</h4>
                    <p>
                      Simple booking with clear communication and support.
                    </p>
                  </div>
                </div>

              </div>

              {/* BUTTON */}
              <div className="tg-about-btn">
                <Link
                  href="/about-us"
                  className="tg-btn tg-btn-switch-animation"
                >
                  <Button text="KNOW MORE ABOUT US" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM STATS ================= */}
      <div className="container">
        <div className="tg-about-stats">

          <div className="tg-about-stat">
            <strong>10+</strong>
            <span>Years Of Experience</span>
          </div>

          <div className="tg-about-stat">
            <strong>40+</strong>
            <span>Cities Covered</span>
          </div>

          <div className="tg-about-stat">
            <strong>12K+</strong>
            <span>Trips Completed</span>
          </div>

          <div className="tg-about-stat">
            <strong>24/7</strong>
            <span>Travel Support</span>
          </div>

        </div>
      </div>

      {/* ================= CSS ================= */}
      <style jsx>{`

        .tg-about-area {
          padding: 0px 0;
          padding-bottom:100px;
          background: #fff;
        }

        /* TOP */

        .tg-about-top {
          max-width: 850px;
          margin: 0 auto 60px;
        }

        .tg-about-subtitle {
          display: inline-block;
          margin-bottom: 14px;
          font-family: "Work Sans", sans-serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #7a1f2b;
        }

        .tg-about-top h2 {
          margin: 0 auto 20px;
          max-width: 750px;
          font-family: "Fraunces", serif;
          font-size: 46px;
          line-height: 1.15;
          font-weight: 600;
          color: #16213b;
        }

        .tg-about-top p {
          max-width: 700px;
          margin: 0 auto;
          font-family: "Work Sans", sans-serif;
          font-size: 17px;
          line-height: 1.7;
          color: #667085;
        }

        /* MAIN ROW */

        .tg-about-row {
          background: #16213b;
          overflow: hidden;
        }

        /* IMAGE */

        .tg-about-image-wrap {
          position: relative;
          min-height: 620px;
          height: 100%;
          overflow: hidden;
        }

        .tg-about-image-card {
          position: absolute;
          left: 30px;
          bottom: 30px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          min-width: 190px;
          padding: 18px 22px;
          background: #fff;
          border-left: 4px solid #c9a227;
        }

        .tg-about-image-card-number {
          font-family: "Fraunces", serif;
          font-size: 34px;
          font-weight: 600;
          line-height: 1;
          color: #7a1f2b;
        }

        .tg-about-image-card-text {
          margin-top: 6px;
          font-family: "Work Sans", sans-serif;
          font-size: 13px;
          color: #667085;
        }

        /* CONTENT */

        .tg-about-content {
          height: 100%;
          padding: 65px 55px;
          color: #fff;
        }

        .tg-about-content-label {
          display: inline-block;
          margin-bottom: 12px;
          font-family: "Work Sans", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #c9a227;
        }

        .tg-about-content h3 {
          margin-bottom: 22px;
          font-family: "Fraunces", serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 600;
          color: #f6f1e4;
        }

        .tg-about-content > p {
          margin-bottom: 18px;
          font-family: "Work Sans", sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: #c7ccda;
        }

        /* FEATURES */

        .tg-about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          margin-top: 30px;
          padding-top: 28px;
          border-top: 1px solid rgba(246, 241, 228, 0.15);
        }

        .tg-about-feature {
          display: flex;
          gap: 12px;
        }

        .tg-about-feature-icon {
          flex: 0 0 28px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #c9a227;
          color: #16213b;
          font-size: 14px;
          font-weight: 700;
        }

        .tg-about-feature h4 {
          margin: 0 0 5px;
          font-family: "Work Sans", sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #f6f1e4;
        }

        .tg-about-feature p {
          margin: 0;
          font-family: "Work Sans", sans-serif;
          font-size: 12px;
          line-height: 1.5;
          color: #aeb5c5;
        }

        /* BUTTON */

        .tg-about-btn {
          margin-top: 35px;
        }

        /* STATS */

        .tg-about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 35px;
          border: 1px solid #e9e5dc;
        }

        .tg-about-stat {
          padding: 28px 20px;
          text-align: center;
          border-right: 1px solid #e9e5dc;
        }

        .tg-about-stat:last-child {
          border-right: 0;
        }

        .tg-about-stat strong {
          display: block;
          margin-bottom: 6px;
          font-family: "Fraunces", serif;
          font-size: 30px;
          font-weight: 600;
          color: #7a1f2b;
        }

        .tg-about-stat span {
          font-family: "Work Sans", sans-serif;
          font-size: 13px;
          color: #667085;
        }

        /* TABLET */

        @media (max-width: 991px) {

          .tg-about-area {
            padding: 70px 0;
          }

          .tg-about-top h2 {
            font-size: 38px;
          }

          .tg-about-image-wrap {
            min-height: 450px;
          }

          .tg-about-content {
            padding: 50px 35px;
          }

          .tg-about-content h3 {
            font-size: 32px;
          }

        }

        /* MOBILE */

        @media (max-width: 767px) {

          .tg-about-area {
            padding: 60px 0;
          }

          .tg-about-top {
            margin-bottom: 40px;
          }

          .tg-about-top h2 {
            font-size: 31px;
          }

          .tg-about-top p {
            font-size: 15px;
          }

          .tg-about-image-wrap {
            min-height: 350px;
          }

          .tg-about-image-card {
            left: 20px;
            bottom: 20px;
          }

          .tg-about-content {
            padding: 40px 25px;
          }

          .tg-about-content h3 {
            font-size: 29px;
          }

          .tg-about-features {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .tg-about-stats {
            grid-template-columns: 1fr 1fr;
          }

          .tg-about-stat {
            border-right: 1px solid #e9e5dc;
            border-bottom: 1px solid #e9e5dc;
          }

          .tg-about-stat:nth-child(2) {
            border-right: 0;
          }

          .tg-about-stat:nth-child(3) {
            border-bottom: 0;
          }

          .tg-about-stat:nth-child(4) {
            border-right: 0;
            border-bottom: 0;
          }

        }

      `}</style>
    </section>
  );
};

export default Aboutsec;