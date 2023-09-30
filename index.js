function validateAndRedirect() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim(); // Trim removes leading/trailing spaces

    // Regular expression for email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(email)) {
        // If the email is valid, redirect to the Netflix URL with the email query parameter
        window.location.href = `https://www.netflix.com/in/login`;
    } else {
        // If the email is not valid, you can provide feedback to the user or take other actions.
        alert('Please enter a valid email address.');
    }
}

        let accordions = document.querySelectorAll(".FAQ-title");

        accordions.forEach(function (accordion) {
            accordion.addEventListener("click", function () {
                let icon = this.querySelector("i");
                icon.classList.toggle("fa-plus");
                icon.classList.toggle("fa-times");

                let content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });