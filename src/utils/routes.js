import { renderRegisterForm } from "../components/registerForm.js";
import { renderLoginForm } from "../components/loginForm.js";
import { renderProfilePage } from "../components/profile.js";
import { renderFeedPage } from "../components/feed.js";

export const routes = {
	"/": () => {
		const token = localStorage.getItem("token");
		if (token) {
			window.location.href = "/feed";
		} else {
			window.location.href = "/login";
		}
	},
	"/login": () => {
		window.location.href = "/login";
	},
	"/register": () => {
		window.location.href = "/register";
	},
	"/feed": () => {
		window.location.href = "/feed";
	},
	"/profile": () => {
		window.location.href = "/profile";
	},
};
