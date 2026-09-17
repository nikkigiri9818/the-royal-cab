"use client"
import { useState } from "react";

interface FormData {
   name: string;
   email: string;
   phone: string;
   message: string;
}

const BannerFormTwo = () => {

   const [formData, setFormData] = useState<FormData>({
      name: "",
      email: "",
      phone: "",
      message: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // TODO: connect to your API / email service
      console.log(formData);
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="row">

            <div className="col-12 col-lg mb-15">
               <div className="tg-booking-form-parent-inner">
                  <span className="tg-booking-form-title mb-5">Name:</span>
                  <div className="tg-booking-add-input-date p-relative">
                     <span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8 8C9.933 8 11.5 6.433 11.5 4.5C11.5 2.567 9.933 1 8 1C6.067 1 4.5 2.567 4.5 4.5C4.5 6.433 6.067 8 8 8Z" stroke="currentColor" strokeWidth="1.15556" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M1.5 15C1.5 12.0625 4.41 9.5 8 9.5C11.59 9.5 14.5 12.0625 14.5 15" stroke="currentColor" strokeWidth="1.15556" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </span>
                     <input
                        type="text"
                        name="name"
                        className="input w-100"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                     />
                  </div>
               </div>
            </div>

            <div className="col-12 col-lg mb-15">
               <div className="tg-booking-form-parent-inner">
                  <span className="tg-booking-form-title mb-5">Email:</span>
                  <div className="tg-booking-add-input-date p-relative">
                     <span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.5 3.5H14.5C14.5 3.5 14.5 3.5 14.5 3.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V3.5Z" stroke="currentColor" strokeWidth="1.15556" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M1.5 3.5L8 9L14.5 3.5" stroke="currentColor" strokeWidth="1.15556" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </span>
                     <input
                        type="email"
                        name="email"
                        className="input w-100"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                     />
                  </div>
               </div>
            </div>

            <div className="col-12 col-lg mb-15">
               <div className="tg-booking-form-parent-inner">
                  <span className="tg-booking-form-title mb-5">Phone Number:</span>
                  <div className="tg-booking-add-input-date p-relative">
                     <span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M14.5 11.1V13.1C14.5 13.6523 14.0523 14.1 13.5 14.1C7.14873 14.1 2 8.95127 2 2.6C2 2.04772 2.44772 1.6 3 1.6H5C5.55228 1.6 6 2.04772 6 2.6V4.6C6 5.15228 5.55228 5.6 5 5.6H4.2C4.6 8 6.1 9.5 8.5 9.9V9.1C8.5 8.54772 8.94772 8.1 9.5 8.1H11.5C12.0523 8.1 12.5 8.54772 12.5 9.1V9.9" stroke="currentColor" strokeWidth="1.15556" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </span>
                     <input
                        type="tel"
                        name="phone"
                        className="input w-100"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                     />
                  </div>
               </div>
            </div>

            <div className="col-12 col-lg mb-15">
               <div className="tg-booking-form-parent-inner">
                  <span className="tg-booking-form-title mb-5 ">Message:</span>
                  <div className="tg-booking-add-input-date p-relative">
                     <input
                        name="message"
                        className="input w-100"
                     
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                     />
                  </div>
               </div>
            </div>

            <div className="col-12 col-lg mb-15">
               <div className="tg-booking-form-search-btn h-100 d-flex align-items-end">
                  <button className="bk-search-button w-100" type="submit">Send</button>
               </div>
            </div>

         </div>
      </form>
   )
}

export default BannerFormTwo