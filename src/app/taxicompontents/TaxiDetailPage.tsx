import BreadCrumb from "@/components/common/BreadCrumb";
import FooterSix from "@/layouts/footers/FooterSix";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: any;
};

export default function TaxiDetailPage({ data }: Props) {
  const isRoute = data.type === "route";

  return (
    <>
    <HeaderThree/>
    <BreadCrumb title="Taxi Services Details" sub_title={data.title} />
    <main className="taxi-detail-page">

      {/* ================= HERO ================= */}

      <section className="taxi-detail-hero">
        <div className="taxi-detail-container">

          <div className="hero-content">

            <span className="hero-label">
              {isRoute
                ? "ONE WAY TAXI SERVICE"
                : "CAR RENTAL IN JAIPUR"}
            </span>

            <h1>{data.title}</h1>

            <h2>{data.subtitle}</h2>

            <p>{data.intro}</p>

            <div className="hero-buttons">
              <a href="tel:+919680974825">
                ☎ Call Now
              </a>

              <a
                href="https://wa.me/919680974825"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>

          </div>


          <div className="hero-image">

            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />

          </div>

        </div>
      </section>


      {/* ================= ROUTE INFO ================= */}

      {isRoute && data.routeInfo && (
        <section className="route-info-section">

          <div className="taxi-detail-container">

            <div className="route-info-grid">

              {data.routeInfo.map((item: any) => (
                <div
                  className="route-info-card"
                  key={item.label}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}

            </div>

          </div>

        </section>
      )}


      {/* ================= INTRO ================= */}

      <section className="detail-intro">

        <div className="taxi-detail-container">

          <div className="intro-box">

            <div>
              <span className="section-label">
                {isRoute ? "JAIPUR TO AJMER" : "JAIPUR CAR RENTAL"}
              </span>

              <h2>
                {isRoute
                  ? "Jaipur To Ajmer Taxi Service"
                  : "Complete Car Rental Service In Jaipur"}
              </h2>

              <p>
                {data.intro}
              </p>
            </div>

            <a href="tel:+919680974825">
              Book Your Taxi
            </a>

          </div>

        </div>

      </section>


      {/* ================= ALL SECTIONS ================= */}

      {data.sections.map((section: any, sectionIndex: number) => (

        <section
          className={
            sectionIndex % 2 === 0
              ? "vehicle-section"
              : "vehicle-section section-light"
          }
          key={section.title}
        >

          <div className="taxi-detail-container">

            <div className="section-heading">

              <span className="section-label">
                {isRoute ? "TAXI FARE" : "OUR VEHICLES"}
              </span>

              <h2>{section.title}</h2>

            </div>


            <div
              className={
                section.cards.length === 6
                  ? "vehicle-grid six-grid"
                  : "vehicle-grid"
              }
            >

              {section.cards.map((card: any) => (

                <article
                  className="vehicle-card"
                  key={card.title}
                >

                  {/* IMAGE */}

                  <div className="vehicle-image">

                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />

                  </div>


                  {/* CONTENT */}

                  <div className="vehicle-content">

                    <h3>{card.title}</h3>


                    {card.items && (
                      <ul>
                        {card.items.map((item: string) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}


                    {card.details && (
                      <div className="vehicle-details">

                        {card.details.map((item: string) => (
                          <p key={item}>{item}</p>
                        ))}

                      </div>
                    )}


                    <a href="tel:+919680974825">
                      ☎ &nbsp; BOOK / CALL NOW
                    </a>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

      ))}


      {/* ================= AJMER ROUTE ================= */}

      {isRoute && (
        <>
          <section className="route-section">

            <div className="taxi-detail-container">

              <div className="section-heading">
                <span className="section-label">
                  ROUTE INFORMATION
                </span>

                <h2>
                  Jaipur To Ajmer Taxi Route, Time & Distance
                </h2>
              </div>


              <div className="route-content">

                <div className="route-image">

                  <Image
                    src="/assets/img/taxi/jaipur-ajmer-route.jpg"
                    alt="Jaipur to Ajmer route"
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />

                </div>


                <div className="route-text">

                  <div className="route-point">
                    <span>01</span>

                    <div>
                      <h3>Route</h3>
                      <p>
                        Jaipur → Kishangarh → Ajmer
                      </p>
                    </div>
                  </div>


                  <div className="route-point">
                    <span>02</span>

                    <div>
                      <h3>Distance</h3>
                      <p>
                        Approximately 130–135 Km
                      </p>
                    </div>
                  </div>


                  <div className="route-point">
                    <span>03</span>

                    <div>
                      <h3>Travel Time</h3>
                      <p>
                        Approximately 2.5–3 Hours
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* ================= ATTRACTIONS ================= */}

          <section className="attraction-section">

            <div className="taxi-detail-container">

              <div className="section-heading">

                <span className="section-label">
                  EXPLORE AJMER
                </span>

                <h2>
                  Tourist Attractions In Ajmer
                </h2>

              </div>


              <div className="attraction-grid">

                {data.attractions.map(
                  (item: string, index: number) => (

                    <div
                      className="attraction-card"
                      key={item}
                    >

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{item}</h3>

                    </div>

                  )
                )}

              </div>

            </div>

          </section>
        </>
      )}


      {/* ================= WHY CHOOSE US ================= */}

      <section className="why-section">

        <div className="taxi-detail-container">

          <div className="why-box">

            <div className="why-content">

              <span className="section-label">
                WHY CHOOSE US
              </span>

              <h2>
                Comfortable Travel With Reliable Service
              </h2>

              <p>
                Whether you need a self-drive car, a car with
                driver, one-way taxi or group vehicle, choose
                a vehicle according to your travel requirement.
              </p>

            </div>


            <div className="why-list">

              <div>
                <strong>01</strong>
                <span>Multiple Vehicle Options</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Local & Outstation Travel</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Family & Group Travel</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Easy Booking Support</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="final-cta">

        <div className="taxi-detail-container">

          <div className="cta-content">

            <div>

              <span>
                READY TO TRAVEL?
              </span>

              <h2>
                Book Your {isRoute ? "Ajmer Taxi" : "Car"} Today
              </h2>

              <p>
                Contact our team for vehicle availability,
                fare details and booking assistance.
              </p>

            </div>


            <div className="cta-buttons">

              <a href="tel:+919680974825">
                ☎ Call Now
              </a>

              <a
                href="https://wa.me/919680974825"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CSS ================= */}

      <style>{`

        .taxi-detail-page {
          background: #fff;
          color: #17131d;
        }

        .taxi-detail-container {
          width: min(1240px, calc(100% - 40px));
          margin: auto;
        }


        /* HERO */

        .taxi-detail-hero {
          background:
            linear-gradient(
              120deg,
              #32106f,
              #5b10e8
            );

          padding: 70px 0;
          color: #fff;
        }

        .taxi-detail-hero .taxi-detail-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }

        .hero-label {
          color: #ff9d00;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .hero-content h1 {
          margin: 12px 0 8px;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.05;
          font-weight: 900;
        }

        .hero-content h2 {
          margin: 0 0 20px;
          color: #ffb52e;
          font-size: 21px;
        }

        .hero-content p {
          max-width: 600px;
          color: rgba(255,255,255,.82);
          font-size: 16px;
          line-height: 1.85;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          margin-top: 28px;
        }

        .hero-buttons a {
          padding: 13px 21px;
          border-radius: 7px;
          text-decoration: none;
          background: #ff9d00;
          color: #171717;
          font-weight: 800;
        }

        .hero-buttons a:last-child {
          background: #fff;
        }

        .hero-image {
          position: relative;
          height: 430px;
          overflow: hidden;
          border-radius: 20px;
          border: 5px solid rgba(255,157,0,.9);
        }

        .hero-image img {
          object-fit: cover;
        }


        /* ROUTE INFO */

        .route-info-section {
          padding: 25px 0;
          background: #f4eeff;
        }

        .route-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .route-info-card {
          padding: 22px;
          background: #fff;
          border-left: 5px solid #ff9d00;
          border-radius: 10px;
        }

        .route-info-card span {
          display: block;
          color: #6f6878;
          font-size: 12px;
          margin-bottom: 7px;
        }

        .route-info-card strong {
          color: #3f0aa8;
          font-size: 18px;
        }


        /* INTRO */

        .detail-intro {
          padding: 50px 0 20px;
        }

        .intro-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          padding: 35px;
          background: #f4eeff;
          border-radius: 18px;
          border: 1px solid #e5d8fa;
        }

        .section-label {
          color: #5b10e8;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .intro-box h2 {
          margin: 8px 0 10px;
          font-size: 30px;
          color: #24132f;
        }

        .intro-box p {
          max-width: 850px;
          margin: 0;
          color: #68616e;
          line-height: 1.8;
        }

        .intro-box > a {
          flex-shrink: 0;
          padding: 14px 22px;
          background: #ff9d00;
          color: #171717;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 800;
        }


        /* VEHICLE SECTION */

        .vehicle-section {
          padding: 70px 0;
          background: #fff;
        }

        .section-light {
          background: #faf8fd;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 35px;
        }

        .section-heading h2 {
          margin: 9px 0 0;
          color: #26162f;
          font-size: clamp(28px, 4vw, 40px);
        }


        /* CARDS */

        .vehicle-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .six-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .vehicle-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #fff;
          border: 2px solid #ff9d00;
          border-radius: 4px;
          transition: .3s ease;
        }

        .vehicle-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 35px rgba(63,10,168,.12);
        }

        .vehicle-image {
          position: relative;
          height: 270px;
          overflow: hidden;
          background: #eee;
        }

        .vehicle-image img {
          object-fit: cover;
          transition: transform .5s ease;
        }

        .vehicle-card:hover .vehicle-image img {
          transform: scale(1.04);
        }

        .vehicle-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 20px;
        }

        .vehicle-content h3 {
          margin: 0 0 14px;
          color: #3f0aa8;
          font-size: 19px;
        }

        .vehicle-content ul {
          padding-left: 20px;
          margin: 0 0 20px;
        }

        .vehicle-content li {
          margin-bottom: 9px;
          color: #343036;
          font-size: 13px;
          line-height: 1.5;
        }

        .vehicle-details {
          margin-bottom: 18px;
        }

        .vehicle-details p {
          margin: 0 0 9px;
          color: #37323a;
          font-size: 14px;
        }

        .vehicle-content > a {
          margin-top: auto;
          width: fit-content;
          padding: 11px 17px;
          border-radius: 6px;
          background: #211d24;
          color: #fff;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          transition: .3s ease;
        }

        .vehicle-content > a:hover {
          background: #ff9d00;
          color: #171717;
        }


        /* ROUTE */

        .route-section {
          padding: 75px 0;
          background: #f4eeff;
        }

        .route-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
        }

        .route-image {
          position: relative;
          height: 390px;
          overflow: hidden;
          border-radius: 16px;
        }

        .route-image img {
          object-fit: cover;
        }

        .route-text {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .route-point {
          display: flex;
          gap: 17px;
          align-items: flex-start;
          padding: 20px;
          background: #fff;
          border-radius: 12px;
          border-left: 4px solid #ff9d00;
        }

        .route-point > span {
          color: #5b10e8;
          font-weight: 900;
        }

        .route-point h3 {
          margin: 0 0 5px;
          color: #28152f;
        }

        .route-point p {
          margin: 0;
          color: #706976;
        }


        /* ATTRACTIONS */

        .attraction-section {
          padding: 75px 0;
        }

        .attraction-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .attraction-card {
          padding: 25px;
          border: 1px solid #e6ddf0;
          border-radius: 12px;
          background: #fff;
          transition: .3s ease;
        }

        .attraction-card:hover {
          border-color: #ff9d00;
          transform: translateY(-4px);
        }

        .attraction-card span {
          color: #ff9d00;
          font-size: 13px;
          font-weight: 900;
        }

        .attraction-card h3 {
          margin: 12px 0 0;
          color: #3f0aa8;
          font-size: 16px;
        }


        /* WHY */

        .why-section {
          padding: 75px 0;
          background: #32106f;
        }

        .why-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .why-content h2 {
          margin: 10px 0 15px;
          color: #fff;
          font-size: 38px;
        }

        .why-content p {
          color: rgba(255,255,255,.72);
          line-height: 1.8;
        }

        .why-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .why-list div {
          padding: 22px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 10px;
        }

        .why-list strong {
          display: block;
          color: #ff9d00;
          font-size: 13px;
          margin-bottom: 9px;
        }

        .why-list span {
          color: #fff;
          font-size: 14px;
        }


        /* CTA */

        .final-cta {
          padding: 70px 0;
          background: #ff9d00;
        }

        .cta-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .cta-content > div:first-child > span {
          color: #3f0aa8;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .cta-content h2 {
          margin: 7px 0;
          color: #21152c;
          font-size: 38px;
        }

        .cta-content p {
          margin: 0;
          color: #4f4655;
        }

        .cta-buttons {
          display: flex;
          gap: 10px;
        }

        .cta-buttons a {
          padding: 14px 22px;
          background: #3f0aa8;
          color: #fff;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 800;
        }

        .cta-buttons a:last-child {
          background: #fff;
          color: #3f0aa8;
        }


        /* TABLET */

        @media (max-width: 1000px) {

          .taxi-detail-hero .taxi-detail-container {
            grid-template-columns: 1fr;
          }

          .vehicle-grid,
          .six-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .attraction-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .route-content {
            grid-template-columns: 1fr;
          }

          .why-box {
            grid-template-columns: 1fr;
          }

        }


        /* MOBILE */

        @media (max-width: 700px) {

          .taxi-detail-container {
            width: calc(100% - 28px);
          }

          .taxi-detail-hero {
            padding: 50px 0;
          }

          .hero-content h1 {
            font-size: 40px;
          }

          .hero-image {
            height: 280px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .hero-buttons a {
            text-align: center;
          }

          .route-info-grid {
            grid-template-columns: 1fr;
          }

          .intro-box {
            flex-direction: column;
            align-items: flex-start;
          }

          .vehicle-grid,
          .six-grid,
          .attraction-grid {
            grid-template-columns: 1fr;
          }

          .vehicle-image {
            height: 240px;
          }

          .route-image {
            height: 280px;
          }

          .why-list {
            grid-template-columns: 1fr;
          }

          .cta-content {
            flex-direction: column;
            align-items: flex-start;
          }

          .cta-buttons {
            width: 100%;
            flex-direction: column;
          }

          .cta-buttons a {
            text-align: center;
          }

        }

      `}</style>

    </main>
    <FooterSix/>
    </>
  );
}