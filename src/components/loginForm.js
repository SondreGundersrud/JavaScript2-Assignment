// Contains the event listener for the login form
function renderLoginForm() {
	const container = document.querySelector("#app-content");
	if (!container) return;
	container.innerHTML = `
		<form id="login-form" class="form" method="POST">
			// const container = document.getElementById("app");
			<h2>Login</h2>

			<label for="email">Email:</label> 
            <input type="email" id="email" name="email" pattern="^[\w\-.]+@(stud\.)?noroff\.no$" title="Email must contain @stud.noroff.no" required />

			<label for="password">Password (min 8 chars):</label>
			<input type="password" id="password" name="password" minlength="8" required />

			<button type="submit">Login</button>
		</form>
	`;
	const loginForm = document.querySelector("#login-form");
	loginForm.addEventListener("submit", onLoginFormSubmit);
	console.log(
		"Login form rendered and event listener attached.",
	);
}

async function onLoginFormSubmit(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const email = formData.get("email");
	const password = formData.get("password");
	console.log({ email, password });
}

export { renderLoginForm, onLoginFormSubmit };

// const loginForm = document.createElement("form");
// loginForm.className = "login-form";

// const heading = document.createElement("h2");
// heading.textContent = "Login";
// loginForm.appendChild(heading);

// const nameInput = document.createElement("input");
// nameInput.type = "text";
// nameInput.name = "name";
// nameInput.placeholder = "Username";
// loginForm.appendChild(nameInput);

// const emailInput = document.createElement("input");
// emailInput.type = "email";
// emailInput.name = "email";
// emailInput.placeholder = "Email";
// loginForm.appendChild(emailInput);

// const passwordInput = document.createElement("input");
// passwordInput.type = "password";
// passwordInput.name = "password";
// passwordInput.placeholder = "Password";
// loginForm.appendChild(passwordInput);

// loginForm.addEventListener("submit", async (event) => {
// 	event.preventDefault();
// 	const formData = new FormData(loginForm);
// 	const name = formData.get("name");
// 	const email = formData.get("email");
// 	const password = formData.get("password");
// });

// document.body.appendChild(loginForm);
