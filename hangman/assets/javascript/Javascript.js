window.onload = function () {

  var letterbutton = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var animalArray;         // Array of topics
  var word ;              // Selected word
  var guess ;             // guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
      wins = 0
      losses = 0
  var    typeword = []
  
  var userText = document.getElementById("user-text");
  var guessesArray = [ ]
  var showLives = document.getElementById("mylives");
  
  
  
    //buttons
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
  
    for (var i = 0; i < letterbutton.length; i++) {
      letters.id = 'letterbutton';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = letterbutton[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  
  
  // Create guesses ul
  result = function () {
    wordHolder = document.getElementById('secret');
    correct = document.createElement('ul');
    
    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'answer');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === " ") {
        guess.innerHTML = " ";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }
      
      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  

  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      losses --
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        wins ++
      }
    }
  }
  
  
  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
      
    }
  }
  

  document.onkeypress = function(event) {
    userText.textContent = event.key;
    guessesArray.push(event.key)
    console.log(guessesArray)
    document.getElementById("user-text").innerHTML = guessesArray;}
  
  
  // Play
  play = function () {
    animalArray = ["okapi","bongo","greater kudu","black rhinocerous","hippopotamus","pink backed pelican", "crocodile","springbok","ankole cattle","paterson eland","wildebeest","african wild dog","hyena","sable antelope","mandrill","african elephant","greater flamingo","white Rhino","bontebok","zebra","cheetah","ostritch","lion","warthog","white rhinocerous","waterbuck","yellow billed stork","scimitar horned oryx",]
  ;
    word = animalArray[Math.floor(Math.random() * animalArray.length)];
    buttons();
    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
     comments();
    result();
  
  }
  
  play()
  
   document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      play();
    }
  
  }
