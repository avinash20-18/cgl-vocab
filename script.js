let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let hasAnswered = false;
let quizQuestions = [];

function shuffleArray(array) {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Local Storage से Question History Management (70% New : 30% Revision)
function getQuestionHistory() {
  return JSON.parse(localStorage.getItem("seen_q_ids") || "[]");
}

function saveToQuestionHistory(newIds) {
  let history = getQuestionHistory();
  let updatedHistory = Array.from(new Set([...history, ...newIds]));
  localStorage.setItem("seen_q_ids", JSON.stringify(updatedHistory));
}

async function startQuiz() {
  if (typeof questions === "undefined" || questions.length === 0) {
    alert("Error: 'questions' array words.js se load nahi ho paayi!");
    return;
  }

  document.getElementById("result-box").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";

  let processedVocab = questions.map((q, idx) => ({
    ...q,
    id:
      q.id ||
      `vocab_${idx}_${q.question.substring(0, 15).replace(/\s+/g, "")}`,
  }));

  let seenIds = getQuestionHistory();

  let unseenQuestions = processedVocab.filter((q) => !seenIds.includes(q.id));
  let seenQuestions = processedVocab.filter((q) => seenIds.includes(q.id));

  let shuffledUnseen = shuffleArray(unseenQuestions);
  let shuffledSeen = shuffleArray(seenQuestions);

  let targetVocabCount = 20;
  let targetNewCount = Math.round(targetVocabCount * 0.7); // 14
  let targetOldCount = targetVocabCount - targetNewCount; // 6

  let selectedNew = shuffledUnseen.slice(0, targetNewCount);
  let selectedOld = shuffledSeen.slice(0, targetOldCount);

  let combinedVocab = [...selectedNew, ...selectedOld];

  // Safety check to ensure we have enough vocab questions
  if (combinedVocab.length < targetVocabCount) {
    let remainingNeeded = targetVocabCount - combinedVocab.length;
    let fallbackPool = processedVocab.filter(
      (q) => !combinedVocab.some((item) => item.id === q.id)
    );
    combinedVocab.push(
      ...shuffleArray(fallbackPool).slice(0, remainingNeeded)
    );
  }

  combinedVocab = shuffleArray(combinedVocab);

  // Save IDs to history
  let currentSessionIds = combinedVocab.map((q) => q.id);
  saveToQuestionHistory(currentSessionIds);

  // Fetch Cloze Tests
  let clozeQuestions = [];
  try {
    const response = await fetch("cloze_tests.json");
    if (response.ok) {
      const clozeData = await response.json();
      if (clozeData.length >= 2) {
        let selectedPassages = shuffleArray(clozeData).slice(0, 2);

        selectedPassages.forEach((p, pIdx) => {
          if (p.questions && Array.isArray(p.questions)) {
            p.questions.forEach((cq, qIdx) => {
              let blankVal = cq.blank || cq.number || cq.blankNo || qIdx + 1;
              clozeQuestions.push({
                id: `cloze_${p.id || pIdx}_${blankVal}`,
                type: `Cloze Test (Passage ${pIdx + 1} - Blank ${blankVal})`,
                passage: p.passage,
                question: `Select the most appropriate option for Blank (${blankVal}):`,
                options: cq.options,
                correct: cq.correct,
                explanation: cq.explanation,
              });
            });
          }
        });
      }
    }
  } catch (e) {
    console.error("Cloze test load failure:", e);
  }

  // Combine Vocab and Cloze Questions
  let tempQuestions = [
    ...combinedVocab.slice(0, 10),
    ...clozeQuestions,
    ...combinedVocab.slice(10),
  ];

  // STRICT 30 QUESTION ENFORCER:
  if (tempQuestions.length < 30) {
    let needed = 30 - tempQuestions.length;
    let extraVocab = processedVocab.filter(
      (q) => !tempQuestions.some((t) => t.id === q.id)
    );
    tempQuestions.push(...shuffleArray(extraVocab).slice(0, needed));
  }

  quizQuestions = tempQuestions.slice(0, 30);

  currentQuestionIndex = 0;
  score = 0;
  hasAnswered = false;
  userAnswers = [];

  showQuestion();
}

function showQuestion() {
  if (!quizQuestions[currentQuestionIndex]) return;
  const q = quizQuestions[currentQuestionIndex];

  const progress = document.getElementById("q-progress");
  if (progress)
    progress.innerText = `Question ${currentQuestionIndex + 1}/${
      quizQuestions.length
    }`;

  const qTypeHeader = document.getElementById("q-type");
  if (qTypeHeader) qTypeHeader.innerText = q.type || "SSC CGL Practice";

  const passageBox = document.getElementById("cloze-passage-box");
  const passageText = document.getElementById("cloze-passage-text");
  if (q.passage) {
    passageText.innerText = q.passage;
    passageBox.style.display = "block";
  } else {
    passageBox.style.display = "none";
  }

  document.getElementById("q-text").innerText = q.question;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = option;

    let match = option.match(/\(?([A-D])\)?/i);
    let optionLetter = match
      ? match[1].toUpperCase()
      : option.trim().charAt(0).toUpperCase();

    btn.onclick = () => selectOption(btn, optionLetter);
    optionsContainer.appendChild(btn);
  });

  const savedAnswer = userAnswers[currentQuestionIndex];
  if (savedAnswer) {
    hasAnswered = true;
    document.getElementById("next-button").style.display = "block";
    document.getElementById("skip-button").style.display = "none";

    const buttons = optionsContainer.getElementsByClassName("option-btn");
    for (let btn of buttons) {
      btn.disabled = true;
      let match = btn.innerText.match(/\(?([A-D])\)?/i);
      const currentLetter = match
        ? match[1].toUpperCase()
        : btn.innerText.trim().charAt(0).toUpperCase();

      if (currentLetter === q.correct.toUpperCase()) {
        btn.classList.add("correct");
      } else if (
        currentLetter === savedAnswer &&
        savedAnswer !== q.correct.toUpperCase()
      ) {
        btn.classList.add("wrong");
      }
    }
    if (document.getElementById("explanation-container")) {
      document.getElementById("explanation-text").innerText =
        q.explanation || "";
      document.getElementById("explanation-container").style.display = "block";
    }
  } else {
    hasAnswered = false;
    document.getElementById("next-button").style.display = "none";
    document.getElementById("skip-button").style.display = "block";
    if (document.getElementById("explanation-container")) {
      document.getElementById("explanation-container").style.display = "none";
    }
  }

  document.getElementById("prev-button").style.display =
    currentQuestionIndex > 0 ? "block" : "none";
}

function selectOption(selectedButton, selectedLetter) {
  if (hasAnswered) return;
  hasAnswered = true;
  userAnswers[currentQuestionIndex] = selectedLetter;

  const q = quizQuestions[currentQuestionIndex];
  const optionsContainer = document.getElementById("options-container");
  const buttons = optionsContainer.getElementsByClassName("option-btn");

  for (let btn of buttons) {
    btn.disabled = true;

    let match = btn.innerText.match(/\(?([A-D])\)?/i);
    let currentLetter = match
      ? match[1].toUpperCase()
      : btn.innerText.trim().charAt(0).toUpperCase();

    if (currentLetter === q.correct.toUpperCase()) {
      btn.classList.add("correct");
    }
  }

  if (selectedLetter !== q.correct.toUpperCase()) {
    selectedButton.classList.add("wrong");
  }

  if (document.getElementById("explanation-text")) {
    document.getElementById("explanation-text").innerText =
      q.explanation || "No explanation provided.";
  }
  if (document.getElementById("explanation-container")) {
    document.getElementById("explanation-container").style.display = "block";
  }

  document.getElementById("skip-button").style.display = "none";
  document.getElementById("next-button").style.display = "block";
}

function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    document.getElementById("prev-button").style.display = "none";
    showResults();
  }
}

function showResults() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-box").style.display = "block";

  let totalQuestions = quizQuestions.length;
  let attempted = 0,
    correct = 0,
    wrong = 0;

  score = 0;
  for (let i = 0; i < quizQuestions.length; i++) {
    let userAns = userAnswers[i];
    if (userAns !== undefined && userAns !== null && userAns !== "") {
      attempted++;
      if (userAns === quizQuestions[i].correct.toUpperCase()) {
        correct++;
        score += 2;
      } else {
        wrong++;
        score -= 0.5;
      }
    }
  }

  const totalMarks = totalQuestions * 2;
  document.getElementById(
    "final-score"
  ).innerText = `${score} / ${totalMarks}`;

  const pct = score > 0 ? Math.round((score / totalMarks) * 100) : 0;
  document.getElementById(
    "accuracy-text"
  ).innerText = `Accuracy Rate: ${pct}%`;

  let feedback = "";
  if (pct === 100) feedback = "Gajab bhai Gajab😮.";
  else if (pct >= 70) feedback = "Hein Edi layak hoiyo tu👍🏻";
  else feedback = "Kyu nahi ho rhi padhai🤨🙄";

  document.getElementById("feedback-text").innerText = feedback;

  if (document.getElementById("stat-total"))
    document.getElementById("stat-total").innerText = totalQuestions;
  if (document.getElementById("stat-attempted"))
    document.getElementById("stat-attempted").innerText = attempted;
  if (document.getElementById("stat-correct"))
    document.getElementById("stat-correct").innerText = correct;
  if (document.getElementById("stat-wrong"))
    document.getElementById("stat-wrong").innerText = wrong;

  const reviewSection = document.getElementById("review-section");
  if (reviewSection) {
    reviewSection.innerHTML =
      '<h3 style="margin-top:20px; color:#333;">Review Questions</h3>';

    quizQuestions.forEach((q, index) => {
      let userAnsLetter = userAnswers[index];
      let statusClass = "",
        userResultText = "",
        correctOptionText = "",
        userOptionText = "";

      q.options.forEach((optStr) => {
        let match = optStr.match(/\(?([A-D])\)?/i);
        let letter = match
          ? match[1].toUpperCase()
          : optStr.trim().charAt(0).toUpperCase();

        if (letter === q.correct.toUpperCase()) correctOptionText = optStr;
        if (userAnsLetter && letter === userAnsLetter.toUpperCase())
          userOptionText = optStr;
      });

      if (!userAnsLetter) {
        statusClass = "review-skipped";
        userResultText = `<span style="color: #4a5568; font-weight: bold;">Skipped:</span> Aapne attempt nahi kiya.`;
      } else if (userAnsLetter === q.correct.toUpperCase()) {
        statusClass = "review-correct";
        userResultText = `<span style="color: #27ae60; font-weight: bold;">Sahi Jawab:</span> Aapne select kiya: <strong>${userOptionText}</strong>`;
      } else {
        statusClass = "review-wrong";
        userResultText = `<span style="color: #c0392b; font-weight: bold;">Galat Jawab:</span> Aapne select kiya: <strong>${userOptionText}</strong>`;
      }

      let passageHTML = "";
      if (q.passage) {
        passageHTML = `
                    <div style="background: #edf2f7; border-left: 4px solid #3182ce; padding: 10px 12px; margin: 8px 0; border-radius: 4px; font-size: 0.9rem; color: #2d3748; line-height: 1.5;">
                        <strong>📖 Cloze Passage:</strong><br>${q.passage}
                    </div>
                `;
      }

      reviewSection.innerHTML += `
                <div class="review-card ${statusClass}" style="text-align: left; margin: 15px 0; padding: 15px; border-radius: 8px; border-left: 6px solid #ccc; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <div style="font-size:0.8rem; font-weight:bold; color:#718096; text-transform:uppercase;">${
                      q.type || "Question"
                    }</div>
                    ${passageHTML}
                    <p style="font-weight: 600; margin: 5px 0 8px 0; color: #2d3748;">Q${
                      index + 1
                    }. ${q.question}</p>
                    <div style="font-size: 0.95rem; margin-bottom: 5px;">${userResultText}</div>
                    <div style="font-size: 0.95rem; color: #2c3e50; font-weight: 600; margin-bottom: 8px;">
                        Correct Answer: <span style="color: #27ae60;">${correctOptionText}</span>
                    </div>
                    <div style="font-size: 0.9rem; background: #f7fafc; padding: 10px; border-radius: 6px; border-left: 3px solid #3182ce;">
                        <strong>💡 Explanation:</strong> ${
                          q.explanation || "No explanation provided."
                        }
                    </div>
                </div>
            `;
    });
  }
}

function restartQuiz() {
  startQuiz();
}

function skipQuestion() {
  if (userAnswers[currentQuestionIndex] === undefined)
    userAnswers[currentQuestionIndex] = "";
  if (currentQuestionIndex < quizQuestions.length - 1) loadNextQuestion();
  else showResults();
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

window.onload = startQuiz;