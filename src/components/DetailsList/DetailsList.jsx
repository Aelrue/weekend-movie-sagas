import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./DetailsList.css";

function DetailsList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const movie = useSelector((store) => store.movieDetails);
  const genre = useSelector((store) => store.genres);

  // get details about exact movie
  useEffect(() => {
    // console.log("Here's the ID", id);
    dispatch({ type: "FETCH_MOVIE_BY_ID", payload: { id } });
  }, []);

  return (
    <>
      <h1>{movie.title}</h1>

      <img src={movie.poster} />

      <p>{movie.description}</p>
      <div className="genres">
        <h2>Genre(s):</h2>
        {genre.map((genre) => {
          return <div key={genre.id}> {genre.name} </div>;
        })}
      </div>

      <button onClick={() => history.push("/")}>Back to Movies</button>
    </>
  );
}

export default DetailsList;
