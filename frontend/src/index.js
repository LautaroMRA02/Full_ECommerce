import Error404Screen   from "./screens/Error404Screen.js";
import HomeScreen       from "./screens/HomeScreen.js";
import ProductScreen    from "./screens/ProductScreen.js";
import CartScreen       from "./screens/CartScreen.js";
import SigninScreen     from "./screens/SigninScreen.js";
import RegisterScreen   from "./screens/RegisterScreen.js";
import ProfileScreen    from "./screens/ProfileScreen.js";

import { parseRequestUrl } from "./utils.js";

import Header from './components/Header'


const routes = {
    "/" : HomeScreen,
    "/product/:id": ProductScreen,
    "/cart/:id": CartScreen,
    "/cart": CartScreen,
    "/signin": SigninScreen,
    "/register":RegisterScreen,
    "/profile":ProfileScreen,
}

const router = async() => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? `/:id` : ``) + (request.verb ? `/${request.verb}` : ``);
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

    const header = document.getElementById('header_container');
    header.innerHTML = await Header.render();
    await Header.after_render();

    const  main = document.getElementById('main_container');
    main.innerHTML = await screen.render();
    if (screen.after_render) await screen.after_render();
}

//cuando la ventana carga me ejecuta router
window.addEventListener("load",router)

window.addEventListener('hashchange',router)
