import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  //useEffect runs after first render and after every update
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  // dispatch will send actions to the redux store
  const clickToDetails = (movieId) => {
    console.log("clickToDetails clicked");
    dispatch({
      type: "SET_ID",
      payload: movieId,
    });
    dispatch({
      type: "FETCH_GENRES",
      payload: movieId,
    });
    // console.log("MOVIE ID:", movieId);
    history.push(`/movie/${movieId}`);
  };

  // will render details on the DOM
  return (
    <main>
      <h1>Now Playing</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                src={movie.poster}
                alt={movie.title}
                onClick={() => clickToDetails(movie.id)}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
