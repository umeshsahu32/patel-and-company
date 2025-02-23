const logos = [
  "../assets/logos/client-1.jpg",
  "../assets/logos/client-2.jpg",
  "../assets/logos/client-3.jpg",
  "../assets/logos/client-4.jpg",
  "../assets/logos/client-5.jpg",
  "../assets/logos/client-6.jpg",
  "../assets/logos/client-7.jpg",
  "../assets/logos/client-8.jpg",
  "../assets/logos/client-9.jpg",
  "../assets/logos/client-10.jpg",
  "../assets/logos/client-11.jpg",
  "../assets/logos/client-31.png",
  "../assets/logos/client-32.png",
  "../assets/logos/client-33.png",
  "../assets/logos/client-34.png",
  "../assets/logos/client-35.png",
  "../assets/logos/client-36.png",
  "../assets/logos/client-37.png",
  "../assets/logos/client-38.png",
];

function createLogoSlider() {
  const slider = document.getElementById("logoSlider");

  // Create first set of logos
  logos.forEach((logo) => {
    const slide = document.createElement("div");
    slide.className = "logo-slide";
    const img = document.createElement("img");
    img.src = logo;
    img.alt = "Company Logo";
    slide.appendChild(img);
    slider.appendChild(slide);
  });

  // Clone logos for seamless infinite scroll
  logos.forEach((logo) => {
    const slide = document.createElement("div");
    slide.className = "logo-slide";
    const img = document.createElement("img");
    img.src = logo;
    img.alt = "Company Logo";
    slide.appendChild(img);
    slider.appendChild(slide);
  });
}

// Initialize the slider
createLogoSlider();

const galleryItems = [
  {
    image: "../assets/project/project-1.JPG",
    text: "Modern Office Space",
  },
  {
    image: "../assets/project/project-4.JPG",
    text: "Reception Area",
  },
  {
    image: "../assets/project/project-3.JPG",
    text: "Collaborative Space",
  },
  {
    image: "../assets/project/project-2.JPG",
    text: "Meeting Room",
  },
  {
    image: "../assets/project/project-5.JPG",
    text: "Modern Office Space",
  },
  {
    image: "../assets/project/project-7.JPG",
    text: "Reception Area",
  },
  {
    image: "../assets/project/project-6.JPG",
    text: "Collaborative Space",
  },
  {
    image: "../assets/project/project-8.JPG",
    text: "Meeting Room",
  },
  {
    image: "../assets/project/project-9.JPG",
    text: "Modern Office Space",
  },
  {
    image: "../assets/project/project-12.JPG",
    text: "Reception Area",
  },
  {
    image: "../assets/project/project-11.jpeg",
    text: "Collaborative Space",
  },
  {
    image: "../assets/project/project-10.JPG",
    text: "Meeting Room",
  },
];

function createGallery() {
  const grid = document.getElementById("galleryGrid");

  galleryItems.forEach((item) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";

    const image = document.createElement("img");
    image.className = "gallery-image";
    image.src = item.image;
    image.alt = item.text;

    const overlay = document.createElement("div");
    overlay.className = "gallery-overlay";

    const text = document.createElement("div");
    text.className = "gallery-text";
    text.textContent = item.text;

    overlay.appendChild(text);
    galleryItem.appendChild(image);
    galleryItem.appendChild(overlay);
    grid.appendChild(galleryItem);
  });
}

// Initialize the gallery
createGallery();
