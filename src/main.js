// Main application entry point and routing

import "./style.css";
import {
	renderRegisterForm,
	onRegisterFormSubmit,
} from "./renderPages/register.js";
import {
	isAuthenticated,
	renderLoginForm,
	attachLoginListener,
} from "./renderPages/login.js";
import {
	loadProfilePage,
	renderProfilePage,
} from "./renderPages/profile.js";
import { handleRoute, Router } from "./utils/Router.js";
import { routes } from "./utils/routes.js";
import { get } from "./api/auth.js";

/** The root element where routed page content is rendered.
 * @constant
 * @type {HTMLElement | null}
 */
const contentElement =
	document.getElementById("app-content");

// Create an instance of our Router
const router = new Router(routes, contentElement);

// Handle initial page load
router.resolveRoute();

// Hijack link clicks
document.querySelectorAll("nav a").forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();
		const path = event.target.getAttribute("href");
		router.navigate(path);
	});
});
