import { isAuthenticated } from "../api/auth.js";
import { routes } from "./routes.js";

export function handleRoute(
	pathname = window.location.pathname,
) {
	const route = routes[pathname] || routes["/"];
	const loggedIn = isAuthenticated();
	if (route.requiresAuth && !loggedIn) {
		window.history.replaceState({}, "", "/login");
		return routes["/login"].render();
	}
	if (route.guestOnly && loggedIn) {
		window.history.replaceState({}, "", "/feed");
		return routes["/feed"].render();
	}
	return route.render();
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
		this.contentElement.innerHTML = await handleRoute(path);

		const renderedPath = window.location.pathname;
		if (typeof this.onAfterRender === "function") {
			this.onAfterRender(renderedPath);
		}
	}
}
