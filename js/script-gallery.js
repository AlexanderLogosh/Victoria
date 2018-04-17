var btnYellow = document.querySelector(".rooms__quantity--left a");
var btnGreen = document.querySelector(".rooms__quantity--right a");
var galleryYellow = document.querySelector(".rooms__gallery-block--yellow");
var galleryGreen = document.querySelector(".rooms__gallery-block--green");
galleryGreen.classList.add("visually-hidden");

btnYellow.addEventListener("click", function(event) {
	event.preventDefault();
	galleryYellow.classList.toggle("visually-hidden");
	galleryGreen.classList.toggle("visually-hidden");
});

btnGreen.addEventListener("click", function(event) {
	event.preventDefault();
	galleryYellow.classList.toggle("visually-hidden");
	galleryGreen.classList.toggle("visually-hidden");
});

