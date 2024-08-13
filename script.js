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
    const trueButton = document.getElementById('true-button');
    const falseButton = document.getElementById('false-button');
    const repeatButton = document.getElementById('repeat-button');
    
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';
        trueButton.style.display = 'inline-block';
        falseButton.style.display = 'inline-block';
        repeatButton.style.display = 'none'; // Esconder o botão de repetir enquanto o quiz está em andamento
    } else {
        questionElement.textContent = 'Quiz terminado!';
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';
        trueButton.style.display = 'none';
        falseButton.style.display = 'none';
        repeatButton.style.display = 'inline-block'; // Exibir o botão de repetir ao final do quiz
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

function repeatQuiz() {
    currentQuestionIndex = 0; // Reiniciar o índice da pergunta
    displayQuestion();
}
