import { BASE_URL } from "./apiUrl.js";

const TOKEN_KEY = "accessToken";
const USER_KEY = "user";

export function isLoggedIn() {
	return Boolean(sessionStorage.getItem(TOKEN_KEY));
}
export function getToken() {
	return sessionStorage.getItem(TOKEN_KEY);
}
export function getCurrentUser() {
	const userJson = sessionStorage.getItem(USER_KEY);
	return userJson ? JSON.parse(userJson) : null;
}

async function apiFetch(endpoint, options = {}) {
	const url = `${BASE_URL}${endpoint}`;
	const token = localStorage.getItem("accessToken");
	const headers = {
		"Content-Type": "application/json",
		"X-Noroff-API-Key": API_KEY,
	};
	if (token) {
		headers["Authorization"] = `Bearer ${token}`;
	}
	const response = await fetch(url, {
		...options,
		headers: {
			...headers,
			...options.headers,
		},
	});
	const data = await response.json();
	if (!response.ok) {
		const apiMessage =
			data?.errors?.[0]?.message ??
			"An unknown error occurred";
		throw new Error(apiMessage);
	}
	return data;
}

export async function get(endpoint) {
	return apiFetch(endpoint);
}

export async function post(endpoint, body) {
	return apiFetch(endpoint, {
		method: "POST",
		body: JSON.stringify(body),
	});
}
