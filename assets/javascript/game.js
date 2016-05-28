// Initialized array with possible values
var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' , 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Initialized array with NFL team names
var teams = ['Bears', 'Bengals', 'Bills', 'Broncos', 'Browns', 'Buccaneers', 'Colts', 'Cardinals', 'Chargers', 'Chiefs', 'Cowboys', 'Dolphins', 'Eagles', 'Falcons', 'Giants', 'Jaguars', 'Jets', 'Lions', 'Packers', 'Panthers', 'Patriots', 'Redskins', 'Raiders', 'Rams', 'Ravens', 'Saints', 'Seahawks', 'Steelers', 'Texans', 'Titans', 'Vikings', 'Fortyniners'];
// Picks a random team name from teams array
var computerPick = teams[Math.floor(Math.random() * teams.length)];
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
var badGuesses = 0;
var goodGuesses = 0;
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
			found	= true;
			goodGuesses ++
			console.log('found : ' + found);
		}
	}
	var play = document.getElementById("keysound");
	if (!found) {
		badGuesses ++;
		play.src = "assets/mp3/Wrong.mp3";
	} else {
		play.src = "assets/mp3/Right.mp3";
	}
	play.load();

	console.log('badGuesses : ' + badGuesses);
	document.getElementById("hangman").style.backgroundImage = "url('assets/images/hangman." + badGuesses.toString() + ".jpeg')";
	// You lose
	if (badGuesses === 6) {
		play.src = "assets/mp3/ScaryScream.mp3";
		play.load();
		document.onkeyup = null;
		location.reload();
		// return false;
	} else if (goodGuesses === computerPick.length) {

	}

}


