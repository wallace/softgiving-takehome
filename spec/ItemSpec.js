describe("Item", function() {
  var Item = require('../lib/Item');
  var item;

  it("should have an external_id", function() {
    item = new Item(1);

    expect(item.external_id).toEqual(1);
  });

  it("should have a name", function() {
    item = new Item(1, "shovel");

    expect(item.name).toEqual("shovel");
  });

  it("should have a location", function() {
    item = new Item(1, "shovel", 3)

    expect(item.location).toEqual(3);
  });
  it("should have a score", function() {
    item = new Item(1, "shovel", 3, 20)

    expect(item.score).toEqual(20);
  });

  it("should have text", function() {
    item = new Item(1, "shovel", 3, 20, "shovel description")

    expect(item.text).toEqual("shovel description");
  });

  it("should have no items", function() {
    item = new Item(1, "shovel", 3, 20, "shovel description")

    expect(item.items).toEqual([]);
  });

  it("can add an item", function() {
    item = new Item(1, "shovel room", 3, 2, 4)
    item.add_item("item")

    expect(item.items).toEqual(["item"]);
  });
});
