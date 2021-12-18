import HomeScreen  from "./screens/HomeScreen.js";

const router = () => {
    const  main = document.getElementById('main_container');
    main.innerHTML = HomeScreen.render();
}


//cuando la ventana carga me ejecuta router
window.addEventListener("load",router)