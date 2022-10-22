// select items
const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const style = document.querySelector(".modal-overlay");

// show modal functionnality
btn.addEventListener("click", function () {
  style.classList.add("show-modal");
});

// close modal functionnality
closeBtn.addEventListener("click", function () {
  style.classList.remove("show-modal");
});
