import React from 'react'
import BreadCrumb from "@/components/common/BreadCrumb"
import FooterSix from "@/layouts/footers/FooterSix"
import HeaderThree from "@/layouts/headers/HeaderThree"
import TourListPage from '../taxicompontents/TourservicesCard'

export default function page() {
  return (
    <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Tour Services" sub_title="Tour Services" />
            <TourListPage/>
            
         </main>
         <FooterSix />
      </>
  )
}
