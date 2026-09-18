import Image from "next/image";
import Button from "@/components/common/Button";
import Link from "next/link";

import shape_1 from "@/assets/img/about/details/shape.png";
import shape_2 from "@/assets/img/about/details/shape-2.png";

import thumb_1 from "@/assets/img/tour/udaipur.webp";
import thumb_2 from "@/assets/img/tour/jaipur.avif";
import thumb_3 from "@/assets/img/tour/taj.jpg";

const AboutArea = () => {
  return (
    <div className="tg-about-area p-relative z-index-1 pt-140 pb-105">

      <Image
        className="tg-about-details-shape p-absolute d-none d-lg-block"
        src={shape_1}
        alt="shape"
      />

      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGES */}
          <div className="col-lg-6">
            <div className="tg-about-details-left p-relative mb-15">

              <Image
                className="tg-about-details-map p-absolute"
                src={shape_2}
                alt="map"
              />

              <div className="row">

                {/* LEFT COLUMN */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="tg-about-details-thumb p-relative z-index-9">

                    {/* IMAGE 1 */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "280px",
                        overflow: "hidden",
                        borderRadius: "15px",
                        marginBottom: "20px",
                      }}
                    >
                      <Image
                        src={thumb_1}
                        alt="Rajasthan taxi service"
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* IMAGE 2 */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "280px",
                        overflow: "hidden",
                        borderRadius: "15px",
                      }}
                    >
                      <Image
                        src={thumb_2}
                        alt="Rajasthan tour package"
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>

                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div
                    className="tg-about-details-thumb-2 p-relative"
                    style={{
                      position: "relative",
                      height: "580px",
                      overflow: "hidden",
                      borderRadius: "15px",
                    }}
                  >

                    {/* IMAGE 3 */}
                    <Image
                      src={thumb_3}
                      alt="Travel across Rajasthan"
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />

                  </div>
                </div>

              </div>
            </div>
          </div>


          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <div className="tg-chose-content mb-35 ml-60">

              <div className="tg-chose-section-title mb-30">

                <h5
                  className="tg-section-subtitle mb-15 wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration=".6s"
                >
                  About The Royal Cars
                </h5>

                <h2
                  className="mb-15 wow fadeInUp"
                  data-wow-delay=".4s"
                  data-wow-duration=".9s"
                >
                  Making Every Rajasthan
                  <br />
                  Journey Simple & Comfortable
                </h2>

                <p
                  className="wow fadeInUp mb-20"
                  data-wow-delay=".5s"
                  data-wow-duration=".9s"
                >
                  The Royal Cars provides reliable taxi and travel services
                  for people exploring Rajasthan. From airport transfers and
                  local rides to one-way intercity taxis, we make it easy to
                  get where you need to go.
                </p>

                <p
                  className="wow fadeInUp mb-35"
                  data-wow-delay=".6s"
                  data-wow-duration=".9s"
                >
                  Planning a longer trip? Our tour packages cover some of
                  Rajasthan&apos;s most loved destinations, including Jaipur,
                  Udaipur, Jodhpur, Jaisalmer, Ajmer and Pushkar. With
                  comfortable cars and experienced local drivers, you can
                  focus on enjoying the journey while we take care of the
                  road.
                </p>

                <div
                  className="tg-chose-btn wow fadeInUp"
                  data-wow-delay=".8s"
                  data-wow-duration=".9s"
                >
                  <Link
                    href="/tour-services"
                    className="tg-btn tg-btn-switch-animation"
                  >
                    <Button text="EXPLORE OUR TOURS" />
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutArea;