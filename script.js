//this is how you comment btw

//deck initializer
const deck = new Array();

//hand initializers, 1 is the player
const hand1 = new Array();
const hand2 = new Array();
const hand3 = new Array();
const hand4 = new Array();


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
	else {
    	return "" + card.face + " of " + card.suit;
    }
}

//making cards
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

const card53 = new Card("?", " ", "Joker");
const card54 = new Card("?", " ", "Joker");
const card55 = new Card("?", " ", "Joker");
const card56 = new Card("?", " ", "Joker");


//sound effect
function playSoundvb() {
	let ding = new Audio('vineboom.mp3');
	ding.play();
}

//reset deck
function deckReset() {
	deck.push(card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13,card53);
}


//return a random number into an array.
//removes it from deck, intended to add to a hand array
function draw() {
	temp = deck.splice(Math.floor(Math.random() * deck.length), 1);
	return temp.pop();
}


//wip game start
function start() {
	while (deck.length > 3) {
		hand1.push(draw());
		hand2.push(draw());
		hand3.push(draw());
		hand4.push(draw());
		
	}
}