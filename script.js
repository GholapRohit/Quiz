// DOM elements
const quizOptions = document.querySelector(".quiz-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const resultContainer = document.querySelector(".result-container");
const quizContainer = document.querySelector(".quiz-container");
const configContainer = document.querySelector(".config-container");

// Quiz state variables
let currQuestion = null;
let quizCategory = "Programming";
let numberOfQuestions = 5;
const quizTimeLimit = 10;
let timerInterval = null;
let score = 0;
let questionIndexHistory = [];

// Quiz category selection
document.querySelectorAll(".category-opt").forEach((opt) => {
  opt.addEventListener("click", (e) => {
    document.querySelectorAll(".category-opt").forEach((opt) => {
      opt.classList.remove("selected");
    });
    e.target.classList.add("selected");
    quizCategory = e.target.textContent;
  });
});

//  No. of Questions selection
document.querySelectorAll(".question-opt").forEach((opt) => {
  opt.addEventListener("click", (e) => {
    document.querySelectorAll(".question-opt").forEach((opt) => {
      opt.classList.remove("selected");
    });
    e.target.classList.add("selected");
    numberOfQuestions = e.target.textContent;
  });
});

// Display quiz result
const showQuizResult = () => {
  clearInterval(timerInterval);
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  let resultText = `You answered <b>${score}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great
        efforts!`;
  document.querySelector(".result-message").innerHTML = resultText;
};

// Start timer for quiz
const startTimer = () => {
  currentTime = quizTimeLimit;
  timerInterval = setInterval(() => {
    document.querySelector(".timer").textContent = `${currentTime}s`;
    currentTime--;
    if (currentTime < 0) {
      clearInterval(timerInterval);
      //show the correct answer and disable all options and show next button
      document.querySelectorAll(".answer-option").forEach((opt) => {
        if (opt.textContent == currQuestion.answer) {
          opt.classList.add("correct");
          opt.insertAdjacentHTML(
            "beforeend",
            `<i class="fa-solid fa-circle-check"></i>`
          );
        }
        opt.style.pointerEvents = "none";
      });
      nextQuestionBtn.style.visibility = "visible";
    }
  }, 1000);
};

// Check if selected option is correct or not
const handleAnswer = (li) => {
  //stop timer
  clearInterval(timerInterval);

  //show next button
  nextQuestionBtn.style.visibility = "visible";

  //check the answer and increase score if correct
  let isCorrect = currQuestion.answer == li.textContent;
  if (isCorrect) {
    score++;
    li.classList.add("correct");
    li.insertAdjacentHTML(
      "beforeend",
      `<i class="fa-solid fa-circle-check"></i>`
    );
  } else {
    li.classList.add("incorrect");
    li.insertAdjacentHTML(
      "beforeend",
      `<i class="fa-solid fa-circle-xmark"></i>`
    );
  }

  //show correct answer and disable all options
  document.querySelectorAll(".answer-option").forEach((opt) => {
    if (!isCorrect && opt.textContent == currQuestion.answer) {
      opt.classList.add("correct");
      opt.insertAdjacentHTML(
        "beforeend",
        `<i class="fa-solid fa-circle-check"></i>`
      );
    }
    opt.style.pointerEvents = "none";
  });
};

// Get a random question from the selected category
const getRandomQuestion = () => {
  let catAllQuestions = []; //catAllQuestions is an array of questions(object) for the selected category

  //categories is an object with category name as key and array of questions as value
  for (cat in categories) {
    if (cat === quizCategory) {
      catAllQuestions = categories[cat];
      break;
    }
  }

  // filter out the questions that have already been asked
  // availableQuestions is an array of questions(object) that have not been asked yet
  const availableQuestions = catAllQuestions.filter((_, index) => {
    //questionIndexHistory is an array of questions(object) that have already been asked
    return !questionIndexHistory.includes(catAllQuestions[index]);
  });

  // randomQuestion is an object with question, options and answer
  let randomQuestion =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

  questionIndexHistory.push(randomQuestion);

  return randomQuestion; //question object
};

// Render the question on the screen
const renderQuestion = () => {
  //start timer
  startTimer();

  //hide next button
  nextQuestionBtn.style.visibility = "hidden";

  //clear the quiz options
  quizOptions.innerHTML = "";

  //get a random question(object) from the selected category
  currQuestion = getRandomQuestion();
  document.querySelector(".quiz-question").textContent = currQuestion.question;

  //create a list item(li) of each option and add event listener to each option to handle answer and append it to the quiz-options(ul)
  currQuestion.options.forEach((opt) => {
    let li = document.createElement("li");
    li.classList.add("answer-option");
    li.textContent = opt;
    quizOptions.appendChild(li);
    li.addEventListener("click", () => {
      handleAnswer(li);
    });
  });

  questionStatus.innerHTML = `Question <b>${questionIndexHistory.length}</b> of <b>${numberOfQuestions}</b>`;

  //check if the quiz is finished or not
  // if yes, change the text of next button to finish quiz and add event listener to show result
  // if no, remove the event listener of show result
  if (questionIndexHistory.length >= numberOfQuestions) {
    nextQuestionBtn.textContent = "Finish Quiz";
    nextQuestionBtn.removeEventListener("click", renderQuestion);
    nextQuestionBtn.addEventListener("click", showQuizResult);
  } else {
    nextQuestionBtn.textContent = "Next Question";
    nextQuestionBtn.removeEventListener("click", showQuizResult);
    nextQuestionBtn.addEventListener("click", renderQuestion);
  }
};

// Reset the quiz state variables and show the config container
const resetQuiz = () => {
  score = 0;
  console.log(questionIndexHistory);
  questionIndexHistory = [];
  configContainer.style.display = "block";
  resultContainer.style.display = "none";
};

// Start the quiz by hiding the config container and showing the quiz container and rendering the first question
const startQuiz = () => {
  configContainer.style.display = "none";
  quizContainer.style.display = "block";
  renderQuestion();
};

// Event listeners for buttons
// renderQuestion is called when the next question button is clicked
nextQuestionBtn.addEventListener("click", renderQuestion);
// resetQuiz is called when the try again button is clicked after the quiz is finished
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
// startQuiz is called when the start quiz button is clicked in the config container
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);
