var displayScore = JSON.parse(localStorage.getItem("highScores"));
console.log(displayScore);

for (var i = 0; i < displayScore.length; i++) {
  var display = document.getElementById("leaderboard");
  var liEl = document.createElement("li");

  liEl.textContent = displayScore[i].initals + ": " + displayScore[i].score;
  display.appendChild(liEl);
}
