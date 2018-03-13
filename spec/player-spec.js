var Player = require('./../src/pig.js').playerModule;
// import {Player} from './../src/pig.js';

describe('Player', function(){

  it('should get player name and scores', function(){

    var player = new Player("sam", 16)
    var name = "sam";
    var totalScore = 16;

    expect(player.playerName).toEqual("sam")
    expect(player.totalScore).toEqual(16)
  });
});
