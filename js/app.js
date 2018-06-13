
// creating  the module pattern
(function () {
// use strict for good practice
'use strict'
// append start screen
$('body').append("<div class='screen screen-start' id='start'><header><h1>Tic Tac Toe</h1><br><p class='message'>Enter Player 1 Name: </p><input type='text' class='player1Name' name='player1Name'><br><p class='message'>Enter Player 2 Name: </p><input type='text' class='player2Name' name='player2Name'><br><label><input type='checkbox' class='AI' /> Play the Computer?</label><br><a href='#' class='button start'>Start game</a></header></div>");
// append player 1 wins screen
$('body').append("<div class='screen screen-win-one' id='finish'><header><h1>Tic Tac Toe</h1><p class='message'> Wins!</p><a href='#' class='button'>New game</a></header></div>");
// append player 2 wins screen
$('body').append("<div class='screen screen-win-two' id='finish'><header><h1>Tic Tac Toe</h1><p class='message'> Wins!</p><a href='#' class='button'>New game</a></header></div>");
// append it's a tie div
$('body').append("<div class='screen screen-win-draw' id='finish'><header><h1>Tic Tac Toe</h1><p class='message'>It's a Tie!</p><a href='#' class='button'>New game</a></header></div>");
//creating CSS for the box
$(':text').css({
    "width": "30%",
    "padding": "12px 20px",
    "margin": "8px 0",
    "box-sizing": "border-box",
    "border-radius": "6px"
});

$('label').css({
    'display': 'block',
    'padding-left': '15px',
    'text-indent': '-15px',
  });

$(':checkbox').css ({
    'width': '13px',
    'height': '13px',
    'padding': '0',
    'margin': '0',
    'vertical-align': 'bottom',
    'position': 'relative',
    'top': '-1px',
    '*overflow': 'hidden'
});
// when checkbox is checked, start the AI game against computer 
var playComputer = false;
$(".AI").change(function() {
    if(this.checked) {
      playComputer = true;
      console.log(playComputer);
      return playComputer;
    }
    else {
      playComputer = false;
      return playComputer;
    }
});

//set count to zero
var count = 0;
//creating the initial state variables
var a1o = false;
var a1x = false;
var a2o = false;
var a2x = false;
var a3o = false;
var a3x = false;
var b1o = false;
var b1x = false;
var b2o = false;
var b2x = false;
var b3o = false;
var b3x = false;
var c1o = false;
var c1x = false;
var c2o = false;
var c2x = false;
var c3o = false;
var c3x = false;
var player1W = false;
var player2W = false;

// set IDs of Boxes
var boxCount = 1;
$('.boxes > .box').each(function(index) {
  $(this).attr("id", boxCount)
  boxCount++
});
// declare a winner
var winner = function () {
  if (player1W) {
    $('.board').hide();
    $('.screen-win-one').show();
    }
  else if (player2W) {
      $('.board').hide();
      $('.screen-win-two').show();
    }
  };
var tieGame = function () {
  $('.board').hide();
  $('.screen-win-draw').show();
}
// hide everything initially besides the start screen when game is loaded
$('.screen-win-one').hide();
$('.screen-win-two').hide();
$('.screen-win-draw').hide();
$('.board').hide();
//Text entered for players names
$('.button').click(function() {
  var player1Name = $(".player1Name").val();
  if (player1Name) {
  $('#player1').html("<p style='color:black;'>" + player1Name + "</p>");
  $('.screen-win-one').find('.message').html(" " + player1Name + " Wins!");
  }
  var player2Name = $(".player2Name").val();
  if (player2Name) {
  $('#player2').html("<p style='color:black;'>" + player2Name + "</p>");
  $('.screen-win-two').find('.message').html(" " + player2Name + " Wins!");
  }
});

// clicking on a button either starts/restarts the game
$('.button').click(function() {
  count = 0;
  $('.box').removeClass('box-filled-1 box-filled-2');
  $('.screen').hide();
  $('.board').show();
  $('#player1').addClass('active');
  $('#player2').removeClass('active');
  console.log(count);
  return count;
});
// reset winning boolean values
$('.button').click(function() {
  player1W = false;
  return player1W;
});
$('.button').click(function() {
  player2W = false;
  return player2W;
});
$( ".box" ).mouseover( function() {
  if (!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')) {
  if (count%2 == 0) {
    $(this).css("background-image", "url(./img/o.svg)");
  }
  // player 2's turn
  else {
    $(this).css("background-image", "url(./img/x.svg)");
  }
}
  });
$( ".box" ).mouseout(function() {
  $(this).css("background-image", "");
});
$('.box').click(function() {
  if (!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')) {
  // if it's player 1's turn
  if (count%2 == 0) {
    $(this).addClass('box-filled-1');
    $('#player2').addClass('active');
    $('#player1').removeClass('active');
  }
  //otherwise it's player 2's turn
  else {
        $(this).addClass('box-filled-2');
        $('#player1').addClass('active');
        $('#player2').removeClass('active');
  }
  a1o = $('#1').hasClass("box-filled-1");
  a1x = $('#1').hasClass("box-filled-2");
  a2o = $('#2').hasClass("box-filled-1");
  a2x = $('#2').hasClass("box-filled-2");
  a3o = $('#3').hasClass("box-filled-1");
  a3x = $('#3').hasClass("box-filled-2");
  b1o = $('#4').hasClass("box-filled-1");
  b1x = $('#4').hasClass("box-filled-2");
  b2o = $('#5').hasClass("box-filled-1");
  b2x = $('#5').hasClass("box-filled-2");
  b3o = $('#6').hasClass("box-filled-1");
  b3x = $('#6').hasClass("box-filled-2");
  c1o = $('#7').hasClass("box-filled-1");
  c1x = $('#7').hasClass("box-filled-2");
  c2o = $('#8').hasClass("box-filled-1");
  c2x = $('#8').hasClass("box-filled-2");
  c3o = $('#9').hasClass("box-filled-1");
  c3x = $('#9').hasClass("box-filled-2");

  //check if player one won the game
  var checkWin = function () {
      if ((a1o && a2o && a3o)  ||
      (b1o && b2o && b3o) ||
      (c1o && c2o && c3o) ||
      (a1o && b1o && c1o) ||
      (a2o && b2o && c2o) ||
      (a3o && b3o && c3o) ||
      (a1o && b2o && c3o) ||
      (a3o && b2o && c1o)
      ){
          player1W = true;
          winner();
      // check if player two has won the game
      } else {
        if ((a1x && a2x && a3x)  ||
        (b1x && b2x && b3x) ||
        (c1x && c2x && c3x) ||
        (a1x && b1x && c1x) ||
        (a2x && b2x && c2x) ||
        (a3x && b3x && c3x) ||
        (a1x && b2x && c3x) ||
        (a3x && b2x && c1x)
        ) {
              player2W = true;
              winner();

          }
      }
    }
  checkWin();
  count++;
  console.log(count);
  //if the box is full and there is no winner, it is a tiegame
  if (!player1W && !player2W && (count == 9)) {
    //it's a tie!
    tieGame();
  }
  //if the checkbox for computer was checked, play the computer
  if (playComputer) {
    if (count%2 == 1) {
      //createing a function for the computer to move
      var moveComp = function() {
        //pick a random number
        var ran = Math.floor(Math.random()*9);
        if ($('.boxes li').eq(ran).hasClass('box-filled-1') || $('.boxes li').eq(ran).hasClass('box-filled-2')) {
          moveComp();
        } else {
        $('.boxes li').eq(ran).addClass('box-filled-2');
        $('#player1').addClass('active');
        $('#player2').removeClass('active');

        //assigning the checkwin variables

        a1o = $('#1').hasClass("box-filled-1");
        a1x = $('#1').hasClass("box-filled-2");
        a2o = $('#2').hasClass("box-filled-1");
        a2x = $('#2').hasClass("box-filled-2");
        a3o = $('#3').hasClass("box-filled-1");
        a3x = $('#3').hasClass("box-filled-2");
        b1o = $('#4').hasClass("box-filled-1");
        b1x = $('#4').hasClass("box-filled-2");
        b2o = $('#5').hasClass("box-filled-1");
        b2x = $('#5').hasClass("box-filled-2");
        b3o = $('#6').hasClass("box-filled-1");
        b3x = $('#6').hasClass("box-filled-2");
        c1o = $('#7').hasClass("box-filled-1");
        c1x = $('#7').hasClass("box-filled-2");
        c2o = $('#8').hasClass("box-filled-1");
        c2x = $('#8').hasClass("box-filled-2");
        c3o = $('#9').hasClass("box-filled-1");
        c3x = $('#9').hasClass("box-filled-2");
        //check for win
        checkWin();
        count++;
        //if all box full and still no winner
        if (!player1W && !player2W && (count == 9)) {
          //it is a tieGame
          tieGame();
        return count;
        }
      }
    }
    //computer takes a turn
    moveComp();
  }}
    return count;
  }
});
//Closing up the module
}());
