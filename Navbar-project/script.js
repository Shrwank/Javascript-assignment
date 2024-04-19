const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// Adding event listener to the navigation toggle button
navToggle.addEventListener("click", function () {
  // Logging all classes of the links element
  console.log(links.classList);

  // Checking if the links element contains a specific class
  console.log(links.classList.contains("random"));
  console.log(links.classList.contains("links"));

  // Toggling the 'show-links' class on the links element
  links.classList.toggle("show-links");
});
