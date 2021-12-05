const HIGH_SCORES_LIST = document.querySelector('#highScoresList');
const HIGH_SCORE = JSON.parse(localStorage.getItem('highScores')) || [];



HIGH_SCORES_LIST.innerHTML = 
HIGH_SCORE.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join('');