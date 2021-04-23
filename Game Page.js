//File Name Is - Game.js

//Variables
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
palyer2_score = 0;

//Setting Player' Name On The Window
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = palyer2_score;
document.getElementById("player_question").innerHTML="Question Turn = "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn = "+player2_name;

//Send Function
