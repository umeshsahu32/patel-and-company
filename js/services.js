const serviceImages = [
  "../assets/services-img-1.jpg",
  "../assets/services-img-2.jpg",
  "../assets/services-img-3.jpg",
  "../assets/services-img-4.jpg",
  "../assets/services-img-5.jpg",
  "../assets/services-img-6.jpg",
  "../assets/services-img-7.jpg",
];

function createServiceSlider() {
  const slider = document.getElementById("furniture-slider");

  // Create first set of logos
  serviceImages.forEach((logo) => {
    const slide = document.createElement("div");
    slide.className = "furniture-image";
    const img = document.createElement("img");
    img.src = logo;
    img.alt = "Company Logo";
    slide.appendChild(img);
    slider.appendChild(slide);
  });

  // Clone logos for seamless infinite scroll
  serviceImages.forEach((logo) => {
    const slide = document.createElement("div");
    slide.className = "furniture-image";
    const img = document.createElement("img");
    img.src = logo;
    img.alt = "Company Logo";
    slide.appendChild(img);
    slider.appendChild(slide);
  });
}

// Initialize the slider
createServiceSlider();

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".sustainability-img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentImageIndex = 0;

  function showImage(index) {
    images.forEach((img) => {
      img.classList.remove("active");
    });
    images[index].classList.add("active");
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }

  // Event listeners
  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

  // Optional: Auto-play functionality
  // let autoPlayInterval;

  // function startAutoPlay() {
  //   autoPlayInterval = setInterval(nextImage, 5000); // Change image every 5 seconds
  // }

  // function stopAutoPlay() {
  //   clearInterval(autoPlayInterval);
  // }

  // Start autoplay
  // startAutoPlay();

  // Pause autoplay on hover
  const imageContainer = document.querySelector(
    ".sustainability-image-container"
  );
  imageContainer.addEventListener("mouseenter", stopAutoPlay);
  imageContainer.addEventListener("mouseleave", startAutoPlay);
});
