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

  check_for_door(connection) {
    let response = null;

    if (0 == connection) {
      response = "Ouch! You bang your knee. There's no door there!";
    } else {
      let new_room = this.rooms.find((e) => { return e.external_id == connection });

      if (new_room != undefined) {
        this.current_room = new_room;
      } else {
        response = "Something magical has happened and the room is gone!";
      }
    }

    return response;
  }

  move(direction) {
    let response = null;
    switch(direction) {
      case 'north':
        response = this.check_for_door(this.current_room.north_connection);
        break;
      case 'south':
        response = this.check_for_door(this.current_room.south_connection);
        break;
      case 'east':
        response = this.check_for_door(this.current_room.east_connection);
        break;
      case 'west':
        response = this.check_for_door(this.current_room.west_connection);
        break;
    }

    return response;
  }

  process_command(command) {
    let movement = /^north|south|east|west$/;

    if (movement.test(command)) {
      console.log(this.move(command));
    }
  }
}

module.exports = Game;
