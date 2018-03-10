var currentScore = 0
var losses = 0
var wins = 0
var randTarget = Math.floor(Math.random() * 50) + 50 //random number between 50-100
$('#wins').html('wins: ' + wins)
$('#losses').html('losses: ' + wins)


$( window ).on( "load", function() {

///////////////////////////////////////////
$(window).onLoad
var start = function() 

{
  $(".crystals").empty()

var images = ['assets/images/crystal1.jpg',
              'assets/images/crystal2.jpg',
              'assets/images/crystal3.jpg',
              'assets/images/crystal4.jpg',
            ]

 randTarget = Math.floor(Math.random() * 50) + 50
 $("#target").html('Target: ' + randTarget)
 $("#currentScore").html('Current Score: ' + currentScore)
 
  

for (var i = 0; i < 4; i++) {
    var randValue = Math.ceil(Math.random() * 10)
    console.log(randValue) 
    var crystal = $("<div>");
    crystal.attr({
      "class" :'crystal',
      "dataRand" : randValue 
  })
    crystal.css({
      "background-image":"url(" + images[i] + ")",
      "background-size":"cover"
    })
    $(".crystals").append(crystal)

  }
}

start()

///////////////////////////////////////
$(".restart").on('click', function() {
  losses ++
  currentScore = 0
  $(".crystals").empty() 
  start()

})


////////////////////////////////////////
$(document).on('click', ".crystal", function() {
 var num = parseInt($(this).attr('dataRand'));
 
 currentScore += num
 console.log(currentScore)  

 $("#currentScore").html('Current Score: ' + currentScore)

 if(currentScore > randTarget) {
losses ++
  $('#losses').html('losses: ' + losses)
  currentScore= 0
  start()
 }

 else if(currentScore === randTarget) {

  wins++
  $('#wins').html('wins: ' + wins)
  currentScore = 0
  start()
 }

})

})
