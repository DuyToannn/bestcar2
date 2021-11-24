$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });

  $(function () {
    $('#datetimepicker1').datetimepicker();
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    800: {
        slidesPerView: 3,
        spaceBetween: 40
    }}

});