var title = document.querySelector(".map__title");
var panorama = document.querySelector(".map__panorama");
panorama.classList.add("visually-hidden");

title.addEventListener("click", function(event) {
	event.preventDefault();
	title.classList.toggle("map__title--bottom-corners");
	panorama.classList.toggle("visually-hidden");
});



