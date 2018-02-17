describe("Room", function() {
  var Room = require('../lib/Room');
  var room;

  it("should have an external_id", function() {
    room = new Room(1);

    expect(room.external_id).toEqual(1);
  });

  it("should have a name", function() {
    room = new Room(1, "shovel room");

    expect(room.name).toEqual("shovel room");
  });

  it("should have a north connection", function() {
    room = new Room(1, "shovel room", 3)

    expect(room.north_connection).toEqual(3);
  });

  it("should have a south connection", function() {
    room = new Room(1, "shovel room", 3, 2)

    expect(room.south_connection).toEqual(2);
  });

  it("should have a east connection", function() {
    room = new Room(1, "shovel room", 3, 2, 4)

    expect(room.east_connection).toEqual(4);
  });

  it("should have a west connection", function() {
    room = new Room(1, "shovel room", 3, 2, 4, 5)

    expect(room.west_connection).toEqual(5);
  });

  it("should have no items", function() {
    room = new Room(1, "shovel room", 3, 2, 4, 5)

    expect(room.items).toEqual([]);
  });

  it("should have visible_items", function() {
    room = new Room(1, "shovel room", 3, 2, 4, 5);
    room.add_item({ 'name' : 'shiny shovel' });
    room.add_item({ 'name' : 'dingy duck' });

    expect(room.visibile_items()).toEqual('shiny shovel, dingy duck');
  });
});
