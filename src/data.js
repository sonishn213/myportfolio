import { v4 as uuid } from "uuid";
class sliderData {
  constructor(id, projectName, langs, imgUrl) {
    this.id = id;
    this.projectName = projectName;
    this.langs = langs;
    this.imgUrl = imgUrl;
  }
}
let img1 =
  "https://images.unsplash.com/photo-1633884314667-744b2e8eb217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGltYWdlc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60";

let img2 =
  "https://images.unsplash.com/photo-1534939618208-e604c88fcffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmslMjBpbWFnZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";

let img3 =
  "https://images.unsplash.com/photo-1574169208383-fb087432973a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGRhcmslMjBpbWFnZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";
export const slider1 = [
  new sliderData(uuid().slice(0, 8), "ecom landing page", ["css", "js"], img3),
  new sliderData(
    uuid().slice(0, 8),
    "landing page using api",
    ["css", "js", "api"],
    img1
  ),
  new sliderData(
    uuid().slice(0, 8),
    "url shortner",
    ["scss", "js", "api"],
    img2
  ),
  new sliderData(
    uuid().slice(0, 8),
    "Quote generator",
    ["scss", "js", "api"],
    img3
  ),
  new sliderData(
    uuid().slice(0, 8),
    "Meme template website",
    ["scss", "js", "api"],
    img1
  ),
  new sliderData(
    uuid().slice(0, 8),
    "Dad jokes generator website",
    ["scss", "js", "api"],
    img2
  ),
  new sliderData(
    uuid().slice(0, 8),
    "user athentication",
    ["scss", "js", "api"],
    img3
  ),
  new sliderData(
    uuid().slice(0, 8),
    "landing page for hotel",
    ["scss", "js", "api"],
    img1
  ),
  new sliderData(
    uuid().slice(0, 8),
    "google clone using pure js",
    ["scss", "js", "api"],
    img2
  ),
  new sliderData(
    uuid().slice(0, 8),
    "Dog blog website",
    ["reactjs", "tailwindcss"],
    img3
  ),
];
