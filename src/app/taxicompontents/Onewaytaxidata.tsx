// src/data/oneWayTaxi.ts
// Shared data for all "One Way Taxi" routes from Jaipur.
// Used by BOTH the home page card grid (components/OneWayTaxi.tsx)
// and each route's detail page (app/one-way-taxi/[slug]/page.tsx).

export type FareOption = {
  vehicle: string;
  vehicleType: string;
  oneWayFare: string;
  perKm: string;
  capacity: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type OneWayTaxiRoute = {
  slug: string;
  title: string;
  destination: string;
  image: string;
  oneWayFare: string;
  roundTripPerKm: string;
  distanceKm: number;
  travelTime: string;
  shortDescription: string;
  aboutText: string;
  route?: string;
  fares: FareOption[];
  attractions?: string[];
  faqs?: FaqItem[];
};

export const oneWayTaxiRoutes: OneWayTaxiRoute[] = [
  {
    slug: "jaipur-to-ajmer-taxi",
    title: "Jaipur To Ajmer Taxi",
    destination: "Ajmer",
    image: "/images/taxi/jaipur-to-ajmer.jpg",
    oneWayFare: "₹1500",
    roundTripPerKm: "₹10 per km",
    distanceKm: 145,
    travelTime: "2 hrs 45 mins",
    shortDescription:
      "Check out our rates to book a taxi from Jaipur to Ajmer, the distance from Jaipur to Ajmer is 145 km and takes 2 hrs 45 mins to travel.",
    aboutText:
      "Ajmer is around 135 km from Jaipur and takes about 3 hours by road. Book a comfortable one-way taxi and enjoy a smooth ride to the dargah city, with Pushkar just 20 km further for a quick side trip.",
    route: "Jaipur → Kishangarh → Ajmer",
    fares: [
      { vehicle: "AC Sedan", vehicleType: "Dzire, Etios", oneWayFare: "₹1500", perKm: "₹11 per km", capacity: "4 people" },
      { vehicle: "AC SUV", vehicleType: "Ertiga, Innova, Crysta", oneWayFare: "₹2500", perKm: "₹15 per km", capacity: "7 people" },
      { vehicle: "Tempo Traveller", vehicleType: "9–20 seater", oneWayFare: "₹6000", perKm: "₹23 per km", capacity: "9–20 people" },
    ],
    attractions: [
      "Ajmer Sharif Dargah",
      "Ana Sagar Lake",
      "Adhai Din Ka Jhonpra",
      "Nareli Jain Temple",
      "Taragarh Fort",
      "Pushkar Lake",
      "Brahma Temple",
    ],
    faqs: [
      { question: "How much time does it take to travel from Jaipur to Ajmer?", answer: "Around 2 hrs 45 mins to 3 hours by road." },
      { question: "What is the fare for a Jaipur to Ajmer one-way taxi (Sedan)?", answer: "₹1500 all-inclusive." },
      { question: "Can I also visit Pushkar on the same trip?", answer: "Yes, Pushkar is only about 20 km ahead of Ajmer." },
    ],
  },
  {
    slug: "jaipur-to-bikaner-taxi",
    title: "Jaipur To Bikaner Taxi",
    destination: "Bikaner",
    image: "/images/taxi/jaipur-to-bikaner.jpg",
    oneWayFare: "₹3000",
    roundTripPerKm: "₹10 per km",
    distanceKm: 330,
    travelTime: "5 hrs 45 mins",
    shortDescription:
      "Check out our rates to book a taxi from Jaipur to Bikaner, the distance from Jaipur to Bikaner is 330 km and takes 5 hrs 45 mins to travel.",
    aboutText:
      "Bikaner is a desert city known for its forts and havelis, about 330 km from Jaipur (roughly 5-6 hours by road). A one-way taxi is the easiest way to get there in comfort.",
    fares: [
      { vehicle: "AC Sedan", vehicleType: "Dzire, Etios, Xcent", oneWayFare: "₹4500", perKm: "₹10 per km", capacity: "4 people" },
      { vehicle: "AC SUV", vehicleType: "Ertiga, Innova", oneWayFare: "₹5500", perKm: "₹15 per km", capacity: "6 people" },
      { vehicle: "Toyota Crysta", vehicleType: "Crysta", oneWayFare: "₹6000", perKm: "₹16 per km", capacity: "7 people" },
      { vehicle: "Tempo Traveller", vehicleType: "9–25 seater", oneWayFare: "₹8000–₹12000", perKm: "₹23–28 per km", capacity: "9–25 people" },
    ],
    attractions: [
      "Junagarh Fort",
      "Rampuria Havelis",
      "Lalgarh Palace",
      "Bikaner Camel Safari",
      "Karni Mata Temple",
      "Laxmi Nath Temple",
      "Gajner Wildlife Sanctuary",
      "Devi Kund Sagar",
    ],
    faqs: [
      { question: "How far is Bikaner from Jaipur?", answer: "About 330 km, roughly 5-6 hours by road." },
      { question: "What is the one-way Sedan fare?", answer: "₹4500 all-inclusive." },
    ],
  },
  {
    slug: "jaipur-to-udaipur-taxi",
    title: "Jaipur To Udaipur Taxi",
    destination: "Udaipur",
    image: "/images/taxi/jaipur-to-udaipur.jpg",
    oneWayFare: "₹4000",
    roundTripPerKm: "₹10 per km",
    distanceKm: 400,
    travelTime: "6 hrs 5 mins",
    shortDescription:
      "Check out our rates to book a taxi from Jaipur to Udaipur, the distance from Jaipur to Udaipur is 400 km and takes 6 hrs 5 mins to travel.",
    aboutText:
      "Travel from Jaipur to the City of Lakes in comfort. Udaipur is about 400 km from Jaipur, roughly 6 hours by road, with Chittorgarh Fort as a great stop on the way.",
    fares: [
      { vehicle: "AC Sedan", vehicleType: "Dzire, Etios", oneWayFare: "₹5000", perKm: "₹9-10 per km", capacity: "4 people" },
      { vehicle: "AC SUV", vehicleType: "Ertiga, Innova", oneWayFare: "₹6000", perKm: "₹14-15 per km", capacity: "6 people" },
      { vehicle: "Toyota Crysta", vehicleType: "Crysta", oneWayFare: "₹8000", perKm: "₹17-18 per km", capacity: "7 people" },
      { vehicle: "Tempo Traveller", vehicleType: "9–25 seater", oneWayFare: "₹12000", perKm: "₹20-32 per km", capacity: "9-25 people" },
    ],
    route: "Jaipur → Chittorgarh → Udaipur",
    attractions: [
      "Lake Pichola",
      "City Palace, Udaipur",
      "Fateh Sagar Lake",
      "Sajjangarh (Monsoon Palace)",
      "Saheliyon Ki Bari",
      "Jag Mandir Palace",
      "Bagore Ki Haveli",
    ],
    faqs: [
      { question: "How long does Jaipur to Udaipur take by taxi?", answer: "About 6 hours by road." },
      { question: "Can I stop at Chittorgarh Fort on the way?", answer: "Yes, it's a popular en-route stop." },
    ],
  },
  {
    slug: "jaipur-to-jodhpur-taxi",
    title: "Jaipur To Jodhpur Taxi",
    destination: "Jodhpur",
    image: "/images/taxi/jaipur-to-jodhpur.jpg",
    oneWayFare: "₹3500",
    roundTripPerKm: "₹10 per km",
    distanceKm: 335,
    travelTime: "5 hrs 50 mins",
    shortDescription:
      "Check out our rates to book a taxi from Jaipur to Jodhpur, the distance from Jaipur to Jodhpur is 335 km and takes 5 hrs 50 mins to travel.",
    aboutText:
      "Jodhpur, the Blue City, is about 335 km from Jaipur — around 5-6 hours by road. Its skyline of blue houses is best seen from atop Mehrangarh Fort, one of India's largest forts.",
    route: "Jaipur → Ajmer → Beawar → Jodhpur",
    fares: [
      { vehicle: "AC Sedan", vehicleType: "Dzire, Etios", oneWayFare: "₹3500", perKm: "₹11 per km", capacity: "4 people" },
      { vehicle: "AC SUV", vehicleType: "Ertiga, Innova", oneWayFare: "₹5500", perKm: "₹15 per km", capacity: "7 people" },
      { vehicle: "Toyota Crysta", vehicleType: "Crysta", oneWayFare: "₹7000", perKm: "₹18 per km", capacity: "7 people" },
    ],
    attractions: [
      "Mehrangarh Fort",
      "Jaswant Thada",
      "Umaid Bhawan Palace",
      "Clock Tower & Sardar Market",
      "Mandore Gardens",
      "Kaylana Lake",
    ],
    faqs: [
      { question: "How far is Jodhpur from Jaipur?", answer: "About 335 km, roughly 5-6 hours by road." },
      { question: "What is the one-way Sedan fare?", answer: "₹3500 all-inclusive." },
      { question: "Is Mehrangarh Fort worth the visit?", answer: "Yes, it's one of the largest and best-preserved forts in India, with panoramic city views." },
    ],
  },
  {
    slug: "jaipur-to-jaisalmer-taxi",
    title: "Jaipur To Jaisalmer Taxi",
    destination: "Jaisalmer",
    image: "/images/taxi/jaipur-to-jaisalmer.jpg",
    oneWayFare: "₹5000",
    roundTripPerKm: "₹10 per km",
    distanceKm: 550,
    travelTime: "9 hrs 45 mins",
    shortDescription:
      "Check out our rates to book a taxi from Jaipur to Jaisalmer, the distance from Jaipur to Jaisalmer is 550 km and takes 9 hrs 45 mins to travel.",
    aboutText:
      "Jaisalmer, the Golden City, is roughly 550 km from Jaipur — a long but scenic drive of about 9-10 hours through the Thar Desert. Best done as an overnight or early-morning departure, ending at the honey-gold sandstone fort.",
    route: "Jaipur → Jodhpur → Jaisalmer",
    fares: [
      { vehicle: "AC Sedan", vehicleType: "Dzire, Etios", oneWayFare: "₹5000", perKm: "₹11 per km", capacity: "4 people" },
      { vehicle: "AC SUV", vehicleType: "Ertiga, Innova", oneWayFare: "₹8000", perKm: "₹15 per km", capacity: "7 people" },
    ],
    attractions: [
      "Jaisalmer Golden Fort",
      "Patwon Ki Haveli",
      "Nathmal Ki Haveli",
      "Gadisar Lake",
      "Sam Sand Dunes",
      "Kuldhara Haunted Village",
    ],
    faqs: [
      { question: "How long is the drive from Jaipur to Jaisalmer?", answer: "About 9-10 hours, so many travelers start early morning or break the trip at Jodhpur." },
      { question: "What's the one-way Sedan fare?", answer: "₹5000 all-inclusive." },
    ],
  },
  {
    slug: "jaipur-to-khatu-shyam-ji-taxi",
    title: "Jaipur To Khatu Shyam Ji Taxi",
    destination: "Khatu Shyam Ji",
    image: "/images/taxi/jaipur-to-khatu.jpg",
    oneWayFare: "₹1500",
    roundTripPerKm: "₹10 per km",
    distanceKm: 85,
    travelTime: "2 hrs",
    shortDescription:
      "Check out our rates to book a taxi from Jaipur to Khatu Shyam ji, the distance from Jaipur to Khatu is about 85 km and takes around 2 hrs to travel.",
    aboutText:
      "Khatu Shyam Ji is one of the most visited temple towns near Jaipur, a quick 2-hour drive. A popular same-day round trip for pilgrims, especially busy on Ekadashi and during the annual fair.",
    fares: [
      { vehicle: "AC Sedan", vehicleType: "Dzire, Etios", oneWayFare: "₹1500", perKm: "₹11 per km", capacity: "4 people" },
      { vehicle: "AC SUV", vehicleType: "Ertiga, Innova", oneWayFare: "₹2500", perKm: "₹15 per km", capacity: "7 people" },
    ],
    attractions: ["Khatu Shyam Ji Temple", "Salasar Balaji (nearby side trip)"],
    faqs: [
      { question: "Is Khatu Shyam Ji doable as a same-day trip from Jaipur?", answer: "Yes, it's a short ~2 hour drive each way, commonly done as a round trip in a day." },
      { question: "What's the one-way Sedan fare?", answer: "₹1500 all-inclusive." },
    ],
  },
  {
    slug: "jaipur-to-delhi-taxi",
    title: "Jaipur To Delhi Taxi",
    destination: "Delhi",
    image: "/images/taxi/jaipur-to-delhi.jpg",
    oneWayFare: "₹2500",
    roundTripPerKm: "₹10 per km",
    distanceKm: 250,
    travelTime: "4 hrs 10 mins",
    shortDescription:
      "Check out our rates to book a taxi from Jaipur to Delhi, the distance from Jaipur to Delhi is 250 km and takes 4 hrs 10 mins to travel.",
    aboutText:
      "A smooth highway drive of about 4 hours on NH48 connects Jaipur to Delhi. Ideal for airport drops, business trips, or heading onward on the Golden Triangle circuit.",
    route: "Jaipur → NH48 → Delhi",
    fares: [
      { vehicle: "AC Sedan", vehicleType: "Dzire, Etios", oneWayFare: "₹2500", perKm: "₹11 per km", capacity: "4 people" },
      { vehicle: "AC SUV", vehicleType: "Ertiga, Innova", oneWayFare: "₹4500", perKm: "₹15 per km", capacity: "7 people" },
    ],
    faqs: [
      { question: "How long does Jaipur to Delhi taxi take?", answer: "About 4-4.5 hours via NH48." },
      { question: "What's the one-way Sedan fare?", answer: "₹2500 all-inclusive." },
    ],
  },
  {
    slug: "jaipur-to-agra-taxi",
    title: "Jaipur To Agra Taxi",
    destination: "Agra",
    image: "/images/taxi/jaipur-to-agra.jpg",
    oneWayFare: "₹2500",
    roundTripPerKm: "₹10 per km",
    distanceKm: 245,
    travelTime: "4 hrs 20 mins",
    shortDescription:
      "Check out our rates to book a taxi from Jaipur to Agra, the distance from Jaipur to Agra is 245 km and takes 4 hrs 20 mins to travel.",
    aboutText:
      "See the Taj Mahal in comfort — Jaipur to Agra is about 245 km, roughly 4-4.5 hours by road, completing the classic Golden Triangle route with Fatehpur Sikri en route.",
    route: "Jaipur → Fatehpur Sikri → Agra",
    fares: [
      { vehicle: "AC Sedan", vehicleType: "Dzire, Etios", oneWayFare: "₹2500", perKm: "₹11 per km", capacity: "4 people" },
      { vehicle: "AC SUV", vehicleType: "Ertiga, Innova", oneWayFare: "₹4500", perKm: "₹15 per km", capacity: "7 people" },
    ],
    attractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"],
    faqs: [
      { question: "Can I do Jaipur to Agra as a same-day trip?", answer: "It's a long day (8+ hours round trip plus sightseeing); most travelers prefer an overnight stay." },
      { question: "What's the one-way Sedan fare?", answer: "₹2500 all-inclusive." },
    ],
  },
];

export function getRouteBySlug(slug: string) {
  return oneWayTaxiRoutes.find((r) => r.slug === slug);
}