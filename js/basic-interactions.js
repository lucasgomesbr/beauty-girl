let hamburguer = document.querySelector(".nav-primary-button");
let primaryMenu = document.getElementsByClassName("primary-menu-control")[0];
let headerCover = document.getElementById("header-cover");
let headerSectionInfo = document.getElementsByClassName("section-info")[0];

hamburguer.addEventListener("click", () => {
        primaryMenu.classList.toggle("primary-menu-control");
        hamburguer.classList.toggle("nav-primary-animation");
        headerCover.classList.toggle("header-cover-image-effetcs");
        headerSectionInfo.classList.toggle("header-section-effects");
});