class Item {
  constructor(external_id, name, initial_location, score, text) {
    this.external_id = parseInt(external_id);
    this.name = name;
    this.location = parseInt(initial_location);
    this.score = parseInt(score);
    this.text = text || 'There\'s nothing special about it';
    this.items = [];
    this.contained_items_visible = false;
  }

  add_item(item) {
    this.items.push(item);
  }

  examine() {
    this.contained_items_visible = true;
  }

  visible_items() {
    let text = '';

    if (false == this.contained_items_visible) {
      return '';
    }

    for(let i = 0; i < this.items.length; i++) {
      if(0 == i) {
        text += `${this.items[i].name} ${this.visible_items()}`;
      } else {
        text += `, ${this.items[i].name} ${this.visible_items()}`;
      }
    }

    return text;
  }
}

module.exports = Item;
