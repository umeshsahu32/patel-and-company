// document.addEventListener("DOMContentLoaded", () => {
//   const slides = document.querySelectorAll(".slide");
//   const dots = document.querySelectorAll(".dot");
//   let currentSlide = 0;
//   let isScrolling = false;
//   let autoPlayInterval;
//   let userInteracted = false;

//   function changeSlide(index) {
//     if (index < 0 || index >= slides.length) return;

//     slides[currentSlide].classList.remove("active");
//     dots[currentSlide].classList.remove("active");

//     currentSlide = index;

//     slides[currentSlide].classList.add("active");
//     dots[currentSlide].classList.add("active");
//   }

//   function startAutoPlay() {
//     stopAutoPlay();
//     autoPlayInterval = setInterval(() => {
//       if (!userInteracted) {
//         changeSlide(currentSlide + 1);
//       }
//     }, 3000);
//   }

//   function stopAutoPlay() {
//     clearInterval(autoPlayInterval);
//   }

//   function resetUserInteraction() {
//     setTimeout(() => {
//       userInteracted = false;
//       startAutoPlay();
//     }, 5000);
//   }

//   function preventPageScroll(event) {
//     event.preventDefault();
//   }

//   function enablePageScroll() {
//     document.removeEventListener("wheel", preventPageScroll, {
//       passive: false,
//     });
//     document.removeEventListener("touchmove", preventPageScroll, {
//       passive: false,
//     });
//   }

//   function disablePageScroll() {
//     document.addEventListener("wheel", preventPageScroll, { passive: false });
//     document.addEventListener("touchmove", preventPageScroll, {
//       passive: false,
//     });
//   }

//   function handleScroll(event) {
//     if (isScrolling) return;

//     const direction = event.deltaY > 0 ? 1 : -1;

//     if (
//       (direction === 1 && currentSlide < slides.length - 1) ||
//       (direction === -1 && currentSlide > 0)
//     ) {
//       event.preventDefault();
//       disablePageScroll();
//       userInteracted = true;
//       stopAutoPlay();
//       isScrolling = true;

//       changeSlide(currentSlide + direction);

//       setTimeout(() => {
//         isScrolling = false;
//       }, 500);
//       resetUserInteraction();
//     } else if (direction === 1 && currentSlide === slides.length - 1) {
//       enablePageScroll(); // Allow page scroll after last slide
//     } else if (direction === -1 && currentSlide === 0) {
//       enablePageScroll(); // Allow page scroll when going back up from the first slide
//     }
//   }

//   let touchStartY;

//   function handleTouchMove(event) {
//     if (!touchStartY) return;

//     const touchEndY = event.touches[0].clientY;
//     const diff = touchStartY - touchEndY;
//     const direction = diff > 0 ? 1 : -1;

//     if (
//       (direction === 1 && currentSlide < slides.length - 1) ||
//       (direction === -1 && currentSlide > 0)
//     ) {
//       event.preventDefault();
//       disablePageScroll();
//       changeSlide(currentSlide + direction);
//       touchStartY = null;
//       resetUserInteraction();
//     } else if (direction === 1 && currentSlide === slides.length - 1) {
//       enablePageScroll(); // Allow page scroll after last slide
//     } else if (direction === -1 && currentSlide === 0) {
//       enablePageScroll(); // Allow page scroll when going back up from the first slide
//     }
//   }

//   dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//       userInteracted = true;
//       stopAutoPlay();
//       changeSlide(index);
//       resetUserInteraction();
//     });
//   });

//   document.addEventListener("wheel", handleScroll, { passive: false });
//   document.addEventListener("touchstart", (e) => {
//     userInteracted = true;
//     stopAutoPlay();
//     touchStartY = e.touches[0].clientY;
//   });
//   document.addEventListener("touchmove", handleTouchMove, { passive: false });

//   startAutoPlay();

//   document.addEventListener("visibilitychange", () => {
//     if (document.visibilityState === "visible") {
//       userInteracted = false;
//       startAutoPlay();
//     } else {
//       stopAutoPlay();
//     }
//   });

//   disablePageScroll(); // Ensure page scrolling is disabled when slider starts
// });

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  let isScrolling = false;
  let autoPlayInterval;
  let userInteracted = false;

  function changeSlide(index, loop = false) {
    if (!loop && (index < 0 || index >= slides.length)) return;

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    if (loop) {
      if (index >= slides.length) {
        index = 0; // Restart from first slide
      } else if (index < 0) {
        index = slides.length - 1; // Go to last slide
      }
    }

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(() => {
      if (!userInteracted) {
        changeSlide(currentSlide + 1, true); // Loop enabled in autoplay
      }
    }, 3000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  function resetUserInteraction() {
    setTimeout(() => {
      userInteracted = false;
      startAutoPlay();
    }, 5000);
  }

  function preventPageScroll(event) {
    event.preventDefault();
  }

  function enablePageScroll() {
    document.removeEventListener("wheel", preventPageScroll, {
      passive: false,
    });
    document.removeEventListener("touchmove", preventPageScroll, {
      passive: false,
    });
  }

  function disablePageScroll() {
    document.addEventListener("wheel", preventPageScroll, { passive: false });
    document.addEventListener("touchmove", preventPageScroll, {
      passive: false,
    });
  }

  function handleScroll(event) {
    if (isScrolling) return;

    const direction = event.deltaY > 0 ? 1 : -1;

    if (
      (direction === 1 && currentSlide < slides.length - 1) ||
      (direction === -1 && currentSlide > 0)
    ) {
      event.preventDefault();
      disablePageScroll();
      userInteracted = true;
      stopAutoPlay();
      isScrolling = true;

      changeSlide(currentSlide + direction, false);

      setTimeout(() => {
        isScrolling = false;
      }, 500);
      resetUserInteraction();
    } else if (direction === 1 && currentSlide === slides.length - 1) {
      enablePageScroll();
    } else if (direction === -1 && currentSlide === 0) {
      enablePageScroll();
    }
  }

  let touchStartY;

  function handleTouchMove(event) {
    if (!touchStartY) return;

    const touchEndY = event.touches[0].clientY;
    const diff = touchStartY - touchEndY;
    const direction = diff > 0 ? 1 : -1;

    if (
      (direction === 1 && currentSlide < slides.length - 1) ||
      (direction === -1 && currentSlide > 0)
    ) {
      event.preventDefault();
      disablePageScroll();
      changeSlide(currentSlide + direction, false);
      touchStartY = null;
      resetUserInteraction();
    } else if (direction === 1 && currentSlide === slides.length - 1) {
      enablePageScroll();
    } else if (direction === -1 && currentSlide === 0) {
      enablePageScroll();
    }
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      userInteracted = true;
      stopAutoPlay();
      changeSlide(index);
      resetUserInteraction();
    });
  });

  document.addEventListener("wheel", handleScroll, { passive: false });
  document.addEventListener("touchstart", (e) => {
    userInteracted = true;
    stopAutoPlay();
    touchStartY = e.touches[0].clientY;
  });
  document.addEventListener("touchmove", handleTouchMove, { passive: false });

  startAutoPlay();

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      userInteracted = false;
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
  });

  disablePageScroll();
});
