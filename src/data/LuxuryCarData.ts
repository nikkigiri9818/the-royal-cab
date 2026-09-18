import { StaticImageData } from "next/image";

import luxury_1 from "@/assets/img/luxricar/mecdiz.webp";
import luxury_2 from "@/assets/img/luxricar/bmw.webp";
import luxury_3 from "@/assets/img/luxricar/toyotofrounter.webp";
import luxury_4 from "@/assets/img/luxricar/luxriouscar.webp";
import luxury_5 from "@/assets/img/luxricar/wedding.webp";

interface LuxuryCarType {
   id: number;
   image: StaticImageData;
   category: string;
   title: string;
   price: string;
   seats: string;
   ac: string;
   luggage: string;
   description: string;
}

const luxury_car_data: LuxuryCarType[] = [
   {
      id: 1,
      image: luxury_1,
      category: "Premium Sedan",
      title: "Mercedes-Benz E-Class",
      price: "₹35",
      seats: "4 + Driver",
      ac: "Automatic AC",
      luggage: "2 Bags",
      description:
         "A refined luxury sedan for airport transfers, business travel and premium city journeys.",
   },

   {
      id: 2,
      image: luxury_2,
      category: "Luxury Sedan",
      title: "BMW 5 Series",
      price: "₹35",
      seats: "4 + Driver",
      ac: "Automatic AC",
      luggage: "2 Bags",
      description:
         "Enjoy a smooth and sophisticated ride with premium comfort and spacious interiors.",
   },

   {
      id: 3,
      image: luxury_3,
      category: "Premium SUV",
      title: "Toyota Fortuner",
      price: "₹25",
      seats: "6 + Driver",
      ac: "Automatic AC",
      luggage: "4 Bags",
      description:
         "A powerful and comfortable SUV for family tours, long drives and outstation travel.",
   },

   {
      id: 4,
      image: luxury_4,
      category: "Luxury SUV",
      title: "Toyota Fortuner Legender",
      price: "₹28",
      seats: "6 + Driver",
      ac: "Automatic AC",
      luggage: "4 Bags",
      description:
         "Premium SUV experience with generous space for comfortable journeys across Rajasthan.",
   },

   {
      id: 5,
      image: luxury_5,
      category: "Premium Travel",
      title: "Mercedes V-Class",
      price: "₹45",
      seats: "6 + Driver",
      ac: "Automatic AC",
      luggage: "5 Bags",
      description:
         "Spacious luxury travel for families, corporate groups and special occasions.",
   },
];

export default luxury_car_data;