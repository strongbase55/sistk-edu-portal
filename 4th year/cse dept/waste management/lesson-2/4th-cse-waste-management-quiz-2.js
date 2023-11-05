const questions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: 0,
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["text-color", "font-color", "color", "text-fill"],
    correct: 2,
  },
  {
    question: "What is the correct CSS syntax for targeting an HTML element by its ID?",
    options: ["#elementID { ... }", ".elementID { ... }", "elementID { ... }", "ID:elementID { ... }"],
    correct: 0,
  },
  {
    question: "Which CSS property is used to control the spacing between elements?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question: "What is the purpose of the CSS property 'display: none'?",
    options: ["It makes an element invisible but still takes up space", "It removes the element entirely", "It changes the font color", "It creates a border around an element"],
    correct: 0,
  },
  {
    question: "In CSS, what is the 'box model' used for?",
    options: ["Styling text within a box", "Defining the size and spacing of an element", "Creating responsive layouts", "Designing navigation menus"],
    correct: 1,
  },
  {
    question: "What CSS property is used to add shadows to text?",
    options: ["text-shadow", "box-shadow", "font-shadow", "text-effect"],
    correct: 0,
  },
  {
    question: "Which CSS unit represents a length relative to the viewport width?",
    options: ["vw", "vh", "em", "px"],
    correct: 0,
  },
  {
    question: "What is the purpose of CSS pseudo-classes?",
    options: ["To select and style elements based on user interactions or state", "To define custom fonts", "To apply animations to elements", "To create gradients"],
    correct: 0,
  },
  {
    question: "What is the default value of the 'position' property in CSS?",
    options: ["relative", "fixed", "static", "absolute"],
    correct: 2,
  },
  {
    question: "Which CSS property is used to set the background color of an element?",
    options: ["bg-color", "background-color", "color-background", "element-color"],
    correct: 1,
  },
  {
    question: "What is the purpose of the CSS 'float' property?",
    options: ["To move an element to the right", "To make text bold", "To clear the text", "To position an element to the left or right of its container"],
    correct: 3,
  },
  {
    question: "Which CSS property is used to control the style of a border?",
    options: ["border-style", "border-color", "border-width", "border-visibility"],
    correct: 0,
  },
  {
    question: "What does the CSS property 'text-decoration: underline' do?",
    options: ["It adds an underline to text", "It makes text italic", "It changes the text color", "It removes text decoration"],
    correct: 0,
  },
  {
    question: "In CSS, what is the 'z-index' property used for?",
    options: ["Setting the font size", "Changing the element's width", "Controlling the element's visibility order", "Creating a gradient background"],
    correct: 2,
  },
  {
    question: "Which CSS selector targets all p elements inside a <div> element?",
    options: [".div > p", ".div p", "#div p", "p .div"],
    correct: 1,
  },{
    question: "How do you select an element with the ID 'example' in CSS?",
    options: [
      "#example { ... }",
      ".example { ... }",
      "element#example { ... }",
      "ID:example { ... }",
    ],
    correct: 0,
  },
  {
    question: "What is the purpose of the 'line-height' CSS property?",
    options: ["Adjusting the element's width", "Controlling text spacing", "Changing the element's position", "Setting background color"],
    correct: 1,
  },
  {
    question: "Which CSS property is used to control the position of an element within its container?",
    options: ["position", "alignment", "float", "display"],
    correct: 0,
  },
  {
    question: "What does 'CSS specificity' refer to?",
    options: ["The weight of a CSS rule in determining which styles are applied", "The arrangement of elements in a web page", "The degree of complexity in CSS selectors", "The rate of style changes in a web page"],
    correct: 0,
  },
  // Add more CSS questions here...
];
// Function to shuffle the questions
function shuffleQuestions() {
  questions.sort(() => Math.random() - 0.5);
}

// Shuffle the questions when the page loads
shuffleQuestions();

// Build the quiz questions and options
questions.forEach((questionData, index) => {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");

  questionElement.innerHTML = `
          <label>${index + 1}. ${questionData.question}</label>
          ${questionData.options
            .map(
              (option, i) => `
              <label class="option">
                  <input type="radio" name="q${index}" value="${i}">
                  <span>${option}</span>
              </label>
          `
            )
            .join("")}
          <span class="feedback"></span>
      `;

  document.getElementById("questions").appendChild(questionElement);
});

const quizForm = document.getElementById("quiz-form");
const modal = document.getElementById("quiz-modal");
const closeBtn = document.querySelector(".close");
const scoreContainer = document.getElementById("score");
const selectedAnswersContainer = document.getElementById("selected-answers");
const submitButton = document.getElementById("submit-button");
const rewriteTestButton = document.getElementById("rewrite-test");
const nextLessonButton = document.getElementById("next-lesson");

// Keep track of whether the quiz has been submitted
let quizSubmitted = false;

// Function to disable all radio buttons once the quiz is submitted
function disableRadioButtons() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    radio.disabled = true;
  });
}

// Function to display the modal with quiz results
function showModal() {
  modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
  modal.style.display = "none";
}

// Function to mark answers with feedback
function markAnswers() {
  questions.forEach((questionData, index) => {
    const selectedOption = document.querySelector(
      `input[name="q${index}"]:checked`
    );
    const feedbackSpan = document.querySelectorAll(".feedback")[index];

    if (selectedOption) {
      if (parseInt(selectedOption.value) === questionData.correct) {
        feedbackSpan.textContent = "Right";
        feedbackSpan.style.backgroundColor = "green";
      } else {
        feedbackSpan.textContent = "Wrong";
        feedbackSpan.style.backgroundColor = "red";
      }
    } else {
      feedbackSpan.textContent = "Not Answered";
    }
  });
}

// Add a click event listener to the submit button
submitButton.addEventListener("click", () => {
  if (quizSubmitted) {
    alert("You have already submitted the quiz. You cannot edit your answers.");
    return;
  }

  showResults();
  disableRadioButtons();
  quizSubmitted = true;
});

// Function to show the results in the popup
function showResults() {
  markAnswers();

  const totalQuestions = questions.length;
  let answeredQuestions = 0;
  let score = 0;

  questions.forEach((questionData, index) => {
    const selectedOption = document.querySelector(
      `input[name="q${index}"]:checked`
    );

    if (selectedOption) {
      answeredQuestions++;
      if (parseInt(selectedOption.value) === questionData.correct) {
        score++;
      }
    }
  });

  if (answeredQuestions === totalQuestions) {
    scoreContainer.innerHTML = `You got ${score} out of ${totalQuestions} correct!`;

    if (score === totalQuestions) {
      selectedAnswersContainer.innerHTML =
        "Congratulations! All answers are correct!";
    } else {
      selectedAnswersContainer.innerHTML = "Your selected answers:";
    }

    showModal();
    checkPassingScore(score, totalQuestions);
  } else {
    alert("You must answer all questions before submitting.");
  }
}

// Add a click event listener to the close button of the modal
closeBtn.addEventListener("click", hideModal);

// Function to check if the score is passing (e.g., 90% or higher)
function checkPassingScore(score, totalQuestions) {
  const passingScore = 0.5 * totalQuestions; // 90% passing score
  if (score >= passingScore) {
    nextLessonButton.disabled = false;
  }
}

// Add a click event listener to the "Rewrite Test" button
rewriteTestButton.addEventListener("click", () => {
  location.reload(); // Reload the page to start the test again
});

// Add a click event listener to the "Next Lesson" button
nextLessonButton.addEventListener("click", () => {
  // Redirect to the next lesson or page
  window.location.href = "4th-cse-unit-3.html"; // Replace with the actual URL
});
