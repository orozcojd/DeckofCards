
const Deck = require('./Deck');
const Dealer = require('./Dealer');
const Player = require('./Player');

class Game {
  constructor(deck, ...players) {
    this.deck = deck;
    this.players = players;
  }

  deal() {
    for (const player of this.players) {
      player.getHand(this.deck.deal());
    }
  }

  startGame() {
    this.deal();
    this.gameLoop();
  }

  async gameLoop() {
    let players = this.players.filter((player) => !player.stay);
    while (players.length) {
      players = this.players.filter((player) => !player.stay);
      await this.nextRound(players);
    }
    const winner = this.getWinner();
    if (!winner) console.log('Sorry! No winner, its a bust.');
  }

  getPlayers() {
    this.players.map((p) => console.log(p.hand));
  }

  getWinner() {
    console.log(this.players);
    let maxScore = 0;
    let winningPlayer = null;
    for (const player of this.players) {
      const score = player.score();
      console.log(`Score: ${score}`);
      if (score > maxScore && score <= 21) {
        maxScore = score;
        winningPlayer = player;
      }
    }
    console.log(winningPlayer);
    return winningPlayer;
  }

  nextRound(players) {
    for (const player of players) {
      if (player.getCard()) {
        player.hit(this.deck.dealCard());
      }
    }
  }
}


const deck = new Deck();
const player = new Player();
// const player2 = new Player()
const dealer = new Dealer();
const game = new Game(deck, player, dealer);
game.startGame();
