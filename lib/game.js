class Game {
  constructor(rooms, player, starting_room) {
    this.rooms = rooms;
    this.player = player;
    this.current_room = starting_room;
    this.over = false;
    this.items = [];
  }

  current_prompt() {
    return `${this.current_room.name}\nYou see: ${this.current_room.visible_items()}\nCurrent score: ${this.player.score()}\n`
  }

  items_in_rooms(items) {
    return items.filter(item => item.location > 0);
  }

  items_in_items(items) {
    return items.filter(item => item.location < 0);
  }

  items_in_purgatory(items) {
    return items.filter(item => item.location == 0);
  }

  distribute_items(items) {
    this.items = items;

    let roomies = this.items_in_rooms(items);
    let nested = this.items_in_items(items);
    let purgatory = this.items_in_purgatory(items);

    roomies.forEach((item) => {
      let room = this.rooms.find((room) => { return room.external_id == item.location });
      if (room != undefined) {
        room.add_item(item);
      } else {
      }
    });

    nested.forEach((item) => {
      let container = this.items.find((parent) => { return parent.external_id == Math.abs(item.location) });
      if (container != undefined) {
        container.add_item(item)
      } else {
        console.log(`Where is the containing item for ${item.name}?`)
      }
    });
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
    if (/inventory/.test(command)) {
      console.log(this.player.stuff());
    }
    if (/^examine/.test(command)) {
      // check to verify item is visible in room
      let re = new RegExp(this.current_room.visible_items())
      let result = command.split(" ");
      let item_name = result[1];
      let item = null;

      if (re.test(item_name)) {
        let item = this.current_room.items.find((item) => { return item.name == item_name })
        item.examine();

        console.log(`You examine ${item.name} and you now see ${item.visible_items()}`);
      }
    }
  }
}

module.exports = Game;
