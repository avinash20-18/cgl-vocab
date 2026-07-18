let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let hasAnswered = false;
// Ye variable random questions ko store karega
let quizQuestions = [];

// Array ko random (mix) karne ka standard function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    // 1. Original array ki ek copy banayenge taaki main data kharab na ho
    let questionsCopy = [...questions];
    
    // 2. Array ko poora mix (shuffle) karenge
    let shuffled = shuffleArray(questionsCopy);
    
    // 3. Mix kiye hue words mein se pehle 10 words test ke liye nikal lenge
    quizQuestions = shuffled.slice(0, 10);
    
    currentQuestionIndex = 0;
    score = 0;
    hasAnswered = false;
    userAnswers = [];
    document.getElementById('result-box').style.display = 'none';
    document.getElementById('quiz-box').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    // ⚠️ CHANGED: 'questions' ko 'quizQuestions' se replace kiya
    const q = quizQuestions[currentQuestionIndex];

    // Question counter text update karo (HTML ID 'q-progress' ke sath)
    const counterElement = document.getElementById('q-progress');
    if (counterElement) {
        // ⚠️ CHANGED: questions.length ko quizQuestions.length kiya
        counterElement.innerText = `Question ${currentQuestionIndex + 1}/${quizQuestions.length}`;
    }
    // 1. Question text set karo
    document.getElementById('q-text').innerText = q.question;

    // 2. Explanation text pehle se load karke rakho
    document.getElementById('explanation-text').innerText = q.explanation;

    // 3. Options ke buttons generate karo
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Purane buttons saaf karo

    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option;

        // Click event link karo
        btn.onclick = () => selectOption(btn, option.charAt(0));
        optionsContainer.appendChild(btn);
    });

    // 4. State Persistence: Check karo kya user ne ise pehle attempt kiya tha
    const savedAnswer = userAnswers[currentQuestionIndex];

    if (savedAnswer) {
        hasAnswered = true; // Click lock karo
        document.getElementById('next-button').style.display = 'block';
        document.getElementById('skip-button').style.display = 'none'; // Skip ko hide bhi kar dega purane question pe

        const buttons = optionsContainer.getElementsByClassName('option-btn');
        for (let btn of buttons) {
            btn.style.cursor = 'not-allowed';
            const currentLetter = btn.innerText.charAt(0); // 'A', 'B', 'C', 'D'

            // Agar ye user ka select kiya hua option tha
            if (currentLetter === savedAnswer) {
                if (savedAnswer === q.correct) {
                    btn.style.borderColor = '#28a745';
                    btn.style.backgroundColor = '#d4edda';
                    btn.style.color = '#155724';
                } else {
                    btn.style.borderColor = '#dc3545';
                    btn.style.backgroundColor = '#f8d7da';
                    btn.style.color = '#721c24';
                }
            }

            // Sahi answer ko hamesha green border mein highlight rakho
            if (currentLetter === q.correct) {
                btn.style.borderColor = '#28a745';
                btn.style.backgroundColor = '#d4edda';
                btn.style.color = '#155724';
            }
        }
    } else {
        // Agar fresh ya un-attempted question hai
        hasAnswered = false;
    }
}

function selectOption(selectedButton, selectedLetter) {
    if (hasAnswered) return;
    hasAnswered = true;
    userAnswers[currentQuestionIndex] = selectedLetter;

    // ⚠️ CHANGED: 'questions' ko 'quizQuestions' kiya
    const q = quizQuestions[currentQuestionIndex];
    const optionsContainer = document.getElementById('options-container');
    const buttons = optionsContainer.getElementsByClassName('option-btn');

    for (let btn of buttons) {
        btn.style.cursor = 'not-allowed';
        if (btn.innerText.charAt(0) === q.correct) {
            btn.style.borderColor = '#28a745';
            btn.style.backgroundColor = '#d4edda';
            btn.style.color = '#155724';
        }
    }

    if (selectedLetter === q.correct) {
        score += 2;
    } else {
        score -= 0.5;
        selectedButton.style.borderColor = '#dc3545';
        selectedButton.style.backgroundColor = '#f8d7da';
        selectedButton.style.color = '#721c24';
    }

    document.getElementById('explanation-text').innerText = q.explanation;
    document.getElementById('explanation-container').style.display = 'block';
    document.getElementById('skip-button').style.display = 'none';
    document.getElementById('next-button').style.display = 'block';
}

function loadNextQuestion() {
    currentQuestionIndex++;
    // Previous button ka validation (Pehle question par chhupao, baaki par dikhao)
    if (currentQuestionIndex > 0) {
        document.getElementById('prev-button').style.display = 'block';
    } else {
        document.getElementById('prev-button').style.display = 'none';
    }
    document.getElementById('skip-button').style.display = 'block';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('explanation-container').style.display = 'none';
    
    // ⚠️ CHANGED: questions.length ko quizQuestions.length kiya
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        document.getElementById('prev-button').style.display = 'none';
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-box').style.display = 'none';
    document.getElementById('result-box').style.display = 'block';

    // ⚠️ CHANGED: Total marks ab 10 questions ke hisab se (20 marks) calculate honge
    const totalMarks = quizQuestions.length * 2;
    document.getElementById('final-score').innerText = `${score} / ${totalMarks}`;

    const pct = score > 0 ? Math.round((score / totalMarks) * 100) : 0;
    document.getElementById('accuracy-text').innerText = `Accuracy Rate: ${pct}%`;

    let feedback = "";
    if (pct === 100) feedback = "Gajab bhai Gajab😮.";
    else if (pct >= 70) feedback = "Hein Edi layak hoiyo tu👍🏻";
    else feedback = "Kyu nahi ho rhi padhai🤨🙄";

    document.getElementById('feedback-text').innerText = feedback;

    // --- Safe Analysis Logic ---
    // ⚠️ CHANGED: Yahan bhi sabhi jagah quizQuestions loop chalega
    let totalQuestions = quizQuestions.length;
    let attempted = 0;
    let correct = 0;
    let wrong = 0;

    console.log("User Answers Array:", userAnswers);

    for (let i = 0; i < quizQuestions.length; i++) {
        let q = quizQuestions[i];
        let userAns = userAnswers[i];

        if (userAns !== undefined && userAns !== null && userAns !== "") {
            attempted++;
            if (userAns === q.correct) {
                correct++;
            } else {
                wrong++;
            }
        }
    }

    if (document.getElementById('stat-total')) document.getElementById('stat-total').innerText = totalQuestions;
    if (document.getElementById('stat-attempted')) document.getElementById('stat-attempted').innerText = attempted;
    if (document.getElementById('stat-correct')) document.getElementById('stat-correct').innerText = correct;
    if (document.getElementById('stat-wrong')) document.getElementById('stat-wrong').innerText = wrong;
    
    // --- Review Section Generation Logic ---
    const reviewSection = document.getElementById('review-section');
    if (reviewSection) {
        reviewSection.innerHTML = '<h3 style="margin-top:20px; color:#333;">Review Questions</h3>';

        // ⚠️ CHANGED: Loop ab quizQuestions par chalega taaki wahi 10 questions review mein dikhein
        quizQuestions.forEach((q, index) => {
            let userAns = userAnswers[index];
            let statusClass = "";
            let userResultText = "";

            if (userAns === undefined || userAns === null || userAns === "") {
                statusClass = "review-skipped";
                userResultText = `<span style="color: #777; font-weight: bold;">Skipped:</span> Aapne ye question attempt nahi kiya.`;
            } else if (userAns === q.correct) {
                statusClass = "review-correct";
                userResultText = `<span style="color: #27ae60; font-weight: bold;">Sahi Jawab:</span> Aapne option (${userAns}) chuna tha.`;
            } else {
                statusClass = "review-wrong";
                userResultText = `<span style="color: #c0392b; font-weight: bold;">Galat Jawab:</span> Aapne option (${userAns}) chuna tha.`;
            }

            reviewSection.innerHTML += `
                <div class="review-card ${statusClass}" style="text-align: left; margin: 15px 0; padding: 15px; border-radius: 8px; border-left: 6px solid #ccc; background: #f9f9f9;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Q${index + 1}. ${q.question}</p>
                    <div style="font-size: 0.95rem; margin-bottom: 5px;">${userResultText}</div>
                    <div style="font-size: 0.95rem; color: #2c3e50; font-weight: 600;">
                        Correct Answer: <span style="color: #27ae60;">(${q.correct})</span>
                    </div>
                </div>
            `;
        });
    }
}

function restartQuiz() {
    // ⚠️ CHANGED: Restart par seedhe startQuiz() call karenge taaki naye random 10 questions select ho sakein
    startQuiz();
}

function skipQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        userAnswers[currentQuestionIndex] = "";
    }

    // ⚠️ CHANGED: questions.length ko quizQuestions.length kiya
    if (currentQuestionIndex < quizQuestions.length - 1) {
        loadNextQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
    }

    showQuestion();

    document.getElementById('skip-button').style.display = 'none';
    document.getElementById('next-button').style.display = 'block';

    if (currentQuestionIndex === 0) {
        document.getElementById('prev-button').style.display = 'none';
    } else {
        document.getElementById('prev-button').style.display = 'block';
    }
}

window.onload = startQuiz;