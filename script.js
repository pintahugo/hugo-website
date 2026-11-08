// Teeman vaihto (Dark / Light)
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Tarkista aiemmin tallennettu teema
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.remove('dark');
  body.classList.add('light');
  if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
} else {
  if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
}

if (themeToggleBtn) {
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
}
