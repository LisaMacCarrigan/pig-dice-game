// Business Logic

var Player = function(turn) {
  this.scoreTotal = 0;
  this.currentScore = 0;
  this.turn = turn;
};

Player.prototype.takeTurn = function() {
  if (this.turn === true) {
    this.turn = false;
  }
  else {
    this.turn = true;
  }
};

Player.prototype.roll = function() {
  var rand = Math.floor(Math.random() * 6) + 1;
  this.currentScore = rand;
};

Player.prototype.scorePoints = function(rollPoints) {
  this.scoreTotal += rollPoints;
};

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
      else {
        player1.roll();
        if (player1.currentScore === 1) {
          player1.takeTurn();
          player2.takeTurn();
          $("#rolled-number").text(player1.currentScore);
          $(this).addClass("roll-again").text("Roll");
          $("#player-msg").text(playerTwoName + ", GO!");
        }
        else {
          $("#rolled-number").text(player1.currentScore);
          $(this).addClass("roll-again").text("Roll Again?");
        }
      }
    }
    else {
      if (player2.scoreTotal >= 100 || player1.scoreTotal >= 100) {
        $("button").attr("readonly", true);
      }
      else {
        player2.roll();
        if (player2.currentScore === 1) {
          player1.takeTurn();
          player2.takeTurn();
          $("#rolled-number").text(player2.currentScore);
          $(this).removeClass("roll-again").text("Roll");
          $("#player-msg").text(playerOneName + ", GO!");
        }
        else {
          $(this).addClass("roll-again").text("Roll Again?");
          $("#rolled-number").text(player2.currentScore);
        }
      }
    }
  }); // end click

  $("#hold").click(function() {
    var currentRole = parseInt($("#rolled-number").text());
    if (player1.turn === true) {
      player1.takeTurn();
      player2.takeTurn();
      player1.scorePoints(currentRole);
      $(".p1-total-score").text(player1.scoreTotal);
      $("#roll").removeClass("roll-again").text("Roll");
      $("#player-msg").text(playerTwoName + ", your turn!");
    }
    else {
      player1.takeTurn();
      player2.takeTurn();
      player2.scorePoints(currentRole);
      $(".p2-total-score").text(player2.scoreTotal);
      $("#roll").removeClass("roll-again").text("Roll");
      $("#player-msg").text(playerOneName + ", your turn!");
    }
  });

}); // end ready
