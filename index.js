// Open navbar
const nav_btn = document.querySelector(".toggle a");
const dropdown_menu = document.querySelector(".menu");

nav_btn.addEventListener("click", handleOpenNavbar);

// Handle open navbar
function handleOpenNavbar() {
  dropdown_menu.classList.toggle("active");
}

// Show elements when scrolled down to

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    //
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      reveals[i].classList.add("scale_100");
      reveals[i].classList.add("bar_fill");
    }
    // else {
    //   reveals[i].classList.remove("active");
    // }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
