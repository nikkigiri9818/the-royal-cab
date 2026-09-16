import BreadCrumb from "@/components/common/BreadCrumb"
import FooterSix from "@/layouts/footers/FooterSix"
import HeaderThree from "@/layouts/headers/HeaderThree"
import RajasthanTaxiAbout from "../taxicompontents/RajasthanTaxiAbout"
import RajasthanTaxiGrid from "../taxicompontents/RajasthanTaxiGrid"

const taxiservice = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Taxi Services" sub_title="Taxi Services" />
            <RajasthanTaxiAbout />
            <RajasthanTaxiGrid/>

         </main>
         <FooterSix />
      </>
   )
}

export default taxiservice
