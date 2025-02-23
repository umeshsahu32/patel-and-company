// const hamburger = document.querySelector(".hamburger");
// const sidebar = document.querySelector(".sidebar");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   sidebar.classList.toggle("active");
// });

// // Close sidebar when clicking outside
// document.addEventListener("click", (e) => {
//   if (!hamburger.contains(e.target) && !sidebar.contains(e.target)) {
//     hamburger.classList.remove("active");
//     sidebar.classList.remove("active");
//   }
// });

// // Close sidebar when clicking a link
// const sidebarLinks = document.querySelectorAll(".sidebar a");
// sidebarLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     sidebar.classList.remove("active");
//   });
// });

const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");

// Your existing hamburger click event stays the same
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
});

// Add close button click event
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  hamburger.classList.remove("active");
});

// Keep your existing click outside event
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !sidebar.contains(e.target)) {
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
  }
});

// Keep your existing sidebar links click event
const sidebarLinks = document.querySelectorAll(".sidebar a");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
  });
});
