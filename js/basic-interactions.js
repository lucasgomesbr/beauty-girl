// comportamentos do menu hamburguer
let hamburguer = document.querySelector(".nav-primary-button");
let primaryMenu = document.getElementsByClassName("primary-menu-control")[0];
// boxMobile é o efeito de escurecimento dos elementos na tela ao abrir o menu hamburguer.
let boxMobile = document.getElementById("the-box-mobile");

hamburguer.addEventListener("click", () => {
        primaryMenu.classList.toggle("primary-menu-control");
        hamburguer.classList.toggle("nav-primary-animation");
        boxMobile.classList.toggle("box-transparent-mobile");
});

// Interatividade para os links do menu na versão desktop
let menuItem = document.querySelectorAll('.itemMenu');
let menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {    
        menuItem[i].addEventListener("click", () => {
                menuItem[0].classList.remove("menuDesktopClicked");
                menuItem[1].classList.remove("menuDesktopClicked");
                menuItem[2].classList.remove("menuDesktopClicked");
                menuItem[3].classList.remove("menuDesktopClicked");
                menuItem[4].classList.remove("menuDesktopClicked");
                menuItem[i].classList.add("menuDesktopClicked");      
        });
} 

