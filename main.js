const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("classs", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

document.addEventListener("DOMContentLoaded", () => {
    // Opsi umum untuk ScrollReveal
    const scrollRevealOption = {
        distance: "50px",       // Jarak elemen bergerak
        duration: 1000,         // Durasi animasi dalam milidetik
        easing: "ease-in-out",  // Efek easing animasi
        origin: "bottom",       // Animasi muncul dari bawah
        opacity: 0,             // Mulai dengan opacity 0
    };

    // ScrollReveal untuk elemen di header
    ScrollReveal().reveal(".header__container .section__subheader", {
        ...scrollRevealOption,
    });

    ScrollReveal().reveal(".header__container h1", {
        ...scrollRevealOption,
        delay: 500, // Penundaan untuk elemen ini
    });

    ScrollReveal().reveal(".header__container .btn", {
        ...scrollRevealOption,
        delay: 1000, // Penundaan untuk elemen ini
    });

    // ScrollReveal dengan interval untuk elemen lainnya
    ScrollReveal().reveal(".room_card", {
        ...scrollRevealOption,
        interval: 300, // Waktu antar elemen room_card
    });

    ScrollReveal().reveal(".feature_card", {
        ...scrollRevealOption,
        interval: 300, // Waktu antar elemen feature_card
    });

    ScrollReveal().reveal(".news_card", {
        ...scrollRevealOption,
        interval: 300, // Waktu antar elemen news_card
    });
});




