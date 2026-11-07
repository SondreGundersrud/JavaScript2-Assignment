// Handles creating, reading, updating posts
apiClient.post("/social/posts", postData);

async function fetchAllPosts() {
	const response = await fetch(
		"https://v2.api.noroff.dev/social/posts",
	);
	return response.json();
}

async function displayPosts() {
	const postsResponse = await fetchAllPosts();
	const sorted = sortPostsByDate(postsResponse.data);
	renderPosts(sorted);
}
