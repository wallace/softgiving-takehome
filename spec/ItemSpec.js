describe("Item", function() {
  var Item = require('../lib/Item');
  var item;

  it("should have an external_id", function() {
    item = new Item(1);

    expect(item.external_id).toEqual(1);
  });
});
