// In posts.js (after creating the service)
import { post } from "./js/api.js";

/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} - The sum of the two numbers.
 * @example
 *

js
 * const result = add(5, 10);
 * // expected result: 15
 * ```
 */
async function createNewPost(postData) {
	try {
		const newPost = await post("/social/posts", postData);
		// ... do something with new post
	} catch (error) {
		console.error(error.message);
	}
}
