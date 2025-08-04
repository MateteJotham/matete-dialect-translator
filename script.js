const dialectDictionary = {
  luhya: { "how are you": "wasi bubi", "thank you": "webere" },
  luo: { "how are you": "nango", "thank you": "erokamano" },
  kikuyu: { "how are you": "wîhîî", "thank you": "ngai akûhû" },
  swahili: { "how are you": "habari gani", "thank you": "asante" },
  sheng: { "how are you": "niaje", "thank you": "shukz" },
};

const proverbs = {
  patience: {
    swahili: "Haraka haraka haina baraka",
    english: "Hurry, hurry has no blessings",
    chinese: "匆忙没有福气"
  },
  wisdom: {
    swahili: "Maji yakimwagika hayazoleki",
    english: "Spilled water cannot be collected",
    chinese: "水洒了就无法收回"
  }
};

function translate() {
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;
  const input = document.getElementById("inputText").value.toLowerCase();
  const outputBox = document.getElementById("output");

  let translation = dialectDictionary[from]?.[input];

  if (!translation) {
    translation = `🔄 Fallback: ${fallbackTranslate(input, to)}`;
  }

  outputBox.innerText = `Translation: ${translation}`;
}

function fallbackTranslate(text, to) {
  // Simulated fallback — replace with real API call
  if (to === "chinese") return "模拟翻译结果";
  return "Simulated fallback result";
}

function playAudio() {
  const text = document.getElementById("output").innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function showProverb() {
  const box = document.getElementById("proverbBox");
  const proverb = proverbs.patience;
  box.innerHTML = `
    <strong>Proverb:</strong> ${proverb.swahili}<br/>
    <strong>Meaning:</strong> ${proverb.english}<br/>
    <strong>中文:</strong> ${proverb.chinese}
  `;
}