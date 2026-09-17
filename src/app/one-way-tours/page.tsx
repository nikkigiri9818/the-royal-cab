import React from 'react'
import BreadCrumb from "@/components/common/BreadCrumb"
import FooterSix from "@/layouts/footers/FooterSix"
import HeaderThree from "@/layouts/headers/HeaderThree"
import OneWayCard from "@/app/taxicompontents/OneWayCard";
import { oneWayTours } from "@/app/taxicompontents/OneWayData";

export default function page() {
  return (
    <>
         <HeaderThree />
         <main>
            <BreadCrumb title="One Way Tours & Taxi" sub_title="One Way Tour Service" />
            
             <main className="one-way-page">

      {/* ================= HERO ================= */}

     
      {/* ================= TOUR GRID ================= */}

      <section className="one-way-list">

        <div className="container">

          <div className="section-heading">

            <span>
              EXPLORE RAHASTHAN
            </span>

            <h2>
              Popular One Way Routes
            </h2>

            <p>
              Choose your route and book a comfortable
              private taxi for your journey.
            </p>

          </div>


          <div className="one-way-grid">

            {oneWayTours.map((tour) => (
              <OneWayCard
                key={tour.slug}
                tour={tour}
              />
            ))}

          </div>

        </div>

      </section>


      <style>{`

        .one-way-page {
          background: #fff;
        }

        .container {
          width: min(1200px, calc(100% - 40px));
          margin: auto;
        }

        /* HEADER */

        .one-way-header {
          position: relative;
          padding: 105px 20px;
          background:
            linear-gradient(
              135deg,
              #3F0AA8,
              #5B10E8
            );
          text-align: center;
          color: #fff;
          overflow: hidden;
        }

        .one-way-header::after {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          right: -100px;
          top: -150px;
          border-radius: 50%;
          background: rgba(255,157,0,.12);
        }

        .header-inner {
          position: relative;
          z-index: 1;
          max-width: 850px;
          margin: auto;
        }

        .header-inner span {
          display: block;
          margin-bottom: 12px;
          color: #FF9D00;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .header-inner h1 {
          margin: 0 0 15px;
          font-size: clamp(38px, 5vw, 58px);
          line-height: 1.1;
        }

        .header-inner p {
          max-width: 650px;
          margin: auto;
          color: rgba(255,255,255,.82);
          font-size: 16px;
          line-height: 1.7;
        }

        /* LIST */

        .one-way-list {
          padding: 80px 0;
        }

        .section-heading {
          margin-bottom: 45px;
          text-align: center;
        }

        .section-heading span {
          display: block;
          margin-bottom: 8px;
          color: #FF9D00;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .section-heading h2 {
          margin: 0 0 10px;
          color: #3F0AA8;
          font-size: 40px;
        }

        .section-heading p {
          margin: 0;
          color: #777;
          font-size: 15px;
        }

        .one-way-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (max-width: 991px) {

          .one-way-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 767px) {

          .container {
            width: calc(100% - 25px);
          }

          .one-way-header {
            padding: 75px 15px;
          }

          .one-way-list {
            padding: 55px 0;
          }

          .section-heading h2 {
            font-size: 31px;
          }

          .one-way-grid {
            grid-template-columns: 1fr;
          }

        }

      `}</style>

    </main>
         </main>
         <FooterSix />
      </>
  )
}



