module.exports = class Deck {
  constructor() {
    this.suitKey = Symbol('suits');
    this.valsKey = Symbol('values');
    this[this.suitKey] = ['Diamonds', 'Spades', 'Clubs', 'Hearts'];
    this[this.valsKey] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    this.reset();
    this.shuffle();
  }

  reset() {
    this.deck = [];
    for (const suit of this[this.suitKey]) {
      for (const [i, val] of this[this.valsKey].entries()) {
        let weight = val;
        if (i > 8) weight = 10;
        this.deck.push({ value: val, suit, weight });
      }
    }
  }

  shuffle() {
    let rand1;
    let rand2;
    for (let i = 0; i < 1000; i += 1) {
      rand1 = Math.floor(Math.random() * this.deck.length);
      rand2 = Math.floor(Math.random() * this.deck.length);
      [this.deck[rand1], this.deck[rand2]] = [this.deck[rand2], this.deck[rand1]];
    }
  }

  print() {
    for (const card of this.deck) {
      console.log(card);
    }
  }

  deal() {
    return this.deck.splice(this.deck.length - 2, 2);
  }

  dealCard() {
    return this.deck.pop();
  }
};
