// https://www.youtube.com/watch?v=ZleShIpv5zQ was used alongside with lesson from Noroff in order to build this file.

import { renderRegisterForm } from "../renderPages/register.js";
import { renderLoginForm } from "../renderPages/login.js";
import { renderProfilePage } from "../renderPages/profile.js";
import { fetchAllPosts } from "../renderPages/feed.js";

export const routes = {
	"/": {
		requiresAuth: true,
		render: () => fetchAllPosts(),
	},
	"/login": {
		requiresAuth: false,
		guestOnly: true,
		render: () => renderLoginForm(),
	},
	"/register": {
		requiresAuth: false,
		guestOnly: true,
		render: () => renderRegisterForm(),
	},
	"/feed": {
		requiresAuth: true,
		render: () => fetchAllPosts(),
	},
	"/profile": {
		requiresAuth: true,
		render: () => renderProfilePage(),
	},
};
