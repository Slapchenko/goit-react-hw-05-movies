import { Route, Routes } from 'react-router-dom';
// import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout'
import { Home } from '../Home';
// import * as API from '../../services/api';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

// export const App = () => {
//   async function fetchImages() {
//     try {
//       const movies = await API.getMovieCredits(272);
//       console.log(movies);
//     } catch (error) {
//       // toast.error(`Oops something went wrong, try again.`);
//     }
//   }

//   fetchImages();

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
