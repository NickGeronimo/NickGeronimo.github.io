
(function($){
  $(function(){

    $('.sidenav').sidenav();
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.carousel').carousel({}); setTimeout(autoplay, 5000);
  $('.carousel.carousel-slider').carousel({fullWidth:true, indicators: true})
  $('.scrollspy').scrollSpy();
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip();
  $('.parallax').parallax();
  $('.modal').modal();  

});


function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 5000);
}        
