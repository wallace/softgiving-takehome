class Game {
  constructor(rooms, player, starting_room) {
    this.rooms = rooms;
    this.player = player;
    this.current_room = starting_room;
    this.over = false;
  }

  current_prompt() {
    // needs to be the current room, current rooms visible inventory and the
    // players current score
    return "the current room prompt"
  }
}

module.exports = Game;
