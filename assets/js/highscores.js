const highScoresList = document.getElementById("highScoresList");
//pulls array of highscores stored in local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);