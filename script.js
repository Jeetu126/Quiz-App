const quizDB = [
    { 
       question: "Q1: what is the full form of HTML",
       a: "Hello To My land",
       b: "Hey Text Markup Language",
       c: "HyperText Markup  Lan",
       d: "HyperText Makeup Language",
       ans: "ans2"
    },
    { 
        question: "Q2: what is the full form of CSS",
        a: "Cascade Style Sheet",
        b: "Cascade Script Sheet",
        c: "Cartoon Style Sheet",
        d: "None",
        ans: "ans1"
     },
     { 
        question: "Q3: what is the full form of HTTP",
        a: "HyperText Transfer Product",
        b: "HyperText Transfer Protocol",
        c: "HypeText Test Protocol",
        d: "None",
        ans: "ans2"
     },
     { 
        question: "Q4: what is the full form of JS",
        a: "JavaStyle",
        b: "JavaSript",
        c: "Both",
        d: "None",
        ans: "ans2"
     },
]


const question =  document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore =document.querySelector('#showScore');  

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
   
   const questionList = quizDB[questionCount];

   question.innerText = questionList.question;

   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;
   
}

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
   if(curAnsElem.checked){
      answer = curAnsElem.id;
        
     }
  });

  return answer;
};

const deselectAll = ()=>{
   answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
   const checkedAnswer = getCheckAnswer();
   console.log(checkedAnswer);

   if(checkedAnswer === quizDB[questionCount].ans){
      score++;
   };

   questionCount++;
  
   deselectAll();
    
   if(questionCount < quizDB.length){
      loadQuestion();
   }else{
         showScore.innerHTML = `
         <h3> You scored ${score}/${quizDB.length} </h3>
         <button class = "btn" onclick = "location.reload()"> Play Again </button>

         `;
         showScore.classList.remove('scoreA');
   }
});

