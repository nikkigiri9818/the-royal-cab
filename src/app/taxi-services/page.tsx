import BreadCrumb from "@/components/common/BreadCrumb"
import FooterSix from "@/layouts/footers/FooterSix"
import HeaderThree from "@/layouts/headers/HeaderThree"
import RajasthanTaxiAbout from "../taxicompontents/RajasthanTaxiAbout"
import RajasthanTaxiGrid from "../taxicompontents/RajasthanTaxiGrid"
import TaxiContactSection from "../taxicompontents/TaxiContactSection"
import Listing from "@/components/homes/home-three/Listing"
import Testimonial from "@/components/homes/home-three/Testimonial"
import TaxiServicesSection from "../taxicompontents/TaxiServicesSection"
import OneWayTaxi from "../taxicompontents/Onewaytaxi "

const taxiservice = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Taxi Services" sub_title="Taxi Services" image="https://choosemycar.com/wp-content/uploads/2025/02/toyota-corolla-hybrid-best-cars-with-excellent-fuel-economy.webp" />
            <RajasthanTaxiAbout />
            <RajasthanTaxiGrid/>
            <TaxiServicesSection/>
            <OneWayTaxi/>
            <Listing/>
            <Testimonial/>
            <TaxiContactSection/>

         </main>
         <FooterSix />
      </>
   )
}

export default taxiservice
