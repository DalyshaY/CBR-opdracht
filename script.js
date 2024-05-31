let currentQuestionIndex = 0;
let selectedQuestions = [];
let hasAnswered = false;
let score = 0;


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function selectQuestions(questions, numQuestions = 20) {
    const shuffledQuestions = shuffle(questions);
    const selectedQuestions = [];
    const categories = [...new Set(shuffledQuestions.map(q => q.category))];
    let categoryIndex = 0;

    while (selectedQuestions.length < numQuestions) {
        const currentCategory = categories[categoryIndex % categories.length];
        const questionsForCategory = shuffledQuestions.filter(q => q.category === currentCategory);

        if (questionsForCategory.length > 0) {
            selectedQuestions.push(questionsForCategory.shift());
        }

        categoryIndex++;
    }

    return selectedQuestions;
}


function displayQuestion(question) {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';



    const questionText = document.createElement('p');
    questionText.textContent = question.question;
    questionDiv.appendChild(questionText);

    question.options.forEach((option, index) => {
        if (option !== "") {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.onclick = () => showFeedback(question.feedback, optionButton);
            questionDiv.appendChild(optionButton);
        }
    });

    const feedbackText = document.createElement('p');
    feedbackText.id = 'feedback';
    feedbackText.style.display = 'none';
    questionDiv.appendChild(feedbackText);

    container.appendChild(questionDiv);
}


function showFeedback(feedback, button) {
    if (!hasAnswered) {
        const feedbackText = document.getElementById('feedback');
        feedbackText.textContent = feedback;
        feedbackText.style.display = 'block';
        button.disabled = true;
        hasAnswered = true;
        if (feedback.includes('goed')) {
            score++;
        }
    }
}


function showNextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion(selectedQuestions[currentQuestionIndex]);
        currentQuestionIndex++;
        hasAnswered = false;
    } else {
        alert('You have completed the quiz!\nYour score: ' + score + ' out of ' + selectedQuestions.length);
        currentQuestionIndex = 0;
        score = 0;
    }
}


fetch('getQuestions.php')
    .then(response => response.json())
    .then(data => {
        selectedQuestions = selectQuestions(data);
        showNextQuestion();
    })
    .catch(error => console.error('Error fetching data:', error));


document.getElementById('next-button').addEventListener('click', showNextQuestion);






