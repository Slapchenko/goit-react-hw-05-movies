import { useSearchParams } from "react-router-dom";
// import { ProductList } from "../components/ProductList";
import { SearchBox } from '../SearchBox';
import * as API from '../../services/api';
import { useState, useEffect } from 'react';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") ?? "";
  
    useEffect(() => {
    async function fetchSearchMovie() {
      try {
        const movie = await API.searchMovie(movieName);
        setSearchParams(movie);
      } catch (error) {
        // toast.error(`Oops something went wrong, try again.`);
      }
    }
    fetchSearchMovie();
  }, []);
  
    const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };
  
  // const products = getProducts();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get("name") ?? "";
  
  return (
    <>
      <main>
        <SearchBox />
      </main>
    </>
  );
};
