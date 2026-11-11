// Reusable save(), load(), remove() functions

// Task: Implement a function called "load" to save data to localStorage/secureStorage

import { get } from "./js/api.js";

// Const apiKey
// const accessToken = load("accessToken");

apiClient.post("/social/posts", postData);

async function fetchAllPosts() {
	const response = await fetch(POSTS);
	return response.json();
}

async function displayPosts() {
	const postsResponse = await fetchAllPosts();
	const sorted = sortPostsByDate(postsResponse.data);
	renderPosts(sorted);
}

// A function that renders a single post card
function renderPosts(posts) {
	const container = document.getElementById(
		"posts-container",
	);
	container.innerHTML = "";
	posts.forEach((post) => {
		const postElement = document.createElement("div");
		postElement.textContent = post.title;
		container.appendChild(postElement);
	});
}

const postsEndpoint = "/feed";

/**
 * Fetches all old posts.
 * @returns {Promise<Array>} A promise that resolves to an array of posts.
 */
export function getAllposts() {
	return get(postsEndpoint);
}

/**
 * Fetches a single post by its ID.
 * @param {string|number} id The ID of the post to fetch.
 * @returns {Promise<Object>} A promise that resolves to the post object.
 */
export function getpostById(id) {
	return get(`${postsEndpoint}/${id}`);
}

/**
 * Fetches a random old post.
 * @returns {Promise<Object>} A promise that resolves to a random post object.
 */
export function getRandompost() {
	return get(`${postsEndpoint}/random`);
}
