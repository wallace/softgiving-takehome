const fs = require('fs');
const parse = require('csv-parse');
const async = require('async');
const Room = require('../lib/room');

class RoomParser {
  constructor(filename) {
    this.filename = filename;
  }

  parse() {
    let inputFile = this.filename;
    let rooms = [];
    let room = null;
    let line = null;

    let parser = parse({delimiter: ','});

    parser.on('error', function(err){
      console.log('Warning!! ' + err.message);
    });

    parser.on('readable', function (){
      while(line = parser.read()) {
        room = new Room(line[0], line[1], line[2], line[3], line[4], line[5]);
        rooms.push(room);
      }
    });

    let contents = fs.readFileSync(inputFile);

    parser.write(contents);
    parser.end();

    return rooms;
  }
}

module.exports = RoomParser;
