import { get } from "./api/apiClient.js";

async function displayUserProfile(id) {
	try {
		const profile = await get(`/social/profiles/${id}`);
		// ... render profile
	} catch (error) {
		// The error from the apiClient is already descriptive
		console.error(error.message);
	}
}

// In posts.js (after creating the service)
import { post } from "./js/api.js";

async function createNewPost(postData) {
	try {
		const newPost = await post("/social/posts", postData);
		// ... do something with new post
	} catch (error) {
		console.error(error.message);
	}
}
