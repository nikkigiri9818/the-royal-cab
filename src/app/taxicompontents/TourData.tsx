export type TourDay = {
  day: string;
  title: string;
  description: string;
};

export type TourDataType = {
  id: number;
  slug: string;
  title: string;
  duration: string;
  rating: string;
  price: string;
  startCity: string;
  tripType: string;
  destinations: string;
  description: string;
  image: string;

  itinerary: TourDay[];

  included: string[];
  excluded: string[];

  route: string[];
  totalKm: string;
  nights: string;
};

export const tourData: TourDataType[] = [
  {
    id: 1,
    slug: "golden-triangle-itinerary",
    title: "Golden Triangle Itinerary",
    duration: "6 Days / 5 Nights",
    rating: "4.5",
    price: "₹ On Request",
    startCity: "Delhi",
    tripType: "Heritage Tour",
    destinations: "Delhi • Agra • Jaipur",
    description:
      "India's most celebrated travel route connecting Delhi, Agra and Jaipur through centuries of history, art, architecture and royal heritage.",
    image: "/assets/img/tour/taj.jpg",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & First Impressions of Delhi",
        description:
          "Welcome to Delhi, hotel check-in, orientation walk and evening at leisure.",
      },
      {
        day: "Day 2",
        title: "Old Delhi Charm & Evening in Agra",
        description:
          "Explore Jama Masjid, Chandni Chowk spice markets and drive to Agra.",
      },
      {
        day: "Day 3",
        title: "The Magnificence of Agra",
        description:
          "Visit the Taj Mahal at dawn, Agra Fort and enjoy the Mehtab Bagh sunset view.",
      },
      {
        day: "Day 4",
        title: "The Abandoned Mughal Capital",
        description:
          "Visit Fatehpur Sikri before continuing towards Jaipur.",
      },
      {
        day: "Day 5",
        title: "Royal Exploration of the Pink City",
        description:
          "Explore Amber Fort, City Palace, Hawa Mahal and Jaipur bazaars.",
      },
      {
        day: "Day 6",
        title: "Farewell to Rajasthan",
        description:
          "Morning at leisure followed by transfer to airport or onward destination.",
      },
    ],

    included: [
      "Luxury accommodation",
      "Private AC transport",
      "Expert local guides",
      "All entry tickets",
      "Meals & dining",
      "24/7 support",
    ],

    excluded: [
      "Airfare or train tickets",
      "Personal expenses and shopping",
      "Camera / video fees at monuments",
      "Travel insurance",
      "Lunch and evening snacks",
    ],

    route: ["New Delhi", "Agra", "Jaipur"],
    totalKm: "~720 KM",
    nights: "5 Nights",
  },

  {
    id: 2,
    slug: "7-day-coastal-heritage-tour-tamilnadu",
    title: "7-Day Coastal & Heritage Tour Tamilnadu",
    duration: "7 Days / 6 Nights",
    rating: "4.7",
    price: "₹ On Request",
    startCity: "Chennai",
    tripType: "Coastal & Heritage Tour",
    destinations:
      "Chennai • Mahabalipuram • Pondicherry • Chidambaram • Thanjavur • Trichy • Madurai",
    description:
      "A journey through Tamil Nadu combining coastal beauty, UNESCO heritage monuments, temples, colonial charm and sacred traditions.",
    image: "/assets/img/tour/tamil.jpg",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Chennai",
        description:
          "Hotel check-in and explore Marina Beach and Chennai city attractions.",
      },
      {
        day: "Day 2",
        title: "Chennai to Mahabalipuram",
        description:
          "Coastal drive with visits to Shore Temple, Arjuna's Penance and Five Rathas.",
      },
      {
        day: "Day 3",
        title: "Mahabalipuram Exploration",
        description:
          "Explore UNESCO heritage monuments and relax by the beach.",
      },
      {
        day: "Day 4",
        title: "Pondicherry & Chidambaram",
        description:
          "Visit French Quarter, Promenade Beach, Aurobindo Ashram and Chidambaram Temple.",
      },
      {
        day: "Day 5",
        title: "Thanjavur to Trichy",
        description:
          "Visit Brihadeeswara Temple and continue to Trichy for Rockfort Temple.",
      },
      {
        day: "Day 6",
        title: "Trichy to Madurai",
        description:
          "Drive to Madurai and explore local markets and cultural surroundings.",
      },
      {
        day: "Day 7",
        title: "Madurai & Departure",
        description:
          "Visit Meenakshi Temple and proceed for departure.",
      },
    ],

    included: [
      "Luxury accommodation",
      "Private AC transport",
      "Expert local guides",
      "All entry tickets",
      "Meals & dining",
      "24/7 support",
    ],

    excluded: [
      "Airfare or train tickets",
      "Personal expenses and shopping",
      "Camera / video fees at monuments",
      "Travel insurance",
      "Lunch and evening snacks",
    ],

    route: [
      "Chennai - Mahabalipuram",
      "Pondicherry - Chidambaram",
      "Thanjavur - Trichy",
      "Trichy - Madurai",
    ],

    totalKm: "~650 KM",
    nights: "6 Nights",
  },

  {
    id: 3,
    slug: "wildlife-nature-trail-8-9-days",
    title: "Wildlife & Nature Trail",
    duration: "9 Days / 8 Nights",
    rating: "4.3",
    price: "₹ On Request",
    startCity: "Jabalpur",
    tripType: "Wildlife & Nature Tour",
    destinations:
      "Jabalpur • Bhedaghat • Kanha • Bandhavgarh • Pachmarhi",
    description:
      "A wildlife and nature journey through marble rock canyons, waterfalls, dense forests, tiger safaris and the hill landscapes of Madhya Pradesh.",
    image: "/assets/img/tour/wild.jpg",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Jabalpur",
        description:
          "Hotel check-in and evening visit to Bhedaghat for sunset views of marble rocks.",
      },
      {
        day: "Day 2",
        title: "Bhedaghat & Dhuandhar Falls",
        description:
          "Boat ride through the marble rock canyon and visit Dhuandhar Falls.",
      },
      {
        day: "Day 3",
        title: "Jabalpur to Kanha National Park",
        description:
          "Drive to Kanha, check in at the wildlife resort and relax.",
      },
      {
        day: "Day 4",
        title: "Kanha Safari Experience",
        description:
          "Morning and evening jungle safaris.",
      },
      {
        day: "Day 5",
        title: "Kanha to Bandhavgarh",
        description:
          "Scenic forest drive to Bandhavgarh and check-in.",
      },
      {
        day: "Day 6",
        title: "Bandhavgarh Safari",
        description:
          "Wildlife safari experience inside Bandhavgarh.",
      },
      {
        day: "Day 7",
        title: "Bandhavgarh to Pachmarhi",
        description:
          "Drive to Pachmarhi hill station and relax in scenic surroundings.",
      },
      {
        day: "Day 8",
        title: "Pachmarhi Sightseeing",
        description:
          "Visit Bee Falls, Pandav Caves and Sunset Point.",
      },
      {
        day: "Day 9",
        title: "Departure",
        description:
          "Breakfast and transfer for onward journey.",
      },
    ],

    included: [
      "Luxury accommodation",
      "Private AC transport",
      "Expert local guides",
      "All entry tickets",
      "Meals & dining",
      "24/7 support",
    ],

    excluded: [
      "Airfare or train tickets",
      "Personal expenses and shopping",
      "Camera / video fees",
      "Travel insurance",
      "Lunch and evening snacks",
    ],

    route: [
      "Jabalpur & Bhedaghat",
      "Kanha National Park",
      "Bandhavgarh National Park",
      "Pachmarhi",
    ],

    totalKm: "~850 KM",
    nights: "8 Nights",
  },







  {
    id: 7,
    slug: "8-day-royal-rajasthan-tour",
    title: "8-Day Royal Rajasthan Tour",
    duration: "8 Days / 7 Nights",
    rating: "4.2",
    price: "₹ On Request",
    startCity: "Jaipur",
    tripType: "Heritage Tour",
    destinations:
      "Jaipur • Bikaner • Jaisalmer • Jodhpur • Udaipur",
    description:
      "Discover Rajasthan's royal cities, desert landscapes, golden dunes, blue streets and romantic lakes.",
    image: "/assets/img/tour/udaipur.webp",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Jaipur",
        description:
          "Hotel check-in, leisure time and local markets.",
      },
      {
        day: "Day 2",
        title: "Jaipur Sightseeing",
        description:
          "Amber Fort, City Palace, Jantar Mantar and Hawa Mahal.",
      },
      {
        day: "Day 3",
        title: "Jaipur to Bikaner",
        description:
          "Visit Junagarh Fort and explore local markets.",
      },
      {
        day: "Day 4",
        title: "Bikaner to Jaisalmer",
        description:
          "Visit Jaisalmer Fort and sunset at Gadisar Lake.",
      },
      {
        day: "Day 5",
        title: "Jaisalmer Desert Safari",
        description:
          "Sam Sand Dunes, camel safari, folk show and desert camp.",
      },
      {
        day: "Day 6",
        title: "Jaisalmer to Jodhpur",
        description:
          "Visit Mehrangarh Fort, Jaswant Thada and Clock Tower Market.",
      },
      {
        day: "Day 7",
        title: "Jodhpur to Udaipur",
        description:
          "Scenic drive to Udaipur and evening leisure at Lake Pichola.",
      },
      {
        day: "Day 8",
        title: "Udaipur & Departure",
        description:
          "City Palace, Saheliyon Ki Bari and Fateh Sagar Lake.",
      },
    ],

    included: [
      "Luxury accommodation",
      "Private AC transport",
      "Expert local guides",
      "All entry tickets",
      "Meals & dining",
      "24/7 support",
    ],

    excluded: [
      "Airfare or train tickets",
      "Personal expenses",
      "Camera / video fees",
      "Travel insurance",
      "Lunch and evening snacks",
    ],

    route: [
      "Jaipur",
      "Bikaner",
      "Jaisalmer",
      "Jodhpur",
      "Udaipur",
    ],

    totalKm: "~1250 KM",
    nights: "7 Nights",
  },

  {
    id: 8,
    slug: "14-day-cultural-tour-rajasthan",
    title: "14-Day In-Depth Cultural Tour of Rajasthan",
    duration: "14 Days / 13 Nights",
    rating: "5",
    price: "₹ On Request",
    startCity: "Jaipur",
    tripType: "Heritage Tour",
    destinations:
      "Jaipur • Ranthambore • Pushkar • Jodhpur • Jaisalmer • Udaipur • Chittorgarh",
    description:
      "An immersive Rajasthan journey covering royal heritage, wildlife safaris, sacred temples, golden deserts and lakeside palaces.",
    image: "/assets/img/tour/rajclu.webp",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Jaipur",
        description:
          "Hotel check-in and explore local markets.",
      },
      {
        day: "Day 2",
        title: "Jaipur Sightseeing",
        description:
          "Amber Fort, City Palace, Jantar Mantar and Hawa Mahal.",
      },
      {
        day: "Day 3",
        title: "Ranthambore National Park",
        description:
          "Jungle safari experience in Ranthambore.",
      },
      {
        day: "Day 4",
        title: "Ranthambore to Pushkar",
        description:
          "Visit Brahma Temple, Pushkar Lake and evening Aarti.",
      },
      {
        day: "Day 5",
        title: "Pushkar to Jodhpur",
        description:
          "Drive to Jodhpur and explore local markets.",
      },
      {
        day: "Day 6",
        title: "Jodhpur Sightseeing",
        description:
          "Mehrangarh Fort, Jaswant Thada and Clock Tower Market.",
      },
      {
        day: "Day 7",
        title: "Jodhpur to Jaisalmer",
        description:
          "Drive to Jaisalmer and visit Gadisar Lake.",
      },
      {
        day: "Day 8",
        title: "Jaisalmer Fort & City Tour",
        description:
          "Visit Jaisalmer Fort and Patwon Ki Haveli.",
      },
      {
        day: "Day 9",
        title: "Jaisalmer Desert Safari",
        description:
          "Camel safari, folk dance and overnight desert camp.",
      },
      {
        day: "Day 10",
        title: "Jaisalmer to Udaipur",
        description:
          "Visit Ranakpur Jain Temple en route.",
      },
      {
        day: "Day 11",
        title: "Udaipur Sightseeing",
        description:
          "City Palace, Lake Pichola boat ride and Jagdish Temple.",
      },
      {
        day: "Day 12",
        title: "Udaipur Exploration",
        description:
          "Saheliyon Ki Bari, Fateh Sagar Lake and Monsoon Palace viewpoint.",
      },
      {
        day: "Day 13",
        title: "Chittorgarh Fort",
        description:
          "Explore Chittorgarh Fort, Vijay Stambh and Rani Padmini Palace.",
      },
      {
        day: "Day 14",
        title: "Departure",
        description:
          "Breakfast and transfer to airport or railway station.",
      },
    ],

    included: [
      "Luxury accommodation",
      "Private AC transport",
      "Expert local guides",
      "All entry tickets",
      "Meals & dining",
      "24/7 support",
    ],

    excluded: [
      "Airfare or train tickets",
      "Personal expenses and shopping",
      "Camera / video fees",
      "Travel insurance",
      "Lunch and evening snacks",
    ],

    route: [
      "Jaipur",
      "Ranthambore",
      "Pushkar",
      "Jodhpur",
      "Jaisalmer",
      "Udaipur",
      "Chittorgarh",
    ],

    totalKm: "~1800 KM",
    nights: "13 Nights",
  },

  {
    id: 9,
    slug: "7-days-jaipur-udaipur-heritage-tour",
    title: "7-Day Heritage Itinerary Jaipur to Udaipur",
    duration: "7 Days / 6 Nights",
    rating: "4.2",
    price: "₹ On Request",
    startCity: "Jaipur",
    tripType: "Heritage Tour",
    destinations:
      "Jaipur • Pushkar • Jodhpur • Udaipur",
    description:
      "A Rajasthan heritage journey blending forts, sacred towns, desert landscapes, blue city streets and serene lakes.",
    image: "/assets/img/tour/jodhpur.webp",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Jaipur",
        description:
          "Hotel check-in and explore local markets.",
      },
      {
        day: "Day 2",
        title: "Royal Exploration of Jaipur",
        description:
          "Amber Fort, City Palace, Jantar Mantar and Hawa Mahal.",
      },
      {
        day: "Day 3",
        title: "Jaipur to Ajmer & Pushkar",
        description:
          "Ajmer Sharif Dargah, Brahma Temple and Pushkar Lake.",
      },
      {
        day: "Day 4",
        title: "Pushkar to Jodhpur",
        description:
          "Drive to Jodhpur and explore local markets.",
      },
      {
        day: "Day 5",
        title: "Jodhpur to Udaipur",
        description:
          "Mehrangarh Fort and Jaswant Thada before Udaipur.",
      },
      {
        day: "Day 6",
        title: "Udaipur Sightseeing",
        description:
          "City Palace, Lake Pichola, Jagdish Temple and Saheliyon Ki Bari.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description:
          "Breakfast and transfer from Udaipur.",
      },
    ],

    included: [
      "Luxury accommodation",
      "Private AC transport",
      "Expert local guides",
      "All entry tickets",
      "Meals & dining",
      "24/7 support",
    ],

    excluded: [
      "Airfare or train tickets",
      "Personal expenses",
      "Camera / video fees",
      "Travel insurance",
      "Lunch and evening snacks",
    ],

    route: [
      "Jaipur",
      "Pushkar",
      "Jodhpur",
      "Udaipur",
    ],

    totalKm: "~750 KM",
    nights: "6 Nights",
  },

  {
    id: 10,
    slug: "5-days-jaipur-udaipur-heritage-tour",
    title: "5-Day Heritage Itinerary Jaipur to Udaipur",
    duration: "5 Days / 4 Nights",
    rating: "4.2",
    price: "₹ On Request",
    startCity: "Jaipur",
    tripType: "Heritage Tour",
    destinations:
      "Jaipur • Jodhpur • Udaipur",
    description:
      "A compact Rajasthan journey covering Jaipur, Jodhpur and Udaipur with forts, palaces, desert vibes and lakes.",
    image: "/assets/img/tour/udaipur.webp",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Jaipur",
        description:
          "Hotel check-in and local market exploration.",
      },
      {
        day: "Day 2",
        title: "Jaipur Sightseeing",
        description:
          "Amber Fort, City Palace, Jantar Mantar and Hawa Mahal.",
      },
      {
        day: "Day 3",
        title: "Jaipur to Jodhpur",
        description:
          "Visit Mehrangarh Fort, Jaswant Thada and Clock Tower Market.",
      },
      {
        day: "Day 4",
        title: "Jodhpur to Udaipur",
        description:
          "Scenic drive to Udaipur and evening at Lake Pichola.",
      },
      {
        day: "Day 5",
        title: "Udaipur & Departure",
        description:
          "City Palace, Saheliyon Ki Bari and Fateh Sagar Lake.",
      },
    ],

    included: [
      "Luxury accommodation",
      "Private AC transport",
      "Expert local guides",
      "All entry tickets",
      "Meals & dining",
      "24/7 support",
    ],

    excluded: [
      "Airfare or train tickets",
      "Personal expenses",
      "Camera / video fees",
      "Travel insurance",
      "Lunch and evening snacks",
    ],

    route: [
      "Jaipur",
      "Jodhpur",
      "Udaipur",
    ],

    totalKm: "~650 KM",
    nights: "4 Nights",
  },

  {
    id: 11,
    slug: "pink-city-jaipur",
    title: "2 Days Pink City Tour",
    duration: "2 Days / 1 Night",
    rating: "4.5",
    price: "₹ On Request",
    startCity: "Jaipur",
    tripType: "Heritage Tour",
    destinations: "Jaipur",
    description:
      "Explore Jaipur's royal heritage through palaces, forts, bazaars and cultural experiences.",
    image: "/assets/img/tour/jaipur.avif",

    itinerary: [
      {
        day: "Day 1",
        title: "Old City Icons & Culture",
        description:
          "City Palace, Jantar Mantar, Hawa Mahal, Johari Bazaar and local culture.",
      },
      {
        day: "Day 2",
        title: "Forts, Palaces & Sunset",
        description:
          "Amber Fort, Jal Mahal and Nahargarh Fort sunset.",
      },
    ],

    included: [
      "Luxury accommodation",
      "Private AC transport",
      "Expert local guides",
      "All entry tickets",
      "Meals & dining",
      "24/7 support",
    ],

    excluded: [
      "Airfare or train tickets",
      "Personal expenses and shopping",
      "Camera / video fees",
      "Travel insurance",
      "Lunch and evening snacks",
    ],

    route: ["Jaipur"],
    totalKm: "~150 KM",
    nights: "1 Night",
  },

  {
    id: 12,
    slug: "3-days-jaipur-pushkar-sightseeing",
    title: "3 Days Jaipur Pushkar Sightseeing",
    duration: "3 Days / 2 Nights",
    rating: "4.5",
    price: "₹ On Request",
    startCity: "Jaipur",
    tripType: "Heritage + Spiritual Tour",
    destinations: "Jaipur • Ajmer • Pushkar",
    description:
      "A perfect blend of Jaipur's royal heritage and Pushkar's spiritual experience, including forts, palaces, bazaars, holy lake and Brahma Temple.",
    image: "/assets/img/tour/puskar.webp",

    itinerary: [
      {
        day: "Day 1",
        title: "Jaipur Arrival & Sightseeing",
        description:
          "City Palace, Jantar Mantar, Hawa Mahal and local markets.",
      },
      {
        day: "Day 2",
        title: "Jaipur to Pushkar via Ajmer",
        description:
          "Amber Fort, Ajmer Sharif Dargah and Pushkar Lake evening Aarti.",
      },
      {
        day: "Day 3",
        title: "Pushkar Sightseeing & Departure",
        description:
          "Brahma Temple, ghats and local markets before departure.",
      },
    ],

    included: [
      "Luxury accommodation",
      "Private AC transport",
      "Expert local guides",
      "All entry tickets",
      "Meals & dining",
      "24/7 support",
    ],

    excluded: [
      "Airfare or train tickets",
      "Personal expenses and shopping",
      "Camera / video fees",
      "Travel insurance",
      "Lunch and evening snacks",
    ],

    route: [
      "Jaipur",
      "Ajmer",
      "Pushkar",
    ],

    totalKm: "~220 KM",
    nights: "2 Nights",
  },
];