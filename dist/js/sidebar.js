
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-btnn");
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.getElementById("hamburger");
    const closeSidebar = document.getElementById("close-sidebar");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("-translate-x-full");
        hamburger.classList.toggle("hidden");
        closeSidebar.classList.toggle("hidden");
    });
});
