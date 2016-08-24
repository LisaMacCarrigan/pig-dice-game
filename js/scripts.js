// Business Logic

var Player = function(turn) {
  this.scoreTotal = 0;
  this.currentScore = 0;
  this.turn = turn;
}

Player.prototype.takeTurn = function() {
  if (this.turn === true) {
    this.turn = false;
  }
  else {
    this.turn = true;
  }
}

Player.prototype.roll = function() {
  var rand = Math.floor(Math.random() * 6) + 1;
  this.currentScore = rand;
  if (this.currentScore >= 2) {
    this.scoreTotal += this.currentScore;
  }
}

var player1 = new Player(true);
var player2 = new Player(false);

// User Interface Logic
$(document).ready(function() {
  $("#signup-form").submit(function(event){
    event.preventDefault();
    var playerOneName = $("#player-one-signup").val();
    var playerTwoName = $("#player-two-signup").val();
    $(".player-setup").slideUp(500);
    $("#player-one-name").text(playerOneName);
    $("#player-two-name").text(playerTwoName);
    $(".game").slideDown(500);
  }); // end submit

  $("#roll").click(function() {
    if (player1.turn === true) {
      player1.roll();
      player1.takeTurn();
      player2.takeTurn();
      $("#rolled-number").text(player1.currentScore);
      $(".p1-total-score").text(player1.scoreTotal);
    } else {
      player2.roll();
      player1.takeTurn();
      player2.takeTurn();
      $("#rolled-number").text(player2.currentScore);
      $(".p2-total-score").text(player2.scoreTotal);
    }

    console.log(player1.turn);
    console.log(player2.turn);
    console.log("player 1 score: " + player1.scoreTotal);
    console.log("player 2 score: " + player2.scoreTotal);
  })

}); // end ready
