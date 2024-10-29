// script.js

document.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll(".slide-text");
  let currentIndex = 0;

  function showNextText() {
    const currentText = textElements[currentIndex];
    const nextIndex = (currentIndex + 1) % textElements.length;
    const nextText = textElements[nextIndex];

    // Slide in current text
    currentText.classList.add("show");
    currentText.classList.remove("hide");

    // Slide out after 2 seconds and show the next text
    setTimeout(() => {
      currentText.classList.add("hide");
      currentText.classList.remove("show");
      
      // Move to the next text
      currentIndex = nextIndex;
      setTimeout(showNextText, 500); // Delay for transition to finish
    }, 1500); // Time each word stays visible
  }

  showNextText(); // Start the loop
});
