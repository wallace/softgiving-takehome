const fs = require('fs');
const parse = require('csv-parse');
const async = require('async');
const Item = require('../lib/item');

class ItemParser {
  constructor(filename) {
    this.filename = filename;
  }

  parse() {
    let inputFile = this.filename;
    let items = [];
    let item = null;
    let line = null;

    let parser = parse({delimiter: ','});

    parser.on('error', function(err){
      console.log('Warning!! ' + err.message);
    });

    parser.on('readable', function (){
      while(line = parser.read()) {
        item = new Item(line[0], line[1], line[2], line[3], line[4]);
        items.push(item);
      }
    });

    let contents = fs.readFileSync(inputFile);

    parser.write(contents);
    parser.end();

    return items;
  }
}

module.exports = ItemParser;
