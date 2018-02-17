describe("RoomParser", function() {
  var RoomParser = require('../lib/RoomParser');
  var room_parser;

  it("has a filename", function() {
    room_parser = new RoomParser('filename.csv');

    expect(room_parser.filename).toEqual('filename.csv');
  });

  it("should parse", function() {
    room_parser = new RoomParser('rooms.csv');

    let rooms = room_parser.parse();
    expect(rooms.length).toEqual(8);
  });
});
