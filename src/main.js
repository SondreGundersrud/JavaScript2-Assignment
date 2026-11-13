// Main application entry point and routing

import "./style.css";
import {
	renderLoginForm,
	onLoginFormSubmit,
} from "./components/loginForm.js";
import {
	renderRegisterForm,
	onRegisterFormSubmit,
} from "./components/registerForm.js";
import { loadProfilePage } from "./components/profile.js";
import { Router } from "./utils/Router.js";
import { routes } from "./utils/routes.js";
import { get } from "./api/apiClient.js";

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

async function getPostDetailsQuickly() {
	console.time("FastParallel");

	// 1. Map the array of IDs to an array of promises.
	// This starts all the fetch requests immediately.
	const postPromises = postIds.map((id) => {
		return fetch(`${BASE_URL}/${id}`).then((response) =>
			response.json(),
		);
	});
	try {
		// 2. Wait for all the promises in the array to resolve.
		const posts = await Promise.all(postPromises);
		const postData = posts.map((g) => g.data);
	} catch (error) {
		console.error("Error fetching post details:", error);
	}
	console.timeEnd("FastParallel"); // Much faster!
	console.log(postData.map((g) => g.name));
	return postData;
}

document
	.createElement("button")
	.addEventListener("click", () => {
		const PostsContainer = document.getElementById(
			"Posts-container",
		);
		const loadMoreButton =
			document.getElementById("load-more-btn");

		// State variable to keep track of the current page
		let currentPage = 1;
		let isFetching = false;

		// Function to fetch a page of Posts and render them
		async function fetchAndRenderPosts(page) {
			isFetching = true;
			loadMoreButton.textContent = "Loading...";
			loadMoreButton.disabled = true;

			try {
				const response = await get(
					`/posts?page=${page}&limit=5`,
				);
				const Posts = response.data;
				const meta = response.meta;

				// Append new Posts to the container
				Posts.forEach((game) => {
					const gameElement = document.createElement("div");
					gameElement.textContent = game.name;
					PostsContainer.appendChild(gameElement);
				});

				// Update the button based on the meta data
				if (meta.isLastPage) {
					loadMoreButton.style.display = "none"; // Hide button if no more pages
				} else {
					loadMoreButton.textContent = "Load More";
					loadMoreButton.disabled = false;
				}
			} catch (error) {
				console.error("Failed to fetch Posts:", error);
				loadMoreButton.textContent =
					"Failed to load. Try again?";
				loadMoreButton.disabled = false;
			} finally {
				isFetching = false;
			}
		}

		// Event listener for the button
		loadMoreButton.addEventListener("click", () => {
			if (!isFetching) {
				currentPage++; // Increment the page number
				fetchAndRenderPosts(currentPage);
			}
		});
	});

// Initial load
fetchAndRenderPosts(currentPage);

// getPostDetailsQuickly();
