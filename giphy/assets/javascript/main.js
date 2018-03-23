
var movies = ["Futurama", "Simpsons", "Family Guy", "American Dad"];

function renderButtons() {
  $("#movies-view").empty();
  for (var i = 0; i < movies.length; i++) {
 
    var a = $("<button>");
    a.addClass("gif-button");
    a.attr("data-name", movies[i]);
    a.text(movies[i]);
    $("#movies-view").append(a);
  }
}

$("#add-movie").on("click", function(event) {
  event.preventDefault();
  var movie = $("#movie-input").val().trim();
  movies.push(movie);
  renderButtons();
});

 
/////////////////////////////////////////
  $(document).on("click", ".gif-button", test)
/////////////////////////////////////////
      function test() {
      //declares the website as a variable
      var tag = $(this).attr("data-name")
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + tag;

      //ajax code to use api key
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      //callse all the information
        .then(function(response) {

        //creates a variable for the image
          var imageUrl = response.data.image_original_url;

          //creates a new image div 
          var gifImage = $("<img>");

          //gives the gifImage variable attributes
          gifImage.attr("src", imageUrl);
          gifImage.attr("alt", "gif of");

          //applies all the attributes of gifImage to #images
          $("#images").prepend(gifImage);
        });
      
      }
      
        
    
    ///////////////////////    
    
    $("#remove").on("click", function() {
    $("#images").empty()
    })
      ////////////////////////////////////////
      renderButtons();



