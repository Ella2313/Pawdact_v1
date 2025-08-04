const closeBtn = document.getElementById("closeBtn");
const modal = document.querySelector(".modal");

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  console.log("Modal closed! 💖");
});
