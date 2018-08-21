
(function($){
  $(function(){

    $('.sidenav').sidenav();
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.carousel').carousel({
    padding: 100
  });
  setTimeout(autoplay, 4000);
  $('.scrollspy').scrollSpy();
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip();
  $('.parallax').parallax();
  $('.modal').modal();  

});


function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4000);
}        
