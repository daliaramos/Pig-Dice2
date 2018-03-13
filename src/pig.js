export function Player(turn) {
  this.playerName = "";
  this.totalScore = 0;
  this.roundScore = [];
  this.turn = turn;
}

// exports.playerModule = Player;

Player.prototype.rollDice = function() {
  var diceValue = Math.floor((Math.random() * 6) + 1);
  if (diceValue === 1) {
    alert("Next player's turn!");
    this.roundScore = [];
  } else {
    this.roundScore.push(diceValue);
    console.log(this.roundScore);
    return diceValue;
  }
};

Player.prototype.hold = function() {
  var sum = this.roundScore.reduce((total, amount) => total + amount);
  this.totalScore += sum;
  this.roundScore = [];
};

Player.prototype.win = function() {
  if (this.totalScore >= 100) {
    alert("You win!");
  } else {
    return this.totalScore;
  }
};
