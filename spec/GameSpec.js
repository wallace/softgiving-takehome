describe("Game", function() {
  const Game = require('../lib/Game');
  const Room = require('../lib/room');
  const Item = require('../lib/item');
  let game;

  it("should have no rooms", function() {
    game = new Game([], "player");

    expect(game.rooms).toEqual([]);
  });

  it("should have no player", function() {
    game = new Game("room", "player");

    expect(game.player).toEqual("player");
  });

  it("should know the current room of the player", function() {
    game = new Game([], null, 1);

    expect(game.current_room).toEqual(1);
  });

  it("should have the current prompt", function() {
    game = new Game([], { score: () => 2 }, { visible_items: () => [] });

    expect(game.current_prompt()).toEqual("undefined\nYou see: \nCurrent score: 2\n");
  });

  it("should display error when direction is invalid", () => {
    starting_room = new Room(1, "shovel room", 0, 0, 0, 0);
    game = new Game([starting_room], { score: () => 2 }, starting_room);

    expect(game.move("north")).toEqual("Ouch! You bang your knee. There's no door there!");
  });

  it("should display error when room id is invalid", () => {
    starting_room = new Room(1, "shovel room", 2, 0, 0, 0);
    game = new Game([starting_room], { score: () => 2 }, starting_room);

    expect(game.move("north")).toEqual("Something magical has happened and the room is gone!");
  });

  it("should set the new room", () => {
    starting_room = new Room(1, "shovel room", 2, 0, 0, 0);
    new_room = new Room(2, "duck room", 0, 1, 0, 0);
    game = new Game([starting_room, new_room], { score: () => 2 }, starting_room);
    game.move("north");

    expect(game.current_room).toEqual(new_room);
  });

  it("should put items in rooms", () => {
    starting_room = new Room(1, "shovel room", 2, 0, 0, 0);
    item = new Item(1, "shovel", 1, 20, "shiny shovel")
    game = new Game([starting_room], { score: () => 2 }, starting_room);

    game.distribute_items([item]);

    expect(game.current_room.items).toEqual([item])
  });

  it("should put items in items", () => {
    starting_room = new Room(1, "shovel room", 2, 0, 0, 0);
    container = new Item(1, "shovel", 2, 20, "shiny shovel with a pocket")
    lint = new Item(1, "lint", -1, 2, "likes to be a in a pocket")
    game = new Game([starting_room], { score: () => 2 }, starting_room);

    game.distribute_items([container, lint]);

    expect(game.current_room.items).toEqual([])
    expect(container.items).toEqual([lint])
  });
});
