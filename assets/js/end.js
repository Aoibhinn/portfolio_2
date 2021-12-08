const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//sets the amount of high scores to be saved and displayed
const MAX_HIGH_SCORES = 5;


finalScore.innerText = mostRecentScore;

//disables save score button if no name is input
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    
    //push highscore into array
    highScores.push(score);
    //sorts highscores into order
    highScores.sort( (a,b) => b.score - a.score );
    //cuts the array of highscores to just show top 5
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');

   
};