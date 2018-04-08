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
panorama.classList.add("visually-hidden");

title.addEventListener("click", function(event) {
	title.classList.toggle("map__title--bottom-corners");
	panorama.classList.toggle("visually-hidden");
});
