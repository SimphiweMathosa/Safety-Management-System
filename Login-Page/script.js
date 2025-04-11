document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".form-box.login form");
    const emailInput = loginForm.querySelector("input[type='email']");
    const passwordInput = loginForm.querySelector("input[type='password']");
    const aviationIdInput = loginForm.querySelectorAll("input[type='password']")[1];
    const loginButton = loginForm.querySelector(".btn");

    // Backend API endpoint for getting user data
    const apiEndpoint = "https://your-api-url/api/users"; // Replace with your actual endpoint

    loginButton.addEventListener("click", async (event) => {
        event.preventDefault();

        // Fetching user inputs
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const aviationId = aviationIdInput.value.trim();

        // Validate inputs
        if (!email || !password || !aviationId) {
            alert("Please fill in all the fields.");
            return;
        }

        try {
            // Fetch users from the backend
            const response = await fetch(apiEndpoint, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch users. Please try again later.");
            }

            const users = await response.json();

            // Validate login details
            const user = users.find(
                u => u.email === email && u.password === password && u.aviationId === aviationId
            );

            if (user) {
                alert("Login successful!");
                // Redirect to the dashboard or another page
                window.location.href = "/dashboard.html"; // Adjust the redirect URL
            } else {
                alert("Invalid login details. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while trying to log in. Please try again later.");
        }
    });
});
