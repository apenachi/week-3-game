// Initialized array with possible values
var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' , 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Initialized array with NFL team names
var teams = ['Bears', 'Bengals', 'Bills', 'Broncos', 'Browns', 'Buccaneers', 'Colts', 'Cardinals', 'Chargers', 'Chiefs', 'Cowboys', 'Dolphins', 'Eagles', 'Falcons', 'Giants', 'Jaguars', 'Jets', 'Lions', 'Packers', 'Panthers', 'Patriots', 'Redskins', 'Raiders', 'Rams', 'Ravens', 'Saints', 'Seahawks', 'Steelers', 'Texans', 'Titans', 'Vikings', 'Fortyniners'];

var computerPick

function pickTeam() {
	document.querySelector('.phrase').innerHTML = "";
	document.querySelector('.alphabet').innerHTML = "";
	// Picks a random team name from teams array
	computerPick = teams[Math.floor(Math.random() * teams.length)];
	console.log(computerPick);
	// Loops thru each char in computerPick
	for (i = 0; i < computerPick.length; i++) {
		// Create html <i> tag for each letter in computerPick, and gives it a class and id name
		// var html = '<i class="computerPick" id="'+ i +'" >' + computerPick[i] + '</i>'
		var html = '<i class="computerPick" id="'+ i +'" >' + ' ' + '</i>'
		// Renders html
		document.querySelector('.phrase').innerHTML = document.querySelector('.phrase').innerHTML + html;
	}
	// Loops thru each item in abc array
	for (i = 0; i < abc.length; i++) {
		// Create html <i> tag for each item in abc array and gives it a class and id name
		var html = '<i class="char" id="'+ abc[i] +'">' + abc[i] + '</i>'
		// Renders html
		document.querySelector('.alphabet').innerHTML = document.querySelector('.alphabet').innerHTML + html;
	}
}
pickTeam();
var badGuesses = 0;
var goodGuesses = 0;
var leftGuesses = 6;
var homeScore = 0;
var guessScore = 0;
var choosenChars = '';
var winner = '';
var s = 0;
var m = '00';
document.onkeyup = function(event) {

	// Gets key pressed
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// Loops thru each item in abc array
	for (i = 0; i < abc.length; i++) {
		// Finds item in abc that matches userGuess
		if (abc[i].toLowerCase() === userGuess) {
			// Change CSS properties to the item found in abc array
			document.getElementById(abc[i].toUpperCase()).style.color = "#979794";
			document.getElementById(abc[i].toUpperCase()).style.textDecoration = "line-through";
			document.getElementById(abc[i].toUpperCase()).style.fontFamily = "Oxygen";
		}
	}
	var found = false;
	for (var i = 0; i < computerPick.length; i++) {
		if (computerPick[i].toLowerCase() === userGuess) {
			document.getElementById(i.toString()).innerHTML = userGuess.toUpperCase();
			document.getElementById(i.toString()).style.backgroundColor = "#33CC33";
			document.getElementById(i.toString()).style.color = "#fff";
			document.getElementById(i.toString()).style.backgroundImage = "url('none.jpeg')";
			winner = winner + userGuess;
			if (choosenChars.indexOf(userGuess) === -1) {
				found	= true;	
				choosenChars = choosenChars + userGuess;				
			}
			console.log('found : ' + found);
		}
	}
	var play = document.getElementById("keysound");
	console.log('indexOf :' + choosenChars.indexOf(userGuess));
	if (!found) {
		badGuesses ++;
		play.src = "assets/mp3/Wrong.mp3";
		document.getElementById("wrong").innerHTML = badGuesses;
		document.getElementById("left").innerHTML = leftGuesses - badGuesses;
	} else {
		goodGuesses ++;
		play.src = "assets/mp3/Right.mp3";
		document.getElementById("right").innerHTML = goodGuesses;
	}
	play.load();
	console.log('badGuesses : ' + badGuesses);
	document.getElementById("hangman").style.backgroundImage = "url('assets/images/hangman." + badGuesses.toString() + ".jpeg')";

	// You lose
	if (badGuesses === leftGuesses) {
		play.src = "assets/mp3/ScaryScream.mp3";
		play.load();
		badGuesses = 0;
		goodGuesses = 0;
		homeScore++;
		choosenChars = '';
		winner = '';
		alert('Computer Wins ...!!');
		document.getElementById("home").innerHTML = homeScore;
		document.getElementById("wrong").innerHTML = badGuesses;
		document.getElementById("right").innerHTML = goodGuesses;
		document.getElementById("left").innerHTML = leftGuesses - badGuesses;
		document.getElementById("hangman").style.backgroundImage = "url('assets/images/hangman.0.jpeg')";
		pickTeam();
		// document.querySelector('.phrase').innerHTML = "";
		// document.onkeyup = null;
		// location.reload();
	}
	console.log(winner);
	if (winner.length === computerPick.length) {
		badGuesses = 0;
		goodGuesses = 0;
		guessScore++;
		choosenChars = '';
		winner = '';
		alert('You Win ...!!');
		document.getElementById("guess").innerHTML = guessScore;
		document.getElementById("home").innerHTML = homeScore;
		document.getElementById("wrong").innerHTML = badGuesses;
		document.getElementById("right").innerHTML = goodGuesses;
		document.getElementById("left").innerHTML = leftGuesses - badGuesses;
		document.getElementById("hangman").style.backgroundImage = "url('assets/images/hangman.0.jpeg')";
		pickTeam();
	}	
}
setInterval(timer, 1000);

function timer() {
	var currentTime = new Date();
	// hour = currentTime.getHours();
	// var min  = currentTime.getMinutes();
	var sec  = currentTime.getSeconds();
	if (sec != s) { s++; }
	if (s === 60) { 
		s = 0;
		m ++;
		if (m < 10) { m = '0' + m;}	
	}
	if (s < 10) { s = '0' + s;}
	// console.log("current is " + m + ' : ' + s);
	document.getElementById('timer').innerHTML = m + ' : ' + s;
}
