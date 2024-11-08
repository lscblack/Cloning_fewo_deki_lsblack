window.onscroll = (event) => {
    const scrollPosition = window.scrollY;
    // Add any specific actions here
    const scrollDiv = document.getElementById("scroll");
    if (scrollPosition > 397) {
        scrollDiv.classList.remove("sticky");
        scrollDiv.classList.add("fixed");
    } else {
        scrollDiv.classList.remove("fixed");
        scrollDiv.classList.add("top-0 sticky");
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