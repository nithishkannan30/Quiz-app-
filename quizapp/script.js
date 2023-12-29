let questions = [
  {
    question: "Largest country in the world ?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: false },
      { text: "USA", correct: false },
      { text: "Russia", correct: true },
    ],
  },
  {
    question: "Capital of India ?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Delhi", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  // Add more questions as needed
  {
    question: "Capital of France ?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Capital of Germany ?",
    answers: [
      { text: "Berlin", correct: true },
      { text: "London", correct: false },
      { text: "Paris", correct: false },
      { text: "Rome", correct: false },
    ],
  },
];

const questiondom = document.getElementById("ques");
// h3 selecting
const answerdom = document.getElementById("answers");
//div is selected
let curindex = 0;
let score = 0;
function startquiz() {
  curindex = 0;
  score = 0;
  showquestion();
}
// correct
function showquestion() {
  let curquestion = questions[curindex];
  let questionno = curindex + 1;
  questiondom.innerHTML = questionno + ". " + curquestion.question;
  // h3 is updated
  const score_count = document.querySelector(".score");
  score_count.innerText = "Score : " + score;
  answerss();
}

function answerss() {
  answerdom.innerHTML = "";
  //   div is manipulated
  let curques = questions[curindex];

  const next = document.getElementById("par");
  let butt = document.createElement("button");
  butt.classList.add("css-button-3d--blue");
  butt.innerHTML = "Next";
  next.appendChild(butt);
  butt.disabled = true;
  butt.addEventListener("click", function () {
    if (curindex < questions.length - 1) {
      next.removeChild(butt);
      curindex++;
      showquestion();
    } else {
      next.removeChild(butt);
      startquiz();
    }
  });
  curques.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.setAttribute("data-correct", answer.correct);
    console.log(button);
    button.classList.add("css-button-3d--black");
    // Assuming you want to append the button to the answer element
    answerdom.appendChild(button);
    button.addEventListener("click", function (e) {
      selectanswer(e, butt); //
    });
  });
}
function selectanswer(e, butt) {
  const select = e.target;
  const iscorrect = select.dataset.correct == "true";

  if (iscorrect) {
    select.classList.remove("css-button-3d--black");
    select.classList.add("correct");
    score += 1;
  } else {
    select.classList.add("incorrect");
  }
  const score_count = document.querySelector(".score");
  score_count.innerText = "Score : " + score;
  const answer = document.querySelector("#answers");
  const buttons = answer.querySelectorAll("button");

  buttons.forEach((button) => {
    select.classList.remove("css-button-3d--black");
    button.classList.add(
      button.dataset.correct === "true" ? "correct" : "incorrect"
    );
    button.disabled = true;
  });
  console.log(butt);
  butt.disabled = false;
}

// selectanswer();

startquiz();
