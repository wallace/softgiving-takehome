class Game {
  constructor(rooms, player, starting_room) {
    this.rooms = rooms;
    this.player = player;
    this.current_room = starting_room;
    this.over = false;
  }

  current_prompt() {
    return `${this.current_room.name}\nYou see: ${this.current_room.visible_items()}\nCurrent score: ${this.player.score()}\n`
  }

  process_command(command) {
    console.log("process")
  }
}

module.exports = Game;
