import Image from "next/image";
import Link from "next/link";
import ContactForm from "../forms/ContactForm";

import shape_1 from "@/assets/img/banner/banner-2/shape.png";

const ContactArea = () => {
  return (
    <div className="tg-contact-area pt-130 p-relative z-index-1 pb-100">
      <Image
        className="tg-team-shape-2 d-none d-md-block"
        src={shape_1}
        alt=""
      />

      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-5">
            <div className="tg-team-details-contant tg-contact-info-wrap mb-30">

              <h6 className="mb-15">Get In Touch:</h6>

              <p className="mb-25">
                Have a question about our taxi services or tour packages?
                Get in touch with The Royal Cars and let us help you plan
                your next journey across Rajasthan.
              </p>

              <div className="tg-team-details-contact-info mb-35">
                <div className="tg-team-details-contact">

                  {/* Phone */}
                  <div className="item">
                    <span>Phone :</span>
                    <Link href="tel:+917849993464">
                      +91 78499 93464
                    </Link>
                  </div>

                  {/* WhatsApp / Second Phone */}
                  <div className="item">
                    <span>WhatsApp :</span>
                    <Link href="https://wa.me/919286735906">
                      +91 92867 35906
                    </Link>
                  </div>

                  {/* Email */}
                  <div className="item">
                    <span>E-mail :</span>
                    <Link href="mailto:theroyalcabs16@gmail.com">
                      theroyalcabs16@gmail.com
                    </Link>
                  </div>

                  {/* Address */}
                  <div className="item">
                    <span>Address :</span>
                    <span>
                      G-28, Upsana Apna Bazar, Lata Circle,
                      Jhotwara, Jaipur, Rajasthan
                    </span>
                  </div>

                </div>
              </div>

              {/* Google Map */}
              <div className="tg-contact-map h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31078.361591144112!2d-74.0256365664179!3d40.705584751235754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1724572184688!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  loading="lazy"
                />
              </div>

            </div>
          </div>

          <div className="col-lg-7">
            <div className="tg-contact-content-wrap ml-40 mb-30">

              <h3 className="tg-contact-title mb-15">
                Let&apos;s Plan Your Journey Together
              </h3>

              <p className="mb-30">
                Looking for a reliable taxi, airport transfer, one-way
                cab or Rajasthan tour package? Send us your requirements
                and our team will get back to you.
              </p>

              <div className="tg-contact-form tg-tour-about-review-form">
                <ContactForm />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactArea;