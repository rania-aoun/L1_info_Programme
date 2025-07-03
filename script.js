// Message automatique dans la console du navigateur
console.log("Welcome to your Computer Science helper site!");

// Petit message à l’utilisateur
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

// ✅ Quand la page se charge, vérifier le mode
window.onload = function () {
  if (localStorage.getItem("dark_mode") === "on") {
    document.body.classList.add("dark-mode");
  }
};


const text = "👩‍💻 Welcome to your L1 Computer Science Helper Site!";
let index = 0;
const speed = 25; // temps entre chaque lettre (ms)

function typeText() {
  if (index < text.length) {
    document.getElementById("animated-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

// Démarrer l'effet après chargement de la page
window.onload = function () {
  // Dark mode check
  if (localStorage.getItem("dark_mode") === "on") {
    document.body.classList.add("dark-mode");
  }

  // Start animated text
  typeText();
};



function toggleContent() {
  const content = document.getElementById("hidden-content");
  const button = document.querySelector(".toggle-btn");

  if (content.style.display === "none") {
    content.style.display = "block";
    button.textContent = "📂 Hide Details";
  } else {
    content.style.display = "none";
    button.textContent = "📂 Show Details";
  }
}

function filterSubjects() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll("#subjectList li");

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? "block" : "none";
  });
}





// ✅ Compteur de visites par utilisateur (dans son navigateur)
function updateVisitCount() {
  let count = localStorage.getItem("visit_count");

  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }

  localStorage.setItem("visit_count", count);
  document.getElementById("visitCount").textContent = `👀 You have visited this page ${count} time${count > 1 ? 's' : ''}.`;
}

// Appelle cette fonction quand la page se charge
window.onload = function () {
  // Dark mode auto
  if (localStorage.getItem("dark_mode") === "on") {
    document.body.classList.add("dark-mode");
  }

  // Texte animé (si existe)
  if (typeof typeText === "function") typeText();

  // Afficher le compteur (si l'élément existe)
  if (document.getElementById("visitCount")) {
    updateVisitCount();
  }
};
