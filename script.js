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

// ==========================================
// HUGO AI CHATBOT LOGIC
// ==========================================
const chatLauncher = document.getElementById('chat-launcher');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const quickChips = document.getElementById('quick-chips');

// Avaa ja sulje chat
if (chatLauncher && chatWindow) {
  chatLauncher.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden')) {
      chatInput.focus();
    }
  });
}

if (chatClose && chatWindow) {
  chatClose.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
  });
}

// Klikkaus pikanappeihin
if (quickChips) {
  quickChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip-btn');
    if (!chip) return;
    const query = chip.getAttribute('data-query');
    handleUserMessage(query);
  });
}

// Lomakkeen lähetys
if (chatForm) {
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;
    chatInput.value = '';
    handleUserMessage(query);
  });
}

function handleUserMessage(text) {
  // 1. Lisää käyttäjän kupla
  appendBubble(text, 'user-bubble');

  // 2. Piilota pikalinkit ensimmäisen kysymyksen jälkeen
  if (quickChips) {
    quickChips.style.display = 'none';
  }

  // 3. Näytä tekoälyn "kirjoitusefekti"
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-bubble bot-bubble typing-bubble';
  typingIndicator.innerHTML = 'Hugo AI kirjoittaa...';
  chatMessages.appendChild(typingIndicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // 4. Simuloi lyhyt tekoälyvastausaika
  setTimeout(() => {
    typingIndicator.remove();
    const botReply = generateBotReply(text);
    appendBubble(botReply, 'bot-bubble');
  }, 600);
}

function appendBubble(content, className) {
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${className}`;
  bubble.innerHTML = content;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Älykäs vastausmoottori Hugon tiedoilla
function generateBotReply(input) {
  const text = input.toLowerCase();

  // Since AI Hackathon & Lindström
  if (text.includes('hackathon') || text.includes('since') || text.includes('lindström') || text.includes('lindstrom') || text.includes('haaste')) {
    return `Hugo osallistui tiiminsä kanssa <strong>Since AI Hackathon</strong> -tapahtumaan! Tiimi valitsi ratkaistavakseen tekstiilipalvelu- ja kiertotalousalan suuryritys <strong>Lindströmin</strong> yrityshaasteen. He kehittivät intensiivisessä tiimityössä tekoälypohjaista ratkaisua aitoihin liiketoimintatarpeisiin.`;
  }

  // Opinnot & Koulutus
  if (text.includes('opiskel') || text.includes('koulu') || text.includes('yliopisto') || text.includes('pääaine') || text.includes('kauppatiet')) {
    return `Hugo opiskelee kauppatieteitä ja hänen pääaineensa on <strong>rahoitus</strong>. Opinnoissa painottuvat mm. yritysrahoitus, arvonmääritys (DCF & kertoimet) sekä markkinoiden kvantitatiivinen dynamiikka.`;
  }

  // Rahoitus & Makrotalous
  if (text.includes('rahoitus') || text.includes('makro') || text.includes('talous') || text.includes('sijoit') || text.includes('korko') || text.includes('valuaatio')) {
    return `Rahoituksessa Hugon intohimoja ovat yritysten <strong>arvonmääritys</strong>, pääomamarkkinat ja <strong>makrotalous</strong> (korkoympäristö, globaalit taloussyklit ja likviditeetti). Hän yhdistää talousanalyysin moderniin dataosaamiseen.`;
  }

  // Tekoäly & Teknologia
  if (text.includes('tekoäly') || text.includes('ai') || text.includes('kood') || text.includes('python') || text.includes('tech') || text.includes('työkal')) {
    return `Hugo kehittää <strong>AI-first -ajattelulla</strong>! Hän hyödyntää tekoälyagentteja arkkitehtuurissa ja toteutuksessa. Työkalupakkiin kuuluvat mm. Python ja nopea <code>uv</code>, Git & GitHub CLI sekä modernit web-teknologiat. Tämäkin sivusto on toteutettu AI-agentin kanssa!`;
  }

  // Urheilu & Draivi
  if (text.includes('urheil') || text.includes('treen') || text.includes('harrast') || text.includes('kunto') || text.includes('laji') || text.includes('vapaa')) {
    return `Hugo on aktiivinen ja <strong>urheilullinen tekijä</strong>! Tavoitteellinen urheilutausta luo korkean energiatason, paineensietokyvyn ja kurinalaisen asenteen saattaa haastavatkin projektit aina maaliin asti.`;
  }

  // Yhteydenotto
  if (text.includes('yhtey') || text.includes('sähköpost') || text.includes('email') || text.includes('mail') || text.includes('linkedin') || text.includes('viest')) {
    return `Hugoon saa helpoiten yhteyden suoraan sähköpostilla: <a href="mailto:hugo.pinta@icloud.com" style="color:var(--accent); text-decoration:underline;">hugo.pinta@icloud.com</a> tai verkostoitumalla <a href="https://www.linkedin.com/in/hugopinta" target="_blank" style="color:var(--accent); text-decoration:underline;">LinkedInissä (hugopinta)</a>!`;
  }

  // Yrittäjyys & Innovaatiot
  if (text.includes('yrittäj') || text.includes('innovaatio') || text.includes('idea') || text.includes('venture') || text.includes('startup') || text.includes('projekti')) {
    return `Hugo on utelias ja yrittäjähenkinen rakentaja, joka etsii jatkuvasti uusia tapoja luoda arvoa yhdistämällä rahoituksen syväosaamisen ja uudet teknologiat. Hän on aina avoin sparraamaan uusia ideoita!`;
  }

  // Oletusvastaus
  return `Olen Hugon virtuaaliavustaja! Kysyit mielenkiintoisen kysymyksen. Hugo vastaa mielellään henkilökohtaisesti tarkemmin – laita hänelle viestiä osoitteeseen <a href="mailto:hugo.pinta@icloud.com" style="color:var(--accent); text-decoration:underline;">hugo.pinta@icloud.com</a> tai <a href="https://www.linkedin.com/in/hugopinta" target="_blank" style="color:var(--accent); text-decoration:underline;">LinkedInissä</a>!`;
}
