const queszData=[
    {
        question :"What does DOM stands for?",
        options:[
            "Document Object Module",   
            "Document Object Model",
            "Document Object Management",
            "Document Object Mapping"

        ],
        correct:1
    },
    {
        question :"Which method selects by ID?",
        options:[
            "getElementById()",
            "getElementByClassName()",
            "getElementByTagName()",
            "getElementByQuerySelector()"

        ],
        correct:0
    },
    {
        question :"Which Event fires on input change?",
        options:[
            "oninput",
            "onkeyup",
            "onchange",
            "onkeydown"

        ],
        correct:2
    }
]

let questions=[...queszData].sort(()=>Math.random()-0.5);
// If return value < 0 → a comes before b

// If return value > 0 → b comes before a
// If 0 → leave them unchanged
let currentQuestionIndex=0;
let score=0;
let timer;
let timeLeft;

const questionEl= document.getElementById("question");
const optionsEl= document.getElementById("options");    
const nextBtn= document.getElementById("next-btn");
const resultEl= document.getElementById("result");
const timerEl= document.getElementById("timer");

function loadQuestion(){
    //clearing timer and stopping setInterval
    clearInterval(timer);
    timeLeft=10;            //set timer value
     updateTimer();
    timer = setInterval(countdown,1000);

    const q=questions[currentQuestionIndex];
    questionEl.textContent=`Q${currentQuestionIndex+1}. ${q.question}`;
    optionsEl.textContent="";       // to remove previous options
    
    //loading options dynamically
    q.options.forEach((option, index) => {
        const btn =document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent=option;
        btn.addEventListener("click", () => selectAnswer(index,true));
        optionsEl.appendChild(btn);
    });
    //you cant see next question before answering question
    nextBtn.style.display="none";
}
function updateTimer(){
    timerEl.textContent=`⏱️ ${timeLeft} sec left`;
}

function countdown(){
    timeLeft--;
    updateTimer();
    if (timeLeft===0){
    clearInterval(timer);
    selectAnswer(questions[currentQuestionIndex]?.correct,false);
    }
}

function selectAnswer(index,selectAnswer) {
    const q=questions[currentQuestionIndex];
    const buttons=document.querySelectorAll(".option-btn");
    
    if(index===q.correct){
        buttons[index].classList.add("correct");
        selectAnswer && score++;
    }
    else{
        buttons[index].classList.add("wrong");
        buttons[q.correct].classList.add("correct");
        
    }
    //button will be visible after selectiong an option
    nextBtn.style.display="inline-block";
    //not letting select another option when you already selected an option
    buttons.forEach(btn=>btn.disabled=true)
}
nextBtn.addEventListener("click",()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length) {
        questionEl.textContent="";
        loadQuestion()
    }
    else{
        
        showResult();
    }
})
function showResult(){
    nextBtn.style.display="none";
    questionEl.style.display="none";
    optionsEl.style.display="none";
    timerEl.style.display="none";
    const highScore=localStorage.getItem("quizHighScore") || 0;
    const isNew =score>highScore;

    if(isNew){
        localStorage.setItem("quizHighScore",score)
    }
    resultEl.innerHTML=`
    <h2> Hurray !!! Quiz Completed</h2>
    <p>Your Score: ${score} out of ${questions.length} questions</p>
    <p>High Score: ${highScore}</p>
    <p>${isNew ? "New High Score!" : "Try Again to beat the High Score!"}</p>
    <button id="restart-btn" onclick="restartBtn()">Restart Quiz</button>
    `
}
function restartBtn(){
    currentQuestionIndex=0;
    score=0;
    questionEl.style.display = "";
    optionsEl.style.display = "";
    timerEl.style.display = "";
    resultEl.innerHTML = "";
    loadQuestion();
}
loadQuestion();
