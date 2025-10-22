//this is how you comment btw

//deck initializer
const deck = new Array();


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


//making cards
const card1 = new card(1, "Heart", 3);
const card2 = new card(2, "Heart", 4);
const card3 = new card(3, "Heart", 5);
const card4 = new card(4, "Heart", 6);
const card5 = new card(5, "Heart", 7);
const card6 = new card(6, "Heart", 8);
const card7 = new card(7, "Heart", 9);
const card8 = new card(8, "Heart", 10);
const card9 = new card(9, "Heart", "J");
const card10 = new card(10, "Heart", "Q");
const card11 = new card(11, "Heart", "K");
const card12 = new card(12, "Heart", "A");
const card13 = new card(13, "Heart", 2);

const card53 = new card("?", "All", "Joker");
const card54 = new card("?", "All", "Joker");
const card55 = new card("?", "All", "Joker");
const card56 = new card("?", "All", "Joker");


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
function getRandomCard() {
	return deck.slice(Math.floor(Math.random() * 14););
}