let currentQuestionIndex = 0;
const questionsData = {
  questions: [
    {
      question: "What is the capital of France?",
      options: [
        { id: 1, text: "Paris" },
        { id: 2, text: "London" },
        { id: 3, text: "Rome" },
        { id: 4, text: "Berlin" },
      ],
      correctAnswer: 1,
    },
    {
      question: "What is 5 + 7?",
      options: [
        { id: 1, text: "12" },
        { id: 2, text: "10" },
        { id: 3, text: "15" },
        { id: 4, text: "8" },
      ],
      correctAnswer: 1,
    },
    {
      question: "Which language is used for web development?",
      options: [
        { id: 1, text: "Python" },
        { id: 2, text: "JavaScript" },
        { id: 3, text: "Java" },
        { id: 4, text: "C++" },
      ],
      correctAnswer: 2,
    },
    // Add more questions here...
  ],
};

const totalQuestions = questionsData.questions.length;
const userAnswers = new Array(totalQuestions).fill(null);

const modal = document.getElementById("quizModal");
const questionContainer = document.getElementById("questionContainer");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const closeModalButton = document.getElementById("closeModalButton");

// Open the modal when "Play Now" is clicked
document.getElementById("playNowButton").addEventListener("click", () => {
  console.log("Q2");

  modal.style.display = "block";
  loadQuestion(currentQuestionIndex);
});

// Close the modal when the close button is clicked
function closeModal() {
  modal.style.display = "none";
}

// Load question based on the current index
function loadQuestion(index) {
  const questionData = questionsData.questions[index];
  const selectedAnswer = userAnswers[index];

  questionContainer.innerHTML = `
  <p>${questionData.question}</p>
  <div class="options">
    ${questionData.options
      .map(
        (option) => `
      <label>
        <input 
          type="radio" 
          name="question${index}" 
          value="${option.id}" 
          ${selectedAnswer === option.id ? "checked" : ""}  
        >
        ${option.text}
      </label>
    `
      )
      .join("")}
  </div>
`;
  const radios = questionContainer.querySelectorAll(
    `input[name="question${index}"]`
  );
  radios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      userAnswers[index] = parseInt(event.target.value);
    });
  });

  // Toggle visibility of buttons
  prevButton.style.display = index === 0 ? "none" : "inline-block";
  nextButton.style.display =
    index === totalQuestions - 1 ? "none" : "inline-block";
  submitButton.style.display =
    index === totalQuestions - 1 ? "inline-block" : "none";
}

// Go to the previous question
function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion(currentQuestionIndex);
  }
}

// Go to the next question
function nextQuestion() {
  if (currentQuestionIndex < totalQuestions - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  }
}

// Handle form submission
document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("User's Answers:", userAnswers);
  userAnswers.fill(null);
  currentQuestionIndex = 0;
  loadQuestion(currentQuestionIndex);
  modal.style.display = "none"; // Close the modal after submission
});

