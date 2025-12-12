//this is how you comment btw


//deck initializer
const deck = new Array();

//hand initializers, 1 is the player
const hand1 = new Array();
const hand2 = new Array();
const hand3 = new Array();
const hand4 = new Array();

const selectedCards = new Array();

const helpfulArray = new Array();

let turnCount = 1;

let skipCount = 0;

let winsCount = 0;

const midCard = new Array();

const turnOrder = new Array();
turnOrder.push(hand1,hand2,hand3,hand4);

const playerOrder = new Array();
playerOrder.push(hand1,hand2,hand3,hand4);

//testing and the funny sound
document.addEventListener("keydown", function(event) {
	
	if (event.code == 'ArrowDown') {
		playSoundvb()
	}
});

if (document.URL.includes("index.html")) {
	
	helpfulArray.push(document.getElementById("cards1"));
	helpfulArray.push(document.getElementById("cards2"));
	helpfulArray.push(document.getElementById("cards3"));
	helpfulArray.push(document.getElementById("cards4"));
	helpfulArray.push(document.getElementById("cards5"));
	helpfulArray.push(document.getElementById("cards6"));
	helpfulArray.push(document.getElementById("cards7"));
	helpfulArray.push(document.getElementById("cards8"));
	helpfulArray.push(document.getElementById("cards9"));
	helpfulArray.push(document.getElementById("cards10"));
	helpfulArray.push(document.getElementById("cards11"));
	helpfulArray.push(document.getElementById("cards12"));
	helpfulArray.push(document.getElementById("cards13"));
	helpfulArray.push(document.getElementById("cards14"));
	
	
	
	document.getElementById("skipButton").addEventListener("click", function(event) {
		skipCount++;
		turnsOrder();
				
		if (skipCount >= 3) {
					
			while (midCard.length > 0) {
				midCard.pop();
		
			};
			
			document.getElementById("cards15").src = "images/emptyCard.png";
			document.getElementById("cards16").src = "images/emptyCard.png";
			document.getElementById("cards17").src = "images/emptyCard.png";
			document.getElementById("cards18").src = "images/emptyCard.png";
	
			midCard.push(card0);
			skipCount = 0;
					
		}
	
	});
	
	document.getElementById("playButton").addEventListener("click", function(event) {
		if (selectedCards.length > 0) {
			if (selectChecker()) {
				
				play(hand1);
				
				turnsOrder();
				
				if (skipCount >= 3) {
					
					while (midCard.length > 0) {
						midCard.pop();
		
					};
					
					document.getElementById("cards15").src = "images/emptyCard.png";
					document.getElementById("cards16").src = "images/emptyCard.png";
					document.getElementById("cards17").src = "images/emptyCard.png";
					document.getElementById("cards18").src = "images/emptyCard.png";
	
					midCard.push(card0);
					skipCount = 0;
					
				}
			} 
		}
	
	});
	
	
	for (let i = 0; i < 14; i++) {
		helpfulArray[i].addEventListener("click", function(event) {
				selectCard(hand1[i], helpfulArray[i]);
		});		
	};
	
		
	document.addEventListener("keydown", function(event) {
		if (event.code == 'ArrowLeft') {
			deckReset();
			roundStart();
			
			for (let i = 0; i < 14; i++) {
				helpfulArray[i].src = display(hand1[i]);
			};
			
		}
		
	});
}

if (document.URL.includes("start.html")) {
	document.getElementById("rulesButton").addEventListener("click", function(event) {
		window.location.href = "rules.html";

	
	});

	document.getElementById("startButton").addEventListener("click", function(event) {
		window.location.href = "index.html";
	
	});
}

if (document.URL.includes("rules.html")) {
	document.getElementById("backButton").addEventListener("click", function(event) {
		window.location.href = "start.html";
	});
}

function turnsOrder() {
	if (hand1.length == 0) {
		//p1 wn
		winsCount++;
		document.getElementById("p1Rank").innerHTML = winsCount;
					
					
	}

	for (let i = 1; i < turnOrder.length; i++) {
		if (skipCount >= 3) {
			skipCount = 0;
			botLead(playerOrder[i])
		}
		else if (playerOrder[i].length > 0) {
			turn(playerOrder[i]);
		}
				
		if (playerOrder[i].length == 0) {
			winsCount++;
			if (playerOrder[i] == hand2) {
				document.getElementById("p2Rank").innerHTML = winsCount;
			}
			else if (playerOrder[i] == hand3) {
				document.getElementById("p3Rank").innerHTML = winsCount;
			}
			else if (playerOrder[i] == hand4) {
				document.getElementById("p4Rank").innerHTML = winsCount;
			}
			turnOrder.splice(turnOrder[i],1)
			playerOrder.splice(turnOrder[i],1)
		}
		
	}

}

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
const card54 = new Card(14, "red", "joker");
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
	
	skipCount = 0;
	turnCount = 1;
	document.getElementById("turnCount").innerHTML = turnCount;
	document.getElementById("skipCount").innerHTML = skipCount;
	
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
	document.getElementById("cards15").src = "images/emptyCard.png";
	document.getElementById("cards16").src = "images/emptyCard.png";
	document.getElementById("cards17").src = "images/emptyCard.png";
	document.getElementById("cards18").src = "images/emptyCard.png";
	
	midCard.push(card0);
	turnCount++;
}

//play a card
function play(hand) {
	
	while (midCard.length > 0) {
		midCard.pop();
		
	}
	document.getElementById("cards15").src = "images/emptyCard.png";
	document.getElementById("cards16").src = "images/emptyCard.png";
	document.getElementById("cards17").src = "images/emptyCard.png";
	document.getElementById("cards18").src = "images/emptyCard.png";
	
	midCard.push(selectedCards[0]);
	document.getElementById("cards15").src = display(selectedCards[0]);
	let tempNum = hand.indexOf(selectedCards[0]);
	if (hand == hand1) {
		helpfulArray[tempNum].src = "images/emptyCard.png";
	}
	else {
		hand.splice(tempNum, 1);
	}
	
	if (selectedCards.length > 1) {
		midCard.push(selectedCards[1]);
		document.getElementById("cards16").src = display(selectedCards[1]);
		let tempNum = hand.indexOf(selectedCards[1]);
		if (hand == hand1) {
			helpfulArray[tempNum].src = "images/emptyCard.png";
		}
		else {
			hand.splice(tempNum, 1);
		}
	}
	
	if (selectedCards.length > 2) {
		midCard.push(selectedCards[2]);
		document.getElementById("cards17").src = display(selectedCards[2]);
		let tempNum = hand.indexOf(selectedCards[2]);
		if (hand == hand1) {
			helpfulArray[tempNum].src = "images/emptyCard.png";
		}
		else {
			hand.splice(tempNum, 1);
		}
	}
	
	if (selectedCards.length > 3) {
		midCard.push(selectedCards[3]);
		document.getElementById("cards18").src = display(selectedCards[3]);
		let tempNum = hand.indexOf(selectedCards[3]);
		if (hand == hand1) {
			helpfulArray[tempNum].src = "images/emptyCard.png";
		}
		else {
			hand.splice(tempNum, 1);
		}
	}
	
	
	skipCount = 0;
	document.getElementById("turnCount").innerHTML = turnCount;
	document.getElementById("skipCount").innerHTML = skipCount;
	unselectAllCards();
	
}


function botLead(hand) {
	turnCount++;
	
	for (let i = 0; i < 10000; i++) {
		//select # cards randomly
		for (let j = 0; j < 4; j++) {
			selectedCards.push(hand[Math.floor(Math.random() * hand.length)]);
			
		};
		
		//can cards be played?
		if (selectChecker()) {
			play(hand);
			i = 20000;
		}
		
		else if (i > 5000) {
			unselectAllCards();
			for (let k = 0; k < 3; k++) {
				selectedCards.push(hand[Math.floor(Math.random() * hand.length)]);
			
			};
			
			if (selectChecker()) {
				play(hand);
				i = 20000;
			}
			
			else if (i > 7500) {
				unselectAllCards();
				for (let l = 0; l < 2; l++) {
					selectedCards.push(hand[Math.floor(Math.random() * hand.length)]);
			
				};
			
				if (selectChecker()) {
					play(hand);
					i = 20000;
				}
			
				else if (i == 9999) {
					unselectAllCards();
					selectedCards.push(hand[Math.floor(Math.random() * hand.length)]);
					play(hand);
					i = 20000;
				}
			}
		}
	};
	
	
	document.getElementById("turnCount").innerHTML = turnCount;
	document.getElementById("skipCount").innerHTML = skipCount;
	unselectAllCards();
}


//start a turn for given hand (bots)
function turn(hand) {
	
	turnCount++;
	
	while (selectedCards.length > 0) {
		selectedCards.pop();
	}
	
	
	for (let i = 0; i < 10000; i++) {
		//select # cards randomly
		for (let j = 0; j < midCard.length; j++) {
			selectedCards.push(hand[Math.floor(Math.random() * hand.length)]);
			
		};
		
		//can cards be played?
		if (selectChecker()) {
			play(hand);
			i = 20000;
		} 
	
		//no cards played
		else if (i == 9999) {
			skipCount++;
			
		}
		
		unselectAllCards();
	
	};
	
	document.getElementById("turnCount").innerHTML = turnCount;
	document.getElementById("skipCount").innerHTML = skipCount;
	unselectAllCards();
	
}

//card selection function
function selectCard(card, cardImg) {
	if (cardImg.classList.contains("card")) {
		selectedCards.push(card);
		cardImg.classList.remove("card");
		cardImg.classList.add("selectedCard");
	}
	else if (cardImg.classList.contains("selectedCard")) {
		let temp = selectedCards.indexOf(card);
		selectedCards.splice(temp,1);
		cardImg.classList.remove("selectedCard");
		cardImg.classList.add("card");
	}
}

//card selection clear
function unselectAllCards() {
	while (selectedCards.length > 0) {
		selectedCards.pop();
	};
	
	for (let i = 0; i < helpfulArray.length; i++) {
		if (helpfulArray[i].classList.contains("selectedCard")) {
			helpfulArray[i].classList.remove("selectedCard");
			helpfulArray[i].classList.add("card");
			
		}
	};
	
}

//selection checker to determine if it can be played
function selectChecker() {
//
	if (selectedCards.length == midCard.length || selectedCards.length < 5 && selectedCards.length > 0 && midCard[0].val == 0) {
		//makes an array of just the values of the selected card(s)
		tempArray = new Array();
		for (let i = 0; i < selectedCards.length; i++) {
			tempArray.push(selectedCards[i].val);
		}
		tempArray.sort();
		tempArray.reverse();
		
		
		
		//makes an array of just the values of the last played card(s)
		tempArray2 = new Array();
		for (let i = 0; i < midCard.length; i++) {
			tempArray2.push(midCard[i].val);
		}
		tempArray2.sort();
		tempArray2.reverse();
		
		//if the middle cards are just jokers you can't beat that
		if(tempArray2[0] == 14) {
			return false;
		}
		
		if (tempArray.length == 1 && tempArray[0] > tempArray2[0]) {
			return true;
		}
		else if (tempArray.length > 1 && tempArray[0] > tempArray2[0]) {
			let num = tempArray[0];
			for (let i = 1; i < tempArray.length; i++) {
				if (tempArray[i] == 14) {
					tempArray[i] = tempArray[0];
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