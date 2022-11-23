import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import * as API from '../../services/api';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await API.getMovieDetails(id);
        console.log(movieDetails);
        setMovieDetails(movieDetails);
      } catch (error) {
        // toast.error(`Oops something went wrong, try again.`);
      }
    }
    fetchMovieDetails();
  }, [id]);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt=""
          width={200}
        />
        <div>
          <h2>{movieDetails.title}</h2>
          <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p></p>
        </div>
      </div>
    </main>
  );
};

// TODO: add alt
// кнопка назадад

/* <div>
  картинка - backdrop_path
  название фильма - title
  оценка пользователей - vote_average
  обзор - overview
  жанры - overview
</div> */
