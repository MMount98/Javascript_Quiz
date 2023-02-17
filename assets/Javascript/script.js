//DECLARED VARILBLE
var titleCard = document.querySelector(".titleCard");
var gameCard = document.querySelector(".gameCard");
var scoreBoard = document.querySelector(".scoreBoard");
var startBtn = document.querySelector(".st-btn");
var optionBtns = document.querySelectorAll(".option");
var submitBtn = document.querySelector(".Submit");
var questionEl = document.querySelector(".gameCard");
var questionTitle = document.querySelector("#title");
var timer = document.querySelector("#timer");
var displayScore = document.querySelector("#finalScore");
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
      storeInfo();
    }
  }
  //changes the h2 in DOM to match current question
  questionTitle.textContent = questions[currentQuesiton].title;
  //iterates over options array and adds options index value
  for (var i = 0; i < questions[currentQuesiton].options.length; i++) {
    optionBtns[i].textContent = questions[currentQuesiton].options[i];
  }
}

function clock() {
  timerInterval = setInterval(function () {
    countDown--;
    timer.textContent = "Time Remaining: " + countDown;

    if (countDown === 0) {
      clearInterval(timerInterval);
      endGame();
      storeInfo();
    }
  }, 1000);
}

function endGame() {
  gameCard.setAttribute("class", "gameCard hidden");
  scoreBoard.setAttribute("class", "scoreBoard shown");
  localStorage.setItem("score", countDown);
  displayScore.textContent = localStorage.getItem("score");
}

function storeInfo(event) {
  event.preventDefault();
  console.log(event);
  var initals = document.querySelector("#intials").value;
  console.log(initals);

  var setScore = {
    initals: initals,
    score: score,
  };
}

startBtn.addEventListener("click", startGame);

gameCard.addEventListener("click", nextQuestion);

submitBtn.addEventListener("click", storeInfo);

//POSSIBLE SOLUTION TO DBLCLICK ISSUE
// console.log(event);
// console.log(currentQuesiton);
// if (event) {
//   //Checks if what btn user clicked is right or wrong
//   if (event.target.textContent === questions[currentQuesiton].correct) {
//     console.log("correct");
//   } else {
//     countDown -= 15;
//   }

//   currentQuesiton++;

//   if (currentQuesiton === questions.length) {
//     clearInterval(timerInterval);
//     endGame();
//   }
// }
// //changes the h2 in DOM to match current question
// questionTitle.textContent = questions[currentQuesiton].title;
// //iterates over options array and adds options index value
// for (var i = 0; i < questions[currentQuesiton].options.length; i++) {
//   optionBtns[i].textContent = questions[currentQuesiton].options[i];
// }
