// import Image from 'next/image'
// import Link from 'next/link'
// import Button from '@/components/common/Button'

// import about_thumb1 from "@/assets/img/about/about.jpg"
// import about_thumb2 from "@/assets/img/about/about-2.jpg"
// import about_thumb3 from "@/assets/img/about/about-3.jpg"
// import about_thumb4 from "@/assets/img/about/about-4.jpg"
// import about_logo from "@/assets/img/about/logo.png"

// const About = () => {
//    return (
//       <div className="tg-about-area pb-100">
//          <div className="container">
//             <div className="row">
//                <div className="col-lg-3">
//                   <div className="tg-about-thumb-wrap mb-30">
//                      <Image className="w-100 tg-round-15 mb-85 wow fadeInLeft" data-wow-delay=".3s" data-wow-duration=".7s" src={about_thumb1} alt="about" />
//                      <Image className="tg-about-thumb-2 tg-round-15 wow fadeInLeft" data-wow-delay=".4s" data-wow-duration=".9s" src={about_thumb2} alt="about" />
//                   </div>
//                </div>
//                <div className="col-lg-6 mb-30">
//                   <div className="tg-about-content text-center">
//                      <div className="tg-about-logo mb-30 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".5s">
//                         <Image src={about_logo} alt="logo" />
//                      </div>
//                      <div className="tg-about-section-title mb-25">
//                         <h5 className="tg-section-subtitle wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".6s">Most Popular Tour</h5>
//                         <h2 className="mb-15 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".7s">Let’s Discover The World With Our Excellent Eyes</h2>
//                         <p className="text-capitalize wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".8s">Whether you&apos;re looking for a romantic getawaamily-friendly
//                            solo journey to explore the world, a travel agency can provide
//                            tailored itinerary that exceeds your expectations.</p>
//                      </div>
//                      <div className="tp-about-btn-wrap wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".9s">
//                         <Link href="/tour-details" className="tg-btn tg-btn-transparent tg-btn-switch-animation">
//                            <Button text="Take a Tour" />
//                         </Link>
//                      </div>
//                   </div>
//                </div>
//                <div className="col-lg-3">
//                   <div className="tg-about-thumb-wrap  mb-30">
//                      <Image className="w-100 tg-round-15 mb-85 wow fadeInRight" data-wow-delay=".3s" data-wow-duration=".7s" src={about_thumb3} alt="about" />
//                      <Image className="tg-about-thumb-4 tg-round-15 wow fadeInRight" data-wow-delay=".4s" data-wow-duration=".9s" src={about_thumb4} alt="about" />
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default About



import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/common/Button'

import about_thumb1 from "@/assets/img/about/about.jpg"     // large image — luxury car / royal fleet
import about_thumb2 from "@/assets/img/about/about-2.jpg"   // small overlapping image — driver / interior

const About = () => {
   return (
      <div className="tg-about-area">
         <div className="container px-0 py-10">
            <div className="row g-0 tg-about-row">

               {/* LEFT — Navy content panel */}
               <div className="col-lg-5">
                  <div className="tg-about-panel h-100 d-flex flex-column justify-content-center">
                     <div className="tg-about-panel-inner">
                        <h2 className="tg-about-heading mb-20 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".7s">
                           Royal Heritage, Modern Comfort
                        </h2>
                        <p className="tg-about-para mb-30 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".8s">
                           The Royal Cars has been driving Jaipur and Rajasthan since 2015 — government-verified
                           drivers, a well-maintained fleet, and routes we know like our own streets.
                           From an airport pickup to a two-week tour across the desert, we plan it the way
                           we'd plan it for our own family.
                        </p>
                        <div className="tg-about-stats d-flex mb-30 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".9s">
                           <div className="tg-about-stat pr-30">
                              <span className="tg-about-stat-num">9+</span>
                              <span className="tg-about-stat-label">Years on the Road</span>
                           </div>
                           <div className="tg-about-stat pl-30">
                              <span className="tg-about-stat-num">40+</span>
                              <span className="tg-about-stat-label">Cities Covered</span>
                           </div>
                        </div>
                        <div className="tg-about-btn-wrap wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                           <Link href="/about-us" className="tg-btn tg-btn-switch-animation">
                              <Button text="Meet The Fleet" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

               {/* RIGHT — Image composition with floating stat badge */}
               <div className="col-lg-7">
                  <div className="tg-about-visual p-relative h-100">
                     <Image
                        className="tg-about-main-img wow fadeInRight"
                        data-wow-delay=".3s"
                        data-wow-duration=".8s"
                        src={about_thumb1}
                        alt="The Royal Cars luxury fleet"
                        fill
                        sizes="(max-width: 991px) 100vw, 58vw"
                        style={{ objectFit: 'cover' }}
                     />
                     <div className="tg-about-overlay-img-wrap wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".9s">
                        <Image
                           className="tg-about-overlay-img"
                           src={about_thumb2}
                           alt="The Royal Cars driver and interior"
                           fill
                           sizes="220px"
                           style={{ objectFit: 'cover' }}
                        />
                     </div>
                     <div className="tg-about-badge wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                        <span className="tg-about-badge-num">12,000+</span>
                        <span className="tg-about-badge-label">KM Driven Every Day</span>
                     </div>
                  </div>
               </div>

            </div>
         </div>

         <style jsx>{`
            .tg-about-row {
               min-height: 640px;
            }
            .tg-about-panel {
               background: #16213b;
               padding: 80px 60px;
            }
            .tg-about-panel-inner {
               max-width: 460px;
            }
            .tg-about-heading {
               font-family: "Fraunces", serif;
               font-weight: 600;
               font-size: 42px;
               line-height: 1.15;
               color: #f6f1e4;
            }
            .tg-about-para {
               font-family: "Work Sans", sans-serif;
               font-size: 16px;
               line-height: 1.7;
               color: #c7ccda;
               max-width: 60ch;
            }
            .tg-about-stats {
               border-top: 1px solid rgba(246, 241, 228, 0.15);
               padding-top: 25px;
            }
            .tg-about-stat {
               display: flex;
               flex-direction: column;
            }
            .tg-about-stat.pr-30 {
               padding-right: 30px;
               border-right: 1px solid rgba(246, 241, 228, 0.15);
            }
            .tg-about-stat.pl-30 {
               padding-left: 30px;
            }
            .tg-about-stat-num {
               font-family: "Fraunces", serif;
               font-size: 32px;
               font-weight: 600;
               color: #c9a227;
               line-height: 1;
            }
            .tg-about-stat-label {
               font-family: "Work Sans", sans-serif;
               font-size: 13px;
               color: #c7ccda;
               margin-top: 6px;
            }

            .tg-about-visual {
               overflow: hidden;
            }
            .tg-about-main-img {
               object-fit: cover;
            }

            .tg-about-overlay-img-wrap {
               position: absolute;
               width: 220px;
               height: 220px;
               left: -40px;
               bottom: 60px;
               border: 6px solid #f6f1e4;
               border-radius: 6px;
               overflow: hidden;
               box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
            }

            .tg-about-badge {
               position: absolute;
               right: 40px;
               bottom: 40px;
               background: #7a1f2b;
               border: 1px solid #c9a227;
               padding: 18px 26px;
               border-radius: 4px;
               display: flex;
               flex-direction: column;
               min-width: 180px;
               z-index: 2;
            }
            .tg-about-badge-num {
               font-family: "Fraunces", serif;
               font-size: 26px;
               font-weight: 600;
               color: #f6f1e4;
               line-height: 1;
            }
            .tg-about-badge-label {
               font-family: "Work Sans", sans-serif;
               font-size: 12px;
               color: #e9cfa8;
               margin-top: 4px;
            }

            @media (max-width: 991px) {
               .tg-about-row {
                  min-height: 0;
               }
               .tg-about-panel {
                  padding: 60px 30px;
               }
               .tg-about-heading {
                  font-size: 32px;
               }
               .tg-about-visual {
                  height: 480px;
               }
               .tg-about-overlay-img-wrap {
                  width: 140px;
                  height: 140px;
                  left: -20px;
                  bottom: 30px;
                  border-width: 4px;
               }
               .tg-about-badge {
                  right: 20px;
                  bottom: 20px;
                  padding: 12px 18px;
                  min-width: 140px;
               }
               .tg-about-badge-num {
                  font-size: 20px;
               }
            }

            @media (max-width: 767px) {
               .tg-about-visual {
                  height: 360px;
               }
               .tg-about-overlay-img-wrap {
                  display: none;
               }
            }
         `}</style>
      </div>
   )
}

export default About