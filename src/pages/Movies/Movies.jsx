import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { SearchBox } from '../../components/SearchBox';
import { Main } from './Movies.styled';
import * as API from '../../services/api';

export const Movies = () => {
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName.trim() === '') return;

    async function fetchSearchMovie() {
      try {
        const movie = await API.searchMovie(movieName);
        setMovie(movie.results);
      } catch (error) {
        toast.error(`Oops something went wrong, try again.`);
      }
    }

    fetchSearchMovie();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <Main>
      <SearchBox onSubmit={handleSubmit} />
      {movie && (
        <ul>
          {movie.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Main>
  );
};
