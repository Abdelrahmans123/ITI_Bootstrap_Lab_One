(function () {
	"use strict";

	// Fetch the form
	var form = document.querySelector(".needs-validation");

	// Add submit event listener
	form.addEventListener(
		"submit",
		function (event) {
			if (!form.checkValidity()) {
				event.preventDefault();
				event.stopPropagation();
			} else {
				event.preventDefault();
				alert("Login successful! Redirecting to dashboard...");
			}

			form.classList.add("was-validated");
		},
		false
	);
})();
