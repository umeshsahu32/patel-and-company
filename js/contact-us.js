document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from default submission

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.textContent = "Submitting...";

    // Form Validation (Phone Number)
    const phoneInput = document.getElementById("phone");
    if (phoneInput.value.length > 10) {
      alert("Phone number cannot exceed 10 digits.");
      submitBtn.textContent = "Send Message";
      return;
    }

    // Gather form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };

    // Console Log the data
    console.log(formData);

    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      submitBtn.textContent = "Form is submitted, Thank you!";

      // Reset the form after successful submission
      document.getElementById("contactForm").reset();

      setTimeout(() => {
        submitBtn.textContent = "Send Message";
      }, 3000); // Reset button text after 3 seconds
    }, 2000); // Simulate 2-second delay for submission
  });
