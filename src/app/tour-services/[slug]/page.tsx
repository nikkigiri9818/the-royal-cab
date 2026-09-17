


import BreadCrumb from "@/components/common/BreadCrumb"
import FooterSix from "@/layouts/footers/FooterSix"
import HeaderThree from "@/layouts/headers/HeaderThree"

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import TourTabs from "@/app/taxicompontents/TourTabs";
import { tourData } from "@/app/taxicompontents/TourData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const TourDetailsPage = async ({ params }: PageProps) => {

  const { slug } = await params;

  const tour = tourData.find(
    (item) => item.slug === slug
  );

  if (!tour) {
    notFound();
  }

  const otherTours = tourData
    .filter((item) => item.slug !== tour.slug)
    .slice(0, 6);

  return (
    <>
        <HeaderThree />
    <BreadCrumb title="Tour Services Details" sub_title={tour.title} image={tour.image}/>

    <main className="tour-detail-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      {/* <section className="tour-hero">

        <div className="tour-hero-image">

          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            className="hero-img"
          />

          <div className="hero-overlay" />

          <div className="hero-inner">

            <div className="hero-content">

              <span className="hero-tag">
                EXPLORE INDIA
              </span>

              <h1>
                {tour.title}
              </h1>

              <div className="hero-rating">

                <span className="stars">
                  ★
                </span>

                <strong>
                  {tour.rating}
                </strong>

                <span>
                  Rating
                </span>

              </div>

              <div className="breadcrumb">

                <Link href="/">
                  Home
                </Link>

                <span>/</span>

                <Link href="/tour-list">
                  Tour Packages
                </Link>

                <span>/</span>

                <strong>
                  {tour.title}
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section> */}


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="tour-main">

        <div className="tour-container">

          <div className="tour-layout">


            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="tour-left">


              {/* TOP TOUR INFORMATION */}

              <div className="tour-info-bar">

                <div className="tour-info-item">

                  <div className="info-icon">
                    🗓
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


                <div className="tour-info-item">

                  <div className="info-icon">
                    📍
                  </div>

                  <div>
                    <span>
                      Starting From
                    </span>

                    <strong>
                      {tour.startCity}
                    </strong>
                  </div>

                </div>


                <div className="tour-info-item">

                  <div className="info-icon">
                    🧳
                  </div>

                  <div>
                    <span>
                      Tour Type
                    </span>

                    <strong>
                      {tour.type}
                    </strong>
                  </div>

                </div>


                <div className="tour-info-item">

                  <div className="info-icon">
                    ₹
                  </div>

                  <div>
                    <span>
                      Price
                    </span>

                    <strong>
                      {tour.price || "₹ On Request"}
                    </strong>
                  </div>

                </div>

              </div>


              {/* =================================================
                  TABS
              ================================================== */}

              <TourTabs
                overview={tour.overview}
                overviewExtra={tour.overviewExtra}
                itinerary={tour.itinerary}
                inclusions={tour.inclusions}
                exclusions={tour.exclusions}
              />


              {/* =================================================
                  ROUTE INFO
              ================================================== */}

              <div className="route-box">

                <div className="route-left">

                  <span className="route-label">
                    TOUR ROUTE
                  </span>

                  <h3>
                    {tour.route || "India"}
                  </h3>

                </div>

                <div className="route-right">

                  <span>
                    Distance
                  </span>

                  <strong>
                    {tour.distance || "As per itinerary"}
                  </strong>

                </div>

              </div>

            </div>


            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className="tour-sidebar">


              {/* ENQUIRY CARD */}

              <div className="enquiry-card">

                <div className="enquiry-header">

                  <span>
                    PLAN YOUR TRIP
                  </span>

                  <h2>
                    Enquire Now
                  </h2>

                  <p>
                    Fill in your details and our travel
                    expert will contact you shortly.
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
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
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
                      placeholder="Tell us about your travel plan..."
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
                  Tour Information
                </h3>


                <div className="quick-row">

                  <span>
                    Duration
                  </span>

                  <strong>
                    {tour.duration}
                  </strong>

                </div>


                <div className="quick-row">

                  <span>
                    Start City
                  </span>

                  <strong>
                    {tour.startCity}
                  </strong>

                </div>


                <div className="quick-row">

                  <span>
                    Tour Type
                  </span>

                  <strong>
                    {tour.type}
                  </strong>

                </div>


                <div className="quick-row">

                  <span>
                    Rating
                  </span>

                  <strong className="rating">
                    ★ {tour.rating}
                  </strong>

                </div>


                <div className="quick-row">

                  <span>
                    Price
                  </span>

                  <strong>
                    {tour.price || "₹ On Request"}
                  </strong>

                </div>

              </div>


              {/* CONTACT BOX */}

              <div className="contact-box">

                <span>
                  NEED HELP?
                </span>

                <h3>
                  Talk To Our Travel Expert
                </h3>

                <p>
                  Get help planning your perfect India
                  holiday.
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
          OTHER TOURS
      ====================================================== */}

      <section className="other-tours">

        <div className="tour-container">

          <div className="other-heading">

            <span>
              EXPLORE MORE
            </span>

            <h2>
              Other Tour Packages
            </h2>

            <p>
              Discover more unforgettable journeys across India.
            </p>

          </div>


          <div className="other-grid">

            {otherTours.map((item) => (

              <Link
                key={item.slug}
                href={`/tour-list/${item.slug}`}
                className="other-card"
              >

                <div className="other-image">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                  />

                  <div className="other-rating">
                    ★ {item.rating}
                  </div>

                </div>


                <div className="other-content">

                  <div className="other-meta">

                    <span>
                      {item.duration}
                    </span>

                    <span>
                      {item.startCity}
                    </span>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.shortDescription}
                  </p>


                  <div className="other-bottom">

                    <strong>
                      {item.price || "₹ On Request"}
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

        * {
          box-sizing: border-box;
        }

        .tour-detail-page {
          width: 100%;
          background: #fff;
          color: #111827;
        }

        .tour-container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }


        /* =====================================================
           HERO
        ====================================================== */

        .tour-hero {
          width: 100%;
        }

        .tour-hero-image {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }

        .hero-img {
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(35, 7, 70, .92) 0%,
              rgba(35, 7, 70, .68) 45%,
              rgba(35, 7, 70, .20) 100%
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
          margin: 0 auto;
          color: #fff;
        }

        .hero-tag {
          display: inline-block;
          margin-bottom: 15px;
          color: #FF9D00;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .hero-content h1 {
          max-width: 850px;
          margin: 0 0 20px;
          font-size: clamp(38px, 5vw, 65px);
          line-height: 1.08;
          font-weight: 800;
        }

        .hero-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
          font-size: 15px;
        }

        .hero-rating .stars {
          color: #FF9D00;
          font-size: 20px;
        }

        .hero-rating strong {
          font-size: 17px;
        }

        .hero-rating span:last-child {
          opacity: .75;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          font-size: 14px;
        }

        .breadcrumb a {
          color: #fff;
          text-decoration: none;
          transition: .3s;
        }

        .breadcrumb a:hover {
          color: #FF9D00;
        }

        .breadcrumb span {
          opacity: .6;
        }

        .breadcrumb strong {
          color: #FF9D00;
          font-weight: 600;
        }


        /* =====================================================
           MAIN
        ====================================================== */

        .tour-main {
          padding: 75px 0;
          background: #fff;
        }

        .tour-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 50px;
          align-items: start;
        }


        /* =====================================================
           TOUR INFO BAR
        ====================================================== */

        .tour-info-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 40px;
          padding: 18px;
          background: #F8F6FB;
          border-radius: 15px;
        }

        .tour-info-item {
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 0;
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
          color: #5B10E8;
          font-size: 18px;
        }

        .tour-info-item span {
          display: block;
          margin-bottom: 4px;
          color: #777;
          font-size: 11px;
        }

        .tour-info-item strong {
          display: block;
          color: #252331;
          font-size: 13px;
          line-height: 1.3;
        }


        /* =====================================================
           ROUTE BOX
        ====================================================== */

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

        .route-label {
          display: block;
          margin-bottom: 7px;
          color: #FF9D00;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .route-left h3 {
          margin: 0;
          font-size: 20px;
        }

        .route-right {
          text-align: right;
        }

        .route-right span {
          display: block;
          margin-bottom: 5px;
          font-size: 12px;
          opacity: .7;
        }

        .route-right strong {
          color: #FF9D00;
          font-size: 15px;
        }


        /* =====================================================
           SIDEBAR
        ====================================================== */

        .tour-sidebar {
          position: sticky;
          top: 25px;
        }


        /* ENQUIRY */

        .enquiry-card {
          overflow: hidden;
          background: #fff;
          border-radius: 18px;
          border: 1px solid #eee8f7;
          box-shadow:
            0 15px 50px rgba(60, 20, 100, .12);
        }

        .enquiry-header {
          padding: 27px;
          background: #5B10E8;
          color: #fff;
        }

        .enquiry-header > span {
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
          color: rgba(255,255,255,.80);
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
          background: #fff;
          color: #222;
          font-family: inherit;
          font-size: 13px;
          transition: .3s;
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
          box-shadow: 0 0 0 3px rgba(91,16,232,.07);
        }

        .enquiry-form button {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 5px;
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
          transform: translateY(-2px);
        }

        .enquiry-form button span {
          font-size: 18px;
        }


        /* QUICK INFO */

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

        .quick-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 12px 0;
          border-bottom: 1px solid #e3daf1;
        }

        .quick-row:last-child {
          border-bottom: none;
        }

        .quick-row span {
          color: #777;
          font-size: 13px;
        }

        .quick-row strong {
          color: #3F0AA8;
          font-size: 13px;
          text-align: right;
        }

        .quick-row strong.rating {
          color: #FF9D00;
        }


        /* CONTACT */

        .contact-box {
          margin-top: 22px;
          padding: 25px;
          border-radius: 15px;
          background: #3F0AA8;
          color: #fff;
        }

        .contact-box > span {
          color: #FF9D00;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .contact-box h3 {
          margin: 8px 0;
          font-size: 21px;
          line-height: 1.3;
        }

        .contact-box p {
          margin: 0 0 18px;
          color: rgba(255,255,255,.75);
          font-size: 13px;
          line-height: 1.6;
        }

        .contact-box a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          border-radius: 7px;
          background: #FF9D00;
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }


        /* =====================================================
           OTHER TOURS
        ====================================================== */

        .other-tours {
          padding: 80px 0;
          background: #F8F6FB;
        }

        .other-heading {
          margin-bottom: 40px;
          text-align: center;
        }

        .other-heading > span {
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
          font-size: 15px;
        }

        .other-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .other-card {
          display: block;
          overflow: hidden;
          border-radius: 15px;
          background: #fff;
          color: inherit;
          text-decoration: none;
          box-shadow: 0 7px 30px rgba(40,20,70,.07);
          transition: .35s;
        }

        .other-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 45px rgba(40,20,70,.13);
        }

        .other-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .other-image img {
          object-fit: cover;
          transition: transform .5s ease;
        }

        .other-card:hover .other-image img {
          transform: scale(1.07);
        }

        .other-rating {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 7px 11px;
          border-radius: 20px;
          background: #fff;
          color: #3F0AA8;
          font-size: 12px;
          font-weight: 800;
        }

        .other-content {
          padding: 21px;
        }

        .other-meta {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 8px;
        }

        .other-meta span {
          color: #FF9D00;
          font-size: 11px;
          font-weight: 800;
        }

        .other-content h3 {
          margin: 0 0 9px;
          color: #252331;
          font-size: 19px;
          line-height: 1.35;
        }

        .other-content p {
          min-height: 45px;
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


        /* =====================================================
           RESPONSIVE
        ====================================================== */

        @media (max-width: 1100px) {

          .tour-layout {
            grid-template-columns: minmax(0, 1fr) 320px;
            gap: 30px;
          }

          .tour-info-bar {
            grid-template-columns: repeat(2, 1fr);
          }

        }


        @media (max-width: 991px) {

          .tour-hero-image {
            height: 450px;
          }

          .tour-layout {
            grid-template-columns: 1fr;
          }

          .tour-sidebar {
            position: static;
          }

          .enquiry-card {
            max-width: 600px;
          }

          .quick-info,
          .contact-box {
            max-width: 600px;
          }

          .other-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }


        @media (max-width: 767px) {

          .tour-container {
            width: calc(100% - 25px);
          }

          .tour-hero-image {
            height: 430px;
          }

          .hero-content {
            width: calc(100% - 25px);
          }

          .hero-content h1 {
            font-size: 38px;
          }

          .breadcrumb {
            font-size: 12px;
          }

          .tour-main {
            padding: 50px 0;
          }

          .tour-info-bar {
            grid-template-columns: 1fr;
            padding: 15px;
          }

          .tour-info-item {
            padding: 5px 0;
          }

          .route-box {
            align-items: flex-start;
            flex-direction: column;
          }

          .route-right {
            text-align: left;
          }

          .other-tours {
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

     <FooterSix />
    </>
  );
};

export default TourDetailsPage;