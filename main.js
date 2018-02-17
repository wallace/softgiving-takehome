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

let starting_room = 1;
let fake_starting_room = new Room(1, 'fake room', 0,0,0,0);
fake_starting_room.add_item({ 'name': 'shiny shovel' });
let game = new Game(rooms, player, fake_starting_room);

(async () => {
  while(!game.over) {
    await prompt({ type : 'input', name : 'beginning', message : game.current_prompt() })
    .then(answer => {
      game.process_command(answer.beginning);
    });
  }
})();
