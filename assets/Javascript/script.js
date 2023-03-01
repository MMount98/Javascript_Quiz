//DECLARED VARILBLES
//Variblies with Refrence to DOM
var titleCard = document.querySelector(".titleCard");
var gameCard = document.querySelector(".gameCard");
var scoreBoard = document.querySelector(".finalScreen");
var startBtn = document.querySelector(".st-btn");
var optionBtns = document.querySelectorAll(".option");
var submitBtn = document.querySelector(".Submit");
var resartBtn = document.querySelector(".reset");
var questionEl = document.querySelector(".gameCard");
var questionTitle = document.querySelector("#title");
var timer = document.querySelector("#timer");
var displayScore = document.querySelector("#finalScore");
var displayWins = document.querySelector("#totalWins");
var displayLosses = document.querySelector("#totalloss");
//Variblies for placeholders
var timerInterval;
var highScore = [];
var currentQuesiton = 0;
var wins = 0;
var loses = 0;
var countDown = 180;
var questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    options: ["<javascript>", "<scripting>", "<script>", "<js>"],
    correct: "<script>",
  },
  {
    title:
      "What is the correct syntax for referring to an external script called? ",
    options: [
      "<script href = (file.js)>",
      "script href = (file.js) ",
      "<script src = (file.js)>",
      "add = (file.js)",
    ],
    correct: "<script src = (file.js)>",
  },
  {
    title: "How to display an Alert?",
    options: ["display()", "alert()", "notify()", "tellUser()"],
    correct: "alert()",
  },
  {
    title: "Which of the following is correct?",
    options: [
      "function myFunction()",
      "myFunction()",
      "function:myFunction()",
      "function = myFunction()",
    ],
    correct: "function myFunction()",
  },
  {
    title: "How do you call a Function?",
    options: [
      "active.myFunction()",
      "myFunction.call",
      "myFunction()",
      "Get their number first",
    ],
    correct: "myFunction()",
  },
  {
    title: "How to add a Comment in Javascript?",
    options: [
      "<!--Is this it?-->",
      "comment(No this is it)",
      "Just type it in, Duh",
      "//Pick Me",
    ],
    correct: "//Pick Me",
  },
  {
    title: "What do you wrap an array in?",
    options: ["[]", "{}", "||", "wrapping paper"],
    correct: "[]",
  },
  {
    title: "How do you declare a variable?",
    options: ["variable = myName", "var myName", "myName()", "myName.variable"],
    correct: "var myName",
  },
  {
    title: "Which operator is used to assign a value to a variable?",
    options: ["*", "->", "=", "+"],
    correct: "=",
  },
  {
    title: "How do you set an attribute in JavaScript?",
    options: [
      ".setAttribute()",
      ".attribute()",
      ".styled()",
      ".settingAttribute()",
    ],
    correct: ".setAttribute()",
  },
];

//FUNCTIONS

const startGame = () => {
  clock();
  titleCard.setAttribute("class", "titleCard hidden");
  gameCard.setAttribute("class", "gameCard shown");
  nextQuestion();
};

//Display both question and move through the array to display the next question
const nextQuestion = (event) => {
  if (event) {
    if (event.target.textContent === questions[currentQuesiton].correct) {
      gameCard.setAttribute("class", "gameCard shown correct");
    } else {
      gameCard.setAttribute("class", "gameCard shown wrong");
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
};

const clock = () => {
  timerInterval = setInterval(function () {
    countDown--;
    timer.textContent = "Time Remaining: " + countDown;

    if (countDown === 0) {
      clearInterval(timerInterval);
      endGame();
      storeInfo();
    }
  }, 1000);
};

const endGame = () => {
  gameCard.setAttribute("class", "gameCard hidden");
  scoreBoard.setAttribute("class", "scoreBoard shown");
  displayScore.textContent = countDown;
  if (countDown > 0) {
    wins++;
  } else if (countDown <= 0) loses++;
  displayWins.textContent = "Total Wins: " + wins;
  displayLosses.textContent = "Total Losses: " + loses;
};

const storeInfo = (event) => {
  event.preventDefault();
  var initals = document.querySelector("#intials").value;
  var storedScore = initals + ":" + countDown;

  var storedScore1 = {
    initals: initals,
    score: countDown,
  };

  highScore.push(storedScore1);

  localStorage.setItem("highScores", JSON.stringify(highScore));

  document.querySelector("#intials").value = " ";
};

const resartGame = () => {
  titleCard.setAttribute("class", "titleCard shown");
  scoreBoard.setAttribute("class", "scoreBoard hidden");
  countDown = 90;
  currentQuesiton = 0;
};

startBtn.addEventListener("click", startGame);

gameCard.addEventListener("click", nextQuestion);

submitBtn.addEventListener("click", storeInfo);

resartBtn.addEventListener("click", resartGame);
