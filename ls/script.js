const closeBtn = document.getElementById("closeBtn");
const modal = document.querySelector(".modal");

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  console.log("Modal closed! 💖");
});
  function toggleAbout() {
  const aboutSection = document.getElementById("about");
  if (aboutSection.style.display === "none" || aboutSection.style.display === "") {
    aboutSection.style.display = "block";
    // Optional scroll to it
    aboutSection.scrollIntoView({ behavior: "smooth" });
  } else {
    aboutSection.style.display = "none";
  }
}
const petcareSection = document.getElementById("petcare");

function togglePetcare() {
  formBox.classList.remove("active");
  aboutSection.style.display = "none"; // hide About if open

  if (petcareSection.style.display === "none" || petcareSection.style.display === "") {
    petcareSection.style.display = "block";
    petcareSection.scrollIntoView({ behavior: "smooth" });
  } else {
    petcareSection.style.display = "none";
  }
}
document.getElementById("tipsBtn").addEventListener("click", function() {
  const tipsSection = document.getElementById("tipsSection");
  
  // Toggle show/hide
  if (tipsSection.style.display === "none") {
    tipsSection.style.display = "block";
    this.textContent = "Hide Tips & Facts";
  } else {
    tipsSection.style.display = "none";
    this.textContent = "Show Tips & Facts";
  }
});
