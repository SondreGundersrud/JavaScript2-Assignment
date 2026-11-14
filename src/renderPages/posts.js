// A function that renders a single post card
import { post } from "../api/apiClient.js";

export function PostCard({ singlePostCard }) {
	return `
    <div class="post-card">
    <img src="${singlePostCard.image}" alt="${posts.title}" />
	<h2>${posts.title}</h2>
    <p>${posts.description}</p>
    </div>
`;
}

async function createNewPost(postData) {
	try {
		const newPost = await post("/social/posts", postData);
		// ... do something with new post
	} catch (error) {
		console.error(error.message);
	}
}

async function getParallelDataEfficiently() {
	console.time("EfficientParallel");
	console.log("Starting user and product fetches...");

	// Start both operations without awaiting them
	const userPromise = fetchUser(1);
	const productsPromise = fetchProducts();

	// Now, wait for both to finish in parallel
	const [user, products] = await Promise.all([
		userPromise,
		productsPromise,
	]);

	console.log("Both fetches have completed.");
	console.timeEnd("EfficientParallel"); // Total time: ~1000ms (the duration of the longest promise)
	return { user, products };
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

export {
	getParallelDataEfficiently,
	createNewPost,
	renderPosts,
};
