import React from 'react'
import BreadCrumb from "@/components/common/BreadCrumb"
import FooterSix from "@/layouts/footers/FooterSix"
import HeaderThree from "@/layouts/headers/HeaderThree"
import LuxuryCarsPage from '../taxicompontents/Luxurycard'
export default function page() {
  return (
    <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Luxury-cars" sub_title="Luxury Car" />
            <LuxuryCarsPage/>
            
         </main>
         <FooterSix />
      </>
  )
}
