// Handles creating, reading, updating posts
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
