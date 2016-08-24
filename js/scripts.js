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
}

Player.prototype.rollAgain = function() {
  var rand2 = Math.floor(Math.random() * 6) + 1;
  this.currentScore = rand2;
  if (this.currentScore >= 2) {
    this.scoreTotal += this.currentScore;
  }
}

Player.prototype.hold = function() {
  this.scoreTotal += this.currentScore;
}

var player1 = new Player(true);
var player2 = new Player(false);

// User Interface Logic
$(document).ready(function() {
  var playerOneName;
  var playerTwoName;

  $("#signup-form").submit(function(event){
    event.preventDefault();
    playerOneName = $("#player-one-signup").val();
    playerTwoName = $("#player-two-signup").val();
    $(".player-setup").slideUp(500);
    $("#player-one-name").text(playerOneName);
    $("#player-two-name").text(playerTwoName);
    $("#player-msg").text(playerOneName + ", GO!");
    $(".game").slideDown(500);
  }); // end submit

  $("#roll").click(function() {
    if (player1.turn === true) {
      if (player1.scoreTotal >= 100 || player2.scoreTotal >= 100) {
        $("button").attr("readonly", true);
        alert("Looks like we have a winner!!!!!  ;)");
      }
      else if ($(this).hasClass("roll-again")) {
        player1.rollAgain();
        player1.takeTurn();
        player2.takeTurn();
        $("#rolled-number").text(player1.currentScore);
        $(".p1-total-score").text(player1.scoreTotal);
        $(this).removeClass("roll-again").text("Roll");
        $("#player-msg").text(playerTwoName + ", GO!");
      }
      else {
        player1.roll();
        $("#rolled-number").text(player1.currentScore);
        $(this).addClass("roll-again").text("Roll Again?");
      }
    }
    else {
      if (player2.scoreTotal >= 100 || player1.scoreTotal >= 100) {
        $("button").attr("readonly", true);
      }
      else if ($(this).hasClass("roll-again")) {
        player2.rollAgain();
        player1.takeTurn();
        player2.takeTurn();
        $("#rolled-number").text(player2.currentScore);
        $(".p2-total-score").text(player2.scoreTotal);
        $(this).removeClass("roll-again").text("Roll");
        $("#player-msg").text(playerOneName + ", GO!");
      }
      else {
        player2.roll();
        $("#rolled-number").text(player2.currentScore);
        $(this).addClass("roll-again").text("Roll Again?");
      }
    }

    $("#hold").click(function() {
      if (player1.turn === true) {
        player1.takeTurn();
        player2.takeTurn();
        player1.hold();
        $("#rolled-number").text(player1.currentScore);
        $(".p1-total-score").text(player1.scoreTotal);
        $("#roll").removeClass("roll-again").text("Roll");
        $("#player-msg").text(playerTwoName + ", GO!");
        //$(this).attr("readonly", true);
      }
      else {
        player1.takeTurn();
        player2.takeTurn();
        player2.hold();
        $("#rolled-number").text(player2.currentScore);
        $(".p2-total-score").text(player2.scoreTotal);
        $("#roll").removeClass("roll-again").text("Roll");
        $("#player-msg").text(playerOneName + ", GO!");
        //$(this).attr("readonly", true);
      }
    });

    console.log(player1.turn);
    console.log(player2.turn);
    console.log("player 1 score: " + player1.scoreTotal);
    console.log("player 2 score: " + player2.scoreTotal);
  }); // end click

}); // end ready
