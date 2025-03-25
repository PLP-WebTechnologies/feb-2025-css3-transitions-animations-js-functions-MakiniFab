document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("animateButton");
    const input = document.getElementById("username");
    const saveBtn = document.getElementById("saveBtn");
    const greeting = document.getElementById("greeting");

    // Retrieve stored name from localStorage
    if (localStorage.getItem("userName")) {
        greeting.textContent = `Hello, ${localStorage.getItem("userName")}!`;
    }

    // Add bounce animation on button click
    button.addEventListener("click", function () {
        button.classList.add("animate");

        // Remove animation after it completes
        setTimeout(() => {
            button.classList.remove("animate");
        }, 500);
    });

    // Store user preference in localStorage
    saveBtn.addEventListener("click", function () {
        const name = input.value.trim();
        if (name) {
            localStorage.setItem("userName", name);
            greeting.textContent = `Hello, ${name}!`;
            input.value = ""; // Clear input field
        }
    });
});