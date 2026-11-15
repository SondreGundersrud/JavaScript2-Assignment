import { BASE_URL, API_KEY } from "./apiUrl.js";

/**
 * @constant
 * @type {string}
 * @default
 */
const ACCESS_TOKEN_STORAGE_KEY = "accessToken";
const API_KEY_STORAGE_KEY = "key";

async function readResponseBody(response) {
	const text = await response.text();
	return text ? JSON.parse(text) : null;
}

function getErrorMessage(data, response) {
	return (
		data?.errors?.[0]?.message ??
		`Request failed with status: ${response.status}`
	);
}

export async function apiKey() {
	const savedKey = localStorage.getItem(API_KEY_STORAGE_KEY);
	if (savedKey) return savedKey;
	const accessToken = localStorage.getItem(
		ACCESS_TOKEN_STORAGE_KEY,
	);
	if (!accessToken) {
		throw new Error(
			"An access token is required to create an API key.",
		);
	}
	const response = await fetch(API_KEY, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const data = await readResponseBody(response);
	if (!response.ok) {
		throw new Error(getErrorMessage(data, response));
	}
	const key = data?.data?.key;
	if (typeof key !== "string" || !key) {
		throw new Error(
			"The API key was missing from the response.",
		);
	}
	localStorage.setItem(API_KEY_STORAGE_KEY, key);
	return key;
}

/**
 * Functions that checks Boolean value of localStorage.
 * Allows other functions to call this function to verify that the localStorage contains a ACCESS_TOKEN_STORAGE_KEY.
 * @type {Boolean}
 * @returns true or false value
 */
export function isAuthenticated() {
	return Boolean(
		localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY),
	);
}

export async function apiFetch(endpoint, options = {}) {
	const response = await fetch(`${BASE_URL}${endpoint}`, {
		...options,
		headers: {
			...options.headers,
			...(localStorage.getItem(API_KEY_STORAGE_KEY) && {
				"X-Noroff-API-Key": localStorage.getItem(
					API_KEY_STORAGE_KEY,
				),
			}),
			...(localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY) && {
				Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)}`,
			}),
		},
	});

	const data = await readResponseBody(response);

	if (!response.ok) {
		throw new Error(getErrorMessage(data, response));
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
