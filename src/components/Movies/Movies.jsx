import { Link, useSearchParams, useLocation } from 'react-router-dom';
// import { ProductList } from "../components/ProductList";
import { SearchBox } from '../SearchBox';
import * as API from '../../services/api';

import { useState, useEffect } from 'react';

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
        console.log(movie);
      } catch (error) {
        // toast.error(`Oops something went wrong, try again.`);
      }
    }
    fetchSearchMovie();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements.query.value);
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  // const updateQueryString = query => {
  //   console.log('updateQueryString', query);
  //   const nextParams = query !== '' ? { query } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <main>
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
    </main>
  );
};

// const products = getProducts();
// const [searchParams, setSearchParams] = useSearchParams();
// const productName = searchParams.get("name") ?? "";

// import { useSearchParams } from 'react-router-dom';
// // import { ProductList } from "../components/ProductList";
// import { SearchBox } from '../SearchBox';
// import * as API from '../../services/api';
// import { useEffect } from 'react';
// // import { useState, useEffect } from 'react';

// export const Movies = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieName = searchParams.get('name') ?? '';

//   useEffect(() => {
//     async function fetchSearchMovie() {
//       try {
//         const movie = await API.searchMovie(movieName);
//         setSearchParams(movie);
//       } catch (error) {
//         // toast.error(`Oops something went wrong, try again.`);
//       }
//     }
//     fetchSearchMovie();
//   }, [movieName, setSearchParams]);

//   const updateQueryString = name => {
//     const nextParams = name !== '' ? { name } : {};
//     setSearchParams(nextParams);
//   };

//   // const products = getProducts();
//   // const [searchParams, setSearchParams] = useSearchParams();
//   // const productName = searchParams.get("name") ?? "";

//   return (
//     <>
//       <main>
//         <SearchBox onChange={updateQueryString} />
//       </main>
//     </>
//   );
// };
