
(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

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
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);

});


function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4000);
}        
