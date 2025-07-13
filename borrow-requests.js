const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".main-content");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => (c.style.display = "none"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).style.display = "flex";
  });
});
