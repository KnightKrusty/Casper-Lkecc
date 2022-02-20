const openBtn = document.querySelector(".lk-nav_open");
const closeBtn = document.querySelector("#closeButton");
const mobileNavigation = document.getElementById("nav_mob");

openBtn.addEventListener("click", function () {
  mobileNavigation.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  mobileNavigation.classList.add("hidden");
});
