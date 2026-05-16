function goTo(section) {
  const sections = ["users", "reports", "active", "resolved"];

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  document.getElementById(section).classList.remove("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
  goTo("reports");
});