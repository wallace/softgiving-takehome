describe("ItemParser", function() {
  var ItemParser = require('../lib/ItemParser');
  var item_parser;

  it("has a filename", function() {
    item_parser = new ItemParser('filename.csv');

    expect(item_parser.filename).toEqual('filename.csv');
  });

  it("should parse", function() {
    item_parser = new ItemParser('items.csv');

    let items = item_parser.parse();
    expect(items.length).toEqual(13);
  });
});
