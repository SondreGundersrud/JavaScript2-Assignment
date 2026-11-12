// Reusable save(), load(), remove() functions

import { get } from "./api/apiClient.js";

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

const postsEndpoint = "/feed";

export function getAllposts() {
	return get(postsEndpoint);
}

export function getpostById(id) {
	return get(`${postsEndpoint}/${id}`);
}

export function getRandompost() {
	return get(`${postsEndpoint}/random`);
}
