import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../services/api';

export const Cast = () => {
  const [movieCredits, setMovieCredits] = useState(null);
  const { id } = useParams();
  // const location = useLocation();

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        const movieCredits = await API.getMovieCredits(id);
        setMovieCredits(movieCredits);
      } catch (error) {
        // toast.error(`Oops something went wrong, try again.`);
      }
    }
    fetchMovieCredits();
  }, [id]);

  if (!movieCredits) {
    return null;
  }

  return (
    <section>
      <ul>
        {movieCredits.cast.map(cast => (
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt=""
              width={100}
            />
            <p>{cast.name}</p>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

// ! alt
// заглушка если нету фото

