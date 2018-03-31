  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC3BnB68ap2WuTq3MhGlwLfnNW_IDNkotk",
    authDomain: "train-time-table-275aa.firebaseapp.com",
    databaseURL: "https://train-time-table-275aa.firebaseio.com",
    projectId: "train-time-table-275aa",
    storageBucket: "",
    messagingSenderId: "354933329271"
  };
  firebase.initializeApp(config);

var trainList = firebase.database();
////////////////////////////////////////////////
$("#addTrain").on("click", function(){

	var trainName = $("#name").val().trim();
	var destination = $("#destination").val().trim();
	var departs = moment($("#time").val().trim(), "HH:mm").subtract(10, "years").format("X");
	var frequency = $("#frequency").val().trim();

	var Train = {
		name:  trainName,
		destination: destination,
		firstTrain: departs,
		frequency: frequency
	}

	trainList.ref().push(Train);

	$("#name").val("");
	$("#destination").val("");
	$("#time").val("");
	$("#frequency").val("");

});


trainList.ref().on("child_added", function(childSnapshot, prevChildKey){

	var tName = childSnapshot.val().name; // name of train takes value from trainlist on firebase
    var tDestination = childSnapshot.val().destination; // name of destination takes value from firebase
	var tFrequency = childSnapshot.val().frequency; // how often train arrives also firebase
    var tFirstTrain = childSnapshot.val().firstTrain; //when the trains first go out for the day also firebase
	var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency ; //calculates what times the train will arrive based off of the first departure time 
    var tMinutes = tFrequency - tRemainder; //time till next train
    
	var tArrival = moment().add(tMinutes, "m").format("hh:mm A"); 

	$("#trainTable > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
});
