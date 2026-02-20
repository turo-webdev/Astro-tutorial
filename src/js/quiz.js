document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quizForm");
    const resultSection = document.getElementById("quizResult");
    const resultTitleEl = document.getElementById("resultTitle");
    const recommendedPostEl = document.getElementById("recommendedPost");

    if (!quizForm || !resultSection) return;

    // Read the posts data injected by Astro
    const dataScript = document.getElementById("quiz-data");
    let allPosts = [];
    if (dataScript) {
        try {
            allPosts = JSON.parse(dataScript.textContent || "[]");
        } catch (e) {
            console.error("Could not parse quiz data");
        }
    }

    quizForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(quizForm);

        // Tally up category scores
        const scores = {
            "Frontend": 0,
            "Architecture": 0,
            "Web Development": 0
        };

        for (let [key, value] of formData.entries()) {
            if (scores[value] !== undefined) {
                scores[value]++;
            }
        }

        // Determine the highest score
        let topCategory = "Frontend";
        let maxScore = -1;
        for (const [category, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                topCategory = category;
            }
        }

        // Find the latest post for this category
        // Posts are assumed to be sorted by date descending from Astro
        const recommendedPost = allPosts.find(post => post.frontmatter.category === topCategory) || allPosts[0];

        // Hide form, show results
        quizForm.style.display = "none";
        resultSection.style.display = "flex";

        // Render result text
        resultTitleEl.textContent = `You're a ${topCategory} fan!`;

        if (recommendedPost) {
            recommendedPostEl.innerHTML = `
                <a href="${recommendedPost.url}" class="recommended-card">
                    ${recommendedPost.frontmatter.image ? `<img src="${recommendedPost.frontmatter.image.url}" alt="Cover" class="recommended-img" />` : ''}
                    <div class="recommended-content">
                        <span class="category-tag">${recommendedPost.frontmatter.category}</span>
                        <h3 class="recommended-title">${recommendedPost.frontmatter.title}</h3>
                        <p class="recommended-desc">${recommendedPost.frontmatter.description}</p>
                        <span class="read-more">Read Post &rarr;</span>
                    </div>
                </a>
            `;
        }
    });

    // Reset quiz
    const resetBtn = document.getElementById("resetQuizBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            quizForm.reset();
            resultSection.style.display = "none";
            quizForm.style.display = "block";
        });
    }
});
