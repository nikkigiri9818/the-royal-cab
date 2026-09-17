"use client";

import Image from "next/image";
import { Carousel } from "react-bootstrap";

const taxiRoutes = [
  {
    id: 1,
    title: "Jaipur to Ajmer One Way Taxi",
    route: "Jaipur → Ajmer",
    image: "/assets/img/taxi/jaipur-ajmer.jpg",
    duration: "Approx. 3 Hours",
    type: "One Way",
    price: "₹ On Request",
    rating: "4.8",
    description:
      "Comfortable one-way taxi from Jaipur to Ajmer with a professional driver.",
    slug: "jaipur-to-ajmer-taxi",
  },

  {
    id: 2,
    title: "Jaipur to Pushkar One Way Taxi",
    route: "Jaipur → Pushkar",
    image: "/assets/img/taxi/jaipur-pushkar.jpg",
    duration: "Approx. 3 Hours",
    type: "One Way",
    price: "₹ On Request",
    rating: "4.8",
    description:
      "Book a comfortable private taxi from Jaipur to Pushkar for a smooth one-way journey.",
    slug: "jaipur-to-pushkar-taxi",
  },

  {
    id: 3,
    title: "Jaipur to Jodhpur One Way Taxi",
    route: "Jaipur → Jodhpur",
    image: "/assets/img/taxi/jaipur-jodhpur.jpg",
    duration: "Approx. 6 Hours",
    type: "One Way",
    price: "₹ On Request",
    rating: "4.8",
    description:
      "Private one-way taxi from Jaipur to Jodhpur with comfortable travel and experienced drivers.",
    slug: "jaipur-to-jodhpur-taxi",
  },


   {
    id: 4,
    title: "Jaipur to Jodhpur One Way Taxi",
    route: "Jaipur → Jodhpur",
    image: "/assets/img/taxi/jaipur-jodhpur.jpg",
    duration: "Approx. 6 Hours",
    type: "One Way",
    price: "₹ On Request",
    rating: "4.8",
    description:
      "Private one-way taxi from Jaipur to Jodhpur with comfortable travel and experienced drivers.",
    slug: "jaipur-to-jodhpur-taxi",
  },


  
  {
    id: 2,
    title: "Jaipur to Pushkar One Way Taxi",
    route: "Jaipur → Pushkar",
    image: "/assets/img/taxi/jaipur-pushkar.jpg",
    duration: "Approx. 3 Hours",
    type: "One Way",
    price: "₹ On Request",
    rating: "4.8",
    description:
      "Book a comfortable private taxi from Jaipur to Pushkar for a smooth one-way journey.",
    slug: "jaipur-to-pushkar-taxi",
  },

  {
    id: 3,
    title: "Jaipur to Jodhpur One Way Taxi",
    route: "Jaipur → Jodhpur",
    image: "/assets/img/taxi/jaipur-jodhpur.jpg",
    duration: "Approx. 6 Hours",
    type: "One Way",
    price: "₹ On Request",
    rating: "4.8",
    description:
      "Private one-way taxi from Jaipur to Jodhpur with comfortable travel and experienced drivers.",
    slug: "jaipur-to-jodhpur-taxi",
  },
];

export default function OneWayTaxiSlider() {
  return (
    <section className="one-way-taxi-section">
      <div className="container">

        {/* HEADER */}
        <div className="one-way-heading">

          <div>
            <span>ONE WAY TAXI SERVICE</span>

            <h2>
              Jaipur One Way Taxi Routes
            </h2>

            <p>
              Book a comfortable private taxi from Jaipur
              to popular destinations across Rajasthan.
            </p>
          </div>

        </div>


        {/* SLIDER */}

       <div className="one-way-slider-wrapper">
  <Carousel
    interval={3500}
    pause="hover"
    indicators={true}
    controls={true}
    fade={false}
  >
    {Array.from(
      { length: Math.ceil(taxiRoutes.length / 3) },
      (_, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <div className="row g-4">
            {taxiRoutes
              .slice(slideIndex * 3, slideIndex * 3 + 3)
              .map((taxi) => (
                <div
                  className="col-lg-4 col-md-6 col-12"
                  key={taxi.id}
                >
                  <article className="route-card">

                    <div className="route-image">
                      <Image
                        src={taxi.image}
                        alt={taxi.title}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                      />

                      <div className="route-rating">
                        ★ {taxi.rating}
                      </div>

                      <div className="route-badge">
                        {taxi.route}
                      </div>
                    </div>

                    <div className="route-content">

                      <div className="route-meta">
                        <span>{taxi.duration}</span>
                        <span>{taxi.type}</span>
                      </div>

                      <h3>{taxi.title}</h3>

                      <p>{taxi.description}</p>

                      <div className="route-bottom">
                        <strong>{taxi.price}</strong>

                        <a href={`/taxi-service/${taxi.slug}`}>
                          View Details →
                        </a>
                      </div>

                    </div>
                  </article>
                </div>
              ))}
          </div>
        </Carousel.Item>
      )
    )}
  </Carousel>
</div>
      </div>


      {/* CSS */}

      <style>{`

        .one-way-taxi-section {
          padding: 70px 0;
          background: #ffffff;
          overflow: hidden;
        }


        /* ================= HEADER ================= */

        .one-way-heading {
          margin-bottom: 35px;
        }

        .one-way-heading span {
          display: inline-block;
          margin-bottom: 8px;
          color: #ff9d00;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .one-way-heading h2 {
          margin: 0 0 8px;
          color: #24152f;
          font-size: 38px;
          font-weight: 900;
        }

        .one-way-heading p {
          max-width: 650px;
          margin: 0;
          color: #77717d;
          font-size: 15px;
          line-height: 1.7;
        }


        /* ================= SLIDER ================= */

        .one-way-slider-wrapper {
          padding: 0 8px 35px;
        }

        .one-way-slider-wrapper .carousel {
          padding-bottom: 28px;
        }


        /* ================= CARD ================= */

        .route-card {
          height: 100%;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e8def5;
          border-radius: 15px;
          box-shadow:
            0 8px 25px rgba(40, 20, 60, 0.06);
          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .route-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 16px 35px rgba(63, 10, 168, 0.12);
        }


        /* ================= IMAGE ================= */

        .route-image {
          position: relative;
          height: 225px;
          overflow: hidden;
          background: #eeeeee;
        }

        .route-image img {
          object-fit: cover;
          transition: transform .5s ease;
        }

        .route-card:hover
        .route-image img {
          transform: scale(1.05);
        }


        /* ================= RATING ================= */

        .route-rating {
          position: absolute;
          top: 25px;
          right: 20px;
          z-index: 2;
          color: #5b10e8;
          font-size: 13px;
          font-weight: 900;
        }


        /* ================= GRADIENT ================= */

        .route-image::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 48%;
          background: linear-gradient(
            to top,
            rgba(50, 38, 67, .75),
            rgba(50, 38, 67, 0)
          );
        }


        /* ================= ROUTE BADGE ================= */

        .route-badge {
          position: absolute;
          left: 14px;
          bottom: 14px;
          z-index: 3;
          padding: 11px 14px;
          border-radius: 7px;
          background: #ff9d00;
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
        }


        /* ================= CONTENT ================= */

        .route-content {
          padding: 22px;
        }


        /* ================= META ================= */

        .route-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 14px;
          color: #ff9d00;
          font-size: 12px;
          font-weight: 800;
        }


        /* ================= TITLE ================= */

        .route-content h3 {
          min-height: 50px;
          margin: 0 0 9px;
          color: #171426;
          font-size: 20px;
          font-weight: 900;
          line-height: 1.35;
        }


        /* ================= DESCRIPTION ================= */

        .route-content p {
          min-height: 50px;
          margin: 0;
          color: #77717d;
          font-size: 14px;
          line-height: 1.65;
        }


        /* ================= BOTTOM ================= */

        .route-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid #eeeeee;
        }

        .route-bottom strong {
          color: #5b10e8;
          font-size: 14px;
          font-weight: 900;
        }

        .route-bottom a {
          color: #ff9d00;
          text-decoration: none;
          font-size: 13px;
          font-weight: 900;
        }

        .route-bottom a:hover {
          color: #5b10e8;
        }


        /* ================= BOOTSTRAP CONTROLS ================= */

        .one-way-slider-wrapper
        .carousel-control-prev,
        .one-way-slider-wrapper
        .carousel-control-next {
          width: 44px;
          height: 44px;
          top: auto;
          bottom: -5px;
          border-radius: 50%;
          background: #5b10e8;
          opacity: 1;
        }

        .one-way-slider-wrapper
        .carousel-control-prev {
          left: calc(50% - 52px);
        }

        .one-way-slider-wrapper
        .carousel-control-next {
          right: calc(50% - 52px);
        }

        .one-way-slider-wrapper
        .carousel-control-prev-icon,
        .one-way-slider-wrapper
        .carousel-control-next-icon {
          width: 18px;
          height: 18px;
        }


        /* ================= INDICATORS ================= */

        .one-way-slider-wrapper
        .carousel-indicators {
          bottom: -18px;
          margin-bottom: 0;
        }

        .one-way-slider-wrapper
        .carousel-indicators button {
          width: 25px;
          height: 4px;
          margin: 0 4px;
          border: 0;
          border-radius: 10px;
          background-color: #d9cfee;
        }

        .one-way-slider-wrapper
        .carousel-indicators button.active {
          background-color: #ff9d00;
        }


        /* ================= TABLET ================= */

        @media (max-width: 991px) {

          .one-way-taxi-section {
            padding: 55px 0;
          }

          .one-way-heading h2 {
            font-size: 32px;
          }

          .route-image {
            height: 220px;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 767px) {

          .one-way-taxi-section {
            padding: 45px 0;
          }

          .one-way-heading h2 {
            font-size: 28px;
          }

          .one-way-heading p {
            font-size: 14px;
          }

          .route-card {
            margin: 0 5px;
          }

          .route-image {
            height: 230px;
          }

          .route-content h3 {
            min-height: auto;
          }

          .route-content p {
            min-height: auto;
          }

          .route-bottom {
            flex-wrap: wrap;
          }

          .one-way-slider-wrapper
          .carousel-control-prev {
            left: 35%;
          }

          .one-way-slider-wrapper
          .carousel-control-next {
            right: 35%;
          }

        }

      `}</style>

    </section>
  );
}