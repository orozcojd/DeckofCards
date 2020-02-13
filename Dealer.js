const Player = require('./Player.js');

module.exports = class Dealer extends Player {
  // constructor() {
  //   super();
  // }

  getCard() {
    console.log(this.score());
    if (this.score() < 17) return true;

    this.stay = true;
    return false;
  }
};
