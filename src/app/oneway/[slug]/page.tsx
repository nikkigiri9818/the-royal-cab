// src/app/one-way-taxi/[slug]/page.tsx
// Detail page rendered when a card's "View Details" is clicked.
// URL shape: /one-way-taxi/jaipur-to-ajmer-taxi
// Uses Bootstrap 5 classes to match the rest of the site.

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { oneWayTaxiRoutes, getRouteBySlug } from "@/app/taxicompontents/Onewaytaxi ";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterSix from "@/layouts/footers/FooterSix";

// Pre-render one page per route at build time
export function generateStaticParams() {
  return oneWayTaxiRoutes.map((route) => ({ slug: route.slug }));
}

// SEO metadata per route
export function generateMetadata({ params }: { params: { slug: string } }) {
  const route = getRouteBySlug(params.slug);
  if (!route) return {};
  return {
    title: `${route.title} | Book One Way Cab For ${route.oneWayFare}`,
    description: route.shortDescription,
  };
}

const PHONE = "+91XXXXXXXXXX"; // TODO: replace with Thar Vibe Holidays contact number
const tealColor = "#0d4a4a";
const orangeColor = "#f26522";

export default function OneWayTaxiDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const route = getRouteBySlug(params.slug);
  if (!route) return notFound();

  return (

    <>
    <HeaderThree/>
    <main>
      {/* Hero */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center text-white"
        style={{ height: 360 }}
      >
        <Image
          src={route.image}
          alt={route.title}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        />
        <div className="position-relative px-3">
          <h1 className="fw-bold display-5">{route.title}</h1>
          <p className="mb-0 fst-italic">
            &ldquo;{route.title.replace("Taxi", "one way taxi")}&rdquo;
          </p>
        </div>
      </section>

      <div className="container py-5" style={{ maxWidth: 900 }}>
        {/* About */}
        <section>
          <h2 className="fw-bold">{route.title} Service</h2>
          <p className="text-muted mt-3">{route.aboutText}</p>

          <div className="row g-3 mt-2">
            <Stat label="Distance" value={`${route.distanceKm} km`} />
            <Stat label="Travel Time" value={route.travelTime} />
            <Stat label="One Way Fare" value={`${route.oneWayFare}*`} />
            <Stat label="Round Trip" value={route.roundTripPerKm} />
          </div>

          {route.route && (
            <p className="text-muted small mt-3">
              <strong>Route:</strong> {route.route}
            </p>
          )}

          <a
            href={`tel:${PHONE}`}
            className="btn mt-3"
            style={{ backgroundColor: orangeColor, color: "#fff" }}
          >
            Call Now to Book
          </a>
        </section>

        {/* Fare table */}
        <section className="mt-5">
          <h2 className="fw-bold">{route.title} Fare</h2>
          <p className="text-muted small">
            one way taxi fare / round trip taxi fare
          </p>

          <div className="row g-4 mt-1">
            {route.fares.map((fare) => (
              <div className="col-12 col-sm-6" key={fare.vehicle}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{fare.vehicle}</h5>
                    <ul className="list-unstyled small text-muted mb-2">
                      <li>
                        Vehicle type: <strong>{fare.vehicleType}</strong>
                      </li>
                      <li>
                        {route.destination} one way fare:{" "}
                        <strong>{fare.oneWayFare}</strong>
                      </li>
                      <li>
                        Travel outside: <strong>{fare.perKm}</strong>
                      </li>
                      <li>
                        Capacity: <strong>{fare.capacity}</strong>
                      </li>
                    </ul>
                    <a
                      href={`tel:${PHONE}`}
                      className="small fw-semibold"
                      style={{ color: orangeColor }}
                    >
                      Call now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        {route.attractions && route.attractions.length > 0 && (
          <section className="mt-5">
            <h2 className="fw-bold">
              Tourist Attractions in {route.destination}
            </h2>
            <div className="row mt-3">
              {route.attractions.map((place) => (
                <div className="col-12 col-sm-6" key={place}>
                  <p className="mb-2">
                    <span
                      className="d-inline-block rounded-circle me-2"
                      style={{ width: 8, height: 8, backgroundColor: orangeColor }}
                    />
                    {place}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {route.faqs && route.faqs.length > 0 && (
          <section className="mt-5">
            <h2 className="fw-bold">FAQ</h2>
            <div className="accordion mt-3" id="faqAccordion">
              {route.faqs.map((faq, i) => (
                <div className="accordion-item" key={faq.question}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-${route.slug}-${i}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`faq-${route.slug}-${i}`}
                    className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other routes */}
        <section className="mt-5">
          <h2 className="fw-bold">Our Other One Way Taxi Routes</h2>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {oneWayTaxiRoutes
              .filter((r) => r.slug !== route.slug)
              .map((r) => (
                <Link
                  key={r.slug}
                  href={`/one-way-taxi/${r.slug}`}
                  className="btn btn-outline-secondary btn-sm rounded-pill"
                >
                  {r.title}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
    <FooterSix/>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="col-6 col-sm-3">
      <div
        className="text-center rounded p-3"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="text-uppercase small text-muted">{label}</div>
        <div className="fw-bold" style={{ color: tealColor }}>
          {value}
        </div>
      </div>
    </div>
  );
}