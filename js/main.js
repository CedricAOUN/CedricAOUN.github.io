//Burger toggle actions on mobile
var burger = document.getElementById("burger");
var header = document.getElementById("navheader")

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
var spaceship2 = document.getElementById("SSimg2")
setTimeout(function(){
	spaceship2.setAttribute("src","img/spaceship3.png")
},4500)

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
