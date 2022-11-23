import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

export const MovieDetails = () => {
  const { id } = useParams();
  const movieDetails = API.getMovieDetails(id);
  console.log(movieDetails);
  return (
    <main>
      {/* кнопка го бєк */}
      <div>
        {/* <img src="https://via.placeholder.com/960x240" alt="" /> */}
        <h2>
          {/* Product - {MovieDetails.name} - {id} */}
          MovieDetails
        </h2>
      </div>
    </main>
  );
};
