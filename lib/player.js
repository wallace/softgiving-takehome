class Player {
  constructor() {
    this.inventory = [];
  }

  score() {
    let sum = 0;
    for (let i = 0; i < this.inventory.length; i++) {
      sum += this.inventory[i].score;
    }

    return sum;
  }

  add_item(item) {
    this.inventory.push(item);
  }
}

module.exports = Player;
