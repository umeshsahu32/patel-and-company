// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
  var goToTopBtn = document.getElementById("goToTopBtn");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
