const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What does HTML stand for?',
        choice1: 'Hyper Text Preprocessor ', correct: false,
        choice2: 'Hyper Text Markup Language', correct: true,
        choice3: 'Hyper Text Multiple Language', correct: false,
        choice4: 'Hyper Tool Multi Language', correct: false
        
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
]

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions=[...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText= score
}

startGame()