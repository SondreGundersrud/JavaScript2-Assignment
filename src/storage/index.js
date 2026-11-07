// Reusable save(), load(), remove() functions

// 1. The UI / View Layer
// This is the part of your application the user sees and interacts with.
// Responsibility: Rendering HTML, applying CSS, and capturing raw user input (like clicks and key presses).
// What's in it: Functions that create and manipulate DOM elements (e.g., renderPostCard()), event listeners that call functions in the layer below.
// It should not: Contain complex application logic or make direct fetch calls.

function sortPostsByDate(posts) {
	return posts.sort(
		(a, b) => new Date(b.created) - new Date(a.created),
	);
}
