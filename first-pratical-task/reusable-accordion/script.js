const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";

    accordionHeaders.forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.nextElementSibling.style.maxHeight = null;
      btn.nextElementSibling.setAttribute("aria-hidden", "true");
      btn.querySelector(".icon").textContent = "+";
    });

    if (!expanded) {
      button.setAttribute("aria-expanded", "true");
      const content = button.nextElementSibling;
      content.setAttribute("aria-hidden", "false");
      content.style.maxHeight = content.scrollHeight + "px";
      button.querySelector(".icon").textContent = "−";
    }
  });

  // Keyboard accessiblity
  button.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      button.click();
    }
  });
});
