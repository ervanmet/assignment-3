import home from "../pages/home.js";
import about from "../pages/about.js";
import destinations from "../pages/destinations.js";
import thingstodo from "../pages/thingstodo.js";
import contact from "../pages/contact.js";

export function loadPage(pageID) {
  console.log(`model.js ${pageID}`);

  const main = document.querySelector("main");

  switch (pageID) {
    case "home":
      main.innerHTML = home;
      break;

    case "about":
      main.innerHTML = about;
      break;

    case "destinations":
      main.innerHTML = destinations;
      break;

    case "thingsToDo":
      main.innerHTML = thingstodo;
      break;

    case "contact":
      main.innerHTML = contact;
      break;
  }
}
