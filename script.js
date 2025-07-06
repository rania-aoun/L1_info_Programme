// Message automatique dans la console du navigateur
console.log("Welcome to your Computer Science helper site!");

// ✅ Affiche une seule fois l'alerte de bienvenue
if (!localStorage.getItem("welcome_shown")) {
  alert("👋 Welcome! We hope this website helps you succeed in your first year 🎓");
  localStorage.setItem("welcome_shown", "yes");
}

// Fonction pour activer ou désactiver le dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Sauvegarder le mode dans le navigateur
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark_mode", "on");
  } else {
    localStorage.setItem("dark_mode", "off");
  }
}

// Fonction pour animer le texte lettre par lettre
const text = "👩‍💻 Welcome to your L1 Computer Science Helper Site!";
let index = 0;
const speed = 25; // temps entre chaque lettre (ms)

function typeText() {
  const animatedTextElement = document.getElementById("animated-text");
  if (!animatedTextElement) return;

  if (index < text.length) {
    animatedTextElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

// Fonction pour afficher/masquer un contenu
function toggleContent() {
  const content = document.getElementById("hidden-content");
  const button = document.querySelector(".toggle-btn");

  if (!content || !button) return;

  if (content.style.display === "none") {
    content.style.display = "block";
    button.textContent = "📂 Hide Details";
  } else {
    content.style.display = "none";
    button.textContent = "📂 Show Details";
  }
}

// Fonction de filtrage des matières
function filterSubjects() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll("#subjectList li");

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? "block" : "none";
  });
}

// Compteur de visites
function updateVisitCount() {
  let count = localStorage.getItem("visit_count");

  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }

  localStorage.setItem("visit_count", count);
  const visitElement = document.getElementById("visitCount");
  if (visitElement) {
    visitElement.textContent = `👀 You have visited this page ${count} time${count > 1 ? 's' : ''}.`;
  }
}

// ✅ Fonction de reset
function resetSite() {
  localStorage.removeItem("welcome_shown");
  localStorage.removeItem("dark_mode");
  localStorage.removeItem("visit_count");
  location.reload();
}

// ✅ Une seule fonction appelée au chargement
window.onload = function () {
  // Dark mode
  if (localStorage.getItem("dark_mode") === "on") {
    document.body.classList.add("dark-mode");
  }

  // Texte animé
  typeText();

  // Compteur de visite
  updateVisitCount();
};
