//Burger action toggle sur mobile
var burger = document.getElementById("burger");

burger.addEventListener('click', function(){
    burger.classList.toggle("is-active");
    var x = document.getElementById('navbar')
    if (x.style.display === "block") {
          x.style.display = "none";

        } else {
          x.style.display = "block";
        }
})


//Spaceship stop transition - Formation Page
var spaceship = document.getElementById("SSimg2")
setTimeout(function(){
	spaceship.setAttribute("src","img/spaceship3.png")
},4500) //Apres 4.5 seconde de l'animation CSS(qui dure 5s en totale), on change l'image vers un vesseau avec les moteurs éteint.


//SlideShow 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 8000); // Change image every 2 seconds (Changed to 8)
}
