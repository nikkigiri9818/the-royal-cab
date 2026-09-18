"use client"
import BannerFormThree from "@/components/common/banner-form/BannerFormThree"
import About from "./About"
import Banner from "./Banner"
import Blog from "./Blog"
import Choose from "./Choose"
import CtaThree from "./Cta"
import CtaTwo from "./CtaTwo"
import Location from "./Location"
import Testimonial from "./Testimonial"
import dynamic from "next/dynamic"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import Cta from "../home-one/Cta"
import TaxiSlider from "./TaxiSlider"
import LuxuryCars from "./LuxuryCars"
import OneWayTaxiSlider from "./OneWayTaxiSlider"
import TaxiContactSection from "@/app/taxicompontents/TaxiContactSection"
import Aboutsec from "./Aboutsec"
import FooterSix from "@/layouts/footers/FooterSix"
 const Listing = dynamic(() => import("./Listing"), { ssr: false });

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Banner />
            <BannerFormThree />
            <Aboutsec/>
            <About />
            {/* <Listing /> */}
            <TaxiSlider />
            <Choose />
            <CtaThree />
            <LuxuryCars/>
            {/* <Location /> */}
            <OneWayTaxiSlider/>
            <CtaTwo />
            <Testimonial />
            {/* <Blog />
            <Cta /> */}
            <TaxiContactSection/>
         </main>
         <FooterSix />
      </>
   )
}

export default HomeThree
