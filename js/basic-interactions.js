let hamburguer = document.querySelector(".nav-primary-button");
let primaryMenu = document.getElementsByClassName("primary-menu-control")[0];

hamburguer.addEventListener("click", () => {
        primaryMenu.classList.toggle("primary-menu-control");
        hamburguer.classList.toggle("nav-primary-animation");
});