// Generic fetch client for all requests
// Documentation: https://docs.noroff.dev/docs/v2

import { load } from "../storage/index.js";

const BASE_URL = "https://v2.api.noroff.dev";
const AUTH = BASE_URL + "/auth/register";
const API_KEY = BASE_URL + "/auth/create-api-key";
const LOGIN = BASE_URL + "/auth/login";
const REGISTER = BASE_URL + "/auth/register";
const POSTS = BASE_URL + "/social/posts";

async function apiClient(endpoint, options = {}) {
	const { body, ...customOptions } = options;
	// const accessToken = load("accessToken");
	const accessToken = localStorage.getItem("accessToken");
	// const apiKey = load("apiKey");
	const apiKey = localStorage.getItem("apiKey");
	const headers = {
		"Content-Type": "application/json",
	};
	if (apiKey) {
		headers["X-Noroff-API-Key"] = apiKey;
	}

	// Add the Authorization header if it exists
	if (accessToken) {
		headers["Authorization"] = `Bearer ${accessToken}`;
	}
	const config = {
		method: body ? "POST" : "GET",
		...customOptions,
		headers: {
			...headers,
			...customOptions.headers,
		},
	};
	if (body) {
		config.body = JSON.stringify(body);
	}
	try {
		const response = await fetch(BASE_URL + endpoint, config);
		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(
				errorData.errors?.[0]?.message ||
					"An API error occurred",
			);
		}
		// If the response has no content (e.g., a 204 No Content), we don't try to parse it
		if (response.status === 204) {
			return null;
		}
		return await response.json();
	} catch (error) {
		console.error("API Client Error:", error);
		// Re-throw the error so the calling code can handle it
		throw error;
	}
}
// Now we can export helper methods
export const get = (endpoint) => apiClient(endpoint);
export const post = (endpoint, body) =>
	apiClient(endpoint, { body });
export const put = (endpoint, body) =>
	apiClient(endpoint, { method: "PUT", body });
export const del = (endpoint) =>
	apiClient(endpoint, { method: "DELETE" });
