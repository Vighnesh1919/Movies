import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  loading: false,
  error: null
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.loading = false; // Once movies are loaded, set loading to false
    },
    setLoading: (state) => {
      state.loading = true; // Set loading to true when fetching starts
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false; // Set loading to false when an error occurs
    }
  }
});

// Export actions to use in your component
export const { setMovies, setLoading, setError } = moviesSlice.actions;

// Export the reducer to be used in the store
export default moviesSlice.reducer;
