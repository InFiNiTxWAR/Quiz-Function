const questions = [
    {
        question: "Qual é o maior planeta do sistema solar?",
        answers: [
            { text: "Terra", correct: false },
            { text: "Marte", correct: false },
            { text: "Júpiter", correct: true },
            { text: "Saturno", correct: false }
        ]
    },
    {
        question: "Quem descobriu o Brasil?",
        answers: [
            { text: "Dom Pedro I", correct: false },
            { text: "Pedro Álvares Cabral", correct: true },
            { text: "Tiradentes", correct: false },
            { text: "Getúlio Vargas", correct: false }
        ]
    },
    {
        question: "Qual é a capital da França?",
        answers: [
            { text: "Berlim", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Roma", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question")
const answersElements = document.getElementById("answers")
const nextButton = document.getElementById("next-btn")
const resultContainer = document.getElementById("result")
const scoreElement = document.getElementById("score")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    resultContainer.classList.add("hidden")
    nextButton.style.display = "none"
    showQuestion()

}
function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answersElements.appendChild(button)
    })


}
function resetState(){
    nextButton.style.display = "none"
    answersElements.innerHTML = ""

}
function selectAnswer(correct){
    if (correct){
        score++;
    }
    nextButton.style.display = "block"

}
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion();

    }else{
        showResult()
    }
})
function showResult(){
    questionElement.innerText = "";
    answersElements.innerHTML = ""
    nextButton.style.display ="none";
    resultContainer.classList.remove("hidden")
     scoreElement.innerText = Você acertou ${score} de ${questions.length} perguntas!;
}
function restarQuiz(){
    startQuiz();

}
startQuiz();