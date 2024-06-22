import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const navigate = useNavigate();
  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  const { currentUser } = useContext(AuthContext);

  // Before I wrote the function below, the user would go to the details tab no matter the login status, which caused a loop that the user could not get out of. Now the status is checked before directing the user to the details tab.

  let detailnavigate = () => {
    if (currentUser) {
      navigate("/details/" + id);
    } else {
      navigate("/login/");
    }
  };

  return (
    <>
      <div className="moviecard-container">
        <div className="overview-container">
          <h3>{title} </h3>
          <h5 className="moviecard-overview">{overview}</h5>
        </div>
        <img
          className="moviecard-image"
          src={poster_path ? IMG_API + poster_path : defaultImage}
          alt="movie-image"
        />
        <div className="moviecard-body">
          <h4 className="moviecard-title">{title} </h4>
          <div className="votecontainer">
            <button onClick={detailnavigate}>See Details</button>
            <span className={`tag ${getVoteClass(vote_average)}`}>
              {vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
