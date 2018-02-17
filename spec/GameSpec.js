describe("Game", function() {
  const Game = require('../lib/Game');
  const Room = require('../lib/room');
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
});
