"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

import taxi_data from "@/data/TaxiData";

import "swiper/css";

const TaxiSlider = () => {
   const swiperRef = useRef<SwiperType | null>(null);

   return (
      <section className="taxi-section">

         <div className="container">

            {/* =========================================
                SECTION HEADING
            ========================================= */}

            <div className="taxi-heading">

               <div className="taxi-heading-content">

                  <span className="taxi-subtitle">
                     Comfortable & Reliable
                  </span>

                  <h2>
                     Choose Your <span>Taxi</span>
                  </h2>

                  <p>
                     Travel across India with our comfortable,
                     clean and reliable taxi services.
                  </p>

               </div>


               <Link
                  href="/taxi-service"
                  className="taxi-view-btn"
               >
                  View All Taxis

                  <span>
                     →
                  </span>
               </Link>

            </div>


            {/* =========================================
                TAXI SLIDER
            ========================================= */}

            <div className="taxi-slider-wrap">


               {/* ======================================
                   LEFT ARROW
               ====================================== */}

               <button
                  type="button"
                  className="taxi-arrow taxi-prev"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Previous taxi"
               >

                  <svg
                     width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                  >
                     <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>

               </button>


               {/* ======================================
                   SWIPER
               ====================================== */}

               <Swiper
                  modules={[Autoplay]}

                  onSwiper={(swiper) => {
                     swiperRef.current = swiper;
                  }}

                  spaceBetween={24}

                  slidesPerView={1}

                  loop={true}

                  speed={800}

                  autoplay={{
                     delay: 4000,
                     disableOnInteraction: false,
                  }}

                  breakpoints={{

                     576: {
                        slidesPerView: 1,
                     },

                     768: {
                        slidesPerView: 2,
                     },

                     1200: {
                        slidesPerView: 3,
                     },

                  }}
               >

                  {taxi_data.map((item) => (

                     <SwiperSlide key={item.id}>

                        <div className="taxi-card">

                           {/* =================================
                               IMAGE AREA
                           ================================= */}

                           <div className="taxi-image">

                              <Image
                                 src={item.image}
                                 alt={item.title}
                                 fill
                                 sizes="
                                    (max-width: 576px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw
                                 "
                              />


                              {/* IMAGE GRADIENT */}

                              <div className="taxi-image-gradient"></div>


                              {/* =================================
                                  PREMIUM BADGE
                              ================================= */}

                              <div className="taxi-badge">

                                 <span className="taxi-badge-dot"></span>

                                 {item.badge}

                              </div>


                              {/* =================================
                                  DEFAULT CONTENT
                              ================================= */}

                              <div className="taxi-default-content">

                                 <span className="taxi-category">
                                    {item.category}
                                 </span>

                                 <h3>
                                    {item.title}
                                 </h3>

                                 <div className="taxi-default-price">

                                    <strong>
                                       {item.price}
                                    </strong>

                                    <span>
                                       / km
                                    </span>

                                 </div>

                              </div>


                              {/* =================================
                                  HOVER CONTENT
                              ================================= */}

                              <div className="taxi-hover-content">

                                 <div className="taxi-hover-inner">


                                    <span className="taxi-category">
                                       {item.category}
                                    </span>


                                    <h3>
                                       {item.title}
                                    </h3>


                                    <p>
                                       {item.description}
                                    </p>


                                    {/* =================================
                                        FEATURES
                                    ================================= */}

                                    <div className="taxi-features">


                                       {/* SEATS */}

                                       <div className="taxi-feature">

                                          <div className="taxi-feature-icon">

                                             <svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                             >

                                                <circle
                                                   cx="12"
                                                   cy="8"
                                                   r="3"
                                                   stroke="currentColor"
                                                   strokeWidth="1.8"
                                                />

                                                <path
                                                   d="M5 21C5 17.686 8.134 15 12 15C15.866 15 19 17.686 19 21"
                                                   stroke="currentColor"
                                                   strokeWidth="1.8"
                                                   strokeLinecap="round"
                                                />

                                             </svg>

                                          </div>


                                          <div>

                                             <small>
                                                Seats
                                             </small>

                                             <strong>
                                                {item.seats}
                                             </strong>

                                          </div>

                                       </div>


                                       {/* AC */}

                                       <div className="taxi-feature">

                                          <div className="taxi-feature-icon">

                                             <svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                             >

                                                <path
                                                   d="M12 3V21"
                                                   stroke="currentColor"
                                                   strokeWidth="1.8"
                                                   strokeLinecap="round"
                                                />

                                                <path
                                                   d="M5 8C5 5.8 6.8 4 9 4"
                                                   stroke="currentColor"
                                                   strokeWidth="1.8"
                                                   strokeLinecap="round"
                                                />

                                                <path
                                                   d="M19 16C19 18.2 17.2 20 15 20"
                                                   stroke="currentColor"
                                                   strokeWidth="1.8"
                                                   strokeLinecap="round"
                                                />

                                             </svg>

                                          </div>


                                          <div>

                                             <small>
                                                Comfort
                                             </small>

                                             <strong>
                                                {item.ac}
                                             </strong>

                                          </div>

                                       </div>


                                       {/* LUGGAGE */}

                                       <div className="taxi-feature">

                                          <div className="taxi-feature-icon">

                                             <svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                             >

                                                <rect
                                                   x="3"
                                                   y="6"
                                                   width="18"
                                                   height="14"
                                                   rx="2"
                                                   stroke="currentColor"
                                                   strokeWidth="1.8"
                                                />

                                                <path
                                                   d="M8 6V4C8 3.448 8.448 3 9 3H15C15.552 3 16 3.448 16 4V6"
                                                   stroke="currentColor"
                                                   strokeWidth="1.8"
                                                />

                                             </svg>

                                          </div>


                                          <div>

                                             <small>
                                                Luggage
                                             </small>

                                             <strong>
                                                {item.luggage}
                                             </strong>

                                          </div>

                                       </div>

                                    </div>


                                    {/* =================================
                                        BOTTOM
                                    ================================= */}

                                    <div className="taxi-bottom">

                                       <div className="taxi-price">

                                          <small>
                                             Starting
                                          </small>

                                          <strong>
                                             {item.price}
                                          </strong>

                                          <span>
                                             / km
                                          </span>

                                       </div>


                                       <Link
                                          href="/contact"
                                          className="taxi-book-btn"
                                       >

                                          Book Taxi

                                          <span>
                                             →
                                          </span>

                                       </Link>

                                    </div>

                                 </div>

                              </div>

                           </div>

                        </div>

                     </SwiperSlide>

                  ))}

               </Swiper>


               {/* ======================================
                   RIGHT ARROW
               ====================================== */}

               <button
                  type="button"
                  className="taxi-arrow taxi-next"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Next taxi"
               >

                  <svg
                     width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                  >

                     <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />

                  </svg>

               </button>

            </div>

         </div>


         {/* =========================================
             TAXI CSS
         ========================================= */}

         <style jsx>{`

            /* =========================================
               SECTION
            ========================================= */

            .taxi-section {
               position: relative;

               padding: 90px 0;

               background: #ffffff;

               overflow: hidden;
            }


            /* Purple decorative circle */

            .taxi-section::before {
               content: "";

               position: absolute;

               width: 330px;
               height: 330px;

               right: -160px;
               top: -160px;

               background: #f4eeff;

               border-radius: 50%;

               pointer-events: none;
            }


            .taxi-section::after {
               content: "";

               position: absolute;

               width: 180px;
               height: 180px;

               left: -100px;
               bottom: -80px;

               background: #fff4df;

               border-radius: 50%;

               pointer-events: none;
            }


            /* =========================================
               HEADING
            ========================================= */

            .taxi-heading {
               position: relative;

               z-index: 2;

               display: flex;

               align-items: flex-end;

               justify-content: space-between;

               gap: 30px;

               margin-bottom: 42px;
            }


            .taxi-subtitle {
               display: inline-block;

               margin-bottom: 8px;

               color: #5b10e8;

               font-size: 15px;

               font-weight: 600;

               font-style: italic;
            }


            .taxi-heading h2 {
               margin: 0 0 12px;

               color: #111827;

               font-size: 42px;

               line-height: 1.15;

               font-weight: 700;
            }


            .taxi-heading h2 span {
               color: #5b10e8;
            }


            .taxi-heading p {
               max-width: 650px;

               margin: 0;

               color: #6b7280;

               font-size: 15px;

               line-height: 1.7;
            }


            /* =========================================
               VIEW BUTTON
            ========================================= */

            .taxi-view-btn {
               display: inline-flex;

               align-items: center;

               justify-content: center;

               gap: 10px;

               padding: 13px 20px;

               color: #ffffff;

               background: #5b10e8;

               border-radius: 7px;

               text-decoration: none;

               font-size: 13px;

               font-weight: 600;

               white-space: nowrap;

               box-shadow:
                  0 10px 25px
                  rgba(91,16,232,.20);

               transition: all .3s ease;
            }


            .taxi-view-btn span {
               color: #ff9d00;

               font-size: 18px;

               transition:
                  transform .3s ease;
            }


            .taxi-view-btn:hover {
               color: #ffffff;

               background: #3f0aa8;

               transform:
                  translateY(-3px);
            }


            .taxi-view-btn:hover span {
               transform:
                  translateX(4px);
            }


            /* =========================================
               SLIDER
            ========================================= */

            .taxi-slider-wrap {
               position: relative;

               z-index: 2;

               padding: 0 12px;
            }


            /* =========================================
               CARD
            ========================================= */

            .taxi-card {
               position: relative;

               width: 100%;

               height: 400px;

               overflow: hidden;

               background: #ffffff;

               border: 1px solid #eee8ff;

               border-radius: 20px;

               box-shadow:
                  0 10px 35px
                  rgba(91,16,232,.10);

               transition:
                  transform .35s ease,
                  box-shadow .35s ease;
            }


            .taxi-card:hover {
               transform:
                  translateY(-6px);

               box-shadow:
                  0 18px 45px
                  rgba(91,16,232,.18);
            }


            /* =========================================
               IMAGE
            ========================================= */

            .taxi-image {
               position: relative;

               width: 100%;

               height: 100%;

               overflow: hidden;
            }


            .taxi-image :global(img) {
               object-fit: cover;

               transition:
                  transform .8s
                  cubic-bezier(.22,1,.36,1);
            }


            .taxi-card:hover
            .taxi-image :global(img) {
               transform:
                  scale(1.08);
            }


            /* =========================================
               IMAGE GRADIENT
            ========================================= */

            .taxi-image-gradient {
               position: absolute;

               inset: 0;

               z-index: 1;

               background:
                  linear-gradient(
                     to top,
                     rgba(35,7,82,.92) 0%,
                     rgba(91,16,232,.35) 40%,
                     rgba(91,16,232,.02) 78%
                  );

               transition:
                  all .5s ease;
            }


            .taxi-card:hover
            .taxi-image-gradient {
               background:
                  linear-gradient(
                     to top,
                     rgba(63,10,168,.96) 0%,
                     rgba(91,16,232,.55) 65%,
                     rgba(91,16,232,.08) 100%
                  );
            }


            /* =========================================
               BADGE
            ========================================= */

            .taxi-badge {
               position: absolute;

               top: 18px;
               left: 18px;

               z-index: 5;

               display: flex;

               align-items: center;

               gap: 7px;

               padding: 8px 13px;

               color: #ffffff;

               background:
                  rgba(91,16,232,.94);

               border-radius: 30px;

               font-size: 10px;

               font-weight: 700;

               text-transform: uppercase;

               letter-spacing: 1px;

               box-shadow:
                  0 7px 20px
                  rgba(91,16,232,.30);
            }


            .taxi-badge-dot {
               width: 6px;
               height: 6px;

               border-radius: 50%;

               background: #ff9d00;
            }


            /* =========================================
               DEFAULT CONTENT
            ========================================= */

            .taxi-default-content {
               position: absolute;

               left: 24px;
               right: 24px;

               bottom: 24px;

               z-index: 4;

               color: #ffffff;

               transition:
                  opacity .35s ease,
                  transform .5s ease;
            }


            .taxi-category {
               display: block;

               margin-bottom: 7px;

               color: #ffb52e;

               font-size: 10px;

               font-weight: 700;

               text-transform: uppercase;

               letter-spacing: 1.5px;
            }


            .taxi-default-content h3 {
               margin: 0 0 9px;

               color: #ffffff;

               font-size: 28px;

               line-height: 1.2;

               font-weight: 700;
            }


            .taxi-default-price {
               display: flex;

               align-items: baseline;

               gap: 5px;
            }


            .taxi-default-price strong {
               color: #ffffff;

               font-size: 23px;

               font-weight: 700;
            }


            .taxi-default-price span {
               color:
                  rgba(255,255,255,.75);

               font-size: 11px;
            }


            /* =========================================
               HOVER PANEL
            ========================================= */

            .taxi-hover-content {
               position: absolute;

               left: 0;
               right: 0;
               bottom: 0;

               z-index: 6;

               padding: 27px 24px 22px;

               color: #ffffff;

               background:
                  linear-gradient(
                     135deg,
                     rgba(91,16,232,.98),
                     rgba(63,10,168,.98)
                  );

               border-top:
                  3px solid #ff9d00;

               transform:
                  translateY(105%);

               opacity: 0;

               transition:
                  transform .65s
                  cubic-bezier(.22,1,.36,1),
                  opacity .35s ease;
            }


            .taxi-card:hover
            .taxi-hover-content {
               transform:
                  translateY(0);

               opacity: 1;
            }


            .taxi-card:hover
            .taxi-default-content {
               opacity: 0;

               transform:
                  translateY(18px);
            }


            /* =========================================
               HOVER TITLE
            ========================================= */

            .taxi-hover-inner h3 {
               margin: 0 0 8px;

               color: #ffffff;

               font-size: 24px;

               line-height: 1.2;

               font-weight: 700;
            }


            .taxi-hover-inner p {
               margin: 0 0 18px;

               color:
                  rgba(255,255,255,.80);

               font-size: 11px;

               line-height: 1.6;
            }


            /* =========================================
               FEATURES
            ========================================= */

            .taxi-features {
               display: grid;

               grid-template-columns:
                  repeat(3, 1fr);

               gap: 8px;

               padding-bottom: 17px;

               margin-bottom: 16px;

               border-bottom:
                  1px solid
                  rgba(255,255,255,.20);
            }


            .taxi-feature {
               display: flex;

               align-items: center;

               gap: 8px;

               min-width: 0;
            }


            .taxi-feature-icon {
               width: 35px;
               height: 35px;

               flex-shrink: 0;

               display: flex;

               align-items: center;

               justify-content: center;

               color: #ff9d00;

               background:
                  rgba(255,255,255,.12);

               border:
                  1px solid
                  rgba(255,255,255,.15);

               border-radius: 50%;
            }


            .taxi-feature small {
               display: block;

               margin-bottom: 2px;

               color:
                  rgba(255,255,255,.55);

               font-size: 8px;
            }


            .taxi-feature strong {
               display: block;

               color: #ffffff;

               font-size: 9px;

               font-weight: 600;

               white-space: nowrap;

               overflow: hidden;

               text-overflow: ellipsis;
            }


            /* =========================================
               BOTTOM
            ========================================= */

            .taxi-bottom {
               display: flex;

               align-items: center;

               justify-content: space-between;

               gap: 15px;
            }


            .taxi-price {
               display: flex;

               align-items: baseline;

               gap: 5px;
            }


            .taxi-price small {
               color:
                  rgba(255,255,255,.60);

               font-size: 9px;
            }


            .taxi-price strong {
               color: #ffffff;

               font-size: 24px;

               font-weight: 700;
            }


            .taxi-price span {
               color:
                  rgba(255,255,255,.65);

               font-size: 10px;
            }


            /* =========================================
               BOOK BUTTON
            ========================================= */

            .taxi-book-btn {
               display: inline-flex;

               align-items: center;

               justify-content: center;

               gap: 8px;

               padding: 10px 16px;

               color: #ffffff;

               background: #ff9d00;

               border-radius: 6px;

               text-decoration: none;

               font-size: 11px;

               font-weight: 700;

               box-shadow:
                  0 7px 18px
                  rgba(255,157,0,.25);

               transition:
                  all .3s ease;
            }


            .taxi-book-btn span {
               font-size: 17px;

               transition:
                  transform .3s ease;
            }


            .taxi-book-btn:hover {
               color: #ffffff;

               background: #ffae22;

               transform:
                  translateY(-2px);
            }


            .taxi-book-btn:hover span {
               transform:
                  translateX(4px);
            }


            /* =========================================
               ARROWS
            ========================================= */

            .taxi-arrow {
               position: absolute;

               top: 50%;

               z-index: 20;

               width: 50px;
               height: 50px;

               display: flex;

               align-items: center;

               justify-content: center;

               padding: 0;

               color: #5b10e8;

               background: #ffffff;

               border:
                  2px solid #eee8ff;

               border-radius: 50%;

               cursor: pointer;

               box-shadow:
                  0 8px 25px
                  rgba(91,16,232,.18);

               transform:
                  translateY(-50%);

               transition:
                  all .3s ease;
            }


            .taxi-arrow:hover {
               color: #ffffff;

               background: #5b10e8;

               border-color: #5b10e8;

               transform:
                  translateY(-50%)
                  scale(1.08);

               box-shadow:
                  0 10px 30px
                  rgba(91,16,232,.30);
            }


            .taxi-arrow svg {
               transition:
                  transform .3s ease;
            }


            .taxi-prev {
               left: -13px;
            }


            .taxi-next {
               right: -13px;
            }


            .taxi-prev:hover svg {
               transform:
                  translateX(-2px);
            }


            .taxi-next:hover svg {
               transform:
                  translateX(2px);
            }


            /* =========================================
               TABLET
            ========================================= */

            @media (max-width: 991px) {

               .taxi-section {
                  padding: 70px 0;
               }


               .taxi-heading h2 {
                  font-size: 36px;
               }


               .taxi-card {
                  height: 390px;
               }


               .taxi-prev {
                  left: -3px;
               }


               .taxi-next {
                  right: -3px;
               }

            }


            /* =========================================
               MOBILE
            ========================================= */

            @media (max-width: 767px) {

               .taxi-section {
                  padding: 60px 0;
               }


               .taxi-heading {
                  display: block;

                  margin-bottom: 30px;
               }


               .taxi-heading h2 {
                  font-size: 30px;
               }


               .taxi-heading p {
                  font-size: 13px;
               }


               .taxi-view-btn {
                  margin-top: 20px;
               }


               .taxi-slider-wrap {
                  padding: 0 3px;
               }


               .taxi-card {
                  height: 390px;
               }


               .taxi-arrow {
                  width: 40px;
                  height: 40px;
               }


               .taxi-prev {
                  left: 0;
               }


               .taxi-next {
                  right: 0;
               }


               /* Mobile par content visible */

               .taxi-hover-content {
                  transform:
                     translateY(0);

                  opacity: 1;
               }


               .taxi-default-content {
                  opacity: 0;
               }

            }

         `}</style>

      </section>
   );
};

export default TaxiSlider;