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

// Terminaalin kirjoitusefekti
const phrases = [
  'echo "Welcome to my AI-powered website!"',
  'git commit -m "Shipped my first website with AI 🚀"',
  'uv run dev --ai-first',
  'gh repo create hugo-website --public'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 70;
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
    delay = 2000; // Pysähdy hetkeksi kun lause on valmis
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
