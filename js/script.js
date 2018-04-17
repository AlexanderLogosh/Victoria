$(function(){
 $('.slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
    ]
});
})

var title = document.querySelector(".map__title");
var panorama = document.querySelector(".map__panorama");

var btnYellow = document.querySelector(".rooms__quantity--left a");
var btnGreen = document.querySelector(".rooms__quantity--right a");
var galleryYellow = document.querySelector(".rooms__gallery-block--yellow");
var galleryGreen = document.querySelector(".rooms__gallery-block--green");
panorama.classList.add("visually-hidden");

title.addEventListener("click", function(event) {
	event.preventDefault();
	title.classList.toggle("map__title--bottom-corners");
	panorama.classList.toggle("visually-hidden");
});



btnYellow.addEventListener("click", function(event) {
	event.preventDefault();
	//galleryYellow.classList.toggle("visually-hidden");
	gallerygreen.classList.remove("visually-hidden");
});

btnGreen.addEventListener("click", function(event) {
	event.preventDefault();
	//galleryYellow.classList.toggle("visually-hidden");
	gallerygreen.classList.remove("visually-hidden");
});

