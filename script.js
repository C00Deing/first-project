//this is how you comment btw

//deck initializer
const deck = new Array();

//hand initializers, 1 is the player
const hand1 = new Array();
const hand2 = new Array();
const hand3 = new Array();
const hand4 = new Array();

let turnCount = 0;

let skipCount = 0;

const midCard = new Array();


//funny down arrow sound
document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowDown') {
    playSoundvb()
  }
});


//make card function
function Card(val, suit, face) {
  this.val = val;
  this.suit = suit;
  this.face = face;
}

function print(card) {
	if (card.face == "Joker") {
    	return "Joker";
    }
	else if (card.face == 0) {
		return "No Card";
	}
	else {
    	return "A " + card.face + " of " + card.suit;
    }
}

//making cards

const card0 = new Card(0, "None", 0)

//Hearts
const card1 = new Card(1, "Hearts", 3);
const card2 = new Card(2, "Hearts", 4);
const card3 = new Card(3, "Hearts", 5);
const card4 = new Card(4, "Hearts", 6);
const card5 = new Card(5, "Hearts", 7);
const card6 = new Card(6, "Hearts", 8);
const card7 = new Card(7, "Hearts", 9);
const card8 = new Card(8, "Hearts", 10);
const card9 = new Card(9, "Hearts", "Jack");
const card10 = new Card(10, "Hearts", "Queen");
const card11 = new Card(11, "Hearts", "King");
const card12 = new Card(12, "Hearts", "Ace");
const card13 = new Card(13, "Hearts", 2);

//Diamonds
const card14 = new Card(1, "Diamonds", 3);
const card15 = new Card(2, "Diamonds", 4);
const card16 = new Card(3, "Diamonds", 5);
const card17 = new Card(4, "Diamonds", 6);
const card18 = new Card(5, "Diamonds", 7);
const card19 = new Card(6, "Diamonds", 8);
const card20 = new Card(7, "Diamonds", 9);
const card21 = new Card(8, "Diamonds", 10);
const card22 = new Card(9, "Diamonds", "Jack");
const card23 = new Card(10, "Diamonds", "Queen");
const card24 = new Card(11, "Diamonds", "King");
const card25 = new Card(12, "Diamonds", "Ace");
const card26 = new Card(13, "Diamonds", 2);

//Spades
const card27 = new Card(1, "Spades", 3);
const card28 = new Card(2, "Spades", 4);
const card29 = new Card(3, "Spades", 5);
const card30 = new Card(4, "Spades", 6);
const card31 = new Card(5, "Spades", 7);
const card32 = new Card(6, "Spades", 8);
const card33 = new Card(7, "Spades", 9);
const card34 = new Card(8, "Spades", 10);
const card35 = new Card(9, "Spades", "Jack");
const card36 = new Card(10, "Spades", "Queen");
const card37 = new Card(11, "Spades", "King");
const card38 = new Card(12, "Spades", "Ace");
const card39 = new Card(13, "Spades", 2);

//Clubs
const card40 = new Card(1, "Clubs", 3);
const card41 = new Card(2, "Clubs", 4);
const card42 = new Card(3, "Clubs", 5);
const card43 = new Card(4, "Clubs", 6);
const card44 = new Card(5, "Clubs", 7);
const card45 = new Card(6, "Clubs", 8);
const card46 = new Card(7, "Clubs", 9);
const card47 = new Card(8, "Clubs", 10);
const card48 = new Card(9, "Clubs", "Jack");
const card49 = new Card(10, "Clubs", "Queen");
const card50 = new Card(11, "Clubs", "King");
const card51 = new Card(12, "Clubs", "Ace");
const card52 = new Card(13, "Clubs", 2);

//jokers
const card53 = new Card(14, " ", "Joker");
const card54 = new Card(14, " ", "Joker");
const card55 = new Card(14, " ", "Joker");
const card56 = new Card(14, " ", "Joker");


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
}


//return a random number into an array.
//removes it from deck, intended to add to a hand array
function draw() {
	temp = deck.splice(Math.floor(Math.random() * deck.length), 1);
	
	return temp.pop();
}


//game start
function start() {
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
		console.log("No Playable Cards");
		skipCount++;
	}
	
}

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