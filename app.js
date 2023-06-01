var slideLeft = document.querySelectorAll(".slider-left")[0];
var slideRight = document.querySelectorAll(".slider-right")[0];

var slides1 = document.querySelectorAll(".slide1")[0]
var slides2 = document.querySelectorAll(".slide2")[0]

function slideToRight() {
    slides1.className += " slide2"
    slides1.style.display = "none";

    slides2.style.display = "flex";
}

function slideToLeft() {
    slides2.className += " slide2"
    slides2.style.display = "none";
    
    slides1.style.display = "flex";
}