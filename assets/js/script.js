const QUESTION = document.querySelector('#question');
const CHOICES = Array.from(document.querySelectorAll('.choice-text'));
const PROGRESS_TEXT = document.querySelector('#progressText');
const SCORE_TEXT = document.querySelector('#score');
const timeleft = document.getElementById("timeleft");




let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

fetch ("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple")
 .then(res => {
     return res.json();
 })
 .then(loadedQuestions => {
     console.log(loadedQuestions)
    //  questions = loadedQuestions;
    //  startGame();

 })

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 4;

//start game function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions=[...questions];
    getNewQuestion();
};

//countdown timer for each question
timer = () => {
    // set timer decrease 1 every second
    time = time - 1;
    if (time < 30) {
        // display time left
        timeleft.innerHTML = `<i class="far fa-clock"></i> : ${time} seconds`;
    }
    if (time < 1) {
        // moves to next question when time is up
        clearInterval(update);
        getNewQuestion();
    }
};



getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');
    }

    questionCounter++;
    PROGRESS_TEXT.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    
    CHOICES.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });

    //Removes used questions
    availableQuestions.splice(questionsIndex, 1);
    // set timer of 30s for each question
    time = 30;
    update = setInterval("timer()", 1000);
    acceptingAnswers = true;
};

CHOICES.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];


        if (selectedAnswer == currentQuestion.answer) {
            classToApply = "correct";
            incrementScore(SCORE_POINTS);
        } else{
            classToApply = "incorrect";
            alert(`Sorry the correct answer was ${currentQuestion.answer}!`,)
        }


        selectedChoice.parentElement.classList.add(classToApply);

        //adds slight delay before next question and removes css styling to answers
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
            clearInterval(update);
        }, 600);
    });
});

//Display added score to player 

incrementScore = num => {
    score +=num;
    SCORE_TEXT.innerText= score;
};

