
'use client'
import Image from "next/image";
import Link from "next/link";

import { luxuryCars } from "@/app/taxicompontents/LuxuryCarsData";
import BreadCrumb from "@/components/common/BreadCrumb";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LuxuryCarDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const car = luxuryCars.find(
    (item) => item.slug === slug
  );

  if (!car) {
    return (
      <main className="luxury-not-found">
        <div className="container">
          <h1>Luxury Car Not Found</h1>

          <p>
            The luxury car you are looking for does not exist.
          </p>

          <Link href="/luxury-cars">
            Back To Luxury Cars
          </Link>
        </div>

        <style jsx>{`

          .luxury-not-found {
            padding: 120px 0;
            text-align: center;
          }

          .luxury-not-found h1 {
            color: #17121f;
            margin-bottom: 15px;
          }

          .luxury-not-found p {
            color: #6b7280;
            margin-bottom: 25px;
          }

          .luxury-not-found a {
            display: inline-block;
            padding: 13px 22px;
            border-radius: 8px;
            background: #5b10e8;
            color: #ffffff;
            text-decoration: none;
            font-weight: 700;
          }

        `}</style>
      </main>
    );
  }

  return (
    <>
     <BreadCrumb title="Luxury Car Details" sub_title={car.name} />
    <main className="luxury-details-page">

      {/* =================================
          HERO
      ================================= */}

     

      {/* =================================
          DETAILS
      ================================= */}

      <section className="luxury-details-section">

        <div className="container">

          <div className="row align-items-center">

            {/* IMAGE */}

            <div className="col-lg-7">

              <div className="luxury-main-image">

                <Image
                  src={car.image}
                  alt={car.name}
                  width={900}
                  height={600}
                  priority
                />

                <div className="luxury-image-badge">
                  {car.category}
                </div>

              </div>

            </div>


            {/* CONTENT */}

            <div className="col-lg-5">

              <div className="luxury-details-content">

                <span className="luxury-details-subtitle">
                  PREMIUM TRAVEL
                </span>

                <h1>
                  {car.name}
                </h1>

                <p className="luxury-description">
                  {car.description}
                </p>


                {/* PRICE */}

                <div className="luxury-price-box">

                  <span>
                    Starting From
                  </span>

                  <strong>
                    {car.price}
                    <small>
                      {car.priceUnit}
                    </small>
                  </strong>

                </div>


                {/* SPECS */}

                <div className="luxury-specs">

                  <div className="luxury-spec">

                    <span>
                      👤
                    </span>

                    <div>
                      <small>
                        Seating
                      </small>

                      <strong>
                        {car.seating}
                      </strong>
                    </div>

                  </div>


                  <div className="luxury-spec">

                    <span>
                      🧳
                    </span>

                    <div>
                      <small>
                        Luggage
                      </small>

                      <strong>
                        {car.luggage}
                      </strong>
                    </div>

                  </div>


                  <div className="luxury-spec">

                    <span>
                      ❄
                    </span>

                    <div>
                      <small>
                        Air Conditioning
                      </small>

                      <strong>
                        {car.ac}
                      </strong>
                    </div>

                  </div>

                </div>


                {/* BUTTONS */}

                <div className="luxury-action-buttons">

                  <Link
                    href="#booking"
                    className="luxury-book-btn"
                  >
                    Book This Car
                    <span>→</span>
                  </Link>

                  <Link
                    href="tel:+919999999999"
                    className="luxury-call-btn"
                  >
                    ☎ Call Now
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          FEATURES + DESCRIPTION
      ================================= */}

      <section className="luxury-features-section">

        <div className="container">

          <div className="row">

            {/* FEATURES */}

            <div className="col-lg-7">

              <div className="luxury-feature-box">

                <span className="feature-subtitle">
                  CAR FEATURES
                </span>

                <h2>
                  Everything You Need
                  <span> For A Comfortable Journey</span>
                </h2>

                <div className="feature-grid">

                  {car.features.map((feature, index) => (
                    <div
                      className="feature-item"
                      key={index}
                    >

                      <span>
                        ✓
                      </span>

                      <strong>
                        {feature}
                      </strong>

                    </div>
                  ))}

                </div>

              </div>

            </div>


            {/* BOOKING CTA */}

            <div className="col-lg-5">

              <div className="luxury-booking-card">

                <span>
                  READY TO TRAVEL?
                </span>

                <h3>
                  Book {car.name}
                </h3>

                <p>
                  Contact our travel team and get
                  a quote for your luxury journey.
                </p>

                <Link
                  href="#booking"
                  className="luxury-booking-btn"
                >
                  Get A Quote
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          CSS
      ================================= */}

      <style jsx>{`

        /* =================================
           HERO
        ================================= */

        .luxury-details-hero {
          padding: 30px 0;

          background: #f4eeff;

          border-bottom: 1px solid #e8ddf8;
        }


        .luxury-breadcrumb {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 10px;

          color: #777080;

          font-size: 13px;
        }


        .luxury-breadcrumb a {
          color: #5b10e8;

          text-decoration: none;

          font-weight: 600;
        }


        .luxury-breadcrumb strong {
          color: #30283a;

          font-weight: 600;
        }


        /* =================================
           DETAILS SECTION
        ================================= */

        .luxury-details-section {
          padding: 90px 0;

          background: #ffffff;
        }


        /* =================================
           MAIN IMAGE
        ================================= */

        .luxury-main-image {
          position: relative;

          height: 560px;

          overflow: hidden;

          border-radius: 25px;

          background: #f4eeff;

          box-shadow:
            0 20px 50px rgba(63, 10, 168, 0.12);
        }


        .luxury-main-image :global(img) {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;
        }


        .luxury-image-badge {
          position: absolute;

          left: 20px;
          top: 20px;

          padding: 9px 16px;

          border-radius: 30px;

          background: #5b10e8;

          color: #ffffff;

          font-size: 12px;

          font-weight: 700;
        }


        /* =================================
           CONTENT
        ================================= */

        .luxury-details-content {
          padding-left: 45px;
        }


        .luxury-details-subtitle {
          display: inline-block;

          margin-bottom: 12px;

          color: #ff9d00;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }


        .luxury-details-content h1 {
          margin: 0 0 20px;

          color: #17121f;

          font-size: 46px;

          line-height: 1.15;

          font-weight: 700;
        }


        .luxury-description {
          margin: 0 0 25px;

          color: #6b7280;

          font-size: 16px;

          line-height: 1.8;
        }


        /* =================================
           PRICE
        ================================= */

        .luxury-price-box {
          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 18px 20px;

          margin-bottom: 22px;

          border-radius: 14px;

          background: #f4eeff;

          border: 1px solid #e5d9f8;
        }


        .luxury-price-box span {
          color: #6b7280;

          font-size: 13px;
        }


        .luxury-price-box strong {
          color: #5b10e8;

          font-size: 26px;

          font-weight: 800;
        }


        .luxury-price-box small {
          margin-left: 4px;

          font-size: 12px;

          font-weight: 600;
        }


        /* =================================
           SPECS
        ================================= */

        .luxury-specs {
          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 10px;

          margin-bottom: 25px;
        }


        .luxury-spec {
          padding: 14px 10px;

          text-align: center;

          border: 1px solid #ece8f0;

          border-radius: 12px;

          background: #ffffff;
        }


        .luxury-spec > span {
          display: block;

          margin-bottom: 7px;

          font-size: 18px;
        }


        .luxury-spec small {
          display: block;

          margin-bottom: 3px;

          color: #8a8392;

          font-size: 10px;
        }


        .luxury-spec strong {
          display: block;

          color: #30283a;

          font-size: 11px;
        }


        /* =================================
           ACTION BUTTONS
        ================================= */

        .luxury-action-buttons {
          display: flex;

          gap: 12px;
        }


        .luxury-book-btn,
        .luxury-call-btn {
          min-height: 50px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          padding: 0 22px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 13px;

          font-weight: 700;

          transition: all 0.3s ease;
        }


        .luxury-book-btn {
          flex: 1;

          background: #5b10e8;

          color: #ffffff;
        }


        .luxury-book-btn:hover {
          background: #3f0aa8;

          color: #ffffff;
        }


        .luxury-call-btn {
          flex: 1;

          background: #ff9d00;

          color: #ffffff;
        }


        .luxury-call-btn:hover {
          background: #5b10e8;

          color: #ffffff;
        }


        /* =================================
           FEATURES SECTION
        ================================= */

        .luxury-features-section {
          padding: 80px 0;

          background: #f4eeff;
        }


        .luxury-feature-box {
          padding-right: 40px;
        }


        .feature-subtitle {
          color: #ff9d00;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 1.4px;
        }


        .luxury-feature-box h2 {
          margin: 12px 0 30px;

          color: #17121f;

          font-size: 34px;

          line-height: 1.25;

          font-weight: 700;
        }


        .luxury-feature-box h2 span {
          color: #5b10e8;
        }


        .feature-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 13px;
        }


        .feature-item {
          display: flex;

          align-items: center;

          gap: 10px;

          padding: 14px;

          border-radius: 10px;

          background: #ffffff;

          border: 1px solid #e9e0f5;
        }


        .feature-item span {
          width: 27px;
          height: 27px;

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


        .feature-item strong {
          color: #30283a;

          font-size: 12px;
        }


        /* =================================
           BOOKING CARD
        ================================= */

        .luxury-booking-card {
          padding: 35px;

          border-radius: 20px;

          background: #5b10e8;

          box-shadow:
            0 20px 40px rgba(63, 10, 168, 0.20);
        }


        .luxury-booking-card > span {
          color: #ffb52e;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 1.3px;
        }


        .luxury-booking-card h3 {
          margin: 12px 0;

          color: #ffffff;

          font-size: 28px;

          line-height: 1.25;
        }


        .luxury-booking-card p {
          margin: 0 0 25px;

          color: rgba(255, 255, 255, 0.78);

          font-size: 14px;

          line-height: 1.7;
        }


        .luxury-booking-btn {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          width: 100%;

          min-height: 48px;

          border-radius: 8px;

          background: #ff9d00;

          color: #ffffff;

          text-decoration: none;

          font-size: 13px;

          font-weight: 700;

          transition: all 0.3s ease;
        }


        .luxury-booking-btn:hover {
          background: #ffffff;

          color: #5b10e8;
        }


        /* =================================
           TABLET
        ================================= */

        @media (max-width: 991px) {

          .luxury-details-section {
            padding: 70px 0;
          }


          .luxury-main-image {
            height: 450px;

            margin-bottom: 40px;
          }


          .luxury-details-content {
            padding-left: 0;
          }


          .luxury-details-content h1 {
            font-size: 40px;
          }


          .luxury-feature-box {
            padding-right: 0;

            margin-bottom: 35px;
          }

        }


        /* =================================
           MOBILE
        ================================= */

        @media (max-width: 575px) {

          .luxury-details-section {
            padding: 55px 0;
          }


          .luxury-main-image {
            height: 320px;

            border-radius: 18px;
          }


          .luxury-details-content h1 {
            font-size: 32px;
          }


          .luxury-description {
            font-size: 14px;
          }


          .luxury-specs {
            grid-template-columns: 1fr;
          }


          .luxury-action-buttons {
            flex-direction: column;
          }


          .luxury-features-section {
            padding: 60px 0;
          }


          .luxury-feature-box h2 {
            font-size: 28px;
          }


          .feature-grid {
            grid-template-columns: 1fr;
          }


          .luxury-booking-card {
            padding: 25px;
          }

        }

      `}</style>

    </main>
    </>
  );
}