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
            <BreadCrumb title="Luxury-cars" sub_title="Luxury Car" image='https://www.rolls-roycemotorcarsranchomirage.com/static/dealer-12176/2025-phantom/P90564792_highRes_phantom-scintilla.webp'/>
            <LuxuryCarsPage/>
            
         </main>
         <FooterSix />
      </>
  )
}
