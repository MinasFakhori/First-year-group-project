/***********************************
 * CONST , VAR   &   LET VARIABLES *
 ***********************************/

 let shuffledQuestions, currentQuestionIndex, seconds = 20;
 var interval;//store timer values

 /*Question Container assigned a variable*/
const questionContainerElement = document.getElementById('question-container');

/*Questions element assigned a variable */
const questionElement = document.getElementById('question');

/*Answer buttons element assigned a variable*/
const answerButtonsElement = document.getElementById('answer-btns');

/*Score container and element assigned variables */
const scoreTracker = document.getElementById('score-container');
const scoreUpElement = document.getElementById('score');
const total = document.getElementById('totalQ');

/*Timer element assigned variable*/
const timeElement = document.getElementById('timer');

/*Finish button element intended to display score at end. */
const finishButton = document.getElementById('finish-btn')

/*Start Game Button/Event Listener and Function
Assigns a variable to element ID 'start-btn' and also adds an event listener 
which will execute a funtion(startGame) on click of the start button */
const startButton = document.getElementById('start-btn')


startButton.addEventListener('click', startGame)
function startGame() {/*Start Game Function, i.e. what happens on first click*/ 
  startButton.classList.add('hide')/*Hides the start button when clicked*/
  shuffledQuestions = questions.sort(() => Math.random() - .5)
/*Randomises the questions array using sort and math random - math.random gives
a value between 0-1 so taking .5 away gives a 50/50 chance shuffling the questions*/
  currentQuestionIndex = 0/*so we can start on the first question of our shuffled array */
  scoreUpElement.textContent = 0/*starts the score counter at 0 when starting*/
  questionContainerElement.classList.remove('hide')/*Un-hides the question container*/
  setNextQuestion()/*Calls setNextQuestion function*/
}

/*Next Button
Assigns a variable to element ID 'next-btn' and also adds an event listener 
which will execute code on click of the start button */
const nextButton = document.getElementById('next-btn')
nextButton.addEventListener('click', () => {
  currentQuestionIndex++/* */
  setNextQuestion()
})

finishButton.addEventListener('click', showScore)
function showScore(){
  alert ("Good job you scored "+ scoreUpElement.textContent);
  /*if(scoreUpElement.textContent >= 8){
    alert ("Great job you got " +scoreUpElement.textContent);
  }else if(scoreUpElement.textContent >= 6 && scoreUpElement.textContent < 8){
    alert("Well done you got over 50%! you scored " + scoreUpElement.textContent);
  }else if(scoreUpElement.textContent < 5){
    alert("Unlucky you got less than 50%, try revisiting parts of the site and make sure to check the glossary! you scored "
          +scoreUpElement.textContent);
  }else if(scoreUpElement.textContent == 0){
    alert("Unfourtunately you got none right, try revisiting parts of the site and make sure to check the glossary! you scored "
    +scoreUpElement.textContent);
  }*/
  finishButton.classList.add('hide')
}


/*Set Next Question Function i.e. what happens when you click next*/
function setNextQuestion() {
  resetState()/*runs resetState function*/
  showQuestion(shuffledQuestions[currentQuestionIndex])
  /*showQuestion function takes the shuffled question and the current index*/
}

function showQuestion(question) {
  questionElement.innerText = question.question/*innertext of the question element outputs whatever the questions array is set to*/
  question.answers.forEach(answer => {/*populates the answer buttons by looping through the answers for each of the questions*/
    const button = document.createElement('button')/*creates a button for each answer from the array*/
    button.innerText = answer.text/*innertext of the button becomes the answer text*/
    button.classList.add('btn')/*assigns the button variable to the 'btn' class */
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)/*Event listener for when selecting an answer, executes selectAnswer function*/
    answerButtonsElement.appendChild(button)/*appends the answerbuttonselement with button child 
    i.e. adds the answers to the bottom of the 4 original answer button classes, a resetState function will
    be used to remove the original 4 html answer buttons*/
  })
}

/*Select Answer Function, i.e. when clicking an answer*/
function selectAnswer(e) {/*Takes the answer button click event from above in as a parameter */
  const selectedButton = e.target/*assigns a variable to the selected click event using e.target*/
  const correct = selectedButton.dataset.correct/*checks if the answer is correct*/
  processResults(correct);/*IF correct call on process results function */
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  /*Checks if there are any more questions if more then next, if none then restart*/
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')/*un-hides next button once answer selected*/
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    finishButton.classList.remove('hide')
    showScore()
  }
}


/*FUNCTION to update score if answer is correct */
function processResults(isCorrect) {
  
  if (!isCorrect) {
    return;
  }
  const score = parseInt(scoreUpElement.textContent, 10) || 0;
  /*converts/parses string to int to allow 1 to be added to score*/
  if(score < 10){
  scoreUpElement.textContent = score + 1 +" out of 10"; 
  }else{
    scoreUpElement.textContent = "You reached the max score"; 
  }
  
  
}

/*FUNCTION to check answer and change background/button colour if correct or not*/
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}
/*FUNCTION that REVERTS background/button colour to neutral when new question is selected*/
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

/*FUNCTION that removes the 4 original html answer buttons when a question is selected*/
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')/*hides next button once clicked*/
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  /*while answerbuttonselement has a first child then remove it, essentially removing
  the 4 original answer buttons that came before in html everytime a new question is looped through*/
}


/*******************************
 * QUESTIONS AND ANSWERS ARRAY *
 *******************************/

/*QUESTIONS - To add a question simply follow the same format and to add an answer add an additional "text: " 
**REMEMBER TO SEPERATE QUESTIONS WITH COMMAS IF YOU'RE GOING TO ADD MULTIPLE QUESTIONS**
SYNTAX:
        {
    question: 'question?',
    answers: [
        {text: 'Answer option1', correct: true/false},
        {text: 'Answer option2', correct: true/false},
        {text: 'Answer option3', correct: true/false},
        {text: 'Answer option4', correct: true/false},
        {text: 'Answer option5', correct: true/false}<---END OF ANSWER OPTIONS ADD SEPERATION COMMA HERE FOR MORE ANSWERS
            ]
        }  <---END OF QUESTION ADD SEPERATION COMMA HERE AFTER CURLY BRACKET FOR MORE QUESTIONS
*/

/*Questions/Answer Array - each object is a question */

const questions = [
  {
    question: 'Are viruses and worms forms of malware?',
    answers: [
    { text: 'Yes', correct: true },
    { text: 'No', correct: false }  
    ]
  },
  {
    question: 'What is a Phishing attack?',
    answers: [
      { text: 'An attack using email or text attempting to trick you into giving personal details', correct: true },
      { text: 'An attack with a phishing rod', correct: false },
      { text: 'A clone of a known legitimate site that will re-direct you to a malicious website', correct: false },
      { text: 'When a botnet of computers flood a server with requests slowing or stopping service', correct: false }
    ]
  },
  {
    question: 'Default and weak passwords are an easy for way for an attacker to gain access',
    answers: [
    { text: 'False', correct: false },
    { text: 'True', correct: true }  
    ]
  },
  {
    question: 'How would you reduce the risk of malware?',
    answers: [
      { text: 'Keep up-to-date antivirus and malware protection', correct: false },
      { text: 'Use caution when downloading or opening files, links and attachments', correct: false },
      { text: 'Avoid clicking on pop-ups and ads', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    question: 'What is a good example of a STRONG password?',
    answers: [
      { text: '87654321', correct: false },
      { text: '!StR0nGP4Ssw0RD@', correct: true },
      { text: '!N1', correct: false },
      { text: 'Password', correct: false }
    ]
  },
  {
    question: 'A malicious program that monitors user activity on a host or network describes..',
    answers: [
    { text: 'Ransonware', correct: false },
    { text: 'Spyware', correct: true }  
    ]
  },
  {
    question: 'What is a backdoor in cyber security?',
    answers: [
      { text: 'A way of accessing the rear ports of a computer', correct: false },
      { text: 'A bug/exploit used to bypass security', correct: true },
      { text: 'A malicious code used to damage data', correct: false },
      { text: 'Someone spying over your shoulder to steal information', correct: false }
    ]
  },
  {
    question: 'the process of identifying assets, analysing, evaluating and addressing threats could describe',
    answers: [
    { text: 'Social Engineering', correct: false },
    { text: 'Risk Management', correct: true }  
    ]
  },
  {
    question: 'Why do people hack into systems and engage in social engineering?',
    answers: [
      { text: 'To destroy data and personal information', correct: false },
      { text: 'All 3', correct: true },
      { text: 'To gain visibilty/notoriety and test their technical competance', correct: false },
      { text: 'To steal data and personal information', correct: false }
    ]
  },
  {
    question: 'To protect from online data breaches every business and organisation should have..',
    answers: [
      { text: 'Big security gaurds', correct: false },
      { text: 'Bottom 2', correct: true },
      { text: 'Professional security training and awareness', correct: false },
      { text: 'Risk management and Incident Response Teams', correct: false }
    ]
  }
]