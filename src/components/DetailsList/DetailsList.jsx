import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./DetailsList.css";

function DetailsList() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const genres = useSelector((store) => store.genres);
  const movieId = useSelector((store) => store.movieId);
  const movie = useSelector((store) => store.movieDetails);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIE_BY_ID", payload: movieId });
  }, []);

  // GET genres by ID

  const backClick = () => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <>
      <h1>{movie[0].title}</h1>
      <div>
        <img src={movie[0].poster} />
      </div>
      <div>
        <p>{movie[0].description}</p>
      </div>
      <button onClicke={backClick}>Back to Movies</button>
    </>
  );
}

export default DetailsList;
