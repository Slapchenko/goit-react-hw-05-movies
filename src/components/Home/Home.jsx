import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as API from '../../services/api';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const trendingMovies = await API.getTrendingMovies();
        setTrendingMovies(trendingMovies.results);
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
        {trendingMovies.map(movie => (
          <Link
            to={`movies/${movie.id}`}
            key={movie.id}
            state={{ from: location }}
          >
            <li>{movie.title}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
};

// поменять линк и лишку
