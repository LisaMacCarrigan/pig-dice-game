//Business Logic

var Player = function(name, score) {
  this.playerName = name;
  this.scoreTotal = 0;
  this.currentScore = score;
}





//User Interface Logic
$(document).ready(function(){
  $("#signup-form").submit(function(event){
    event.preventDefault();
    var playerOneName = $("#player-one-signup").val();
    var playerTwoName = $("#player-two-signup").val();
    console.log(playerOneName + playerTwoName);
  });//end .submit

});//End .ready
