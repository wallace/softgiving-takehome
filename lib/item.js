class Item {
  constructor(external_id, name, initial_location, score, text) {
    this.external_id = external_id;
    this.name = name;
    this.location = initial_location;
    this.score = score;
    this.text = text || 'There\'s nothing special about it';
    this.items = [];
  }

  add_item(item) {
    this.items.push(item);
  }
}

module.exports = Item;
