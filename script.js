const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  document.querySelector(".hamburger-menu").style.display = "flex";
  document.querySelector(".hamburger-menu").style.transition =
    "all 1s ease-in-out";
});

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", function () {
  document.querySelector(".hamburger-menu").style.display = "none";
  document.querySelector(".hamburger-menu").style.transition =
    "all 1s ease-in-out";
});
