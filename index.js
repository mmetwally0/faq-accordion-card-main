// Declare a constant for questions
const questions = document.querySelectorAll(".question");

// Declare a function to show the answer
function showAnswer(question) {
  let currentQuestion = question.dataset.question;
  let currentAnswer = document.querySelector(`#ans${currentQuestion}`);
  let currentArrow = document.querySelector(`#arr${currentQuestion}`);

  currentAnswer.style.display = "block";
  currentAnswer.style.fontWeight = "400";
  currentArrow.style.transform = "rotateX(180deg)";
  question.style.fontWeight = "700";
  question.style.color = "hsl(238, 29%, 16%)";
}

// Declare a function to Hide the answer
function hideAnswer(question) {
  let currentQuestion = question.dataset.question;
  let currentAnswer = document.querySelector(`#ans${currentQuestion}`);
  let currentArrow = document.querySelector(`#arr${currentQuestion}`);

  currentAnswer.style.display = "none";
  currentArrow.style.transform = "rotateX(0deg)";
  question.style.fontWeight = "400";
  question.style.color = "hsl(237, 12%, 33%)";
}

// Select all the question and answer-pairs
questions.forEach((question) => {
  // Hide all other answers
  question.addEventListener("click", function () {
    questions.forEach((question) => {
      hideAnswer(question);
    });

    if (this.style.fontWeight == "700") {
      hideAnswer(this);
      console.log("nope");
    } else {
      showAnswer(this);
    }
  });
});
