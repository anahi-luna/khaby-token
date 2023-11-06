bars = document.querySelector(".bars");
bars.onclick = function() {
    navBar = document.querySelector(".nav_bar");
    navBar.classList.toggle("active")
}

/* window.onscroll = function(){
    const navbar = document.getElementById('navbar');
    const btnNavBar = document.getElementById('btn-navbar');
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
    btnNavBar.addEventListener('click', function(){
        if(document.body.scrollTop === 0 && document.documentElement.scrollTop === 0){
            navbar.classList.add('scrolled');
        }
    });
} */
//AOS
AOS.init({
    duration:1500,
});