import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout';
import { Home } from '../Home';
import { Movies } from '../Movies';
import { MovieDetails } from '../MovieDetails';
import { Cast } from '../Cast';
import { Reviews } from '../Reviews';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
