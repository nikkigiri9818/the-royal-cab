import BreadCrumb from "@/components/common/BreadCrumb"
import FooterSix from "@/layouts/footers/FooterSix"
import HeaderThree from "@/layouts/headers/HeaderThree"
import AboutArea from "./AboutArea"
import Choose from "./Choose"
import Cta from "./Cta"

const About = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="About Us" sub_title="About Us" image="https://www.rajasthanplaces.com/wp-content/uploads/2024/07/Jaisalmer-Fort.webp" />
            <AboutArea />
            <Choose />
            <Cta />
         </main>
         <FooterSix />
      </>
   )
}

export default About
