import Image from "next/image";
import Link from "next/link";
import { taxiServices } from "@/app/taxicompontents/TaxiServiceData";

export default function TaxiServicesSection() {
  return (
    <section className="taxi-services-section">
      <div className="taxi-services-container">

        {/* SECTION HEADING */}
        <div className="taxi-services-heading">
          <span>OUR SERVICES</span>

          <h2>Best Taxi Service In Jaipur</h2>

          <p>
            Comfortable and reliable taxi services in Jaipur for
            sightseeing, airport transfers, family trips, weddings
            and Rajasthan travel.
          </p>
        </div>


        {/* SERVICE CARDS */}
        <div className="taxi-services-grid">

          {taxiServices.map((service) => (
            <Link
              href={`/taxi-services/${service.slug}`}
              className="taxi-service-card"
              key={service.id}
            >

              {/* IMAGE */}
              <div className="taxi-service-image">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw"
                />

              </div>


              {/* CONTENT */}
              <div className="taxi-service-content">

                <h3>{service.title}</h3>

                <p>
                  {service.description}
                </p>

                <div className="taxi-service-button">
                  <span>→</span>
                  VIEW DETAILS
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>


      <style>{`
        .taxi-services-section {
          width: 100%;
          padding: 75px 0;
           background: #26080b;
          position: relative;
          overflow: hidden;
        }

        .taxi-services-container {
          width: min(1400px, calc(100% - 40px));
          margin: 0 auto;
        }


        /* =========================
           HEADING
        ========================= */

        .taxi-services-heading {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 45px;
        }

        .taxi-services-heading span {
          display: inline-block;
          color: #ff9d00;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .taxi-services-heading h2 {
          margin: 0 0 12px;
          color: #fff;
          font-size: clamp(32px, 4vw, 50px);
          line-height: 1.15;
          font-weight: 800;
        }

        .taxi-services-heading p {
          margin: 0;
          color: rgba(255,255,255,.72);
          font-size: 15px;
          line-height: 1.8;
        }


        /* =========================
           GRID
        ========================= */

        .taxi-services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 6px solid #ff9d00;
          background: #ff9d00;
          gap: 5px;
        }


        /* =========================
           CARD
        ========================= */

        .taxi-service-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          background: #fff;
          color: #19151d;
          text-decoration: none;
          overflow: hidden;
          transition: .35s ease;
        }

        .taxi-service-card:hover {
          transform: translateY(-5px);
        }


        /* =========================
           IMAGE
        ========================= */

        .taxi-service-image {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: #eee;
        }

        .taxi-service-image img {
          object-fit: cover;
          transition: transform .5s ease;
        }

        .taxi-service-card:hover .taxi-service-image img {
          transform: scale(1.06);
        }


        /* =========================
           CONTENT
        ========================= */

        .taxi-service-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 18px 14px 15px;
        }

        .taxi-service-content h3 {
          margin: 0 0 12px;
          color: #5148a4;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 800;
        }

        .taxi-service-content p {
          margin: 0;
          color: #333;
          font-size: 11px;
          line-height: 1.8;
          min-height: 72px;
        }


        /* =========================
           BUTTON
        ========================= */

        .taxi-service-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          width: fit-content;
          min-width: 108px;

          margin-top: auto;
          padding: 10px 15px;

          background: #050505;
          color: #fff;

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;

          border-radius: 4px;

          transition: .3s ease;
        }

        .taxi-service-button span {
          font-size: 13px;
          line-height: 1;
          color: #fff;
        }

        .taxi-service-card:hover .taxi-service-button {
          background: #ff9d00;
          color: #111;
        }

        .taxi-service-card:hover .taxi-service-button span {
          color: #111;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1100px) {

          .taxi-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .taxi-service-image {
            height: 280px;
          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 767px) {

          .taxi-services-section {
            padding: 55px 0;
          }

          .taxi-services-container {
            width: calc(100% - 24px);
          }

          .taxi-services-heading {
            margin-bottom: 30px;
          }

          .taxi-services-heading h2 {
            font-size: 31px;
          }

          .taxi-services-heading p {
            font-size: 14px;
          }

          .taxi-services-grid {
            grid-template-columns: 1fr;
            border-width: 4px;
          }

          .taxi-service-image {
            height: 250px;
          }

          .taxi-service-content {
            padding: 20px;
          }

          .taxi-service-content h3 {
            font-size: 19px;
          }

          .taxi-service-content p {
            font-size: 13px;
            min-height: auto;
            margin-bottom: 20px;
          }

        }
      `}</style>
    </section>
  );
}