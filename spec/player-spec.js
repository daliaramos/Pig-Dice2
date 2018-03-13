var Player = require('./../src/pig.js').playerModule;
// import {Player} from './../src/pig.js';

describe('Player', function(){

  it('recognizes player object', function(){

    var player = new Player(turn);

    expect(player.playerName).toEqual("");
    expect(player.totalScore).toEqual(0);
    expect(player.roundScore).toEqual([]);
    expect(player.turn).toEqual(turn);
  });
});
