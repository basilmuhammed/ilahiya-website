const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navbar.classList.toggle("nav-open");
});


const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");

    const originalSrc = preview.getAttribute("data-original");
    original.src = `./full/${originalSrc}`;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});