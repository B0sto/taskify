document.querySelectorAll(".show").forEach((showBtn, index) => {
    showBtn.addEventListener("click", function () {
        const pass_field = document.querySelectorAll(".pass-key")[index];
        if (pass_field.type === "password") {
            pass_field.type = "text";
            showBtn.textContent = "Hide";
            showBtn.style.color = "#3498db";
        } else {
            pass_field.type = "password";
            showBtn.textContent = "Show";
            showBtn.style.color = "#222";
        }
    });
});


