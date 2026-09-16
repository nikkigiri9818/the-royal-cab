"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

import luxury_car_data from "@/data/LuxuryCarData";

import "swiper/css";


const LuxuryCars = () => {

   const swiperRef = useRef<SwiperType | null>(null);


   return (
      <section className="luxury-section">

         <div className="container">

            {/* =========================================
                SECTION HEADING
            ========================================= */}

            <div className="luxury-heading">

               <div className="luxury-heading-left">

                  <span className="luxury-subtitle">
                     Premium Travel Experience
                  </span>

                  <h2>
                     Travel in{" "}
                     <span>Luxury</span>
                  </h2>

                  <p>
                     Experience premium comfort and stylish journeys
                     with our specially selected luxury cars.
                  </p>

               </div>


               <Link
                  href="/luxury-car"
                  className="luxury-view-btn"
               >
                  View All Cars

                  <span>
                     →
                  </span>
               </Link>

            </div>


            {/* =========================================
                SLIDER
            ========================================= */}

            <div className="luxury-slider-wrap">


               {/* LEFT ARROW */}

               <button
                  type="button"
                  className="luxury-arrow luxury-prev"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Previous car"
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


               <Swiper
                  onSwiper={(swiper) => {
                     swiperRef.current = swiper;
                  }}

                  modules={[Autoplay]}

                  spaceBetween={24}

                  slidesPerView={1}

                  loop={true}

                  speed={800}

                  autoplay={{
                     delay: 4500,
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

                  {luxury_car_data.map((item) => (

                     <SwiperSlide key={item.id}>

                        <div className="luxury-card">

                           {/* IMAGE */}

                           <div className="luxury-image">

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


                              {/* Purple overlay */}

                              <div className="luxury-gradient"></div>


                              {/* PREMIUM BADGE */}

                              <div className="luxury-badge">

                                 <span className="badge-dot"></span>

                                 Premium

                              </div>


                              {/* =================================
                                  DEFAULT CONTENT
                              ================================= */}

                              <div className="luxury-default-content">

                                 <span className="luxury-category">
                                    {item.category}
                                 </span>

                                 <h3>
                                    {item.title}
                                 </h3>

                                 <div className="luxury-default-price">

                                    <small>
                                       Starting from
                                    </small>

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

                              <div className="luxury-hover-content">

                                 <div className="luxury-hover-inner">


                                    <span className="luxury-category">
                                       {item.category}
                                    </span>


                                    <h3>
                                       {item.title}
                                    </h3>


                                    <p>
                                       {item.description}
                                    </p>


                                    {/* FEATURES */}

                                    <div className="luxury-features">


                                       {/* Seats */}

                                       <div className="luxury-feature">

                                          <div className="feature-icon">

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

                                       <div className="luxury-feature">

                                          <div className="feature-icon">

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


                                       {/* Luggage */}

                                       <div className="luxury-feature">

                                          <div className="feature-icon">

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


                                    {/* BOTTOM */}

                                    <div className="luxury-bottom">

                                       <div className="luxury-price">

                                          <small>
                                             From
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
                                          className="luxury-book"
                                       >
                                          Book Now

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


               {/* RIGHT ARROW */}

               <button
                  type="button"
                  className="luxury-arrow luxury-next"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Next car"
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
             DESIGN CSS
         ========================================= */}

         <style jsx>{`

            /* =================================
               SECTION
            ================================= */

            .luxury-section {
               padding: 90px 0;
               background: #ffffff;
               overflow: hidden;
            }


            /* =================================
               HEADING
            ================================= */

            .luxury-heading {
               display: flex;
               align-items: flex-end;
               justify-content: space-between;

               gap: 30px;

               margin-bottom: 42px;
            }


            .luxury-subtitle {
               display: inline-block;

               margin-bottom: 9px;

               color: #5b10e8;

               font-size: 14px;
               font-weight: 600;

               font-style: italic;

               letter-spacing: .2px;
            }


            .luxury-heading h2 {
               margin: 0 0 12px;

               color: #111827;

               font-size: 42px;
               line-height: 1.12;

               font-weight: 700;
            }


            .luxury-heading h2 span {
               color: #5b10e8;
            }


            .luxury-heading p {
               max-width: 650px;

               margin: 0;

               color: #6b7280;

               font-size: 15px;
               line-height: 1.7;
            }


            /* =================================
               VIEW ALL BUTTON
            ================================= */

            .luxury-view-btn {
               display: inline-flex;

               align-items: center;
               gap: 11px;

               padding: 13px 19px;

               color: #fff;

               background: #5b10e8;

               border-radius: 7px;

               text-decoration: none;

               font-size: 13px;
               font-weight: 600;

               white-space: nowrap;

               box-shadow:
                  0 10px 25px
                  rgba(91,16,232,.18);

               transition: all .3s ease;
            }


            .luxury-view-btn span {
               font-size: 18px;

               transition:
                  transform .3s ease;
            }


            .luxury-view-btn:hover {
               color: #fff;

               background: #4a08c9;

               transform:
                  translateY(-2px);
            }


            .luxury-view-btn:hover span {
               transform:
                  translateX(4px);
            }


            /* =================================
               SLIDER
            ================================= */

            .luxury-slider-wrap {
               position: relative;

               padding: 0 10px;
            }


            /* =================================
               CARD
            ================================= */

            .luxury-card {
               position: relative;

               height: 395px;

               overflow: hidden;

               border-radius: 20px;

               background: #f5f3ff;

               box-shadow:
                  0 8px 35px
                  rgba(91,16,232,.08);
            }


            /* =================================
               IMAGE
            ================================= */

            .luxury-image {
               position: relative;

               width: 100%;
               height: 100%;

               overflow: hidden;
            }


            .luxury-image :global(img) {
               object-fit: cover;

               transition:
                  transform .9s
                  cubic-bezier(.22,1,.36,1);
            }


            .luxury-card:hover
            .luxury-image :global(img) {
               transform: scale(1.07);
            }


            /* =================================
               PURPLE GRADIENT
            ================================= */

            .luxury-gradient {
               position: absolute;

               inset: 0;

               z-index: 1;

               background:
                  linear-gradient(
                     to top,
                     rgba(28,8,70,.88) 0%,
                     rgba(91,16,232,.22) 45%,
                     rgba(91,16,232,0) 72%
                  );

               transition:
                  all .5s ease;
            }


            .luxury-card:hover
            .luxury-gradient {
               background:
                  linear-gradient(
                     to top,
                     rgba(55,8,130,.96) 0%,
                     rgba(91,16,232,.52) 70%,
                     rgba(91,16,232,.08) 100%
                  );
            }


            /* =================================
               BADGE
            ================================= */

            .luxury-badge {
               position: absolute;

               top: 18px;
               left: 18px;

               z-index: 5;

               display: flex;

               align-items: center;
               gap: 7px;

               padding: 7px 12px;

               color: #fff;

               background:
                  rgba(91,16,232,.9);

               border-radius: 30px;

               font-size: 10px;
               font-weight: 600;

               text-transform: uppercase;
               letter-spacing: 1px;

               box-shadow:
                  0 5px 15px
                  rgba(91,16,232,.25);
            }


            .badge-dot {
               width: 6px;
               height: 6px;

               border-radius: 50%;

               background: #ff9d00;
            }


            /* =================================
               DEFAULT CONTENT
            ================================= */

            .luxury-default-content {
               position: absolute;

               left: 24px;
               right: 24px;
               bottom: 23px;

               z-index: 4;

               color: #fff;

               transition:
                  opacity .35s ease,
                  transform .5s ease;
            }


            .luxury-category {
               display: block;

               margin-bottom: 7px;

               color: #ffb52e;

               font-size: 10px;
               font-weight: 600;

               text-transform: uppercase;

               letter-spacing: 1.4px;
            }


            .luxury-default-content h3 {
               margin: 0 0 10px;

               color: #fff;

               font-size: 27px;
               line-height: 1.18;

               font-weight: 700;
            }


            .luxury-default-price {
               display: flex;

               align-items: baseline;

               gap: 6px;
            }


            .luxury-default-price small {
               font-size: 10px;

               opacity: .75;
            }


            .luxury-default-price strong {
               color: #fff;

               font-size: 22px;
               font-weight: 700;
            }


            .luxury-default-price span {
               font-size: 11px;

               opacity: .75;
            }


            /* =================================
               HOVER PANEL
            ================================= */

            .luxury-hover-content {
               position: absolute;

               left: 0;
               right: 0;
               bottom: 0;

               z-index: 6;

               padding: 27px 24px 21px;

               color: #fff;

               background:
                  linear-gradient(
                     145deg,
                     rgba(91,16,232,.97),
                     rgba(66,8,175,.97)
                  );

               transform:
                  translateY(105%);

               opacity: 0;

               transition:
                  transform .65s
                  cubic-bezier(.22,1,.36,1),
                  opacity .35s ease;
            }


            .luxury-card:hover
            .luxury-hover-content {
               transform: translateY(0);

               opacity: 1;
            }


            .luxury-card:hover
            .luxury-default-content {
               opacity: 0;

               transform:
                  translateY(18px);
            }


            /* =================================
               HOVER CONTENT
            ================================= */

            .luxury-hover-inner {
               width: 100%;
            }


            .luxury-hover-inner h3 {
               margin: 0 0 8px;

               color: #fff;

               font-size: 24px;
               line-height: 1.2;

               font-weight: 700;
            }


            .luxury-hover-inner p {
               margin: 0 0 17px;

               color: rgba(255,255,255,.78);

               font-size: 11px;
               line-height: 1.55;
            }


            /* =================================
               FEATURES
            ================================= */

            .luxury-features {
               display: grid;

               grid-template-columns:
                  repeat(3, 1fr);

               gap: 8px;

               padding-bottom: 17px;

               border-bottom:
                  1px solid
                  rgba(255,255,255,.18);

               margin-bottom: 16px;
            }


            .luxury-feature {
               display: flex;

               align-items: center;

               gap: 7px;

               min-width: 0;
            }


            .feature-icon {
               width: 33px;
               height: 33px;

               flex-shrink: 0;

               display: flex;

               align-items: center;
               justify-content: center;

               color: #ff9d00;

               background:
                  rgba(255,255,255,.12);

               border-radius: 50%;
            }


            .luxury-feature small {
               display: block;

               margin-bottom: 2px;

               color:
                  rgba(255,255,255,.55);

               font-size: 8px;
            }


            .luxury-feature strong {
               display: block;

               overflow: hidden;

               color: #fff;

               font-size: 9px;

               font-weight: 600;

               text-overflow: ellipsis;

               white-space: nowrap;
            }


            /* =================================
               BOTTOM
            ================================= */

            .luxury-bottom {
               display: flex;

               align-items: center;

               justify-content: space-between;

               gap: 15px;
            }


            .luxury-price {
               display: flex;

               align-items: baseline;

               gap: 5px;
            }


            .luxury-price small {
               color:
                  rgba(255,255,255,.65);

               font-size: 9px;
            }


            .luxury-price strong {
               color: #fff;

               font-size: 24px;
            }


            .luxury-price span {
               color:
                  rgba(255,255,255,.65);

               font-size: 10px;
            }


            /* =================================
               BOOK BUTTON
            ================================= */

            .luxury-book {
               display: inline-flex;

               align-items: center;

               gap: 7px;

               padding: 10px 15px;

               color: #fff;

               background: #ff9d00;

               border-radius: 6px;

               text-decoration: none;

               font-size: 11px;

               font-weight: 700;

               box-shadow:
                  0 6px 15px
                  rgba(255,157,0,.2);

               transition:
                  all .3s ease;
            }


            .luxury-book span {
               font-size: 16px;

               transition:
                  transform .3s ease;
            }


            .luxury-book:hover {
               color: #fff;

               background: #ffad24;

               transform:
                  translateY(-2px);
            }


            .luxury-book:hover span {
               transform:
                  translateX(4px);
            }


            /* =================================
               ARROWS
            ================================= */

            .luxury-arrow {
               position: absolute;

               top: 50%;

               z-index: 20;

               width: 48px;
               height: 48px;

               display: flex;

               align-items: center;
               justify-content: center;

               padding: 0;

               color: #5b10e8;

               background: #fff;

               border: 2px solid
                  rgba(91,16,232,.1);

               border-radius: 50%;

               cursor: pointer;

               box-shadow:
                  0 8px 25px
                  rgba(91,16,232,.15);

               transform:
                  translateY(-50%);

               transition:
                  all .3s ease;
            }


            .luxury-arrow:hover {
               color: #fff;

               background: #5b10e8;

               border-color: #5b10e8;

               transform:
                  translateY(-50%)
                  scale(1.08);

               box-shadow:
                  0 10px 28px
                  rgba(91,16,232,.25);
            }


            .luxury-prev {
               left: -14px;
            }


            .luxury-next {
               right: -14px;
            }


            /* =================================
               TABLET
            ================================= */

            @media (max-width: 991px) {

               .luxury-section {
                  padding: 70px 0;
               }


               .luxury-heading h2 {
                  font-size: 36px;
               }


               .luxury-card {
                  height: 390px;
               }


               .luxury-prev {
                  left: -5px;
               }


               .luxury-next {
                  right: -5px;
               }

            }


            /* =================================
               MOBILE
            ================================= */

            @media (max-width: 767px) {

               .luxury-section {
                  padding: 60px 0;
               }


               .luxury-heading {
                  display: block;

                  margin-bottom: 30px;
               }


               .luxury-heading h2 {
                  font-size: 30px;
               }


               .luxury-heading p {
                  font-size: 13px;
               }


               .luxury-view-btn {
                  margin-top: 20px;
               }


               .luxury-slider-wrap {
                  padding: 0 3px;
               }


               .luxury-card {
                  height: 385px;
               }


               .luxury-arrow {
                  width: 40px;
                  height: 40px;
               }


               .luxury-prev {
                  left: 0;
               }


               .luxury-next {
                  right: 0;
               }


               /* Mobile: content always visible */

               .luxury-hover-content {
                  transform: translateY(0);

                  opacity: 1;
               }


               .luxury-default-content {
                  opacity: 0;
               }


               .luxury-features {
                  gap: 5px;
               }

            }

         `}</style>

      </section>
   );
};


export default LuxuryCars;