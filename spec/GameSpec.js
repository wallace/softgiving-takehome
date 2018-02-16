describe("Game", function() {
  var Game = require('../lib/Game');
  var game;

  it("should have no rooms", function() {
    game = new Game();

    expect(game.rooms).toEqual([]);
  });

  it("should have no player", function() {
    game = new Game();

    expect(game.player).toEqual(null);
  });
});
