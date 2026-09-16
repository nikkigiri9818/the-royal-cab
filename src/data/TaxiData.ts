
import { StaticImageData } from "next/image";



import taxi_1 from "@/assets/img/taxi/taxi.avif";



import taxi_2 from "@/assets/img/taxi/taxi.avif";
import taxi_3 from "@/assets/img/taxi/taxi.avif";
import taxi_4 from "@/assets/img/taxi/taxi.avif";
import taxi_5 from "@/assets/img/taxi/taxi.avif";
import taxi_6 from "@/assets/img/taxi/taxi.avif";



interface DataType {
   id: number;
   image: StaticImageData;
   title: string;
   category: string;
   price: string;
   badge: string;
   description: string;
   seats: string;
   ac: string;
   luggage: string;
}


const taxi_data: DataType[] = [

   {
      id: 1,
      image: taxi_1,
      title: "Toyota Etios",
      category: "Sedan Car",
      price: "₹10",
      badge: "Popular",
      description:
         "Comfortable and affordable taxi for city rides, airport transfers and outstation travel.",
      seats: "4 + 1",
      ac: "AC",
      luggage: "2 Bags",
   },


   {
      id: 2,
      image: taxi_2,
      title: "Swift Dzire",
      category: "Sedan Car",
      price: "₹10",
      badge: "Best Value",
      description:
         "A comfortable sedan offering smooth rides for families, business trips and sightseeing.",
      seats: "4 + 1",
      ac: "AC",
      luggage: "2 Bags",
   },


   {
      id: 3,
      image: taxi_3,
      title: "Toyota Innova",
      category: "SUV Car",
      price: "₹16",
      badge: "Popular",
      description:
         "Spacious SUV perfect for families, groups and comfortable long-distance journeys.",
      seats: "6 + 1",
      ac: "AC",
      luggage: "4 Bags",
   },


   {
      id: 4,
      image: taxi_4,
      title: "Innova Crysta",
      category: "Premium SUV",
      price: "₹20",
      badge: "Premium",
      description:
         "Premium and spacious travel experience for family tours, corporate trips and outstation journeys.",
      seats: "6 + 1",
      ac: "AC",
      luggage: "5 Bags",
   },


   {
      id: 5,
      image: taxi_5,
      title: "Tempo Traveller",
      category: "Large Group",
      price: "₹25",
      badge: "Group Travel",
      description:
         "Spacious vehicle for groups travelling together across Rajasthan and other destinations.",
      seats: "12 + 1",
      ac: "AC",
      luggage: "8 Bags",
   },


   {
      id: 6,
      image: taxi_6,
      title: "Luxury Sedan",
      category: "Luxury Car",
      price: "₹35",
      badge: "Luxury",
      description:
         "Stylish and premium sedan for airport transfers, business travel and special occasions.",
      seats: "4 + 1",
      ac: "Premium AC",
      luggage: "3 Bags",
   },

];


export default taxi_data;