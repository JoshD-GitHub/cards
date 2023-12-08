import Deck from '../components/Deck';
import Player from './components/Player';
import Queue from './components/Queue';

enum Value {
  "Ace" = 11,
  "Two" = 2,
  "Three" = 3,
  "Four" = 4,
  "Five" = 5,
  "Six" = 6,
  "Seven" = 7,
  "Eight" = 8,
  "Nine" = 9,
  "Ten" = 10,
  "Jack" = 10,
  "Queen" = 10,
  "King" = 10,
}

const Blackjack = () => {
  const deck = new Deck();
  const player = new Player([], 0);
  const dealer = new Player([], 0);
  const queue = new Queue<Player>();

  deck.shuffleDeck();
  queue.enqueue(player);
  queue.enqueue(dealer);

  player.addToHand(deck.drawCard());
  dealer.addToHand(deck.drawCard());
  player.addToHand(deck.drawCard());
  dealer.addToHand(deck.drawCard());

  console.log('-----------------');
  console.log('Dealer: ???, ', dealer.hand[1].displayCard());
  console.log('Your Hand: ', player.hand[0].displayCard(), ', ', player.hand[1].displayCard());
  console.log('-----------------');

  for (let i = 0; i < player.hand.length; i++) {
    const cardValue = player.hand[i].rank;
    player.total += Value[cardValue];
  };

  for (let i = 0; i < dealer.hand.length; i++) {
    const cardValue = dealer.hand[i].rank;
    dealer.total += Value[cardValue];
  };

  console.log(player.total)
  console.log(dealer.total)

  // while (player.total < 22) {};
};

Blackjack();

export default Blackjack;