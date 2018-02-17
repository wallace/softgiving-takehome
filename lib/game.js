class Game {
  constructor(rooms, player, starting_room) {
    this.rooms = rooms;
    this.player = player;
    this.current_room = starting_room;
  }
}

module.exports = Game;
