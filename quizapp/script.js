let questions = [
    {
        question: "largest country in the world?",
        answers: [
            { text: "India", correct: false },
            { text: "China", correct: false },
            { text: "USA", correct: false },
            { text: "Russia", correct: true },
        ]
    },
    {
        question: "capital of India?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "delhi", correct: true },
            { text: "Rome", correct: false },
        ]
    },
    // Add more questions as needed
    {
        question: "capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
        ]
    },
    {
        question: "capital of german?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
        ]
    },
];

const questiondom=document.getElementById('ques');
const answerdom=document.getElementById('answers');
let curindex=0;
let score=0;
function startquiz(){
    curindex=0;
    score=0;
    showquestion();
}
function showquestion(){
    let curquestion=questions[curindex];
    let questionno=curindex+1;
    questiondom.innerHTML=questionno+"."+curquestion.question;
    answerss();
}
function answerss(){
    answerdom.innerHTML = "";
    let curques=questions[curindex];
    curques.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        // Assuming you want to append the button to the answer element
        answerdom.appendChild(button);
        button.addEventListener("click", function(e) {
            selectanswer(e); // Pass the 'butt' reference directly to the selectanswer function
        });
    });
     //   while(answers.firstChild){
     //          answers.removeChild(answers.firstChild);
       // }
       const next=document.getElementById('par');
       let butt = document.createElement('button');
       butt.innerHTML='next';
       next.appendChild(butt);
       butt.addEventListener('click',function(){
           
           if(curindex<questions.length-1){
            next.removeChild(butt);
            curindex++;
            showquestion();
           }
           else{
            startquiz();
            next.removeChild(butt);
           }
           
       });


}
function selectanswer(e, butt) {
    const select = e.target;
    const iscorrect = select.dataset.correct === "true";

    if (iscorrect) {
        select.classList.add("correct");
    } else {
        select.classList.add("incorrect");
    }

    Array.from(answer.children).forEach(button => {
        button.classList.add(button.dataset.correct === "true" ? "correct" : "incorrect");
        button.disabled = true;
    });
}


//selectanswer();

startquiz();