import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setLoading, setError } from '../features/moviesSlice';
import '../index.css'; 
import '../App.css';

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(setLoading());
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        const data = await response.json();
        console.log('Movies data fetched:', data); // Log the fetched data

        if (data && Array.isArray(data)) {
          dispatch(setMovies(data)); // dispatch to Redux state if the data is an array
        } else {
          dispatch(setError('Invalid data format received'));
        }
      } catch (error) {
        dispatch(setError('Failed to fetch movies'));
        console.error('Error fetching movies:', error);  // the error
      }
    };

    fetchMovies();
  }, [dispatch]);

  if (loading) return <div className="text-center text-lg text-gray-700">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

 
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Movie Database</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl">
              <img
                src={movie.image}
                alt={movie.movie}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{movie.movie}</h3>
                <p className="text-gray-600">Rating: {movie.rating}</p>
                <a
                  href={movie.imdb_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  View on IMDb
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-lg text-gray-700">No movies available</div>
        )}
      </div>
      
    </div>
    
  );
  
};

export default Movies;
