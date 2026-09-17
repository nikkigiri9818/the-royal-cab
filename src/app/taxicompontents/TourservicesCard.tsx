import Image from "next/image";
import Link from "next/link";

import { tourData } from "@/app/taxicompontents/TourData";

const TourListPage = () => {
  return (
    <main>

      {/* =========================================
          HERO / HEADING
      ========================================= */}
      <section className="tour-page-hero">
        <div className="container">

          <div className="tour-page-heading text-center">

            <span className="tour-subtitle">
              EXPLORE INDIA
            </span>

            <h1>
              Discover Our
              <span> Popular Tour Packages</span>
            </h1>

            <p>
              Explore unforgettable journeys across India with
              carefully planned itineraries, comfortable travel,
              heritage experiences and local discoveries.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================
          TOUR GRID
      ========================================= */}
      <section className="tour-grid-section">
        <div className="container">

          <div className="row">

            {tourData.map((tour) => (

              <div
                className="col-xl-4 col-lg-6 col-md-6"
                key={tour.id}
              >

                <Link
                  href={`/tour-services/${tour.slug}`}
                  className="tour-card-link"
                >

                  <article className="tour-card">

                    {/* IMAGE */}
                    <div className="tour-card-image">

                      <Image
                        src={tour.image}
                        alt={tour.title}
                        width={600}
                        height={400}
                      />

                      <span className="tour-duration">
                        {tour.duration}
                      </span>

                    </div>


                    {/* CONTENT */}
                    <div className="tour-card-content">

                      <div className="tour-card-meta">

                        <span>
                          ★ {tour.rating}
                        </span>

                        <span>
                          {tour.tripType}
                        </span>

                      </div>


                      <h2>
                        {tour.title}
                      </h2>


                      <p>
                        {tour.description}
                      </p>


                      <div className="tour-card-info">

                        <div>
                          <small>
                            Starting From
                          </small>

                          <strong>
                            {tour.price}
                          </strong>
                        </div>

                        <div>
                          <small>
                            Starting City
                          </small>

                          <strong>
                            {tour.startCity}
                          </strong>
                        </div>

                      </div>


                      <div className="tour-card-bottom">

                        <span>
                          View Tour Details
                        </span>

                        <strong>
                          →
                        </strong>

                      </div>

                    </div>

                  </article>

                </Link>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================
          CSS
      ========================================= */}
      <style>{`

        .tour-page-hero {
          padding: 90px 0 75px;
          background: #f4eeff;
        }

        .tour-page-heading {
          max-width: 820px;
          margin: 0 auto;
        }

        .tour-subtitle {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          color: #5b10e8;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .tour-subtitle::before,
        .tour-subtitle::after {
          content: "";
          width: 28px;
          height: 3px;
          border-radius: 20px;
          background: #ff9d00;
        }

        .tour-page-heading h1 {
          margin: 17px 0;

          color: #17121f;
          font-size: 48px;
          line-height: 1.15;
          font-weight: 700;
        }

        .tour-page-heading h1 span {
          color: #5b10e8;
        }

        .tour-page-heading p {
          max-width: 700px;
          margin: 0 auto;

          color: #6b7280;
          font-size: 16px;
          line-height: 1.8;
        }


        /* GRID */

        .tour-grid-section {
          padding: 80px 0 100px;
          background: #ffffff;
        }


        /* CARD */

        .tour-card-link {
          display: block;
          height: 100%;
          margin-bottom: 30px;

          color: inherit;
          text-decoration: none;
        }

        .tour-card-link:hover {
          color: inherit;
        }

        .tour-card {
          height: 100%;
          overflow: hidden;

          border: 1px solid #e8e2ef;
          border-radius: 20px;

          background: #ffffff;

          box-shadow:
            0 10px 35px rgba(63, 10, 168, 0.07);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .tour-card-link:hover .tour-card {
          transform: translateY(-7px);

          border-color: #d9c8f5;

          box-shadow:
            0 20px 45px rgba(63, 10, 168, 0.14);
        }


        /* IMAGE */

        .tour-card-image {
          position: relative;

          width: 100%;
          height: 250px;

          overflow: hidden;

          background: #f4eeff;
        }

        .tour-card-image :global(img) {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform 0.5s ease;
        }

        .tour-card-link:hover
        .tour-card-image :global(img) {
          transform: scale(1.06);
        }

        .tour-duration {
          position: absolute;

          left: 15px;
          bottom: 15px;

          padding: 8px 13px;

          border-radius: 30px;

          background: #5b10e8;
          color: #ffffff;

          font-size: 11px;
          font-weight: 700;
        }


        /* CONTENT */

        .tour-card-content {
          padding: 22px;
        }


        .tour-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          margin-bottom: 12px;
        }

        .tour-card-meta span:first-child {
          color: #ff9d00;
          font-size: 12px;
          font-weight: 800;
        }

        .tour-card-meta span:last-child {
          padding: 6px 9px;

          border-radius: 6px;

          background: #f4eeff;
          color: #5b10e8;

          font-size: 10px;
          font-weight: 700;
        }


        .tour-card-content h2 {
          margin: 0 0 12px;

          color: #17121f;

          font-size: 21px;
          line-height: 1.3;
          font-weight: 700;
        }


        .tour-card-content > p {
          display: -webkit-box;

          overflow: hidden;

          min-height: 68px;

          margin: 0 0 20px;

          color: #6b7280;

          font-size: 13px;
          line-height: 1.7;

          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }


        /* INFO */

        .tour-card-info {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 10px;

          padding: 15px 0;

          border-top: 1px solid #eeeeee;
          border-bottom: 1px solid #eeeeee;
        }

        .tour-card-info div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .tour-card-info small {
          color: #8a8392;
          font-size: 10px;
        }

        .tour-card-info strong {
          color: #30283a;
          font-size: 12px;
        }


        /* DETAILS */

        .tour-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-top: 16px;

          color: #5b10e8;

          font-size: 13px;
          font-weight: 700;
        }

        .tour-card-bottom strong {
          width: 31px;
          height: 31px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #f4eeff;

          font-size: 17px;

          transition: all 0.3s ease;
        }

        .tour-card-link:hover
        .tour-card-bottom strong {
          background: #ff9d00;
          color: #ffffff;
          transform: translateX(4px);
        }


        /* TABLET */

        @media (max-width: 991px) {

          .tour-page-hero {
            padding: 70px 0 55px;
          }

          .tour-page-heading h1 {
            font-size: 40px;
          }

          .tour-grid-section {
            padding: 65px 0 80px;
          }

        }


        /* MOBILE */

        @media (max-width: 575px) {

          .tour-page-hero {
            padding: 55px 0 45px;
          }

          .tour-page-heading h1 {
            font-size: 31px;
          }

          .tour-page-heading p {
            font-size: 14px;
          }

          .tour-grid-section {
            padding: 50px 0 65px;
          }

          .tour-card-image {
            height: 230px;
          }

          .tour-card-content {
            padding: 18px;
          }

          .tour-card-content h2 {
            font-size: 19px;
          }

        }

      `}</style>

    </main>
  );
};

export default TourListPage;