import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/common/Button'


import about_thumb1 from "@/assets/img/tour/udaipur.webp"
import about_thumb2 from "@/assets/img/tour/jaipur.avif"
import about_thumb3 from "@/assets/img/tour/taj.jpg"
import about_thumb4 from "@/assets/img/tour/tamil.jpg"


const About = () => {
   return (
     
      <div className="tg-about-area pb-100">
  <div className="container">
    <div className="row align-items-start">

      {/* Left Images */}
      <div className="col-lg-3">
        <div className="tg-about-thumb-wrap mb-30">

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "253px",
              overflow: "hidden",
              borderRadius: "15px",
              marginBottom: "85px",
            }}
          >
            <Image
              src={about_thumb1}
              alt="about"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 991px) 100vw, 25vw"
            />
          </div>

          <div
            style={{
              position: "relative",
              width: "220px",
              height: "170px",
              overflow: "hidden",
              borderRadius: "15px",
              margin: "0 auto",
            }}
          >
            <Image
              src={about_thumb2}
              alt="about"
              fill
              style={{ objectFit: "cover" }}
              sizes="220px"
            />
          </div>

        </div>
      </div>

      {/* Center Content */}
      <div className="col-lg-6 mb-30">
        <div className="tg-about-content text-center">

          <div className="tg-about-section-title mb-25">
            <h5
              className="tg-section-subtitle wow fadeInUp"
              data-wow-delay=".4s"
              data-wow-duration=".6s"
            >
              Explore Our Popular Tours
            </h5>

            <h2
              className="mb-15 wow fadeInUp"
              data-wow-delay=".5s"
              data-wow-duration=".7s"
            >
              Explore India With Tours Made For You
            </h2>

            <p
              className="wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration=".8s"
            >
              Discover beautiful destinations, rich heritage, amazing food
              and unforgettable experiences with our carefully planned tour
              packages.
            </p>
          </div>

          <div
            className="tp-about-btn-wrap wow fadeInUp"
            data-wow-delay=".7s"
            data-wow-duration=".9s"
          >
            <Link
              href="/tour-services"
              className="tg-btn tg-btn-transparent tg-btn-switch-animation"
            >
              <Button text="EXPLORE TOURS" />
            </Link>
          </div>

        </div>
      </div>

      {/* Right Images */}
      <div className="col-lg-3">
        <div className="tg-about-thumb-wrap mb-30">

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "253px",
              overflow: "hidden",
              borderRadius: "15px",
              marginBottom: "85px",
            }}
          >
            <Image
              src={about_thumb3}
              alt="about"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 991px) 100vw, 25vw"
            />
          </div>

          <div
            style={{
              position: "relative",
              width: "220px",
              height: "170px",
              overflow: "hidden",
              borderRadius: "15px",
              margin: "0 auto",
            }}
          >
            <Image
              src={about_thumb4}
              alt="about"
              fill
              style={{ objectFit: "cover" }}
              sizes="220px"
            />
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
   )
}

export default About






