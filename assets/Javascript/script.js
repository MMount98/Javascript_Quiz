//DECLARED VARILBLE
var titleCard = document.querySelector(".titleCard");
var gameCard = document.querySelector(".gameCard");
var scoreBoard = document.querySelector(".scoreBoard");
var startBtn = document.querySelector(".st-btn");
var questionEl = document.querySelector(".gameCard");
var questionTitle = document.querySelector("#title");
var optionBtns = document.querySelectorAll(".option");

var wins = 0;
var loses = 0;

var questions = [
  {
    title: "What Color is the sky?",
    options: ["Blue", "Red", "Green", "Yellow"],
    right: "Blue",
  },
  {
    title: "What is 2+2?",
    options: ["4", "5", "6", "7"],
    right: "4",
  },
  {
    title: "What is written on the Ceiling",
    options: ["Gulllable", "Hi", "im tired", "ahhhhh"],
    right: "Gulllable",
  },
];

//FUNCTIONS

function startGame() {
  titleCard.setAttribute("class", "titleCard hidden");
  gameCard.setAttribute("class", "gameCard shown");
  nextQuestion();
}

function nextQuestion() {
  var randomQuestion = Math.floor(Math.random() * questions.length);

  questionTitle.textContent = questions[randomQuestion].title;

  for (var i = 0; i < questions[randomQuestion].options.length; i++) {
    optionBtns[i].textContent = questions[randomQuestion].options[i]; //iterates over options array and adds options index value
  }
}

startBtn.addEventListener("click", startGame);
