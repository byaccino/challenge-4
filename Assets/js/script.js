

var startgame = document.querySelector ("#start-btn")
var questionContainer = document.querySelector("#question-container")
var scoreElement = document.querySelector("#score")
var timeElement = document.querySelector("#time")

var questions = [
    {
        question: "what is my favorite color?",
        options: ["green", "pink", "blue"],
        correctAnswer: "green",
    },
    {
        question: "what is my favorite place to travel to?",
        options: ["Italy", "Spain", "Greece"],
        correctAnswer: "Greece",
    }    
]
var questionCount = 0;
var score = 0;
var time = 60;

startgame.addEventListener('click',function(){
    startgame.classList.add('hide');
    startTimer()
    displayQuestion()
})

function displayQuestion() {
    //clear the question container
    questionContainer.innerHTML = '';
    //create and display the question
    var question = document.createElement('h2')
    question.textContent = questions [questionCount].question
    questionContainer.append(question)
    //create and display the answer choices as buttons 
    for (let i = 0; i < questions[questionCount].options.length; i++) {
        var button=document.createElement("button")
        button.textContent = questions [questionCount].options [i]
        button.value = questions [questionCount].options [i]
        button.addEventListener('click', checkAnswer)
        questionContainer.append(button)

    }
    //remove the 'hide' class to display the question and answer choices
    questionContainer.classList.remove('hide');

}
var TimerInterval;
function startTimer () {
    TimerInterval = setInterval(function () {
        timeElement.textContent = time;
        time--;
        if (time <0) {
            clearInterval(TimerInterval)
            timeElement.textContent = "0"
        }
    })
}

function checkAnswer(event) {
    var selectedAnswer = event.target.value;
    var currentQuestion = questions[questionCount]
    if (selectedAnswer === currentQuestion.correctAnswer) {
        // increment score value
        score +=1;
        scoreElement.textContent = score; 

    } else {
        //time off of counter (answer wrong subtract time)
        time -= 10;
        if (time < 0) {
            time = 0 // Ensure time doesn't go below 0
        }
    }
    timeElement.textContent = time; 
    questionCount++
    if (questionCount < questions.length) {
        displayQuestion();
    } else {
        questionContainer.innerHTML = "Quiz is over! You scored: " + score + " answers correct"
    }
}

