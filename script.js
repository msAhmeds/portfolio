const toggleBtn = document.getElementById("toggleDark");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
