
// 'use client'
// import Image from "next/image";
// import Link from "next/link";

// import { luxuryCars } from "@/app/taxicompontents/LuxuryCarsData";
// import BreadCrumb from "@/components/common/BreadCrumb";

// type PageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export default async function LuxuryCarDetailsPage({
//   params,
// }: PageProps) {
//   const { slug } = await params;

//   const car = luxuryCars.find(
//     (item) => item.slug === slug
//   );

//   if (!car) {
//     return (
//       <main className="luxury-not-found">
//         <div className="container">
//           <h1>Luxury Car Not Found</h1>

//           <p>
//             The luxury car you are looking for does not exist.
//           </p>

//           <Link href="/luxury-cars">
//             Back To Luxury Cars
//           </Link>
//         </div>

//         <style jsx>{`

//           .luxury-not-found {
//             padding: 120px 0;
//             text-align: center;
//           }

//           .luxury-not-found h1 {
//             color: #17121f;
//             margin-bottom: 15px;
//           }

//           .luxury-not-found p {
//             color: #6b7280;
//             margin-bottom: 25px;
//           }

//           .luxury-not-found a {
//             display: inline-block;
//             padding: 13px 22px;
//             border-radius: 8px;
//             background: #5b10e8;
//             color: #ffffff;
//             text-decoration: none;
//             font-weight: 700;
//           }

//         `}</style>
//       </main>
//     );
//   }

//   return (
//     <>
//      <BreadCrumb title="Luxury Car Details" sub_title={car.name} />
//     <main className="luxury-details-page">

//       {/* =================================
//           HERO
//       ================================= */}

     

//       {/* =================================
//           DETAILS
//       ================================= */}

//       <section className="luxury-details-section">

//         <div className="container">

//           <div className="row align-items-center">

//             {/* IMAGE */}

//             <div className="col-lg-7">

//               <div className="luxury-main-image">

//                 <Image
//                   src={car.image}
//                   alt={car.name}
//                   width={900}
//                   height={600}
//                   priority
//                 />

//                 <div className="luxury-image-badge">
//                   {car.category}
//                 </div>

//               </div>

//             </div>


//             {/* CONTENT */}

//             <div className="col-lg-5">

//               <div className="luxury-details-content">

//                 <span className="luxury-details-subtitle">
//                   PREMIUM TRAVEL
//                 </span>

//                 <h1>
//                   {car.name}
//                 </h1>

//                 <p className="luxury-description">
//                   {car.description}
//                 </p>


//                 {/* PRICE */}

//                 <div className="luxury-price-box">

//                   <span>
//                     Starting From
//                   </span>

//                   <strong>
//                     {car.price}
//                     <small>
//                       {car.priceUnit}
//                     </small>
//                   </strong>

//                 </div>


//                 {/* SPECS */}

//                 <div className="luxury-specs">

//                   <div className="luxury-spec">

//                     <span>
//                       👤
//                     </span>

//                     <div>
//                       <small>
//                         Seating
//                       </small>

//                       <strong>
//                         {car.seating}
//                       </strong>
//                     </div>

//                   </div>


//                   <div className="luxury-spec">

//                     <span>
//                       🧳
//                     </span>

//                     <div>
//                       <small>
//                         Luggage
//                       </small>

//                       <strong>
//                         {car.luggage}
//                       </strong>
//                     </div>

//                   </div>


//                   <div className="luxury-spec">

//                     <span>
//                       ❄
//                     </span>

//                     <div>
//                       <small>
//                         Air Conditioning
//                       </small>

//                       <strong>
//                         {car.ac}
//                       </strong>
//                     </div>

//                   </div>

//                 </div>


//                 {/* BUTTONS */}

//                 <div className="luxury-action-buttons">

//                   <Link
//                     href="#booking"
//                     className="luxury-book-btn"
//                   >
//                     Book This Car
//                     <span>→</span>
//                   </Link>

//                   <Link
//                     href="tel:+919999999999"
//                     className="luxury-call-btn"
//                   >
//                     ☎ Call Now
//                   </Link>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =================================
//           FEATURES + DESCRIPTION
//       ================================= */}

//       <section className="luxury-features-section">

//         <div className="container">

//           <div className="row">

//             {/* FEATURES */}

//             <div className="col-lg-7">

//               <div className="luxury-feature-box">

//                 <span className="feature-subtitle">
//                   CAR FEATURES
//                 </span>

//                 <h2>
//                   Everything You Need
//                   <span> For A Comfortable Journey</span>
//                 </h2>

//                 <div className="feature-grid">

//                   {car.features.map((feature, index) => (
//                     <div
//                       className="feature-item"
//                       key={index}
//                     >

//                       <span>
//                         ✓
//                       </span>

//                       <strong>
//                         {feature}
//                       </strong>

//                     </div>
//                   ))}

//                 </div>

//               </div>

//             </div>


//             {/* BOOKING CTA */}

//             <div className="col-lg-5">

//               <div className="luxury-booking-card">

//                 <span>
//                   READY TO TRAVEL?
//                 </span>

//                 <h3>
//                   Book {car.name}
//                 </h3>

//                 <p>
//                   Contact our travel team and get
//                   a quote for your luxury journey.
//                 </p>

//                 <Link
//                   href="#booking"
//                   className="luxury-booking-btn"
//                 >
//                   Get A Quote
//                   <span>→</span>
//                 </Link>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =================================
//           CSS
//       ================================= */}

//       <style jsx>{`

//         /* =================================
//            HERO
//         ================================= */

//         .luxury-details-hero {
//           padding: 30px 0;

//           background: #f4eeff;

//           border-bottom: 1px solid #e8ddf8;
//         }


//         .luxury-breadcrumb {
//           display: flex;

//           align-items: center;

//           flex-wrap: wrap;

//           gap: 10px;

//           color: #777080;

//           font-size: 13px;
//         }


//         .luxury-breadcrumb a {
//           color: #5b10e8;

//           text-decoration: none;

//           font-weight: 600;
//         }


//         .luxury-breadcrumb strong {
//           color: #30283a;

//           font-weight: 600;
//         }


//         /* =================================
//            DETAILS SECTION
//         ================================= */

//         .luxury-details-section {
//           padding: 90px 0;

//           background: #ffffff;
//         }


//         /* =================================
//            MAIN IMAGE
//         ================================= */

//         .luxury-main-image {
//           position: relative;

//           height: 560px;

//           overflow: hidden;

//           border-radius: 25px;

//           background: #f4eeff;

//           box-shadow:
//             0 20px 50px rgba(63, 10, 168, 0.12);
//         }


//         .luxury-main-image :global(img) {
//           width: 100%;
//           height: 100%;

//           object-fit: cover;

//           display: block;
//         }


//         .luxury-image-badge {
//           position: absolute;

//           left: 20px;
//           top: 20px;

//           padding: 9px 16px;

//           border-radius: 30px;

//           background: #5b10e8;

//           color: #ffffff;

//           font-size: 12px;

//           font-weight: 700;
//         }


//         /* =================================
//            CONTENT
//         ================================= */

//         .luxury-details-content {
//           padding-left: 45px;
//         }


//         .luxury-details-subtitle {
//           display: inline-block;

//           margin-bottom: 12px;

//           color: #ff9d00;

//           font-size: 12px;

//           font-weight: 800;

//           letter-spacing: 1.5px;
//         }


//         .luxury-details-content h1 {
//           margin: 0 0 20px;

//           color: #17121f;

//           font-size: 46px;

//           line-height: 1.15;

//           font-weight: 700;
//         }


//         .luxury-description {
//           margin: 0 0 25px;

//           color: #6b7280;

//           font-size: 16px;

//           line-height: 1.8;
//         }


//         /* =================================
//            PRICE
//         ================================= */

//         .luxury-price-box {
//           display: flex;

//           align-items: center;

//           justify-content: space-between;

//           padding: 18px 20px;

//           margin-bottom: 22px;

//           border-radius: 14px;

//           background: #f4eeff;

//           border: 1px solid #e5d9f8;
//         }


//         .luxury-price-box span {
//           color: #6b7280;

//           font-size: 13px;
//         }


//         .luxury-price-box strong {
//           color: #5b10e8;

//           font-size: 26px;

//           font-weight: 800;
//         }


//         .luxury-price-box small {
//           margin-left: 4px;

//           font-size: 12px;

//           font-weight: 600;
//         }


//         /* =================================
//            SPECS
//         ================================= */

//         .luxury-specs {
//           display: grid;

//           grid-template-columns: repeat(3, 1fr);

//           gap: 10px;

//           margin-bottom: 25px;
//         }


//         .luxury-spec {
//           padding: 14px 10px;

//           text-align: center;

//           border: 1px solid #ece8f0;

//           border-radius: 12px;

//           background: #ffffff;
//         }


//         .luxury-spec > span {
//           display: block;

//           margin-bottom: 7px;

//           font-size: 18px;
//         }


//         .luxury-spec small {
//           display: block;

//           margin-bottom: 3px;

//           color: #8a8392;

//           font-size: 10px;
//         }


//         .luxury-spec strong {
//           display: block;

//           color: #30283a;

//           font-size: 11px;
//         }


//         /* =================================
//            ACTION BUTTONS
//         ================================= */

//         .luxury-action-buttons {
//           display: flex;

//           gap: 12px;
//         }


//         .luxury-book-btn,
//         .luxury-call-btn {
//           min-height: 50px;

//           display: inline-flex;

//           align-items: center;

//           justify-content: center;

//           gap: 10px;

//           padding: 0 22px;

//           border-radius: 9px;

//           text-decoration: none;

//           font-size: 13px;

//           font-weight: 700;

//           transition: all 0.3s ease;
//         }


//         .luxury-book-btn {
//           flex: 1;

//           background: #5b10e8;

//           color: #ffffff;
//         }


//         .luxury-book-btn:hover {
//           background: #3f0aa8;

//           color: #ffffff;
//         }


//         .luxury-call-btn {
//           flex: 1;

//           background: #ff9d00;

//           color: #ffffff;
//         }


//         .luxury-call-btn:hover {
//           background: #5b10e8;

//           color: #ffffff;
//         }


//         /* =================================
//            FEATURES SECTION
//         ================================= */

//         .luxury-features-section {
//           padding: 80px 0;

//           background: #f4eeff;
//         }


//         .luxury-feature-box {
//           padding-right: 40px;
//         }


//         .feature-subtitle {
//           color: #ff9d00;

//           font-size: 12px;

//           font-weight: 800;

//           letter-spacing: 1.4px;
//         }


//         .luxury-feature-box h2 {
//           margin: 12px 0 30px;

//           color: #17121f;

//           font-size: 34px;

//           line-height: 1.25;

//           font-weight: 700;
//         }


//         .luxury-feature-box h2 span {
//           color: #5b10e8;
//         }


//         .feature-grid {
//           display: grid;

//           grid-template-columns: 1fr 1fr;

//           gap: 13px;
//         }


//         .feature-item {
//           display: flex;

//           align-items: center;

//           gap: 10px;

//           padding: 14px;

//           border-radius: 10px;

//           background: #ffffff;

//           border: 1px solid #e9e0f5;
//         }


//         .feature-item span {
//           width: 27px;
//           height: 27px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           flex-shrink: 0;

//           border-radius: 50%;

//           background: #f4eeff;

//           color: #5b10e8;

//           font-size: 12px;

//           font-weight: 800;
//         }


//         .feature-item strong {
//           color: #30283a;

//           font-size: 12px;
//         }


//         /* =================================
//            BOOKING CARD
//         ================================= */

//         .luxury-booking-card {
//           padding: 35px;

//           border-radius: 20px;

//           background: #5b10e8;

//           box-shadow:
//             0 20px 40px rgba(63, 10, 168, 0.20);
//         }


//         .luxury-booking-card > span {
//           color: #ffb52e;

//           font-size: 11px;

//           font-weight: 800;

//           letter-spacing: 1.3px;
//         }


//         .luxury-booking-card h3 {
//           margin: 12px 0;

//           color: #ffffff;

//           font-size: 28px;

//           line-height: 1.25;
//         }


//         .luxury-booking-card p {
//           margin: 0 0 25px;

//           color: rgba(255, 255, 255, 0.78);

//           font-size: 14px;

//           line-height: 1.7;
//         }


//         .luxury-booking-btn {
//           display: inline-flex;

//           align-items: center;

//           justify-content: center;

//           gap: 10px;

//           width: 100%;

//           min-height: 48px;

//           border-radius: 8px;

//           background: #ff9d00;

//           color: #ffffff;

//           text-decoration: none;

//           font-size: 13px;

//           font-weight: 700;

//           transition: all 0.3s ease;
//         }


//         .luxury-booking-btn:hover {
//           background: #ffffff;

//           color: #5b10e8;
//         }


//         /* =================================
//            TABLET
//         ================================= */

//         @media (max-width: 991px) {

//           .luxury-details-section {
//             padding: 70px 0;
//           }


//           .luxury-main-image {
//             height: 450px;

//             margin-bottom: 40px;
//           }


//           .luxury-details-content {
//             padding-left: 0;
//           }


//           .luxury-details-content h1 {
//             font-size: 40px;
//           }


//           .luxury-feature-box {
//             padding-right: 0;

//             margin-bottom: 35px;
//           }

//         }


//         /* =================================
//            MOBILE
//         ================================= */

//         @media (max-width: 575px) {

//           .luxury-details-section {
//             padding: 55px 0;
//           }


//           .luxury-main-image {
//             height: 320px;

//             border-radius: 18px;
//           }


//           .luxury-details-content h1 {
//             font-size: 32px;
//           }


//           .luxury-description {
//             font-size: 14px;
//           }


//           .luxury-specs {
//             grid-template-columns: 1fr;
//           }


//           .luxury-action-buttons {
//             flex-direction: column;
//           }


//           .luxury-features-section {
//             padding: 60px 0;
//           }


//           .luxury-feature-box h2 {
//             font-size: 28px;
//           }


//           .feature-grid {
//             grid-template-columns: 1fr;
//           }


//           .luxury-booking-card {
//             padding: 25px;
//           }

//         }

//       `}</style>

//     </main>


//     </>
//   );
// }



import OneWayTaxi from "@/app/taxicompontents/Onewaytaxi ";
import TaxiContactSection from "@/app/taxicompontents/TaxiContactSection";
import Listing from "@/components/homes/home-three/Listing"

import BreadCrumb from "@/components/common/BreadCrumb";
import FooterSix from "@/layouts/footers/FooterSix";
import HeaderThree from "@/layouts/headers/HeaderThree";
import type { Metadata } from "next";
import Link from "next/link";
import RajasthanTaxiGrid from "@/app/taxicompontents/RajasthanTaxiGrid";
import TaxiServicesSection from "@/app/taxicompontents/TaxiServicesSection";

export const metadata: Metadata = {
  title: "Luxury Car Rental In Jaipur | Dream Cab Service",
  description:
    "BMW, Mercedes-Benz S & E Class, Jaguar F-Pace & XF, Audi A5, A6 & Q7 and Toyota Fortuner — chauffeur-driven luxury car rental in Jaipur, Rajasthan.",
};

const fleet = [
  {
    id: "bmw",
    name: "BMW",
    where: "Jaipur, and across Rajasthan, Gujarat, Punjab, Delhi NCR & Agra",
    blurb:
      "The car most guests ask for when the arrival itself matters — a baraat entry, a board meeting, an airport pick-up for a visiting director. Chauffeur-driven, sanitised and ready, by the day or by the hour.",
    features: [
      "Professional, uniformed chauffeur",
      "Driver speaks Hindi & English",
      "Airport, station & hotel transfers",
      "Sanitised before every booking",
      "Fully air-conditioned, audio & video",
      "Flat quote — nothing added later",
      "Round-the-clock booking support",
      "Wedding & corporate hire welcome",
    ],
    rates: [
      { label: "Outstation", value: "₹45–50 / km (hill extra)" },
      { label: "Local Jaipur", value: "₹9,000–12,000 / day" },
      { label: "Short hire", value: "8-hour packages available" },
    ],
  },
  {
    id: "jaguar",
    name: "Jaguar F-Pace & XF",
    where: "Jaipur, Rajasthan, Delhi & Agra",
    blurb:
      "Diesel, five seats plus the driver, leather-finished cabin. A regular choice for wedding processions and for guests who want a quieter ride on a long highway run.",
    features: [
      "Diesel only",
      "5 guest seats + driver",
      "Leather upholstery, rear headrests",
      "Touchscreen with 250W audio",
      "USB charging points",
      "Electric sunroof, climate control",
      "Power windows, airbags, belt alert",
      "Fog lamps, adaptive headlights",
      "360° camera, ABS",
      "540-litre boot",
    ],
    rates: [
      { label: "Outstation", value: "₹45–70 / km" },
      { label: "Local Jaipur", value: "₹9,000–14,000 / day" },
    ],
  },
  {
    id: "audi",
    name: "Audi A5, A6 & Q7",
    where: "Jaipur, Rajasthan, Delhi & Agra",
    blurb:
      "Three body styles on one booking line — the A5 for a couple, the A6 for a corporate transfer, the Q7 when there's luggage and a hill road ahead.",
    features: [
      "Diesel only",
      "4 guest seats + driver",
      "Leather upholstery, rear headrests",
      "Touchscreen with premium audio",
      "USB charging points",
      "Electric sunroof, climate control",
      "Power windows, airbags, belt alert",
      "Fog lamps, adaptive headlights",
      "360° camera, ABS",
    ],
    rates: [
      { label: "Outstation", value: "₹50–70 / km" },
      { label: "Local Jaipur", value: "₹12,000–14,000 / day" },
    ],
  },
  {
    id: "fortuner",
    name: "Toyota Fortuner",
    where: "Jaipur, Rajasthan, Delhi, Gujarat, Ahmedabad, Chandigarh, Amritsar, Himachal Pradesh",
    blurb:
      "The fleet's workhorse — seven seats, a big diesel engine and the ground clearance for Himachal and Mount Abu roads, at roughly a third of a German saloon's per-km rate.",
    features: [
      "Diesel, 2700cc+",
      "7 passengers + driver",
      "Touchscreen music system",
      "Airbags, power windows",
      "Automatic climate control",
      "ABS — steady on hill routes",
      "Fog lamps for winter driving",
      "Remote tailgate release",
      "Cooled glovebox for medicines",
    ],
    rates: [
      { label: "Outstation", value: "₹24–28 / km (hill extra)" },
      { label: "Local Jaipur", value: "₹4,000–4,500 / day" },
      { label: "Short hire", value: "8-hour packages available" },
    ],
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz S & E Class",
    where: "Jaipur, and across Rajasthan, Gujarat, Punjab, Delhi NCR & Agra",
    blurb:
      "The top of the list — sent when the guest is the reason for the event. Chauffeur-driven to a wedding lawn, a hotel porch, or Terminal 2.",
    features: [
      "Professional, uniformed chauffeur",
      "Driver speaks Hindi & English",
      "Airport, station & hotel transfers",
      "Sanitised before every booking",
      "Fully air-conditioned, audio & video",
      "Flat quote — nothing added later",
      "Round-the-clock booking support",
      "Wedding & corporate hire welcome",
    ],
    rates: [
      { label: "Outstation", value: "₹75–80 / km (hill extra)" },
      { label: "Local Jaipur", value: "₹15,000–16,000 / day" },
      { label: "Short hire", value: "8-hour packages available" },
    ],
  },
];

const buses = [
  {
    name: "45-Seater AC Coach",
    desc: "45 + 1 seats — 40 fixed seats with a five-seat sofa at the back.",
    perKm: "₹65 / km",
    perDay: "₹16,250 / day",
    sightseeing: "₹17,000 (Jaipur)",
  },
  {
    name: "49-Seater AC Coach",
    desc: "49 + 1 seats — 45 fixed seats with a four-seat sofa at the back.",
    perKm: "₹47 / km",
    perDay: "₹11,750 / day",
    sightseeing: "₹12,500 (Jaipur)",
  },
  {
    name: "45-Seater Volvo",
    desc: "45 + 1 seats in a Volvo coach, sofa row at the rear.",
    perKm: "₹49 / km",
    perDay: "₹18,250 / day",
    sightseeing: "₹15,500 (Jaipur)",
  },
];

const PHONE = "+919680474825";
const PHONE_DISPLAY = "96804 74825";

export default function LuxuryCarRentalJaipurPage() {
  return (


    <>
    <HeaderThree/>
    <BreadCrumb title="Details Luxury Car Rental" sub_title="Luxury Car Rental In Jaipur" />
    <main style={{ background: "var(--tg-common-white)", color: "var(--tg-common-black)" }}>
      {/* ---------------- HERO ---------------- */}
      <section className="py-5 py-lg-5 border-bottom" style={{ borderColor: "var(--tg-border-1)" }}>
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span
                className="d-inline-block text-uppercase fw-semibold mb-3"
                style={{
                  fontFamily: "var(--tg-ff-body)",
                  color: "var(--tg-theme-primary)",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                Jaipur · Rajasthan · Delhi NCR · Gujarat · Punjab
              </span>
              <h1
                className="mb-4"
                style={{
                  fontFamily: "var(--tg-ff-outfit)",
                  color: "var(--tg-common-black)",
                  fontSize: "clamp(34px, 4.5vw, 56px)",
                  lineHeight: 1.15,
                }}
              >
                Luxury car rental in Jaipur, with a chauffeur who knows the road.
              </h1>
              <p
                className="mb-4"
                style={{ color: "var(--tg-grey-6)", fontSize: "17px", maxWidth: "60ch" }}
              >
                Since 2015 we&apos;ve put guests into BMW, Mercedes-Benz, Jaguar, Audi and
                Fortuner for weddings, corporate visits, film shoots and sightseeing —
                booked online or on a call, at rates quoted upfront.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  href={`tel:${PHONE}`}
                  className="btn px-4 py-3 fw-semibold"
                  style={{
                    background: "var(--tg-theme-primary)",
                    color: "var(--tg-common-white)",
                    borderRadius: "6px",
                  }}
                >
                  Check availability
                </Link>
                <Link
                  href="#rates"
                  className="btn px-4 py-3 fw-semibold"
                  style={{
                    border: "1px solid var(--tg-border-2)",
                    color: "var(--tg-common-black)",
                    borderRadius: "6px",
                  }}
                >
                  See cars &amp; rates
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="ratio ratio-4x3 d-flex align-items-center justify-content-center"
                style={{
                  background: "var(--tg-grey-5)",
                  border: "1px solid var(--tg-border-1)",
                  borderRadius: "16px",
                }}
              >
                {/* Replace with next/image of your hero car photo */}
                <span style={{ color: "var(--tg-grey-4)", fontFamily: "var(--tg-ff-body)" }}>
                  Hero car photo goes here
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS STRIP ---------------- */}
      <section className="py-4" style={{ background: "var(--tg-grey-7)" }}>
        <div className="container">
          <div className="row text-center g-4">
            {[
              ["2015", "Renting luxury cars since"],
              ["5 marques", "BMW, Mercedes, Jaguar, Audi, Toyota"],
              ["8 hrs/day", "Hourly or full-day hire"],
              ["24×7", "Booking support on call"],
            ].map(([big, small]) => (
              <div className="col-6 col-md-3" key={big}>
                <div
                  style={{ fontFamily: "var(--tg-ff-outfit)", fontSize: "26px", color: "var(--tg-common-black)" }}
                >
                  {big}
                </div>
                <div style={{ fontSize: "14px", color: "var(--tg-grey-6)" }}>{small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FLEET INDEX ---------------- */}
      <section className="py-5">
        <div className="container">
          <span
            className="d-inline-block text-uppercase fw-semibold mb-2"
            style={{ color: "var(--tg-theme-secondary)", fontSize: "13px", letterSpacing: "1px" }}
          >
            The fleet
          </span>
          <h2 style={{ fontFamily: "var(--tg-ff-outfit)", fontSize: "clamp(28px, 3.5vw, 40px)" }}>
            Cars we keep ready in Jaipur
          </h2>
          <p style={{ color: "var(--tg-grey-6)", maxWidth: "65ch" }} className="mb-4">
            Every car is chauffeur-driven, fully air-conditioned and sanitised before
            handover. Pick-up from the airport, railway station, your hotel or your door.
          </p>
          <div className="d-flex flex-wrap gap-2">
            {fleet.map((car) => (
              <a
                key={car.id}
                href={`#${car.id}`}
                className="px-3 py-2"
                style={{
                  border: "1px solid var(--tg-border-1)",
                  borderRadius: "999px",
                  fontSize: "14px",
                  color: "var(--tg-common-black)",
                  textDecoration: "none",
                }}
              >
                {car.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FLEET DETAIL ---------------- */}
      <section id="rates" className="pb-3">
        <div className="container">
          {fleet.map((car, i) => (
            <div
              key={car.id}
              id={car.id}
              className="row align-items-start g-5 py-5"
              style={{ borderTop: "1px solid var(--tg-border-1)" }}
            >
              <div className={`col-lg-5 ${i % 2 === 1 ? "order-lg-2" : ""}`}>
                <div
                  className="ratio ratio-4x3 d-flex align-items-center justify-content-center"
                  style={{
                    background: "var(--tg-grey-5)",
                    border: "1px solid var(--tg-border-1)",
                    borderRadius: "16px",
                  }}
                >
                  <span style={{ color: "var(--tg-grey-4)", fontFamily: "var(--tg-ff-body)" }}>
                    {car.name} photo
                  </span>
                </div>
              </div>

              <div className="col-lg-7">
                <h3 style={{ fontFamily: "var(--tg-ff-outfit)", fontSize: "28px" }}>
                  {car.name}
                </h3>
                <p style={{ color: "var(--tg-grey-6)", fontSize: "14px" }} className="mb-3">
                  {car.where}
                </p>
                <p style={{ color: "var(--tg-grey-2)" }}>{car.blurb}</p>

                <div className="row row-cols-1 row-cols-sm-2 g-2 my-3">
                  {car.features.map((f) => (
                    <div className="col d-flex align-items-start gap-2" key={f}>
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          marginTop: "8px",
                          background: "var(--tg-theme-primary)",
                          borderRadius: "1px",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: "15px", color: "var(--tg-grey-2)" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="p-3 mb-3"
                  style={{
                    background: "var(--tg-grey-8)",
                    borderLeft: "3px solid var(--tg-theme-primary)",
                    borderRadius: "4px",
                  }}
                >
                  {car.rates.map((r) => (
                    <div key={r.label} className="d-flex justify-content-between py-1" style={{ fontSize: "15px" }}>
                      <span style={{ color: "var(--tg-grey-6)" }}>{r.label}</span>
                      <span className="fw-semibold">{r.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`tel:${PHONE}`}
                  className="fw-semibold"
                  style={{
                    color: "var(--tg-theme-primary)",
                    borderBottom: "2px solid var(--tg-theme-primary)",
                    paddingBottom: "2px",
                    textDecoration: "none",
                  }}
                >
                  Call {PHONE_DISPLAY} to book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>



            <RajasthanTaxiGrid/>

                        <TaxiServicesSection/>
            

            <TaxiContactSection/>

      

    </main>
    <FooterSix/>
    </>
  );
}