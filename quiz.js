// Quiz data: Array of objects containing questions, choices, and correct answers
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "What is the capital of England?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "London"
    },
    {
        question: "What is the capital of Nigeria?",
        choices: ["Paris", "London", "Berlin", "Abuja"],
        correctAnswer: "Abuja"
    },
    {
        question: "What is the capital of Germany?",
        choices: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Berlin"
    },
    {
        question: "What is the capital of Spain?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Madrid"
    }
];

// DOM Elements
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next-button");
const progressElement = document.getElementById("progress");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const restartButton = document.getElementById("restart-button");
let answeredQuestions = 0;

// Variables to track quiz progress and score
let currentQuestionIndex = 0;
let score = 0;
let userChoice = "undefined";

// Function to display the current question, clear previous choices, Display choices and Update progress.
function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(button);
    });
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}

// Function to check the selected answer and Check if the quiz is over 
function checkAnswer(selectedChoice) {
    answeredQuestions++;
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedChoice === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        restartButton.style.display = "block";
        showResult();
    }
}

// Function to display the final result of the quiz
function showResult() {
    if(answeredQuestions >= quizData.length){
document.getElementById("scoreHeader").style.display = "block";
    questionElement.textContent = "Quiz Completed!";
    choicesElement.innerHTML = "";
    progressElement.textContent = "";
    scoreElement.textContent = `Your Score: ${score} out of ${quizData.length}`;
    nextButton.style.display = "none";
    }
}

// Event listener for the "Next" button to move to the next question
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        showResult();
    }
});

// Function to restart the quiz by reloading the page 
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
     scoreElement.textContent = "";
    nextButton.style.display = "block";
    //console.log("Restarting quiz...");
    location.reload();
}

// Event listener for the "Restart" button to restart the quiz
restartButton.addEventListener("click", restartQuiz);

// Display the total number of questions in the quiz
//totalQuestionsElement.textContent = `Total Questions: ${quizData.length}`;

// Display the first question when the page loads
displayQuestion();
    
// Start the quiz by calling the displayQuestion function
displayQuestion();