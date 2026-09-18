import { StaticImageData } from "next/image";

import location2_1 from "@/assets/img/location/su/destination.jpg";
import location2_2 from "@/assets/img/location/su/destination-2.jpg";
import location2_3 from "@/assets/img/location/su/destination-3.jpg";
import location2_4 from "@/assets/img/location/su/destination-4.jpg";
import location2_5 from "@/assets/img/location/su/destination-5.jpg";
import location2_6 from "@/assets/img/location/su/destination-6.jpg";

interface DataType {
   id: number;
   page?: string;
   thumb: StaticImageData;
   title: string;
   total?: string;
   class?: string;
}

const location_data: DataType[] = [
   {
      id: 1,
      thumb: location2_1,
      title: "Delhi",
      total: "15",
      class: "col-xl-3",
   },

   {
      id: 2,
      thumb: location2_2,
      title: "Goa",
      total: "18",
      class: "col-xl-3",
   },

   {
      id: 3,
      thumb: location2_3,
      title: "Kerala",
      total: "14",
      class: "col-xl-6",
   },

   {
      id: 4,
      thumb: location2_4,
      title: "Varanasi",
      total: "09",
      class: "col-xl-6",
   },

   {
      id: 5,
      thumb: location2_5,
      title: "Mumbai",
      total: "11",
      class: "col-xl-3",
   },

   {
      id: 6,
      thumb: location2_6,
      title: "Manali",
      total: "13",
      class: "col-xl-3",
   },
];

export default location_data;