var begin = document.querySelector(".body");
var secondsEl = document.querySelector("#seconds");
var questionEl = document.querySelector("#word-question");
var questionNum = document.querySelector("#question-number");
var text = document.querySelector(".summary");
var buttons = document.querySelector(".buttons");
var score = document.querySelector(".score");
var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");
var btn3 = document.querySelector("#btn-3");
var btn4 = document.querySelector("#btn-4");
var start = document.querySelector(".btn");
var highScores = document.querySelector(".high-scores");
var showCorrect = document.querySelector(".correct");
var showWrong = document.querySelector(".wrong");
var imgCorrect = document.querySelector(".img-correct");
var imgWrong = document.querySelector(".img-wrong");
var inputContainer = document.querySelector(".input-container");
var nameInput = document.querySelector(".form-control");
var submit = document.querySelector("#btn-submit");
var playAgain = document.querySelector("#btn-back");
var lastDiv = document.querySelector(".score");
var secondsLeft = 30;
var table = document.querySelector(".table");
var mainContainer = document.querySelector(".container");
var scoreName = document.querySelector("#scoreName");
var scoreNumner = document.querySelector("#scoreNumber");
var quizDone = false;


/*Array with objects for the questions*/ 
var questions = [
    { "q": "What apartment does the boy who makes my heart jump live in?",
        a1: "512",
        a2: "251",
        a3: "151",
        a4: "100",
        correct: 1
    },
    { "q": "What are Selena's last names?",
        a1: "Quintanilla Duarte",
        a2: "Quintanilla Gómez",
        a3: "Quintanilla Pérez",
        a4: "Quintanilla López",
        correct: 3
    },
    { "q": "What murmurs in the streets?",
        a1: "Bidibido bombom",
        a2: "Amor prohibido",
        a3: "Como la flor",
        a4: "Carcacha",
        correct: 2
    },
    { "q": "What was the name of Selena's band?",
        a1: "Selena y los Hombres",
        a2: "Selena y los Dingos",
        a3: "Selena y los Dinos",
        a4: "Selena y los Señors",
        correct: 3
    },
    { "q": "Selena sang a duet with the lead singer of one of these bands. Which band was it?",
        a1: "Depeche Mode",
        a2: "Tears for fears",
        a3: "Duran Duran",
        a4: "Talking Heads",
        correct: 4
    },
    { "q": "Selena's brother had a successful band. What was it called?",
        a1: "The Blue Angels",
        a2: "The Lost Boys",
        a3: "The Kumbia Kings",
        a4: "Barrio Boyzz",
        correct: 3
    },
    { "q": "How old was Selena when she died?",
        a1: "23 years old",
        a2: "27 years old",
        a3: "22 years old",
        a4: "28 years old",
        correct: 1
    },
    { "q": "What was the name of Selena's first solo album?",
        a1: "Vente Conmigo",
        a2: "Selena",
        a3: "Entre a Mi  Mundo",
        a4: "Amor Prohibido",
        correct: 2
    }
];


//Buttons styles
btn1.setAttribute("style","margin: 5px;");
btn2.setAttribute("style","margin: 5px;");
btn3.setAttribute("style","margin: 5px;");
btn4.setAttribute("style","margin: 5px;");
submit.setAttribute("style","margin: 5px;");
playAgain.setAttribute("style","margin: 5px;");

//Hide option buttons and score input
btn1.style.display = "none";
btn2.style.display = "none";
btn3.style.display = "none";
btn4.style.display = "none";


imgCorrect.style.display = "none";
imgWrong.style.display = "none";
table.style.display = "none";
inputContainer.style.display = "none";


//Run quiz, start timer, display buttons and text Questions
function startQuiz(){  
    start.style.display = "none"; 
    buttons.style.display = "block"; 
    setTime();
    appendQuestions();
}

//Set time
function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        secondsEl.textContent = secondsLeft;

        if (secondsLeft === 0 || quizDone) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

//Display the button and the questions once the start button is clicked
var lastQuestion = questions.length;
var indexQuestion = 0;
var score = 0;
var dataIndex = 0;

function appendQuestions() {
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";
    questionEl.textContent = "Question " + (indexQuestion + 1);
    console.log(questions[indexQuestion].q);
    text.textContent = questions[indexQuestion].q;
    btn1.textContent = questions[indexQuestion].a1;
    btn2.textContent = questions[indexQuestion].a2;
    btn3.textContent = questions[indexQuestion].a3;
    btn4.textContent = questions[indexQuestion].a4;
}

//Check if the answer is correct. 
//When you click the button, is a string and it will compare with answers inside the objects.
function checkAnswer(a) {
        if (a == questions[indexQuestion].correct) {
            secondsLeft = secondsLeft + 5;
            correctMessage();
        } else {
            secondsLeft = secondsLeft - 5;
            wrongMessage();
        }
}

//Display the correct message, check the indexQuestion is lower thanthe questions length. If this is true, call again the appendQuestions with the indexQuestion as parameter. 
function correctMessage() {
    showCorrect.textContent = "Correct!!"
    imgCorrect.style.display = "block";
    setTimeout(function(){
        imgCorrect.style.display = "none";
        showCorrect.textContent = ""
    }, 1000);
    indexQuestion++;
    if (indexQuestion !== lastQuestion) {
        appendQuestions(indexQuestion);
    } else {
        showScore();
    }
}

function wrongMessage() {
    showWrong.textContent = "Wrong!!"
    imgWrong.style.display = "block";
    setTimeout(function(){
        imgWrong.style.display = "none";
        showWrong.textContent = ""
    }, 1000);
    indexQuestion++;
    if (indexQuestion !== lastQuestion) {
        appendQuestions(indexQuestion);
    } else {
        showScore();
    }
}

//When index question is not last question, it will display the input box, the final score and a submit button. 
function showScore() {
    table.style.display = "block";
    quizDone = true;
    setTime(quizDone);
    buttons.style.display = "none";
    questionEl.textContent = "Test Finished!";
    seconds.textContent = secondsLeft;
    var newline = "\r\n"
    text.textContent = "Your final score is " + secondsLeft + "." + newline + "Enter you name:";
    text.append(newline);
    text.append(nameInput);
    text.append(submit);
    submit.addEventListener('click',function(){
        var playerName = nameInput.value;
        var playerScore = secondsLeft;
        if (playerName === "") {
            showCorrect.textContent = "Invalid Name";
        } else {
            showCorrect.textContent = "Score saved!";
            localStorage.setItem('name',playerName);
            localStorage.setItem('score',playerScore);
            lastDiv.append(playAgain);
            playerInfo();
        }
    })
}

function playerInfo() {
    scoreName.textContent = localStorage.getItem('name');
    scoreNumber.textContent = localStorage.getItem('score');
}


//First addEventListener to the start test button
start.addEventListener('click',startQuiz);

//Answer buttons
btn1.addEventListener('click',function(event){
    console.log(indexQuestion);
    dataIndex = btn1.getAttribute('data-index',questions[indexQuestion]);
    checkAnswer(dataIndex);
    });
btn2.addEventListener('click',function(event){
    console.log(indexQuestion);
    dataIndex = btn2.getAttribute('data-index',questions[indexQuestion]);
    checkAnswer(dataIndex);
});
btn3.addEventListener('click',function(event){
    console.log(indexQuestion);
    dataIndex = btn3.getAttribute('data-index',questions[indexQuestion]);
    checkAnswer(dataIndex);
});
btn4.addEventListener('click',function(event){
    console.log(indexQuestion);
    dataIndex = btn4.getAttribute('data-index',questions[indexQuestion]);
    checkAnswer(dataIndex);
    });


//Answer buttons
highScores.addEventListener('click',function(){
    mainContainer.style.display = "none";
    console.log(table)
    table.style.display = "block";
})

playAgain.addEventListener('click',function(){
    begin.style.display = "block";
    text.style.display = "block";
})
