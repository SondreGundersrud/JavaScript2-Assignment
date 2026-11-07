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
