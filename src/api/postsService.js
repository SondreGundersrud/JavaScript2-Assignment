// Handles creating, reading, updating, and deleting posts
const postsEndpoint = "/feed";
async function fetchAllPosts() {
	const response = await fetch(POSTS);
	return response.json();
}

async function displayPosts() {
	const postsResponse = await fetchAllPosts();
	const sorted = sortPostsByDate(postsResponse.data);
	renderPosts(sorted);
}

export function getAllPosts() {
	return get(postsEndpoint);
}

export function getPostById(id) {
	return get(`${postsEndpoint}/${id}`);
}
