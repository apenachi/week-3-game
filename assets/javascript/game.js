// Initialized array with possible values
var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' , 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Initialized array with NFL team names
var teams = ['Bears', 'Bengals', 'Bills', 'Broncos', 'Browns', 'Buccaneers', 'Colts', 'Cardinals', 'Chargers', 'Chiefs', 'Cowboys', 'Dolphins', 'Eagles', 'Falcons', 'Giants', 'Jaguars', 'Jets', 'Lions', 'Packers', 'Panthers', 'Patriots', 'Redskins', 'Raiders', 'Rams', 'Ravens', 'Saints', 'Seahawks', 'Steelers', 'Texans', 'Titans', 'Vikings', 'Fortyniners'];
// Picks a random team name from teams array
var computerPick = teams[Math.floor(Math.random() * teams.length)];
// Loops thru each char in computerPick
for (i = 0; i < computerPick.length; i++) {
	// Create html <i> tag for each letter in computerPick, and gives it a class and id name
	var html = '<i class="computerPick" id="'+ i +'" >' + computerPick[i] + '</i>'
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
var tries = 0;
document.onkeyup = function(event) {
	// Gets key pressed
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// Loops thru each item in abc array
	for (i = 0; i < abc.length; i++) {
		// Finds item in abc that matches userGuess
		if (abc[i].toLowerCase() === userGuess) {
			// Change CSS properties to the item found in abc array
			document.getElementById(abc[i].toUpperCase()).style.color = "#abc";
			document.getElementById(abc[i].toUpperCase()).style.textDecoration = "line-through";
			document.getElementById(abc[i].toUpperCase()).style.fontFamily = "Oxygen";
		}
	}
	var found = false;
	for (var i = 0; i < computerPick.length; i++) {
		if (computerPick[i].toLowerCase() === userGuess) {
			document.getElementById(i.toString()).style.color = "#fff";
			found	= true;
			console.log('found : ' + found);
		}
	}
	if (!found) {
		//tries ++;
	}
	// console.log('tries : ' + tries);
	document.getElementById("hangman").style.backgroundImage = "url('assets/images/hangman." + tries.toString() + ".jpeg')";

}
