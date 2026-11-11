// const view = this.routes[path] || notFoundView;

// export class Router {
// 	constructor(routes, contentElement) {
// 		this.routes = routes;
// 		this.contentElement = contentElement;

// 		// Listen for back/forward navigation
// 		window.addEventListener("popstate", () =>
// 			this.resolveRoute(),
// 		);
// 	}

// 	// Called when a user clicks a link
// 	navigate(path) {
// 		history.pushState({}, "", path);
// 		this.resolveRoute();
// 	}

// 	// Find the correct view and render it
// 	async resolveRoute() {
// 		const path = window.location.pathname;
// 		const view = this.routes[path] || notFoundView;

// 		// Use 'await' to wait for the view function to finish
// 		// (e.g., finish fetching data) before rendering.
// 		this.contentElement.innerHTML = await view();
// 	}
// }
