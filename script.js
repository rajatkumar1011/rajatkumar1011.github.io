function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
});
