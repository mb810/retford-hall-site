const header = document.querySelector(".site-header");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });
}