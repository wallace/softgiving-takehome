describe("Game", function() {
  var Game = require('../lib/Game');
  var game;

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
    game = new Game([], { score: () => 2 }, 1);

    expect(game.current_prompt()).toEqual("undefined\nYou see: undefined\nCurrent score: 2");
  });
});
