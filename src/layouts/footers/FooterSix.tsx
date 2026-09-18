"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/img/logo/logo-5.png";

const FooterSix = () => {
   return (
      <footer>
         <div
            className="tg-footer-area pt-100 include-bg"
            style={{
               backgroundImage: `linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.88)), url(/assets/img/footer/footer-2.jpg)`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
            }}
         >
            <div className="container">
               <div className="tg-footer-top pb-40">
                  <div className="row">

                     {/* About */}
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="tg-footer-widget mb-40">

                           <div className="tg-footer-logo mb-20">
                              <Link href="/">
                                 <Image
                                    src={logo}
                                    width={100}
                                    height={80}
                                    alt="The Royal Cars"
                                    style={{
                                       objectFit: "contain",
                                       objectPosition: "left center",
                                    }}
                                 />
                              </Link>
                           </div>

                           <p className="mb-20">
                              The Royal Cars provides comfortable and reliable
                              taxi services in Jaipur and across Rajasthan.
                              From airport transfers and local rides to
                              one-way taxis and Rajasthan tour packages,
                              we make your journey simple and stress-free.
                           </p>

                           <div className="tg-footer-social">
                              <Link href="#" aria-label="Facebook">
                                 <i className="fa-brands fa-facebook-f"></i>
                              </Link>

                              <Link href="#" aria-label="Instagram">
                                 <i className="fa-brands fa-instagram"></i>
                              </Link>

                              <Link
                                 href="https://wa.me/919286735906"
                                 aria-label="WhatsApp"
                              >
                                 <i className="fa-brands fa-whatsapp"></i>
                              </Link>

                              <Link href="#" aria-label="YouTube">
                                 <i className="fa-brands fa-youtube"></i>
                              </Link>
                           </div>

                        </div>
                     </div>


                     {/* Quick Links */}
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="tg-footer-widget tg-footer-link ml-50 mb-40">

                           <h3 className="tg-footer-widget-title mb-25">
                              Quick Links
                           </h3>

                           <ul>
                              <li>
                                 <Link href="/">Home</Link>
                              </li>

                              <li>
                                 <Link href="/about">About Us</Link>
                              </li>

                              <li>
                                 <Link href="/contact">Contact Us</Link>
                              </li>

                              <li>
                                 <Link href="/taxi-services">
                                    Taxi Services
                                 </Link>
                              </li>

                              <li>
                                 <Link href="/tour-services">
                                    Tour Services
                                 </Link>
                              </li>

                              <li>
                                 <Link href="/one-way-tours">
                                    One-Way Tours
                                 </Link>
                              </li>
                           </ul>

                        </div>
                     </div>


                     {/* Our Services */}
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="tg-footer-widget tg-footer-link mb-40">

                           <h3 className="tg-footer-widget-title mb-25">
                              Our Services
                           </h3>

                           <ul>
                              {/* <li>
                                 <Link href="/taxi-services">
                                    Airport Transfer
                                 </Link>
                              </li> */}

                              <li>
                                 <Link href="/taxi-services">
                                    Local Taxi Service
                                 </Link>
                              </li>

                              <li>
                                 <Link href="/one-way">
                                    One-Way Taxi
                                 </Link>
                              </li>

                              <li>
                                 <Link href="/luxury-cars">
                                    Luxury Cars
                                 </Link>
                              </li>

                              <li>
                                 <Link href="/tour">
                                    Rajasthan Tour Packages
                                 </Link>
                              </li>

                              <li>
                                 <Link href="/tour">
                                    Rajasthan Sightseeing
                                 </Link>
                              </li>
                           </ul>

                        </div>
                     </div>


                     {/* Contact Information */}
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="tg-footer-widget tg-footer-info mb-40">

                           <h3 className="tg-footer-widget-title mb-25">
                              Contact Us
                           </h3>

                           <ul>

                              {/* Address */}
                              <li>
                                 <Link
                                    className="d-flex"
                                    href="https://www.google.com/maps/search/?api=1&query=G-28+Upsana+Apna+Bazar+Lata+Circle+Jhotwara+Jaipur"
                                    target="_blank"
                                 >
                                    <span className="mr-15">
                                       <i className="fa-solid fa-location-dot"></i>
                                    </span>

                                    <span>
                                       G-28, Upsana Apna Bazar,
                                       <br />
                                       Lata Circle, Jhotwara,
                                       <br />
                                       Jaipur, Rajasthan
                                    </span>
                                 </Link>
                              </li>


                              {/* Phone */}
                              <li>
                                 <Link
                                    className="d-flex"
                                    href="tel:+917849993464"
                                 >
                                    <span className="mr-15">
                                       <i className="fa-solid fa-phone"></i>
                                    </span>

                                    <span>
                                       +91 78499 93464
                                    </span>
                                 </Link>
                              </li>


                              {/* WhatsApp */}
                              <li>
                                 <Link
                                    className="d-flex"
                                    href="https://wa.me/919286735906"
                                    target="_blank"
                                 >
                                    <span className="mr-15">
                                       <i className="fa-brands fa-whatsapp"></i>
                                    </span>

                                    <span>
                                       +91 92867 35906
                                    </span>
                                 </Link>
                              </li>


                              {/* Email */}
                              <li>
                                 <Link
                                    className="d-flex"
                                    href="mailto:theroyalcabs16@gmail.com"
                                 >
                                    <span className="mr-15">
                                       <i className="fa-solid fa-envelope"></i>
                                    </span>

                                    <span>
                                       theroyalcabs16@gmail.com
                                    </span>
                                 </Link>
                              </li>

                           </ul>

                        </div>
                     </div>

                  </div>
               </div>
            </div>


            {/* Copyright */}
            <div className="tg-footer-copyright text-center">
               <span>
                  © {new Date().getFullYear()}{" "}
                  <Link href="/">
                     The Royal Cars
                  </Link>
                  {" "} | All Rights Reserved
               </span>
            </div>

         </div>
      </footer>
   );
};

export default FooterSix;