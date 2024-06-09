
const quizData = [

    {
        question : "What is the capital of India?",
        answers : ["New Delhi", "Mumbai","Kolkata","Chennai"],
        correct : "New Delhi"
    },
    {
      question: "How many days are there in a year?",
      options: ["370", "365", "400", "465"],
      answer: "365"
    },
    {
      question: "India is a federal union comprising twenty-eight states and how many union territories?",
      options: ["6", "7", "8", "9"],
      answer: "8"
    },
    {
      question: "Yakshagana is the folk dance of which state?",
      options: ["Kerala", "Tamil Nadu", "Karnataka", "Telangana"],
      answer: "Karnataka"
    },
    {
      question: "Entomology studies what?",
      options: ["Behavior of human beings", "Insects", "The origin and history of technical and scientific terms", "he formation of rocks"],
      answer: "Insects"
    }
  ];
 
  
  
  function loadQuestion() {
    document.getElementById("question").innerHTML=quizData[1].question;
    const optionsEl = document.getElementById('options');
    const feedbackEl = document.getElementById('feedback');
  
    questionEl.textContent = quizData[index].question;
    optionsEl.innerHTML = '';
  }
  //   quizData[index].options.forEach((option, i) => {
  //     const li = document.createElement('li');
  //     li.className = 'option';
  //     const radio = document.createElement('input');
  //     radio.type = 'radio';
  //     radio.name = 'option';
  //     radio.value = i;
  //     radio.checked = userAnswers[index] === i;
  //     li.appendChild(radio);
  //     li.appendChild(document.createTextNode(option));
  //     optionsEl.appendChild(li);
  //   });
  
  //   feedbackEl.textContent = '';
  
  //   timer = setTimeout(() => {
  //     nextQuestion();
  //   }, timeLimit * 1000);
  // }
  
  // function prevQuestion() {
  //   if (currentQuestion > 0) {
  //     currentQuestion--;
  //     loadQuestion(currentQuestion);
  //   }
  // }
  
  // function nextQuestion() {
  //   if (currentQuestion < quizData.length - 1) {
  //     saveAnswer();
  //     currentQuestion++;
  //     loadQuestion(currentQuestion);
  //   }
  // }
  
  // function saveAnswer() {
  //   const selectedOption = document.querySelector('input[name="option"]:checked');
  //   if (selectedOption) {
  //     userAnswers[currentQuestion] = parseInt(selectedOption.value);
  //     localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  //   }
  // }
  
  // function submitQuiz() {
  //   saveAnswer();
  //   clearTimeout(timer);
  
  //   let feedbackEl = document.getElementById('feedback');
  //   feedbackEl.innerHTML = '';
    
  //   let score = 0;
  //   quizData.forEach((question, index) => {
  //     const userAnswer = userAnswers[index];
  //     if (userAnswer !== null) {
  //       if (userAnswer === question.answer) {
  //         score++;
  //       }
  //       const feedback = document.createElement('div');
  //       feedback.innerHTML = `<strong>Q${index + 1}:</strong> ${question.question}<br/>Your answer: ${question.options[userAnswer]}<br/>Correct answer: ${question.options[question.answer]}`;
  //       feedbackEl.appendChild(feedback);
  //     }
  //   });
  
  //   document.getElementById('score').textContent = `Your score: ${score} out of ${quizData.length}`;
  // }
  
  // window.onload = () => {
  //   loadQuestion(currentQuestion);
  // };