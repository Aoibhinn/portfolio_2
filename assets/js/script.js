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


let questions = [
    {
        question: 'What does HTML stand for?',
        choice1: 'Hyper Text Preprocessor ', 
        choice2: 'Hyper Text Markup Language', 
        choice3: 'Hyper Text Multiple Language',
        choice4: 'Hyper Tool Multi Language', 
        answer: 2,
        
    },
    
    {
        question: 'What does CSS stand for?',
        choice1: 'Common Syle Sheet',
        choice2: 'Colorful Style Sheet',
        choice3: 'Compluter Style Sheet',
        choice4: 'Cascading Style Sheet',
        answer: 4,
    },
    {
        question: 'What does PHP stand for?',
        choice1: 'Hometext Preprocessor',
        choice2: 'Hypertext Preprogramming',
        choice3: 'Hypertext Programming',
        choice4: 'Hypertext Preprocessor',
        answer: 4,
    },
    {
        question: 'What does SQL stand for?',
        choice1: 'Stylish Question Language',
        choice2: 'Styesheet Query Language',
        choice3: 'Statement Question Language',
        choice4: 'Structured Query Language',
        answer: 4,
    },
];

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
    if (time < 10) {
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
    time = 10;
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

startGame();
