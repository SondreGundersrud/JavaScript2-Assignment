// A function that renders a single post card
import { post } from "../api/auth.js";

export async function singlePostCard({ singlePostCard }) {
	return `
    <div class="post-card">
    <img src="${singlePostCard.image}" alt="${posts.title}" />
	<h2>${posts.title}</h2>
    <p>${posts.description}</p>
    </div>
`;
}

export async function createNewPost(postData) {
	try {
		const newPost = await post("/social/posts", postData);
		// ... do something with new post
	} catch (error) {
		console.error(error.message);
	}
}

// A function that renders a single post card
export async function renderPosts(posts) {
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
