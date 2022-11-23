import { useState, useEffect } from 'react';
import * as API from '../../services/api';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const trendingMovies = await API.getTrendingMovies();
        setTrendingMovies(trendingMovies.results);
        console.log(trendingMovies.results);
      } catch (error) {
        // toast.error(`Oops something went wrong, try again.`);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => (<li>{movie.title ? movie.title : 'not fuund'}</li>))}
      </ul>
    </main>
  );
};
