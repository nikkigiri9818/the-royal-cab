"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import listing_data, { DataType } from "@/data/ListingData";
import { addToWishlist } from "@/redux/features/wishlistSlice";

import shape_1 from "@/assets/img/listing/about-shape.png";
import shape_2 from "@/assets/img/listing/about-shape-2.png";
import shape_3 from "@/assets/img/listing/about-shape-3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Listing = () => {
   const dispatch = useDispatch();

   const handleAddToWishlist = (item: DataType) => {
      dispatch(addToWishlist(item));
   };

   return (
      <section className="tg-listing-area tg-grey-bg pt-140 pb-110 p-relative z-index-9">

         {/* Background Shapes */}
         <Image
            className="tg-listing-shape d-none d-lg-block"
            src={shape_1}
            alt=""
         />

         <Image
            className="tg-listing-shape-2 d-none d-xl-block"
            src={shape_2}
            alt=""
         />

         <Image
            className="tg-listing-shape-3 d-none d-lg-block"
            src={shape_3}
            alt=""
         />

         <div className="container">

            {/* Section Heading */}
            <div className="row">
               <div className="col-12">

                  <div className="tg-listing-section-title text-center mb-45">

                     <h5
                        className="tg-section-subtitle wow fadeInUp"
                        data-wow-delay=".2s"
                        data-wow-duration=".6s"
                     >
                        Most Popular Tour Packages
                     </h5>

                     <h2
                        className="mb-15 wow fadeInUp"
                        data-wow-delay=".3s"
                        data-wow-duration=".7s"
                     >
                        Something Amazing Waiting For You
                     </h2>

                     <p
                        className="wow fadeInUp"
                        data-wow-delay=".4s"
                        data-wow-duration=".8s"
                     >
                        Discover unforgettable journeys across India with our
                        specially designed tour packages.
                     </p>

                  </div>

               </div>
            </div>

            {/* Slider */}
            <div className="row">
               <div className="col-12">

                  <div className="tg-popular-tour-slider-wrapper p-relative">

                     <Swiper
                        className="tg-popular-tour-slider"
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={4}
                        loop={true}
                        speed={700}
                        autoplay={{
                           delay: 4000,
                           disableOnInteraction: false,
                        }}
                        navigation={{
                           prevEl: ".popular-tour-prev",
                           nextEl: ".popular-tour-next",
                        }}
                        pagination={{
                           el: ".popular-tour-pagination",
                           clickable: true,
                        }}
                        breakpoints={{
                           0: {
                              slidesPerView: 1,
                              spaceBetween: 15,
                           },
                           576: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                           },
                           768: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                           },
                           992: {
                              slidesPerView: 3,
                              spaceBetween: 24,
                           },
                           1200: {
                              slidesPerView: 4,
                              spaceBetween: 24,
                           },
                        }}
                     >

                        {listing_data.map((item) => (

                           <SwiperSlide key={item.id}>

                              <div className="tg-listing-card-item mb-30" style={{height:"540px",width:"100%"}}>

                                 {/* Card Image */}
                                 <div className="tg-listing-card-thumb fix mb-15 p-relative">

                                    <Link href={`/tour-services/${item.slug}`}>

                                       <Image
                                          className="tg-card-border w-100"
                                          src={item.thumb}
                                          alt={item.title}
                                          height={230}   
                                       />

                                    </Link>

                                    {/* Wishlist */}
                                    <div className="tg-listing-item-wishlist">

                                       <button
                                          type="button"
                                          onClick={() =>
                                             handleAddToWishlist(item)
                                          }
                                          aria-label="Add to wishlist"
                                          style={{
                                             border: "none",
                                             background: "transparent",
                                             cursor: "pointer",
                                          }}
                                       >

                                          <svg
                                             width="20"
                                             height="18"
                                             viewBox="0 0 20 18"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M10.5167 16.3416C10.2334 16.4416 9.76675 16.4416 9.48341 16.3416C7.06675 15.5166 1.66675 12.075 1.66675 6.24165C1.66675 3.66665 3.74175 1.58331 6.30008 1.58331C7.81675 1.58331 9.15841 2.31665 10.0001 3.44998C10.8417 2.31665 12.1917 1.58331 13.7001 1.58331C16.2584 1.58331 18.3334 3.66665 18.3334 6.24165C18.3334 12.075 12.9334 15.5166 10.5167 16.3416Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>

                                       </button>

                                    </div>

                                 </div>

                                 {/* Card Content */}
                                 <div className="tg-listing-card-content">

                                    <h4 className="tg-listing-card-title">

                                       <Link  href={`/tour-services/${item.slug}`}>
                                          {item.title}
                                       </Link>

                                    </h4>

                                    <div className="tg-listing-card-duration-tour">

                                       {/* Location */}
                                       <span className="tg-listing-card-duration-map mb-5">

                                          <svg
                                             width="13"
                                             height="16"
                                             viewBox="0 0 13 16"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M12.3329 6.7071C12.3329 11.2324 6.55512 15.1111 6.55512 15.1111C6.55512 15.1111 0.777344 11.2324 0.777344 6.7071C0.777344 5.16402 1.38607 3.68414 2.46962 2.59302C3.55316 1.5019 5.02276 0.888916 6.55512 0.888916C8.08748 0.888916 9.55708 1.5019 10.6406 2.59302C11.7242 3.68414 12.3329 5.16402 12.3329 6.7071Z"
                                                stroke="currentColor"
                                                strokeWidth="1.15556"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />

                                             <path
                                                d="M6.55512 8.64649C7.61878 8.64649 8.48105 7.7782 8.48105 6.7071C8.48105 5.636 7.61878 4.7677 6.55512 4.7677C5.49146 4.7677 4.6292 5.636 4.6292 6.7071C4.6292 7.7782 5.49146 8.64649 6.55512 8.64649Z"
                                                stroke="currentColor"
                                                strokeWidth="1.15556"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>

                                          {item.location}

                                       </span>

                                       {/* Duration */}
                                       <span className="tg-listing-card-duration-time">

                                          <svg
                                             width="16"
                                             height="16"
                                             viewBox="0 0 16 16"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M8.00175 3.73329V7.99996L10.8462 9.42218"
                                                stroke="currentColor"
                                                strokeWidth="1.06667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />

                                             <path
                                                d="M15.1128 8.00003C15.1128 11.9274 11.9291 15.1111 8.00174 15.1111C4.07438 15.1111 0.890625 11.9274 0.890625 8.00003C0.890625 4.07267 4.07438 0.888916 8.00174 0.888916C11.9291 0.888916 15.1128 4.07267 15.1128 8.00003Z"
                                                stroke="currentColor"
                                                strokeWidth="1.06667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>

                                          {item.time}

                                       </span>

                                    </div>

                                 </div>

                                 {/* Price + Rating */}
                                 <div className="tg-listing-card-price d-flex align-items-end justify-content-between">

                                    <div className="tg-listing-card-price-wrap price-bg d-flex align-items-center">

                                       <span className="tg-listing-card-currency-amount mr-5">

                                          <span className="currency-symbol">
                                             $
                                          </span>

                                          {item.price}

                                       </span>

                                       <span className="tg-listing-card-activity-person">
                                          /Person
                                       </span>

                                    </div>

                                    <div className="tg-listing-card-review space">

                                       <span className="tg-listing-rating-icon">
                                          <i className="fa-sharp fa-solid fa-star"></i>
                                       </span>

                                       <span className="tg-listing-rating-percent">
                                          ({item.review})
                                       </span>

                                    </div>

                                 </div>

                              </div>

                           </SwiperSlide>

                        ))}

                     </Swiper>

                     {/* Left Arrow */}
                     <button
                        type="button"
                        className="popular-tour-prev"
                        aria-label="Previous tour"
                     >
                        <i className="fa-sharp fa-regular fa-arrow-left"></i>
                     </button>

                     {/* Right Arrow */}
                     <button
                        type="button"
                        className="popular-tour-next"
                        aria-label="Next tour"
                     >
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                     </button>

                  </div>

                  {/* Pagination */}
                  <div className="popular-tour-pagination swiper-pagination mt-20"></div>

               </div>
            </div>

         </div>

         {/* Slider Arrow CSS */}
         <style jsx>{`
            .tg-popular-tour-slider-wrapper {
               padding: 0 5px;
            }

            .tg-popular-tour-slider {
               overflow: hidden;
            }

            .popular-tour-prev,
            .popular-tour-next {
               position: absolute;
               top: 42%;
               transform: translateY(-50%);
               width: 48px;
               height: 48px;
               border-radius: 50%;
               border: 1px solid #e5e5e5;
               background: #ffffff;
               color: #1b1b1b;
               display: flex;
               align-items: center;
               justify-content: center;
               z-index: 10;
               cursor: pointer;
               transition: all 0.3s ease;
               box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
            }

            .popular-tour-prev {
               left: -24px;
            }

            .popular-tour-next {
               right: -24px;
            }

            .popular-tour-prev:hover,
            .popular-tour-next:hover {
               background: #111111;
               color: #ffffff;
               border-color: #111111;
            }

            .popular-tour-prev i,
            .popular-tour-next i {
               font-size: 16px;
            }

            .popular-tour-pagination {
               position: relative !important;
               bottom: auto !important;
               left: auto !important;
               width: 100% !important;
               text-align: center;
            }

            @media (max-width: 1199px) {
               .popular-tour-prev {
                  left: -10px;
               }

               .popular-tour-next {
                  right: -10px;
               }
            }

            @media (max-width: 767px) {
               .tg-popular-tour-slider-wrapper {
                  padding: 0;
               }

               .popular-tour-prev,
               .popular-tour-next {
                  width: 40px;
                  height: 40px;
               }

               .popular-tour-prev {
                  left: 5px;
               }

               .popular-tour-next {
                  right: 5px;
               }
            }
         `}</style>

      </section>
   );
};

export default Listing;