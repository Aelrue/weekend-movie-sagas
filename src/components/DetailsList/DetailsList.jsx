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

  useEffect(() => {
    dispatch({ type: "FETCH_GENRES", payload: genre.data });
  });

  return (
    <>
      <h1>{movie.title}</h1>
      <div>
        <img src={movie.poster} />

        <p>{movie.description}</p>
        <p>{movie.genre}</p>
      </div>
      {/* return(
      <div>
        {movie.map((genre) => {
          {
            genre.name;
          }
        })}
        )
      </div> */}
      <button onClick={() => history.push("/")}>Back to Movies</button>
    </>
  );
}

export default DetailsList;
