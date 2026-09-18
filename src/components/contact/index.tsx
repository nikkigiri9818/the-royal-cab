import HeaderThree from "@/layouts/headers/HeaderThree"
import BreadCrumb from "../common/BreadCrumb"
import ContactArea from "./ContactArea"
import FooterSix from "@/layouts/footers/FooterSix"

const Contact = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Contact With Us" sub_title="Contact" image="https://rajasthan-tours.co.in/admin/storage/uploads/2024-03-22-073937-Feature-City-Palace-Udaipur-Rajasthan.jpg" />
            <ContactArea />
         </main>
         <FooterSix />
      </>
   )
}

export default Contact
