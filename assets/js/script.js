const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');


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
        answer: 3,
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

//start game score and question counter is 0, display question to player

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions=[...questions];
    getNewQuestion();
};


//If the player has answered all questions, add their score to local storgae and go to the end page
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');
    }

//Increment the counter and display the question the user is currently on out of the max questions they need to answer
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

/*Keep track of what question the player is currently on. Once player has selected their choice
remove current question and choices and display new question and choices that the user has yet to answer
*/
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);
    
    acceptingAnswers = true;
};

//For selected answers display correct and incorrect css depending on answer
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect';

        //if answer is correct add to score 
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        //when choice is selected move onto next question 
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

//Display added score to player 

incrementScore = num => {
    score +=num;
    scoreText.innerText= score;
};

startGame();
