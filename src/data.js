// import { v4 as uuid } from "uuid";
const sliderData = [
  {
    id: 0,
    projectName: "URL shortening API landing page",
    langs: ["scss", "js", "api"],
    tmbImg: "/projectImages/url-short-tumb.png",
    img: [
      "/projectImages/url-short-1-desktop-ss.png",
      "/projectImages/url-short-2-desktop-ss.png",
      "/projectImages/url-short-mobile-ss.png",
    ],
    liveLink: "https://sonishn213.github.io/urlShortner/",
    gitLink: "https://github.com/sonishn213/urlShortner",
    aboutProject:
      "Url Shortner is a website for url shortening using  the shrtcode API to create shortened URLs and display them. This site Responsive to all screen widths. In this website users are able to paste or type there long url and get the shortened url. The long and short urls are saved in local storage and available copy with click of a button. ",
  },
  {
    id: 1,
    projectName: "IP Address Tracker",
    langs: ["scss", "js", "api"],
    tmbImg: "/projectImages/ip-tracker-tumb.png",
    img: [
      "/projectImages/ip-track-desktop-ss.png",
      "/projectImages/ip-track-mobile-ss.png",
    ],
    liveLink: "https://sonishn213.github.io/ipaddresstracker/",
    gitLink: "https://github.com/sonishn213/ipaddresstracker",
    aboutProject:
      "In address tracker allows users to get the location of a ip address. This webiste shows clients ip address on initial load. Along with the location information, the location of ip address in also shown on the map. Ip address tracking is made using IP Geolocation API by IPify and map is made using LeafletJS. User is able to paste or type ip address or Domain name onto the text field.",
  },
  {
    id: 2,
    projectName: "Advice generator app",
    langs: ["css", "js", "api"],
    tmbImg: "/projectImages/advice-tumb.png",
    img: [
      "/projectImages/advice-desktop-ss.png",
      "/projectImages/advice-mobile-ss.png",
    ],
    liveLink: "https://sonishn213.github.io/advice-ganerator/",
    gitLink: "https://github.com/sonishn213/advice-ganerator",
    aboutProject:
      "This is a fun project to generate random advice using Advice Slip API. User is able press a button to view random Advices. ",
  },
  {
    id: 3,
    projectName: "Insure landing page",
    langs: ["scss", "js", ""],
    tmbImg: "/projectImages/insurance-tumb.png",
    img: [
      "/projectImages/insure-desktop-ss.png",
      "/projectImages/insure2-desktop-ss.png",
      "/projectImages/insure-mobile-ss.png",
    ],
    liveLink: "https://sonishn213.github.io/insurence-fronted-mentor/",
    gitLink: "https://github.com/sonishn213/insurence-fronted-mentor",
    aboutProject:
      "Insure landing page a single page website built using scss and javascript. This is a imaginary landing page for a insurance company. ",
  },
  {
    id: 4,
    projectName: "Sunnyside agency landing page",
    langs: ["css", "js", ""],
    tmbImg: "/projectImages/sunny-tumb.png",
    img: [
      "/projectImages/sunny-desktop-ss.png",
      "/projectImages/sunny2-desktop-ss.png",
      "/projectImages/sunny3-desktop-ss.png",
      "/projectImages/sunny-mobile-ss.png",
    ],
    liveLink: "https://sonishn213.github.io/Sunnyside-agency-landing-page/",
    gitLink: "https://github.com/sonishn213/Sunnyside-agency-landing-page",
    aboutProject:
      "Sunnyside agency landing page is a single page website built using css and js. This project focuses on layouts and css",
  },
  {
    id: 5,
    projectName: "E-commerce product page",
    langs: ["css", "js", ""],
    tmbImg: "/projectImages/ecom-prod-tumb.png",
    img: [
      "/projectImages/ecom-desktop-ss.png",
      "/projectImages/ecom-mobile-ss.png",
    ],
    liveLink: "https://sonishn213.github.io/ecommercefrontendmentor",
    gitLink: "https://github.com/sonishn213/ecommercefrontendmentor",
    aboutProject:
      "E-commerce product page shows one product with its few photos and details. Clicking on the images opens a lightbox to view image slider. Users are able to add item cart and remove from cart. Cart also shows number of items inside the cart. Items in the Cart are removed in refresh the page.",
  },
  {
    id: 6,
    projectName: "Liliana's cake multipage website",
    langs: ["css", "js", ""],
    tmbImg: "/projectImages/liliana-tumb.png",
    img: [
      "/projectImages/liliana-desktop-ss.png",
      "/projectImages/liliana-mobile-ss.png",
    ],
    liveLink: "https://sonishn213.github.io/lilianas-cake/",
    gitLink: "https://github.com/sonishn213/lilianas-cake",
    aboutProject:
      "Lilianas cake is a redesign of a cake business website that I found online. I this design the content of the website is kept same and only the overall design is changed.",
  },
  {
    id: 7,
    projectName: "Blog website about dogs",
    langs: ["reactjs", "tailwindcss", "php"],
    tmbImg: "/projectImages/dogblog-tumb.png",
    img: [
      "/projectImages/dogblog-desktop-ss.png",
      "/projectImages/dogblog-desktop-3-ss.png",
      "/projectImages/dogblog-desktop-2-ss.png",
    ],
    liveLink: "https://www.sonishgowda.gq/dogblogclient/",
    gitLink: "https://github.com/sonishn213/dogblogfronted",
    aboutProject:
      "This is blog website for articles about dog's health,food etc. This website is called as dogblog and contains two pages, home page and all posts page. In the home page, users can view feautured post,latest post and categories. In the all post page, users can view all posts filterd by categorie and they can also sort post as latest and oldest. Click on the title of post to view a post. While reading the blog, users are also shown related posts. This website is built with reactjs and taiwindcss for fronted and Php and mysql for backend. ",
  },
  {
    id: 8,
    projectName: "Countries info with REST Countries api",
    langs: ["reactjs", "tailwindcss", "API"],
    tmbImg: "/projectImages/rest-tumb.png",
    img: [
      "/projectImages/rest-desktop-1-ss.png",
      "/projectImages/rest-desktop-3-ss.png",
      "/projectImages/rest-desktop-4-ss.png",
    ],
    liveLink: "https://sonishn213.github.io/rest-country",
    gitLink: "https://github.com/sonishn213/rest-country",
    aboutProject:
      "This website is for viewing information about various Countries from different continents. Users are able click on country card to view information about a country. Users can also filer countries by continents. Users can search for any countries by name. click on country card to view more info about a country. after clicking users are redirected to information page where users can view details like population, native name, etc., the location of country also is shown on the same page. This website uses Rest countries api to get information of countries and leaflet api to display map",
  },
];
export default sliderData;
