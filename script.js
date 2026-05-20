const header = document.querySelector(".site-header");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });
}

const contactForm = document.querySelector('form[name="contact"]');

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    formData.set("form-name", "contact");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      window.location.href = "/success.html";
    } catch (error) {
      console.error(error);
      alert("Sorry, something went wrong. Please email hello@retfordhall.co.uk directly.");
    }
  });
}