// Handles login, register, etc.
import * as api from "./api.js";

const userData = {
	name: "my_username", // Required
	email: "first.last@stud.noroff.no", // Required
	password: "UzI1NiIsInR5cCI", // Required
	bio: "This is my profile bio", // Optional
	avatar: {
		url: "https://img.service.com/avatar.jpg", // Optional
		alt: "My avatar alt text", // Optional
	},
	banner: {
		url: "https://img.service.com/banner.jpg", // Optional
		alt: "My banner alt text", // Optional
	},
	venueManager: true, // Optional
};
