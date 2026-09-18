export type OneWayTour = {
  slug: string;
  title: string;
  image: string;

  rating: string;
  duration: string;
  startCity: string;
  destination: string;
  type: string;

  price: string;
  distance: string;

  shortDescription: string;
  overview: string;
  overviewExtra?: string;

  itinerary: {
    title: string;
    description: string;
  }[];

  inclusions: string[];
  exclusions: string[];
};

export const oneWayTours: OneWayTour[] = [

  {
    slug: "jaipur-to-ajmer-one-way",

    title: "Jaipur to Ajmer One Way Taxi",

    image: "/assets/img/tour/jaipur.avif",

    rating: "4.8",

    duration: "Approx. 3 Hours",

    startCity: "Jaipur",

    destination: "Ajmer",

    type: "One Way Taxi",

    price: "₹ On Request",

    distance: "Approx. 135 km",

    shortDescription:
      "Comfortable one-way taxi from Jaipur to Ajmer with a professional driver.",

    overview:
      "Travel comfortably from Jaipur to Ajmer with a private one-way taxi service. Enjoy a convenient journey with an experienced driver and comfortable vehicle.",

    overviewExtra:
      "The route is suitable for travellers heading to Ajmer for sightseeing, business, pilgrimage or onward travel.",

    itinerary: [

      {
        title: "Pickup from Jaipur",
        description:
          "Your driver will pick you up from your preferred location in Jaipur at the scheduled time."
      },

      {
        title: "Jaipur to Ajmer Journey",
        description:
          "Enjoy a comfortable private journey from Jaipur towards Ajmer."
      },

      {
        title: "Drop at Ajmer",
        description:
          "Reach your selected destination in Ajmer safely and comfortably."
      }

    ],

    inclusions: [
      "Private air-conditioned car",
      "Professional driver",
      "Fuel charges",
      "Driver allowance",
      "Pickup from Jaipur",
      "Drop at Ajmer"
    ],

    exclusions: [
      "Toll charges",
      "Parking charges",
      "Entry tickets",
      "Personal expenses",
      "Additional sightseeing",
      "Anything not mentioned in inclusions"
    ]
  },


  {
    slug: "jaipur-to-pushkar-one-way",

    title: "Jaipur to Pushkar One Way Taxi",

    image: "/assets/img/tour/puskar.webp",

    rating: "4.8",

    duration: "Approx. 3 Hours",

    startCity: "Jaipur",

    destination: "Pushkar",

    type: "One Way Taxi",

    price: "₹ On Request",

    distance: "Approx. 145 km",

    shortDescription:
      "Book a comfortable private taxi from Jaipur to Pushkar for a smooth one-way journey.",

    overview:
      "Enjoy a convenient one-way taxi journey from Jaipur to Pushkar. Travel in a comfortable private vehicle with a professional driver.",

    overviewExtra:
      "This service is suitable for travellers visiting Pushkar for sightseeing, spiritual experiences or onward travel.",

    itinerary: [

      {
        title: "Pickup from Jaipur",
        description:
          "Pickup from your hotel, residence, airport or another preferred location in Jaipur."
      },

      {
        title: "Travel to Pushkar",
        description:
          "Relax during your private journey from Jaipur to Pushkar."
      },

      {
        title: "Drop at Pushkar",
        description:
          "Reach your selected destination in Pushkar safely."
      }

    ],

    inclusions: [
      "Private AC vehicle",
      "Professional driver",
      "Fuel charges",
      "Driver allowance",
      "Jaipur pickup",
      "Pushkar drop"
    ],

    exclusions: [
      "Toll charges",
      "Parking charges",
      "Monument entry fees",
      "Personal expenses",
      "Additional sightseeing",
      "Anything not mentioned above"
    ]
  },


  {
    slug: "jaipur-to-jodhpur-one-way",

    title: "Jaipur to Jodhpur One Way Taxi",

    image: "/assets/img/tour/jodhpur.webp",

    rating: "4.8",

    duration: "Approx. 6 Hours",

    startCity: "Jaipur",

    destination: "Jodhpur",

    type: "One Way Taxi",

    price: "₹ On Request",

    distance: "Approx. 335 km",

    shortDescription:
      "Private one-way taxi from Jaipur to Jodhpur with comfortable travel and experienced drivers.",

    overview:
      "Travel from Jaipur to Jodhpur in a private air-conditioned taxi. Our one-way taxi service provides a comfortable and convenient way to travel between the two Rajasthan cities.",

    overviewExtra:
      "Choose a suitable vehicle according to your travel requirements and enjoy a hassle-free point-to-point journey.",

    itinerary: [

      {
        title: "Pickup from Jaipur",
        description:
          "Pickup from your preferred location in Jaipur at the scheduled time."
      },

      {
        title: "Jaipur to Jodhpur",
        description:
          "Travel comfortably through Rajasthan with your private driver."
      },

      {
        title: "Drop at Jodhpur",
        description:
          "Drop at your hotel, residence or preferred destination in Jodhpur."
      }

    ],

    inclusions: [
      "Private AC taxi",
      "Professional driver",
      "Fuel charges",
      "Driver allowance",
      "Jaipur pickup",
      "Jodhpur drop"
    ],

    exclusions: [
      "Toll charges",
      "Parking charges",
      "Entry fees",
      "Personal expenses",
      "Extra sightseeing",
      "Anything not mentioned in inclusions"
    ]
  },


  {
    slug: "jaipur-to-udaipur-one-way",

    title: "Jaipur to Udaipur One Way Taxi",

    image: "/assets/img/tour/udaipur.webp",

    rating: "4.8",

    duration: "Approx. 7 Hours",

    startCity: "Jaipur",

    destination: "Udaipur",

    type: "One Way Taxi",

    price: "₹ On Request",

    distance: "Approx. 395 km",

    shortDescription:
      "Comfortable private one-way taxi from Jaipur to Udaipur for a smooth Rajasthan journey.",

    overview:
      "Book a private one-way taxi from Jaipur to Udaipur and enjoy a comfortable point-to-point journey with an experienced driver.",

    overviewExtra:
      "The service is suitable for tourists, families, couples and business travellers travelling between Jaipur and Udaipur.",

    itinerary: [

      {
        title: "Pickup from Jaipur",
        description:
          "Pickup from your hotel, home, airport or another preferred location in Jaipur."
      },

      {
        title: "Journey to Udaipur",
        description:
          "Enjoy a comfortable private journey towards Udaipur."
      },

      {
        title: "Drop at Udaipur",
        description:
          "Reach your selected destination in Udaipur safely and comfortably."
      }

    ],

    inclusions: [
      "Private air-conditioned vehicle",
      "Professional driver",
      "Fuel charges",
      "Driver allowance",
      "Jaipur pickup",
      "Udaipur drop"
    ],

    exclusions: [
      "Toll charges",
      "Parking charges",
      "Entry tickets",
      "Personal expenses",
      "Extra sightseeing",
      "Additional services"
    ]
  },


  {
    slug: "jaipur-to-bikaner-one-way",

    title: "Jaipur to Bikaner One Way Taxi",

    image: "/assets/img/tour/bikaner.webp",

    rating: "4.7",

    duration: "Approx. 6 Hours",

    startCity: "Jaipur",

    destination: "Bikaner",

    type: "One Way Taxi",

    price: "₹ On Request",

    distance: "Approx. 335 km",

    shortDescription:
      "Book a private Jaipur to Bikaner one-way taxi for comfortable and reliable travel.",

    overview:
      "Travel from Jaipur to Bikaner with a comfortable private one-way taxi. Enjoy door-to-door transportation with a professional driver.",

    overviewExtra:
      "This service provides a convenient travel option for tourists and travellers exploring Rajasthan.",

    itinerary: [

      {
        title: "Pickup from Jaipur",
        description:
          "Pickup from your preferred location in Jaipur."
      },

      {
        title: "Jaipur to Bikaner Journey",
        description:
          "Travel comfortably from Jaipur towards Bikaner."
      },

      {
        title: "Drop at Bikaner",
        description:
          "Drop at your preferred destination in Bikaner."
      }

    ],

    inclusions: [
      "Private AC taxi",
      "Professional driver",
      "Fuel charges",
      "Driver allowance",
      "Jaipur pickup",
      "Bikaner drop"
    ],

    exclusions: [
      "Toll charges",
      "Parking charges",
      "Entry fees",
      "Personal expenses",
      "Sightseeing",
      "Extra services"
    ]
  },


  {
    slug: "jaipur-to-jaisalmer-one-way",

    title: "Jaipur to Jaisalmer One Way Taxi",

    image: "/assets/img/tour/jaisalmer.webp",

    rating: "4.8",

    duration: "Approx. 10–11 Hours",

    startCity: "Jaipur",

    destination: "Jaisalmer",

    type: "One Way Taxi",

    price: "₹ On Request",

    distance: "Approx. 560 km",

    shortDescription:
      "Travel from Jaipur to Jaisalmer in a comfortable private one-way taxi.",

    overview:
      "Enjoy a comfortable long-distance journey from Jaipur to Jaisalmer with a private taxi and professional driver.",

    overviewExtra:
      "The one-way service is suitable for travellers planning to explore the Golden City and the Thar Desert.",

    itinerary: [

      {
        title: "Pickup from Jaipur",
        description:
          "Pickup from your preferred location in Jaipur."
      },

      {
        title: "Jaipur to Jaisalmer Journey",
        description:
          "Enjoy a comfortable private journey across Rajasthan."
      },

      {
        title: "Drop at Jaisalmer",
        description:
          "Drop at your selected destination in Jaisalmer."
      }

    ],

    inclusions: [
      "Private AC vehicle",
      "Professional driver",
      "Fuel charges",
      "Driver allowance",
      "Jaipur pickup",
      "Jaisalmer drop"
    ],

    exclusions: [
      "Toll charges",
      "Parking charges",
      "Entry tickets",
      "Personal expenses",
      "Sightseeing charges",
      "Anything not mentioned"
    ]
  }

];