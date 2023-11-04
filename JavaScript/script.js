bars = document.querySelector(".bars");
bars.onclick = function() {
    navBar = document.querySelector(".nav_bar");
    navBar.classList.toggle("active")
}

//AOS
AOS.init({
    duration:1500,
});