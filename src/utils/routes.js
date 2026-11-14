import { renderRegisterForm } from "../renderPages/register.js";
import { renderLoginForm } from "../renderPages/login.js";
import { renderProfilePage } from "../renderPages/profile.js";
import { renderFeedPage } from "../renderPages/feed.js";
import { isAuthenticated } from "../renderPages/login.js";

export const routes = {
	"/": () => {
		return isAuthenticated()
			? renderFeedPage()
			: renderLoginForm();
	},
	"/login": () => renderLoginForm(),
	"/register": () => renderRegisterForm(),
	"/feed": () => {
		return isAuthenticated()
			? renderFeedPage()
			: renderLoginForm();
	},
	"/profile": () => {
		return isAuthenticated()
			? renderProfilePage()
			: renderLoginForm();
	},
	// 	const accessToken = localStorage.getItem("accessToken");
	// 	if (accessToken) {
	// 		window.location.href = "/feed";
	// 	} else {
	// 		window.location.href = "/login";
	// 	}
	// },
	// "/login": () => {
	// 	window.location.href = "/login";
	// },
	// "/register": () => {
	// 	window.location.href = "/register";
	// },
	// "/feed": () => {
	// 	window.location.href = "/feed";
	// },
	// "/profile": () => {
	// 	window.location.href = "/profile";
	// },
};
