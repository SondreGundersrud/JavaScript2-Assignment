// Handles login, register, etc.

import { post } from "./apiClient.js";

const LOGIN_ENDPOINT = "/auth/login";

export async function loginUser(credentials) {
	try {
		// Our apiClient will handle the POST request
		const response = await post(LOGIN_ENDPOINT, credentials);

		// The response.data from Noroff contains the profile and accessToken
		const { accessToken, ...profile } = response.data;

		if (accessToken) {
			// Save token and profile to localStorage
			localStorage.setItem("accessToken", accessToken);
			localStorage.setItem("profile", JSON.stringify(profile));
			return profile;
		} else {
			throw new Error(
				"Login successful, but no access token received.",
			);
		}
	} catch (error) {
		// The apiClient already threw a detailed error, so we just re-throw it
		throw error;
	}
}

/**
 * Logs out the current user by clearing storage.
 */
export function logoutUser() {
	localStorage.removeItem("accessToken");
	localStorage.removeItem("profile");
	console.log("User has been logged out.");
}

const options = {
	headers: {
		Authorization: `Bearer ${accessToken}`,
		"X-Noroff-API-Key": apiKey.data.key,
	},
};

const response = await fetch(
	`${NOROFF_API_URL}/social/posts`,
	options,
);
const data = await response.json();
