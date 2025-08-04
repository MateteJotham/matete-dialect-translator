// Expanded phrases database
const phrasesDatabase = {
    greetings: {
        kikuyu: [
            { phrase: "Wĩmwega?", translation: "How are you?" },
            { phrase: "Ni wega", translation: "I'm fine" },
            { phrase: "Ũhoro waku", translation: "How are you? (informal)" },
            { phrase: "Wendo", translation: "Love" },
            { phrase: "Thayu", translation: "Peace" },
        ],
        kamba: [
            { phrase: "Mwaĩ?", translation: "How are you?" },
            { phrase: "Nda mwaĩ", translation: "I'm fine" },
            { phrase: "Nĩkyau?", translation: "What's up?" },
            { phrase: "Ngai akuvoya", translation: "God bless you" },
            { phrase: "Mwaitu", translation: "Dear" },
        ],
        luhya: [
            { phrase: "Mulembe?", translation: "Hello?" },
            { phrase: "Ndi bulayi", translation: "I'm fine" },
            { phrase: "Oli otya?", translation: "How are you?" },
            { phrase: "Shikuku shikhango", translation: "Good morning" },
            { phrase: "Orio muno", translation: "Thank you" },
        ],
        gusii: [
            { phrase: "Bwairire?", translation: "How are you?" },
            { phrase: "Naki omonto?", translation: "What's up?" },
            { phrase: "Ngosaba", translation: "Hello" },
            { phrase: "Amaraba", translation: "Thank you" },
            { phrase: "Omorembe", translation: "Peace" },
        ],
        meru: [
            { phrase: "Muga?", translation: "Hello?" },
            { phrase: "Nthaka", translation: "I'm fine" },
            { phrase: "Wiko uria?", translation: "How are you?" },
            { phrase: "Mweri mwega", translation: "Good morning" },
            { phrase: "Koma mwega", translation: "Good night" },
        ],
        // Add other languages (mijikenda, dholuo, kalenjin, maasai, turkana, somali)
    },
    family: {
        kikuyu: [
            { phrase: "Mami", translation: "Mother" },
            { phrase: "Baba", translation: "Father" },
            { phrase: "Mwana", translation: "Child" },
            { phrase: "Njohi", translation: "Sibling" },
            { phrase: "Mukuru", translation: "Grandparent" },
        ],
        kamba: [
            { phrase: "Mwaitu", translation: "Mother" },
            { phrase: "Tata", translation: "Father" },
            { phrase: "Mwana", translation: "Child" },
            { phrase: "Nduva", translation: "Sibling" },
            { phrase: "Kuku", translation: "Grandmother" },
        ],
        luhya: [
            { phrase: "Mama", translation: "Mother" },
            { phrase: "Papa", translation: "Father" },
            { phrase: "Omwana", translation: "Child" },
            { phrase: "Omukoko", translation: "Sibling" },
            { phrase: "Kukhu", translation: "Grandmother" },
        ],
        gusii: [
            { phrase: "Mama", translation: "Mother" },
            { phrase: "Tata", translation: "Father" },
            { phrase: "Omwana", translation: "Child" },
            { phrase: "Omoiseke", translation: "Daughter" },
            { phrase: "Omogaka", translation: "Son" },
        ],
        meru: [
            { phrase: "Mwaitu", translation: "Mother" },
            { phrase: "Baaba", translation: "Father" },
            { phrase: "Mwana", translation: "Child" },
            { phrase: "Nkoma", translation: "Sibling" },
            { phrase: "Nguu", translation: "Grandmother" },
        ],
        // Add other languages
    },
    food: {
        kikuyu: [
            { phrase: "Ngwacĩ", translation: "Potato" },
            { phrase: "Njohi", translation: "Beer" },
            { phrase: "Mũkimo", translation: "Mashed food" },
            { phrase: "Ngũkũ", translation: "Chicken" },
            { phrase: "Marigũ", translation: "Banana" },
        ],
        kamba: [
            { phrase: "Ngai", translation: "Maize" },
            { phrase: "Mbemba", translation: "Corn" },
            { phrase: "Nguku", translation: "Chicken" },
            { phrase: "Mbaa", translation: "Rice" },
            { phrase: "Nguvu", translation: "Fish" },
        ],
        luhya: [
            { phrase: "Obusuma", translation: "Ugali" },
            { phrase: "Ingokho", translation: "Chicken" },
            { phrase: "Amabere", translation: "Milk" },
            { phrase: "Kumunyu", translation: "Vegetables" },
            { phrase: "Eshisaka", translation: "Banana" },
        ],
        // Add other languages
    },
    numbers: {
        kikuyu: [
            { phrase: "Imwe", translation: "One" },
            { phrase: "Igĩrĩ", translation: "Two" },
            { phrase: "Ithatũ", translation: "Three" },
            { phrase: "Inya", translation: "Four" },
            { phrase: "Itano", translation: "Five" },
        ],
        kamba: [
            { phrase: "Imwe", translation: "One" },
            { phrase: "Ili", translation: "Two" },
            { phrase: "Itatu", translation: "Three" },
            { phrase: "Inya", translation: "Four" },
            { phrase: "Itano", translation: "Five" },
        ],
        luhya: [
            { phrase: "Limwe", translation: "One" },
            { phrase: "Kabili", translation: "Two" },
            { phrase: "Kadasa", translation: "Three" },
            { phrase: "Kane", translation: "Four" },
            { phrase: "Kano", translation: "Five" },
        ],
        // Add other languages
    },
    directions: {
        kikuyu: [
            { phrase: "Kũrũ", translation: "Up" },
            { phrase: "Gũkũ", translation: "Down" },
            { phrase: "Kũrĩa", translation: "There" },
            { phrase: "Gũkũ", translation: "Here" },
            { phrase: "Nja", translation: "Outside" },
        ],
        kamba: [
            { phrase: "Nguu", translation: "Up" },
            { phrase: "Nthi", translation: "Down" },
            { phrase: "Kula", translation: "There" },
            { phrase: "Ava", translation: "Here" },
            { phrase: "Nja", translation: "Outside" },
        ],
        // Add other languages
    },
    emergency: {
        kikuyu: [
            { phrase: "Ngai!", translation: "Help!" },
            { phrase: "Mweri!", translation: "Fire!" },
            { phrase: "Mweri mwega", translation: "Ambulance" },
            { phrase: "Polisi", translation: "Police" },
            { phrase: "Ngai akuhothe", translation: "Emergency" },
        ],
        kamba: [
            { phrase: "Ngai!", translation: "Help!" },
            { phrase: "Mwiitu!", translation: "Fire!" },
            { phrase: "Ambulance", translation: "Ambulance" },
            { phrase: "Polisi", translation: "Police" },
            { phrase: "Kwa ngai", translation: "Emergency" },
        ],
        // Add other languages
    },
};

let currentSourceLang = 'kikuyu';
let currentTargetLang = 'english';
let currentCategory = 'greetings';

// DOM elements
const sourceLangSelect = document.getElementById('source-lang');
const targetLangSelect = document.getElementById('target-lang');
const swapLangBtn = document.getElementById('swap-lang-btn');
const phrasesContainer = document.getElementById('phrases-container');
const dialectInput = document.getElementById('dialect-input');
const outputText = document.getElementById('output-text');
const translateBtn = document.getElementById('translate-btn');
const translateTextEl = document.getElementById('translate-text');
const translateLoader = document.getElementById('translate-loader');
const searchMoreSection = document.getElementById('search-more');
const searchWebBtn = document.getElementById('search-web-btn');
const voiceInputBtn = document.getElementById('voice-input-btn');
const speakOutputBtn = document.getElementById('speak-output-btn');
const savePhraseBtn = document.getElementById('save-phrase-btn');
const shareBtn = document.getElementById('share-btn');
const clearBtn = document.getElementById('clear-btn');
const darkModeToggle = document.getElementById('darkModeToggle');
const imageInput = document.getElementById('imageInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const nextQuestionBtn = document.getElementById('next-question-btn');

function init() {
    loadPhrases();
    setupEventListeners();
    loadQuizQuestion();
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    if (!localStorage.getItem('savedPhrases')) {
        localStorage.setItem('savedPhrases', JSON.stringify([]));
    }
}

function setupEventListeners() {
    sourceLangSelect.addEventListener('change', () => {
        currentSourceLang = sourceLangSelect.value;
        loadPhrases();
        loadQuizQuestion();
        updateTranslateButton();
    });

    targetLangSelect.addEventListener('change', () => {
        currentTargetLang = targetLangSelect.value;
        updateTranslateButton();
    });

    swapLangBtn.addEventListener('click', () => {
        const temp = currentSourceLang;
        currentSourceLang = currentTargetLang;
        currentTargetLang = temp;
        sourceLangSelect.value = currentSourceLang;
        targetLangSelect.value = currentTargetLang;
        loadPhrases();
        loadQuizQuestion();
        updateTranslateButton();
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            loadPhrases();
        });
    });

    translateBtn.addEventListener('click', translateText);
    voiceInputBtn.addEventListener('click', startVoiceInput);
    speakOutputBtn.addEventListener('click', speakOutput);
    savePhraseBtn.addEventListener('click', saveCurrentPhrase);
    shareBtn.addEventListener('click', shareTranslation);
    clearBtn.addEventListener('click', () => {
        dialectInput.value = '';
        outputText.textContent = 'Translation will appear here...';
        searchMoreSection.classList.add('hidden');
    });
    darkModeToggle.addEventListener('click', toggleDarkMode);
    imageInput.addEventListener('change', handleImageUpload);
    searchWebBtn.addEventListener('click', searchWebForTranslation);
    nextQuestionBtn.addEventListener('click', loadQuizQuestion);
    dialectInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) translateText();
    });
}

function updateTranslateButton() {
    translateTextEl.textContent = `Translate to ${currentTargetLang.charAt(0).toUpperCase() + currentTargetLang.slice(1)}`;
}

function loadPhrases() {
    phrasesContainer.innerHTML = '';
    const phrases = phrasesDatabase[currentCategory][currentSourceLang] || [];
    
    if (phrases.length > 0) {
        phrases.forEach(item => {
            const phraseCard = document.createElement('div');
            phraseCard.className = 'phrase-card';
            phraseCard.innerHTML = `
                <div class="phrase">${item.phrase}</div>
                <div class="translation">${item.translation}</div>
            `;
            phraseCard.addEventListener('click', () => {
                dialectInput.value = item.phrase;
                translateText();
            });
            phrasesContainer.appendChild(phraseCard);
        });
    } else {
        phrasesContainer.innerHTML = '<p>No phrases available for this category.</p>';
    }
}

async function translateText() {
    const text = dialectInput.value.trim();
    if (!text) {
        outputText.innerHTML = '<div class="error">Please enter text to translate</div>';
        searchMoreSection.classList.add('hidden');
        return;
    }

    translateTextEl.textContent = 'Translating...';
    translateLoader.classList.remove('hidden');
    translateBtn.disabled = true;

    let translation = null;
    let foundInCategory = '';
    let englishTranslation = '';

    if (currentTargetLang === 'english') {
        for (const category in phrasesDatabase) {
            const phrases = phrasesDatabase[category][currentSourceLang];
            if (phrases) {
                const found = phrases.find(p => p.phrase.toLowerCase() === text.toLowerCase());
                if (found) {
                    translation = found.translation;
                    foundInCategory = category;
                    break;
                }
            }
        }
    } else {
        for (const category in phrasesDatabase) {
            const sourcePhrases = phrasesDatabase[category][currentSourceLang];
            const targetPhrases = phrasesDatabase[category][currentTargetLang];
            if (sourcePhrases && targetPhrases) {
                const sourcePhrase = sourcePhrases.find(p => p.phrase.toLowerCase() === text.toLowerCase());
                if (sourcePhrase) {
                    englishTranslation = sourcePhrase.translation;
                    const targetPhrase = targetPhrases.find(t => t.translation === sourcePhrase.translation);
                    if (targetPhrase) {
                        translation = targetPhrase.phrase;
                        foundInCategory = category;
                        break;
                    }
                }
            }
        }
    }

    if (!translation) {
        try {
            const response = await mockGoogleTranslate(text, currentSourceLang, currentTargetLang);
            translation = response.translation;
            if (currentTargetLang !== 'english') {
                const englishResponse = await mockGoogleTranslate(text, currentSourceLang, 'english');
                englishTranslation = englishResponse.translation;
            }
        } catch (error) {
            console.error('Google Translate fallback failed:', error);
        }
    }

    translateTextEl.textContent = `Translate to ${currentTargetLang.charAt(0).toUpperCase() + currentTargetLang.slice(1)}`;
    translateLoader.classList.add('hidden');
    translateBtn.disabled = false;

    if (translation) {
        outputText.innerHTML = `
            <div class="success">Translation${foundInCategory ? ` found in ${foundInCategory} category` : ''}:</div>
            <div><strong>${text}</strong> → <strong>${translation}</strong></div>
            ${englishTranslation && currentTargetLang !== 'english' ? `<div>(English: ${englishTranslation})</div>` : ''}
        `;
        searchMoreSection.classList.add('hidden');
    } else {
        outputText.innerHTML = `
            <div class="error">Translation not found.</div>
            ${findSimilarTranslations(text)}
        `;
        searchMoreSection.classList.remove('hidden');
    }
}

function findSimilarTranslations(text) {
    let similarResults = '';
    const maxResults = 3;
    let resultCount = 0;

    for (const category in phrasesDatabase) {
        const phrases = phrasesDatabase[category][currentSourceLang];
        if (phrases) {
            for (const phraseObj of phrases) {
                if (phraseObj.phrase.toLowerCase().includes(text.toLowerCase()) || 
                    text.toLowerCase().includes(phraseObj.phrase.toLowerCase())) {
                    similarResults += `
                        <div class="phrase-card">
                            <div class="phrase">${phraseObj.phrase}</div>
                            <div class="translation">${phraseObj.translation} (${category})</div>
                        </div>
                    `;
                    resultCount++;
                    if (resultCount >= maxResults) break;
                }
            }
            if (resultCount >= maxResults) break;
        }
    }

    return similarResults || '<div class="error">No similar translations found.</div>';
}

async function searchWebForTranslation() {
    const text = dialectInput.value.trim();
    if (!text) return;

    outputText.innerHTML = '<div class="loading"></div> Searching Google...';
    
    try {
        const webResults = [
            { source: "Google Search", translation: `Possible meaning: '${text}' in ${currentSourceLang}` },
        ];

        let resultsHTML = `<div class="success">Google search results for "${text}":</div>`;
        webResults.forEach(result => {
            resultsHTML += `
                <div class="internet-result">
                    <div><strong>${result.source}:</strong></div>
                    <div>${result.translation}</div>
                </div>
            `;
        });

        resultsHTML += `
            <div class="search-more">
                <a href="https://www.google.com/search?q=${encodeURIComponent(text + ' ' + currentSourceLang + ' to ' + currentTargetLang + ' translation')}" target="_blank">Search Google</a>
            </div>
        `;
        outputText.innerHTML = resultsHTML;
    } catch (error) {
        outputText.innerHTML = `<div class="error">Error searching Google: ${error.message}</div>`;
    }
}

function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window)) {
        outputText.innerHTML = '<div class="error">Speech recognition not supported</div>';
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = getSpeechRecognitionLangCode(currentSourceLang);

    recognition.onstart = () => {
        outputText.innerHTML = '<div>Listening...</div>';
        voiceInputBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
        voiceInputBtn.classList.add('recording');
    };

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        dialectInput.value = speechResult;
        translateText();
    };

    recognition.onerror = (event) => {
        outputText.innerHTML = `<div class="error">Error: ${event.error}</div>`;
        voiceInputBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceInputBtn.classList.remove('recording');
    };

    recognition.onend = () => {
        voiceInputBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceInputBtn.classList.remove('recording');
    };

    recognition.start();
}

function getSpeechRecognitionLangCode(lang) {
    const codes = {
        kikuyu: 'en-KE',
        kamba: 'en-KE',
        luhya: 'en-KE',
        gusii: 'en-KE',
        meru: 'en-KE',
        mijikenda: 'en-KE',
        dholuo: 'en-KE',
        kalenjin: 'en-KE',
        maasai: 'en-KE',
        turkana: 'en-KE',
        somali: 'so-SO',
    };
    return codes[lang] || 'en-KE';
}

function speakOutput() {
    const text = outputText.innerText;
    if (!text || text.includes('Translation will appear here')) return;

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = currentTargetLang === 'english' ? 'en-US' : 'en-KE';
        speechSynthesis.speak(utterance);
        speakOutputBtn.classList.add('speaking');
        utterance.onend = () => speakOutputBtn.classList.remove('speaking');
    } else {
        outputText.innerHTML += '<div class="error">Text-to-speech not supported</div>';
    }
}

function saveCurrentPhrase() {
    const text = dialectInput.value.trim();
    const translation = outputText.innerText;
    if (!text || translation.includes('Translation will appear here')) return;

    const savedPhrases = JSON.parse(localStorage.getItem('savedPhrases'));
    savedPhrases.push({
        phrase: text,
        translation: translation,
        sourceLang: currentSourceLang,
        targetLang: currentTargetLang,
        date: new Date().toISOString()
    });

    localStorage.setItem('savedPhrases', JSON.stringify(savedPhrases));
    savePhraseBtn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => {
        savePhraseBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
    }, 2000);
}

function shareTranslation() {
    const text = dialectInput.value.trim();
    const translation = outputText.innerText;
    if (!text || translation.includes('Translation will appear here')) return;

    const shareData = {
        title: 'Kenyan Dialect Translator',
        text: `Translated "${text}" (${currentSourceLang}) to "${translation}" (${currentTargetLang})`,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).then(() => {
            shareBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                shareBtn.innerHTML = '<i class="fas fa-share-alt"></i>';
            }, 2000);
        }).catch(() => {
            outputText.innerHTML += '<div class="error">Sharing failed</div>';
        });
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`).then(() => {
            shareBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                shareBtn.innerHTML = '<i class="fas fa-share-alt"></i>';
            }, 2000);
        }).catch(() => {
            outputText.innerHTML += '<div class="error">Copy to clipboard failed</div>';
        });
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    outputText.innerHTML = '<div class="loading"></div> Processing image...';

    try {
        const objectName = await mockGoogleLens(file);
        const translation = await mockGoogleTranslate(objectName, 'english', currentTargetLang);
        outputText.innerHTML = `
            <div class="success">Object identified: ${objectName}</div>
            <div><strong>Translation to ${currentTargetLang}:</strong> ${translation.translation}</div>
        `;
    } catch (error) {
        outputText.innerHTML = `
            <div class="error">Error processing image</div>
            <div><a href="https://lens.google.com/upload" target="_blank">Try Google Lens</a></div>
        `;
    }
}

async function mockGoogleTranslate(text, sourceLang, targetLang) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ translation: `Translated: ${text} (${sourceLang} to ${targetLang})` });
        }, 1000);
    });
}

async function mockGoogleLens(file) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Sample Object');
        }, 1500);
    });
}

function loadQuizQuestion() {
    quizQuestion.textContent = 'Loading quiz...';
    quizOptions.innerHTML = '';
    nextQuestionBtn.classList.add('hidden');

    const categories = Object.keys(phrasesDatabase);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const languages = Object.keys(phrasesDatabase[randomCategory]);
    const randomLang = languages[Math.floor(Math.random() * languages.length)];
    const phrases = phrasesDatabase[randomCategory][randomLang];
    
    if (!phrases || phrases.length === 0) {
        quizQuestion.textContent = 'No quiz questions available.';
        return;
    }

    const correctPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const questionType = Math.random() > 0.5 ? 'translate' : 'reverse';
    
    quizQuestion.textContent = questionType === 'translate'
        ? `How do you say "${correctPhrase.phrase}" (${randomLang}) in English?`
        : `How do you say "${correctPhrase.translation}" in ${randomLang}?`;

    const options = [correctPhrase];
    while (options.length < 4) {
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        if (!options.includes(randomPhrase)) options.push(randomPhrase);
    }

    options.sort(() => Math.random() - 0.5);

    options.forEach((option, index) => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'quiz-option';
        optionBtn.textContent = questionType === 'translate' ? option.translation : option.phrase;

        optionBtn.addEventListener('click', () => {
            const isCorrect = option === correctPhrase;
            optionBtn.classList.add(isCorrect ? 'correct' : 'incorrect');
            quizQuestion.textContent += isCorrect ? ' ✅ Correct!' : ' ❌ Incorrect';
            document.querySelectorAll('.quiz-option').forEach(btn => {
                btn.style.pointerEvents = 'none';
            });
            nextQuestionBtn.classList.remove('hidden');
        });

        quizOptions.appendChild(optionBtn);
    });
}

document.addEventListener('DOMContentLoaded', init);