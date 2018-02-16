function Room(external_id, name, north_connection, south_connection, east_connection, west_connection) {
  this.external_id = external_id;
  this.name = name;
  this.north_connection = north_connection;
  this.south_connection = south_connection;
  this.east_connection = east_connection;
  this.west_connection = west_connection;
  this.items = [];
}

module.exports = Room;
