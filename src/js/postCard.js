document.addEventListener("astro:page-load", () => {
    const copyButtons = document.querySelectorAll(".copy-btn");

    copyButtons.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            // Prevent the <a> tag from actually navigating away
            e.preventDefault();
            e.stopPropagation();

            const path = btn.getAttribute("data-url") || "";

            // Construct the full URL based on the current domain
            const url = new URL(path, window.location.origin).href;

            try {
                await navigator.clipboard.writeText(url);

                // Show visual feedback (check icon)
                const copyIcon = btn.querySelector(".copy-icon");
                const checkIcon = btn.querySelector(".check-icon");

                if (copyIcon && checkIcon) {
                    copyIcon.style.display = "none";
                    checkIcon.style.display = "block";

                    // Reset after 2 seconds
                    setTimeout(() => {
                        copyIcon.style.display = "block";
                        checkIcon.style.display = "none";
                    }, 2000);
                }
            } catch (err) {
                console.error("Failed to copy link:", err);
                alert("Failed to copy link.");
            }
        });
    });
});
