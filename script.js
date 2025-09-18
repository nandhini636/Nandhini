// Toggle Recipe Details
function toggleDetails(id) {
  const details = document.getElementById(id);
  if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}

// Search Recipes
function searchRecipe() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    if (title.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// Handle Contact Form (frontend only)
function submitForm(event) {
  event.preventDefault();
  alert("Thank you! Your message has been submitted.");
}