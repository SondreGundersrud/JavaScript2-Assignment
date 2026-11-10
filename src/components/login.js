// Contains the event listener for the login form
// 2. The Application / Controller Layer
// This layer acts as the "glue" between the UI and the underlying services.
// Responsibility: Orchestrating actions. It responds to user input from the UI layer by calling the appropriate services. When it gets data back, it tells the UI layer what to display.
// What's in it: Event handler functions like onLoginFormSubmit(event) or handleLoadMoreClick(). It contains the main application logic.

const loginForm = document.createElement("form");
loginForm.className = "login-form";

const heading = document.createElement("h2");
heading.textContent = "Login";
loginForm.appendChild(heading);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "name";
nameInput.placeholder = "Username";
loginForm.appendChild(nameInput);

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";
emailInput.placeholder = "Email";
loginForm.appendChild(emailInput);

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.name = "password";
passwordInput.placeholder = "Password";
loginForm.appendChild(passwordInput);

loginForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	const formData = new FormData(loginForm);
	const name = formData.get("name");
	const email = formData.get("email");
	const password = formData.get("password");
});

document.body.appendChild(loginForm);

export default loginForm;

const userDataRequest = {
	name: "my_username", // Required
	email: "first.last@stud.noroff.no", // Required
	password: "UzI1NiIsInR5cCI", // Required
	bio: "This is my profile bio", // Optional
	avatar: {
		url: "https://img.service.com/avatar.jpg", // Optional
		alt: "My avatar alt text", // Optional
	},
	banner: {
		url: "https://img.service.com/banner.jpg", // Optional
		alt: "My banner alt text", // Optional
	},
	venueManager: true, // Optional
};

const userDataResponse = {
	data: {
		name: "my_username",
		email: "first.last@stud.noroff.no",
		bio: "This is my profile bio",
		avatar: {
			url: "https://img.service.com/avatar.jpg",
			alt: "My avatar alt text",
		},
		banner: {
			url: "https://img.service.com/banner.jpg",
			alt: "My banner alt text",
		},
		venueManager: true,
	},
	meta: {},
};
