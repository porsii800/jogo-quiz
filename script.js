const questions = [
    {
        question: "Os organismos produtores são responsáveis pela fotossíntese.",
        answer: true
    },
    {
        question: "A biosfera é composta apenas pelos organismos vivos.",
        answer: false
    },
    {
        question: "Os ecossistemas incluem tanto os seres vivos quanto o ambiente físico onde vivem.",
        answer: true
    },
    {
        question: "Ecologia é o estudo do comportamento dos organismos em grupos sociais.",
        answer: false
    },
    {
        question: "Os decompositores ajudam a reciclar nutrientes no ecossistema.",
        answer: true
    }
];

let currentQuestionIndex = 0;

function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');
    
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';
    } else {
        questionElement.textContent = 'Quiz terminado!';
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';
    }
}

function checkAnswer(userAnswer) {
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');
    
    if (userAnswer === questions[currentQuestionIndex].answer) {
        feedbackElement.textContent = 'Correto!';
    } else {
        feedbackElement.textContent = 'Incorreto!';
    }
    
    nextButton.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}
