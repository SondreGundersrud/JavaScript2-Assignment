function renderRegisterForm() {
	const container = document.querySelector("#app-content");
	if (!container) return;
	container.innerHTML = `
		<form id="register-form" method="POST">
			<h2>Register</h2>

            <label for="username">Username (max 15 chars):</label>
			<input type="text" id="username" name="name" minlength="5" maxlength="15" pattern="^[a-zA-Z_]+$" title="Username must be between 5 and 15 characters long and can only contain letter sand underscores." required/>

			<label for="email">Email:</label> 
            <input type="email" id="email" name="email" pattern="^[\\w\\-.]+@stud\\.noroff\\.no$" title="Email must contain @stud.noroff.no" required />

			<label for="password">Password (min 8 chars):</label>
			<input type="password" id="password" name="password" minlength="8" required />

			<button type="submit">Register</button>
		</form>
	`;
	const registerForm = document.querySelector(
		"#register-form",
	);
	registerForm.addEventListener(
		"submit",
		onRegisterFormSubmit,
	);
	console.log(
		"Register form rendered and event listener attached.",
	);
}

async function onRegisterFormSubmit(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const name = formData.get("name");
	const email = formData.get("email");
	const password = formData.get("password");
	console.log({ name, email, password });
}

export { renderRegisterForm, onRegisterFormSubmit };
