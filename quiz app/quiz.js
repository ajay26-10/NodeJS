const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    // Add more questions as needed
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-btn');
const timerElement = document.getElementById('timer');
const timeElement = document.getElementById('time');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    nextButton.classList.remove('hide');
    submitButton.classList.add('hide');
    prevButton.classList.add('hide');
    timerElement.classList.remove('hide');
    setNextQuestion();
    startTimer();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) {
        score++;
    }
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        submitButton.classList.remove('hide');
    }
    clearInterval(timer);
}

function startTimer() {
    timeLeft = 10;
    timeElement.innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (questions.length > currentQuestionIndex + 1) {
                currentQuestionIndex++;
                setNextQuestion();
                startTimer();
            } else {
                endQuiz();
            }
        }
    }, 1000);
}

function endQuiz() {
    questionContainer.classList.add('hide');
    timerElement.classList.add('hide');
    resultContainer.classList.remove('hide');
    resultElement.innerText = `Your score is: ${score} / ${questions.length}`;
}

function handleNextButton() {
    currentQuestionIndex++;
    setNextQuestion();
    startTimer();
}

function handlePrevButton() {
    currentQuestionIndex--;
    setNextQuestion();
    startTimer();
}

function handleRestartButton() {
    startQuiz();
}

nextButton.addEventListener('click', handleNextButton);
prevButton.addEventListener('click', handlePrevButton);
submitButton.addEventListener('click', endQuiz);
restartButton.addEventListener('click', handleRestartButton);

startQuiz();
