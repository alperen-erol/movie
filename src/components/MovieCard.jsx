import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
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
      <div className="moviecard-container">
        <div className="overview-container">
          <h3>{title} </h3>
          <h5 className="moviecard-overview">{overview}</h5>
        </div>
        <img
          className="moviecard-image"
          src={IMG_API + poster_path}
          alt="movie-image"
        />
        <div className="moviecard-body">
          <h4 className="moviecard-title">{title} </h4>
            <div className="votecontainer">
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
