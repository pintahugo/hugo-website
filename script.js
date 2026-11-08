// Teeman vaihto (Dark / Light)
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Tarkista tallennettu teema
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.remove('dark');
  body.classList.add('light');
  themeToggleBtn.textContent = '☀️';
} else {
  themeToggleBtn.textContent = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
});

// Terminaalin kirjoitusefekti (Rahoitus + Tekoäly + Innovaatiot)
const phrases = [
  'uv run analyze_macro_trends.py --fed-rates',
  'echo "Combining deep financial insight with AI execution 💡"',
  'git commit -m "Shipped market valuation model 📈"',
  'python -m portfolio_optimization --sharpe-ratio',
  'echo "Always open for new innovative ideas & ventures 🚀"'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 65;
const typingTextElement = document.getElementById('typing-text');

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = typingSpeed;

  if (!isDeleting && charIndex === currentPhrase.length) {
    delay = 2200; // Pysähdy hetkeksi kun lause on valmis
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  } else if (isDeleting) {
    delay = typingSpeed / 2;
  }

  setTimeout(typeEffect, delay);
}

// Käynnistä efekti
document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});
