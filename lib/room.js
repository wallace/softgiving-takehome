class Room {
  constructor(external_id, name, north_connection, south_connection, east_connection, west_connection) {
    this.external_id = parseInt(external_id);
    this.name = name;
    this.north_connection = parseInt(north_connection);
    this.south_connection = parseInt(south_connection);
    this.east_connection = parseInt(east_connection);
    this.west_connection = parseInt(west_connection);
    this.items = [];
  }

  add_item(item) {
    this.items.push(item);
  }

  visible_items() {
    let text = '';

    for(let i = 0; i < this.items.length; i++) {
      if(0 == i) {
        text += `${this.items[i].name}`;
      } else {
        text += `, ${this.items[i].name}`;
      }
    }

    return text;
  }
}

module.exports = Room;
