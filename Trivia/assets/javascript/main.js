// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).


//timers 
var answerTimer // Timer for answering question
var resultTimer // Timer for results page right/wrong

// counters
var right = 0
var wrong = 0
var correct; // if true display correct page if false display wrong page

// arrays for trivia


var questionsArray = [
 "Who Isn't One of Mario's Enemies?", 
 "Which is the Largest?", 
 "What is Used to Hammer a Nail?", 
 "What's the Meaning of Life?", 
 "What is The Answer to This Question" ,
 "Why Doesn't my code work?",
 "What Do you call a cow with 3 legs?",
 "How long does it take for a car to travel 60 miles if its moving 60mph?",
 "Where do babies come from?",
 "What noise do cows make?"
]
var answersArray = [
    ["Bowser","Luigi","Wario","Goomba"],
    ["A Cow","A Boat","The Sun","Pluto"],
    ["Hammer","Nail","Board","House"],
    ["42","Money","Power","To own the largest Ostrich Farm in the World"],
    ["Not this one","Or This one","This one!","The other one"],
    ["You Broke It","The","First","Answer"],
    ["Lean Beef","Sad","Unfortunate","Food"],      
    ["1 hour","3 hours","30 minutes","45 minutes"],
    ["The Stork","Airplanes","The Milkman","Ask your parents"],
    ["Woof","Moo","Bork","Meow"],


]

var correctAnswers = [
    [false,true,false,false],
    [true,false,false,false],
    [true,false,false,false],
    [true,false,false,false],
    [true,false,false,false]
    
]
var resultspage 
var j=0
var i=0

                
$(document).ready(function(){
        /////function to create answers            
    var start = function() {
            $(".question").empty()
            $(".question").text(questionsArray[j])        
            $(".answer").empty()
        
            for (var i= 0; i<questionsArray.length; i++){
            var choices=$('<button>');
            choices.addClass( 'answer' + [i])               
            $('.answer' + [i]).text(answersArray[j][i])
            $(".answer").append()
        }
        }
start()

var number = 30;

var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
  number--;
  $("#counter").html("<h2> You Have " + number + " Seconds Left!</h2>");
  if (number === 0) {
    stop();
  }
}
function stop() {
  clearInterval(intervalId);
}

run();



////////////////////////////    
/////////////////////////////
//End Game Function//   

if (j<questionsArray.length) {
    $(".answers").on('click', function() {
    console.log(j)
    j++
    start()
    clearInterval(intervalId);
    number = 30
    run()
    })
    }
    else{
        $(".answers").on('click', function() {
            console.log("stop")
            })
        }
})

 //////////////////////////

                


