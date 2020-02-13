
module.exports = class Player {
  constructor() {
    this.hand = [];
    this.stay = false;
  }

  getHand(cards) {
    this.hand = [...cards];
  }

  score() {
    return this.hand.reduce((acc, card) => acc + card.weight, 0);
  }

  hit(card) {
    this.hand.push(card);
  }

  getCard() {
    console.log('getting card.');
  }
};
