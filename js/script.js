const searchIcon =document.querySelector("#srchIcon");
const searchInput = document.querySelector(".search_bar");
const bar = document.querySelector(".bar i");
const menu = document.querySelector(".menu");
const menuLink = document.querySelector(".menu a");

window.onscroll=()=>{
    searchIcon.classList.remove("fa-times");
    searchIcon.classList.remove("active");
    searchInput.classList.remove("show")

};

searchIcon.addEventListener("click",()=>{
    searchIcon.classList.toggle('fa-times');
    searchIcon.classList.toggle('active');
    searchInput.classList.toggle("show")
})

bar.addEventListener("click",()=>{
    bar.classList.toggle("fa-times");
    menu.classList.toggle("show_menu");
});

menuLink.addEventListener("click",()=>{
    menu.classList.toggle("fa-times")
    
});