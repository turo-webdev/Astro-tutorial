// Replace this with your actual Webhook URL (Make, Zapier, Discord, etc.)
const WEBHOOK_URL = "https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN";

const form = document.getElementById("webhookForm");
const statusEl = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Basic UI loading state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    statusEl.textContent = "";
    statusEl.className = "form-status";

    try {
        // Send the data via POST request
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // Formatting for Discord webhook as an example.
                // If using Zapier/Make, you can just send JSON.stringify(data)
                content: `**New Message**\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
            }),
        });

        // Many webhooks return 204 No Content for success, some return 200.
        if (response.ok) {
            statusEl.textContent = "Message sent successfully!";
            statusEl.classList.add("success");
            form.reset();
        } else {
            throw new Error("Failed to send message.");
        }
    } catch (error) {
        console.error(error);
        statusEl.textContent = "Error sending message. Please try again.";
        statusEl.classList.add("error");
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
    }
});
