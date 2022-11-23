import { Route, Routes } from 'react-router-dom';
// import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout';
import { Home } from '../Home';
import { Movies } from '../Movies';
import { MovieDetails } from '../MovieDetails';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}
