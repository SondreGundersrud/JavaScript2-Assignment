AI usage:

October 5th, 2026:
Asked ChatGPT to make a gameplan for how to structure the assignment most efficiently, and come up with a recommendation on how the file structure should look like, given that there are way more folders that I have never seen before etc. This has given me a better understanding on what types of folders that are created when first launching a vite project, and I've learned what I can ignore/delete.

November 4th, 2026:
Asked for guide on what to type in terminal in order to scaffold the project according to the requirements of the assignment. I was about to default to Typescript, but was reminded that the assignment stated JavaScript.

November 5th, 2026:
Asked Gemini:
When to use defer and when to use async in head.
What the different folders do, and what can be deleted.
Asked to explain what ES6 is and how it worked.

November 9th, 2026:
Asked Gemini if it would be beneficial to add menu buttons as a <nav> or <ul>. Learned that it is better to use <ul> rather than buttons for this type of navigation.
Asked for feedback on the structure. I have been unsure whether I liked my previous setup, and tried a new approach with fewer folders.
Gemini also commented that it wiser to use "const API_SOCIAL = `${BASE_URL}/social`;" instead of the base url + new url part. Will take this into consideration.

November 12th, 2026:
Asked Gemini how to implement required restrictions on email, username and that sort.
Asked for debugging of the registerForm, as I was getting an error message on localhost page, telling me there was JS syntax error. Error was due to spelling was wrong, and the registerFromContainer was never decleared.
ASked for debugging of profile, turns out I have duped the displayUSerProfile(id) 2 times, and was missing a variable.
Asked for help to explain how to route properly based on what Noroff taught me, and how to controll that the user status on logged in or not.

November 13th, 2026:
Asked Gemini to explain why I was not making any progress so I could try another approach. Had some help debugging different code in routes.js and Router.js, but I'm still not being able to properly import these functions and files to the main.js. Will have to look into this tomorrow. In theory, thing should start to render but alas.

November 14th, 2026:
Asked Gemini to help me understand how to implement and secure sessions with cookies, HttpOnly and Secure. Information provided by Noroff and MDN Web Docs was not enough for me to understand it. It argued that the api-server is secure as is, and said localStorage would suffice. AI has also helped me with feedback on my approach to fix my issues with auth/login/reg etc.
Gemini has pointed out a mistake on the routes.js file, and have informed me of a infinete redirect loop, that I was not aware of. I have been struggling to figure out why the localhost window always showed error messages. Learned that I need to be conscious of window.location.href = "/login" inside a /login route. It would also reload pages instead of switching which is not very SPA like. I also got feedback on having put localStorage in this file, which I have not used elsewhere. This is addressed. AI has pointed out that I was missing a prevent.Default in the Router.js file.

November 15th, 2026:
Asked Gemini to look at the route file I have created which is a mix of lessons from Noroff and a YouTube video. Learned that I would experience syntax error and that the URLs would not automatically change during a redirect. Learned that `routes.js` works best as a clean configuration map (using metadata flags like `requiresAuth` and `guestOnly`), while the actual authentication check and redirect logic should live centrally inside `Router.js` before rendering a view. Simply rendering the login view when an unauthenticated user visits a protected path leaves the old URL in the address bar; using `window.history.replaceState({}, "", "/login")` keeps the browser URL aligned with the rendered view.
