const questions = document.querySelectorAll("h4");

const toggleAnswer = function (question) {
  question.closest(".question-wrapper").classList.toggle("active-question");
};

questions.forEach((question) =>
  question.addEventListener("click", function () {
    toggleAnswer(question);
  })
);
