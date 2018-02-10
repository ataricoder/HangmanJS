var name = require("./randomName.js");
var word = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randomWord = name();
var myWord = new word(randomWord);


var totalNames = 1;
var win = 0;
var lose = 0;

exports.letter;

console.log(
	"	-----------------------------------\n" +
	"	### Welcome to The Hangman Game ###\n" +
	"	-----------------------------------\n" +
	"	How To Play ?\n" +
	"	1) App chooses the random name\n" +
	"	2) You have to guess letter(by pressing key) and find out what is the correct name\n" +
	"	3) You have limited number of guesses\n" +
	"	4) If you guess incorrect letter, guesses left will be decremented by one\n" +
	"	5) If you guess correct letter, guesses left will remain same\n" +
	"	6) If you are able to guess correct name before guesses left reaches to 0, YOU WIN !\n" +
	"	7) If you are not able to guess correct name before guesses left reaches to 0, YOU LOSE !\n" +
	"	8) App will ask you to play again in either case, so don't worry if you lose.\n" +
	"	-----------------------------------------------------------------------------------------\n" +
	"	### Enjoy the Game ###\n");


function startUp(){
	console.log("	### Current Word : " + myWord)
	if (myWord.guessesLeft <= 0){
		console.log('	!!! You have no more guesses left ! ');
		console.log('	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ');
		lose++;
		askAgain();
	}
	else{
		guessLetter();
	}
}

var guessLetter = function(){
	inquirer.prompt([
	{
		name: 'letter',
		type: 'text',
		message: '	### Enter a letter:',
		validate: function(str){
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
		}
	}
	]).then(function(letterInput){
		var letter = letterInput.letter;
		myWord.findLetter(letter);
		if(myWord.isComplete()){
			console.log('	### You Got It Right : ' + myWord.toString());
			console.log('	##############################');
			win++;
			askAgain();
		}
		else{
			console.log('	### Guesses Left : ' + myWord.guessesLeft);
			console.log("	--------------------");

			startUp();
		}

	});
}

var askAgain = function(){
		inquirer.prompt([
		{
			name: 'choice',
			type: 'text',
			message: '	### Do you want to continue ? (y/n) ',
			validate: function(str){
				var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
				return regEx.test(str);
			}
		}
		]).then(function(answer){
			var choice = answer.choice;
			if(choice === 'y' || choice === 'Y'){
				newWord();
				totalNames++;
				startUp();
			}
			else{
				stats();
				return;
			}
		});
	}

function newWord(){
	randomWord = name();
	myWord = new word(randomWord);
}

function stats(){
	console.log(
		"	-----------------------\n" +
		"	*** Game Statistics ***\n" +
		"	-----------------------\n" +
		"	Total 	: " + totalNames + "\n" +
		"	Won 	: " + win + "\n" +
		"	Lost 	: " + lose + "\n" +
		"	-----------------------");
}
startUp();
