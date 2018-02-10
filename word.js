var letterConstructor = require("./letter.js");

function word(value){
	this.value = value;
	this.letters = [];
	this.guessesMade = "";
	this.guessesLeft = this.value.length + 5;
	this.flag = false;

	for(var i = 0; i < this.value.length; i++) {
		this.letters.push(new letterConstructor.letter(this.value[i]));
	}
}


word.prototype.isComplete = function(){
	for(var i = 0; i < this.letters.length; i++){
		if(!this.letters[i].show)
			return false;
	}
	return true;
};


word.prototype.findLetter = function(letter){
	var lowerLetter = letter.toLowerCase();
	this.flag = false;
	if (this.guessesMade.indexOf(lowerLetter) != -1) {
		console.log("	!!! You have already guessed that letter !");
		this.flag = true;
		return;
	}
	this.guessesMade += lowerLetter;
	for(var i=0; i<this.letters.length;i++){
		if(this.letters[i].value.toLowerCase() === lowerLetter){
			this.letters[i].show = true;
			this.flag = true;
		}
	}

	if(!this.flag){
		console.log("	### Incorrect Guess ###");
		this.guessesLeft -= 1;
	}
	else
		console.log("	### Correct Guess ###");
};

word.prototype.toString = function(){
	var output = "";
	for(var i=0; i<this.letters.length; i++){
		output += this.letters[i].placeHolder();
	}
	return output;
};

module.exports = word;
