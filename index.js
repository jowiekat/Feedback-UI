// Get all rating elements and the button element from the HTML document
const ratingElements = document.querySelectorAll(".rating");
const buttonElement = document.getElementById("btn");

// Get the container element where the feedback message will be displayed
const containerElement = document.getElementById("container");

// Initialize a variable to store the selected rating
let selectedRating = "";

// Add a click event listener to each rating element
ratingElements.forEach((ratingElement) => {
  ratingElement.addEventListener("click", (event) => {
    // Remove the "active" class from all rating elements
    removeActiveClass();

    // Set the selected rating to the text content of the clicked element or its parent
    selectedRating = event.target.innerText || event.target.parentNode.innerText;

    // Add the "active" class to the clicked element and its parent
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

// Add a click event listener to the button element
buttonElement.addEventListener("click", () => {
  // If a rating has been selected, display a thank you message with the rating
  if (selectedRating !== "") {
    containerElement.innerHTML = `
      <strong>Thank you!</strong>
      <br>
      <br>
      <strong>Feedback: ${selectedRating}</strong>
      <p>We'll use your feedback to improve our customer support.</p>
    `;
  }
});

// Helper function to remove the "active" class from all rating elements
function removeActiveClass() {
  ratingElements.forEach((ratingElement) => {
  ratingElement.classList.remove("active");
  });
}
