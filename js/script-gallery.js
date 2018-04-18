var btnLeft = document.querySelector(".rooms__quantity--left a");
var btnRight = document.querySelector(".rooms__quantity--right a");
var galleryYellow = document.querySelector(".rooms__gallery-block--yellow");
var galleryGreen = document.querySelector(".rooms__gallery-block--green");
galleryGreen.classList.add("visually-hidden");
btnLeft.classList.add("rooms__quantity--activ");

btnLeft.addEventListener("click", function(event) {
	event.preventDefault();
	galleryYellow.classList.toggle("visually-hidden");
	galleryGreen.classList.toggle("visually-hidden");
	btnLeft.classList.toggle("rooms__quantity--activ");
	btnRight.classList.toggle("rooms__quantity--activ");
});

btnRight.addEventListener("click", function(event) {
	event.preventDefault();
	galleryYellow.classList.toggle("visually-hidden");
	galleryGreen.classList.toggle("visually-hidden");
	btnLeft.classList.toggle("rooms__quantity--activ");
	btnRight.classList.toggle("rooms__quantity--activ");
});

