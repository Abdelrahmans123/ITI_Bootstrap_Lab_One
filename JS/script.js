(function () {
	"use strict";
	var form = document.querySelector(".needs-validation");
	var loginLink = document.getElementById("loginLink");

	form.addEventListener(
		"submit",
		function (event) {
			if (!form.checkValidity()) {
				event.preventDefault();
				event.stopPropagation();
			} else {
				event.preventDefault();
				// Check if passwords match
				var password = document.getElementById("password");
				var confirmPassword = document.getElementById("confirmPassword");

				if (password.value !== confirmPassword.value) {
					confirmPassword.setCustomValidity("Passwords don't match");
					confirmPassword.reportValidity();
					return;
				} else {
					confirmPassword.setCustomValidity("");
				}
				alert("Registration successful! Redirecting to login page...");
				window.location.href = "login.html";
			}

			form.classList.add("was-validated");
		},
		false
	);

	// Add click event to login link
	loginLink.addEventListener("click", function (e) {
		e.preventDefault();
		window.location.href = "login.html"; // Change to your actual login page URL
	});
})();
