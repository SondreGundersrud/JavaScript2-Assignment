// Main application entry point and routing

import "./style.css";
import { Router } from "./js/Router.js";
import { routes } from "./js/routes.js";
import { loginForm } from "./js/login.js";
// import other stuff here

// Global logic, as in is the user auth'd? Check storage etc.

const container = document.getElementById("app");
container.innerHTML = "<h1>Welcome to the FunSial</h1>";

import { Router } from "./js/Router.js";
import { routes } from "./js/routes.js";

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
