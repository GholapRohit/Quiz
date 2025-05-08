# MindWars
This quiz website is an interactive platform where users can test their knowledge across various categories. Users can select a quiz category, set the number of questions, and answer multiple-choice questions within a time limit. The site provides instant feedback on answers, tracks scores, and displays a summary of results at the end. It features a clean interface, dynamic question rendering, and a reset option to retake the quiz.

## File Structure
The project consists of the following files:

1. **index.html**  
   The main HTML file that defines the structure of the application, including the configuration screen, quiz interface, and result display.

2. **style.css**  
   Contains the styling for the application, including layout, colors, and responsiveness.

3. **questions.js**  
   Contains the quiz data categorized into `Geography`, `Programming`, `Entertainment`, and `Mathematics`. Each category includes questions, options, and answers.

4. **script.js**  
   Contains the JavaScript logic for the quiz, including event handling, question rendering, timer functionality, and result calculation.

## Key Variables and Functions

### script.js

#### Variables
- **DOM Elements**
  - `quizOptions`: Refers to the `<ul>` element where quiz options are rendered.
  - `nextQuestionBtn`: Refers to the "Next Question" button.
  - `questionStatus`: Displays the current question number and total questions.
  - `resultContainer`: Displays the quiz result after completion.
  - `quizContainer`: Contains the quiz interface.
  - `configContainer`: Contains the configuration screen.

- **Quiz State Variables**
  - `currQuestion`: Stores the current question object.
  - `quizCategory`: Stores the selected quiz category (default: "Programming").
  - `numberOfQuestions`: Stores the number of questions selected (default: 5).
  - `quizTimeLimit`: Time limit for each question (default: 10 seconds).
  - `timerInterval`: Stores the interval ID for the timer.
  - `score`: Tracks the user's score.
  - `questionIndexHistory`: Keeps track of the questions that have already been asked.

#### Functions
1. **Category and Question Selection**
   - Event listeners on `.category-opt` and `.question-opt` buttons allow users to select a category and the number of questions. The selected button is highlighted.

2. **`showQuizResult()`**
   - Displays the result screen with the user's score and hides the quiz interface.
   - Clears the timer interval.

3. **`startTimer()`**
   - Starts a countdown timer for each question.
   - If the timer reaches zero, the correct answer is highlighted, and the "Next Question" button is shown.

4. **`handleAnswer(li)`**
   - Checks if the selected answer is correct.
   - Updates the score if the answer is correct.
   - Highlights the correct and incorrect answers.
   - Disables further interaction with the options.

5. **`getRandomQuestion()`**
   - Fetches a random question from the selected category.
   - Ensures that the same question is not repeated during the quiz.

6. **`renderQuestion()`**
   - Renders the current question and its options on the screen.
   - Starts the timer for the question.
   - Updates the question status (e.g., "Question 1 of 5").
   - Handles the transition to the next question or the result screen.

7. **`resetQuiz()`**
   - Resets the quiz state variables.
   - Displays the configuration screen.

8. **`startQuiz()`**
   - Hides the configuration screen and displays the quiz interface.
   - Calls `renderQuestion()` to start the quiz.

### questions.js

#### Variables
- **`categories`**
  - An object containing quiz data categorized into:
    - `Geography`
    - `Programming`
    - `Entertainment`
    - `Mathematics`
  - Each category is an array of question objects with the following structure:
    ```javascript
    {
      question: "Question text",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: "Correct Answer"
    }
    ```

### style.css

#### Key Styles
- **General Styles**
  - Sets a global font (`Outfit`) and applies a gradient background to the body.
  - Uses CSS Grid and Flexbox for layout.

- **Configuration Screen**
  - `.config-container`: Styles the configuration screen with a centered layout and shadow effects.
  - `.category-options` and `.question-options`: Grid layout for category and question buttons.

- **Quiz Interface**
  - `.quiz-container`: Styles the quiz interface with a header, content, and footer.
  - `.quiz-options`: Displays the answer options as a vertical list.
  - `.answer-option`: Styles individual answer options with hover effects and feedback for correct/incorrect answers.

- **Result Screen**
  - `.result-container`: Styles the result screen with a centered layout and large icons.

## How It Works
1. **Configuration**
   - The user selects a category and the number of questions on the configuration screen.
   - Clicking "Start" begins the quiz.

2. **Quiz Flow**
   - A random question is displayed along with its options.
   - The user selects an answer, and feedback is provided (correct/incorrect).
   - A timer ensures the user answers within the time limit.

3. **Result**
   - After all questions are answered, the result screen displays the user's score.
   - The user can restart the quiz by clicking "Try Again."

## Features
- **Dynamic Question Rendering**: Questions are fetched randomly from the selected category.
- **Timer**: Ensures a time-bound quiz experience.
- **Feedback**: Highlights correct and incorrect answers.
- **Responsive Design**: Adapts to different screen sizes.
