// Kenyan Dialect Translator - Main Script

// Database of phrases for each language
const phrasesDatabase = {
    greetings: {
        kikuyu: [
            { phrase: "Wĩmwega?", translation: "How are you?" },
            { phrase: "Ni wega", translation: "I'm fine" },
            { phrase: "Ũhoro waku", translation: "How are you? (informal)" },
            { phrase: "Wendo", translation: "Love" },
            { phrase: "Thayu", translation: "Peace" }
        ],
        kamba: [
            { phrase: "Mũvoo?", translation: "How are you?" },
            { phrase: "Nĩvoo", translation: "I'm fine" },
            { phrase: "Mwaiĩsyoni?", translation: "How are you? (informal)" },
            { phrase: "Wendo", translation: "Love" },
            { phrase: "Thayu", translation: "Peace" }
        ],
        luhya: [
            { phrase: "Mulembe?", translation: "How are you?" },
            { phrase: "Ndelembe", translation: "I'm fine" },
            { phrase: "Buli?", translation: "How are you? (informal)" },
            { phrase: "Chira", translation: "Love" },
            { phrase: "Sitima", translation: "Peace" }
        ],
        gusii: [
            { phrase: "Bwakire?", translation: "How are you?" },
            { phrase: "Nebwakire", translation: "I'm fine" },
            { phrase: "Amaate?", translation: "How are you? (informal)" },
            { phrase: "Obotanyi", translation: "Love" },
            { phrase: "Omogesi", translation: "Peace" }
        ],
        meru: [
            { phrase: "Muga?", translation: "How are you?" },
            { phrase: "Nĩmuga", translation: "I'm fine" },
            { phrase: "Wĩ mwega?", translation: "How are you? (informal)" },
            { phrase: "Wendo", translation: "Love" },
            { phrase: "Thayu", translation: "Peace" }
        ],
        mijikenda: [
            { phrase: "Mvurya?", translation: "How are you?" },
            { phrase: "Nivurya", translation: "I'm fine" },
            { phrase: "Mambo?", translation: "How are you? (informal)" },
            { phrase: "Pendo", translation: "Love" },
            { phrase: "Amani", translation: "Peace" }
        ],
        dholuo: [
            { phrase: "Msawa?", translation: "How are you?" },
            { phrase: "Adhi msawa", translation: "I'm fine" },
            { phrase: "Idhi nade?", translation: "How are you? (informal)" },
            { phrase: "Her", translation: "Love" },
            { phrase: "Koth", translation: "Peace" }
        ],
        kalenjin: [
            { phrase: "Chamgei?", translation: "How are you?" },
            { phrase: "Amin chamgei", translation: "I'm fine" },
            { phrase: "Ko oo?", translation: "How are you? (informal)" },
            { phrase: "Muringu", translation: "Love" },
            { phrase: "Sergoit", translation: "Peace" }
        ],
        maasai: [
            { phrase: "Ipa?", translation: "How are you?" },
            { phrase: "Epa", translation: "I'm fine" },
            { phrase: "Supa?", translation: "How are you? (informal)" },
            { phrase: "Enkanyit", translation: "Love" },
            { phrase: "Eserian", translation: "Peace" }
        ],
        turkana: [
            { phrase: "Ejoka?", translation: "How are you?" },
            { phrase: "Ejo", translation: "I'm fine" },
            { phrase: "Iyalio?", translation: "How are you? (informal)" },
            { phrase: "Akipian", translation: "Love" },
            { phrase: "Ekim", translation: "Peace" }
        ],
        somali: [
            { phrase: "Is ka warran?", translation: "How are you?" },
            { phrase: "Waan fiicanahay", translation: "I'm fine" },
            { phrase: "Sidee tahay?", translation: "How are you? (informal)" },
            { phrase: "Jacayl", translation: "Love" },
            { phrase: "Nabad", translation: "Peace" }
        ]
    },
    family: {
        kikuyu: [
            { phrase: "Baba", translation: "Father" },
            { phrase: "Maitu", translation: "Mother" },
            { phrase: "Mũrũ", translation: "Child" },
            { phrase: "Mũrũ wa kĩrũ", translation: "Firstborn" },
            { phrase: "Mũtumia", translation: "Wife" }
        ],
        kamba: [
            { phrase: "Asa", translation: "Father" },
            { phrase: "Mau", translation: "Mother" },
            { phrase: "Mwana", translation: "Child" },
            { phrase: "Mwana wa mbele", translation: "Firstborn" },
            { phrase: "Muka", translation: "Wife" }
        ],
        luhya: [
            { phrase: "Papa", translation: "Father" },
            { phrase: "Mama", translation: "Mother" },
            { phrase: "Omwana", translation: "Child" },
            { phrase: "Omwana w'okhulundu", translation: "Firstborn" },
            { phrase: "Omukhasi", translation: "Wife" }
        ],
        gusii: [
            { phrase: "Tata", translation: "Father" },
            { phrase: "Mama", translation: "Mother" },
            { phrase: "Omwana", translation: "Child" },
            { phrase: "Omwana omotang'ani", translation: "Firstborn" },
            { phrase: "Omotichi", translation: "Wife" }
        ],
        meru: [
            { phrase: "Baba", translation: "Father" },
            { phrase: "Maitũ", translation: "Mother" },
            { phrase: "Mwana", translation: "Child" },
            { phrase: "Mwana wa mbere", translation: "Firstborn" },
            { phrase: "Mũtumia", translation: "Wife" }
        ],
        mijikenda: [
            { phrase: "Baba", translation: "Father" },
            { phrase: "Mama", translation: "Mother" },
            { phrase: "Mwana", translation: "Child" },
            { phrase: "Mwana wa kwanza", translation: "Firstborn" },
            { phrase: "Mke", translation: "Wife" }
        ],
        dholuo: [
            { phrase: "Wuon", translation: "Father" },
            { phrase: "Min", translation: "Mother" },
            { phrase: "Nyathi", translation: "Child" },
            { phrase: "Nyathi machon", translation: "Firstborn" },
            { phrase: "Chieg", translation: "Wife" }
        ],
        kalenjin: [
            { phrase: "Papa", translation: "Father" },
            { phrase: "Mama", translation: "Mother" },
            { phrase: "Lap", translation: "Child" },
            { phrase: "Lap ng'et", translation: "Firstborn" },
            { phrase: "Cheptoo", translation: "Wife" }
        ],
        maasai: [
            { phrase: "Papa", translation: "Father" },
            { phrase: "Yeyo", translation: "Mother" },
            { phrase: "Enkera", translation: "Child" },
            { phrase: "Enkera nabo", translation: "Firstborn" },
            { phrase: "Enkitok", translation: "Wife" }
        ],
        turkana: [
            { phrase: "Apa", translation: "Father" },
            { phrase: "Eka", translation: "Mother" },
            { phrase: "Ekal", translation: "Child" },
            { phrase: "Ekal ngakipi", translation: "Firstborn" },
            { phrase: "Akiyen", translation: "Wife" }
        ],
        somali: [
            { phrase: "Aabe", translation: "Father" },
            { phrase: "Hooyo", translation: "Mother" },
            { phrase: "Ilmo", translation: "Child" },
            { phrase: "Ilmo ugu horraysa", translation: "Firstborn" },
            { phrase: "Xaas", translation: "Wife" }
        ]
    },
    food: {
        kikuyu: [
            { phrase: "Irio", translation: "Mashed peas and potatoes" },
            { phrase: "Mũkimo", translation: "Mashed food (potatoes, greens)" },
            { phrase: "Gĩtheri", translation: "Maize and beans" },
            { phrase: "Nyama", translation: "Meat" },
            { phrase: "Mũratina", translation: "Traditional beer" }
        ],
        kamba: [
            { phrase: "Muthokoi", translation: "Maize and beans" },
            { phrase: "Kĩmbapū", translation: "Maize" },
            { phrase: "Nyama", translation: "Meat" },
            { phrase: "Ũkĩ", translation: "Porridge" },
            { phrase: "Kang'ei", translation: "Traditional beer" }
        ],
        luhya: [
            { phrase: "Obusuma", translation: "Ugali" },
            { phrase: "Ingokho", translation: "Chicken" },
            { phrase: "Enyama", translation: "Meat" },
            { phrase: "Busera", translation: "Porridge" },
            { phrase: "Busaa", translation: "Traditional beer" }
        ],
        gusii: [
            { phrase: "Enyeni", translation: "Ugali" },
            { phrase: "Enkoko", translation: "Chicken" },
            { phrase: "Enyama", translation: "Meat" },
            { phrase: "Amachere", translation: "Milk" },
            { phrase: "Egesi", translation: "Banana beer" }
        ],
        meru: [
            { phrase: "Muthokoi", translation: "Maize and beans" },
            { phrase: "Mũkimo", translation: "Mashed food" },
            { phrase: "Nyama", translation: "Meat" },
            { phrase: "Ũkĩ", translation: "Porridge" },
            { phrase: "Ncũbĩ", translation: "Traditional beer" }
        ],
        mijikenda: [
            { phrase: "Wali", translation: "Rice" },
            { phrase: "Mhogo", translation: "Cassava" },
            { phrase: "Nyama ya ng'ombe", translation: "Beef" },
            { phrase: "Maziwa", translation: "Milk" },
            { phrase: "Tembo", translation: "Palm wine" }
        ],
        dholuo: [
            { phrase: "Kuon", translation: "Ugali" },
            { phrase: "Gweno", translation: "Chicken" },
            { phrase: "Ring", translation: "Meat" },
            { phrase: "Mogo", translation: "Cassava" },
            { phrase: "Chang'aa", translation: "Traditional liquor" }
        ],
        kalenjin: [
            { phrase: "Ng'at", translation: "Ugali" },
            { phrase: "Tigitik chepkube", translation: "Chicken" },
            { phrase: "Sisit", translation: "Meat" },
            { phrase: "Mursik", translation: "Fermented milk" },
            { phrase: "Busaa", translation: "Traditional beer" }
        ],
        maasai: [
            { phrase: "Olmorijo", translation: "Blood and milk mixture" },
            { phrase: "Enkarnakui", translation: "Meat" },
            { phrase: "Osaroi", translation: "Milk" },
            { phrase: "Oltule", translation: "Honey beer" },
            { phrase: "Olmoti", translation: "Porridge" }
        ],
        turkana: [
            { phrase: "Ng'ikarion", translation: "Blood and milk mixture" },
            { phrase: "Eki", translation: "Meat" },
            { phrase: "Akipe", translation: "Milk" },
            { phrase: "Ajon", translation: "Traditional beer" },
            { phrase: "Ng'ikito", translation: "Porridge" }
        ],
        somali: [
            { phrase: "Canjeero", translation: "Pancake" },
            { phrase: "Hilib", translation: "Meat" },
            { phrase: "Caano", translation: "Milk" },
            { phrase: "Cambuulo", translation: "Beans and rice" },
            { phrase: "Shaah", translation: "Tea" }
        ]
    },
    numbers: {
        kikuyu: [
            { phrase: "Imwe", translation: "One" },
            { phrase: "Igĩrĩ", translation: "Two" },
            { phrase: "Ithatũ", translation: "Three" },
            { phrase: "Inya", translation: "Four" },
            { phrase: "Ithano", translation: "Five" }
        ],
        kamba: [
            { phrase: "Imwe", translation: "One" },
            { phrase: "Ili", translation: "Two" },
            { phrase: "Itatu", translation: "Three" },
            { phrase: "Inya", translation: "Four" },
            { phrase: "Itano", translation: "Five" }
        ],
        luhya: [
            { phrase: "Ndala", translation: "One" },
            { phrase: "Tsibili", translation: "Two" },
            { phrase: "Tsitatu", translation: "Three" },
            { phrase: "Tsine", translation: "Four" },
            { phrase: "Tsitano", translation: "Five" }
        ],
        gusii: [
            { phrase: "Eimo", translation: "One" },
            { phrase: "Ebere", translation: "Two" },
            { phrase: "Esato", translation: "Three" },
            { phrase: "Enne", translation: "Four" },
            { phrase: "Eisano", translation: "Five" }
        ],
        meru: [
            { phrase: "Imwe", translation: "One" },
            { phrase: "Igiiri", translation: "Two" },
            { phrase: "Ithatu", translation: "Three" },
            { phrase: "Inya", translation: "Four" },
            { phrase: "Ithano", translation: "Five" }
        ],
        mijikenda: [
            { phrase: "Moya", translation: "One" },
            { phrase: "Mbiri", translation: "Two" },
            { phrase: "Mtatu", translation: "Three" },
            { phrase: "Mne", translation: "Four" },
            { phrase: "Mtano", translation: "Five" }
        ],
        dholuo: [
            { phrase: "Achiel", translation: "One" },
            { phrase: "Ariyo", translation: "Two" },
            { phrase: "Adek", translation: "Three" },
            { phrase: "Ang'wen", translation: "Four" },
            { phrase: "Abich", translation: "Five" }
        ],
        kalenjin: [
            { phrase: "Aeng", translation: "One" },
            { phrase: "Aeng'", translation: "Two" },
            { phrase: "Somok", translation: "Three" },
            { phrase: "Angwan", translation: "Four" },
            { phrase: "Mut", translation: "Five" }
        ],
        maasai: [
            { phrase: "Nabo", translation: "One" },
            { phrase: "Are", translation: "Two" },
            { phrase: "Uni", translation: "Three" },
            { phrase: "Ongwan", translation: "Four" },
            { phrase: "Imiet", translation: "Five" }
        ],
        turkana: [
            { phrase: "Apei", translation: "One" },
            { phrase: "Auni", translation: "Two" },
            { phrase: "Aunison", translation: "Three" },
            { phrase: "Aongwan", translation: "Four" },
            { phrase: "Akanisiet", translation: "Five" }
        ],
        somali: [
            { phrase: "Kow", translation: "One" },
            { phrase: "Laba", translation: "Two" },
            { phrase: "Saddex", translation: "Three" },
            { phrase: "Afar", translation: "Four" },
            { phrase: "Shan", translation: "Five" }
        ]
    },
    directions: {
        kikuyu: [
            { phrase: "Igũrũ", translation: "Up" },
            { phrase: "Thĩ", translation: "Down" },
            { phrase: "Ũmotho", translation: "Right" },
            { phrase: "Ũcooko", translation: "Left" },
            { phrase: "Hingo", translation: "Far" }
        ],
        kamba: [
            { phrase: "Mulungu", translation: "Up" },
            { phrase: "Muthi", translation: "Down" },
            { phrase: "Kĩla", translation: "Right" },
            { phrase: "Kĩla kya muthi", translation: "Left" },
            { phrase: "Mũno", translation: "Far" }
        ],
        luhya: [
            { phrase: "Heulu", translation: "Up" },
            { phrase: "Hasi", translation: "Down" },
            { phrase: "Bulafu", translation: "Right" },
            { phrase: "Bulafu bwa hasi", translation: "Left" },
            { phrase: "Hahulu", translation: "Far" }
        ],
        gusii: [
            { phrase: "Egesaku", translation: "Up" },
            { phrase: "Egete", translation: "Down" },
            { phrase: "Egesaku egecha", translation: "Right" },
            { phrase: "Egete egecha", translation: "Left" },
            { phrase: "Egesaku egecha muno", translation: "Far" }
        ],
        meru: [
            { phrase: "Iguru", translation: "Up" },
            { phrase: "Thi", translation: "Down" },
            { phrase: "Uboro", translation: "Right" },
            { phrase: "Uboro wa thi", translation: "Left" },
            { phrase: "Muno", translation: "Far" }
        ],
        mijikenda: [
            { phrase: "Juu", translation: "Up" },
            { phrase: "Chini", translation: "Down" },
            { phrase: "Kulia", translation: "Right" },
            { phrase: "Kushoto", translation: "Left" },
            { phrase: "Mbali", translation: "Far" }
        ],
        dholuo: [
            { phrase: "Malo", translation: "Up" },
            { phrase: "Piny", translation: "Down" },
            { phrase: "Chak", translation: "Right" },
            { phrase: "Chak mar piny", translation: "Left" },
            { phrase: "Adier", translation: "Far" }
        ],
        kalenjin: [
            { phrase: "Kokwo", translation: "Up" },
            { phrase: "Tait", translation: "Down" },
            { phrase: "Chemaket", translation: "Right" },
            { phrase: "Chemaket ab tait", translation: "Left" },
            { phrase: "Kokoch", translation: "Far" }
        ],
        maasai: [
            { phrase: "Ewuaso", translation: "Up" },
            { phrase: "Enkare", translation: "Down" },
            { phrase: "Ewuaso oo nkishon", translation: "Right" },
            { phrase: "Ewuaso oo nkishon enkare", translation: "Left" },
            { phrase: "Ewuaso oo nkishon enkare muno", translation: "Far" }
        ],
        turkana: [
            { phrase: "Akuj", translation: "Up" },
            { phrase: "Ngakipi", translation: "Down" },
            { phrase: "Akuj a ngakipi", translation: "Right" },
            { phrase: "Akuj a ngakipi a ngakipi", translation: "Left" },
            { phrase: "Akuj a ngakipi a ngakipi muno", translation: "Far" }
        ],
        somali: [
            { phrase: "Kor", translation: "Up" },
            { phrase: "Hoos", translation: "Down" },
            { phrase: "Midig", translation: "Right" },
            { phrase: "Bidix", translation: "Left" },
            { phrase: "Fog", translation: "Far" }
        ]
    }
};

// Quiz questions for each language
const quizDatabase = {
    kikuyu: [
        {
            question: "What does 'Wĩmwega?' mean?",
            options: ["Good morning", "How are you?", "Thank you", "Goodbye"],
            answer: 1
        },
        {
            question: "How do you say 'mother' in Kikuyu?",
            options: ["Baba", "Maitu", "Mũrũ", "Mũtumia"],
            answer: 1
        }
    ],
    kamba: [
        {
            question: "What does 'Mũvoo?' mean?",
            options: ["Good morning", "How are you?", "Thank you", "Goodbye"],
            answer: 1
        },
        {
            question: "How do you say 'father' in Kamba?",
            options: ["Asa", "Mau", "Mwana", "Muka"],
            answer: 0
        }
    ],
    // Add quiz questions for all languages...
    english: [
        {
            question: "What is 'Irio' in English?",
            options: ["Ugali", "Meat", "Mashed peas and potatoes", "Vegetables"],
            answer: 2
        }
    ]
};

// Current selected language and category
let currentLanguage = 'kikuyu';
let currentCategory = 'greetings';
let currentQuizQuestion = 0;

// DOM elements
const languageButtons = document.querySelectorAll('.language-btn');
const categoryButtons = document.querySelectorAll('.category-btn');
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
const clearBtn = document.getElementById('clear-btn');
const darkModeToggle = document.getElementById('darkModeToggle');
const imageUpload = document.getElementById('imageUpload');
const imageInput = document.getElementById('imageInput');
const sourceLanguageSelect = document.getElementById('source-language');
const targetLanguageSelect = document.getElementById('target-language');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const nextQuestionBtn = document.getElementById('next-question-btn');
const currentYear = document.getElementById('current-year');

// Initialize the app
function init() {
    // Set current year
    currentYear.textContent = new Date().getFullYear();
    
    // Load initial content
    loadPhrases();
    loadQuizQuestion();
    
    // Set up event listeners
    setupEventListeners();
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Initialize saved phrases
    if (!localStorage.getItem('savedPhrases')) {
        localStorage.setItem('savedPhrases', JSON.stringify([]));
    }
}

// Set up event listeners
function setupEventListeners() {
    // Language selection
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentLanguage = button.dataset.lang;
            updateLanguageSelection();
            loadPhrases();
            loadQuizQuestion();
        });
    });
    
    // Category selection
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentCategory = button.dataset.category;
            updateCategorySelection();
            loadPhrases();
        });
    });
    
    // Translate button
    translateBtn.addEventListener('click', translateText);
    
    // Voice input
    voiceInputBtn.addEventListener('click', startVoiceInput);
    
    // Speak output
    speakOutputBtn.addEventListener('click', speakOutput);
    
    // Save phrase
    savePhraseBtn.addEventListener('click', saveCurrentPhrase);
    
    // Clear input
    clearBtn.addEventListener('click', clearInput);
    
    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Image upload
    imageUpload.addEventListener('click', () => imageInput.click());
    imageInput.addEventListener('change', handleImageUpload);
    
    // Language select changes
    sourceLanguageSelect.addEventListener('change', updateLanguageFromSelect);
    targetLanguageSelect.addEventListener('change', updateLanguageFromSelect);
    
    // Next quiz question
    nextQuestionBtn.addEventListener('click', loadQuizQuestion);
    
    // Search web button
    searchWebBtn.addEventListener('click', searchWebForTranslation);
    
    // Allow Enter key to trigger translation
    dialectInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            translateText();
        }
    });
}

// Update language selection UI
function updateLanguageSelection() {
    languageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
    });
    
    // Update select dropdowns
    sourceLanguageSelect.value = currentLanguage;
}

// Update category selection UI
function updateCategorySelection() {
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === currentCategory) {
            btn.classList.add('active');
        }
    });
}

// Update language from select dropdown
function updateLanguageFromSelect() {
    if (sourceLanguageSelect.value !== 'english') {
        currentLanguage = sourceLanguageSelect.value;
        updateLanguageSelection();
        loadPhrases();
        loadQuizQuestion();
    }
}

// Load phrases for current language and category
function loadPhrases() {
    phrasesContainer.innerHTML = '';
    
    const phrases = phrasesDatabase[currentCategory][currentLanguage];
    
    if (phrases && phrases.length > 0) {
        phrases.forEach(item => {
            const phraseCard = document.createElement('div');
            phraseCard.className = 'phrase-card';
            phraseCard.innerHTML = `
                <div class="phrase">${item.phrase}</div>
                <div class="translation">${item.translation}</div>
            `;
            
            // Click to auto-fill translator
            phraseCard.addEventListener('click', () => {
                dialectInput.value = item.phrase;
                sourceLanguageSelect.value = currentLanguage;
                targetLanguageSelect.value = 'english';
                translateText();
            });
            
            phrasesContainer.appendChild(phraseCard);
        });
    } else {
        phrasesContainer.innerHTML = '<p>No phrases available for this category in the selected language.</p>';
    }
}

// Translate text function
function translateText() {
    const text = dialectInput.value.trim();
    const sourceLang = sourceLanguageSelect.value;
    const targetLang = targetLanguageSelect.value;
    
    if (!text) {
        outputText.innerHTML = '<div class="error">Please enter some text to translate</div>';
        searchMoreSection.style.display = 'none';
        return;
    }
    
    // Show loading state
    translateTextEl.textContent = 'Translating...';
    translateLoader.style.display = 'inline-block';
    translateBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        let translation;
        let source = 'local';
        
        if (sourceLang === targetLang) {
            translation = text; // No translation needed
        } else if (sourceLang === 'english') {
            translation = translateFromEnglish(text, targetLang);
        } else if (targetLang === 'english') {
            translation = translateToEnglish(text, sourceLang);
        } else {
            // Dialect to dialect translation
            const result = translateBetweenDialects(text, sourceLang, targetLang);
            translation = result.translation;
            source = result.source;
        }
        
        // Show result
        translateTextEl.textContent = 'Translate';
        translateLoader.style.display = 'none';
        translateBtn.disabled = false;
        
        if (translation) {
            outputText.innerHTML = `
                <div class="success">Translation (${source}):</div>
                <div>${translation}</div>
            `;
            searchMoreSection.style.display = translation.includes('Could not find') ? 'block' : 'none';
        } else {
            outputText.innerHTML = `
                <div class="error">Translation not found</div>
                <div>${findSimilarTranslations(text)}</div>
            `;
            searchMoreSection.style.display = 'block';
        }
    }, 1000);
}

// Translate from English to target language
function translateFromEnglish(text, targetLang) {
    for (const category in phrasesDatabase) {
        const phrases = phrasesDatabase[category][targetLang];
        if (phrases) {
            const found = phrases.find(p => p.translation.toLowerCase() === text.toLowerCase());
            if (found) {
                return found.phrase;
            }
        }
    }
    return null;
}

// Translate to English from source language
function translateToEnglish(text, sourceLang) {
    for (const category in phrasesDatabase) {
        const phrases = phrasesDatabase[category][sourceLang];
        if (phrases) {
            const found = phrases.find(p => p.phrase.toLowerCase() === text.toLowerCase());
            if (found) {
                return found.translation;
            }
        }
    }
    return null;
}

// Translate between any two Kenyan dialects
function translateBetweenDialects(text, fromLang, toLang) {
    // First try direct translation
    for (const category in phrasesDatabase) {
        const fromPhrases = phrasesDatabase[category][fromLang];
        const toPhrases = phrasesDatabase[category][toLang];
        
        if (fromPhrases && toPhrases) {
            const foundIndex = fromPhrases.findIndex(p => p.phrase.toLowerCase() === text.toLowerCase());
            if (foundIndex !== -1 && toPhrases[foundIndex]) {
                return {
                    translation: toPhrases[foundIndex].phrase,
                    source: 'local'
                };
            }
        }
    }
    
    // Fallback to English intermediary
    const englishTranslation = translateToEnglish(text, fromLang);
    if (englishTranslation) {
        const reverseTranslation = translateFromEnglish(englishTranslation, toLang);
        if (reverseTranslation) {
            return {
                translation: reverseTranslation,
                source: 'english-intermediary'
            };
        }
    }
    
    // Final fallback to Google Translate
    return {
        translation: `Could not find direct translation. <a href="https://translate.google.com/?sl=${fromLang}&tl=${toLang}&text=${encodeURIComponent(text)}" target="_blank">Search Google Translate</a>`,
        source: 'google'
    };
}

// Find similar translations when exact match isn't found
function findSimilarTranslations(text) {
    let similarResults = '';
    const maxResults = 3;
    let resultCount = 0;
    
    // Check all categories for similar phrases
    for (const category in phrasesDatabase) {
        const phrases = phrasesDatabase[category][currentLanguage];
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

// Search the web for translations
function searchWebForTranslation() {
    const text = dialectInput.value.trim();
    if (!text) return;
    
    // Show loading state
    outputText.innerHTML = '<div class="loading"></div> Searching the web...';
    
    // Simulate web search
    setTimeout(() => {
        const fromLang = sourceLanguageSelect.value;
        const toLang = targetLanguageSelect.value;
        
        outputText.innerHTML = `
            <div class="success">Try these search options:</div>
            <div class="search-more">
                <a href="https://translate.google.com/?sl=${fromLang}&tl=${toLang}&text=${encodeURIComponent(text)}" target="_blank">
                    <i class="fas fa-language"></i> Google Translate
                </a>
                <a href="https://www.google.com/search?q=${encodeURIComponent(`${text} ${fromLang} to ${toLang} translation`)}" target="_blank">
                    <i class="fas fa-search"></i> Web Search
                </a>
            </div>
        `;
    }, 1000);
}

// Voice input
function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window)) {
        outputText.innerHTML = '<div class="error">Speech recognition not supported</div>';
        return;
    }
    
    const recognition = new webkitSpeechRecognition();
    recognition.lang = getSpeechRecognitionLangCode(sourceLanguageSelect.value);
    
    recognition.onstart = () => {
        outputText.innerHTML = '<div>Listening... Speak now</div>';
        voiceInputBtn.innerHTML = '<i class="fas fa-microphone-slash"></i> Stop';
    };
    
    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        dialectInput.value = speechResult;
    };
    
    recognition.onerror = (event) => {
        outputText.innerHTML = `<div class="error">Error: ${event.error}</div>`;
        voiceInputBtn.innerHTML = '<i class="fas fa-microphone"></i> Speak';
    };
    
    recognition.onend = () => {
        voiceInputBtn.innerHTML = '<i class="fas fa-microphone"></i> Speak';
    };
    
    recognition.start();
}

function getSpeechRecognitionLangCode(lang) {
    const codes = {
        kikuyu: 'en-KE',
        somali: 'so-SO',
        english: 'en-US'
    };
    return codes[lang] || 'en-KE';
}

// Text-to-speech
function speakOutput() {
    const text = outputText.innerText;
    if (!text || text.includes('Translation will appear here')) {
        return;
    }
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = targetLanguageSelect.value === 'english' ? 'en-US' : 'sw-KE';
        speechSynthesis.speak(utterance);
    } else {
        outputText.innerHTML += '<div class="error">Text-to-speech not supported</div>';
    }
}

// Save current phrase
function saveCurrentPhrase() {
    const text = dialectInput.value.trim();
    const translation = outputText.innerText;
    
    if (!text || translation.includes('Translation will appear here')) {
        return;
    }
    
    const savedPhrases = JSON.parse(localStorage.getItem('savedPhrases'));
    savedPhrases.push({
        phrase: text,
        translation: translation,
        language: currentLanguage,
        date: new Date().toISOString()
    });
    
    localStorage.setItem('savedPhrases', JSON.stringify(savedPhrases));
    
    // Visual feedback
    const originalText = savePhraseBtn.innerHTML;
    savePhraseBtn.innerHTML = '<i class="fas fa-check"></i> Saved!';
    setTimeout(() => {
        savePhraseBtn.innerHTML = originalText;
    }, 2000);
}

// Clear input
function clearInput() {
    dialectInput.value = '';
    outputText.textContent = 'Translation will appear here...';
    searchMoreSection.style.display = 'none';
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        outputText.innerHTML = '<div class="loading"></div> Analyzing image...';
        
        // Simulate OCR processing
        setTimeout(() => {
            // If no text found, suggest Google Lens
            outputText.innerHTML = `
                <div class="success">Image analysis complete</div>
                <div>No text detected in image.</div>
                <div class="search-more">
                    <a href="https://lens.google.com/uploadbyurl?url=${encodeURIComponent(e.target.result)}" target="_blank">
                        <i class="fas fa-camera"></i> Search with Google Lens
                    </a>
                </div>
            `;
        }, 2000);
    };
    reader.readAsDataURL(file);
}

// Load quiz question
function loadQuizQuestion() {
    const questions = quizDatabase[currentLanguage] || quizDatabase.english;
    if (!questions || questions.length === 0) {
        quizQuestion.textContent = 'No quiz questions available for this language.';
        quizOptions.innerHTML = '';
        return;
    }
    
    currentQuizQuestion = (currentQuizQuestion + 1) % questions.length;
    const question = questions[currentQuizQuestion];
    
    quizQuestion.textContent = question.question;
    quizOptions.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'quiz-option';
        optionBtn.textContent = option;
        
        optionBtn.addEventListener('click', () => {
            const isCorrect = index === question.answer;
            
            if (isCorrect) {
                optionBtn.classList.add('correct');
                quizQuestion.textContent += ' ✅ Correct!';
            } else {
                optionBtn.classList.add('incorrect');
                quizQuestion.textContent += ' ❌ Incorrect';
            }
            
            // Disable all options
            document.querySelectorAll('.quiz-option').forEach(btn => {
                btn.style.pointerEvents = 'none';
            });
            
            nextQuestionBtn.style.display = 'block';
        });
        
        quizOptions.appendChild(optionBtn);
    });
    
    nextQuestionBtn.style.display = 'none';
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);