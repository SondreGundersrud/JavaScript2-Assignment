import { renderRegisterForm } from "../pages/register.js";
import { renderLoginForm } from "../pages/login.js";
import { renderProfilePage } from "../pages/profile.js";
import { renderFeedPage } from "../pages/feed.js";

export const routes = {
	"/": () => {
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) {
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
