//this is how you comment btw

//deck initializer
const deck = new Array();

//hand initializers, 1 is the player
const hand1 = new Array();
const hand2 = new Array();
const hand3 = new Array();
const hand4 = new Array();

const selectedCards = new Array();

let turnCount = 0;

let skipCount = 0;

const midCard = new Array();

const turnOrder = new Array();
turnOrder.push(hand1,hand2,hand3,hand4);

const playerOrder = new Array();
playerOrder.push(hand1,hand2,hand3,hand4);

//testing and the funny sound
document.addEventListener("keydown", function(event) {
	if (event.code == 'ArrowLeft') {
		deckReset();
		roundStart();
		document.getElementById("cards1").src = display(hand1[0]);
		document.getElementById("cards2").src = display(hand1[1]);
		document.getElementById("cards3").src = display(hand1[2]);
		document.getElementById("cards4").src = display(hand1[3]);
		document.getElementById("cards5").src = display(hand1[4]);
		document.getElementById("cards6").src = display(hand1[5]);
		document.getElementById("cards7").src = display(hand1[6]);
		document.getElementById("cards8").src = display(hand1[7]);
		document.getElementById("cards9").src = display(hand1[8]);
		document.getElementById("cards10").src = display(hand1[9]);
		document.getElementById("cards11").src = display(hand1[10]);
		document.getElementById("cards12").src = display(hand1[11]);
		document.getElementById("cards13").src = display(hand1[12]);
		document.getElementById("cards14").src = display(hand1[13]);
		
	}
	if (event.code == 'ArrowDown') {
		playSoundvb()
	}
});

document.getElementById("rulesButton").addEventListener("click", function(event) {
	 window.location.href = "rules.html";
	
});

document.getElementById("startButton").addEventListener("click", function(event) {
	 window.location.href = "index.html";
	
});

document.getElementById("backButton").addEventListener("click", function(event) {
	 window.location.href = "start.html";
	
});


//make card function
function Card(val, suit, face) {
  this.val = val;
  this.suit = suit;
  this.face = face;
}

function print(card) {
	if (card.face == "Joker") {
    	return "A Joker";
    }
	else if (card.face == 0) {
		return "No Card";
	}
	else {
    	return "The " + card.face + " of " + card.suit;
    }
}

//making cards

const card0 = new Card(0, "None", 0)

//Hearts
const card1 = new Card(1, "hearts", 3);
const card2 = new Card(2, "hearts", 4);
const card3 = new Card(3, "hearts", 5);
const card4 = new Card(4, "hearts", 6);
const card5 = new Card(5, "hearts", 7);
const card6 = new Card(6, "hearts", 8);
const card7 = new Card(7, "hearts", 9);
const card8 = new Card(8, "hearts", 10);
const card9 = new Card(9, "hearts", "jack");
const card10 = new Card(10, "hearts", "queen");
const card11 = new Card(11, "hearts", "king");
const card12 = new Card(12, "hearts", "ace");
const card13 = new Card(13, "hearts", 2);

//Diamonds
const card14 = new Card(1, "diamonds", 3);
const card15 = new Card(2, "diamonds", 4);
const card16 = new Card(3, "diamonds", 5);
const card17 = new Card(4, "diamonds", 6);
const card18 = new Card(5, "diamonds", 7);
const card19 = new Card(6, "diamonds", 8);
const card20 = new Card(7, "diamonds", 9);
const card21 = new Card(8, "diamonds", 10);
const card22 = new Card(9, "diamonds", "jack");
const card23 = new Card(10, "diamonds", "queen");
const card24 = new Card(11, "diamonds", "king");
const card25 = new Card(12, "diamonds", "ace");
const card26 = new Card(13, "diamonds", 2);

//Spades
const card27 = new Card(1, "spades", 3);
const card28 = new Card(2, "spades", 4);
const card29 = new Card(3, "spades", 5);
const card30 = new Card(4, "spades", 6);
const card31 = new Card(5, "spades", 7);
const card32 = new Card(6, "spades", 8);
const card33 = new Card(7, "spades", 9);
const card34 = new Card(8, "spades", 10);
const card35 = new Card(9, "spades", "jack");
const card36 = new Card(10, "spades", "queen");
const card37 = new Card(11, "spades", "king");
const card38 = new Card(12, "spades", "ace");
const card39 = new Card(13, "spades", 2);

//Clubs
const card40 = new Card(1, "clubs", 3);
const card41 = new Card(2, "clubs", 4);
const card42 = new Card(3, "clubs", 5);
const card43 = new Card(4, "clubs", 6);
const card44 = new Card(5, "clubs", 7);
const card45 = new Card(6, "clubs", 8);
const card46 = new Card(7, "clubs", 9);
const card47 = new Card(8, "clubs", 10);
const card48 = new Card(9, "clubs", "jack");
const card49 = new Card(10, "clubs", "queen");
const card50 = new Card(11, "clubs", "king");
const card51 = new Card(12, "clubs", "ace");
const card52 = new Card(13, "clubs", 2);

//jokers
const card53 = new Card(14, "red", "joker");
const card54 = new Card(14, "red", "Joker");
const card55 = new Card(14, "black", "joker");
const card56 = new Card(14, "black", "joker");


//sound effect
function playSoundvb() {
	let ding = new Audio('vineboom.mp3');
	ding.play();
}


//reset deck
function deckReset() {
	deck.push(card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13);
	deck.push(card14,card15,card16,card17,card18,card19,card20,card21,card22,card23,card24,card25,card26);
	deck.push(card27,card28,card29,card30,card31,card32,card33,card34,card35,card36,card37,card38,card39);
	deck.push(card40,card41,card42,card43,card44,card45,card46,card47,card48,card49,card50,card51,card52);
	deck.push(card53,card54,card55,card56);
	
	while (hand1.length > 0) {
		hand1.pop();
	};
	while (hand2.length > 0) {
		hand2.pop();
	};
	while (hand3.length > 0) {
		hand3.pop();
	};
	while (hand4.length > 0) {
		hand4.pop();
	};
}


//return a random number into an array.
//removes it from deck, intended to add to a hand array
function draw() {
	temp = deck.splice(Math.floor(Math.random() * deck.length), 1);
	
	return temp.pop();
}


//round start
function roundStart() {
	while (deck.length > 3) {
		hand1.push(draw());
		hand2.push(draw());
		hand3.push(draw());
		hand4.push(draw());
		
	}
	while (midCard.length > 0) {
		midCard.pop();
	};
	
	
	midCard.push(card0);
	turnCount++;
}

//play a card
function play(hand, card) {
	midCard.pop();
	midCard.push(card);
	
}

//start a turn for given hand (bots)
function turn(hand) {
	//set to lowest possible value
	turnCount++;
	temp = 20;
	temp2 = midCard[0].val;
	temp3 = hand[0];
	hand.forEach((card, index) => {
		if (card.val < temp && card.val > temp2) {
			temp = card.val;
			temp3 = card;
		};
	});
	if (temp > temp2 && temp != 20) {
		play(hand, temp3);
		temp4 = hand.splice(hand.indexOf(temp3),1);
		skipCount = 0;
	}
	else {
		skipCount++;
	}
	
}

//breaking stuff for some reason
/*
//give an array of the hands
function turnOrder(handSet) {
	skipCount = 0;
	counter = 0;
	while (skipCount < 3) {
		if (counter >= 4) {
			counter -= 4;
		}
		turn(handSet[counter]);
		counter++;
	}
}
*/

//card selection function
function selectCard(card) {
	selectedCards.push(card);
}

//card selection clear
function unselectAllCards() {
	while (selectedCards.length > 0) {
		selectedCards.pop();
	};
}

//selection checker to determine if it can be played
function selectChecker() {

	if (selectedCards.length == midCard.length || selectedCards.length < 5 && selectedCards.length > 0 && midCard.length == 1 && midCard[0].val == 0) {
		//makes an array of just the values of the selected card(s)
		tempArray = new Array();
		for (let i = 0; i < selectedCards.length; i++) {
			tempArray.push(selectedCards[i].val);
		}
		tempArray.sort();
		
		//makes an array of just the values of the last played card(s)
		tempArray2 = new Array();
		for (let i = 0; i < midCard.length; i++) {
			tempArray2.push(midCard[i].val);
		}
		tempArray2.sort();
		
		//if the middle cards are just jokers you can't beat that
		if(tempArray2[0] == 14) {
			return false;
		}
		
		if (tempArray.length == 1 && tempArray[0].val > tempArray2[0]) {
			return true;
		}
		else if (tempArray.length < 1 && tempArray[0].val > tempArray2[0]) {
			let num = tempArray[0];
			for (let i = tempArray.length - 1; i > 0; i--) {
				if(tempArray[i] == 14 && num != 14) {
					tempArray.pop;
					tempArray.push(num);
					tempArray.sort();
				}
			}
			tempArray.sort();
			if (tempArray[tempArray.length - 1] == tempArray[0]) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
		
	}
	else {
		return false;
	}
}


function display(card) {
	return "images/" + card.face + "_of_" + card.suit + ".png"
}