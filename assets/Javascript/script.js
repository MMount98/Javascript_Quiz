//DECLARED VARILBLE
var titleCard = document.querySelector(".titleCard");
var gameCard = document.querySelector(".gameCard");
var scoreBoard = document.querySelector(".scoreBoard");
var startBtn = document.querySelector(".st-btn");
var questionEl = document.querySelector(".gameCard");
var questionTitle = document.querySelector("#title");
var optionBtns = document.querySelectorAll(".option");
var timer = document.querySelector("#timer");

var wins = 0;
var loses = 0;
var countDown = 90;

var questions = [
  {
    title: "What Color is the sky?",
    options: ["Blue", "Red", "Green", "Yellow"],
    correct: "Blue",
  },
  {
    title: "What is 2+2?",
    options: ["4", "5", "6", "7"],
    correct: "4",
  },
  {
    title: "What is written on the Ceiling",
    options: ["Gulllable", "Hi", "im tired", "ahhhhh"],
    correct: "Gulllable",
  },
];

//FUNCTIONS

function startGame() {
  titleCard.setAttribute("class", "titleCard hidden");
  gameCard.setAttribute("class", "gameCard shown");
  clock();
  nextQuestion();
}

//Display both question and move through the array to display the next question
function nextQuestion(event) {
  var currentQuesiton = 0;

  for (var i = 0; i < questions[currentQuesiton].options.length; i++) {
    optionBtns[i].textContent = questions[currentQuesiton].options[i]; //iterates over options array and adds options index value
    questionTitle.textContent = questions[currentQuesiton].title;
  }
  //Checks if what btn user clicked is right or wrong
  if (event.target.textContent === questions[currentQuesiton].correct) {
    console.log("correct");
  } else {
    console.log("Wrong");
  }
}

function clock() {
  var timerInterval = setInterval(function () {
    countDown--;
    timer.textContent = "Time Remaining: " + countDown;

    if (countDown === 0) {
      clearInterval(timerInterval);
      lostGame();
    }
  }, 1000);
}

function lostGame() {
  gameCard.setAttribute("class", "gameCard hidden");
  scoreBoard.setAttribute("class", "scoreBoard shown");
}

startBtn.addEventListener("click", startGame);

gameCard.addEventListener("click", nextQuestion);
