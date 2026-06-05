const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.getElementById("contactForm");
const authForm = document.getElementById("authForm");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}

if (authForm) {
  authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formType = authForm.dataset.type || "request";
    const message =
      formType === "signup"
        ? "Account created successfully!"
        : "You are now logged in!";

    alert(message);
    authForm.reset();
  });
}
