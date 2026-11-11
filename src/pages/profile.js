// A valid user ID
import { BASE_URL } from "../api/apiClient.js";
import { get } from "./services/apiClient.js";

async function displayUserProfile(id) {
	try {
		const profile = await get(`/social/profiles/${id}`);
		// ... render profile
	} catch (error) {
		// The error from the apiClient is already descriptive
		console.error(error.message);
	}
}

import { post } from "./services/apiClient.js";

async function createNewPost(postData) {
	try {
		const newPost = await post("/social/posts", postData);
		// ... do something with new post
	} catch (error) {
		console.error(error.message);
	}
}

const fetchUserDetails = fetch(
	`${BASE_URL}/auth/profiles/noroff`,
);

async function displayUserProfile(id) {
	try {
		const response = await fetch(
			`https://v2.api.noroff.dev/social/profiles/${id}`,
		);
		if (!response.ok) {
			throw new Error("Could not fetch profile");
		}
		const profile = await response.json();
		// ... render profile
	} catch (error) {
		console.error(error);
	}
}

export async function loadProfilePage() {
	try {
		const results = await Promise.allSettled([
			fetchUserDetails,
			fetchUserPosts,
		]);

		const userDetailsResult = results[0];
		const postsResult = results[1];

		if (userDetailsResult.status === "fulfilled") {
			const response = userDetailsResult.value;
			if (!response.ok)
				throw new Error("Failed to fetch user details");
			const data = await response.json();
			// Render user details to the page
			console.log("User details loaded:", data);
		} else {
			// Handle critical failure: cannot render the page without user details
			console.error(
				"Could not load user details:",
				userDetailsResult.reason,
			);
			document.body.innerHTML =
				"<h1>Error: Could not load user profile.</h1>";
			return;
		}

		if (postsResult.status === "fulfilled") {
			const response = postsResult.value;
			if (!response.ok)
				throw new Error(
					"Posts endpoint returned an error status",
				);
			const data = await response.json();
			// Render user posts to the page
			console.log("Posts loaded:", data);
		} else {
			// Handle non-critical failure: simply log it and don't display the posts section
			console.warn(
				"Could not load user posts:",
				postsResult.reason,
			);
		}
	} catch (error) {
		// This outer catch is for network errors before a promise can even settle
		console.error("A network error occurred:", error);
	}
}

loadProfilePage();
