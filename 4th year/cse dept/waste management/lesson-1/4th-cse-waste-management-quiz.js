// Your existing questions array
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Transfer Markup Language",
      "Hyper Text Markup Language",
      "High-Level Text Markup Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 1,
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["link", "href", "a", "hyperlink"],
    correct: 2,
  },
  {
    question: "What is the correct HTML for creating a line break?",
    options: ["lb", "break", "br", "newline"],
    correct: 2,
  },
  {
    question: "Which HTML element is used for creating an unordered list?",
    options: ["ol", "li", "ul", "list"],
    correct: 2,
  },
  {
    question: "What is the purpose of the meta tag in HTML?",
    options: [
      "To define a webpage's character set",
      "To create a metadata section for a webpage",
      "To display a list of keywords",
      "To insert an image into the webpage",
    ],
    correct: 0,
  },
  {
    question: "In HTML, what does the img tag represent?",
    options: ["An image", "A hyperlink", "A line break", "A video"],
    correct: 0,
  },
  {
    question:
      "Which HTML element is used to define the structure of an HTML document?",
    options: ["header", "main", "section", "doctype"],
    correct: 3,
  },
  {
    question: "What does the HTML p element stand for?",
    options: ["Paragraph", "Page", "Preformatted text", "Photo"],
    correct: 0,
  },
  {
    question: "Which HTML element is used to define a clickable button?",
    options: ["button", "a", "input", "clickable"],
    correct: 0,
  },
  {
    question: "In HTML, what does the h1 element represent?",
    options: [
      "A heading level 1",
      "A horizontal line",
      "A hyperlink",
      "A highlighted text",
    ],
    correct: 0,
  },

  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["ol", "li", "ul", "list"],
    correct: 0,
  },
  {
    question: "In HTML, which tag is used to define an image?",
    options: ["img", "image", "image-src", "picture"],
    correct: 0,
  },
  {
    question: "What is the purpose of the HTML head element?",
    options: [
      "To define the main content of a webpage",
      "To set the page's background color",
      "To contain metadata about the document",
      "To create hyperlinks",
    ],
    correct: 2,
  },
  {
    question: "Which HTML element is used to define a table row?",
    options: ["table", "tr", "td", "th"],
    correct: 1,
  },
  {
    question: "What is the HTML element for creating a checkbox?",
    options: [
      "checkbox",
      "input type='checkbox'",
      "check",
      "input type='check'",
    ],
    correct: 1,
  },
  
  {
    question: "In HTML, which element is used to create a button?",
    options: ["button", "a", "input type='button'", "btn"],
    correct: 2,
  },
  {
    question: "What is the HTML element for creating a radio button?",
    options: [
      "radio",
      "input type='radio'",
      "radio-button",
      "input type='option'",
    ],
    correct: 1,
  },
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
  window.location.href = "4th-cse-unit-2.html"; // Replace with the actual URL
});
