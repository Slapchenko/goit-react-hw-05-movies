import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../services/api';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { id } = useParams();
  
 useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const movieCredits = await API.getMovieReviews(id);
        setMovieReviews(movieCredits);
      } catch (error) {
        // toast.error(`Oops something went wrong, try again.`);
      }
    }
    fetchMovieReviews();
  }, [id]);

  if (!movieReviews) {
    return null;
  }
  return (
    <main>
      <div>We don`t have any reviews for this movie</div>
    </main>
  );
};
