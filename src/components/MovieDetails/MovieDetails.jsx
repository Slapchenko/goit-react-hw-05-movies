import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await API.getMovieDetails(id);
        console.log(movieDetails)
        setMovieDetails(movieDetails);
      } catch (error) {
        // toast.error(`Oops something went wrong, try again.`);
      }
    }
    fetchMovieDetails();
  }, [id]);

  const BASE_IMAGE = `https://image.tmdb.org/t/p/original`;

  
  return (
    <main>
      {/* кнопка го бєк */}
      <div>
        {/* <img src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg" alt="" width={200}/>  */}
        <img src="${BASE_IMAGE}${movieDetails.backdrop_path}" alt="" />
        <p>{`${movieDetails.title}`}</p>
        <h2>
          {/* Product - {MovieDetails.name} - {id} */}
          MovieDetails
        </h2>
      </div>
    </main>
  );
};
