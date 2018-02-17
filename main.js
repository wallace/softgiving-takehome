const program = require('commander');
const { prompt } = require('inquirer'); // require inquirerjs library

program
.command('north')
.action(() => {
  console.log("implement north")
});

program
.command('south')
.action(() => {
  console.log("implement south")
});

program
.command('east')
.action(() => {
  console.log("implement east")
});

program
.command('west')
.action(() => {
  console.log("implement west")
});

const RoomParser = require('./lib/RoomParser')
const Player = require('./lib/player')
const Game = require('./lib/game')

// set up game
let room_parser = new RoomParser('rooms.csv');
let rooms = room_parser.parse();

let player = new Player();

// TODO: items

let starting_room = 1;
let game = new Game(rooms, player, starting_room);

(async () => {
  while(!game.over) {
    await prompt({ type : 'input', name : 'beginning', message : game.current_prompt })
    .then(answer => {
      game.process_command(answer); // updates game state and current_prompt
    });
  }
})();
