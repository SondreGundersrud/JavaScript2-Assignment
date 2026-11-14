function notFoundView() {
	return `<h2>404 – Page not found</h2>`;
}

export class Router {
	constructor(routes, contentElement) {
		this.routes = routes;
		this.contentElement = contentElement;
		this.onAfterRender = this.onAfterRender;

		// Listen for back/forward navigation
		window.addEventListener("popstate", () => {
			this.resolveRoute();
		});

		document.addEventListener("click", (event) => {
			const link = event.target.closest("a[href^='/']");
			if (!link) return;

			event.preventDefault();
			this.navigate(link.getAttribute("href"));
		});
	}

	// Called when a user clicks a link
	navigate(path) {
		history.pushState({}, "", path);
		this.resolveRoute();
	}

	// Find the correct view and render it
	async resolveRoute() {
		const path = window.location.pathname;
		const view = this.routes[path] || notFoundView;
		// Use 'await' to wait for the view function to finish
		// (e.g., finish fetching data) before rendering.
		this.contentElement.innerHTML = await view();
		if (typeof this.onAfterRender === "function") {
			this.onAfterRender(path);
		}
	}
}
