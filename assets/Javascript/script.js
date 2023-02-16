//DECLARED VARILBLE
var titleCard = document.querySelector(".titleCard");
var gameCard = document.querySelector(".gameCard");
var scoreBoard = document.querySelector(".scoreBoard");
var startBtn = document.querySelector(".st-btn");

var wins = 0;
var loses = 0;

var questions = [
  {
    question: "What Color is the sky?",
    options: ["Blue", "Red", "Green", "Yellow"],
    right: "Blue",
  },
];

console.log(titleCard.dataset.state);
//Functions

function startGame() {
  titleCard.setAttribute("class", "titleCard hidden");
  gameCard.setAttribute("class", "gameCard shown");

  

}
startBtn.addEventListener("click", startGame);
