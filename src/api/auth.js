import { BASE_URL } from "./apiUrl.js";

export async function apiFetch(endpoint, options = {}) {
	const url = `${BASE_URL}${endpoint}`;
	const accessToken = sessionStorage.getItem("accessToken");
	const headers = {
		"Content-Type": "application/json",
		...options.headers,
	};

	if (accessToken) {
		headers["Authorization"] = `Bearer ${accessToken}`;
	}

	const response = await fetch(url, {
		...options,
		headers,
	});

	const rawText = await response.text();
	const data = rawText ? JSON.parse(rawText) : null;

	if (!response.ok) {
		const apiMessage =
			data?.errors?.[0]?.message ??
			`An unknown error occurred. HTTP error: ${response.status}`;
		throw new Error(apiMessage);
	}
	return data;
}

export async function get(endpoint, options = {}) {
	return apiFetch(endpoint, {
		...options,
		method: "GET",
	});
}

export async function post(
	endpoint,
	body = null,
	options = {},
) {
	const fetchOptions = {
		...options,
		method: "POST",
	};

	if (body !== null && body !== undefined) {
		fetchOptions.body = JSON.stringify(body);
	}

	return apiFetch(endpoint, fetchOptions);
}
