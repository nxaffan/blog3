// Smooth scroll to top when clicking "Home"
document.getElementById("homeBtn").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Back to Top Button
let back