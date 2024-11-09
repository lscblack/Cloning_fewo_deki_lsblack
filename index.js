window.onscroll = (event) => {
    const scrollPosition = window.scrollY;
    // Add any specific actions here
    const scrollDiv = document.getElementById("scroll");
    if (scrollPosition > 397) {
        scrollDiv.classList.remove("lg:sticky");
        scrollDiv.classList.add("lg:fixed");
    } else {
        scrollDiv.classList.remove("lg:fixed");
        scrollDiv.classList.add("lg:top-0 lg:sticky");
    }
};
// Toggle Menu
const toggleMenu = () => {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("max-lg:hidden")) {
        menu.classList.remove("max-lg:hidden");
        menu.classList.add("max-lg:block");
    } else {
        menu.classList.add("max-lg:hidden");
        menu.classList.remove("max-lg:block bg-blue fixed top-10 ");
    }
};

//loop for first images grid
const GridImageOne = [
    {
        "image":"",
        "name":"",
    }
]
$(document).ready(function(){
    // Initialize the first carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: { items: 2 },
            600: { items: 3 },
            1000: { items: 4 },
            1200: { items: 5 }
        }
    });

    // Initialize the second carousel
    $(".owl-carousel2").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
            1200: { items: 4 }
        }
    });
});
