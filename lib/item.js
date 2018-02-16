function Item(external_id, name, initial_location, score, text) {
  this.external_id = external_id;
  this.name = name;
  this.location = initial_location;
  this.score = score;
  this.text = text;
}

module.exports = Item;
