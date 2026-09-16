"use client";

import Image from "next/image";
import Link from "next/link";

import taxi1 from "@/assets/img/taxi/taxi.avif";
import taxi2 from "@/assets/img/taxi/taxi.avif";
import taxi3 from "@/assets/img/taxi/taxi.avif";
import taxi4 from "@/assets/img/taxi/taxi.avif";
import taxi5 from "@/assets/img/taxi/taxi.avif";
import taxi6 from "@/assets/img/taxi/taxi.avif";

const taxiData = [
  {
    id: 1,
    name: "Sedan Car",
    image: taxi1,
    service: "Local Service / Outstation Service",
    price: "11.00",
    capacity: "4 + Driver",
    ac: "Yes",
    speed: "80-100 Kmph",
    night: "300.00",
    toll: "Extra",
    outstation: "300 Km per day",
    local: "80 Km per day",
    garage: "Included",
  },
  {
    id: 2,
    name: "Ertiga Car",
    image: taxi2,
    service: "Local Service / Outstation Service",
    price: "13.00",
    capacity: "6 + Driver",
    ac: "Yes",
    speed: "80-100 Kmph",
    night: "300.00",
    toll: "Extra",
    outstation: "300 Km per day",
    local: "80 Km per day",
    garage: "Included",
  },
  {
    id: 3,
    name: "Toyota Crysta",
    image: taxi3,
    service: "Local Service / Outstation Service",
    price: "18.00",
    capacity: "7 + Driver",
    ac: "Yes",
    speed: "100-150 Kmph",
    night: "300.00",
    toll: "Extra",
    outstation: "300 Km per day",
    local: "80 Km per day",
    garage: "Included",
  },
  {
    id: 4,
    name: "Tempo Traveller",
    image: taxi4,
    service: "Group / Local / Outstation Service",
    price: "25 - 35",
    capacity: "9-25 + Driver",
    ac: "Yes",
    speed: "80-100 Kmph",
    night: "500.00",
    toll: "Extra",
    outstation: "300 Km per day",
    local: "80 Km per day",
    garage: "Included",
  },
  {
    id: 5,
    name: "Force Urbania",
    image: taxi5,
    service: "Premium Group / Outstation Service",
    price: "28 - 35",
    capacity: "9-17 + Driver",
    ac: "Yes",
    speed: "80-100 Kmph",
    night: "500.00",
    toll: "Extra",
    outstation: "300 Km per day",
    local: "80 Km per day",
    garage: "Included",
  },
  {
    id: 6,
    name: "Luxury Bus",
    image: taxi6,
    service: "Group / Tour / Outstation Service",
    price: "35 - 60",
    capacity: "27-49 + Driver",
    ac: "Yes",
    speed: "80-100 Kmph",
    night: "500.00",
    toll: "Extra",
    outstation: "300 Km per day",
    local: "80 Km per day",
    garage: "Included",
  },
];

const RajasthanTaxiGrid = () => {
  return (
    <section className="rajasthan-taxi-grid-section">
      <div className="container">

        {/* =========================
            SECTION HEADING
        ========================= */}
        <div className="taxi-grid-heading text-center">

          <span className="taxi-grid-subtitle">
            OUR TAXI FLEET
          </span>

          <h2>
            Choose Your <span>Perfect Taxi</span>
          </h2>

          <p>
            Comfortable and reliable taxi options for local sightseeing,
            airport transfers and outstation journeys across Rajasthan.
          </p>

        </div>


        {/* =========================
            TAXI GRID
        ========================= */}
        <div className="row">

          {taxiData.map((taxi) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6"
              key={taxi.id}
            >

              <div className="taxi-grid-card">

                {/* =========================
                    IMAGE
                ========================= */}
                <div className="taxi-grid-image">

                  <Image
                    src={taxi.image}
                    alt={taxi.name}
                    width={600}
                    height={400}
                  />

                  <div className="taxi-image-overlay">
                    <span>Rajasthan Taxi</span>
                  </div>

                </div>


                {/* =========================
                    CONTENT
                ========================= */}
                <div className="taxi-grid-content">

                  {/* Taxi Name */}
                  <div className="taxi-name-box">

                    <h3>
                      {taxi.name}
                    </h3>

                    <span>
                      ₹{taxi.price} / Km
                    </span>

                  </div>


                  {/* Service */}
                  <div className="taxi-service">
                    {taxi.service}
                  </div>


                  {/* Details */}
                  <div className="taxi-details">

                    <div className="taxi-detail-row">
                      <span>Per Km</span>
                      <strong>
                        ₹{taxi.price} / Km
                      </strong>
                    </div>

                    <div className="taxi-detail-row">
                      <span>Sitting Capacity</span>
                      <strong>
                        {taxi.capacity}
                      </strong>
                    </div>

                    <div className="taxi-detail-row">
                      <span>Air-conditioning</span>
                      <strong>
                        {taxi.ac}
                      </strong>
                    </div>

                    <div className="taxi-detail-row">
                      <span>Speed Limit</span>
                      <strong>
                        {taxi.speed}
                      </strong>
                    </div>

                    <div className="taxi-detail-row">
                      <span>Night Charge</span>
                      <strong>
                        ₹{taxi.night}
                      </strong>
                    </div>

                    <div className="taxi-detail-row">
                      <span>Toll Tax, Parking</span>
                      <strong>
                        {taxi.toll}
                      </strong>
                    </div>

                    <div className="taxi-detail-row">
                      <span>Outstation</span>
                      <strong>
                        {taxi.outstation}
                      </strong>
                    </div>

                    <div className="taxi-detail-row">
                      <span>Local Run</span>
                      <strong>
                        {taxi.local}
                      </strong>
                    </div>

                    <div className="taxi-detail-row">
                      <span>Price Include</span>
                      <strong>
                        Garage to Garage
                      </strong>
                    </div>

                  </div>


                  {/* =========================
                      BUTTON
                  ========================= */}
                  <div className="taxi-card-bottom">

                    <Link
                      href="tel:+919999999999"
                      className="taxi-call-btn"
                    >
                      <span>☎</span>
                      CALL NOW
                    </Link>

                    <Link
                      href="#booking"
                      className="taxi-book-btn"
                    >
                      Book Taxi
                    </Link>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>


      {/* =====================================================
          CSS
      ===================================================== */}
      <style jsx>{`

        /* =========================================
           SECTION
        ========================================= */

        .rajasthan-taxi-grid-section {
          padding: 100px 0;
          background: #ffffff;
        }


        /* =========================================
           HEADING
        ========================================= */

        .taxi-grid-heading {
          max-width: 750px;
          margin: 0 auto 50px;
        }


        .taxi-grid-subtitle {
          position: relative;

          display: inline-flex;
          align-items: center;
          gap: 10px;

          color: #5b10e8;

          font-size: 13px;
          font-weight: 800;

          letter-spacing: 1.5px;
        }


        .taxi-grid-subtitle::before,
        .taxi-grid-subtitle::after {
          content: "";

          width: 25px;
          height: 3px;

          border-radius: 10px;

          background: #ff9d00;
        }


        .taxi-grid-heading h2 {
          margin: 15px 0;

          color: #17121f;

          font-size: 44px;
          line-height: 1.15;

          font-weight: 700;
        }


        .taxi-grid-heading h2 span {
          color: #5b10e8;
        }


        .taxi-grid-heading p {
          margin: 0;

          color: #6b7280;

          font-size: 16px;
          line-height: 1.7;
        }


        /* =========================================
           CARD
        ========================================= */

        .taxi-grid-card {
          height: 100%;

          margin-bottom: 30px;

          overflow: hidden;

          background: #ffffff;

          border: 1px solid #e5e7eb;

          border-radius: 18px;

          box-shadow:
            0 10px 35px rgba(63, 10, 168, 0.08);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }


        .taxi-grid-card:hover {
          transform: translateY(-6px);

          box-shadow:
            0 20px 45px rgba(63, 10, 168, 0.15);

          border-color: #ded0ff;
        }


        /* =========================================
           IMAGE
        ========================================= */

        .taxi-grid-image {
          position: relative;

          width: 100%;
          height: 265px;

          overflow: hidden;

          background: #f4eeff;
        }


        .taxi-grid-image :global(img) {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform 0.5s ease;
        }


        .taxi-grid-card:hover .taxi-grid-image :global(img) {
          transform: scale(1.05);
        }


        .taxi-image-overlay {
          position: absolute;

          left: 15px;
          top: 15px;

          z-index: 2;
        }


        .taxi-image-overlay span {
          display: inline-block;

          padding: 7px 13px;

          border-radius: 30px;

          background: #5b10e8;

          color: #ffffff;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 0.3px;
        }


        /* =========================================
           CONTENT
        ========================================= */

        .taxi-grid-content {
          padding: 22px;
        }


        /* =========================================
           TAXI NAME
        ========================================= */

        .taxi-name-box {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 15px;

          padding-bottom: 15px;

          border-bottom: 1px solid #e5e7eb;
        }


        .taxi-name-box h3 {
          margin: 0;

          color: #17121f;

          font-size: 21px;

          font-weight: 700;

          line-height: 1.3;
        }


        .taxi-name-box > span {
          flex-shrink: 0;

          padding: 7px 11px;

          border-radius: 7px;

          background: #f4eeff;

          color: #5b10e8;

          font-size: 12px;

          font-weight: 800;
        }


        /* =========================================
           SERVICE
        ========================================= */

        .taxi-service {
          margin: 18px 0;

          color: #ff7800;

          font-size: 12px;

          font-weight: 700;

          line-height: 1.5;
        }


        /* =========================================
           DETAILS
        ========================================= */

        .taxi-details {
          border-top: 1px solid #f0f0f0;
        }


        .taxi-detail-row {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 15px;

          padding: 8px 0;

          border-bottom: 1px dashed #eeeeee;
        }


        .taxi-detail-row:last-child {
          border-bottom: none;
        }


        .taxi-detail-row span {
          color: #6b7280;

          font-size: 12px;

          line-height: 1.4;
        }


        .taxi-detail-row strong {
          color: #25202c;

          font-size: 12px;

          font-weight: 600;

          text-align: right;
        }


        /* =========================================
           BOTTOM BUTTONS
        ========================================= */

        .taxi-card-bottom {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-top: 20px;
        }


        .taxi-call-btn,
        .taxi-book-btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          min-height: 42px;

          border-radius: 8px;

          text-decoration: none;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.4px;

          transition: all 0.3s ease;
        }


        .taxi-call-btn {
          flex: 1;

          background: #5b10e8;

          color: #ffffff;
        }


        .taxi-call-btn span {
          margin-right: 7px;

          font-size: 12px;
        }


        .taxi-call-btn:hover {
          background: #3f0aa8;

          color: #ffffff;
        }


        .taxi-book-btn {
          flex: 1;

          background: #ff9d00;

          color: #ffffff;
        }


        .taxi-book-btn:hover {
          background: #5b10e8;

          color: #ffffff;
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 991px) {

          .rajasthan-taxi-grid-section {
            padding: 80px 0;
          }


          .taxi-grid-heading {
            margin-bottom: 40px;
          }


          .taxi-grid-heading h2 {
            font-size: 38px;
          }


          .taxi-grid-image {
            height: 250px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 575px) {

          .rajasthan-taxi-grid-section {
            padding: 60px 0;
          }


          .taxi-grid-heading {
            margin-bottom: 30px;
          }


          .taxi-grid-heading h2 {
            font-size: 30px;
          }


          .taxi-grid-heading p {
            font-size: 14px;
          }


          .taxi-grid-image {
            height: 235px;
          }


          .taxi-grid-content {
            padding: 18px;
          }


          .taxi-name-box h3 {
            font-size: 19px;
          }


          .taxi-detail-row {
            padding: 7px 0;
          }


          .taxi-detail-row span,
          .taxi-detail-row strong {
            font-size: 11px;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 375px) {

          .taxi-name-box {
            align-items: flex-start;

            flex-direction: column;

            gap: 8px;
          }


          .taxi-name-box > span {
            font-size: 11px;
          }


          .taxi-card-bottom {
            flex-direction: column;
          }


          .taxi-call-btn,
          .taxi-book-btn {
            width: 100%;
          }

        }

      `}</style>
    </section>
  );
};

export default RajasthanTaxiGrid;