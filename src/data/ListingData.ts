import { StaticImageData } from "next/image";

import listing_img1 from "@/assets/img/listing/su/listing-1.jpg"
import listing_img2 from "@/assets/img/listing/su/listing-2.jpg"
import listing_img3 from "@/assets/img/listing/su/listing-3.jpg"
import listing_img4 from "@/assets/img/listing/su/listing-4.jpg"
import listing_img5 from "@/assets/img/listing/su/listing-5.jpg"
import listing_img6 from "@/assets/img/listing/su/listing-6.jpg"

import listing3_img1 from "@/assets/img/listing/listing-1.jpg"
import listing3_img2 from "@/assets/img/listing/listing-2.jpg"
import listing3_img3 from "@/assets/img/listing/listing-3.jpg"
import listing3_img4 from "@/assets/img/listing/listing-4.jpg"
import listing3_img5 from "@/assets/img/listing/listing-5.jpg"
import listing3_img6 from "@/assets/img/listing/listing-6.jpg"
import listing3_img7 from "@/assets/img/listing/listing-8.jpg"
import listing3_img8 from "@/assets/img/listing/listing-4.jpg"

import listing5_img1 from "@/assets/img/listing/listing-3/list.jpg"
import listing5_img2 from "@/assets/img/listing/listing-3/list-2.jpg"
import listing5_img3 from "@/assets/img/listing/listing-3/list-3.jpg"
import listing5_img4 from "@/assets/img/listing/listing-3/list-4.jpg"
import listing5_img5 from "@/assets/img/listing/listing-3/list-5.jpg"
import listing5_img6 from "@/assets/img/listing/listing-3/list-6.jpg"
import listing5_img7 from "@/assets/img/listing/listing-3/list-7.jpg"
import listing5_img8 from "@/assets/img/listing/listing-3/list-8.jpg"

import listing7_img1 from "@/assets/img/listing/listing-5/listing-1.jpg"
import listing7_img2 from "@/assets/img/listing/listing-5/listing-2.jpg"
import listing7_img3 from "@/assets/img/listing/listing-5/listing-3.jpg"
import listing7_img4 from "@/assets/img/listing/listing-5/listing-4.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag?: string;
   featured?: string;
   time: string;
   guest?: string;
   title: string;
   location: string;
   delete_price?: number;
   price: number;
   review: number;
   total_review?: string;
   country?: string;
   recommended?: string;
   category?: string;
}
const listing_data = [
   {
      id: 1,
      key: "golden-triangle-itinerary",
      slug: "golden-triangle-itinerary",
      thumb: listing3_img1,
      time: "6D/5N",
      title: "Golden Triangle Itinerary",
      location: "Delhi, Agra & Jaipur",
      price: 299,
      review: 4.5,
   },
   {
      id: 2,
      key: "7-day-coastal-heritage-tour-tamilnadu",
      slug: "7-day-coastal-heritage-tour-tamilnadu",
      thumb: listing3_img2,
      time: "7D/6N",
      title: "7-Day Coastal & Heritage Tour Tamilnadu",
      location: "Tamil Nadu, India",
      price: 299,
      review: 4.7,
   },
   {
      id: 3,
      key: "wildlife-nature-trail-8-9-days",
      slug: "wildlife-nature-trail-8-9-days",
      thumb: listing3_img3,
      time: "9D/8N",
      title: "Wildlife & Nature Trail (8-9 Days)",
      location: "Madhya Pradesh, India",
      price: 299,
      review: 4.3,
   },
   {
      id: 4,
      key: "10-day-cultural-temple-circuit-classic-tamil-nadu",
      slug: "10-day-cultural-temple-circuit-classic-tamil-nadu",
      thumb: listing3_img4,
      time: "9D/8N",
      title: "10-Day Cultural & Temple Circuit (Classic Tamil Nadu)",
      location: "Tamil Nadu, India",
      price: 299,
      review: 4.3,
   },
   {
      id: 5,
      key: "spiritual-heritage-highlights-6-7-days",
      slug: "spiritual-heritage-highlights-6-7-days",
      thumb: listing3_img5,
      time: "7D/6N",
      title: "Spiritual & Heritage Highlights (6-7 Days)",
      location: "Madhya Pradesh, India",
      price: 299,
      review: 4.5,
   },
   {
      id: 6,
      key: "7-day-heritage-itinerary-jaipur-to-udaipur",
      slug: "7-day-heritage-itinerary-jaipur-to-udaipur",
      thumb: listing3_img6,
      time: "7D/6N",
      title: "7-Day Heritage Itinerary (Jaipur to Udaipur)",
      location: "Jaipur to Udaipur, Rajasthan",
      price: 299,
      review: 4.3,
   },
   {
      id: 7,
      key: "8-day-royal-rajasthan-tour",
      slug: "8-day-royal-rajasthan-tour",
      thumb: listing3_img7,
      time: "8D/7N",
      title: "8-Day Royal Rajasthan Tour",
      location: "Rajasthan, India",
      price: 299,
      review: 4.2,
   },
   {
      id: 8,
      key: "14-day-in-depth-cultural-tour-rajasthan",
      slug: "14-day-in-depth-cultural-tour-rajasthan",
      thumb: listing3_img8,
      time: "14D/13N",
      title: "14-Day In-Depth Cultural Tour of Rajasthan",
      location: "Rajasthan, India",
      price: 299,
      review: 5,
   },
   {
      id: 9,
      key: "7-day-heritage-itinerary-jaipur-to-udaipur-2",
      slug: "7-day-heritage-itinerary-jaipur-to-udaipur-2",
      thumb: listing3_img1,
      time: "7D/6N",
      title: "7-Day Heritage Itinerary (Jaipur to Udaipur)",
      location: "Jaipur to Udaipur, Rajasthan",
      price: 299,
      review: 4.2,
   },
   {
      id: 10,
      key: "5-day-heritage-itinerary-jaipur-to-udaipur",
      slug: "5-day-heritage-itinerary-jaipur-to-udaipur",
      thumb: listing3_img2,
      time: "5D/4N",
      title: "5-Day Heritage Itinerary (Jaipur to Udaipur)",
      location: "Jaipur to Udaipur, Rajasthan",
      price: 299,
      review: 4.2,
   },
   {
      id: 11,
      key: "2-days-pink-city-tour-jaipur",
      slug: "2-days-pink-city-tour-jaipur",
      thumb: listing3_img3,
      time: "2D/1N",
      title: "2-Days Pink City Tour, Jaipur",
      location: "Jaipur, Rajasthan",
      price: 299,
      review: 4.5,
   },
   {
      id: 12,
      key: "3-days-jaipur-pushkar",
      slug: "3-days-jaipur-pushkar",
      thumb: listing3_img4,
      time: "3D/2N",
      title: "3 Days Jaipur Pushkar",
      location: "Jaipur & Pushkar, Rajasthan",
      price: 299,
      review: 4.5,
   },
];

export default listing_data;

