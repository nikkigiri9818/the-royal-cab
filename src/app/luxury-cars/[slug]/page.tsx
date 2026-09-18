import Image from "next/image";



import TaxiContactSection from "@/app/taxicompontents/TaxiContactSection";

import BreadCrumb from "@/components/common/BreadCrumb";
import FooterSix from "@/layouts/footers/FooterSix";
import HeaderThree from "@/layouts/headers/HeaderThree";
import type { Metadata } from "next";
import Link from "next/link";
import RajasthanTaxiGrid from "@/app/taxicompontents/RajasthanTaxiGrid";
import TaxiServicesSection from "@/app/taxicompontents/TaxiServicesSection";

import car1 from "@/assets/img/luxricar/bmw.webp";
import car2 from "@/assets/img/luxricar/jagura.webp";
import car3 from "@/assets/img/luxricar/audi.webp";
import car4 from "@/assets/img/luxricar/toyotofrounter.webp";
import car5 from "@/assets/img/luxricar/mecdiz.webp";

export const metadata: Metadata = {
  title: "Luxury Car Rental In Jaipur | Dream Cab Service",
  description:
    "BMW, Mercedes-Benz S & E Class, Jaguar F-Pace & XF, Audi A5, A6 & Q7 and Toyota Fortuner — chauffeur-driven luxury car rental in Jaipur, Rajasthan.",
};

const fleet = [
  {
    id: "bmw",
    name: "BMW",
    image: car1,
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
    image: car2,
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
    image: car3,
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
    image: car4,
    where:
      "Jaipur, Rajasthan, Delhi, Gujarat, Ahmedabad, Chandigarh, Amritsar, Himachal Pradesh",
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
    image: car5,
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



const PHONE = "+919680474825";
const PHONE_DISPLAY = "96804 74825";

export default function LuxuryCarRentalJaipurPage() {
  return (
    <>
      <HeaderThree />
      <BreadCrumb
        title="Details Luxury Car Rental"
        sub_title="Luxury Car Rental In Jaipur"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ddUc-0_FcsjkCSq0cKQa5SK7F1PmrQI6oviUKHcemA&s=10"
      />
      <main
        style={{
          background: "var(--tg-common-white)",
          color: "var(--tg-common-black)",
        }}
      >
        {/* ---------------- HERO ---------------- */}
        <section
          className="py-5 py-lg-5 border-bottom"
          style={{ borderColor: "var(--tg-border-1)" }}
        >
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
                  Luxury car rental in Jaipur, with a chauffeur who knows the
                  road.
                </h1>
                <p
                  className="mb-4"
                  style={{
                    color: "var(--tg-grey-6)",
                    fontSize: "17px",
                    maxWidth: "60ch",
                  }}
                >
                  Since 2015 we&apos;ve put guests into BMW, Mercedes-Benz,
                  Jaguar, Audi and Fortuner for weddings, corporate visits, film
                  shoots and sightseeing — booked online or on a call, at rates
                  quoted upfront.
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
                  <span
                    style={{
                      color: "var(--tg-grey-4)",
                      fontFamily: "var(--tg-ff-body)",
                    }}
                  >

                      <Image
                        src="/assets/img/luxricar/luxriouscar.webp"
                        alt="heroimage"
                        width={600}
                        height={400}
                      />


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
                    style={{
                      fontFamily: "var(--tg-ff-outfit)",
                      fontSize: "26px",
                      color: "var(--tg-common-black)",
                    }}
                  >
                    {big}
                  </div>
                  <div style={{ fontSize: "14px", color: "var(--tg-grey-6)" }}>
                    {small}
                  </div>
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
              style={{
                color: "var(--tg-theme-secondary)",
                fontSize: "13px",
                letterSpacing: "1px",
              }}
            >
              The fleet
            </span>
            <h2
              style={{
                fontFamily: "var(--tg-ff-outfit)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
              }}
            >
              Cars we keep ready in Jaipur
            </h2>
            <p
              style={{ color: "var(--tg-grey-6)", maxWidth: "65ch" }}
              className="mb-4"
            >
              Every car is chauffeur-driven, fully air-conditioned and sanitised
              before handover. Pick-up from the airport, railway station, your
              hotel or your door.
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
                    <span
                      style={{
                        color: "var(--tg-grey-4)",
                        fontFamily: "var(--tg-ff-body)",
                      }}
                    >
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={600}
                        height={400}
                      />
                    </span>
                  </div>
                </div>

                <div className="col-lg-7">
                  <h3
                    style={{
                      fontFamily: "var(--tg-ff-outfit)",
                      fontSize: "28px",
                    }}
                  >
                    {car.name}
                  </h3>
                  <p
                    style={{ color: "var(--tg-grey-6)", fontSize: "14px" }}
                    className="mb-3"
                  >
                    {car.where}
                  </p>
                  <p style={{ color: "var(--tg-grey-2)" }}>{car.blurb}</p>

                  <div className="row row-cols-1 row-cols-sm-2 g-2 my-3">
                    {car.features.map((f) => (
                      <div
                        className="col d-flex align-items-start gap-2"
                        key={f}
                      >
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
                        <span
                          style={{
                            fontSize: "15px",
                            color: "var(--tg-grey-2)",
                          }}
                        >
                          {f}
                        </span>
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
                      <div
                        key={r.label}
                        className="d-flex justify-content-between py-1"
                        style={{ fontSize: "15px" }}
                      >
                        <span style={{ color: "var(--tg-grey-6)" }}>
                          {r.label}
                        </span>
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

        <RajasthanTaxiGrid />

        <TaxiServicesSection />

        <TaxiContactSection />
      </main>
      <FooterSix />
    </>
  );
}
