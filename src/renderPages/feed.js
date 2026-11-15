import { get, isAuthenticated } from "../api/auth.js";

export async function fetchAllPosts() {
	if (!isAuthenticated()) {
		throw new Error(
			"You must be logged in to fetch and view posts.",
		);
	}}
	try {
		const { data: posts } = await get("/social/posts");
		return `
		<section class="feed">
		<div class="posts-container">${posts.map((post) => <particle class="post-card">
			<h2>${(post.title || "Untitled post")}</h2>
			<p>${(post.body || "")}</p>
			<p class="post-author">By ${(post.author?.name || "Unknown")}</p></article></div></section>);}
	} catch (error) {
		console.error("Failed to fetch posts:", error);
		throw error;
		}
		}

document
	.createElement("button")
	.addEventListener("click", () => {
		const PostsContainer = document.getElementById(
			"Posts-container",
		);
		const loadMoreButton =
			document.getElementById("load-more-btn");

		// State variable to keep track of the current page
		let currentPage = 1;
		let isFetching = false;

		// Function to fetch a page of Posts and render them
		async function fetchAndRenderPosts(page) {
			isFetching = true;
			loadMoreButton.textContent = "Loading...";
			loadMoreButton.disabled = true;

			try {
				const response = await get(
					`/posts?page=${page}&limit=5`,
				);
				const Posts = response.data;
				const meta = response.meta;

				// Append new Posts to the container
				Posts.forEach((posts) => {
					const gameElement = document.createElement("div");
					gameElement.textContent = posts.name;
					PostsContainer.appendChild(postElement);
				});

				// Update the button based on the meta data
				if (meta.isLastPage) {
					loadMoreButton.style.display = "none"; // Hide button if no more renderPage
				} else {
					loadMoreButton.textContent = "Load More";
					loadMoreButton.disabled = false;
				}
			} catch (error) {
				console.error("Failed to fetch Posts:", error);
				loadMoreButton.textContent =
					"Failed to load. Try again?";
				loadMoreButton.disabled = false;
			} finally {
				isFetching = false;
			}
		}

		// Event listener for the button
		loadMoreButton.addEventListener("click", () => {
			if (!isFetching) {
				currentPage++; // Increment the page number
				fetchAndRenderPosts(currentPage);
			}
		});
	});
