function Player(current_room) {
  this.current_room = current_room;
  this.inventory = [];
}

Player.prototype.score = function() {
  sum = 0;
  for (i = 0; i < this.inventory.length; i++) {
    sum += this.inventory[i].score;
  }

  return sum;
};

module.exports = Player;
