import Image from "next/image"
import Choose4 from "@/svg/home-one/Choose4"
import Choose5 from "@/svg/home-one/Choose5"
import Button from "@/components/common/Button"

import choose_shape from "@/assets/img/chose/chose-shape-2.png"
import choose_shape2 from "@/assets/img/chose/chose-shape.png"
import choose_thumb from "@/assets/img/tour/taj.jpg"
import choose_thumb2 from "@/assets/img/tour/udaipur.webp"
import Link from "next/link"


const Choose = () => {
return (
  <div className="tg-chose-area p-relative pt-135 pb-100">

    <Image
      className="tg-chose-shape p-absolute"
      src={choose_shape}
      alt="shape"
    />

    <div className="container">
      <div className="row">

        {/* LEFT CONTENT */}
        <div className="col-lg-5">
          <div className="tg-chose-content mb-25">

            <div className="tg-chose-section-title mb-30">

              <h5
                className="tg-section-subtitle mb-15 wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration=".6s"
              >
                Why Travel With Us
              </h5>

              <h2
                className="mb-15 wow fadeInUp"
                data-wow-delay=".4s"
                data-wow-duration=".9s"
              >
                Travel Rajasthan With Comfort & Confidence
              </h2>

              <p
                className="wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration=".9s"
              >
                Whether you need a quick airport transfer, a one-way taxi
                between cities, or a complete Rajasthan tour, we make your
                journey simple, comfortable and stress-free.
              </p>

            </div>

            <div className="tg-chose-list-wrap">

              {/* FEATURE 1 */}
              <div
                className="tg-chose-list d-flex mb-20 wow fadeInUp"
                data-wow-delay=".6s"
                data-wow-duration=".9s"
              >
                <span className="tg-chose-list-icon mr-20">
                  <Choose4 />
                </span>

                <div className="tg-chose-list-content">
                  <h4 className="tg-chose-list-title mb-5">
                    Experienced Local Drivers
                  </h4>

                  <p>
                    Our drivers know Rajasthan's roads, cities and popular
                    travel routes, helping you enjoy a comfortable journey.
                  </p>
                </div>
              </div>

              {/* FEATURE 2 */}
              <div
                className="tg-chose-list d-flex mb-30 wow fadeInUp"
                data-wow-delay=".7s"
                data-wow-duration=".9s"
              >
                <span className="tg-chose-list-icon mr-20">
                  <Choose5 />
                </span>

                <div className="tg-chose-list-content">
                  <h4 className="tg-chose-list-title mb-5">
                    Taxi & Tour Services
                  </h4>

                  <p>
                    Choose from airport transfers, local taxi services,
                    one-way rides and complete tour packages across Rajasthan.
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <div
                className="tg-chose-btn wow fadeInUp"
                data-wow-delay=".8s"
                data-wow-duration=".9s"
              >
                <Link
                  href="/contact"
                  className="tg-btn tg-btn-switch-animation"
                >
                  <Button text="PLAN YOUR JOURNEY" />
                </Link>
              </div>

            </div>
          </div>
        </div>


        {/* RIGHT IMAGES */}
        <div className="col-lg-7">
          <div className="tg-chose-right mb-25">

            <div className="row">

              {/* SMALL IMAGE */}
              <div className="col-lg-3 col-md-6">
                <div className="tg-chose-thumb">

                  <Image
                    className="tg-chose-shape-2 mb-30 ml-15 d-none d-lg-block"
                    src={choose_shape2}
                    alt="shape"
                  />

                  <div
                    className="wow fadeInRight"
                    data-wow-delay=".4s"
                    data-wow-duration=".9s"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "300px",
                      overflow: "hidden",
                      borderRadius: "15px",
                    }}
                  >
                    <Image
                      src={choose_thumb}
                      alt="Rajasthan taxi service"
                      fill
                      sizes="(max-width: 991px) 100vw, 25vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>

                </div>
              </div>


              {/* LARGE IMAGE */}
              <div className="col-lg-9 col-md-6">
                <div className="tg-chose-thumb-inner p-relative">

                  <div
                    className="tg-chose-thumb-2 wow fadeInRight"
                    data-wow-delay=".5s"
                    data-wow-duration=".9s"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "500px",
                      overflow: "hidden",
                      borderRadius: "15px",
                    }}
                  >
                    <Image
                      src={choose_thumb2}
                      alt="Rajasthan tour packages"
                      fill
                      sizes="(max-width: 991px) 100vw, 55vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>


                  {/* BIG TEXT */}
                  <div className="tg-chose-big-text d-none d-xl-block">
                    <h2 data-text="RAJASTHAN">
                      RAJASTHAN
                    </h2>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
);
}

export default Choose
