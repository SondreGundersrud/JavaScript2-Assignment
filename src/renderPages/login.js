import { post } from "../api/auth.js";

export function renderLoginForm() {
	return `
        <form id="login-form" class="form" method="POST">
            <h2>Login</h2>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" pattern="^[\w\-.]+@(stud\.)?noroff\.no$" title="Email must contain @stud.noroff.no" required />

            <label for="password">Password (min 8 chars):</label>
            <input type="password" id="password" name="password" minlength="8" required />

            <button type="submit">Login</button>
        </form>
    `;
}

export function attachLoginListener(onLoginSuccess) {
	const loginForm = document.querySelector("#login-form");
	if (!loginForm) return;

	loginForm.addEventListener("submit", async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const email = formData.get("email");
		const password = formData.get("password");

		const loggedIn = await login(email, password);
		if (loggedIn && typeof onLoginSuccess === "function") {
			onLoginSuccess();
		}
	});
}

export async function login(email, password) {
	const credentials = { email, password };
	try {
		const response = await post("/auth/login", credentials);
		const accessToken = response.data.accessToken;
		localStorage.setItem("accessToken", accessToken);
		console.log(
			"Logged in successfully. Token saved to localStorage.",
		);
		return true;
	} catch (error) {
		console.error("Login failed:", error.message);
		return false;
	}
}

/**
 * Registers a click handler on the logout button.
 * When clicked, it removes the access token and redirects to the login page.
 * Does nothing if no element with the ID "logout" exists.
 *
 * @returns {void}
 */
export function logout() {
	const logoutButton = document.querySelector("#logout");
	if (!logoutButton) return;

	logout.addEventListener("click", (event) => {
		event.preventDefault();
		localStorage.removeItem("accessToken");
		window.location.replace("/login");
		console.log(
			"User has been logged out. Token removed from localStorage. User directed to login page.",
		);
	});
}
