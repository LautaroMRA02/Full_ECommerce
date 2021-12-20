import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen  from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
    "/" : HomeScreen,
    "/product/:id": ProductScreen,
}


const router = async() => {

    const request = parseRequestUrl();
    const parseUrl = 
        (request.resource ? `/${request.resource}` : '/') + (request.id ? `/:id` : ``) + (request.verb ? `/${request.verb}` : ``);
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen; 

    const  main = document.getElementById('main_container');
    main.innerHTML = await screen.render();
}


//cuando la ventana carga me ejecuta router
window.addEventListener("load",router)

window.addEventListener('hashchange',router)