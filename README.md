# GitHub Repository Search

## What it is
GitHub Repository Search is a modern, lightweight web application built with vanilla JavaScript, HTML5, and CSS3. It allows users to query public repositories against the real GitHub REST API in real-time, featuring a responsive glassmorphism interface and comprehensive handling of network and search states.

## How to run it
1. Download or clone this repository to your local machine.
2. Navigate to the project directory.
3. Open the `index.html` file directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari) by double-clicking it or dragging it into an open browser window. No server setup, Node.js installations, or environment variables are required.

## How to use it
1. Type a keyword related to the software you are looking for (e.g., `react`, `vue`, `machine-learning`) into the search input box.
2. Click the search icon button or press **Enter** on your keyboard.
3. View the live results populated dynamically in the list below. 
4. **Testing the 3 application states (without code changes):**
   - **Loading State:** Triggered automatically right after submitting a search; displays a searching message.
   - **Empty Results State:** Search for a completely random, non-existent string of characters (e.g., `asdfghjklqwerty123456`). The app will successfully fetch from the API and display a clean message stating that no repositories matched.
   - **Error State:** Disconnect your computer from the internet and attempt a search. The fetch request will fail, triggering the error message instructing you to check your connection.

## What it does not do (Known Limits & Omissions)
To be transparent about the scope of this application, the following features are intentionally omitted or limited:
- **No Pagination:** The app displays only the initial batch of repositories returned by the public API response and does not load subsequent pages of results.
- **No Detailed View:** Clicking a repository item in the list does not open a detailed repository view or external link; it currently serves as a static text list of matching repository names.
- **API Rate Limiting:** Because this application uses the unauthenticated GitHub REST API search endpoint, it is subject to GitHub's strict rate limits (typically 10 requests per minute). Exceeding this limit will temporarily trigger the error state until the rate limit resets.
- **No Persistent Storage:** Search queries and results are transient and are not saved to local storage; refreshing the page resets the application state.
