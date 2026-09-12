# GitHub Repository Search

## 1. What the project is

This is a modern, responsive web application built with vanilla JavaScript, HTML5, and CSS3 that allows users to query public repositories against the real GitHub REST API in real-time, featuring a sleek glassmorphism interface and comprehensive handling of network and search states.
Live Deployment: The project is live and can be viewed here: https://carmy4.github.io/github-repository-search/ 

## 2. How to run it locally

This project is a static front-end application with no build process. To run it on a fresh machine, follow these exact steps:
Clone the repository to your local machine:
git clone https://github.com/Carmy4/github-repository-search.git

Navigate into the project directory:
cd github-repository-search

Open the index.html file in any modern web browser (e.g., Chrome, Firefox, Safari). You can do this by double-clicking the file in your file explorer, or by dragging and dropping it into a browser tab.
(Note: There are no npm install, package management, or build commands required).

## 3. How to use it

The shortest path to seeing the app work:
1. Type a keyword related to the software you are looking for (e.g., `react`, `vue`, `machine-learning`) into the search input box.
2. Click the search icon button or press **Enter** on your keyboard.
3. View the live results populated dynamically in the list below.
4. **Testing the 3 application states (without code changes):**
   - **Loading State:** Triggered automatically right after submitting a search; displays a searching message.
   - **Empty Results State:** Search for a completely random, non-existent string of characters (e.g., `asdfghjklqwerty123456`). The app will successfully fetch from the API and display a clean message stating that no repositories matched.
   - **Error State:** Disconnect your computer from the internet and attempt a search. The fetch request will fail, triggering the error message instructing you to check your connection.

## 4. Environment Variables

This project requires NO environment variables. There is no .env.example file to copy, and no API keys, secrets, or backend configuration are needed. It uses the public unauthenticated GitHub REST API directly in the browser.

## 5. Known Limits (What it does NOT do)

- **No Pagination:** The app displays only the initial batch of repositories returned by the public API response and does not load subsequent pages of results.
- **No Detailed View:** Clicking a repository item in the list does not open a detailed repository view or external link; it currently serves as a static text list of matching repository names.
- **API Rate Limiting:** Because this application uses the unauthenticated GitHub REST API search endpoint, it is subject to GitHub's strict rate limits (typically 10 requests per minute). Exceeding this limit will temporarily trigger the error state until the rate limit resets.
- **No Persistent Storage:** Search queries and results are transient and are not saved to local storage; refreshing the page resets the application state.

## 6. Technical Decisions (Glassmorphism & Contrast Design)

- **The Challenge:** Standard glassmorphism implementations often fail because if the background is too uniform or too bright, the frosted glass container completely blends in and loses its transparency effect.
- **Alternative Considered:** Using a solid flat background color or a plain white box container. This was rejected because it lacks visual depth and modern aesthetic standards.
- **The Accepted Decision:** Implemented a subtle radial gradient on the `body` (`radial-gradient(circle at top, ...)`), combined with a semi-transparent container (`background: rgba(255, 255, 255, 0.35)`), a `backdrop-filter: blur(12px)`, and a dual `box-shadow` that includes both a soft drop shadow and a delicate white highlight/glow.
- **The Benefit:** The container stands out cleanly with a realistic frosted-glass look, ensuring perfect readability and a cohesive dusty-pink theme matching the buttons and lists.

## 7. Accessibility & UI Considerations

- **Visual Focus:** Interactive elements (such as the search input and submit button) feature customized, clear focus states for keyboard users.
- **Distinct State Elements:** The loading, error, and empty states are separated into dedicated HTML containers (`#loading-state`, `#error-state`, `#empty-state`) controlled dynamically via CSS utility classes (`.hidden`), ensuring screen readers and reviewers can clearly distinguish between them textually and visually.
