
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import TourTabs from "@/app/taxicompontents/TourTabs";
import { oneWayTours } from "@/app/taxicompontents/OneWayData";
import HeaderThree from "@/layouts/headers/HeaderThree";
import BreadCrumb from "@/components/common/BreadCrumb";
import FooterSix from "@/layouts/footers/FooterSix";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const OneWayDetailsPage = async ({
  params,
}: PageProps) => {

  const { slug } = await params;

  const tour = oneWayTours.find(
    (item) => item.slug === slug
  );

  if (!tour) {
    notFound();
  }

  const otherTours = oneWayTours
    .filter((item) => item.slug !== tour.slug)
    .slice(0, 6);

  return (
<>
     <HeaderThree/>
     <BreadCrumb title="One Way Tour Details" sub_title={tour.title} />
    <main className="one-way-detail-page">

      {/* =====================================================
          HERO
      ====================================================== */}

    


      {/* =====================================================
          MAIN
      ====================================================== */}

      <section className="detail-main">

        <div className="detail-container">

          <div className="detail-layout">


            {/* ================= LEFT ================= */}

            <div className="detail-left">


              {/* TOUR INFORMATION */}

              <div className="tour-info-bar">

                <div className="info-item">

                  <div className="info-icon">
                    📍
                  </div>

                  <div>
                    <span>
                      Pickup
                    </span>

                    <strong>
                      {tour.startCity}
                    </strong>
                  </div>

                </div>


                <div className="info-item">

                  <div className="info-icon">
                    🏁
                  </div>

                  <div>
                    <span>
                      Drop
                    </span>

                    <strong>
                      {tour.destination}
                    </strong>
                  </div>

                </div>


                <div className="info-item">

                  <div className="info-icon">
                    🕒
                  </div>

                  <div>
                    <span>
                      Duration
                    </span>

                    <strong>
                      {tour.duration}
                    </strong>
                  </div>

                </div>


                <div className="info-item">

                  <div className="info-icon">
                    🚕
                  </div>

                  <div>
                    <span>
                      Service
                    </span>

                    <strong>
                      One Way Taxi
                    </strong>
                  </div>

                </div>

              </div>


              {/* ================= TABS ================= */}

              <TourTabs
                overview={tour.overview}
                overviewExtra={tour.overviewExtra}
                itinerary={tour.itinerary}
                inclusions={tour.inclusions}
                exclusions={tour.exclusions}
              />


              {/* ================= ROUTE ================= */}

              <div className="route-box">

                <div>

                  <span>
                    ONE WAY ROUTE
                  </span>

                  <h3>
                    {tour.startCity}
                    <b> → </b>
                    {tour.destination}
                  </h3>

                </div>

                <div className="distance">

                  <small>
                    Distance
                  </small>

                  <strong>
                    {tour.distance}
                  </strong>

                </div>

              </div>

            </div>


            {/* ================= SIDEBAR ================= */}

            <aside className="detail-sidebar">


              {/* ENQUIRY */}

              <div className="enquiry-card">

                <div className="enquiry-header">

                  <span>
                    BOOK YOUR TAXI
                  </span>

                  <h2>
                    Enquire Now
                  </h2>

                  <p>
                    Fill in your details and our travel
                    expert will contact you.
                  </p>

                </div>


                <form className="enquiry-form">

                  <div className="form-group">

                    <label>
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter your phone"
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Pickup Location
                    </label>

                    <input
                      type="text"
                      placeholder="Pickup location"
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Travel Date
                    </label>

                    <input
                      type="date"
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Message
                    </label>

                    <textarea
                      placeholder="Your travel requirement..."
                    />

                  </div>


                  <button type="submit">

                    Send Enquiry

                    <span>
                      →
                    </span>

                  </button>

                </form>

              </div>


              {/* QUICK INFORMATION */}

              <div className="quick-info">

                <h3>
                  Route Information
                </h3>


                <div>
                  <span>
                    Pickup
                  </span>

                  <strong>
                    {tour.startCity}
                  </strong>
                </div>


                <div>
                  <span>
                    Destination
                  </span>

                  <strong>
                    {tour.destination}
                  </strong>
                </div>


                <div>
                  <span>
                    Distance
                  </span>

                  <strong>
                    {tour.distance}
                  </strong>
                </div>


                <div>
                  <span>
                    Duration
                  </span>

                  <strong>
                    {tour.duration}
                  </strong>
                </div>


                <div>
                  <span>
                    Rating
                  </span>

                  <strong className="rating">
                    ★ {tour.rating}
                  </strong>
                </div>


                <div>
                  <span>
                    Fare
                  </span>

                  <strong>
                    {tour.price}
                  </strong>
                </div>

              </div>


              {/* CONTACT */}

              <div className="contact-box">

                <span>
                  NEED A TAXI?
                </span>

                <h3>
                  Talk To Our Travel Expert
                </h3>

                <p>
                  Get a quick quote for your one-way
                  journey.
                </p>

                <a href="tel:+919999999999">
                  Call Now →
                </a>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          OTHER ROUTES
      ====================================================== */}

      <section className="other-routes">

        <div className="detail-container">

          <div className="other-heading">

            <span>
              MORE ROUTES
            </span>

            <h2>
              Other One Way Tours
            </h2>

            <p>
              Explore more one-way taxi routes across Rajasthan.
            </p>

          </div>


          <div className="other-grid">

            {otherTours.map((item) => (

              <Link
                key={item.slug}
                href={`/one-way-tours/${item.slug}`}
                className="other-card"
              >

                <div className="other-image">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                  />

                  <span>
                    ★ {item.rating}
                  </span>

                </div>


                <div className="other-content">

                  <div className="route-small">

                    {item.startCity}
                    {" → "}
                    {item.destination}

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.shortDescription}
                  </p>

                  <div className="other-bottom">

                    <strong>
                      {item.price}
                    </strong>

                    <span>
                      View Details →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CSS
      ====================================================== */}

      <style>{`

        .one-way-detail-page {
          background: #fff;
          color: #111827;
        }

        .detail-container {
          width: min(1200px, calc(100% - 40px));
          margin: auto;
        }


        /* ================= HERO ================= */

        .detail-hero-image {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .detail-hero-image img {
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(35,7,70,.92),
              rgba(35,7,70,.60),
              rgba(35,7,70,.15)
            );
        }

        .hero-inner {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
        }

        .hero-content {
          width: min(1200px, calc(100% - 40px));
          margin: auto;
          color: #fff;
        }

        .hero-tag {
          display: block;
          margin-bottom: 12px;
          color: #FF9D00;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .hero-content h1 {
          max-width: 800px;
          margin: 0 0 18px;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.08;
          font-weight: 800;
        }

        .hero-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .hero-rating span {
          color: #FF9D00;
          font-size: 21px;
        }

        .hero-rating small {
          opacity: .7;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          font-size: 13px;
        }

        .breadcrumb a {
          color: #fff;
          text-decoration: none;
        }

        .breadcrumb strong {
          color: #FF9D00;
        }


        /* ================= MAIN ================= */

        .detail-main {
          padding: 75px 0;
        }

        .detail-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 50px;
          align-items: start;
        }


        /* ================= INFO ================= */

        .tour-info-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          padding: 18px;
          margin-bottom: 35px;
          border-radius: 15px;
          background: #F8F6FB;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .info-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #F4EEFF;
          font-size: 18px;
        }

        .info-item span {
          display: block;
          margin-bottom: 4px;
          color: #777;
          font-size: 11px;
        }

        .info-item strong {
          display: block;
          color: #252331;
          font-size: 13px;
        }


        /* ================= ROUTE ================= */

        .route-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 40px;
          padding: 25px;
          border-radius: 15px;
          background: linear-gradient(
            135deg,
            #5B10E8,
            #3F0AA8
          );
          color: #fff;
        }

        .route-box span {
          display: block;
          margin-bottom: 7px;
          color: #FF9D00;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .route-box h3 {
          margin: 0;
          font-size: 21px;
        }

        .route-box h3 b {
          color: #FF9D00;
        }

        .distance {
          text-align: right;
        }

        .distance small {
          display: block;
          margin-bottom: 5px;
          opacity: .7;
        }

        .distance strong {
          color: #FF9D00;
        }


        /* ================= SIDEBAR ================= */

        .detail-sidebar {
          position: sticky;
          top: 25px;
        }

        .enquiry-card {
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid #eee8f7;
          background: #fff;
          box-shadow:
            0 15px 50px rgba(60,20,100,.12);
        }

        .enquiry-header {
          padding: 27px;
          background: #5B10E8;
          color: #fff;
        }

        .enquiry-header span {
          display: block;
          margin-bottom: 6px;
          color: #FF9D00;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .enquiry-header h2 {
          margin: 0 0 8px;
          font-size: 28px;
        }

        .enquiry-header p {
          margin: 0;
          color: rgba(255,255,255,.8);
          font-size: 13px;
          line-height: 1.6;
        }

        .enquiry-form {
          padding: 25px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          margin-bottom: 7px;
          color: #333;
          font-size: 12px;
          font-weight: 700;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          border: 1px solid #e2dfe7;
          outline: none;
          border-radius: 8px;
          font-family: inherit;
          font-size: 13px;
          box-sizing: border-box;
        }

        .form-group input {
          height: 46px;
          padding: 0 13px;
        }

        .form-group textarea {
          min-height: 85px;
          padding: 12px 13px;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #5B10E8;
        }

        .enquiry-form button {
          width: 100%;
          height: 50px;
          border: none;
          border-radius: 8px;
          background: #FF9D00;
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: .3s;
        }

        .enquiry-form button:hover {
          background: #e98e00;
        }

        .enquiry-form button span {
          margin-left: 10px;
          font-size: 18px;
        }


        /* ================= QUICK INFO ================= */

        .quick-info {
          margin-top: 22px;
          padding: 24px;
          border-radius: 15px;
          background: #F4EEFF;
        }

        .quick-info h3 {
          margin: 0 0 14px;
          color: #3F0AA8;
          font-size: 20px;
        }

        .quick-info div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 12px 0;
          border-bottom: 1px solid #e3daf1;
        }

        .quick-info div:last-child {
          border-bottom: none;
        }

        .quick-info span {
          color: #777;
          font-size: 13px;
        }

        .quick-info strong {
          color: #3F0AA8;
          font-size: 13px;
          text-align: right;
        }

        .quick-info .rating {
          color: #FF9D00;
        }


        /* ================= CONTACT ================= */

        .contact-box {
          margin-top: 22px;
          padding: 25px;
          border-radius: 15px;
          background: #3F0AA8;
          color: #fff;
        }

        .contact-box span {
          color: #FF9D00;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .contact-box h3 {
          margin: 8px 0;
          font-size: 21px;
        }

        .contact-box p {
          margin: 0 0 18px;
          color: rgba(255,255,255,.75);
          font-size: 13px;
          line-height: 1.6;
        }

        .contact-box a {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 7px;
          background: #FF9D00;
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
        }


        /* ================= OTHER ROUTES ================= */

        .other-routes {
          padding: 80px 0;
          background: #F8F6FB;
        }

        .other-heading {
          margin-bottom: 40px;
          text-align: center;
        }

        .other-heading span {
          display: block;
          margin-bottom: 8px;
          color: #FF9D00;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .other-heading h2 {
          margin: 0 0 10px;
          color: #3F0AA8;
          font-size: 40px;
        }

        .other-heading p {
          margin: 0;
          color: #777;
        }

        .other-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .other-card {
          overflow: hidden;
          border-radius: 15px;
          background: #fff;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 8px 30px rgba(40,20,70,.07);
          transition: .3s;
        }

        .other-card:hover {
          transform: translateY(-7px);
        }

        .other-image {
          position: relative;
          height: 210px;
          overflow: hidden;
        }

        .other-image img {
          object-fit: cover;
          transition: .5s;
        }

        .other-card:hover .other-image img {
          transform: scale(1.07);
        }

        .other-image span {
          position: absolute;
          top: 14px;
          right: 14px;
          padding: 7px 11px;
          border-radius: 20px;
          background: #fff;
          color: #3F0AA8;
          font-size: 12px;
          font-weight: 800;
        }

        .other-content {
          padding: 20px;
        }

        .route-small {
          margin-bottom: 7px;
          color: #FF9D00;
          font-size: 12px;
          font-weight: 800;
        }

        .other-content h3 {
          margin: 0 0 9px;
          color: #252331;
          font-size: 19px;
          line-height: 1.35;
        }

        .other-content p {
          min-height: 44px;
          margin: 0 0 18px;
          color: #777;
          font-size: 13px;
          line-height: 1.6;
        }

        .other-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }

        .other-bottom strong {
          color: #5B10E8;
          font-size: 14px;
        }

        .other-bottom span {
          color: #FF9D00;
          font-size: 12px;
          font-weight: 800;
        }


        /* ================= RESPONSIVE ================= */

        @media (max-width: 1100px) {

          .detail-layout {
            grid-template-columns: minmax(0, 1fr) 320px;
            gap: 30px;
          }

          .tour-info-bar {
            grid-template-columns: repeat(2, 1fr);
          }

        }


        @media (max-width: 991px) {

          .detail-layout {
            grid-template-columns: 1fr;
          }

          .detail-sidebar {
            position: static;
          }

          .other-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }


        @media (max-width: 767px) {

          .detail-container {
            width: calc(100% - 25px);
          }

          .detail-hero-image {
            height: 430px;
          }

          .hero-content {
            width: calc(100% - 25px);
          }

          .hero-content h1 {
            font-size: 38px;
          }

          .detail-main {
            padding: 50px 0;
          }

          .tour-info-bar {
            grid-template-columns: 1fr;
          }

          .route-box {
            align-items: flex-start;
            flex-direction: column;
          }

          .distance {
            text-align: left;
          }

          .other-routes {
            padding: 55px 0;
          }

          .other-heading h2 {
            font-size: 31px;
          }

          .other-grid {
            grid-template-columns: 1fr;
          }

        }

      `}</style>

    </main>
      <FooterSix/>
</>
  );
};

export default OneWayDetailsPage;






//   <section className="detail-hero">

//         <div className="detail-hero-image">

//           <Image
//             src={tour.image}
//             alt={tour.title}
//             fill
//             priority
//           />

//           <div className="hero-overlay" />

//           <div className="hero-inner">

//             <div className="hero-content">

//               <span className="hero-tag">
//                 O WAY TAXINE
//               </span>

//               <h1>
//                 {tour.title}
//               </h1>

//               <div className="hero-rating">

//                 <span>
//                   ★
//                 </span>

//                 <strong>
//                   {tour.rating}
//                 </strong>

//                 <small>
//                   Rating
//                 </small>

//               </div>

//               <div className="breadcrumb">

//                 <Link href="/">
//                   Home
//                 </Link>

//                 <span>
//                   /
//                 </span>

//                 <Link href="/one-way-tours">
//                   One Way Tours
//                 </Link>

//                 <span>
//                   /
//                 </span>

//                 <strong>
//                   {tour.title}
//                 </strong>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>