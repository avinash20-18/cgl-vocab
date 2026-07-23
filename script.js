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

// Local Storage for Question History Management (70% New : 30% Revision)
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

  const resultBox = document.getElementById("result-box");
  const quizBox = document.getElementById("quiz-box");
  if (resultBox) resultBox.style.display = "none";
  if (quizBox) quizBox.style.display = "block";

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

  // Safety fallback if pools are short
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

  // Save current vocabulary session IDs to history
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

  // Interleave Cloze questions inside Vocabulary questions
  let tempQuestions = [
    ...combinedVocab.slice(0, 10),
    ...clozeQuestions,
    ...combinedVocab.slice(10),
  ];

  // STRICT 30 QUESTION ENFORCER
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
  if (progress) {
    progress.innerText = `Question ${currentQuestionIndex + 1}/${quizQuestions.length}`;
  }

  const qTypeHeader = document.getElementById("q-type");
  if (qTypeHeader) {
    qTypeHeader.innerText = q.type || "SSC CGL Practice";
  }

  const passageBox = document.getElementById("cloze-passage-box");
  const passageText = document.getElementById("cloze-passage-text");
  if (q.passage && passageBox && passageText) {
    passageText.innerText = q.passage;
    passageText.style.whiteSpace = "pre-line";
    passageBox.style.display = "block";
  } else if (passageBox) {
    passageBox.style.display = "none";
  }

  const qText = document.getElementById("q-text");
  if (qText) qText.innerText = q.question;

  const optionsContainer = document.getElementById("options-container");
  if (optionsContainer) {
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
  }

  const expBox = document.getElementById("explanation-container");
  const expText = document.getElementById("explanation-text");

  const savedAnswer = userAnswers[currentQuestionIndex];
  if (savedAnswer !== undefined && savedAnswer !== null && savedAnswer !== "") {
    hasAnswered = true;
    const nextBtn = document.getElementById("next-button");
    const skipBtn = document.getElementById("skip-button");
    if (nextBtn) nextBtn.style.display = "block";
    if (skipBtn) skipBtn.style.display = "none";

    const buttons = optionsContainer
      ? optionsContainer.getElementsByClassName("option-btn")
      : [];
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
    if (expBox && expText) {
      expText.innerText = q.explanation || "";
      expText.style.whiteSpace = "pre-line";
      expBox.style.display = "block";
    }
  } else {
    hasAnswered = false;
    const nextBtn = document.getElementById("next-button");
    const skipBtn = document.getElementById("skip-button");
    if (nextBtn) nextBtn.style.display = "none";
    if (skipBtn) skipBtn.style.display = "block";
    if (expBox) expBox.style.display = "none";
  }

  const prevBtn = document.getElementById("prev-button");
  if (prevBtn) {
    prevBtn.style.display = currentQuestionIndex > 0 ? "block" : "none";
  }
}

function selectOption(selectedButton, selectedLetter) {
  if (hasAnswered) return;
  hasAnswered = true;
  userAnswers[currentQuestionIndex] = selectedLetter;

  const q = quizQuestions[currentQuestionIndex];
  const optionsContainer = document.getElementById("options-container");
  const buttons = optionsContainer
    ? optionsContainer.getElementsByClassName("option-btn")
    : [];

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

  const expBox = document.getElementById("explanation-container");
  const expText = document.getElementById("explanation-text");

  if (expText) {
    expText.innerText = q.explanation || "No explanation provided.";
    expText.style.whiteSpace = "pre-line";
  }
  if (expBox) expBox.style.display = "block";

  const nextBtn = document.getElementById("next-button");
  const skipBtn = document.getElementById("skip-button");
  if (skipBtn) skipBtn.style.display = "none";
  if (nextBtn) nextBtn.style.display = "block";
}

function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    const prevBtn = document.getElementById("prev-button");
    if (prevBtn) prevBtn.style.display = "none";
    showResults();
  }
}

function showResults() {
  const quizBox = document.getElementById("quiz-box");
  const resultBox = document.getElementById("result-box");
  if (quizBox) quizBox.style.display = "none";
  if (resultBox) resultBox.style.display = "block";

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
  const finalScoreEl = document.getElementById("final-score");
  if (finalScoreEl) finalScoreEl.innerText = `${score} / ${totalMarks}`;

  const pct = score > 0 ? Math.round((score / totalMarks) * 100) : 0;
  const accuracyEl = document.getElementById("accuracy-text");
  if (accuracyEl) accuracyEl.innerText = `Accuracy Rate: ${pct}%`;

  let feedback = "";
  if (pct === 100) feedback = "Gajab bhai Gajab😮.";
  else if (pct >= 70) feedback = "Hein Edi layak hoiyo tu👍🏻";
  else feedback = "Kyu nahi ho rhi padhai🤨🙄";

  const feedbackEl = document.getElementById("feedback-text");
  if (feedbackEl) feedbackEl.innerText = feedback;

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
      '<h3 style="margin-top:20px; color:#333;">Review Questions & Full Option Analysis</h3>';

    quizQuestions.forEach((q, index) => {
      let userAnsLetter = userAnswers[index];
      let statusClass = "",
        userResultText = "",
        correctOptionText = "",
        userOptionText = "";

      let optionsBreakdownHTML =
        '<div style="margin-top: 10px; font-size: 0.88rem; background: #ffffff; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0; color: #2d3748;"><strong>🔍 All Options Breakdown:</strong><ul style="margin: 5px 0 0 0; padding-left: 20px; list-style-type: none;">';

      q.options.forEach((optStr) => {
        let match = optStr.match(/\(?([A-D])\)?/i);
        let letter = match
          ? match[1].toUpperCase()
          : optStr.trim().charAt(0).toUpperCase();

        if (letter === q.correct.toUpperCase()) correctOptionText = optStr;
        if (userAnsLetter && letter === userAnsLetter.toUpperCase())
          userOptionText = optStr;

        let isCorrectOpt = letter === q.correct.toUpperCase();
        let isUserOpt = userAnsLetter && letter === userAnsLetter.toUpperCase();

        let optStyle = isCorrectOpt
          ? "color: #27ae60; font-weight: bold;"
          : isUserOpt
          ? "color: #c0392b; font-weight: bold;"
          : "color: #4a5568;";

        let tag = "";
        if (isCorrectOpt) tag += " ✔️ (Correct Answer)";
        if (isUserOpt && !isCorrectOpt) tag += " ❌ (Your Choice)";

        optionsBreakdownHTML += `<li style="${optStyle}; margin-bottom: 3px;">${optStr}${tag}</li>`;
      });
      optionsBreakdownHTML += "</ul></div>";

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
          <div style="background: #edf2f7; border-left: 4px solid #3182ce; padding: 10px 12px; margin: 8px 0; border-radius: 4px; font-size: 0.9rem; color: #2d3748; line-height: 1.5; white-space: pre-line;">
              <strong>📖 Cloze Passage:</strong><br>${q.passage}
          </div>
        `;
      }

      let formattedExplanation = (q.explanation || "No explanation provided.")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      reviewSection.innerHTML += `
        <div class="review-card ${statusClass}" style="text-align: left; margin: 15px 0; padding: 15px; border-radius: 8px; border-left: 6px solid #ccc; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <div style="font-size:0.8rem; font-weight:bold; color:#718096; text-transform:uppercase;">${
              q.type || "Question"
            }</div>
            ${passageHTML}
            <p style="font-weight: 600; margin: 5px 0 8px 0; color: #2d3748; white-space: pre-line;">Q${
              index + 1
            }. ${q.question}</p>
            <div style="font-size: 0.95rem; margin-bottom: 5px;">${userResultText}</div>
            <div style="font-size: 0.95rem; color: #2c3e50; font-weight: 600; margin-bottom: 8px;">
                Correct Answer: <span style="color: #27ae60;">${correctOptionText}</span>
            </div>
            ${optionsBreakdownHTML}
            <div style="font-size: 0.9rem; background: #f7fafc; padding: 12px; margin-top: 10px; border-radius: 6px; border-left: 3px solid #3182ce; color: #2d3748; white-space: pre-line; line-height: 1.6;">
                <strong>💡 Detailed Explanation:</strong><br>${formattedExplanation}
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
  if (userAnswers[currentQuestionIndex] === undefined) {
    userAnswers[currentQuestionIndex] = "";
  }
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