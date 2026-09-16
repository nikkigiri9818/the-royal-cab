

"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import Button from "@/components/common/Button"
import Link from "next/link"

interface SlideContent {
   thumb: string;
   subtitle: string;
   title: string;
   desc: string;
   priceLabel: string;
   currency: string;
   price: string;
   unit: string;
   btnText: string;
   btnLink: string;
}

const banner_data: SlideContent[] = [
   {
      thumb: "/assets/img/hero/hero-1.jpg",
      subtitle: "* Reliable Cabs, Available 24/7",
      title: "Your Journey, Our Royalty",
      desc: "Premium taxi, luxury car rentals & curated tours <br /> across Rajasthan and Pan India",
      priceLabel: "Taxi Fares Starting From",
      currency: "₹",
      price: "10",
      unit: "/km",
      btnText: "Book a Taxi",
      btnLink: "/taxi-services",
   },
   {
      thumb: "/assets/img/hero/hero-2.jpg",
      subtitle: "* Mercedes, BMW, Audi & More",
      title: "Travel in Style & Comfort",
      desc: "Premium luxury car rentals for weddings, <br /> corporate travel and special occasions",
      priceLabel: "Luxury Cars Starting From",
      currency: "₹",
      price: "25",
      unit: "/km",
      btnText: "View Luxury Cars",
      btnLink: "/luxury-cars",
   },
   {
      thumb: "/assets/img/hero/hero-3.jpg",
      subtitle: "* Rajasthan & Pan India Tour Packages",
      title: "Explore Royal Rajasthan & Beyond",
      desc: "Curated multi-day tour packages across forts, deserts, <br /> lakes, and heritage cities of India",
      priceLabel: "Tour Packages Starting From",
      currency: "$",
      price: "299",
      unit: "/person",
      btnText: "Explore Tours",
      btnLink: "/tour-services",
   },
   {
      thumb: "/assets/img/hero/hero-4.jpg",
      subtitle: "* Airport Pickup & Drop Available",
      title: "Smooth Transfers, Every Time",
      desc: "On-time airport pickup and drop with <br /> professional, government-verified drivers",
      priceLabel: "Airport Transfers Starting From",
      currency: "₹",
      price: "1500",
      unit: "/trip",
      btnText: "Book Now",
      btnLink: "/taxi-services",
   },
   {
      thumb: "/assets/img/hero/hero-5.jpg",
      subtitle: "* One-Way & Round Trip Options",
      title: "Discover Jaipur & Nearby Cities",
      desc: "Jaipur Darshan, local sightseeing and <br /> one-way outstation taxi services",
      priceLabel: "One-Way Trips Starting From",
      currency: "₹",
      price: "1500",
      unit: "/trip",
      btnText: "View Routes",
      btnLink: "/tour-services",
   },
];

const setting = {
   slidesPerView: 1,
   loop: true,
   spaceBetween: 0,
   speed: 2000,
   effect: 'fade',
   navigation: {
      prevEl: '.tg-hero-prev',
      nextEl: '.tg-hero-next',
   },
   autoplay: {
      delay: 3500,
      disableOnInteraction: false
   },
};

const Banner = () => {
   return (
      <div className="tg-hero-area fix p-relative">
         <div className="tg-hero-top-shadow"></div>
         <div className="shop-slider-wrapper">
            <Swiper {...setting} modules={[Navigation, EffectFade, Autoplay]} className="swiper-container tg-hero-slider-active">
               {banner_data.map((slide, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                     <div className="tg-hero-bg">
                        <div className="tg-hero-thumb" style={{ backgroundImage: `url(${slide.thumb})` }}></div>
                     </div>

                     <div className="tg-hero-content-area">
                        <div className="container">
                           <div className="p-relative">
                              <div className="row justify-content-center">
                                 <div className="col-xl-10">
                                    <div className="tg-hero-content text-center">
                                       <div className="tg-hero-title-box mb-10">
                                          <h5 className="tg-hero-subtitle mb-5 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".7s">{slide.subtitle}</h5>
                                          <h2 className="tg-hero-title wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">{slide.title}</h2>
                                          <p className="tg-hero-para mb-0  wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1.1s" dangerouslySetInnerHTML={{ __html: slide.desc }} />
                                       </div>
                                       <div className="tg-hero-price-wrap mb-35 d-flex align-items-center justify-content-center  wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1.3s">
                                          <p className="mr-15">{slide.priceLabel}</p>
                                          <div className="tg-hero-price d-flex">
                                             <span className="hero-dolar">{slide.currency}</span>
                                             <span className="hero-price">{slide.price}</span>
                                             <span className="night">{slide.unit}</span>
                                          </div>
                                       </div>
                                       <div className="tg-hero-btn-box  wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1.5s">
                                          <Link href={slide.btnLink} className="tg-btn tg-btn-switch-animation">
                                             <Button text={slide.btnText} />
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>

            <div className="tg-hero-arrow-box d-none d-sm-block">
               <button className="tg-hero-next">
                  <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18.0274 7.5H0.972625M0.972625 7.5L7.25 1.22263M0.972625 7.5L7.25 13.7774" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
               <button className="tg-hero-prev">
                  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.47263 7.5H18.5274M18.5274 7.5L12.25 1.22263M18.5274 7.5L12.25 13.7774" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            </div>
         </div>

         <div className="tg-hero-bottom-shape d-none d-md-block">
            <span>
               <svg width="432" height="298" viewBox="0 0 432 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="line-1" opacity="0.4" d="M39.6062 428.345C4.4143 355.065 -24.2999 203.867 142.379 185.309C350.726 162.111 488.895 393.541 289.171 313.515C129.391 249.494 458.204 85.4772 642.582 11.4713" stroke="white" strokeWidth="24" />
               </svg>
            </span>
         </div>
         <div className="tg-hero-bottom-shape-2 d-none d-md-block">
            <span>
               <svg width="154" height="321" viewBox="0 0 154 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="line-1" opacity="0.4" d="M144.616 328.905C116.117 300.508 62.5986 230.961 76.5162 179.949C93.9132 116.184 275.231 7.44493 -65.0181 12.8762" stroke="white" strokeWidth="24" />
               </svg>
            </span>
         </div>
      </div>
   )
}

export default Banner