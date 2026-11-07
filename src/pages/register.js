const userData = {
	name: "my_username",
	email: "first.last@stud.noroff.no",
	password: "UzI1NiIsInR5cCI",
	bio: "This is my profile bio",
	avatar: {
		url: "https://img.service.com/avatar.jpg",
		alt: "My avatar alt text",
	},
	banner: {
		url: "https://img.service.com/banner.jpg",
		alt: "My banner alt text",
	},
	venueManager: true,
};

// Restrictions
// The name value must not contain punctuation symbols apart from underscore (_).
// The email value must be a valid stud.noroff.no email address.
// The password value must be at least 8 characters.
// If set, the bio value must be less than 160 characters.
// If set, the avatar.url value must be a valid and accessible URL.
// If set, the avatar.alt value must be less than 120 characters. Defaults to empty string (""). Requires avatar.url to be set.
// If set, the banner.url value must be a valid and accessible URL.
// If set, the banner.alt value must be less than 120 characters. Defaults to empty string (""). Requires banner.url to be set.

// Prop	Type
// name
// string

// email
// string

// password
// string

// bio
// string?

// avatar
// object?

// banner
// object?

// venueManager
// boolean
