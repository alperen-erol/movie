import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const Main = () => {
  const { movies, loading, getMovies } = useContext(MovieContext);
  const { currentUser } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    getMovies(SEARCH_API + searchTerm);
  };
  return (
    <>
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search"
          placeholder="Type to Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="icon" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

      <div className=" d-flex  justify-content-center flex-wrap maincontainer">
        {loading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
