var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' , 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var teams = ['Bears', 'Bengals', 'Bills', 'Broncos', 'Browns', 'Buccaneers', 'Colts', 'Cardinals', 'Chargers', 'Chiefs', 'Cowboys', 'Dolphins', 'Eagles', 'Falcons', 'Giants', 'Jaguars', 'Jets', 'Lions', 'Packers', 'Panthers', 'Patriots', 'Redskins', 'Raiders', 'Rams', 'Ravens', 'Saints', 'Seahawks', 'Steelers', 'Texans', 'Titans', 'Vikings', 'Fortyniners'];
var computerPick = teams[Math.floor(Math.random() * teams.length)];

// document.querySelector('.phrase').innerHTML = computerPick.length;

for (i = 0; i < computerPick.length; i++) {
	// var html = '<i class="computerPick">' + computerPick[i] + '</i>'
	var html = '<i class="computerPick" id="'+ i +'" >' + computerPick[i] + '</i>'
	document.querySelector('.phrase').innerHTML = document.querySelector('.phrase').innerHTML + html;
}

for (i = 0; i < abc.length; i++) {
	var html = '<i class="char" id="'+ abc[i] +'">' + abc[i] + '</i>'
	document.querySelector('.alphabet').innerHTML = document.querySelector('.alphabet').innerHTML + html;
}
var tries = 0;
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	for (i = 0; i < abc.length; i++) {
		if (abc[i].toLowerCase() === userGuess) {
			document.getElementById(abc[i].toUpperCase()).style.color = "#abc";
			document.getElementById(abc[i].toUpperCase()).style.textDecoration = "line-through";
			document.getElementById(abc[i].toUpperCase()).style.fontFamily = "Oxygen";
		}
	}
}
