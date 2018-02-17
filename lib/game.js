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

  move(direction) {
    let response = null;
    switch(direction) {
      case 'north':
        if (0 == this.current_room.north_connection) {
          response = "Ouch! You bang your knee. There's no door there!";
        } else {
          let new_room = this.rooms.find((e) => { e.external_id == this.current_room.north_connection });
          if (new_room != null) {
            this.current_room = new_room;
          } else {
            response = "Something magical has happened and the room is gone!";
          }
        }
      break;
      case 'south':
        om
        break;
      case 'east':
        break;
      case 'west':
        break;
    }

    return response;
  }

  process_command(command) {
    console.log("process")
  }
}

module.exports = Game;
