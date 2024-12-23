# Movies

This is a React-based movie database application that fetches movie data from a public API and displays it on the web. The app uses Redux to manage the state of the application, handling loading, errors, and the movie data itself.

### Features:
- Fetches movie data from an API (`https://dummyapi.online/api/movies`).
- Uses Redux for state management to handle movies, loading state, and errors.
- Displays the movie data in a responsive grid layout.
- Each movie entry shows the title, rating, and an image, with a link to view more details on IMDb.

### How it works:
1. The app sends a request to the API to fetch movie data.
2. The data is stored in the Redux store once successfully fetched.
3. The movies are displayed on the page in a responsive, visually appealing grid layout.
4. The app handles loading and error states to provide a smooth user experience.

The app is styled using Tailwind CSS, ensuring a modern, responsive design.
