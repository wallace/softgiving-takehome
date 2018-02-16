describe("Player", function() {
  var Player = require('../lib/Player');
  var player;

  it("should have a current_room", function() {
    player = new Player(1);

    expect(player.current_room).toEqual(1);
  });

  it("should have no inventory", function() {
    player = new Player(1);

    expect(player.inventory).toEqual([]);
  });

  it("should have a default score", function() {
    player = new Player(1);

    expect(player.score()).toEqual(0);
  });

  it("should have a score", function() {
    player = new Player(1);

    player.add_item({ score: 1 });
    player.add_item({ score: 2 });

    expect(player.score()).toEqual(3);
  });
});
