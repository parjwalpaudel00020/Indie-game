const themeToggle = document.querySelector("#themeToggle");
const suggestionForm = document.querySelector("#suggestionForm");
const genreInput = document.querySelector("#genreInput");
const formMessage = document.querySelector("#formMessage");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkModeOn = document.body.classList.contains("dark");
  themeToggle.textContent = darkModeOn ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", darkModeOn ? "Switch to light mode" : "Switch to dark mode");
});

suggestionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const idea = genreInput.value.trim();
  if (!idea) {
    formMessage.textContent = "Please enter a game idea first.";
    return;
  }
  formMessage.textContent = `Thanks! “${idea}” has been added to our idea list.`;
  suggestionForm.reset();
});
