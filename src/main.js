import { Player } from './pig.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("form#name-input").submit(function(event) {
    event.preventDefault();

    var name1 = $("input#name1").val();
    var name2 = $("input#name2").val();

    var player1 = new Player(name1);
    var player2 = new Player(name2);

    $("#welcome-message").text("Welcome to Pig Dice, " + name1 + " and " + name2 + "!");
    $("form#name-input").hide();
    $("#game-interface").fadeIn();

// player one buttons

  $("button#roll1").click(function() {
    // var rollOne =
    player1.rollDice();
    $("ul#player-one-roll").text(player1.roundScore);

  });

  $("button#hold1").click(function() {
    player1.hold();
    $("ul#player-one-score").text(player1.totalScore);
    player1.win();
  });

// player two buttons
  $("button#roll2").click(function() {
    // var rollTwo =
    player2.rollDice();
    $("ul#player-two-roll").text(player2.roundScore);
  });

  $("button#hold2").click(function() {
    player2.hold();
    $("ul#player-two-score").text(player2.totalScore);
    player2.win();
  });

    // if (diceValue === 1) {
    // $(".well").hide();
    //   // this.roundScore === 0;
    // }

  });
});
