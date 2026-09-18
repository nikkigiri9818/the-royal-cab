
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/home-three",
        has_dropdown: false,
        // sub_menus: [
        //     { link: "/", title: "Home One" },
        //     { link: "/home-two", title: "Home Two" },
        //     { link: "/home-three", title: "Home Three" },
        //     { link: "/home-four", title: "Home Four" },
        //     { link: "/home-five", title: "Home Five" },
        //     { link: "/home-six", title: "Home Six" },
        //     { link: "/home-seven", title: "Home Seven" },
        // ],
    },
    // {
    //     id: 2,
    //     title: "Features",
    //     link: "#",
    //     has_dropdown: true,
    //     sub_menus: [
    //         { link: "/hotel-grid", title: "Hotel Grid" },
    //         { link: "/tour-grid-1", title: "Tour Grid One" },
    //         { link: "/tour-grid-2", title: "Tour Grid Two" },
    //         { link: "/map-listing", title: "Hotel Listing" },
    //         { link: "/tour-details", title: "Tour Details One" },
    //         { link: "/tour-details-2", title: "Tour Details Two" },
    //     ],
    // },
    // {
    //     id: 3,
    //     title: "Pages",
    //     link: "#",
    //     has_dropdown: true,
    //     sub_menus: [
    //         { link: "/about", title: "About" },
    //         { link: "/team", title: "Team" },
    //         { link: "/team-details", title: "Team Details" },
    //         { link: "/shop", title: "Shop" },
    //         { link: "/shop-details", title: "Shop Details" },
    //         { link: "/cart", title: "Cart" },
    //         { link: "/wishlist", title: "Wishlist" },
    //         { link: "/checkout", title: "Checkout" },
    //         { link: "/pricing", title: "Pricing" },
    //         { link: "/faq", title: "Faq" },
    //         { link: "/login", title: "Log In" },
    //         { link: "/register", title: "Register" },
    //         { link: "/no-found", title: "Error" },
    //     ],
    // },
    // {
    //     id: 4,
    //     title: "Blogs",
    //     link: "#",
    //     has_dropdown: true,
    //     sub_menus: [
    //         { link: "/blog-grid", title: "Blog Grid" },
    //         { link: "/blog-standard", title: "Blog Standard" },
    //         { link: "/blog-details", title: "Blog Details" },
    //     ],
    // },

 {
        id: 2,
        title: "Taxi Services",
        link: "/taxi-services",
        has_dropdown: false,
       
    },

    {
        id: 3,
        title: "Luxury Cars",
        link: "/luxury-cars",
        has_dropdown: false,
       
    },

    {
    id: 4,
    title: "Tour Services",
    link: "/tour-services",
    has_dropdown: false,

    sub_menus: [
        {
            title: "Golden Triangle Itinerary (6D/5N)",
            link: "/tour-services/golden-triangle-itinerary",
        },
        {
            title: "7-Day Coastal & Heritage Tour Tamilnadu",
            link: "/tour-services/coastal-heritage-tour-tamilnadu",
        },
        {
            title: "Wildlife & Nature Trail (8-9 Days)",
            link: "/tour-services/wildlife-nature-trail",
        },
        
        {
            title: "8-Day Royal Rajasthan Tour",
            link: "/tour-services/royal-rajasthan-tour-8-days",
        },
        {
            title: "14-Day In-Depth Cultural Tour of Rajasthan",
            link: "/tour-services/cultural-tour-rajasthan-14-days",
        },
        {
            
            title: "5-Day Heritage Itinerary (Jaipur to Udaipur)",
            link: "/tour-services/jaipur-to-udaipur-5-days",
        },
        {
            
            title: "2-Days Pink City Tour, Jaipur",
            link: "/tour-services/pink-city-jaipur",
        },
        {
            
            title: "3 Days Jaipur Pushkar",
            link: "/tour-services/jaipur-pushkar-3-days",
        },
    ],
},


    {
    id: 4,
    title: "One-way Tours",
    link: "/one-way-tours",
    has_dropdown: false,

    sub_menus: [
                {  title: "Jaipur Darshan", link: "/tour-services/one-way/jaipur-darshan" },
                {  title: "Jaipur to Delhi Taxi", link: "/tour-services/one-way/jaipur-to-delhi-taxi" },
                {  title: "Jaipur to Agra Taxi", link: "/tour-services/one-way/jaipur-to-agra-taxi" },
                {  title: "Jaipur to Udaipur Taxi", link: "/tour-services/one-way/jaipur-to-udaipur-taxi" },
                {  title: "Jaipur to Jodhpur Taxi", link: "/tour-services/one-way/jaipur-to-jodhpur-taxi" },
                { title: "Jaipur Local Sightseeing", link: "/tour-services/one-way/jaipur-local-sightseeing" },
            ],
},



      {
        id: 5,
        title: "About Us",
        link: "/about",
        has_dropdown: false,
       
    },

    
    {
        id: 6,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];

export default menu_data;