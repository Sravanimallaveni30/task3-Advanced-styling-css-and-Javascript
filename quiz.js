const questions = [
    {
        question: "who developed the Python programming language",
        options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"],
        answer: "Guido van Rossum"
    },
    {
        question: "what is the file extension for a Java File",
        options: [".java", ".py", ".class", ".exe"],
        answer: ".class"
    },
    {
        question: "Which  of the following is a dynamically typed language",
        options: ["Java", "C", "Python", "C++"],
        answer: "python"
    },
    {
        question: "what does IDE stand for in programming",
        options: ["Integrated Debuging Environment", "Integrated Development Environment", " Intelligent Design Environment", "INtegrated Data Engine"],
        answer: "Integrated Development Environment"
    },
    {
        question: "pick out the wrong definition from the following...!",
        options: ["COBOL-a language used for business data processing. ", "CPU-is the brain of the computer.", "FORTRAN-is used for logical processing.", "LAN-is used in local areas."],
        answer: "FORTRAN-is used for logical processing."
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option");
        btn.addEventListener("click", () => checkAnswer(option));
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    if (selected === q.answer) {
        score++;
        resultEl.textContent = "Correct!";
        scoreEl.textContent = 'Score: ${score}';
    } else {
        resultEl.textContent ='Wrong. The Correct answer is: ${q.answer}';
    }
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    resultEl.textContent = "";
    nextBtn.style.display = "none";
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Completed!";
        optionsEl.innerHTML = "";
        resultEl.textContent = 'Final Score : ${Score}/${questions.length}';
        nextBtn.style.display = "none";
    }
});
