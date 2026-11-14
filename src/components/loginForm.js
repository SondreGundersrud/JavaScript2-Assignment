function renderLoginForm() {
	const container = document.querySelector("#app-content");
	if (!container) return;
	container.innerHTML = `
		<form id="login-form" class="form" method="POST">
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
