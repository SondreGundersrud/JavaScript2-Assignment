// Main application entry point and routing

import "./style.css";
import {
	renderRegisterForm,
	onRegisterFormSubmit,
} from "./components/registerForm.js";
import {
	renderLoginForm,
	onLoginFormSubmit,
} from "./components/loginForm.js";
import {
	loadProfilePage,
	displayUserProfile,
	createNewPost,
} from "./components/profile.js";
import { Router } from "./utils/Router.js";
import { routes } from "./utils/routes.js";
import { get } from "./api/authService.js";

// Import auth functions
import { login, logout } from "./storage/index.js";

// Test login — replace with a valid registered Noroff account
await login("your@email.com", "yourPassword");

// Inspect localStorage in DevTools > Application > Local Storage to see the token

// Then test logout
logout();

// Get the element where content will be rendered
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
