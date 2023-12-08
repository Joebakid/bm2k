const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  document.querySelector(".hamburger-menu").style.display = "flex";
});

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", function () {
  document.querySelector(".hamburger-menu").style.display = "none";
});
