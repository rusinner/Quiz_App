const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');
let correct_answer = '',correctScore = askedCount = 0,totalQuestion = 10;



document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
   _totalQuestion.textContent = totalQuestion;
   _correctScore.textContent = correctScore;
});


async function loadQuestion(){
    const APIUrl = "https://opentdb.com/api.php?amount=1";
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    // console.log(data.results[0]);
    showQuestion(data.results[0]);
}

//display questions and options
function showQuestion(data){
  correctAnswer = data.correct_answer;
  let incorrectAnstwer = data.incorrect_answers;
  let optionsList = incorrectAnstwer;
  optionsList.splice(Math.floor(Math.random()
  * (incorrectAnstwer.length +1)),0,correctAnswer);
  //insert correct answer in random position in the options list
  _question.innerHTML = `${data.question} 
  <br> <span class = 'category'></span>`;
  _options.innerHTML = `${optionsList.map((option,index) =>`
   <li>${index + 1} <span>${option}</span></li>
  `).join('\n')}`;
  
  selectOption();

}

function selectOption(){

}

