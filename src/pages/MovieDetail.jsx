import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const MovieDetail = () => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const [movieDetails, setMovieDetails] = useState("");
  const { id } = useParams();
  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetails;
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const navigate = useNavigate();
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <>
      <div className="moviecard-container-detail">
        <img
          className="moviecard-image-detail"
          src={poster_path ? IMG_API + poster_path : defaultImage}
          alt="movie-image"
        />
        <div className="moviecard-body-detail">
          
          <div className="overview-container-detail">
            <h3>{title} </h3>
            <h5 className="moviecard-overview">{overview}</h5>
          </div>
          <div className="rightdivbottom">
            <ul>
              <li>Release Date:  {release_date}</li>
              <li>Total Votes:  {vote_count}</li>
              <li>Rate:  {vote_average} </li>
            </ul>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
