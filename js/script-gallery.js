var btnLeft = document.querySelector(".rooms__quantity--left a");
var btnCenter = document.querySelector(".rooms__quantity--center a");
var btnRight = document.querySelector(".rooms__quantity--right a");
var galleryLeft = document.querySelector(".rooms__gallery-block--left");
var galleryCenter = document.querySelector(".rooms__gallery-block--center");
var galleryRight = document.querySelector(".rooms__gallery-block--right");
galleryRight.classList.add("visually-hidden");
galleryCenter.classList.add("visually-hidden");
btnLeft.classList.add("rooms__quantity--activ");

btnLeft.addEventListener("click", function(event) {
	event.preventDefault();
	galleryLeft.classList.remove("visually-hidden");
	galleryCenter.classList.add("visually-hidden");
	galleryRight.classList.add("visually-hidden");
	btnLeft.classList.add("rooms__quantity--activ");
	btnCenter.classList.remove("rooms__quantity--activ");
	btnRight.classList.remove("rooms__quantity--activ");
});

btnCenter.addEventListener("click", function(event) {
	event.preventDefault();
	galleryLeft.classList.add("visually-hidden");
	galleryCenter.classList.remove("visually-hidden");
	galleryRight.classList.add("visually-hidden");
	btnLeft.classList.remove("rooms__quantity--activ");
	btnCenter.classList.add("rooms__quantity--activ");
	btnRight.classList.remove("rooms__quantity--activ");
});

btnRight.addEventListener("click", function(event) {
	event.preventDefault();
	galleryLeft.classList.add("visually-hidden");
	galleryCenter.classList.add("visually-hidden");
	galleryRight.classList.remove("visually-hidden");
	btnLeft.classList.remove("rooms__quantity--activ");
	btnCenter.classList.remove("rooms__quantity--activ");
	btnRight.classList.add("rooms__quantity--activ");
});
