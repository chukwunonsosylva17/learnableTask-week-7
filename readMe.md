### Simple Quiz App

This is a simple quiz application built using HTML, CSS, and JavaScript. The app presents a series of questions to the user, tracks their score, and displays the final result at the end of the quiz.

## Project Structure
* index.html
* quiz.js
* style.css

## **index.html** 

This file contains the HTML structure of the quiz application. It includes the following elements:
* A container for the quiz (quiz-container)
* A header for the quiz title (h1)
*  A progress indicator (progress)
* A container for the question (question-container)
* A container for the answer choices (choices)
* A button to move to the next question (next-button)
* A container to display the score and a button to restart the quiz (score-container)

## **quiz.js**

This file contains the JavaScript code that powers the quiz application. It includes the following functionality:
* An array of quiz questions, choices, and correct answers (quizData)
* DOM elements for displaying the question, choices, progress, score, and buttons
* Variables to track the current question index, score, and answered questions
* Functions to display the current question, check the selected answer, and show the final result
* Event listeners for the "Next" and "Restart" buttons

## **style.css**

This file contains the CSS styles for the quiz application. It includes styles for the body, quiz container, headers, question, choices, progress, buttons, and responsive design for smaller screens.

## **How to Use
* 1. Open index.html in a web browser.
* 2. The quiz will start with the first question displayed.
* 3. Select an answer by clicking on one of the choices.
* 4. Click the "Next" button to move to the next question.
* 5. After answering all questions, the final score will be displayed.
* 6. Click the "Restart Quiz" button to restart the quiz.

```plaintext
Example
Here is an example of the quiz data structure in quiz.js:

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
]; 
```
<br>

## Functions  

## **displayQuestion()**
Displays the current question and choices, and updates the progress indicator.

## **checkAnswer(selectedChoice)**
Checks if the selected choice is correct, updates the score, and moves to the next question or shows the final result if the quiz is over.

## **showResult()**
Displays the final score and hides the "Next" button.

## **restartQuiz()**
Restarts the quiz by reloading the page.

## **Event Listeners**
* nextButton.addEventListener() - Moves to the next question when the "Next" button is clicked.
* restartButton.addEventListener() - Restarts the quiz when the "Restart" button is clicked.