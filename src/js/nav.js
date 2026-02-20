// Minimal Javascript to toggle mobile menu
document.addEventListener("astro:page-load", () => {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");

    toggle?.addEventListener("click", () => {
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isExpanded));
        links?.classList.toggle("active");
        toggle.classList.toggle("active");
    });
});
