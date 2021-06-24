const USERNAME = document.querySelector("#username");
const SAVED_SCORE_BTN = document.querySelector("#savedScoreBtn");
const FINAL_SCORE = document.querySelector("#finalScore");

const MOST_RECENT_SCORE = localStorage.getItem("mostRecentScore");
const HIGH_SCORES = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;


FINAL_SCORE.innerText = MOST_RECENT_SCORE;


USERNAME.addEventListener('keyup', () => {
    SAVED_SCORE_BTN.disabled = !USERNAME.value;
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: MOST_RECENT_SCORE,
        name: USERNAME.value
    };

    HIGH_SCORES.push(score);

    HIGH_SCORES.sort((a,b) => {
        return b.score - a.score;
    });

    HIGH_SCORES.splice(MAX_HIGH_SCORES);

    localStorage.setItem('highScore', JSON.stringify(HIGH_SCORES));
    window.location.assign('/');
};
