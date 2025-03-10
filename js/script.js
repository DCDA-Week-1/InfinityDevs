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
        event.preventDefault(); // Mencegah default jump link
        const targetId = this.getAttribute('href').substring(1); // Ambil id target
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Scroll ke posisi elemen
                behavior: 'smooth' // Efek smooth scrolling
            });
        }
    });
});


// check lebar
// $(window).resize(function () {
//     var width = $(window).width();
//     if(width > 599) {
//         menu.css("display", "block");
//     } else {
//         menu.css("display", "none");
//     }
//     klikMenu();
// });