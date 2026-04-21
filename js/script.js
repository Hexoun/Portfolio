document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        successMessage.classList.add("show");

        form.reset();

        setTimeout(() => {
            successMessage.classList.remove("show");
        }, 3000);
    });
});