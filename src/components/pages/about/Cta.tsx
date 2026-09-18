import Button from "@/components/common/Button";
import Link from "next/link";

const Cta = () => {
   return (
      <div
         className="tg-banner-area tg-grey-bg tg-banner-4-spacing"
         style={{
            backgroundImage: "url(/assets/img/tour/udaipur.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            minHeight: "650px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
         }}
      >
         <div className="container">
            <div className="col-lg-12">
               <div className="tg-banner-2-content tg-banner-4-content tg-banner-6-content text-center">

                  <div className="tg-about-section-title mb-25">

                     <h5
                        className="tg-section-subtitle mb-20 wow fadeInUp"
                        data-wow-delay=".4s"
                        data-wow-duration=".9s"
                     >
                        Plan Your Rajasthan Journey
                     </h5>

                     <h2
                        className="tg-section-title-white mb-30 wow fadeInUp"
                        data-wow-delay=".5s"
                        data-wow-duration=".9s"
                     >
                        Explore Rajasthan With<br />
                        The Royal Cars
                     </h2>

                     <p
                        className="text-white wow fadeInUp mb-30"
                        data-wow-delay=".5s"
                        data-wow-duration=".9s"
                     >
                        From Jaipur to Udaipur, Jodhpur, Jaisalmer and beyond,
                        enjoy comfortable rides, experienced drivers and
                        reliable taxi services throughout Rajasthan.
                     </p>

                  </div>

                  <div
                     className="tp-banner-btn-wrap wow fadeInUp"
                     data-wow-delay=".6s"
                     data-wow-duration=".9s"
                  >
                     <Link
                        href="/tour-services"
                        className="tg-btn tg-btn-transparent tg-btn-switch-animation"
                     >
                        <Button text="Explore Our Tours" />
                     </Link>
                  </div>

               </div>
            </div>
         </div>

         <div className="tg-banner-bottom pb-100">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-lg-12">
                     <div
                        className="tg-banner-2-big-title text-center wow fadeInUp"
                        data-wow-delay=".5s"
                        data-wow-duration=".9s"
                     >
                        <h2>TRAVEL RAJASTHAN</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cta;