"use client";


import Image from "next/image";
import Link from "next/link";

import { luxuryCars } from "@/app/taxicompontents/LuxuryCarsData";

const LuxuryCarsPage = () => {
  return (
    <main className="luxury-cars-page">

      {/* =========================================
          PAGE HERO / HEADING
      ========================================= */}
      <section className="luxury-page-hero">
        <div className="container">

          <div className="luxury-page-heading text-center">

            <span className="page-subtitle">
              PREMIUM TRAVEL EXPERIENCE
            </span>

            <h1>
              Luxury Cars For
              <span> Comfortable Journeys</span>
            </h1>

            <p>
              Travel across Rajasthan in style and comfort with our
              premium luxury cars. Choose from a range of luxury sedans,
              SUVs and premium vehicles for airport transfers,
              sightseeing, business travel and special occasions.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================
          LUXURY CARS GRID
      ========================================= */}
      <section className="luxury-cars-grid-section">

        <div className="container">

          <div className="row">

            {luxuryCars.map((car) => (

              <div
                className="col-xl-4 col-lg-6 col-md-6"
                key={car.id}
              >

                <Link
                  href={`/luxury-cars/${car.slug}`}
                  className="luxury-card-link"
                >

                  <div className="luxury-car-card">

                    {/* IMAGE */}
                    <div className="luxury-car-image">

                      <Image
                        src={car.image}
                        alt={car.name}
                        width={600}
                        height={400}
                      />

                      <span className="luxury-category">
                        {car.category}
                      </span>

                    </div>


                    {/* CONTENT */}
                    <div className="luxury-car-content">

                      <div className="luxury-car-title">

                        <h2>
                          {car.name}
                        </h2>

                        <div className="luxury-price">
                          {car.price}
                          <small>
                            {car.priceUnit}
                          </small>
                        </div>

                      </div>


                      <p>
                        {car.description}
                      </p>


                      {/* SPECS */}
                      <div className="luxury-car-specs">

                        <div>
                          <span>👤</span>
                          <strong>
                            {car.seating}
                          </strong>
                        </div>

                        <div>
                          <span>🧳</span>
                          <strong>
                            {car.luggage}
                          </strong>
                        </div>

                        <div>
                          <span>❄</span>
                          <strong>
                            {car.ac}
                          </strong>
                        </div>

                      </div>


                      {/* VIEW DETAILS */}
                      <div className="luxury-view-details">

                        <span>
                          View Car Details
                        </span>

                        <strong>
                          →
                        </strong>

                      </div>

                    </div>

                  </div>

                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          CSS
      ========================================= */}
      <style jsx>{`

        /* =========================================
           PAGE HERO
        ========================================= */

        .luxury-page-hero {
          padding: 85px 0 70px;

          background: #f4eeff;
        }


        .luxury-page-heading {
          max-width: 820px;

          margin: 0 auto;
        }


        .page-subtitle {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          color: #5b10e8;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }


        .page-subtitle::before,
        .page-subtitle::after {
          content: "";

          width: 28px;
          height: 3px;

          border-radius: 20px;

          background: #ff9d00;
        }


        .luxury-page-heading h1 {
          margin: 16px 0 18px;

          color: #17121f;

          font-size: 48px;

          line-height: 1.15;

          font-weight: 700;
        }


        .luxury-page-heading h1 span {
          color: #5b10e8;
        }


        .luxury-page-heading p {
          max-width: 720px;

          margin: 0 auto;

          color: #6b7280;

          font-size: 16px;

          line-height: 1.8;
        }


        /* =========================================
           GRID SECTION
        ========================================= */

        .luxury-cars-grid-section {
          padding: 80px 0 100px;

          background: #ffffff;
        }


        /* =========================================
           CARD LINK
        ========================================= */

        .luxury-card-link {
          display: block;

          height: 100%;

          margin-bottom: 30px;

          color: inherit;

          text-decoration: none;
        }


        .luxury-card-link:hover {
          color: inherit;
        }


        /* =========================================
           CARD
        ========================================= */

        .luxury-car-card {
          height: 100%;

          overflow: hidden;

          border: 1px solid #e8e2ef;

          border-radius: 20px;

          background: #ffffff;

          box-shadow:
            0 10px 35px rgba(63, 10, 168, 0.07);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }


        .luxury-card-link:hover .luxury-car-card {
          transform: translateY(-7px);

          border-color: #d9c8f5;

          box-shadow:
            0 20px 45px rgba(63, 10, 168, 0.14);
        }


        /* =========================================
           IMAGE
        ========================================= */

        .luxury-car-image {
          position: relative;

          width: 100%;
          height: 270px;

          overflow: hidden;

          background: #f4eeff;
        }


        .luxury-car-image :global(img) {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform 0.5s ease;
        }


        .luxury-card-link:hover
        .luxury-car-image :global(img) {
          transform: scale(1.06);
        }


        /* =========================================
           CATEGORY
        ========================================= */

        .luxury-category {
          position: absolute;

          top: 17px;
          left: 17px;

          padding: 8px 14px;

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

        .luxury-car-content {
          padding: 22px;
        }


        /* =========================================
           TITLE
        ========================================= */

        .luxury-car-title {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 15px;

          margin-bottom: 13px;
        }


        .luxury-car-title h2 {
          margin: 0;

          color: #17121f;

          font-size: 21px;

          line-height: 1.3;

          font-weight: 700;
        }


        /* =========================================
           PRICE
        ========================================= */

        .luxury-price {
          flex-shrink: 0;

          padding: 7px 10px;

          border-radius: 7px;

          background: #f4eeff;

          color: #5b10e8;

          font-size: 15px;

          font-weight: 800;
        }


        .luxury-price small {
          margin-left: 3px;

          color: #6b7280;

          font-size: 9px;

          font-weight: 600;
        }


        /* =========================================
           DESCRIPTION
        ========================================= */

        .luxury-car-content > p {
          display: -webkit-box;

          overflow: hidden;

          margin: 0 0 20px;

          color: #6b7280;

          font-size: 13px;

          line-height: 1.7;

          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }


        /* =========================================
           SPECS
        ========================================= */

        .luxury-car-specs {
          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 8px;

          padding: 15px 0;

          border-top: 1px solid #eeeeee;

          border-bottom: 1px solid #eeeeee;
        }


        .luxury-car-specs > div {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 6px;

          color: #6b7280;

          font-size: 10px;
        }


        .luxury-car-specs span {
          font-size: 14px;
        }


        .luxury-car-specs strong {
          color: #30283a;

          font-size: 10px;

          font-weight: 600;
        }


        /* =========================================
           VIEW DETAILS
        ========================================= */

        .luxury-view-details {
          display: flex;

          align-items: center;

          justify-content: space-between;

          padding-top: 17px;

          color: #5b10e8;

          font-size: 13px;

          font-weight: 700;
        }


        .luxury-view-details strong {
          display: flex;

          align-items: center;
          justify-content: center;

          width: 30px;
          height: 30px;

          border-radius: 50%;

          background: #f4eeff;

          font-size: 16px;

          transition: all 0.3s ease;
        }


        .luxury-card-link:hover
        .luxury-view-details strong {
          background: #ff9d00;

          color: #ffffff;

          transform: translateX(4px);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 991px) {

          .luxury-page-hero {
            padding: 70px 0 55px;
          }


          .luxury-page-heading h1 {
            font-size: 40px;
          }


          .luxury-cars-grid-section {
            padding: 65px 0 80px;
          }


          .luxury-car-image {
            height: 250px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 575px) {

          .luxury-page-hero {
            padding: 55px 0 45px;
          }


          .luxury-page-heading h1 {
            font-size: 31px;
          }


          .luxury-page-heading p {
            font-size: 14px;

            line-height: 1.7;
          }


          .luxury-cars-grid-section {
            padding: 50px 0 65px;
          }


          .luxury-car-image {
            height: 230px;
          }


          .luxury-car-content {
            padding: 18px;
          }


          .luxury-car-title h2 {
            font-size: 19px;
          }


          .luxury-price {
            font-size: 13px;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 375px) {

          .luxury-car-title {
            align-items: flex-start;

            flex-direction: column;

            gap: 8px;
          }


          .luxury-price {
            font-size: 12px;
          }

        }

      `}</style>

    </main>
  );
};

export default LuxuryCarsPage;