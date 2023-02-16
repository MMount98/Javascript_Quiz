//DECLARED VARILBLE
var titleCard = document.querySelector(".titleCard");
var gameCard = document.querySelector(".gameCard");
var scoreBoard = document.querySelector(".scoreBoard");
var startBtn = document.querySelector(".st-btn");
var questionEl = document.querySelector(".gameCard");
var questionTitle = document.querySelector("#title");
var optionBtns = document.querySelectorAll(".option");
var timer = document.querySelector("#timer");
var timerInterval;

var currentQuesiton = 0;
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
  clock();
  titleCard.setAttribute("class", "titleCard hidden");
  gameCard.setAttribute("class", "gameCard shown");
  nextQuestion(false);
}

//Display both question and move through the array to display the next question
function nextQuestion(event) {
  //changes the h2 in DOM to match current question
  questionTitle.textContent = questions[currentQuesiton].title;
  //iterates over options array and adds options index value
  for (var i = 0; i < questions[currentQuesiton].options.length; i++) {
    optionBtns[i].textContent = questions[currentQuesiton].options[i];
  }
  console.log(event);
  if (event) {
    //Checks if what btn user clicked is right or wrong
    if (event.target.textContent === questions[currentQuesiton].correct) {
      console.log("correct");
    } else {
      countDown -= 15;
    }

    currentQuesiton++;

    if (currentQuesiton === questions.length) {
      clearInterval(timerInterval);
      endGame();
    }
  }
}

function clock() {
  timerInterval = setInterval(function () {
    countDown--;
    timer.textContent = "Time Remaining: " + countDown;

    if (countDown === 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function endGame() {
  gameCard.setAttribute("class", "gameCard hidden");
  scoreBoard.setAttribute("class", "scoreBoard shown");

  localStorage.setItem("score", countDown);
}

startBtn.addEventListener("click", startGame);

gameCard.addEventListener("click", nextQuestion);
