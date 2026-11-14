import { get, post } from "..api/auth.js";
import { POSTS } from "./api/apiUrl.js";

// login sends credentials to the API and stores the returned accessToken
export async function login(email, password) {
	const credentials = { email, password };
	try {
		const response = await post("/auth/login", credentials);
		const accessToken = response.data.accessToken;
		sessionStorage.setItem("accessToken", accessToken);
		console.log(
			"Logged in successfully. Token saved to localStorage.",
		);
	} catch (error) {
		console.error("Login failed:", error.message);
	}
}

export function logout() {
	sessionStorage.removeItem("accessToken");
	console.log(
		"User has been logged out. Token removed from localStorage.",
	);
}
