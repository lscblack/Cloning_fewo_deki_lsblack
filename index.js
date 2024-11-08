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
