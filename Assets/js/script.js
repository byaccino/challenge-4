

var startgame = document.querySelector ("#start-btn")
var questionContainer = document.querySelector("#question-container")
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
var questionCount = 0


startgame.addEventListener('click',function(){
    startgame.classList.add('hide');
    displayQuestion()
})

function displayQuestion() {
    questionContainer.innerHTML = '';
    var question = document.createElement('h2')
    question.textContent = questions [questionCount].question
    questionContainer.append(question)
    for (let i = 0; i < questions[questionCount].options.length; i++) {
        var button=document.createElement("button")
        button.textContent = questions [questionCount].options [i]
        button.value = questions [questionCount].options [i]
        button.addEventListener('click', checkAnswer)
        questionContainer.append(button)

    }
    questionContainer.classList.remove('hide');

}

function checkAnswer(event) {
    if (event.target.value === questions[questionCount].correctAnswer) {
        // increment score value
        
    } else {
        //time off of counter (answer wrong subtract time)
    }
    questionCount++
    displayQuestion()
}

//case where no more questions
//check if no more questions show final high score
// if there are more questions display next question



// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');

// var message =
//   'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// var words = message.split(' ');

// // Timer that counts down from 5
// function countdown() {
//   var timeLeft = 5;

//   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function () {
//     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       // Decrement `timeLeft` by 1
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
//       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//       timerEl.textContent = '';
//       // Use `clearInterval()` to stop the timer
//       clearInterval(timeInterval);
//       // Call the `displayMessage()` function
//       displayMessage();
//     }
//   }, 1000);
// }

// // Displays the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var msgInterval = setInterval(function () {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 1000);
// }

// countdown();

