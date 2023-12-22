document.addEventListener("DOMContentLoaded", function () {
  // Display student information form
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
      <h2>Student Information</h2>
      <form id="studentInfoForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
          <br>
          <label for="rollNumber">Roll Number:</label>
          <input type="text" id="rollNumber" name="rollNumber" required>
          <br> 
         
          <br>
          <button type="button" onclick="startQuiz()">Start Quiz</button>
      </form>
  `;
});

function startQuiz() {
  const name = document.getElementById("name").value;
  const rollNumber = document.getElementById("rollNumber").value;
  const email = document.getElementById("email").value;
  if (!name || !rollNumber) {
    alert("Please fill out all fields.");
    return;
  }

  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
      <h2>Waste Management Unit-1 MCQ Test</h2>
      <p class="highlight-info"><strong>Student Name:</strong> ${name}</p>
      <p class="highlight-info"><strong>Roll Number:</strong> ${rollNumber}</p>
      <p class="highlight-info"><strong>Email Id:</strong> ${email}</p>
  `;  
  document.querySelectorAll('.highlight-info').forEach((element) => {
    element.classList.add('highlighted');
  });

  // Mock questions (replace with your actual quiz questions)
  const questions = [
    {
      question: "The waste generated from planting, harvesting, and dead plants is known as",
      options: [
        "Domestic Waste",
        "Agriculture Waste",
        "Industrial Waste",
        "Hazardous Waste"
      ],
      correctAnswer:"Agriculture Waste",
    },
    {
      question: "How many major sources of solid waste are there based on their origin?",
      options: ["09", "07", "06", "10"],
      correctAnswer: "09",
    },
    {
      question: "Identify the Municipal Solid Waste (MSW) from the following?",
      options: ["Pharmaceutical", "Scalpels", "Food wastes", "All of the above"],
      correctAnswer: "Food wastes",
    },
    {
      question: "Which of the following plans is used as a waste management plan?",
      options: ["Reprocessing", "Reuse", "Recycling", "The integrated plan"],
      correctAnswer: "The integrated plan",
    },
    {
      question: "Which of the following is biodegradable waste?",
      options: ["Polythene bags", "Cans", "Synthetic fiber", "Paper"],
      correctAnswer: "Paper",
    },
    {
      question: "The term ISWM refers to:",
      options: ["International solid waste management", "Integrated solid waste management", "Integrated solid waste machine", "International solid waste mechanism"],
      correctAnswer: "Integrated solid waste management",
    },
    {
      question: "Which of the following gas is produced in open dumps from the decomposition of biodegradable wastes?",
      options: ["Methane", "Nitrogen", "Hydrogen", "Helium"],
      correctAnswer: "Methane",
    },
    {
      question: "Municipal Solid Waste (MSW) is described by which kind of solid waste?",
      options: ["Toxic", "Hazardous", "Non-toxic", "Non-hazardous"],
      correctAnswer: "Non-hazardous",
    },
    {
      question: "What country produces the most E-Waste?",
      options: ["Brazil", "Japan", "India", "China"],
      correctAnswer: "China",
    },
    {
      question: "According to the Comptroller and Auditor-General’s (CAG) report, what is the amount of e-waste generated annually?",
      options: ["4 Lakh Tonne", "5 Lakh Tonne", "6 Lakh Tonne", "7 Lakh Tonne"],
      correctAnswer: "4 Lakh Tonne",
    },
    {
      question: "The process of burning municipal solid waste in a specifically designed furnace under suitable temperature and operating conditions is known as?",
      options: ["Landfill", "Incineration", "Recycling", "Vermicomposting"],
      correctAnswer: "Incineration",
    },
    {
      question: "Which of the following gas is produced by the decomposition of organic material in landfills?",
      options: ["Natural gas", "Liquified petroleum gas", "Methane", "Oxygen"],
      correctAnswer: "Methane",
    },
    {
      question: "Which gas can be produced from landfill wastes from the following?",
      options: ["Natural gas", "Biogas", "Liquified petroleum gas", "All of the above"],
      correctAnswer: "Biogas",
    },
    {
      question: "Choose the correct example of Municipal Solid Waste (MSW):",
      options: ["Wood waste", "Paper", "Vegetables waste", "All of these"],
      correctAnswer: "All of these",
    },
    {
      question: "Food waste, cardboard, and paper include in the category of:",
      options: ["Domestic waste", "Commercial waste", "Industrial waste", "Agricultural waste"],
      correctAnswer: "Domestic waste",
    },
    {
      question: "Choose the correct statement about zero waste management?",
      options: ["Segregation of garbage at the source", "Separate collection of each kind of waste", "Community involvement", "All of these"],
      correctAnswer: "All of these",
    },
    {
      question: "The organic material will decompose in the buried solid waste due to?",
      options: ["The action of fungi", "By the flow of water", "The action of organisms", "The action oxidation"],
      correctAnswer: "The action of organisms",
    },
    {
      question: "How do you remove leachate from the landfill?",
      options: ["Aerobic Biological treatment", "Physical chemical treatment", "Both (a) & (b)", "None of them"],
      correctAnswer: "Both (a) & (b)",
    },
    {
      question: "Which of the following elements make e-waste hazardous in nature?",
      options: ["Plastic", "Iron", "Lead", "All of these"],
      correctAnswer: "Lead",
    },
    {
      question: "What is one of the main causes of e-waste?",
      options: ["Global warming", "Population growth", "Acid rain", "All of them"],
      correctAnswer: "Population growth",
    },
  ];
  

  // Shuffle questions
  shuffleArray(questions);

  // Display quiz rules (optional)
  const rulesContainer = document.createElement("div");
  rulesContainer.classList.add("quiz-rules");
  rulesContainer.innerHTML = `
      <h3>Quiz Rules</h3>
      <ul>
          <li>This quiz consists of ${questions.length} questions.</li>
          <li>Each question carries one mark.</li>
          <li>There is no negative marking for incorrect answers.</li>
          <li>Make sure to answer all questions before submitting.</li>
      </ul>
  `;
  quizContainer.appendChild(rulesContainer);
  // Display questions
  questions.forEach((q, index) => {
    shuffleArray(q.options);

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
          <h3>Question ${index + 1}:</h3>
          <p>${q.question}</p>
          <form id="question${index + 1}Form">
              ${q.options
                .map(
                  (option, i) => `
                  <label>
                      <input type="radio" name="question${
                        index + 1
                      }" value="${option}" required>
                      ${option}
                  </label>
              `
                )
                .join("")}
          </form>
      `;
    quizContainer.appendChild(questionDiv);
  });
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit Quiz";
  submitButton.addEventListener("click", () =>{
    submitQuiz(name, rollNumber, questions);
    removeBackground(); // Remove background once the quiz is submitted

});
  quizContainer.appendChild(submitButton);
}
function removeBackground() {
  const selectedOptions = document.querySelectorAll(
    'input[type="radio"]:checked'
  );

  selectedOptions.forEach((selectedOption) => {
    const questionForm = selectedOption.closest("form");
    if (questionForm) {
      questionForm.classList.remove("missed-question");
    }
  });
}
function submitQuiz(name, rollNumber, questions) {
  let totalMarks = 0;
  let allQuestionsAnswered = true;

  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index + 1}"]:checked`
    );

    if (selectedOption) {
      if (selectedOption.value === q.correctAnswer) {
        totalMarks++;
      }
    } else {
      allQuestionsAnswered = false;
      // Highlight the missed question
      document.getElementById(`question${index + 1}Form`).classList.add("missed-question");
    }
  });

  if (!allQuestionsAnswered) {
    alert("Please answer all questions before submitting.");
    return;
  }

  const resultPopup = `
      <div id="result-popup">
          <h2>Quiz Result</h2>
          <p>Name: ${name}</p>
          <p>Roll Number: ${rollNumber}</p>
          <p>Total Marks: ${totalMarks}/${questions.length}</p>
          <button onclick="closeResultPopup()">Close</button>
      </div>
  `;

  document.body.insertAdjacentHTML("beforeend", resultPopup);

  // Send data to Google Sheets with the correct sheetName parameter
  const sheetName = "fds"; // Modify this based on your criteria
  sendToGoogleSheets(name, rollNumber, totalMarks, sheetName);
}

// Add CSS style for highlighting missed questions
const style = document.createElement("style");
style.innerHTML = `
  .missed-question {
    background-color: #FFCCCC;
  }
`;
document.head.appendChild(style);


// function closeResultPopup() {
//   const resultPopup = document.getElementById('result-popup');
//   if (resultPopup) {
//       resultPopup.remove();
//   }
// }

function closeResultPopup() {
  const resultPopup = document.getElementById("result-popup");
  if (resultPopup) {
    resultPopup.remove();
  }
  window.location.href = "feedback.html";
}

function sendToGoogleSheets(name, rollNumber, totalMarks) {
  const url =
    "https://script.google.com/macros/s/AKfycbysdX8pfHFt_2ciohQkAjhdtHxuUljG9D_IRl8MykPmSeQe4p0UHtrfsnLWTUU_VaBuDQ/exec";
  const data = {
    name: name,
    rollNumber: rollNumber,
    totalMarks: totalMarks,
  };

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(data).toString(),
  })
    .then((response) => {
      console.log("Data sent to Google Sheets:", response);
    })
    .catch((error) => {
      console.error("Error sending data to Google Sheets:", error);
    });
}

// Shuffle questions
shuffleArray(questions);

// Display questions
questions.forEach((q, index) => {
    // ...

    // Shuffle options for each question
    shuffleArray(q.options);

    // ...
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



