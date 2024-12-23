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

### How to Run:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vighnesh1919/Movies.git
### How it works:
1. The app sends a request to the API to fetch movie data.
2. The data is stored in the Redux store once successfully fetched.
3. The movies are displayed on the page in a responsive, visually appealing grid layout.
4. The app handles loading and error states to provide a smooth user experience.

The app is styled using Tailwind CSS, ensuring a modern, responsive design.

### How to Run:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vighnesh1919/Movies.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Movies
   ```

3. **Install the dependencies**:
   Since this project uses Vite as a bundler, run the following command to install the required packages:
   ```bash
   npm install
   ```

4. **Run the development server**:
   Once the dependencies are installed, you can start the development server:
   ```bash
   npm run dev
   ```

5. **Open the app in your browser**:
   After running the above command, the app should be accessible in your browser at:
   ```
   http://localhost:5173
   ```

Now, you can see the movie database in action with data fetched from the API!

### Dependencies:
- React
- Redux
- Vite
- Tailwind CSS
```

This version of the `README.md` includes the necessary steps for setting up and running your app locally using Vite. Feel free to copy this into your `README.md` file for better documentation!
