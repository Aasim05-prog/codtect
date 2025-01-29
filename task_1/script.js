let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: " Which year did MS Dhoni lead the Indian cricket team to victory in the ICC T20 World Cup?",
    answers: [
      { text: "2012", correct: false },
      { text: "2011", correct: false },
      { text: "2007", correct: true },
      { text: "2009", correct: false },
    ],
  },
  {
    question: "Which of the following is considered the most famous example of Mughal architecture?",
    answers: [
      { text: "Taj Mahal", correct: true },
      { text: "Red Fort", correct: false },
      { text: "Fatehpur Sikri", correct: false },
      { text: "Qutb Minar", correct: false },
    ],
  },
  {
    question: "Which state is known as the 'Land of the Rising Sun' in India?",
    answers: [
      { text: "Assam", correct: false },
      { text: "Nagaland", correct: false },
      { text: "Sikkim", correct: false },
      { text: "Arunachal Pradesh", correct: true },
    ],
  },
  {
    question: "Which of the following is the main governing body for higher education in India?",
    answers: [
      { text: "National Board of Accreditation (NBA)", correct: false },
      { text: "University Grants Commission (UGC)", correct: true },
      { text: "All India Council for Technical Education (AICTE)", correct: false },
      { text: "Indian Council of Social Science Research (ICSSR)", correct: false },
    ],
  },
  {
    question: "In which year did India adopt the Goods and Services Tax (GST)?",
    answers: [
      { text: "2015", correct: false },
      { text: "2016", correct: false },
      { text: "2017", correct: true },
      { text: "2018", correct: false },
    ],
  },
];

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;
  
  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="answer" value="${index}"> ${answer.text}`;
    label.onclick = function () {
      selectAnswer(answer, label);
    };
    answersContainer.appendChild(label);
  });

  document.getElementById("feedback-container").innerHTML = ""; 
}

function selectAnswer(selectedAnswer, label) {
  
  const allLabels = document.querySelectorAll("#answers-container label");
  allLabels.forEach(label => label.classList.remove("selected"));
  label.classList.add("selected");

  const feedbackContainer = document.getElementById("feedback-container");
  if (selectedAnswer.correct) {
    feedbackContainer.innerHTML = "Correct!";
    label.classList.add("correct");
    score++;
  } else {
    feedbackContainer.innerHTML = "Incorrect!";
    label.classList.add("incorrect");
  }

  const allRadioButtons = document.querySelectorAll("#answers-container input");
  allRadioButtons.forEach(input => input.disabled = true);
  
  document.getElementById("next-button").style.display = "block"; 
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    document.getElementById("next-button").style.display = "none"; 
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <h2>Quiz Over!</h2>
      <p>Your score: ${score} / ${questions.length}</p>
    `;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadQuestion();
  document.getElementById("next-button").style.display = "none"; 
});
