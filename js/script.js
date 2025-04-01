// MENU
var menuButton = $(".menu-button");
var menu = $(".menu-nav ul");

function klikMenu() {
    menuButton.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}
$(document).ready(function () {
    var width = $(window).width();
    if (width < 600) {
        klikMenu();
    }
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});
