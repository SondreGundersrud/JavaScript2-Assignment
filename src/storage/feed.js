// Handles creating, reading, updating posts
import { get } from "./js/api.js";

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

const gamesEndpoint = "/feed";

/**
 * Fetches all old games.
 * @returns {Promise<Array>} A promise that resolves to an array of games.
 */
export function getAllGames() {
	return get(gamesEndpoint);
}

/**
 * Fetches a single game by its ID.
 * @param {string|number} id The ID of the game to fetch.
 * @returns {Promise<Object>} A promise that resolves to the game object.
 */
export function getGameById(id) {
	return get(`${gamesEndpoint}/${id}`);
}

/**
 * Fetches a random old game.
 * @returns {Promise<Object>} A promise that resolves to a random game object.
 */
export function getRandomGame() {
	return get(`${gamesEndpoint}/random`);
}
