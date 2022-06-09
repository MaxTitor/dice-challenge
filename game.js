var diceOneNumber = Math.floor(Math.random() * 6) + 1;
var diceTwoNumber = Math.floor(Math.random() * 6) + 1;

var diceOne = document.querySelector("body > div > div:nth-child(2) > img");
var diceTwo = document.querySelector("body > div > div:nth-child(3) > img");

diceOne.src = "images/dice" + diceOneNumber + ".png";
diceTwo.src = "images/dice" + diceTwoNumber + ".png";

var announcer = document.querySelector("body > div > h1");

if (diceOneNumber === diceTwoNumber){
	announcer.innerHTML = "Draw"
	} else if (diceOneNumber > diceTwoNumber){
	announcer.innerHTML = "Player One Wins!"
	} else if (diceOneNumber < diceTwoNumber){
	announcer.innerHTML = "Player Two Wins!"
	}
