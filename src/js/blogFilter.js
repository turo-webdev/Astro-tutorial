document.addEventListener("astro:page-load", () => {
    const filters = document.querySelectorAll(".category-pill");
    const cards = document.querySelectorAll(".am-card");

    filters.forEach((filterBtn) => {
        filterBtn.addEventListener("click", () => {
            // Remove active class from all buttons
            filters.forEach((btn) => btn.classList.remove("active"));
            // Add active class to clicked button
            filterBtn.classList.add("active");

            // Get category string from the clicked button
            const category = filterBtn.getAttribute("data-filter");

            // Instantly loop through cards and toggle visibility
            cards.forEach((card) => {
                const el = card;
                if (category === "all" || card.getAttribute("data-category") === category) {
                    el.style.display = "flex";
                    // Optionally add an entrance animation here by toggling an opacity class
                } else {
                    el.style.display = "none";
                }
            });
        });
    });
});
