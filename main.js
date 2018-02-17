const { prompt } = require('inquirer'); // require inquirerjs library

const RoomParser = require('./lib/RoomParser')
const Player = require('./lib/player')
const Game = require('./lib/game')
const Room = require('./lib/room')

// set up game
let room_parser = new RoomParser('rooms.csv');
let rooms = room_parser.parse();

let player = new Player();

// TODO: items

let starting_room = rooms.find((e) => { return e.external_id == 1 });
let game = new Game(rooms, player, starting_room);

(async () => {
  while(!game.over) {
    await prompt({ type : 'input', name : 'beginning', message : game.current_prompt() })
    .then(answer => {
      game.process_command(answer.beginning);
    });
  }
})();
