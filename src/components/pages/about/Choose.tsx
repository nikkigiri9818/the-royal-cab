import Choose6 from "@/svg/home-one/Choose6";
import Choose7 from "@/svg/home-one/Choose7";
import Choose8 from "@/svg/home-one/Choose8";
import Image from "next/image";
import { JSX } from "react";

import shape from "@/assets/img/banner/banner-2/shape.png";

interface DataType {
   id: number;
   icon: JSX.Element;
   title: string;
   desc: string;
}

const choose_data: DataType[] = [
   {
      id: 1,
      icon: (<><Choose6 /></>),
      title: "Comfortable & Reliable Cars",
      desc: "Travel comfortably across Jaipur and Rajasthan with clean, well-maintained cars and a smooth journey from start to finish.",
   },
   {
      id: 2,
      icon: (<><Choose7 /></>),
      title: "Experienced Local Drivers",
      desc: "Our experienced drivers know Rajasthan's routes and destinations, helping you travel safely and enjoy your journey with peace of mind.",
   },
   {
      id: 3,
      icon: (<><Choose8 /></>),
      title: "Taxi & Tour Services",
      desc: "From airport transfers and local rides to one-way taxis and Rajasthan tour packages, we provide travel services for every journey.",
   },
];

const Choose = () => {
   return (
      <div className="tg-chose-area tg-grey-bg pt-140 pb-70 p-relative z-index-1">
         <Image
            className="tg-chose-6-shape d-none d-md-block"
            src={shape}
            alt=""
         />

         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-9">
                  <div className="tg-chose-section-title text-center mb-35">

                     <h5
                        className="tg-section-subtitle mb-15 wow fadeInUp"
                        data-wow-delay=".3s"
                        data-wow-duration=".1s"
                     >
                        Why Choose The Royal Cars
                     </h5>

                     <h2
                        className="mb-15 text-capitalize wow fadeInUp"
                        data-wow-delay=".4s"
                        data-wow-duration=".9s"
                     >
                        Travel Rajasthan With<br />
                        Comfort & Confidence
                     </h2>

                     <p
                        className="wow fadeInUp mb-35"
                        data-wow-delay=".5s"
                        data-wow-duration=".9s"
                     >
                        Whether you need a taxi for a local ride, airport transfer,
                        one-way journey or a complete Rajasthan tour, we make
                        your travel simple, comfortable and hassle-free.
                     </p>

                  </div>
               </div>
            </div>

            <div className="row">
               {choose_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="tg-chose-6-wrap mb-30">

                        <span className="icon mb-20">
                           {item.icon}
                        </span>

                        <h4 className="tg-chose-6-title mb-15">
                           {item.title}
                        </h4>

                        <p>{item.desc}</p>

                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Choose;