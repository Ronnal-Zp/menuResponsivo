const $buttonShow = document.getElementById("show");
const $navMenu = document.querySelector(".nav-menu")

$buttonShow.addEventListener("click", ()=>{
    $navMenu.classList.toggle("nav-menu--visible")

    if($navMenu.classList.contains("nav-menu--visible")){
        $buttonShow.setAttribute("aria-label", "Cerrar menú")
    }else{
        $navMenu.setAttribute("aria-label", "Abrir menú")
    }
})