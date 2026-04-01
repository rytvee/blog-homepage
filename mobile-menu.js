document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const icon = toggle.querySelector("i");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});
